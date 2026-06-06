import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { services, serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore 20 specialised services from Wield Developers — transformer manufacturing, CT & PT, wind & solar energy, road and bridge construction, building, HSE and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Expertise"
        title="Engineering & construction services"
        description="A diverse range of services backed by advanced machinery, cutting-edge software and a highly qualified team — ensuring precision, efficiency and excellence in every project."
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-px space-y-20">
          {serviceCategories.map((category) => {
            const items = services.filter((s) => s.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <div className="mb-10 flex items-center gap-4">
                  <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                    {category}
                  </h2>
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-sm font-semibold text-navy-600">
                    {items.length}
                  </span>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((service, i) => (
                    <Reveal key={service.slug} delay={(i % 3) * 70}>
                      <ServiceCard service={service} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Need a service not listed here?"
        description="Our capabilities extend beyond this list. Tell us about your project and our engineers will craft a tailored solution."
      />
    </>
  );
}
