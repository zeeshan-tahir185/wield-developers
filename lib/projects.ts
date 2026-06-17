// Completed & ongoing projects from the 2026 Company Profile's "Our Projects" list.

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
      "Feasibility, Design, Supply, Installation & Commissioning of 1.4 MW On-Grid Net Metering Solar System",
    client: "Qasim Mkt, Rawalpindi",
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
    client: "Mirpur, Azad Kashmir",
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
    client: "Top Biz LLP, Kamra",
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
    client: "Mars International, Rawalpindi",
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
    title: "Installation & Commissioning of Passenger Lift",
    client: "M.A-Edu Consultants, Rawalpindi",
    year: "2024-25",
    status: "Completed",
    category: "Other",
  },
  {
    title: "Supply & Installation of Passenger and Vehicular RPM at Lahore, Peshawar & Quetta Airports",
    client: "Top Biz LLP",
    year: "2023-24",
    status: "Completed",
    category: "Infrastructure",
  },
  {
    title: "Supply & Installation of Vehicular RPM at Port Qasim",
    client: "Top Biz LLP",
    year: "2023-24",
    status: "Completed",
    category: "Infrastructure",
  },
  {
    title: "Supply & Installation of Paddle Court",
    client: "Olympia, Scheme III, Rawalpindi",
    year: "2023-24",
    status: "Completed",
    category: "Sports",
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
    year: "—",
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
