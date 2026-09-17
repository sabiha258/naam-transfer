import { CountUp } from "@/components/motion/CountUp";

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-5 py-4 text-center shadow-[0_1px_2px_rgba(17,43,88,0.05)] transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(17,43,88,0.35)] sm:text-left">
      <div className="font-sans text-2xl font-extrabold text-primary tabular-nums sm:text-3xl">
        <CountUp value={value} />
      </div>
      <div className="mt-1 text-xs text-foreground-dim sm:text-[13px]">{label}</div>
    </div>
  );
}
