"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md shadow-lg shadow-navy-950/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Logo light />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-gold-300"
                        : "text-navy-100 hover:text-white"
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3">
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-navy-700/50 bg-navy-900/95 p-3 shadow-2xl shadow-navy-950/50 backdrop-blur-xl">
                        {services.slice(0, 10).map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="rounded-xl px-3 py-2 text-sm text-navy-100 transition-colors hover:bg-navy-800 hover:text-gold-300"
                          >
                            {s.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="col-span-2 mt-1 rounded-xl bg-gold-500/10 px-3 py-2 text-center text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-500/20"
                        >
                          View all 20 services →
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              );
            }
            // Keep the long label compact in the bar.
            const label =
              link.href === "/transformers" ? "Transformers" : link.label;
            // (compact label for the long nav item)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-gold-300"
                      : "text-navy-100 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            <Phone className="h-4 w-4" />
            {site.contact.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[64px] z-40 origin-top overflow-y-auto bg-navy-950/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[calc(100vh-64px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-navy-800 text-gold-300"
                    : "text-navy-100 hover:bg-navy-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-base font-semibold text-navy-950"
            >
              <Phone className="h-4 w-4" />
              Call {site.contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
