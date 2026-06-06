// Central site configuration — single source of truth for brand + contact info.
// Update contact details here and they propagate across the whole site.

export const site = {
  name: "Wield Developers",
  legalName: "Wield Developers (Pvt.) Ltd.",
  tagline: "Engineering a Smarter, Stronger, Sustainable Future",
  description:
    "Wield Developers (Pvt.) Ltd. is a Rawalpindi-based engineering, construction and electrical services company delivering transformer manufacturing, CT & PT production, civil infrastructure, renewable energy and specialised engineering solutions across Pakistan since 2013.",
  foundedYear: 2013,
  url: "https://www.wielddevelopers.com",
  contact: {
    email: "admin@wielddevelopers.com",
    phone: "+92 51 8743257",
    phoneHref: "+92518743257",
    mobile: "+92 312 8865555",
    mobileHref: "+923128865555",
    fax: "+92 51 8743257",
    address: "761, Lane 7-E, Near Joyland, Gulistan Colony, Rawalpindi, Pakistan",
  },
  social: {
    // Client to provide the live Facebook page link — used for the Gallery source.
    facebook: "https://www.facebook.com/",
  },
  registrations: ["PEC", "SECP", "FBR", "RCCI"],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Transformers & Electrical", href: "/transformers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
