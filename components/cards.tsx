import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./ui/Icon";
import type { Service } from "@/lib/services";
import type { Project } from "@/lib/projects";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-2xl hover:shadow-navy-900/10"
    >
      {/* hover accent corner */}
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-gold-400/10 transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />

      <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
        <Icon name={service.icon} className="h-7 w-7" />
      </div>

      <span className="mt-5 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600">
        {service.category}
      </span>
      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-navy-700">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {service.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors group-hover:text-gold-600">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const statusClasses =
    project.status === "Ongoing"
      ? "bg-eco-500/15 text-eco-600 border-eco-500/30"
      : "bg-navy-50 text-navy-600 border-navy-200";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
          {project.category}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {project.status}
        </span>
      </div>
      <h3 className="mt-4 flex-1 font-display text-base font-bold leading-snug text-navy-900">
        {project.title}
      </h3>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
        <span className="font-medium text-slate-700">{project.client}</span>
        <span className="text-slate-400">{project.year}</span>
      </div>
    </article>
  );
}

export function StatCard({
  value,
  label,
  suffix = "",
}: {
  value: string;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        {value}
        <span className="text-gold-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-navy-100/70">
        {label}
      </div>
    </div>
  );
}
