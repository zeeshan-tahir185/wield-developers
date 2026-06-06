// Completed & ongoing projects from the company's Past Performance record.

export type Project = {
  title: string;
  client: string;
  year: string;
  status: "Ongoing" | "Completed";
  category: "Solar" | "Wind" | "Civil" | "Buildings" | "Infrastructure" | "Sports" | "Other";
};

export const projects: Project[] = [
  {
    title:
      "Feasibility, Design, Supply, Installation & Commissioning of 1.4 MW On-Grid Solar System",
    client: "SCO HQ, Rawalpindi",
    year: "Ongoing",
    status: "Ongoing",
    category: "Solar",
  },
  {
    title: "Design, Construction & Furnishing of Villas",
    client: "Pine City, Islamabad",
    year: "Ongoing",
    status: "Ongoing",
    category: "Buildings",
  },
  {
    title: "Construction & Renovation of Building Complex",
    client: "64 Signals, Mirpur",
    year: "Ongoing",
    status: "Ongoing",
    category: "Buildings",
  },
  {
    title: "Construction of Prayer Area Building & Connecting Bridge",
    client: "Joyland, Rawalpindi",
    year: "Ongoing",
    status: "Ongoing",
    category: "Infrastructure",
  },
  {
    title: "Supply of Construction Material for Pakistan's First AI-Ready Datacentre",
    client: "Sky 47",
    year: "Ongoing",
    status: "Ongoing",
    category: "Other",
  },
  {
    title: "Supply & Laying of 30-pair and 50-pair Telephone Cable",
    client: "Top Biz LLP (PAC Kamra)",
    year: "Ongoing",
    status: "Ongoing",
    category: "Infrastructure",
  },
  {
    title: "Design & Installation of 40 kW Solar Power System",
    client: "M.A-Edu Consultants, Rawalpindi",
    year: "2024-25",
    status: "Completed",
    category: "Solar",
  },
  {
    title: "Construction of Jogging Track",
    client: "Mars International (SCO)",
    year: "2024-25",
    status: "Completed",
    category: "Sports",
  },
  {
    title: "Construction of Farm Houses in Karor, Kotli Sattian",
    client: "Top Biz LLP",
    year: "2024-25",
    status: "Completed",
    category: "Buildings",
  },
  {
    title: "Installation of 225 Wind Mills",
    client: "I&P Department, Quetta",
    year: "2020-24",
    status: "Completed",
    category: "Wind",
  },
  {
    title:
      "Design, Fabrication & Installation of High-Security Surveillance Watch Towers (Safe City Project)",
    client: "Celmore Technologies",
    year: "2022-24",
    status: "Completed",
    category: "Infrastructure",
  },
  {
    title:
      "Design, Supply & Erection of Hybrid Wind Energy System for Industrial Operations (1.2 MW)",
    client: "Celmore Technologies",
    year: "2023-24",
    status: "Completed",
    category: "Wind",
  },
  {
    title: "Installation & Grid Integration of Distributed Wind Power Units (1.8 MW)",
    client: "Celmore Technologies",
    year: "2023-24",
    status: "Completed",
    category: "Wind",
  },
  {
    title:
      "Feasibility, Design, Supply, Installation & Commissioning of 2.5 MW Wind Turbine System",
    client: "Celmore Technologies",
    year: "2022-23",
    status: "Completed",
    category: "Wind",
  },
  {
    title: "Infrastructure Development of Bismillah Orchards",
    client: "Bismillah Orchard, Faisalabad",
    year: "2022-24",
    status: "Completed",
    category: "Infrastructure",
  },
  {
    title: "Repair of Machineries of E&M Workshop Division",
    client: "E&M Workshop Division, Quetta",
    year: "2022-23",
    status: "Completed",
    category: "Other",
  },
  {
    title: "EPDM Jogging Track — EPDM PU System",
    client: "National Group, Islamabad",
    year: "2021-22",
    status: "Completed",
    category: "Sports",
  },
  {
    title: "Laying of Sewage System of Block A, B, C",
    client: "Bismillah Orchard, Faisalabad",
    year: "2021-22",
    status: "Completed",
    category: "Infrastructure",
  },
  {
    title: "Construction of Main Gate 01",
    client: "Bismillah Orchard, Faisalabad",
    year: "2007-08",
    status: "Completed",
    category: "Civil",
  },
  {
    title: "Construction of Metalled Road (16 km)",
    client: "Local Govt, Kasur",
    year: "2005-06",
    status: "Completed",
    category: "Civil",
  },
  {
    title: "Construction of WTO Building",
    client: "UVAS, Lahore",
    year: "2001-03",
    status: "Completed",
    category: "Buildings",
  },
  {
    title: "Resistivity Survey — Ground Water Exploitation",
    client: "I&P Department, Quetta",
    year: "—",
    status: "Completed",
    category: "Other",
  },
];

export const projectCategories = [
  "All",
  "Solar",
  "Wind",
  "Civil",
  "Buildings",
  "Infrastructure",
  "Sports",
  "Other",
] as const;
