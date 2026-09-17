import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ChecklistIcon, ClipboardIcon, GearIcon, BadgeCheckIcon } from "@/components/ui/icons";

const steps = [
  {
    n: "01",
    title: "Choose your service",
    body: "Electricity, gas, or AMC/municipal.",
    icon: ChecklistIcon,
  },
  {
    n: "02",
    title: "Share your details",
    body: "Fill the on-site form or message us on WhatsApp — whichever's easier.",
    icon: ClipboardIcon,
  },
  {
    n: "03",
    title: "We handle it",
    body: "Documentation, submission, and follow-ups with the utility or municipal body.",
    icon: GearIcon,
  },
  {
    n: "04",
    title: "Get confirmed",
    body: "Your name is updated. We let you know the moment it's done.",
    icon: BadgeCheckIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="Four steps. Zero office visits."
          dek="The same process for every service — clear from the first click to the confirmation."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.1} className="relative rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-primary/10 text-brand-primary">
              <step.icon className="h-6 w-6" />
            </div>
            <span className="mt-4 block font-mono text-xs text-accent">{step.n}</span>
            <h3 className="mt-1 font-sans text-base font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-dim">{step.body}</p>
            {i < steps.length - 1 ? (
              <span className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 text-foreground-dim/40 lg:block">
                →
              </span>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
