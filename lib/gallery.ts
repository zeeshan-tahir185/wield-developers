// Gallery categories taken from the company profile. Categories with real
// client-supplied photos list them in `images`; remaining slots (up to `count`)
// render branded "coming soon" placeholders until more photos arrive.

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
    title: "Transformers & Electrical Manufacturing",
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
  { slug: "residential-villas-mirpur", title: "Residential Villas & Guest Houses, Mirpur", count: 4 },
  { slug: "villas-pine-city", title: "Villas, Pine City", count: 4 },
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
    title: "Supply of Fire Equipment",
    count: 3,
    images: [
      { src: "/images/hse/firefighting-suit.jpg", alt: "Firefighting suit with SCBA breathing apparatus" },
      { src: "/images/hse/fire-fighting-products.jpg", alt: "Fire fighting products and equipment" },
    ],
  },
  {
    slug: "work-at-height",
    title: "Work-at-Height Equipment",
    count: 3,
    images: [
      { src: "/images/hse/fall-harness.jpg", alt: "Fall protection harness and lanyard" },
    ],
  },
  { slug: "prayer-area-bridge-joyland", title: "Prayer Area & Connecting Bridge, Joyland", count: 4 },
  { slug: "solar-power", title: "Solar Power System Design & Installation", count: 4 },
  { slug: "ofc-cable", title: "Laying of OFC Cable", count: 3 },
  { slug: "wind-mill", title: "Wind Mill Installation", count: 4 },
  { slug: "watch-tower", title: "Watch Tower Construction", count: 4 },
  { slug: "bridge", title: "Bridge Construction", count: 3 },
  { slug: "building", title: "Building Construction", count: 4 },
  { slug: "hospital", title: "Hospital Construction", count: 3 },
  { slug: "remodeling", title: "Remodeling & Upgradation Works", count: 3 },
  { slug: "sports", title: "Sports Infrastructure Development", count: 4 },
  { slug: "lifts", title: "Lifts Installation & Commissioning", count: 3 },
  { slug: "farmhouses-karor", title: "Farmhouses, Karor — Kotli Sattian", count: 4 },
];
