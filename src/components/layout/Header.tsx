"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { StartNameTransferButton } from "@/components/book-service/StartNameTransferButton";
import { primaryNav, services, areas, guideLinks } from "@/lib/nav";
import { professionalServiceDetails } from "@/lib/professionalServices";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b bg-background/90 backdrop-blur-sm transition-shadow duration-300 ${
          scrolled ? "border-border shadow-[0_4px_20px_-8px_rgba(17,43,88,0.15)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-3.5">
          <div className="flex items-center">
            <Logo height={44} />
          </div>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.name === "Services") {
                return (
                  <div key={item.href} className="group relative py-2">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        active ? "text-primary font-semibold" : "text-foreground-dim hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <svg className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </Link>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-64 pt-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200">
                      <div className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group/item block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-foreground"
                          >
                            <div className="font-semibold text-foreground group-hover/item:text-brand-primary transition-colors">{service.name}</div>
                            <div className="mt-0.5 text-xs text-foreground-dim/80">{service.blurb}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.name === "Areas we serve") {
                return (
                  <div key={item.href} className="group relative py-2">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        active ? "text-primary font-semibold" : "text-foreground-dim hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <svg className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </Link>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-48 pt-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200">
                      <div className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                        {areas.map((area) => (
                          <Link
                            key={area.href}
                            href={area.href}
                            className="group/item block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-foreground"
                          >
                            <div className="font-semibold text-foreground group-hover/item:text-brand-primary transition-colors">{area.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.name === "Guide me") {
                const guideActive = pathname.startsWith("/blog") || pathname.startsWith("/faqs");
                return (
                  <div key={item.href} className="group relative py-2">
                    <span
                      className={`flex cursor-default items-center gap-1 text-sm font-medium transition-colors ${
                        guideActive ? "text-primary font-semibold" : "text-foreground-dim group-hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <svg className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </span>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-48 pt-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200">
                      <div className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                        {guideLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group/item block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-foreground"
                          >
                            <div className="font-semibold text-foreground group-hover/item:text-brand-primary transition-colors">{link.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.name === "Other professional services") {
                return (
                  <div key={item.href} className="group relative py-2">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        active ? "text-primary font-semibold" : "text-foreground-dim hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <svg className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </Link>

                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden w-80 pt-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-200">
                      <div className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                        {Object.entries(professionalServiceDetails).map(([slug, service]) => (
                          <Link
                            key={slug}
                            href={`/professional-services/${slug}`}
                            className="group/item block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent-soft hover:text-foreground"
                          >
                            <div className="font-semibold text-foreground group-hover/item:text-brand-primary transition-colors">{service.name}</div>
                            <div className="mt-0.5 text-xs text-foreground-dim/80 line-clamp-2">{service.summary}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-primary font-semibold" : "text-foreground-dim hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <div className="hidden sm:block">
              <StartNameTransferButton />
            </div>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-foreground lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-50 flex flex-col overflow-y-auto bg-surface p-6 lg:hidden shadow-xl">
          <nav className="flex flex-col gap-4 text-lg">
            {primaryNav.map((item) => {
              if (item.name === "Services") {
                return (
                  <div key={item.href} className="border-b border-border pb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-semibold text-foreground hover:text-brand-primary"
                    >
                      {item.name}
                    </Link>
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-foreground-dim hover:text-brand-primary"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.name === "Areas we serve") {
                return (
                  <div key={item.href} className="border-b border-border pb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-semibold text-foreground hover:text-brand-primary"
                    >
                      {item.name}
                    </Link>
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {areas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-foreground-dim hover:text-brand-primary"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.name === "Guide me") {
                return (
                  <div key={item.href} className="border-b border-border pb-4">
                    <span className="block font-semibold text-foreground">{item.name}</span>
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {guideLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-foreground-dim hover:text-brand-primary"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.name === "Other professional services") {
                return (
                  <div key={item.href} className="border-b border-border pb-4">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-semibold text-foreground hover:text-brand-primary"
                    >
                      {item.name}
                    </Link>
                    <div className="mt-2 flex flex-col gap-2 pl-3">
                      {Object.entries(professionalServiceDetails).map(([slug, service]) => (
                        <Link
                          key={slug}
                          href={`/professional-services/${slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-foreground-dim hover:text-brand-primary"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border-b border-border pb-4 font-semibold text-foreground hover:text-brand-primary"
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="mt-4 sm:hidden" onClick={() => setMobileMenuOpen(false)}>
              <StartNameTransferButton className="w-full justify-center" />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
