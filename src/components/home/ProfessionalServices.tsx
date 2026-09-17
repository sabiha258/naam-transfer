import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { professionalServiceDetails } from "@/lib/professionalServices";
import { HomeIcon, WalletIcon, PaintIcon, HammerIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/Reveal";

const iconMap = {
  home: HomeIcon,
  wallet: WalletIcon,
  paint: PaintIcon,
  hammer: HammerIcon,
} as const;

export function ProfessionalServices() {
  const entries = Object.entries(professionalServiceDetails);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Beyond utilities"
          title="Professional services for every stage after possession"
          dek="Vetted referral partners for the parts of moving in that go beyond a name transfer."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {entries.map(([slug, service], i) => {
          const Icon = iconMap[service.icon];

          return (
            <Reveal key={slug} delay={i * 0.08}>
              <Link
                href={`/professional-services/${slug}`}
                className="group flex gap-5 rounded-[24px] border border-border bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-primary/25 hover:shadow-xl items-start"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-brand-primary/10 text-brand-primary transition-transform duration-300 group-hover:scale-110 shadow-inner">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-sans text-lg font-bold text-foreground">{service.name}</h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item} className="text-[13px] text-foreground-dim flex items-center gap-2">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-brand-primary opacity-50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <span className="inline-flex rounded-full border border-border px-5 py-1.5 text-xs font-semibold text-foreground-dim transition-colors group-hover:border-brand-primary group-hover:text-brand-primary">
                      Explore Service
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
