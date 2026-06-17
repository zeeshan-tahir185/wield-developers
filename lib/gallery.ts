// Gallery categories taken from the 2026 Company Profile's Gallery section.
// Categories with real client-supplied photos list them in `images`; remaining
// slots (up to `count`) render branded "coming soon" placeholders until more
// photos arrive.

export type GalleryImage = { src: string; alt: string };

export type GalleryCategory = {
  slug: string;
  title: string;
  // Total tiles to show (real images first, then placeholders to top up).
  count: number;
  images?: GalleryImage[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "transformers",
    title: "Manufacture of Transformers & Electrical Equipment",
    count: 7,
    images: [
      { src: "/images/transformers/power-transformer.jpg", alt: "Oil-filled power transformer with radiators and bushings" },
      { src: "/images/transformers/distribution-transformer.jpg", alt: "Distribution transformer manufactured at our facility" },
      { src: "/images/transformers/windings.jpg", alt: "Three-phase dry-type transformer windings" },
      { src: "/images/transformers/transformer-workshop.jpg", alt: "Large power transformer in our manufacturing workshop" },
      { src: "/images/transformers/switchgear-vcb.jpg", alt: "Vacuum circuit breaker (VCB) switchgear panels" },
      { src: "/images/transformers/bushings-closeup.jpg", alt: "Transformer bushings and tap-changer close-up" },
      { src: "/images/transformers/pole-installation-diagram.jpg", alt: "25 kVA single-phase pole transformer installation diagram" },
    ],
  },
  {
    slug: "residential-villas-mirpur",
    title: "Design & Construction of Residential Villas, Mirpur",
    count: 4,
    images: [
      { src: "/images/villas-mirpur/villa-1.png", alt: "Residential villas and guest houses, Mirpur" },
      { src: "/images/villas-mirpur/villa-2.png", alt: "Villa exterior with landscaped garden, Mirpur" },
      { src: "/images/villas-mirpur/villa-3.png", alt: "Aerial view of residential block with courtyard, Mirpur" },
      { src: "/images/villas-mirpur/villa-4.png", alt: "Residential development site layout, Mirpur" },
    ],
  },
  {
    slug: "villas-pine-city",
    title: "Design, Construction & Furnishing of Villas, Pine City",
    count: 4,
    images: [
      { src: "/images/villas-pine-city/villa-1.png", alt: "Glass-and-stone hillside villa, Pine City" },
      { src: "/images/villas-pine-city/villa-2.png", alt: "Mountain villa with deck and stone base, Pine City" },
      { src: "/images/villas-pine-city/villa-3.png", alt: "Timber and glass chalet-style villa, Pine City" },
      { src: "/images/villas-pine-city/villa-4.png", alt: "Aerial view of terraced mountain villa, Pine City" },
    ],
  },
  {
    slug: "hse-equipment",
    title: "Supply of HSE Equipment",
    count: 7,
    images: [
      { src: "/images/hse/safety-helmet.jpg", alt: "Safety helmets (PPE)" },
      { src: "/images/hse/safety-gloves.jpg", alt: "Protective safety gloves" },
      { src: "/images/hse/safety-boots.jpg", alt: "Steel-toe safety boots" },
      { src: "/images/hse/face-shield.jpg", alt: "Protective face shield" },
      { src: "/images/hse/coverall.jpg", alt: "Protective coverall" },
      { src: "/images/hse/hi-vis-coverall.jpg", alt: "High-visibility coverall" },
      { src: "/images/hse/electrician-tool-belt.jpg", alt: "Electrician tool belt and equipment" },
    ],
  },
  {
    slug: "fire-equipment",
    title: "Supply of Fire-Fighting Equipment",
    count: 3,
    images: [
      { src: "/images/hse/firefighting-suit.jpg", alt: "Firefighting suit with SCBA breathing apparatus" },
      { src: "/images/hse/fire-fighting-products.jpg", alt: "Fire fighting products and equipment" },
      { src: "/images/hse/fire-equipment-2.png", alt: "Fire extinguishers, hoses, alarms and fire-fighting equipment" },
    ],
  },
  {
    slug: "work-at-height",
    title: "Supply of Work-at-Height Equipment",
    count: 3,
    images: [
      { src: "/images/hse/fall-harness.jpg", alt: "Fall protection harness and lanyard" },
      { src: "/images/hse/work-at-height-1.png", alt: "Fall-arrest harness, lanyard and tool belt" },
      { src: "/images/hse/work-at-height-2.png", alt: "Tool-tethering belt and work-at-height accessories" },
    ],
  },
  { slug: "prayer-area-bridge-joyland", title: "Construction of Prayer Area Building & Connecting Bridge, Joyland", count: 4 },
  {
    slug: "solar-power",
    title: "Design & Installation of Solar Power System",
    count: 4,
    images: [
      { src: "/images/solar/solar-1.png", alt: "Rooftop solar PV panel array on steel mounting structure" },
      { src: "/images/solar/solar-2.png", alt: "Rooftop solar PV array on steel carport-style mounting" },
      { src: "/images/solar/solar-3.png", alt: "Rooftop solar panel canopy over a paved terrace" },
      { src: "/images/solar/solar-4.png", alt: "Solar panel installation over a city skyline" },
    ],
  },
  {
    slug: "ofc-cable",
    title: "Laying of OFC Cable",
    count: 3,
    images: [
      { src: "/images/ofc-cable/ofc-1.jpg", alt: "Optical fiber cable trench dug along a roadside" },
      { src: "/images/ofc-cable/ofc-2.jpg", alt: "Crew laying cable along a roadside median" },
      { src: "/images/ofc-cable/ofc-3.png", alt: "Workers laying OFC cable in a roadside median" },
    ],
  },
  { slug: "watch-tower", title: "Watch Tower Construction", count: 4 },
  {
    slug: "bridge",
    title: "Bridge Design & Construction",
    count: 3,
    images: [
      { src: "/images/bridge/bridge-1.jpg", alt: "Bridge under construction over a riverbed" },
      { src: "/images/bridge/bridge-2.jpg", alt: "Completed concrete girder bridge on piers" },
      { src: "/images/bridge/bridge-3.jpg", alt: "Rebar cage for a bridge girder being tied on site" },
    ],
  },
  {
    slug: "building",
    title: "Building Design & Construction",
    count: 4,
    images: [
      { src: "/images/building/building-1.jpg", alt: "Building under construction — concrete columns and masonry walls" },
      { src: "/images/building/building-2.jpg", alt: "Building raft foundation with column rebar starters" },
      { src: "/images/building/building-3.jpg", alt: "Foundation rebar mat with column cages" },
      { src: "/images/building/building-4.jpg", alt: "Night concrete pour with boom pump on a building frame" },
    ],
  },
  {
    slug: "remodeling",
    title: "Remodeling & Upgradation Works",
    count: 3,
    images: [
      { src: "/images/remodeling/office-1.jpg", alt: "Finished office interior with wood flooring and fit-out" },
      { src: "/images/remodeling/office-2.jpg", alt: "Wood-slat panelled office wall with split AC units" },
      { src: "/images/remodeling/office-3.jpg", alt: "Completed wood-panelled interior with recessed lighting" },
    ],
  },
  { slug: "sports", title: "Sports Infrastructure Development", count: 4 },
  { slug: "lifts", title: "Passenger Lifts Installation & Commissioning", count: 3 },
  { slug: "farmhouses-karor", title: "Design & Construction of Farm Houses, Kotli Sattian", count: 4 },
];
