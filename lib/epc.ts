// EPC (Engineering, Procurement & Construction) projects — a living page that
// grows over time as the client delivers new projects.
//
// HOW TO ADD A NEW EPC PROJECT:
//   1. Copy one of the objects below and give it a unique `slug` (kebab-case —
//      it becomes the URL /epc-projects/<slug>).
//   2. Fill in title, client, capacity, year, status, type, icon, summary,
//      description paragraphs and scope bullets.
//   3. Drop photos in /public/images/epc/<slug>/ and list them in `gallery`.
//      No photos yet? Leave `gallery: []` — branded placeholders render instead.
// That's it — the overview page, detail page, nav and sitemap pick it up
// automatically.

export type EpcProject = {
  slug: string;
  title: string;
  client: string;
  location?: string;
  // Headline capacity / size shown on the card (e.g. "1.4 MW").
  capacity: string;
  year: string;
  status: "Ongoing" | "Completed";
  type: "Solar" | "Wind" | "Electrical" | "Civil";
  // Lucide icon name (resolved via components/ui/Icon map).
  icon: string;
  // One-liner for the overview card.
  summary: string;
  // Full paragraphs for the detail page.
  description: string[];
  // EPC scope bullets.
  scope: string[];
  // Project photos — keep appending as the client sends more.
  gallery: { src: string; alt: string }[];
};

export const epcProjects: EpcProject[] = [
  {
    slug: "sco-1-4mw-solar",
    title: "1.4 MW On-Grid Solar System",
    client: "SCO HQ, Rawalpindi",
    location: "Rawalpindi",
    capacity: "1.4 MW",
    year: "Ongoing",
    status: "Ongoing",
    type: "Solar",
    icon: "Sun",
    summary:
      "Feasibility, design, supply, installation and commissioning of a 1.4 MW on-grid solar power system for SCO Headquarters.",
    description: [
      "A complete EPC engagement covering the full project lifecycle — from feasibility study and detailed system design to procurement, installation and grid-connected commissioning of a 1.4 MW on-grid solar power system at SCO Headquarters, Rawalpindi.",
      "Our engineering team carried out site assessment, yield analysis and structural design, followed by the supply of high-quality imported solar panels and balance-of-system components. Installation and commissioning are executed under strict HSE protocols and regulatory compliance, including grid synchronisation and performance testing.",
    ],
    scope: [
      "Feasibility study & yield analysis",
      "Detailed engineering & system design",
      "Procurement of panels & balance-of-system",
      "Structural & electrical installation",
      "Grid synchronisation & commissioning",
      "Performance testing & handover",
    ],
    gallery: [],
  },
  {
    slug: "64-signals-building-complex",
    title: "Construction & Renovation of Building Complex",
    client: "64 Signals, Mirpur",
    location: "Mirpur",
    capacity: "Building Complex",
    year: "Ongoing",
    status: "Ongoing",
    type: "Civil",
    icon: "Building2",
    summary:
      "Construction and renovation of a building complex for 64 Signals, Mirpur — delivered turnkey from structural works to finishing.",
    description: [
      "An ongoing civil construction engagement covering the construction and renovation of a building complex for 64 Signals in Mirpur. The project is delivered turnkey — from civil and structural works through to finishing — under strict quality and HSE controls.",
      "Our team manages the full scope including site works, structural construction, renovation of existing structures, MEP coordination and finishing, ensuring durable, standards-compliant facilities delivered on schedule.",
    ],
    scope: [
      "Site preparation & civil works",
      "Structural construction",
      "Renovation of existing structures",
      "MEP coordination & finishing",
      "Quality assurance & HSE compliance",
      "Project handover",
    ],
    gallery: [],
  },
  {
    slug: "joyland-prayer-area-bridge",
    title: "Construction of Prayer Area Building & Connecting Bridge",
    client: "Joyland, Rawalpindi",
    location: "Rawalpindi",
    capacity: "Prayer Area & Bridge",
    year: "Ongoing",
    status: "Ongoing",
    type: "Civil",
    icon: "Construction",
    summary:
      "Construction of a prayer area building together with a connecting bridge at Joyland, Rawalpindi.",
    description: [
      "Construction of a dedicated prayer area building together with a connecting bridge at Joyland, Rawalpindi — an ongoing civil project delivered end to end by our construction team.",
      "The scope combines building construction with structural bridge works — covering foundations, superstructure, finishing and safety installations — all executed to applicable engineering standards under rigorous HSE protocols.",
    ],
    scope: [
      "Foundation & substructure works",
      "Prayer area building construction",
      "Connecting bridge structural works",
      "Finishing & fit-out",
      "Safety & access installations",
      "Quality control & handover",
    ],
    gallery: [],
  },
  {
    slug: "sky47-ai-datacentre-material",
    title: "Supply of Construction Material for Pakistan's First AI-Ready Datacentre",
    client: "Sky 47",
    capacity: "AI Datacentre",
    year: "Ongoing",
    status: "Ongoing",
    type: "Civil",
    icon: "Cpu",
    summary:
      "Supply of construction material for Pakistan's first AI-ready datacentre, in partnership with Sky 47.",
    description: [
      "Wield Developers is supplying construction material for Pakistan's first AI-ready datacentre — a landmark project with Sky 47. This ongoing engagement supports the build-out of a next-generation, high-density computing facility.",
      "Our role covers the sourcing, procurement and timely supply of quality construction materials that meet the demanding specifications and schedule of a critical-infrastructure datacentre build, ensuring reliability and compliance throughout.",
    ],
    scope: [
      "Material specification & sourcing",
      "Procurement of quality construction materials",
      "Scheduled supply & logistics",
      "Quality verification & compliance",
      "Coordination with construction teams",
    ],
    gallery: [],
  },
];

export function getEpcProject(slug: string): EpcProject | undefined {
  return epcProjects.find((p) => p.slug === slug);
}
