/** Site-scoped public ingestion only; never use a Hermaion user or provider secret. */
const SITE_ORIGIN = "https://trinitybuildco.com";
const CAPTURE_ORIGIN = "https://hermaion.vercel.app";
const TIMEOUT_MS = 3_000;
const SESSION_KEY = "__trinity_hermaion_session";
const PROJECT_TYPES = new Set(["", "ground-up", "ti", "design-build", "cm", "precon", "other"]);

type CaptureContext = {
  siteKey: unknown;
  pageUrl: string;
  referrer?: string;
};

type DeliveryResult = { httpOk: boolean; ok?: boolean; ignored?: boolean };
type CaptureRequest = typeof fetch;

function pageContext(context: CaptureContext) {
  if (typeof context.siteKey !== "string" || !/^[\x21-\x7e]{16,512}$/.test(context.siteKey)) return null;
  try {
    const page = new URL(context.pageUrl);
    if (page.origin !== SITE_ORIGIN || page.username || page.password) return null;
    let referrer = "";
    if (context.referrer) {
      try {
        const source = new URL(context.referrer);
        if (source.protocol === "https:" && !source.username && !source.password) referrer = source.origin;
      } catch { /* Malformed attribution never blocks an inquiry. */ }
    }
    return { key: context.siteKey, url: `${SITE_ORIGIN}${page.pathname}`, path: page.pathname, referrer };
  } catch {
    return null;
  }
}

async function postCapture(
  path: "/ingest" | "/track-pageview",
  key: string,
  body: Record<string, string>,
  request: CaptureRequest,
): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await request(`${CAPTURE_ORIGIN}/api/public${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Hermaion-Key": key },
      body: JSON.stringify(body),
      mode: "cors",
      credentials: "omit",
      redirect: "error",
      referrerPolicy: "no-referrer",
      keepalive: true,
      signal: controller.signal,
    });
    // Do not parse or log capture responses or visitor data.
    void response.body?.cancel().catch(() => undefined);
    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

/** Called only after the existing contact endpoint confirms email delivery. */
export async function captureDeliveredInquiry(
  payload: Record<string, unknown>,
  delivery: DeliveryResult,
  context: CaptureContext,
  request: CaptureRequest = fetch,
): Promise<boolean> {
  if (delivery.httpOk !== true || delivery.ok !== true || delivery.ignored === true) return false;
  if (typeof payload["bot-field"] === "string" && payload["bot-field"].trim()) return false;
  const page = pageContext(context);
  if (!page) return false;

  // This closed list excludes honeypots, credentials, arbitrary hidden fields and files.
  const limits = { name: 100, company: 120, email: 160, phone: 40, type: 40, message: 4000 };
  const fields: Record<string, string> = {};
  for (const [field, maximum] of Object.entries(limits)) {
    const value = payload[field];
    if (value !== undefined && typeof value !== "string") return false;
    const text = typeof value === "string" ? value.trim() : "";
    if (text.length > maximum) return false;
    fields[field] = text;
  }
  if (!fields.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return false;
  if (!PROJECT_TYPES.has(fields.type)) return false;
  return postCapture("/ingest", page.key, {
    ...fields,
    _page_url: page.url,
    _referrer: page.referrer,
  }, request);
}

/** Optional, once per full document load. No query, hash, title, UTM or inquiry fields. */
export async function captureReducedPageview(
  context: CaptureContext,
  options: { enabled: boolean; storage?: Pick<Storage, "getItem" | "setItem">; random?: Pick<Crypto, "getRandomValues"> },
  request: CaptureRequest = fetch,
): Promise<boolean> {
  if (options.enabled !== true) return false;
  const page = pageContext(context);
  if (!page) return false;
  let token: string | null = null;
  try {
    token = options.storage?.getItem(SESSION_KEY) ?? null;
    if (!token || !/^[a-f0-9]{32}$/.test(token)) {
      const bytes = new Uint8Array(16);
      (options.random ?? globalThis.crypto).getRandomValues(bytes);
      token = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
      options.storage?.setItem(SESSION_KEY, token);
    }
  } catch {
    // Disabled storage/crypto does not prevent reading or using the client site.
    token = null;
  }
  return postCapture("/track-pageview", page.key, {
    url: page.url,
    path: page.path,
    referer: page.referrer,
    ...(token ? { session_token: token } : {}),
  }, request);
}
