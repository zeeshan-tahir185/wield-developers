import type { Metadata } from "next";
import { Zap, ShieldCheck, CheckCircle2, Factory, Gauge } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { ServiceCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Transformers & Electrical Services",
  description:
    "Wield Developers' Electrical Equipment Manufacturing division — power & distribution transformer manufacturing (15 kVA–15,000 kVA), CT & PT production, transformer winding, testing & diagnostics, and OCB & VCB manufacturing, repair & refurbishment up to 33 kV.",
};

const capabilities = [
  "Distribution & power transformers — 15 kVA to 15,000 kVA",
  "Oil-immersed units (11 kV / 415 V class)",
  "Current & Potential transformers (CT & PT)",
  "Disc, section, barrel & helical windings",
  "Transformer oil dehydration & oil testing",
  "11 kV cable testing & TTR testing",
  "OCB & VCB overhaul up to 33 kV",
  "Complete 11 kV VCB panels",
  "Transformer & HT panel repair",
  "Vacuum interrupter servicing & oil filtration",
  "Performance restoration & preventive maintenance",
];

const applications = [
  { title: "Utility & Grid" },
  { title: "Industrial Plants" },
  { title: "Commercial Buildings" },
  { title: "Infrastructure Projects" },
];

const workshopPhotos = [
  { src: "/images/transformers/windings.jpg", alt: "Three-phase transformer windings" },
  { src: "/images/transformers/distribution-transformer.jpg", alt: "Distribution transformer" },
  { src: "/images/transformers/switchgear-vcb.jpg", alt: "VCB switchgear panels" },
  { src: "/images/transformers/transformer-workshop.jpg", alt: "Power transformer in the workshop" },
];

// Full set of authentic transformer & electrical photos from our facility.
const galleryPhotos = [
  { src: "/images/transformers/power-transformer.jpg", alt: "Oil-filled power transformer with radiators and bushings" },
  { src: "/images/transformers/transformer-workshop.jpg", alt: "Large power transformer in our manufacturing workshop" },
  { src: "/images/transformers/distribution-transformer.jpg", alt: "Distribution transformer manufactured at our facility" },
  { src: "/images/transformers/windings.jpg", alt: "Three-phase transformer windings" },
  { src: "/images/transformers/switchgear-vcb.jpg", alt: "Vacuum circuit breaker (VCB) switchgear panels" },
  { src: "/images/transformers/bushings-closeup.jpg", alt: "Transformer bushings and tap-changer close-up" },
  { src: "/images/transformers/pole-installation-diagram.jpg", alt: "25 kVA single-phase pole transformer installation diagram" },
];

export default function TransformersPage() {
  const powerServices = services.filter(
    (s) => s.category === "Electrical Equipment Manufacturing"
  );

  return (
    <>
      <PageHero
        eyebrow="Power & Electrical Division"
        title="Transformers & Electrical Services"
        description="Complete, standards-compliant power solutions — from distribution transformer manufacturing and CT & PT production to winding, testing, maintenance and circuit-breaker services."
        crumbs={[{ label: "Transformers & Electrical" }]}
      />

      {/* INTRO */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Engineered Power"
              title="Manufacturing reliable power, end to end"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Wield Developers operates a specialised Electrical Equipment
                Manufacturing Division focused on the design, manufacturing,
                testing, refurbishment and maintenance of electrical power
                equipment — including power and distribution transformers,
                instrument transformers (CT &amp; PT) and transformer windings,
                produced at our modern manufacturing facilities.
              </p>
              <p>
                Beyond manufacturing, we provide specialised transformer testing
                and diagnostics, as well as the manufacturing, repair and
                refurbishment of high-voltage Oil and Vacuum Circuit Breakers (OCB
                &amp; VCB) up to 33 kV — all delivered by skilled technicians in
                accordance with applicable international standards.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-700">
                <ShieldCheck className="h-4 w-4 text-eco-500" />
                International standards
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-700">
                <Factory className="h-4 w-4 text-gold-500" />
                Modern manufacturing facilities
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src="/images/transformers/power-transformer.jpg"
              alt="Oil-filled power transformer manufactured by Wield Developers"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full rounded-3xl shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      {/* SPEC HIGHLIGHT BAND */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 py-14">
        <div className="bg-blueprint absolute inset-0 opacity-40" />
        <div className="container-px relative grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {[
            { icon: Zap, value: "15 – 15,000 kVA", label: "Distribution transformer range" },
            { icon: Gauge, value: "CT & PT", label: "Instrument transformers" },
            { icon: Factory, value: "Up to 33 kV", label: "OCB & VCB services" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <s.icon className="h-8 w-8 text-gold-400" strokeWidth={1.6} />
              <div className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-navy-100/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* POWER & ELECTRICAL SERVICES */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="What We Offer"
            title="Our Power & Electrical services"
            description="Five core capabilities covering the full transformer and switchgear lifecycle — explore each in detail."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {powerServices.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES + APPLICATIONS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our Capabilities</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Full lifecycle support
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              From manufacturing and winding to testing, maintenance and
              switchgear overhaul — we cover every stage of your power
              infrastructure.
            </p>
            <div className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco-500" />
                  {c}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200 bg-navy-50/50 p-8">
              <div className="flex items-center gap-2 text-navy-900">
                <Factory className="h-5 w-5 text-gold-500" />
                <h3 className="font-display text-lg font-bold">From our workshop</h3>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {workshopPhotos.map((p) => (
                  <Photo
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    className="aspect-square w-full rounded-2xl"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ))}
              </div>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Applications
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {applications.map((a) => (
                    <span
                      key={a.title}
                      className="rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-medium text-navy-700"
                    >
                      {a.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Gallery"
            title="From our facility"
            description="A look at transformers, windings and switchgear from our Power & Electrical division."
            className="mb-14"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPhotos.map((p, i) => (
              <Reveal
                key={p.src}
                delay={(i % 3) * 60}
                className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
              >
                <Photo
                  src={p.src}
                  alt={p.alt}
                  priority={i === 0}
                  className={`w-full rounded-2xl shadow-sm ${
                    i === 0 ? "aspect-[16/10] lg:aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a reliable power solution?"
        description="Talk to our Power & Electrical team about transformers, CT & PT, testing, maintenance and circuit-breaker services for your project."
      />
    </>
  );
}
