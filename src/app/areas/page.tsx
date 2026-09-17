import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { areas } from "@/lib/nav";
import { citiesData } from "@/lib/areaData";

export const metadata: Metadata = {
  title: "Areas We Serve | Gujarat Property & Utility Transfers",
  description: "Cities across Gujarat where Naam Transfer handles Electricity, Gas, and Municipal Corporation name transfers.",
};

export default function AreasIndexPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            eyebrow="Areas we serve"
            title="Active Across Major Cities in Gujarat"
            dek="Naam Transfer provides doorstep & 100% digital property utility name transfers for homeowners and businesses."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {areas.map((area, i) => {
            const key = area.name.toLowerCase() === "vadodra" ? "vadodara" : area.name.toLowerCase();
            const cityInfo = citiesData[key];
            return (
              <Reveal key={area.name} delay={i * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-brand-primary hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-2xl font-extrabold text-brand-navy">
                        {area.name}
                      </h2>
                      <span className="rounded-full bg-brand-primary/10 px-3 py-1 font-mono text-xs font-bold text-brand-primary">
                        {area.corp} Active
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-foreground-dim">
                      {cityInfo?.heroDescription || `Complete support for electricity meter, piped gas, and municipal property tax records in ${area.name}.`}
                    </p>

                    {cityInfo?.requirements && (
                      <div className="mt-6">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground-dim block mb-2">
                          Supported Authorities:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cityInfo.requirements.map((req) => (
                            <span
                              key={req.id}
                              className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs font-semibold text-foreground"
                            >
                              {req.shortName}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {area.neighborhoods.length > 0 && (
                      <div className="mt-6">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground-dim block mb-2">
                          Popular Neighborhoods:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {area.neighborhoods.slice(0, 8).map((n) => (
                            <span
                              key={n}
                              className="rounded-md bg-surface-2/60 px-2 py-0.5 text-[11px] font-medium text-foreground-dim"
                            >
                              {n}
                            </span>
                          ))}
                          {area.neighborhoods.length > 8 && (
                            <span className="rounded-md bg-surface-2/60 px-2 py-0.5 text-[11px] font-semibold text-brand-primary">
                              +{area.neighborhoods.length - 8} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
                    <Link
                      href={area.href}
                      className="text-sm font-bold text-brand-primary hover:underline flex items-center gap-1.5"
                    >
                      View {area.name} Documents & Details
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Button href={`/book-service?city=${encodeURIComponent(area.name)}`} className="text-xs py-2 px-4">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
