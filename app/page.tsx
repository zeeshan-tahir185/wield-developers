import {
  ArrowRight,
  Wind,
  Sun,
  CheckCircle2,
  ShieldCheck,
  Award,
  Building2,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { ServiceCard, ProjectCard, StatCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { stats, coreValues } from "@/lib/company";
import { site } from "@/lib/site";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.filter((p) => p.status === "Ongoing").slice(0, 6);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 pt-28">
        <div className="bg-blueprint absolute inset-0 opacity-60" />
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-navy-600/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gold-500/15 blur-3xl" />

        <div className="container-px relative grid items-center gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-navy-700 bg-navy-900/60 px-4 py-1.5 text-xs font-medium text-gold-300 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-eco-400" />
              Building Pakistan since {site.foundedYear} · PEC · SECP Registered
            </div>

            <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Engineering a{" "}
              <span className="text-gradient-gold">smarter, stronger</span> &amp;
              sustainable future
            </h1>

            <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
              {site.legalName} is a multidisciplinary engineering, infrastructure
              and technology group — delivering integrated solutions across
              electrical manufacturing, renewable energy, construction, IT &amp;
              telecom, software and procurement, backed by 100+ engineers and an
              ISO 9001:2015 certified quality system.
            </p>

            <div className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/services" variant="primary" size="lg">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline" size="lg">
                View Projects
              </ButtonLink>
            </div>

            <div className="animate-fade-up mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-navy-800 pt-8">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {s.value}
                    <span className="text-gold-400">{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs text-navy-100/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <Photo
                src="/images/high-rise-buildings.jpg"
                alt="Modern high-rise buildings — engineering & construction by Wield Developers"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[4/5] w-full rounded-3xl border border-navy-700/60 shadow-2xl shadow-navy-950/60"
              />
              <div className="animate-float absolute -bottom-6 -left-6 hidden rounded-2xl border border-navy-700 bg-navy-900/90 p-5 shadow-2xl backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-eco-500/20 text-eco-400">
                    <Wind className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-white">225+</div>
                    <div className="text-xs text-navy-100/60">Wind Mills Installed</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-8 hidden rounded-2xl border border-navy-700 bg-navy-900/90 p-4 shadow-2xl backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500/20 text-gold-300">
                    <Sun className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-white">2.5 MW</div>
                    <div className="text-xs text-navy-100/60">Solar &amp; Wind Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="border-b border-slate-100 bg-white py-8">
        <div className="container-px flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Fully registered &amp; compliant with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "ISO 9001:2015 Certified",
              "Pakistan Engineering Council (PEC)",
              "SECP",
              "FBR",
              "Rawalpindi Chamber of Commerce (RCCI)",
            ].map((r) => (
              <span
                key={r}
                className="flex items-center gap-2 text-sm font-semibold text-navy-800"
              >
                <CheckCircle2 className="h-4 w-4 text-eco-500" />
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT TEASER ============ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <Photo
                src="/images/team/team-1.jpg"
                alt="Wield Developers site team in safety gear"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[5/4] w-full rounded-3xl border border-slate-200"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy-900 p-6 text-white shadow-2xl sm:block">
                <div className="font-display text-4xl font-extrabold text-gold-400">
                  100<span className="text-white">+</span>
                </div>
                <div className="mt-1 max-w-[8rem] text-sm text-navy-100/70">
                  Engineers, diploma holders &amp; skilled staff
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Wield Developers"
              title={
                <>
                  Integrated solutions <br className="hidden sm:block" />
                  under one roof
                </>
              }
              description={`Founded in ${site.foundedYear} and incorporated as a Private Limited company in 2025, we have grown into a multidisciplinary group of eight specialised divisions — serving public and private sector clients nationwide.`}
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, text: "Strong financial standing for large-scale ventures" },
                { icon: Award, text: "Proven track record of government projects" },
                { icon: Building2, text: "Precision, integrity & sustainable development" },
                { icon: CheckCircle2, text: "Backed by advanced machinery & software" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm leading-relaxed text-slate-700">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink href="/about" variant="secondary">
                More About Us
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="relative bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Eight specialised divisions, one trusted partner"
              description="From electrical manufacturing and renewable energy to construction, IT & telecom, software and procurement — integrated expertise delivered under one roof."
            />
            <ButtonLink href="/services" variant="ghost" className="shrink-0">
              All divisions
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RENEWABLE ENERGY FEATURE ============ */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="bg-blueprint absolute inset-0 opacity-50" />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-eco-500/10 blur-3xl" />
        <div className="container-px relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Renewable Energy</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Powering progress with{" "}
              <span className="text-gradient-gold">clean energy</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100/80">
              Beyond conventional construction, we are actively contributing to
              Pakistan&apos;s renewable energy infrastructure — from utility-scale
              solar systems to wind farms and hybrid energy installations.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-navy-700 bg-navy-900/50 p-6">
                <Wind className="h-8 w-8 text-eco-400" />
                <h3 className="mt-4 font-display text-lg font-bold">Wind Energy</h3>
                <p className="mt-2 text-sm text-navy-100/70">
                  Turbine installation, commissioning &amp; grid integration — up to
                  2.5 MW systems delivered.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-700 bg-navy-900/50 p-6">
                <Sun className="h-8 w-8 text-gold-400" />
                <h3 className="mt-4 font-display text-lg font-bold">Solar Power</h3>
                <p className="mt-2 text-sm text-navy-100/70">
                  Design, installation &amp; commissioning of on-grid and hybrid
                  solar systems.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/services/solar-power-systems" variant="primary">
                Solar Solutions
              </ButtonLink>
              <ButtonLink href="/services/wind-turbine-installation" variant="outline">
                Wind Solutions
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Photo
              src="/images/solar/solar-2.png"
              alt="Rooftop solar power system installed by Wield Developers"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-square w-full rounded-3xl border border-navy-700/60 shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 py-16">
        <div className="bg-blueprint absolute inset-0 opacity-40" />
        <div className="container-px relative grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Why Choose Us"
            title="Values that build trust"
            description="Every project reflects our core values of integrity, safety, innovation and long-term reliability."
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/5">
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

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-px">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <SectionHeading
              eyebrow="Past Performance"
              title="Projects currently in progress"
              description="A snapshot of the ongoing work delivering value to clients across Pakistan."
            />
            <ButtonLink href="/projects" variant="ghost" className="shrink-0">
              All projects
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY TEASER ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our Work"
            title="A glimpse of what we build"
            description="From transformer manufacturing and switchgear to solar, wind, bridges and buildings — explore our project gallery."
            className="mb-14"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { src: "/images/building/building-1.jpg", alt: "Building under construction" },
              { src: "/images/solar/solar-1.png", alt: "Rooftop solar power system" },
              { src: "/images/bridge/bridge-1.jpg", alt: "Bridge construction" },
              { src: "/images/transformers/windings.jpg", alt: "Transformer windings" },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 60}>
                <Photo
                  src={g.src}
                  alt={g.alt}
                  className="aspect-square w-full rounded-2xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/gallery" variant="secondary" size="lg">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
