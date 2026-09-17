import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { services, areas } from "@/lib/nav";
import { citiesData } from "@/lib/areaData";

function slugify(name: string) {
  return name.toLowerCase();
}

export function generateStaticParams() {
  return areas.map((a) => ({ city: slugify(a.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = areas.find((a) => slugify(a.name) === city);
  if (!area) return {};
  const cityInfo = citiesData[city];
  return {
    title: cityInfo?.tagline || `Property & Utility Name Transfer Services in ${area.name} | Naam Transfer`,
    description: cityInfo?.heroDescription || `Expert assistance for electricity, gas, and ${area.corp} name transfers in ${area.name}. 100% online, no office visits required.`,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = areas.find((a) => slugify(a.name) === city);
  if (!area) notFound();

  const cityInfo = citiesData[city] || citiesData.ahmedabad;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-20 lg:py-28 border-b border-border/50 text-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <Reveal trigger="mount" as="div" className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-brand-primary">
            {area.name} Property Transfers
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-6xl text-brand-navy leading-[1.1]">
            Seamless Utility Name Transfer in <span className="text-brand-orange">{area.name}</span>
          </h1>
          <p className="mt-6 text-[17px] sm:text-[19px] text-foreground-dim max-w-2xl mx-auto leading-relaxed">
            {cityInfo.heroDescription}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/book-service" className="w-full sm:w-auto text-base px-8 py-5">
              Start my Name Transfer
            </Button>
            <Button href="/contact" variant="secondary" className="w-full sm:w-auto text-base px-8 py-5">
              Talk to an Expert
            </Button>
          </div>
          <p className="mt-4 text-xs font-medium text-foreground-dim/80">100% online verification • Doorstep documentation • Regular WhatsApp updates</p>
        </Reveal>
      </section>

      {/* City-Specific Required Documents Section */}
      <section id="documents-required" className="py-20 bg-background border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Checklist"
              title={`Name Transfer Documents Required for ${area.name}`}
              dek={`Keep these documents ready for your ${area.corp} municipal records, electricity meter, and piped gas transfers in ${area.name}.`}
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cityInfo.requirements.map((req, i) => (
              <Reveal key={req.id} delay={i * 0.1} className="flex flex-col">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/5">
                  <div>
                    {/* Badge & Category */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-border/60">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                        {req.categoryLabel}
                      </span>
                      <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary">
                        {req.badge}
                      </span>
                    </div>

                    {/* Authority Title */}
                    <h3 className="mt-4 text-xl font-bold text-brand-navy">
                      {req.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-foreground-dim leading-relaxed">
                      {req.description}
                    </p>

                    {/* Document List */}
                    <div className="mt-6">
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground-dim mb-3">
                        Required Documents:
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {req.documents.map((doc, docIdx) => (
                          <li key={docIdx} className="flex items-start gap-2.5 rounded-xl bg-surface-2/60 p-3 text-xs">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-[9px] font-bold mt-0.5">
                              ✓
                            </span>
                            <div className="min-w-0">
                              <span className="font-bold text-foreground block text-[13px]">
                                {doc.title}
                              </span>
                              {doc.subtitle && (
                                <span className="text-[11px] text-foreground-dim block mt-0.5">
                                  {doc.subtitle}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mandatory Note & CTA */}
                  <div className="mt-6 pt-5 border-t border-border">
                    {req.note && (
                      <p className="text-[12px] font-semibold text-brand-orange mb-4 italic">
                        {req.note}
                      </p>
                    )}
                    <Button href="/book-service" variant="secondary" className="w-full text-xs font-bold py-2.5">
                      Apply for {req.shortName} Transfer
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35} className="mt-10 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-5 text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-foreground">
              Don&apos;t have all documents or need help with missing NOCs / Affidavits?
            </p>
            <p className="text-xs text-foreground-dim mt-1">
              Our documentation experts assist with legal drafts, indemnity bonds, and sub-registrar verification.
            </p>
            <div className="mt-3">
              <Link href="/services/documentation" className="text-xs font-bold text-brand-primary hover:underline">
                Learn about Documentation Support →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-2 py-20 border-b border-border/50">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-center">
              <SectionHeading eyebrow="Comprehensive Services" title={`Name Transfer Services in ${area.name}`} />
              <p className="mt-4 text-foreground-dim max-w-2xl mx-auto">
                End-to-end assistance across municipal, power discom, and piped gas authorities in {area.name}.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s, i) => {
              const displayName =
                s.href === "/services/amc"
                  ? `${area.name} Municipal Corporation (${area.corp}) Name Transfer`
                  : `${s.name} in ${area.name}`;
              return (
                <Reveal key={s.href} delay={i * 0.1}>
                  <Link
                    href={s.href}
                    className="group block h-full rounded-2xl border border-border bg-surface p-8 transition-all hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/5"
                  >
                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-primary transition-colors">
                      {displayName}
                    </h3>
                    <p className="mt-3 text-foreground-dim leading-relaxed text-sm">
                      Professional assistance for {displayName.toLowerCase()} processing. We handle the paperwork, affidavits, follow-ups, and documentation required by local authorities.
                    </p>
                    <div className="mt-6 flex items-center text-sm font-semibold text-brand-primary">
                      View details
                      <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-background border-b border-border/50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionHeading eyebrow="Simple Process" title={`How It Works in ${area.name}`} />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { title: "1. Share Details", desc: "Upload property deed, index-2 copy, and past bills via WhatsApp or online portal." },
              { title: "2. We Process", desc: "We draft affidavits, verify past dues, and submit applications directly to local offices." },
              { title: "3. Name Updated", desc: `Receive confirmation once your name is officially updated on your ${area.name} utility records.` }
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className="relative">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/10 text-xl font-bold text-brand-primary">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-foreground-dim leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4} className="mt-12">
            <Button href="/book-service">
              Get Started in {area.name} Today
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Neighborhoods (Localized SEO) */}
      {area.neighborhoods.length > 0 && (
        <section className="bg-surface py-20 border-b border-border/50">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <SectionHeading eyebrow="Coverage" title={`Serving all areas in ${area.name}`} />
              <p className="mt-4 text-foreground-dim max-w-2xl mx-auto text-sm">
                No matter where your property is located in {area.name}, our local network covers your zonal ward offices and utility divisions.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2.5">
              {area.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground-dim shadow-sm hover:border-brand-primary hover:text-brand-primary transition-colors cursor-default"
                >
                  {n}
                </span>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Final Call to Action */}
      <section className="bg-brand-navy py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-5">
              Ready to transfer your property utilities in {area.name}?
            </h2>
            <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
              Skip the government office queues and let Gujarat&apos;s trusted property transfer specialists take care of everything.
            </p>
            <Button href="/book-service" className="bg-accent text-white hover:brightness-110 text-base px-9 py-5 border-none">
              Start my Name Transfer
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
