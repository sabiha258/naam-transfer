import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { services, utilityProviders } from "@/lib/nav";
import { BoltIcon, FlameIcon, BuildingIcon, DocumentIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/Reveal";

const iconMap = {
  bolt: BoltIcon,
  flame: FlameIcon,
  building: BuildingIcon,
  document: DocumentIcon,
} as const;

export function ServicesGrid() {
  return (
    <section className="bg-surface-2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything a new home needs activated"
            dek="Pick the transfer you need — every service follows the same expert-handled, four-step process."
          />
        </Reveal>
        <Reveal delay={0.06} className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-dim">
            Covering
          </span>
          {utilityProviders.map((name) => (
            <Badge key={name} variant="neutral">
              {name}
            </Badge>
          ))}
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
            <Reveal key={s.href} delay={i * 0.08}>
              <Link
                href={s.href}
                className="group flex h-full flex-col items-center text-center gap-5 rounded-[24px] border border-border bg-surface p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/25 hover:shadow-xl"
              >
                <div
                  className="flex items-center justify-center rounded-[18px] bg-brand-primary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110 h-16 w-16 shadow-inner"
                >
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-foreground text-xl">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-foreground-dim text-[14px] leading-relaxed">
                    {s.blurb}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex rounded-full border border-brand-primary px-6 py-2 text-sm font-semibold text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    Explore Service
                  </span>
                </div>
              </Link>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
