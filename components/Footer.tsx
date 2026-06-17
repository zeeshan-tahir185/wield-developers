import Link from "next/link";
import { Mail, Phone, MapPin, Smartphone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="bg-blueprint absolute inset-0 opacity-40" />
      <div className="relative">
        {/* Top */}
        <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-100/70">
              {site.legalName} — an ISO 9001:2015 certified multidisciplinary
              group delivering integrated engineering, manufacturing, technology
              and infrastructure solutions across Pakistan since {site.foundedYear}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.registrations.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-navy-700 bg-navy-900/60 px-3 py-1 text-xs font-medium text-gold-300"
                >
                  {r} Registered
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-navy-100/70 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-navy-100/70 transition-colors hover:text-gold-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-medium text-gold-300 hover:text-gold-200"
                >
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-navy-100/70">{site.contact.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 text-navy-100/70 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="flex items-center gap-3 text-navy-100/70 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.mobileHref}`}
                  className="flex items-center gap-3 text-navy-100/70 transition-colors hover:text-gold-300"
                >
                  <Smartphone className="h-4 w-4 shrink-0 text-gold-400" />
                  {site.contact.mobile}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800">
          <div className="container-px flex flex-col items-center justify-between gap-4 py-6 text-xs text-navy-100/50 sm:flex-row">
            <p>
              © {site.foundedYear}–2026 {site.legalName}. All rights reserved.
            </p>
            <p>
              Registered with PEC, SECP, FBR &amp; RCCI · Rawalpindi, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
