import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const stats = [
  { value: "5000+", label: "Successful Transfers" },
  { value: "156+", label: "Active Partners" },
  { value: "16+", label: "Cities Covered" },
  { value: "23%", label: "Faster Processing" },
];

export function TrustBlock() {
  return (
    <section className="relative overflow-hidden py-24 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "linear-gradient(to bottom, var(--surface-2) 0%, var(--background) 100%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-xl font-bold tracking-widest uppercase text-foreground-dim mb-16 opacity-70">
            Your Trust. Our Track Record.
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 divide-x divide-border/40">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-2">
                {stat.value.includes('+') ? (
                  <><CountUp value={stat.value.replace('+', '')} />+</>
                ) : stat.value.includes('%') ? (
                  <><CountUp value={stat.value.replace('%', '')} />%</>
                ) : (
                  <CountUp value={stat.value} />
                )}
              </div>
              <div className="text-sm md:text-[15px] font-medium text-foreground-dim uppercase tracking-wider">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
