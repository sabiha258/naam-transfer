import { StartNameTransferButton } from "@/components/book-service/StartNameTransferButton";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-surface-2 py-24 text-foreground border-t border-border/50">
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl text-brand-navy">
          Ready to make it easy ho gaya?
        </h2>
        <p className="max-w-md text-[16px] text-foreground-dim">
          Tell us which service you need and we&apos;ll take it from there — no office visits, no
          chasing paperwork.
        </p>
        <StartNameTransferButton />
      </Reveal>
    </section>
  );
}
