import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areas } from "@/lib/nav";
import { Reveal } from "@/components/motion/Reveal";

export function AreasWeServe() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 text-foreground border-y border-border/50">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Areas we serve"
            title="Active across Gujarat"
            dek="Naam Transfer handles cases in these cities today — more added as our expert network grows."
          />
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap gap-3">
          {areas.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:text-brand-primary"
            >
              {a.name}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
