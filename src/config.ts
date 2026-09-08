// ─────────────────────────────────────────────────────────────────────────────
// Business config — single source of truth for contact details, nav structure,
// and SEO facts used across the site. Update here; every page follows.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Trinity Build Co.",
  legalName: "Trinity Build Co LLC",
  tagline: "Building Excellence. Delivering Trust.",
  description:
    "Phoenix-based commercial general contractor delivering ground-up construction, tenant improvements, and design-build projects across Arizona.",
  url: "https://trinitybuildco.com",

  // Currently published business details. Confirm each item in docs/seo/client-fact-and-project-intake.md
  // before expanding it in copy, profiles, or structured data.
  phone: "602.708.9986",
  phoneHref: "tel:6027089986",
  email: "slade@trinitybuildco.com",
  // Applications route to the main company inbox until a dedicated careers address exists.
  careersEmail: "slade@trinitybuildco.com",
  domainLabel: "trinitybuildco.com",
  rocLicenseNumber: "365726",
  rocClassification: "KB-1 Dual Building Contractor",
  rocLicense: "Arizona ROC #365726 · KB-1 Dual Building Contractor",
  rocLicenseUrl:
    "https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000N0QzlAAF",
  legalDisclosure:
    "Trinity Build Co LLC · Arizona ROC #365726 · KB-1 Dual Building Contractor",

  // Do not publish a street address until Trinity Build Co LLC has a legitimate,
  // client-approved operating location that can be represented consistently.
  areaServed: ["Phoenix, AZ", "Scottsdale, AZ", "Arizona"],

  // Add only client-controlled, approved company profiles.
  sameAs: [] as string[],

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
