import { Button } from "@/components/ui/Button";
import { StartNameTransferButton } from "@/components/book-service/StartNameTransferButton";
import { QuoteBar } from "./QuoteBar";
import { HeroVideoMontage } from "./HeroVideoMontage";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxGlow } from "@/components/motion/ParallaxGlow";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { utilityProviders } from "@/lib/nav";

export function Hero() {
  return (
    <section className="relative overflow-hidden text-foreground pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--surface-2) 0%, var(--background) 100%)",
        }}
      />
      <ParallaxGlow className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <ParallaxGlow className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20 lg:pt-24">
        <div className="flex flex-col gap-6 text-center lg:text-left lg:items-start items-center">
          <h1 className="max-w-2xl text-balance text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-brand-navy">
            Moving Made <span className="text-brand-orange">Simple</span><br />
            Not Stressful.
          </h1>
          <Reveal trigger="mount" delay={0.2} y={16} as="p" className="max-w-xl text-[16px] leading-relaxed text-foreground-dim">
            Welcome to One Stop Home Services, your single destination for everything that happens after you get the keys. From utility transfers to finding the perfect interior provider or pest control, we take care of the details so you can settle into your new home seamlessly.
          </Reveal>
          <Reveal trigger="mount" delay={0.32} y={16} className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton>
              <StartNameTransferButton />
            </MagneticButton>
            <Button variant="ghost" href="#how-it-works" className="!text-foreground-dim hover:!text-foreground">
              See How It Works →
            </Button>
          </Reveal>

          <Reveal trigger="mount" delay={0.4} y={16} className="flex flex-col gap-3 pt-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-dim">
              Trusted for name transfers with
            </span>
            <div className="flex flex-wrap gap-2">
              {utilityProviders.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[12.5px] font-semibold text-foreground-dim shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal trigger="mount" delay={0.3} y={20} className="relative w-full">
          <HeroVideoMontage />
        </Reveal>
      </div>

      <Reveal trigger="mount" delay={0.5} y={20} className="relative mx-auto max-w-6xl px-6 pb-16">
        <QuoteBar />
      </Reveal>
    </section>
  );
}
