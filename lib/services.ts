// All services offered by Wield Developers, sourced from the company HSE profile.
// Each service powers both the /services overview grid and its /services/[slug] detail page.

export type Service = {
  slug: string;
  title: string;
  // Short one-liner for cards.
  summary: string;
  // Lucide icon name (resolved in components via the icon map).
  icon: string;
  // Full descriptive paragraphs for the detail page.
  body: string[];
  // Key capabilities / scope bullets.
  highlights: string[];
  // Tools, software or equipment used (optional).
  toolset?: string[];
  // Real client-supplied photo for the detail page (optional; falls back to placeholder).
  image?: { src: string; alt: string };
  // Category for grouping/filtering.
  category:
    | "Power & Electrical"
    | "Energy"
    | "Civil & Infrastructure"
    | "Buildings"
    | "Safety & HSE"
    | "Specialised";
};

export const services: Service[] = [
  {
    slug: "transformer-manufacturing",
    title: "Transformer Manufacturing",
    summary:
      "Distribution & power transformers from 15 kVA to 15,000 kVA, built at our Karachi facility.",
    icon: "Factory",
    category: "Power & Electrical",
    body: [
      "We specialise in the manufacturing of high-quality oil-immersed distribution and power transformers ranging from 15 kVA to 15,000 kVA at our state-of-the-art facility in Karachi. Our transformers are designed to provide efficient and reliable power distribution for utility, industrial, commercial and infrastructure projects.",
      "Utilising advanced manufacturing techniques, premium-grade materials and rigorous quality-control procedures, we ensure superior performance, low energy losses, high operational efficiency and long service life. All transformers are manufactured and tested in accordance with applicable international standards to meet the highest levels of safety, reliability and customer satisfaction.",
    ],
    highlights: [
      "15 kVA – 15,000 kVA distribution & power transformers",
      "Oil-immersed units — e.g. 150 kVA & 500 kVA (11 kV / 415 V)",
      "State-of-the-art Karachi manufacturing facility",
      "Premium-grade materials & low energy losses",
      "Manufactured & tested to international standards",
      "Utility, industrial & commercial applications",
    ],
    image: {
      src: "/images/transformers/power-transformer.jpg",
      alt: "Oil-filled power transformer with radiators and bushings",
    },
  },
  {
    slug: "ct-pt-manufacturing",
    title: "CT & PT Manufacturing",
    summary:
      "Precision current (CT) and potential (PT) instrument transformers for metering & protection.",
    icon: "Gauge",
    category: "Power & Electrical",
    body: [
      "We manufacture precision Current Transformers (CTs) and Potential / Voltage Transformers (PTs) for metering and protection applications across utility, industrial and commercial power systems.",
      "Produced at our Karachi facility using advanced engineering practices and stringent quality-control measures, our instrument transformers deliver accurate measurement, reliable protection-class performance and full compliance with applicable international standards — tailored to diverse customer requirements.",
    ],
    highlights: [
      "Current Transformers (CTs) for metering & protection",
      "Potential / Voltage Transformers (PTs)",
      "Accurate measurement & protection-class performance",
      "Compliance with international standards",
    ],
    image: {
      src: "/images/transformers/bushings-closeup.jpg",
      alt: "Transformer bushings and instrument connections close-up",
    },
  },
  {
    slug: "transformer-winding-manufacturing",
    title: "Transformer Winding Manufacturing",
    summary:
      "Disc, section, barrel, helical and continuous-disc windings for power & distribution transformers.",
    icon: "CircuitBoard",
    category: "Power & Electrical",
    body: [
      "We manufacture a wide range of transformer windings, including Disc Wound, Section Wound, Barrel Wound, Helical Wound and Continuous Disc Wound configurations for power, distribution, CT and PT transformers.",
      "Utilising precision winding machines and high-grade conductor materials, our winding solutions are designed to provide superior electrical performance, mechanical strength, thermal stability and long service life in demanding industrial and utility applications.",
    ],
    highlights: [
      "Disc, Section, Barrel, Helical & Continuous-Disc windings",
      "Precision winding machines",
      "High-grade conductor materials",
      "Mechanical strength & thermal stability",
    ],
    image: {
      src: "/images/transformers/windings.jpg",
      alt: "Three-phase dry-type transformer windings",
    },
  },
  {
    slug: "transformer-testing-maintenance",
    title: "Transformer Testing & Maintenance",
    summary:
      "Oil dehydration & testing, CT/PT testing, 11 kV cable testing and TTR testing services.",
    icon: "Wrench",
    category: "Power & Electrical",
    body: [
      "We provide specialised transformer testing and maintenance services, including transformer oil dehydration, transformer oil testing, testing of instrumentation transformers (CTs and PTs), 11 kV cable testing and transformer turn ratio (TTR) testing.",
      "Using advanced testing equipment and industry-standard procedures, we ensure the reliability, safety and efficient performance of electrical power systems — extending asset life and minimising downtime.",
    ],
    highlights: [
      "Transformer oil dehydration & oil testing",
      "CT & PT (instrument transformer) testing",
      "11 kV cable testing",
      "Transformer Turn Ratio (TTR) testing",
      "Preventive maintenance & performance restoration",
    ],
    image: {
      src: "/images/transformers/distribution-transformer.jpg",
      alt: "Distribution transformer undergoing servicing",
    },
  },
  {
    slug: "ocb-vcb-services",
    title: "OCB & VCB Manufacturing & Repair",
    summary:
      "High-voltage Oil & Vacuum Circuit Breaker manufacturing, repair and overhaul up to 33 kV.",
    icon: "Power",
    category: "Power & Electrical",
    body: [
      "We provide manufacturing, repair and maintenance services for high-voltage Oil Circuit Breakers (OCBs) and Vacuum Circuit Breakers (VCBs) up to 33 kV and industrial-rating applications.",
      "Our services include complete overhauling, fault diagnosis, component replacement, vacuum interrupter servicing, oil filtration, testing and performance restoration. We also undertake repair of all types of transformers and HT panels. With advanced tools and skilled technicians, we ensure safe, reliable and efficient operation of circuit breakers in utility, industrial and commercial power systems in accordance with international standards.",
    ],
    highlights: [
      "OCB & VCB up to 33 kV",
      "Complete overhauling & fault diagnosis",
      "Vacuum interrupter servicing",
      "Oil filtration, testing & performance restoration",
      "Transformer & HT panel repair services",
    ],
    image: {
      src: "/images/transformers/switchgear-vcb.jpg",
      alt: "Vacuum circuit breaker (VCB) switchgear panels",
    },
  },
  {
    slug: "wind-turbine-installation",
    title: "Wind Turbine Installation & Commissioning",
    summary:
      "Complete wind energy solutions — from site assessment to grid-connected commissioning.",
    icon: "Wind",
    category: "Energy",
    body: [
      "We provide complete solutions for wind energy projects, including site assessment, turbine installation, and commissioning. Utilising advanced tools such as WAsP, WindPRO, LiDAR systems, GIS platforms (ArcGIS, QGIS) and structural design software (STAAD.Pro, ETABS), we ensure optimal turbine placement and performance.",
      "Our scope covers foundation works, tower erection, nacelle and blade installation, and electrical integration, along with grid connectivity and system testing. With a skilled workforce and specialised equipment, we deliver efficient, safe and reliable wind energy solutions in line with international standards.",
    ],
    highlights: [
      "Site assessment & wind resource analysis",
      "Foundation works & tower erection",
      "Nacelle and blade installation",
      "Electrical integration & grid connectivity",
      "System testing and commissioning",
    ],
    toolset: ["WAsP", "WindPRO", "LiDAR", "ArcGIS", "QGIS", "STAAD.Pro", "ETABS"],
  },
  {
    slug: "solar-power-systems",
    title: "Solar Power Design, Installation & Commissioning",
    summary:
      "Comprehensive solar energy systems engineered for reliability, performance and cost efficiency.",
    icon: "Sun",
    category: "Energy",
    body: [
      "We provide comprehensive solar energy solutions through meticulous system design, expert installation and seamless commissioning. Our team of 100+ professionally trained engineers and technical staff, in collaboration with our JV partners, deliver premium services backed by technical excellence and regulatory compliance.",
      "We import high-quality solar panels from renowned companies, ensuring reliability, performance and cost efficiency in every project we undertake — from on-grid commercial systems to large-scale industrial installations.",
    ],
    highlights: [
      "On-grid & hybrid system design",
      "High-quality imported solar panels",
      "Expert installation & commissioning",
      "Regulatory compliance & net metering",
      "Performance monitoring & maintenance",
    ],
    toolset: ["PVsyst", "AutoCAD", "Helioscope"],
  },
  {
    slug: "road-construction",
    title: "Road Construction & Pavement Engineering",
    summary:
      "Highway construction, asphalt paving and durable concrete road development.",
    icon: "Construction",
    category: "Civil & Infrastructure",
    body: [
      "Our expertise in road infrastructure includes highway construction, asphalt paving and concrete road development. We employ advanced paving machines, road rollers, asphalt plants, concrete mixers and curbing machines to ensure smooth and durable roads.",
      "Our engineers use MX Road, Civil 3D and highway design software for optimal road layout and structural integrity, delivering road networks built to last.",
    ],
    highlights: [
      "Highway & metalled road construction",
      "Asphalt paving & concrete roads",
      "Advanced paving & compaction fleet",
      "Optimised road layout & geometrics",
    ],
    toolset: ["MX Road", "Civil 3D"],
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    summary:
      "Residential complexes and commercial high-rises built from foundation to finishing.",
    icon: "Building2",
    category: "Buildings",
    body: [
      "From residential complexes to commercial high-rises, we excel in building construction using tower cranes, concrete batching plants, scaffolding systems and reinforcement benders. We use Revit, Tekla Structures and STAAD.Pro for structural modelling, ensuring robust and sustainable building designs.",
      "Our qualified site managers and engineers oversee every phase, from foundation to finishing, ensuring quality and compliance at every milestone.",
    ],
    highlights: [
      "Residential & commercial buildings",
      "Structural modelling & BIM",
      "Tower cranes & batching plants",
      "End-to-end project supervision",
    ],
    toolset: ["Revit", "Tekla Structures", "STAAD.Pro"],
  },
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    summary:
      "Large-scale bridges, tunnels and drainage systems engineered for resilience.",
    icon: "Network",
    category: "Civil & Infrastructure",
    body: [
      "We undertake large-scale infrastructure projects, including bridges, tunnels and drainage systems, using hydraulic excavators, drilling rigs, concrete pumps and tunnel boring machines (TBMs).",
      "Our engineers leverage SAP2000, MIDAS Civil and Bentley OpenBridge Designer for structural analysis and durability assessment, ensuring infrastructure resilience that serves communities for decades.",
    ],
    highlights: [
      "Bridges, tunnels & drainage systems",
      "Heavy civil & earthworks",
      "Structural analysis & durability assessment",
      "TBM & specialised heavy equipment",
    ],
    toolset: ["SAP2000", "MIDAS Civil", "Bentley OpenBridge Designer"],
  },
  {
    slug: "health-safety-environment",
    title: "Health, Safety & Environment (HSE)",
    summary:
      "An HSE framework aligned with international best practices on every project.",
    icon: "ShieldCheck",
    category: "Safety & HSE",
    body: [
      "We are committed to maintaining the highest standards of health, safety and environmental protection across all projects. Our HSE framework is aligned with international best practices, ensuring safe working conditions, risk mitigation and regulatory compliance.",
      "Through regular training, site audits and strict safety protocols, we minimise hazards while promoting a culture of responsibility and sustainability in every operation.",
    ],
    highlights: [
      "Internationally aligned HSE framework",
      "Regular training & site audits",
      "Risk mitigation & compliance",
      "Culture of responsibility & sustainability",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management & Execution",
    summary:
      "Lean, data-driven project delivery with optimised resources and risk control.",
    icon: "ClipboardList",
    category: "Specialised",
    body: [
      "Efficient project management ensures timely completion with optimised resources. We use Primavera P6, Microsoft Project and BIM 360 to track progress, manage resources and mitigate risks.",
      "Our qualified project managers implement Lean Construction techniques to enhance efficiency and reduce waste throughout the construction process.",
    ],
    highlights: [
      "Schedule & resource planning",
      "Progress tracking & risk mitigation",
      "Lean Construction techniques",
      "Transparent reporting",
    ],
    toolset: ["Primavera P6", "Microsoft Project", "BIM 360"],
  },
  {
    slug: "quality-assurance-control",
    title: "Quality Assurance & Cost Control",
    summary:
      "Accurate estimation, material take-offs and cost control without compromising quality.",
    icon: "BadgeCheck",
    category: "Specialised",
    body: [
      "Budgeting and cost management are critical in construction. Our team employs Primavera P6, PlanSwift, Bluebeam Revu and CostX for accurate project estimations, material take-offs and financial forecasting.",
      "With our expertise in cost control and procurement planning, we ensure that projects remain within budget without compromising on quality.",
    ],
    highlights: [
      "Accurate estimation & take-offs",
      "Financial forecasting",
      "Procurement & cost control",
      "Quality assurance protocols",
    ],
    toolset: ["Primavera P6", "PlanSwift", "Bluebeam Revu", "CostX"],
  },
  {
    slug: "sports-infrastructure",
    title: "Recreational Sports Infrastructure",
    summary:
      "Premium turnkey sports facilities — padel courts, jogging tracks and arenas.",
    icon: "Trophy",
    category: "Specialised",
    body: [
      "Wield Developers specialises in the design and construction of premium recreational sports facilities, including padel tennis courts, jogging tracks, futsal grounds and multi-purpose sports arenas. We use top-quality imported raw materials to ensure superior durability, performance and aesthetics.",
      "Our turnkey solutions are developed to meet international standards, with careful attention to surface preparation, drainage, lighting and equipment installation — creating safe, sustainable and engaging environments for sports and leisure.",
    ],
    highlights: [
      "Padel courts & futsal grounds",
      "Jogging tracks & multi-purpose arenas",
      "Imported premium surfacing",
      "Drainage, lighting & equipment",
    ],
  },
  {
    slug: "lifts-elevators",
    title: "Commercial Lifts & Elevator Installation",
    summary:
      "Reliable vertical mobility solutions in joint venture with Techno Park Pakistan.",
    icon: "ArrowUpDown",
    category: "Specialised",
    body: [
      "Wield Developers, in joint venture with Techno Park Pakistan — an authorised distributor of renowned European and Chinese elevator and escalator OEMs — offers reliable and efficient vertical mobility solutions for commercial and industrial spaces.",
      "Our collaboration ensures access to premium equipment and expert installation services, adhering to international safety standards and performance benchmarks to meet the evolving needs of modern infrastructure.",
    ],
    highlights: [
      "Passenger & freight elevators",
      "Escalator installation",
      "European & Chinese OEM equipment",
      "International safety standards",
    ],
  },
  {
    slug: "bridge-construction",
    title: "Bridge Construction & Engineering",
    summary:
      "Highway, railway and pedestrian bridges in steel, concrete and composite.",
    icon: "Waypoints",
    category: "Civil & Infrastructure",
    body: [
      "We specialise in designing and constructing highway, railway and pedestrian bridges using state-of-the-art technology and equipment. Our expertise includes steel, concrete and composite bridge structures, utilising bridge launching girders, hydraulic jacks, post-tensioning equipment and piling rigs to ensure stability and durability.",
      "Our engineers employ MIDAS Civil, Bentley OpenBridge Designer, SAP2000 and LUSAS for advanced structural analysis, guaranteeing that all bridge projects meet international safety and load-bearing standards.",
    ],
    highlights: [
      "Highway, railway & pedestrian bridges",
      "Steel, concrete & composite structures",
      "Launching girders & post-tensioning",
      "Advanced structural analysis",
    ],
    toolset: ["MIDAS Civil", "Bentley OpenBridge Designer", "SAP2000", "LUSAS"],
  },
  {
    slug: "safety-equipment-ppe",
    title: "Safety Equipment (PPE)",
    summary:
      "ANSI/CE-approved personal protective equipment for every operational environment.",
    icon: "HardHat",
    category: "Safety & HSE",
    body: [
      "We maintain the highest standards of occupational health and safety by providing comprehensive Personal Protective Equipment (PPE) for all project personnel. Our standard PPE includes ANSI/CE-approved safety helmets, high-visibility vests, steel-toe safety boots and protective safety glasses to ensure workplace safety in all operational environments.",
      "For specialised tasks, we deploy high-grade fall protection harnesses, chemical-resistant coveralls, welding helmets and electrical-insulating gloves.",
    ],
    highlights: [
      "ANSI/CE-approved helmets & vests",
      "Steel-toe boots & safety glasses",
      "Fall protection harnesses",
      "Specialised task-specific PPE",
    ],
    image: {
      src: "/images/hse/safety-helmet.jpg",
      alt: "ANSI/CE-approved safety helmets",
    },
  },
  {
    slug: "safety-rescue-equipment",
    title: "Safety & Rescue Equipment",
    summary:
      "Advanced gas detection and breathing apparatus for hazardous environments.",
    icon: "LifeBuoy",
    category: "Safety & HSE",
    body: [
      "We are equipped with advanced safety and emergency response equipment to ensure the protection of personnel working in hazardous environments. Our safety systems include calibrated multi-gas detectors for monitoring gases such as hydrogen sulfide (H₂S), oxygen (O₂) and Lower Explosive Limit (LEL) levels.",
      "We also maintain Self-Contained Breathing Apparatus (SCBA) units for safe operations in oxygen-deficient or contaminated atmospheres.",
    ],
    highlights: [
      "Calibrated multi-gas detectors",
      "H₂S, O₂ & LEL monitoring",
      "SCBA breathing apparatus",
      "Confined-space safety",
    ],
  },
  {
    slug: "fire-fighting-equipment",
    title: "Fire Fighting & Emergency Equipment",
    summary:
      "Comprehensive fire protection and rapid emergency-response capabilities.",
    icon: "Flame",
    category: "Safety & HSE",
    body: [
      "We maintain comprehensive fire-fighting and emergency response capabilities to ensure workplace safety and rapid incident management. Our fire protection equipment includes portable ABC dry chemical, CO₂ and foam fire extinguishers suitable for a wide range of fire hazards.",
      "We provide both portable and fixed emergency eyewash stations for immediate first-aid response, plus fire safety suits, SCBA units, fire alarm systems and fire hydrant piping systems to enhance overall site safety preparedness.",
    ],
    highlights: [
      "ABC, CO₂ & foam extinguishers",
      "Emergency eyewash stations",
      "Fire alarm & hydrant systems",
      "Fire safety suits & SCBA",
    ],
    image: {
      src: "/images/hse/firefighting-suit.jpg",
      alt: "Firefighting suit with SCBA breathing apparatus",
    },
  },
  {
    slug: "medical-first-aid",
    title: "Medical & First Aid Equipment",
    summary:
      "Industrial-grade first-aid facilities and emergency evacuation equipment.",
    icon: "Stethoscope",
    category: "Safety & HSE",
    body: [
      "We maintain comprehensive medical and first-aid facilities to support workplace health and emergency response requirements. Our industrial-grade first-aid kits are fully stocked with essential medical supplies, including burn treatment materials, trauma dressings and eye-wash bottles.",
      "For emergency evacuation and rescue operations, we utilise basket stretchers and spine boards, ensuring the safe transportation of injured personnel from remote or challenging work locations.",
    ],
    highlights: [
      "Industrial-grade first-aid kits",
      "Burn & trauma supplies",
      "Basket stretchers & spine boards",
      "Remote-site emergency readiness",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories = [
  "Power & Electrical",
  "Energy",
  "Civil & Infrastructure",
  "Buildings",
  "Safety & HSE",
  "Specialised",
] as const;
