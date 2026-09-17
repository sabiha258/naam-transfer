import { services, areas } from "@/lib/nav";

export function QuoteBar() {
  return (
    <form
      action="/book-service"
      method="get"
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 text-foreground shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] sm:flex-row sm:items-end"
    >
      <label className="flex flex-1 flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
          Your service
        </span>
        <select
          name="service"
          className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground"
        >
          {services.map((s) => (
            <option key={s.href} value={s.href}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-1 flex-col gap-1.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
          Your city
        </span>
        <select
          name="city"
          className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground"
        >
          {areas.map((a) => (
            <option key={a.href} value={a.name}>
              {a.name}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-white hover:brightness-110 sm:mb-0"
      >
        Get Started
      </button>
    </form>
  );
}
