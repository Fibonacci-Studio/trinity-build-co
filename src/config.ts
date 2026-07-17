// ─────────────────────────────────────────────────────────────────────────────
// Business config — single source of truth for contact details, nav structure,
// and SEO facts used across the site. Update here; every page follows.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Trinity Build Co.",
  legalName: "Trinity Build Co.",
  tagline: "Building Excellence. Delivering Trust.",
  description:
    "Phoenix-based commercial general contractor delivering ground-up construction, tenant improvements, and design-build projects across Arizona.",
  url: "https://trinity-build-co.vercel.app",

  // Real business details, shared with Trinity Homes AZ (same ownership).
  phone: "602.708.9986",
  phoneHref: "tel:6027089986",
  email: "info@trinityhomesaz.com",
  // Applications route to the main inbox until a dedicated careers address exists.
  careersEmail: "info@trinityhomesaz.com",
  domainLabel: "trinitybuildco.com",
  rocLicense: "Arizona ROC License #343291",

  address: {
    street: "15455 N Greenway Hayden Loop, Ste C19",
    locality: "Scottsdale",
    region: "AZ",
    postalCode: "85260",
    country: "US",
  },
  addressLabel: "15455 N Greenway Hayden Loop, Ste C19, Scottsdale, AZ 85260",
  areaServed: ["Phoenix, AZ", "Scottsdale, AZ", "Arizona"],

  // The contact form posts here.
  formEndpoint: "/api/contact",
};

// Primary nav — order and active-state keys mirror the design's SiteNav.
export const navLinks = [
  { label: "About", href: "/about", key: "about" },
  { label: "Leadership", href: "/leadership", key: "leadership" },
  { label: "Services", href: "/services", key: "services" },
  { label: "Process", href: "/process", key: "process" },
  { label: "Industries", href: "/industries", key: "industries" },
  { label: "Why Trinity", href: "/why-trinity", key: "why" },
  { label: "Portfolio", href: "/portfolio", key: "portfolio" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"] | "home" | "none";

export const footerColumns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Why Trinity", href: "/why-trinity" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "The Trinity Way", href: "/process" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Safety & Quality", href: "/safety" },
    ],
  },
];

// Project-type options for the contact form select.
export const projectTypes = [
  { value: "ground-up", label: "Ground-Up Construction" },
  { value: "ti", label: "Tenant Improvement" },
  { value: "design-build", label: "Design-Build" },
  { value: "cm", label: "Construction Management" },
  { value: "precon", label: "Preconstruction Services" },
  { value: "other", label: "Other" },
];
