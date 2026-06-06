import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Photo } from "@/components/ui/Photo";
import { CTASection } from "@/components/CTASection";
import { galleryCategories } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the work of Wield Developers — villas, solar systems, wind mills, watch towers, bridges, buildings, sports infrastructure and more.",
};

// Rotate icons per category for visual variety in placeholders.
const iconFor: Record<string, string> = {
  transformers: "Factory",
  "residential-villas-mirpur": "Building2",
  "villas-pine-city": "Building2",
  "hse-equipment": "ShieldCheck",
  "fire-equipment": "Flame",
  "work-at-height": "HardHat",
  "prayer-area-bridge-joyland": "Waypoints",
  "solar-power": "Sun",
  "ofc-cable": "Network",
  "wind-mill": "Wind",
  "watch-tower": "Building2",
  bridge: "Waypoints",
  building: "Building2",
  hospital: "Building2",
  remodeling: "Construction",
  sports: "Trophy",
  lifts: "ArrowUpDown",
  "farmhouses-karor": "Building2",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Project gallery"
        description="A visual journey through our completed and ongoing work — across renewable energy, civil infrastructure, buildings and specialised projects."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px space-y-16">
          {galleryCategories.map((cat) => (
            <div key={cat.slug}>
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
                  {cat.title}
                </h2>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {(() => {
                  const images = cat.images ?? [];
                  const placeholderCount = Math.max(0, cat.count - images.length);
                  return (
                    <>
                      {images.map((img, i) => (
                        <Reveal key={img.src} delay={(i % 4) * 50}>
                          <Photo
                            src={img.src}
                            alt={img.alt}
                            className="aspect-[4/3] w-full rounded-2xl"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </Reveal>
                      ))}
                      {Array.from({ length: placeholderCount }).map((_, i) => (
                        <Reveal key={`ph-${i}`} delay={((images.length + i) % 4) * 50}>
                          <ImagePlaceholder
                            label={cat.title}
                            icon={iconFor[cat.slug] ?? "Building2"}
                            tone={(images.length + i) % 2 === 0 ? "navy" : "light"}
                            className="aspect-[4/3] w-full rounded-2xl"
                          />
                        </Reveal>
                      ))}
                    </>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
