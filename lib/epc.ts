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
//
// Descriptions below are the client's official project explanations
// (see project_explanations_text.txt in the project root).

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
    slug: "1-4mw-net-metering-solar",
    title: "1.4 MW On-Grid Net Metering Solar System",
    client: "Qasim Mkt, Rawalpindi",
    location: "Rawalpindi",
    capacity: "1.4 MW",
    year: "—",
    status: "Completed",
    type: "Solar",
    icon: "Sun",
    summary:
      "Turnkey feasibility, design, supply, installation, testing and commissioning of a 1.4 MW on-grid solar PV system with net metering.",
    description: [
      "Wield Developers (Pvt.) Ltd. successfully delivered the Feasibility, Design, Supply, Installation, Testing, and Commissioning of a 1.4 MW On-Grid Solar PV System with Net Metering under a comprehensive turnkey arrangement. The project commenced with a detailed technical and financial feasibility assessment, encompassing site evaluation, load analysis, energy yield studies, grid interconnection requirements, and regulatory compliance considerations. Based on the findings, our engineering team developed an optimized system design that ensured maximum energy generation, operational efficiency, and long-term sustainability while adhering to the highest industry standards.",
      "The scope further included the procurement and supply of high-quality solar photovoltaic modules, grid-tied inverters, mounting structures, protection systems, monitoring equipment, and all associated electrical infrastructure. Our team executed the complete installation and integration of the solar power plant, followed by rigorous testing, performance validation, and successful commissioning. The system was seamlessly connected to the national grid through net metering, enabling efficient energy export and enhanced return on investment for the client. The successful completion of this project demonstrates our expertise in delivering large-scale renewable energy solutions and our commitment to supporting sustainable and environmentally responsible energy development.",
    ],
    scope: [
      "Technical & financial feasibility assessment",
      "Site evaluation, load analysis & energy yield studies",
      "Optimized system design & grid interconnection",
      "Supply of PV modules, inverters & mounting structures",
      "Protection, monitoring & electrical infrastructure",
      "Installation, testing, validation & commissioning",
      "Grid connection via net metering",
    ],
    gallery: [
      { src: "/images/solar/solar-1.png", alt: "Rooftop solar PV array on steel mounting structure" },
      { src: "/images/solar/solar-2.png", alt: "Solar PV array on carport-style mounting" },
      { src: "/images/solar/solar-3.png", alt: "Solar panel canopy over a paved terrace" },
      { src: "/images/solar/solar-4.png", alt: "Solar panel installation over a city skyline" },
    ],
  },
  {
    slug: "villas-pine-city",
    title: "Design, Construction & Furnishing of Villas, Pine City",
    client: "Pine City, Islamabad",
    location: "Pine City, Islamabad",
    capacity: "Premium Villas",
    year: "—",
    status: "Completed",
    type: "Civil",
    icon: "Building2",
    summary:
      "End-to-end design, construction and furnishing of premium residential villas in Pine City — from concept to handover.",
    description: [
      "Wield Developers (Pvt.) Ltd. successfully executed the Design, Construction, and Furnishing of premium residential villas in Pine City, delivering a complete end-to-end solution from concept development to project handover. The project commenced with a comprehensive planning and design phase, during which our architectural and engineering teams developed detailed 2D drawings, 3D visualizations, structural designs, and interior concepts tailored to the client's requirements while ensuring functionality, aesthetics, and compliance with applicable building standards.",
      "Upon finalization of the design, our construction team undertook the execution of all civil, structural, architectural, and finishing works. The project was carried out under the continuous supervision of dedicated Health, Safety & Environment (HSE) personnel and a Quality Assurance & Quality Control (QA/QC) team to ensure adherence to the highest standards of safety, workmanship, and quality. The scope further included complete interior furnishing and finishing, resulting in modern, fully equipped villas that reflect superior craftsmanship, architectural excellence, and a commitment to delivering sustainable and high-quality residential developments.",
    ],
    scope: [
      "Architectural & structural design (2D & 3D)",
      "Interior concept development",
      "Civil, structural & architectural works",
      "Finishing & complete interior furnishing",
      "HSE supervision throughout execution",
      "QA/QC quality assurance & control",
      "Project handover",
    ],
    gallery: [
      { src: "/images/villas-pine-city/villa-1.png", alt: "Glass-and-stone hillside villa, Pine City" },
      { src: "/images/villas-pine-city/villa-2.png", alt: "Mountain villa with deck and stone base, Pine City" },
      { src: "/images/villas-pine-city/villa-3.png", alt: "Timber and glass chalet-style villa, Pine City" },
      { src: "/images/villas-pine-city/villa-4.png", alt: "Aerial view of terraced mountain villa, Pine City" },
      { src: "/images/interiors/interior-4.png", alt: "Villa lounge interior with floor-to-ceiling windows" },
      { src: "/images/interiors/interior-2.png", alt: "Villa dining area with feature staircase" },
    ],
  },
  {
    slug: "building-complex-mirpur",
    title: "Construction & Renovation of Building Complex, Mirpur",
    client: "Mirpur, Azad Kashmir",
    location: "Mirpur, Azad Kashmir",
    capacity: "Villas & Guest Houses",
    year: "—",
    status: "Completed",
    type: "Civil",
    icon: "Building2",
    summary:
      "Construction and renovation of a building complex of villas and guest houses — optimised space planning within a constrained site in Mirpur.",
    description: [
      "Wield Developers (Pvt.) Ltd. successfully executed the Construction and Renovation of a Building Complex, transforming a constrained land area into a well-planned and functionally optimized residential development comprising villas and guest houses in Mirpur. The project was initiated with a comprehensive design phase, where our architectural team developed detailed 2D drawings and 3D visualizations to ensure efficient space utilization, aesthetic appeal, and structural feasibility within the limited site boundaries.",
      "Following design approval, our civil engineering team mobilized on-site for the execution phase, carrying out all construction and renovation activities in accordance with approved drawings and specifications. The project was delivered under the strict supervision of our Health, Safety & Environment (HSE) team and Quality Assurance/Quality Control (QA/QC) personnel, ensuring adherence to safety protocols, construction standards, and superior workmanship. The completed complex reflects effective space planning, high-quality construction, and successful project delivery within challenging site constraints.",
    ],
    scope: [
      "Architectural design (2D & 3D) & space planning",
      "Structural feasibility within site constraints",
      "Construction & renovation execution",
      "Villas & guest houses development",
      "HSE supervision & safety protocols",
      "QA/QC construction standards",
      "Successful delivery within constrained site",
    ],
    gallery: [
      { src: "/images/villas-mirpur/villa-1.png", alt: "Residential villas and guest houses, Mirpur" },
      { src: "/images/villas-mirpur/villa-2.png", alt: "Villa exterior with landscaped garden, Mirpur" },
      { src: "/images/villas-mirpur/villa-3.png", alt: "Aerial view of residential block with courtyard, Mirpur" },
      { src: "/images/villas-mirpur/villa-4.png", alt: "Residential development site layout, Mirpur" },
    ],
  },
  {
    slug: "prayer-area-bridge-joyland",
    title: "Construction of Misc Business Complex, Joyland",
    client: "Joyland, Rawalpindi",
    location: "Joyland, Rawalpindi",
    capacity: "Business Complex",
    year: "—",
    status: "Completed",
    type: "Civil",
    icon: "Construction",
    summary:
      "Construction of a miscellaneous business complex at Joyland, Rawalpindi — expanding usable built-up area and improving connectivity within the existing premises.",
    description: [
      "Wield Developers (Pvt.) Ltd. successfully executed the Construction of a Miscellaneous Business Complex at Joyland, Rawalpindi, aimed at enhancing the facility's spatial capacity and improving connectivity within the existing premises. The project was undertaken to expand the usable built-up area and provide well-designed, functional spaces for visitors and staff, while ensuring seamless pedestrian movement across the complex.",
      "The project commenced with detailed planning and design considerations, followed by the development of structural drawings and execution methodologies tailored to the site constraints and operational requirements of the facility. Our civil engineering team carried out the construction works with precision and efficiency, ensuring structural integrity, durability, and aesthetic compatibility with the existing infrastructure. The entire execution process was managed under the strict supervision of our Health, Safety & Environment (HSE) team and Quality Assurance/Quality Control (QA/QC) personnel, ensuring compliance with safety standards and high-quality workmanship throughout the project lifecycle.",
    ],
    scope: [
      "Planning & design considerations",
      "Structural drawings & execution methodology",
      "Business complex construction",
      "Pedestrian access & connectivity works",
      "Structural integrity & durability",
      "HSE supervision & safety standards",
      "QA/QC & high-quality workmanship",
    ],
    gallery: [
      { src: "/images/prayer-area/prayer-1.png", alt: "Business complex building with arched façade at Joyland, Rawalpindi" },
      { src: "/images/prayer-area/prayer-2.png", alt: "Business complex building with paving and finishing works in progress, Joyland" },
      { src: "/images/prayer-area/prayer-3.png", alt: "Paved connecting walkway around the business complex at Joyland" },
      { src: "/images/prayer-area/prayer-4.png", alt: "Landscaped courtyard and paving around the business complex, Joyland" },
    ],
  },
];

export function getEpcProject(slug: string): EpcProject | undefined {
  return epcProjects.find((p) => p.slug === slug);
}
