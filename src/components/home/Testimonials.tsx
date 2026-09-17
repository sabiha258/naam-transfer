import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const testimonials = [
  {
    initials: "RP",
    name: "Rajesh P.",
    city: "Ahmedabad",
    service: "Property Name Transfer",
    quote:
      "Fast and reliable service. Made my name transfer process so easy!",
  },
  {
    initials: "PS",
    name: "Priya S.",
    city: "Surat",
    service: "Gas Connection Transfer",
    quote:
      "Excellent guidance for gas connection transfer. Highly recommended!",
  },
  {
    initials: "AM",
    name: "Amit M.",
    city: "Vadodara",
    service: "Real Estate Services",
    quote:
      "Found the perfect real estate agent through their platform. Great experience!",
  },
  {
    initials: "NK",
    name: "Neha K.",
    city: "Rajkot",
    service: "Interior Design",
    quote:
      "The interior design team transformed our home beautifully. Professional work!",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--surface-2) 0%, var(--background) 100%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What homeowners say" />
        </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.1}
            className={(i === 1 || i === 3) ? "sm:mt-6 lg:mt-0" : ""}
          >
            <figure className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <svg className="h-8 w-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
              <blockquote className="text-[15px] leading-relaxed text-foreground-dim font-medium italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex flex-col pt-4 border-t border-border/50">
                <span className="block font-bold text-foreground text-sm">{t.name}</span>
                <span className="text-foreground-dim text-[13px]">{t.city} • {t.service}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
