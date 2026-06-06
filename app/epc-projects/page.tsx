import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { epcProjects } from "@/lib/epc";

export const metadata: Metadata = {
  title: "EPC Projects",
  description:
    "Turnkey EPC (Engineering, Procurement & Construction) projects by Wield Developers — utility-scale solar and wind energy systems delivered from feasibility to commissioning.",
};

export default function EpcProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="EPC Projects"
        title="Turnkey energy projects, end to end"
        description="Engineering, Procurement & Construction — we deliver complete solar and wind energy systems from feasibility and design through supply, installation and grid-connected commissioning."
        crumbs={[{ label: "EPC Projects" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our EPC Portfolio"
            title="Delivered & ongoing EPC projects"
            description="This portfolio keeps growing — every project includes full descriptions and a photo gallery that we update as work progresses."
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2">
            {epcProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/epc-projects/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon name={p.icon} className="h-7 w-7" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        p.status === "Ongoing"
                          ? "bg-eco-50 text-eco-600"
                          : "bg-navy-50 text-navy-600"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-display text-3xl font-extrabold text-navy-900">
                      {p.capacity}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                      {p.type} EPC
                    </span>
                  </div>

                  <h2 className="mt-2 font-display text-xl font-bold leading-snug text-navy-900">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {p.client} · {p.year}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {p.summary}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
                    View project & gallery
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl bg-navy-50/70 p-8 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900">
                Looking for our full track record?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Browse all completed and ongoing projects across every sector.
              </p>
            </div>
            <ButtonLink href="/projects" variant="secondary" className="shrink-0">
              All Projects
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        title="Planning an EPC project?"
        description="From feasibility to commissioning — talk to our engineering team about your solar, wind or power infrastructure project."
      />
    </>
  );
}
