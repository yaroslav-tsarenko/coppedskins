/**
 * Central brand identity for Coppedskins.
 * Import from here instead of hardcoding company details in components.
 *
 * The registered WILDSTONE STUDIOS LTD particulars are the single source of
 * truth and are hardcoded here on purpose — they must not vary per-deploy.
 */

const company = {
  legalName: "WILDSTONE STUDIOS LTD",
  number: "17358100",
  address: {
    line1: "Dept 6958, 196 High Road",
    line2: "Wood Green",
    city: "London",
    region: "",
    postcode: "N22 8HH",
    country: "United Kingdom",
  },
} as const;

const contactEmail = "info@coppedskins.com";

export const brand = {
  name: "coppedskins",
  displayName: "Coppedskins",
  domain: "www.coppedskins.com",
  url: "https://www.coppedskins.com",
  tagline: "Skins. Dropped daily.",
  description:
    "Coppedskins — a CS2 skins store run like a limited release. Every listing is live stock with a verified float, exterior and pattern seed, priced in the open and delivered straight to your Steam inventory as a trade offer.",
  applicationName: "Coppedskins",

  company,

  contact: {
    email: contactEmail,
    emailB2B: contactEmail,
    phone: "",
    phoneHref: "tel:",
    contactPage: "/contact",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/coppedskins/",
    instagram: "https://www.instagram.com/coppedskins/",
    twitter: "@coppedskins",
  },
} as const;

export const brandAddressLine = [
  brand.company.address.line1,
  brand.company.address.line2,
  brand.company.address.city,
  brand.company.address.region,
  brand.company.address.postcode,
  brand.company.address.country,
]
  .filter(Boolean)
  .join(", ");

export const brandLegalLine = [
  brand.company.legalName,
  `Company No. ${brand.company.number}`,
  brandAddressLine,
]
  .filter(Boolean)
  .join(" · ");
