export function Badge({
  variant = "sage",
  children,
}: {
  variant?: "sage" | "neutral";
  children: React.ReactNode;
}) {
  const classes =
    variant === "sage"
      ? "bg-sage-soft text-sage border-sage"
      : "bg-surface text-foreground-dim border-border";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide ${classes}`}
    >
      {children}
    </span>
  );
}
