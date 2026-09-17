import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxGlow } from "@/components/motion/ParallaxGlow";
import { professionalServiceDetails } from "@/lib/professionalServices";

export function generateStaticParams() {
  return Object.keys(professionalServiceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = professionalServiceDetails[slug];
  if (!item) return {};
  return { title: item.name, description: item.summary };
}

import Image from "next/image";

export default async function ProfessionalServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = professionalServiceDetails[slug];
  if (!item) notFound();

  return (
    <>
      <section className="relative overflow-hidden text-foreground pb-12 lg:pb-24 border-b border-border/50">
        <ParallaxGlow className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
        <ParallaxGlow className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:pb-20 lg:pt-24">
          <div className="flex flex-col gap-6 text-center lg:text-left lg:items-start items-center">
            <Reveal trigger="mount" delay={0.1} as="span" className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-brand-primary">
              Professional Services
            </Reveal>
            
            <Reveal trigger="mount" delay={0.2} as="h1" className="max-w-2xl text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-brand-navy">
              {item.name}
            </Reveal>
            
            <Reveal trigger="mount" delay={0.3} as="p" className="max-w-xl text-[16px] md:text-[18px] leading-relaxed text-foreground-dim font-medium">
              {item.summary}
            </Reveal>

            <Reveal trigger="mount" delay={0.4} className="mt-4">
              <Button href="/contact" className="shadow-lg shadow-brand-primary/20">
                Get connected
              </Button>
            </Reveal>
          </div>

          <Reveal trigger="mount" delay={0.3} y={20} className="relative w-full">
            {item.image && (
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden rounded-3xl border border-border shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                <Image
                  src={item.image}
                  alt={item.name}
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
          {/* Left Column: Benefits & Audience */}
          <div className="lg:col-span-7">
            {item.whoIsThisFor && (
              <div className="mb-16">
                <Reveal>
                  <SectionHeading eyebrow="Ideal For" title="Who needs this service?" />
                </Reveal>
                <ul className="mt-6 flex flex-col gap-3">
                  {item.whoIsThisFor.map((audienceItem, i) => (
                    <Reveal key={audienceItem} delay={i * 0.05} as="li" className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-[15px] font-medium text-foreground shadow-sm">
                      <span className="text-brand-primary mt-0.5">✦</span>
                      {audienceItem}
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <Reveal>
                <SectionHeading eyebrow="Why Choose Us" title="Benefits" />
              </Reveal>
              <ul className="mt-6 flex flex-col gap-4">
                {item.benefits.map((benefit, i) => (
                  <Reveal key={benefit} delay={i * 0.05} as="li" className="flex items-start gap-3 rounded-xl bg-surface-2 p-5 text-[15px] font-medium text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-[11px]">✓</span>
                    {benefit}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Services Included */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface-2/50 p-8 shadow-sm">
              <Reveal>
                <SectionHeading eyebrow="What's included" title="Our offerings" />
              </Reveal>
              <ul className="mt-6 flex flex-col gap-3">
                {item.items.map((entry, i) => (
                  <Reveal
                    key={entry}
                    delay={i * 0.06}
                    as="li"
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-[14.5px] font-medium text-foreground shadow-sm"
                  >
                    <span className="text-brand-primary font-bold opacity-50">—</span>
                    {entry}
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={0.2} as="p" className="mt-8 pt-6 border-t border-border text-[13.5px] text-foreground-dim mb-4">
                Tell us what you need and we&apos;ll connect you with a vetted partner directly.
              </Reveal>
              <Reveal delay={0.26}>
                <Button href="/contact" className="w-full">
                  Contact Us
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
