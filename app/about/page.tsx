import type { Metadata } from "next";
import { Target, Compass, Quote, Wrench, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { StatCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { coreStaff, coreValues, milestones, machinery, stats } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2013, Wield Developers (Pvt.) Ltd. is a reputable engineering, construction and electrical services company with 100+ engineers, delivering high-quality infrastructure and power solutions across Pakistan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building with precision, integrity & vision"
        description={`Since ${site.foundedYear}, ${site.legalName} has been built on a foundation of trust, excellence and innovation — delivering infrastructure that drives national progress.`}
        crumbs={[{ label: "About" }]}
      />

      {/* INTRO */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="Engineering, construction & electrical services"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Founded in {site.foundedYear}, Wield Developers (Private) Limited
                is a reputable engineering, construction and electrical services
                company with a strong track record in government and private
                sector projects.
              </p>
              <p>
                We specialise in civil works, transformer manufacturing (power and
                distribution), CT &amp; PT production, transformer testing
                services, winding fabrication, OCB &amp; VCB repair and
                maintenance, and renewable energies — delivering reliable,
                standards-compliant solutions for the power and infrastructure
                sector.
              </p>
              <p>
                We are committed to health, safety and environmental (HSE)
                standards, ensuring the use of certified safety equipment, PPE
                and strict site safety protocols to maintain safe working
                environments across all projects and manufacturing operations.
              </p>
              <p>
                Backed by 100+ experienced engineers, technicians and skilled
                workforce, we maintain efficiency, quality and professionalism in
                every project. Registered with the Pakistan Engineering Council
                (PEC), SECP, FBR and RCCI, we continue to deliver trusted,
                integrated engineering solutions with a commitment to safety,
                reliability and long-term performance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder
              label="Wield Developers HQ"
              icon="Building2"
              tone="light"
              className="aspect-[4/3] w-full rounded-3xl border border-slate-200"
            />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 py-16">
        <div className="bg-blueprint absolute inset-0 opacity-40" />
        <div className="container-px relative grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </section>

      {/* DIRECTOR'S MESSAGE */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ImagePlaceholder
              label="Message by the Director"
              icon="Users"
              tone="navy"
              className="aspect-[4/5] w-full rounded-3xl"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <Quote className="h-12 w-12 text-gold-400" />
            <blockquote className="mt-6 space-y-4 text-lg leading-relaxed text-navy-800">
              <p>
                &ldquo;Since 2013, Wield Developers (Pvt.) Ltd. has been built on
                a foundation of trust, excellence and innovation. We have
                successfully delivered a diverse portfolio of projects including
                civil infrastructure, solar energy solutions, wind mill
                installation, transformer manufacturing (power and distribution),
                CT &amp; PT manufacturing, electrical testing services, and OCB
                &amp; VCB repair and maintenance.
              </p>
              <p>
                Our expertise has expanded into modern engineering systems and
                specialised structures such as high-rise watch towers and
                strategic installations for security, surveillance and industrial
                applications. We are also actively contributing to renewable and
                power infrastructure development with a focus on efficiency and
                sustainability.
              </p>
              <p>
                Backed by a highly skilled team, advanced technologies and strong
                HSE practices, we ensure precision, safety and reliability in
                every project — delivering sustainable engineering solutions that
                support national development.&rdquo;
              </p>
            </blockquote>
            <footer className="mt-6">
              <div className="font-display text-lg font-bold text-navy-900">
                AVM Ikram Ul Haq
              </div>
              <div className="text-sm text-slate-500">
                Managing Director, {site.legalName}
              </div>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-navy-50/50 p-9">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-400">
                <Compass className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                To be a leading construction firm recognised for excellence,
                reliability and innovation. We aspire to expand our reach, embrace
                modern engineering practices and construction technologies, and
                play a key role in shaping the future of power and infrastructure
                — upholding integrity in all our projects.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-slate-200 bg-navy-50/50 p-9">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-400">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                To deliver high-quality, sustainable and innovative engineering
                and construction solutions that exceed client expectations. We are committed to the
                highest standards of professionalism, efficiency and safety while
                contributing to the nation&apos;s infrastructure development —
                creating structures that stand the test of time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our Values"
            title="The principles we build on"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title="A decade of growth & milestones"
            className="mb-16"
          />
          <div className="relative mx-auto max-w-4xl">
            {/* vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-slate-200 md:left-1/2" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 80}>
                  <div
                    className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2" />
                    {/* node */}
                    <div className="absolute left-4 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-gold-500 shadow-lg md:left-1/2">
                      <span className="h-2 w-2 rounded-full bg-navy-950" />
                    </div>
                    <div
                      className={`ml-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:ml-0 md:w-1/2 ${
                        i % 2 === 0 ? "md:mr-10 md:text-right" : "md:ml-10"
                      }`}
                    >
                      <span className="inline-block rounded-full bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-700">
                        {m.year}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our People"
            title="Meet our core leadership & team"
            description="A multidisciplinary team of qualified engineers, managers and specialists driving every project forward."
            className="mb-14"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreStaff.map((person, i) => (
              <Reveal key={person.name} delay={(i % 4) * 60}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-display text-xl font-bold text-gold-300">
                    {person.name
                      .replace(/^(Engr\.|Dr\.|Air Cdr\.|Syed|Malik)\s/, "")
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold text-navy-900">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-gold-600">
                    {person.designation}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{person.qualification}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our Resources</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Equipped with the latest machinery
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Wield Developers is fully equipped with the latest machinery,
              industry-leading software and a team of highly qualified
              professionals to execute projects of any scale with precision.
              Project-specific machinery can be hired as per requirement.
            </p>
            <div className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {machinery.map((m) => (
                <div key={m} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-eco-500" />
                  {m}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <ImagePlaceholder
                label="Machinery & Equipment Fleet"
                icon="Construction"
                tone="navy"
                className="aspect-[4/3] w-full rounded-3xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gold-500 p-5 text-navy-950 shadow-2xl sm:flex sm:items-center sm:gap-3">
                <Wrench className="h-8 w-8" />
                <div>
                  <div className="font-display text-lg font-bold">Heavy Fleet</div>
                  <div className="text-xs font-medium">Owned &amp; project-hired</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
