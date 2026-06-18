import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { StatCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Past performance of Wield Developers — completed and ongoing projects across solar, wind, civil infrastructure, buildings, bridges and more.",
};

export default function ProjectsPage() {
  const projectStats = [
    { value: String(projects.length), label: "Projects Delivered", suffix: "+" },
    { value: "8", label: "Business Divisions", suffix: "" },
    { value: "20+", label: "Years of Delivery", suffix: "" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Past Performance"
        title="Projects that shape progress"
        description="From multi-megawatt solar and wind systems to bridges, buildings and surveillance infrastructure — a track record of delivery across Pakistan."
        crumbs={[{ label: "Projects" }]}
      />

      {/* STATS */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 py-14">
        <div className="bg-blueprint absolute inset-0 opacity-40" />
        <div className="container-px relative grid grid-cols-1 gap-10 sm:grid-cols-3">
          {projectStats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-px">
          <ProjectsExplorer />
          <p className="mt-12 rounded-2xl border border-slate-200 bg-navy-50/50 p-5 text-center text-sm text-slate-500">
            Other projects and work orders can be provided upon request.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
