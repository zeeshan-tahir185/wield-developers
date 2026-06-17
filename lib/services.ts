// All services offered by Wield Developers, organised by the eight business
// divisions defined in the 2026 Company Profile. Each service powers both the
// /services overview grid and its /services/[slug] detail page.

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
  // Division the service belongs to (used for grouping/filtering).
  category:
    | "Electrical Equipment Manufacturing"
    | "Renewable Energy Solutions"
    | "Construction, Design & Engineering Consultancy"
    | "Road Infrastructure Development"
    | "Information Technology & Telecommunications"
    | "Software Development & Digital Solutions"
    | "Procurement & Supply Chain Solutions"
    | "Health, Safety & Environmental (HSE) Services";
};

export const services: Service[] = [
  // ───────────────────────── Electrical Equipment Manufacturing ─────────────────────────
  {
    slug: "transformer-manufacturing",
    title: "Power & Distribution Transformer Manufacturing",
    summary:
      "Power and distribution transformers from 15 kVA to 15,000 kVA, built to international standards.",
    icon: "Factory",
    category: "Electrical Equipment Manufacturing",
    body: [
      "We specialise in the manufacturing of high-quality power and distribution transformers ranging from 15 kVA to 15,000 kVA at our modern manufacturing facility. Our transformers are designed to provide efficient and reliable power distribution for utility, industrial, commercial and infrastructure projects.",
      "Utilising advanced engineering practices, premium-grade materials and stringent quality-control procedures, we ensure superior performance, low energy losses, high operational efficiency and long service life. All transformers are manufactured and tested in accordance with applicable international standards to ensure reliability, efficiency and full compliance.",
    ],
    highlights: [
      "15 kVA – 15,000 kVA power & distribution transformers",
      "Premium-grade materials & low energy losses",
      "Advanced engineering & stringent quality control",
      "Manufactured & tested to international standards",
      "Utility, industrial, commercial & infrastructure use",
      "Reliable, efficient & long service life",
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
    category: "Electrical Equipment Manufacturing",
    body: [
      "We manufacture precision Current Transformers (CTs) and Potential / Voltage Transformers (PTs) for metering and protection applications across utility, industrial and commercial power systems.",
      "Produced using advanced engineering practices and stringent quality-control measures, our instrument transformers deliver accurate measurement, reliable protection-class performance and full compliance with applicable international standards — tailored to diverse customer requirements.",
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
      "A wide range of winding configurations for power, distribution, CT and PT transformers.",
    icon: "CircuitBoard",
    category: "Electrical Equipment Manufacturing",
    body: [
      "We specialise in transformer winding manufacturing, producing a wide range of winding configurations — including disc wound, section wound, barrel wound, helical wound and continuous disc wound — for power, distribution, CT and PT transformers.",
      "Supported by modern manufacturing facilities, precision winding machines, high-grade conductor materials and skilled technical personnel, our winding solutions deliver superior electrical performance, mechanical strength, thermal stability and long-term operational reliability.",
    ],
    highlights: [
      "Disc, Section, Barrel, Helical & Continuous-Disc windings",
      "Windings for power, distribution, CT & PT transformers",
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
    title: "Transformer Testing, Diagnostics & Maintenance",
    summary:
      "Oil testing & dehydration, TTR & CT/PT testing, cable testing and electrical power system testing.",
    icon: "Wrench",
    category: "Electrical Equipment Manufacturing",
    body: [
      "We provide comprehensive testing, diagnostics, repair and maintenance services for transformers and associated electrical equipment, including transformer oil testing and dehydration, TTR (transformer turn ratio) testing, CT & PT testing, cable testing and condition assessment services.",
      "Using advanced testing equipment and industry-standard procedures, our electrical power system testing helps clients ensure the reliability, safety and efficient performance of their power systems — extending asset life and minimising downtime.",
    ],
    highlights: [
      "Transformer oil testing & dehydration",
      "TTR (transformer turn ratio) testing",
      "CT & PT (instrument transformer) testing",
      "Cable testing & condition assessment",
      "Electrical power system testing",
      "Preventive maintenance & performance restoration",
    ],
    image: {
      src: "/images/transformers/distribution-transformer.jpg",
      alt: "Distribution transformer undergoing servicing",
    },
  },
  {
    slug: "ocb-vcb-services",
    title: "OCB & VCB Manufacturing, Repair & Refurbishment",
    summary:
      "Oil & Vacuum Circuit Breaker manufacturing, repair, refurbishment and maintenance up to 33 kV.",
    icon: "Power",
    category: "Electrical Equipment Manufacturing",
    body: [
      "Our expertise extends to the manufacturing, repair, refurbishment and maintenance of Oil Circuit Breakers (OCBs) and Vacuum Circuit Breakers (VCBs) up to 33 kV applications, helping clients maintain the reliability, safety and performance of their power systems.",
      "Our services include complete overhauling, fault diagnosis, component replacement, vacuum interrupter servicing, oil filtration, testing and performance restoration. We also undertake the repair of all types of transformers and HT panels, delivered by skilled technicians in accordance with international standards.",
    ],
    highlights: [
      "OCB & VCB manufacturing, repair & refurbishment",
      "Up to 33 kV applications",
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

  // ───────────────────────── Renewable Energy Solutions ─────────────────────────
  {
    slug: "solar-power-systems",
    title: "Solar Power Design, Installation & Commissioning",
    summary:
      "Comprehensive solar PV systems engineered for reliability, performance and cost efficiency.",
    icon: "Sun",
    category: "Renewable Energy Solutions",
    body: [
      "We provide comprehensive solar power solutions covering the complete lifecycle of solar PV projects — from feasibility studies and system design to installation, commissioning, grid integration and operational support.",
      "Utilising high-quality imported solar panels and industry-leading technologies, we ensure optimum performance, reliability and long-term value for government, industrial, commercial and infrastructure clients — delivered with technical excellence and regulatory compliance.",
    ],
    highlights: [
      "Feasibility studies & system design",
      "On-grid & hybrid solar PV systems",
      "High-quality imported solar panels",
      "Installation, commissioning & grid integration",
      "Regulatory compliance & net metering",
      "Performance monitoring & operational support",
    ],
    toolset: ["PVsyst", "AutoCAD", "Helioscope"],
    image: {
      src: "/images/solar/solar-1.png",
      alt: "Rooftop solar PV array on steel mounting structure",
    },
  },
  {
    slug: "wind-turbine-installation",
    title: "Wind Turbine Installation & Commissioning",
    summary:
      "Turnkey wind energy solutions — from site assessment to grid-connected commissioning.",
    icon: "Wind",
    category: "Renewable Energy Solutions",
    body: [
      "We offer turnkey wind energy solutions including site assessment, foundation works, turbine installation, tower erection, electrical integration, grid connectivity and system commissioning.",
      "Utilising advanced engineering tools and specialised equipment, supported by experienced engineers and project-management professionals, our team ensures efficient project execution and maximum energy generation potential — enhancing energy security while contributing to environmental sustainability.",
    ],
    highlights: [
      "Site assessment & feasibility studies",
      "Foundation works & tower erection",
      "Turbine installation & electrical integration",
      "Grid connectivity & system commissioning",
      "Renewable energy project management",
    ],
    toolset: ["WAsP", "WindPRO", "LiDAR", "ArcGIS", "QGIS", "STAAD.Pro", "ETABS"],
  },

  // ───────────────── Construction, Design & Engineering Consultancy ─────────────────
  {
    slug: "building-construction",
    title: "Building Construction",
    summary:
      "Residential, commercial and industrial buildings delivered from concept to completion.",
    icon: "Building2",
    category: "Construction, Design & Engineering Consultancy",
    body: [
      "Our Construction, Design & Engineering Consultancy Division delivers high-quality building solutions for residential communities, commercial buildings, industrial facilities, specialised structures and public infrastructure — from concept development through to project completion.",
      "Supported by experienced engineers, architects, project managers and technical specialists using advanced engineering and design tools, we oversee every phase from foundation to finishing, ensuring quality, durability and compliance at every milestone.",
    ],
    highlights: [
      "Residential, commercial & industrial buildings",
      "Specialised structures & public infrastructure",
      "Structural analysis, modelling & BIM",
      "Engineers, architects & project managers",
      "End-to-end project supervision",
    ],
    toolset: ["Revit", "Tekla Structures", "STAAD.Pro"],
    image: {
      src: "/images/building/building-1.jpg",
      alt: "Building under construction — concrete columns and masonry walls",
    },
  },
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    summary:
      "Large-scale bridges, utility networks, drainage and power infrastructure engineered for resilience.",
    icon: "Network",
    category: "Construction, Design & Engineering Consultancy",
    body: [
      "We undertake large-scale infrastructure projects including bridges, utility networks, drainage systems, power infrastructure and other critical engineering works that support sustainable development and economic growth.",
      "Our engineers leverage advanced structural analysis and durability-assessment tools to ensure infrastructure resilience, delivering works that serve communities and industry for decades.",
    ],
    highlights: [
      "Bridges & utility networks",
      "Drainage & power infrastructure",
      "Heavy civil & earthworks",
      "Structural analysis & durability assessment",
    ],
    toolset: ["SAP2000", "MIDAS Civil", "Bentley OpenBridge Designer"],
  },
  {
    slug: "bridge-construction",
    title: "Bridge Engineering & Construction",
    summary:
      "Highway, railway and pedestrian bridges in steel, concrete and composite.",
    icon: "Waypoints",
    category: "Construction, Design & Engineering Consultancy",
    body: [
      "We specialise in designing and constructing highway, railway and pedestrian bridges using state-of-the-art technology and equipment. Our expertise includes steel, concrete and composite bridge structures, utilising bridge launching girders, hydraulic jacks, post-tensioning equipment and piling rigs to ensure stability and durability.",
      "Our engineers employ advanced structural-analysis software to guarantee that all bridge projects meet international safety and load-bearing standards.",
    ],
    highlights: [
      "Highway, railway & pedestrian bridges",
      "Steel, concrete & composite structures",
      "Launching girders & post-tensioning",
      "Advanced structural analysis",
    ],
    toolset: ["MIDAS Civil", "Bentley OpenBridge Designer", "SAP2000", "LUSAS"],
    image: {
      src: "/images/bridge/bridge-1.jpg",
      alt: "Bridge under construction over a riverbed",
    },
  },
  {
    slug: "sports-infrastructure",
    title: "Recreational Sports Infrastructure",
    summary:
      "Premium turnkey sports facilities — padel courts, jogging tracks and arenas.",
    icon: "Trophy",
    category: "Construction, Design & Engineering Consultancy",
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
    title: "Elevator & Vertical Transportation Solutions",
    summary:
      "Reliable passenger and vehicular lift installation in joint venture with Techno Park Pakistan.",
    icon: "ArrowUpDown",
    category: "Construction, Design & Engineering Consultancy",
    body: [
      "Wield Developers, in joint venture with Techno Park Pakistan — an authorised distributor of renowned European and Chinese elevator and escalator OEMs — offers reliable and efficient vertical-transportation solutions for commercial and industrial spaces.",
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
    slug: "project-management",
    title: "Engineering Consultancy & Project Management",
    summary:
      "Engineering consultancy, project management and technical advisory across the project lifecycle.",
    icon: "ClipboardList",
    category: "Construction, Design & Engineering Consultancy",
    body: [
      "Beyond construction, we provide engineering consultancy, project management, quality assurance and technical advisory services that support clients throughout the project lifecycle — from planning and structural analysis to scheduling, cost control and quality management.",
      "Our qualified project managers implement modern planning tools and Lean Construction techniques to track progress, manage resources and mitigate risks, ensuring efficient and transparent delivery.",
    ],
    highlights: [
      "Engineering consultancy & technical advisory",
      "Schedule & resource planning",
      "Progress tracking & risk mitigation",
      "Lean Construction techniques",
      "Transparent reporting",
    ],
    toolset: ["Primavera P6", "Microsoft Project", "BIM 360"],
  },
  {
    slug: "quality-assurance-control",
    title: "Quality Assurance & Cost Control (QA/QC)",
    summary:
      "Accurate estimation, material take-offs and cost control without compromising quality.",
    icon: "BadgeCheck",
    category: "Construction, Design & Engineering Consultancy",
    body: [
      "Rigorous quality assurance and cost control are central to every project we deliver. Our team employs advanced estimation and quantity-surveying tools for accurate project estimations, material take-offs and financial forecasting.",
      "With our expertise in QA/QC, cost control and procurement planning, we ensure projects remain within budget and adhere to recognised engineering standards — without compromising on quality.",
    ],
    highlights: [
      "Accurate estimation & take-offs",
      "Financial forecasting",
      "Procurement & cost control",
      "QA/QC protocols & standards compliance",
    ],
    toolset: ["Primavera P6", "PlanSwift", "Bluebeam Revu", "CostX"],
  },

  // ───────────────────────── Road Infrastructure Development ─────────────────────────
  {
    slug: "road-construction",
    title: "Road & Transportation Infrastructure",
    summary:
      "Highways, urban & rural roads, pavement engineering, rehabilitation and drainage systems.",
    icon: "Construction",
    category: "Road Infrastructure Development",
    body: [
      "Our Road Infrastructure Development Division specialises in the planning, design, construction, rehabilitation and maintenance of transportation infrastructure — delivering durable, safe and efficient road networks that enhance connectivity, support economic development and improve community mobility.",
      "Our expertise encompasses highways, urban and rural road networks, asphalt pavements, concrete roads, road rehabilitation and upgradation works, drainage and stormwater systems, and associated transportation infrastructure. Utilising advanced construction equipment, skilled engineering teams and proven project-management practices, we deliver high-quality infrastructure built to last.",
    ],
    highlights: [
      "Highway & metalled road construction",
      "Urban & rural road development",
      "Asphalt pavements & concrete roads",
      "Pavement engineering & geometrics",
      "Road rehabilitation & upgradation",
      "Drainage & stormwater systems",
    ],
    toolset: ["MX Road", "Civil 3D"],
    image: {
      src: "/images/road/road-1.jpg",
      alt: "Concrete parapet and road construction works",
    },
  },

  // ───────────────── Information Technology & Telecommunications ─────────────────
  {
    slug: "it-telecommunications",
    title: "Information Technology & Telecommunications",
    summary:
      "Telecom infrastructure, fiber optic, wireless, surveillance, ICT integration and cybersecurity.",
    icon: "Network",
    category: "Information Technology & Telecommunications",
    body: [
      "Our Information Technology & Telecommunications Division delivers advanced ICT and communication solutions that enable organisations to enhance connectivity, security, operational efficiency and digital transformation. Serving government, defence, commercial, industrial and infrastructure sectors, we provide reliable and scalable technology solutions tailored to the evolving demands of modern enterprises.",
      "Through strategic partnerships with leading technology providers, we offer comprehensive telecommunications infrastructure, fiber optic networks, wireless communication systems, surveillance solutions, cybersecurity services and integrated ICT platforms — covering the planning, deployment, integration and maintenance of mission-critical technology systems.",
      "The division has successfully supported a variety of public and private sector organisations, including government institutions, through the supply and implementation of telecommunications and IT solutions — delivering secure, resilient and future-ready communication networks.",
    ],
    highlights: [
      "Telecom infrastructure solutions",
      "Fiber optic networks",
      "Wireless communication systems",
      "ICT system integration",
      "Cybersecurity solutions",
      "CCTV & surveillance systems",
      "Government & defence technology solutions",
    ],
    image: {
      src: "/images/ofc-cable/ofc-1.jpg",
      alt: "Laying of optical fiber cable along a roadside",
    },
  },

  // ───────────────── Software Development & Digital Solutions ─────────────────
  {
    slug: "software-development",
    title: "Software Development & Digital Solutions",
    summary:
      "Custom software, ERP, LMS, web & mobile apps and enterprise digital ecosystems.",
    icon: "Code2",
    category: "Software Development & Digital Solutions",
    body: [
      "Our Software Development & Digital Solutions Division provides innovative, scalable and secure software solutions that support digital transformation across government, enterprise, industrial and commercial sectors. By combining technical expertise, modern development methodologies and a deep understanding of business processes, we deliver technology that enhances efficiency, automation and decision-making.",
      "Our expertise encompasses custom software applications, enterprise management systems, web and mobile applications, databases, ERP platforms and integrated digital ecosystems tailored to each client's requirements.",
      "The division also specialises in Learning Management Systems (LMS), digital training platforms, assessment systems and performance-management solutions. We are actively developing LMS platforms for government organisations and have built our own enterprise-grade ERP management system — demonstrating our capability to deliver complex, mission-critical software.",
    ],
    highlights: [
      "ERP systems & enterprise applications",
      "Learning Management Systems (LMS)",
      "Web & mobile development",
      "Database solutions",
      "Business process automation",
      "Cloud-based platforms",
      "System integration & technical support",
    ],
  },

  // ───────────────── Procurement & Supply Chain Solutions ─────────────────
  {
    slug: "procurement-supply-chain",
    title: "Procurement & Supply Chain Solutions",
    summary:
      "Strategic sourcing, international procurement, machinery imports and turnkey supply management.",
    icon: "Truck",
    category: "Procurement & Supply Chain Solutions",
    body: [
      "Our Procurement & Supply Chain Solutions Division provides strategic sourcing, procurement management and supply chain support for government, industrial, infrastructure and commercial organisations. Backed by an experienced team of procurement specialists, engineers and logistics professionals, we manage complex procurement requirements ranging from specialised equipment and industrial machinery to advanced technologies and turnkey project supplies.",
      "Over the years, we have successfully sourced, imported and delivered critical equipment, high-value machinery, electrical systems, telecommunications infrastructure, safety equipment and technology solutions from leading international manufacturers — covering vendor identification, technical evaluation, international procurement, contract management, logistics coordination, customs clearance and quality verification.",
      "We currently support multiple government, public-sector and private-sector organisations with reliable, transparent and professionally managed procurement services that ensure timely delivery, regulatory compliance, cost efficiency and operational continuity.",
    ],
    highlights: [
      "Strategic sourcing",
      "International procurement",
      "Machinery & technology imports",
      "Vendor management",
      "Logistics & supply chain coordination",
      "Government & industrial procurement support",
      "Turnkey equipment supply",
    ],
  },

  // ───────────────── Health, Safety & Environmental (HSE) Services ─────────────────
  {
    slug: "health-safety-environment",
    title: "HSE Management & Compliance Services",
    summary:
      "HSE management systems, risk assessments, safety audits, training and compliance programs.",
    icon: "ShieldCheck",
    category: "Health, Safety & Environmental (HSE) Services",
    body: [
      "Our Health, Safety & Environmental (HSE) Services Division is dedicated to promoting safe, compliant and sustainable working environments across industrial, infrastructure, construction, energy and commercial sectors. Guided by international best practices and a strong culture of safety, we help organisations protect their workforce, assets and operations while ensuring regulatory compliance.",
      "Our services encompass HSE management systems, risk assessments, safety audits, workplace inspections, safety training, emergency preparedness and environmental compliance programs. Through proactive planning and continuous monitoring, we help clients minimise operational risks and maintain the highest standards of occupational health and safety.",
    ],
    highlights: [
      "HSE management systems",
      "Risk assessments & safety audits",
      "Workplace inspections",
      "Safety training programs",
      "Emergency preparedness",
      "Environmental compliance programs",
    ],
  },
  {
    slug: "safety-equipment-ppe",
    title: "Personal Protective Equipment (PPE) Supply",
    summary:
      "Comprehensive ANSI/CE-approved personal protective equipment for every operational environment.",
    icon: "HardHat",
    category: "Health, Safety & Environmental (HSE) Services",
    body: [
      "As a reliable supplier of high-quality safety equipment, we provide comprehensive Personal Protective Equipment (PPE) for all project personnel. Our standard PPE includes ANSI/CE-approved safety helmets, high-visibility vests, steel-toe safety boots and protective safety glasses to ensure workplace safety in all operational environments.",
      "For specialised tasks, we deploy high-grade fall-protection harnesses, chemical-resistant coveralls, welding helmets and electrical-insulating gloves.",
    ],
    highlights: [
      "ANSI/CE-approved helmets & vests",
      "Steel-toe boots & safety glasses",
      "Fall-protection harnesses",
      "Specialised task-specific PPE",
    ],
    image: {
      src: "/images/hse/safety-helmet.jpg",
      alt: "ANSI/CE-approved safety helmets",
    },
  },
  {
    slug: "fire-fighting-equipment",
    title: "Fire Protection & Fire-Fighting Equipment",
    summary:
      "Comprehensive fire protection systems and rapid emergency-response capabilities.",
    icon: "Flame",
    category: "Health, Safety & Environmental (HSE) Services",
    body: [
      "We supply comprehensive fire-fighting and fire-protection systems to ensure workplace safety and rapid incident management. Our fire-protection equipment includes portable ABC dry chemical, CO₂ and foam fire extinguishers suitable for a wide range of fire hazards.",
      "We also provide fire safety suits, SCBA units, fire alarm systems, fire hydrant piping systems and both portable and fixed emergency eyewash stations to enhance overall site safety preparedness.",
    ],
    highlights: [
      "ABC, CO₂ & foam extinguishers",
      "Fire alarm & hydrant systems",
      "Fire safety suits & SCBA",
      "Emergency eyewash stations",
    ],
    image: {
      src: "/images/hse/firefighting-suit.jpg",
      alt: "Firefighting suit with SCBA breathing apparatus",
    },
  },
  {
    slug: "safety-rescue-equipment",
    title: "Rescue & Gas Detection Equipment",
    summary:
      "Gas detection, breathing apparatus and confined-space rescue equipment for hazardous environments.",
    icon: "LifeBuoy",
    category: "Health, Safety & Environmental (HSE) Services",
    body: [
      "We supply advanced rescue and gas-detection equipment to protect personnel working in hazardous and confined-space environments. Our systems include calibrated multi-gas detectors for monitoring gases such as hydrogen sulfide (H₂S), oxygen (O₂) and Lower Explosive Limit (LEL) levels.",
      "We also provide Self-Contained Breathing Apparatus (SCBA) units and confined-space entry and rescue equipment for safe operations in oxygen-deficient or contaminated atmospheres.",
    ],
    highlights: [
      "Calibrated multi-gas detectors",
      "H₂S, O₂ & LEL monitoring",
      "SCBA breathing apparatus",
      "Confined-space & rescue equipment",
    ],
  },
  {
    slug: "medical-first-aid",
    title: "Medical & Emergency Response Equipment",
    summary:
      "Industrial-grade first-aid facilities and emergency evacuation equipment.",
    icon: "Stethoscope",
    category: "Health, Safety & Environmental (HSE) Services",
    body: [
      "We supply comprehensive medical and first-aid equipment to support workplace health and emergency-response requirements. Our industrial-grade first-aid kits are fully stocked with essential medical supplies, including burn-treatment materials, trauma dressings and eye-wash bottles.",
      "For emergency evacuation and rescue operations, we provide basket stretchers, spine boards and other medical-response equipment, ensuring the safe transportation of injured personnel from remote or challenging work locations.",
    ],
    highlights: [
      "Industrial-grade first-aid kits",
      "Burn & trauma supplies",
      "Basket stretchers & spine boards",
      "Emergency & medical response equipment",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories = [
  "Electrical Equipment Manufacturing",
  "Renewable Energy Solutions",
  "Construction, Design & Engineering Consultancy",
  "Road Infrastructure Development",
  "Information Technology & Telecommunications",
  "Software Development & Digital Solutions",
  "Procurement & Supply Chain Solutions",
  "Health, Safety & Environmental (HSE) Services",
] as const;
