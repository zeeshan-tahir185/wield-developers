import type { Metadata } from "next";
import { Target, Compass, Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { StatCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { boardOfDirectors, coreValues, milestones, stats } from "@/lib/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2013, Wield Developers (Pvt.) Ltd. is a multidisciplinary engineering, infrastructure, technology and industrial solutions company — an ISO 9001:2015 certified group of eight specialised divisions delivering integrated solutions across Pakistan.",
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
              title="A multidisciplinary engineering, technology & industrial group"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Founded in {site.foundedYear} as Wield Engineers, the company
                built a strong reputation for delivering quality engineering and
                infrastructure solutions across Pakistan. As part of its continued
                growth and diversification, the organisation was incorporated in
                August 2025 as Wield Developers (Private) Limited under the
                Securities and Exchange Commission of Pakistan.
              </p>
              <p>
                Today, Wield Developers is a multidisciplinary engineering,
                infrastructure, technology and industrial solutions company serving
                public and private sector clients nationwide. Through specialised
                business divisions, we deliver integrated solutions across
                electrical equipment manufacturing, renewable energy, construction
                and engineering consultancy, road infrastructure, information
                technology and telecommunications, software development,
                procurement and supply chain management, and HSE services.
              </p>
              <p>
                Our integrated structure enables us to provide comprehensive
                end-to-end solutions under one roof, combining the expertise of
                multiple divisions to support government institutions, utilities,
                industrial organisations, commercial enterprises and development
                projects with innovative, cost-effective and sustainable
                solutions.
              </p>
              <p>
                Our operations are governed by an ISO 9001:2015 Certified Quality
                Management System, reflecting our commitment to continuous
                improvement and customer satisfaction. Registered with PEC, SECP,
                FBR and RCCI, and backed by experienced engineers, consultants
                and technical specialists, we remain committed to creating
                long-term value through technical excellence, integrity and
                reliable service delivery.
              </p>
            </div>
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-gold-500/30 bg-gold-500/10 px-5 py-3">
              <span className="text-sm font-bold uppercase tracking-wider text-navy-800">
                Engineering <span className="text-gold-500">·</span> Procurement{" "}
                <span className="text-gold-500">·</span> Construction
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src="/images/remodeling/office-1.jpg"
              alt="Wield Developers office interior"
              sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* CEO'S MESSAGE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-12">
          <Reveal delay={120} className="lg:col-span-7">
            <Quote className="h-12 w-12 text-gold-400" />
            <blockquote className="mt-6 space-y-4 text-lg leading-relaxed text-navy-800">
              <p>
                &ldquo;Since 2013, Wield Developers (Pvt.) Ltd. has grown into a
                diversified organisation built on the principles of trust,
                excellence, innovation and customer satisfaction. What began as an
                engineering and infrastructure company has evolved into a
                multidisciplinary enterprise providing integrated solutions across
                engineering, construction, manufacturing, renewable energy,
                information technology, telecommunications, software development and
                HSE services.
              </p>
              <p>
                Our strength lies in our ability to bring together specialised
                expertise from multiple divisions to deliver comprehensive
                solutions under one roof. Supported by a highly skilled workforce,
                modern technologies and robust HSE practices, we consistently
                deliver reliable solutions that create long-term value for our
                clients and stakeholders.
              </p>
              <p>
                As we continue to expand our capabilities and embrace emerging
                opportunities, our focus remains on contributing to national
                development through integrated, future-ready solutions — building a
                stronger, smarter and more sustainable future.&rdquo;
              </p>
            </blockquote>
            <footer className="mt-6">
              <div className="font-display text-lg font-bold text-navy-900">
                Syed Muhammad Ali
              </div>
              <div className="text-sm text-slate-500">
                Chief Executive Officer, {site.legalName}
              </div>
            </footer>
          </Reveal>
          <Reveal className="order-first lg:order-last lg:col-span-5">
            <Photo
              src="/images/team/ceo-syed-muhammad-ali.jpg"
              alt="Syed Muhammad Ali, Chief Executive Officer"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-3xl border border-slate-200"
            />
          </Reveal>
        </div>
      </section>

      {/* DIRECTOR'S MESSAGE */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Photo
              src="/images/team/md-ikram-ul-haq.jpg"
              alt="Air Vice Marshall Ikram Ul Haq Noor (Retd), Managing Director"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full rounded-3xl"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <Quote className="h-12 w-12 text-gold-400" />
            <blockquote className="mt-6 space-y-4 text-lg leading-relaxed text-navy-800">
              <p>
                &ldquo;Since 2013, Wield Developers (Pvt.) Ltd. has been built on a
                foundation of trust, excellence and innovation. Over the years, we
                have successfully delivered a diverse range of projects in civil
                infrastructure, renewable energy, power systems, transformer
                manufacturing, electrical testing services, IT &amp; telecom
                services, software development and specialised maintenance
                solutions.
              </p>
              <p>
                Our expertise has expanded into modern engineering systems,
                high-rise watch towers, strategic security installations and
                critical infrastructure projects that support national development.
                Drawing upon more than four decades of leadership, strategic
                planning and organisational management experience gained during my
                career in the Pakistan Air Force, I firmly believe that lasting
                success is achieved through professionalism, innovation and an
                unwavering commitment to excellence.
              </p>
              <p>
                Supported by a highly skilled team, advanced technologies and
                strong HSE practices, we deliver engineering solutions with
                precision, safety and efficiency. As we continue to grow, our focus
                remains on providing sustainable, future-ready solutions that create
                value for our clients and contribute positively to the nation&apos;s
                progress.&rdquo;
              </p>
            </blockquote>
            <footer className="mt-6">
              <div className="font-display text-lg font-bold text-navy-900">
                Air Vice Marshall Ikram Ul Haq Noor, SI(M)(Retd)
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
                To be a leading multidisciplinary enterprise recognised for
                delivering integrated engineering, infrastructure, technology and
                industrial solutions under one roof. We aspire to create lasting
                value through innovation, collaboration and operational excellence
                — leveraging the collective strength of our specialised divisions
                to meet the evolving needs of our clients and contribute to
                sustainable national development.
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
                To provide comprehensive, reliable and future-ready solutions
                through a unified network of specialised departments working
                seamlessly together. By combining expertise in engineering,
                construction, manufacturing, renewable energy, information
                technology, telecommunications, software development and HSE
                services, we deliver end-to-end solutions that maximise efficiency,
                quality and value for our clients.
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

      {/* BOARD OF DIRECTORS */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our Leadership"
            title="Board of Directors"
            description="The leadership steering Wield Developers across its multidisciplinary divisions."
            className="mb-14"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {boardOfDirectors.map((person, i) => (
              <Reveal key={person.name} delay={(i % 4) * 60}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  {person.image ? (
                    <Photo
                      src={person.image}
                      alt={`${person.name}, ${person.designation}`}
                      sizes="64px"
                      className="h-16 w-16 rounded-full"
                    />
                  ) : (
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-display text-xl font-bold text-gold-300">
                      {person.name
                        .replace(/^(Engr\.|Dr\.|Air Cdr\.|Syed|Malik)\s/, "")
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
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

      <CTASection />
    </>
  );
}
