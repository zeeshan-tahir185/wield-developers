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
    slug: "ma-edu-40kw-solar",
    title: "40 kW Solar Power System",
    client: "M.A-Edu Consultants, Rawalpindi",
    location: "Rawalpindi",
    capacity: "40 kW",
    year: "2024-25",
    status: "Completed",
    type: "Solar",
    icon: "Sun",
    summary:
      "Design and installation of a 40 kW solar power system, delivered turnkey for M.A-Edu Consultants.",
    description: [
      "A turnkey solar EPC project covering the design and installation of a 40 kW solar power system for M.A-Edu Consultants, Rawalpindi — completed in FY 2024-25.",
      "The scope included load assessment, system sizing and design, supply of quality solar panels and inverters, mounting structure fabrication, electrical integration and commissioning — delivering reliable, cost-efficient clean energy for the client's facility.",
    ],
    scope: [
      "Load assessment & system sizing",
      "System design & engineering",
      "Supply of panels, inverters & structures",
      "Installation & electrical integration",
      "Testing & commissioning",
    ],
    gallery: [],
  },
  {
    slug: "celmore-2-5mw-wind",
    title: "2.5 MW Wind Turbine System",
    client: "Celmore Technologies",
    capacity: "2.5 MW",
    year: "2022-23",
    status: "Completed",
    type: "Wind",
    icon: "Wind",
    summary:
      "Feasibility, design, supply, installation and commissioning of a 2.5 MW wind turbine system.",
    description: [
      "A full-cycle wind energy EPC project — feasibility, design, supply, installation and commissioning of a 2.5 MW wind turbine system for Celmore Technologies, completed in FY 2022-23.",
      "Using advanced wind-resource assessment tools (WAsP, WindPRO, LiDAR) and structural design software, our team executed foundation works, tower erection, nacelle and blade installation, electrical integration and grid connectivity — delivered safely and in line with international standards.",
    ],
    scope: [
      "Wind resource assessment & feasibility",
      "Turbine selection & structural design",
      "Foundation works & tower erection",
      "Nacelle & blade installation",
      "Electrical integration & grid connectivity",
      "System testing & commissioning",
    ],
    gallery: [],
  },
  {
    slug: "celmore-1-2mw-hybrid-wind",
    title: "1.2 MW Hybrid Wind Energy System",
    client: "Celmore Technologies",
    capacity: "1.2 MW",
    year: "2023-24",
    status: "Completed",
    type: "Wind",
    icon: "Wind",
    summary:
      "Design, supply and erection of a 1.2 MW hybrid wind energy system for industrial operations.",
    description: [
      "Design, supply and erection of a 1.2 MW hybrid wind energy system supporting continuous industrial operations for Celmore Technologies — completed in FY 2023-24.",
      "The hybrid configuration combines wind generation with complementary power sources to maximise uptime and efficiency. Our scope covered system engineering, equipment supply, erection, electrical integration and commissioning under rigorous quality and HSE controls.",
    ],
    scope: [
      "Hybrid system engineering & design",
      "Equipment procurement & supply",
      "Erection & mechanical works",
      "Electrical integration",
      "Commissioning & performance validation",
    ],
    gallery: [],
  },
];

export function getEpcProject(slug: string): EpcProject | undefined {
  return epcProjects.find((p) => p.slug === slug);
}
