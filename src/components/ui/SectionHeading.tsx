export function SectionHeading({
  eyebrow,
  title,
  dek,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
}) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleClasses = tone === "inverted" ? "text-white" : "text-foreground";
  const dekClasses = tone === "inverted" ? "text-white/75" : "text-foreground-dim";
  const eyebrowClasses = tone === "inverted" ? "text-white/60" : "text-accent";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses}`}>
      {eyebrow ? (
        <span className={`font-mono text-xs font-semibold uppercase tracking-[0.14em] ${eyebrowClasses}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${titleClasses}`}>
        {title}
      </h2>
      {dek ? <p className={`text-[15px] ${dekClasses}`}>{dek}</p> : null}
    </div>
  );
}
