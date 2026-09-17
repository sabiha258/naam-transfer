import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxGlow } from "@/components/motion/ParallaxGlow";
import { serviceDetails } from "@/lib/services";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

import Image from "next/image";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden text-foreground pb-12 lg:pb-24 border-b border-border/50">
        <ParallaxGlow className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <ParallaxGlow className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pb-20 lg:pt-24">
          <div className="flex flex-col gap-6 text-center lg:text-left lg:items-start items-center">
            <Reveal trigger="mount" delay={0.1} as="span" className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-brand-primary">
              {service.providers.join(" · ")}
            </Reveal>
            
            <Reveal trigger="mount" delay={0.2} as="h1" className="max-w-2xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-brand-navy">
              {service.name}
            </Reveal>
            
            <Reveal trigger="mount" delay={0.3} as="p" className="max-w-xl text-[16px] md:text-[18px] leading-relaxed text-foreground-dim font-medium">
              {service.summary}
            </Reveal>
            
            {service.timeline && (
              <Reveal trigger="mount" delay={0.4} className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1.5 text-sm font-semibold text-brand-primary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expected timeline: {service.timeline}
              </Reveal>
            )}

            <Reveal trigger="mount" delay={0.5} className="mt-4">
              <Button href="/book-service" className="shadow-lg shadow-brand-primary/20">
                Start my Name Transfer
              </Button>
            </Reveal>
          </div>

          <Reveal trigger="mount" delay={0.3} y={20} className="relative w-full">
            {service.image && (
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-3xl border border-border shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Process & Features */}
          <div className="lg:col-span-7">
            {service.whoIsThisFor && (
              <div className="mb-16">
                <Reveal>
                  <SectionHeading eyebrow="Ideal For" title="Who needs this service?" />
                </Reveal>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.whoIsThisFor.map((item, i) => (
                    <Reveal key={item} delay={i * 0.05} as="li" className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-[15px] font-medium text-foreground shadow-sm">
                      <span className="text-brand-primary mt-0.5">✦</span>
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}

            {service.features && (
              <div className="mb-16">
                <Reveal>
                  <SectionHeading eyebrow="Why Us" title="Features & Benefits" />
                </Reveal>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, i) => (
                    <Reveal key={feature} delay={i * 0.05} as="li" className="flex items-start gap-3 rounded-xl bg-surface-2 p-4 text-[14px] font-semibold text-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-[10px]">✓</span>
                      {feature}
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}

            {service.process && (
              <div>
                <Reveal>
                  <SectionHeading eyebrow="How it works" title="The Process" />
                </Reveal>
                <div className="mt-8 flex flex-col gap-8 relative before:absolute before:inset-y-2 before:left-[15px] before:w-0.5 before:bg-border/60">
                  {service.process.map((step, i) => (
                    <Reveal key={step.title} delay={i * 0.1} className="relative flex gap-6">
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white shadow-md shadow-brand-primary/20 ring-4 ring-background">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <h3 className="font-bold text-brand-navy text-[16px]">{step.title}</h3>
                        <p className="mt-1.5 text-[14.5px] leading-relaxed text-foreground-dim">{step.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Documents */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface-2/50 p-8 shadow-sm">
              <Reveal>
                <SectionHeading eyebrow="Documents needed" title="What to keep ready" />
              </Reveal>
              <ul className="mt-6 flex flex-col gap-3">
                {service.documents.map((doc, i) => (
                  <Reveal key={doc} delay={i * 0.06} as="li" className="flex items-start gap-3 rounded-xl bg-surface p-4 text-[14px] font-medium text-foreground-dim shadow-sm border border-border/50">
                    <span className="text-brand-primary font-bold opacity-50">—</span>
                    {doc}
                  </Reveal>
                ))}
              </ul>

              <p className="mt-4 text-[12px] font-semibold text-brand-orange italic">
                * Transfer fees will be extra (if applicable)
              </p>
              
              <Reveal delay={0.3} className="mt-6 pt-6 border-t border-border">
                 <p className="text-[13px] text-foreground-dim mb-4">Have everything ready? Or need help gathering these? We can help either way.</p>
                 <Button href="/book-service" className="w-full">
                    Start my Name Transfer
                 </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-surface-2 py-20 border-t border-border/50">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="text-center mb-10">
              <SectionHeading eyebrow="FAQs" title={`Common Questions`} />
            </Reveal>
            <Reveal delay={0.1}>
              <FaqAccordion items={service.faqs} />
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
