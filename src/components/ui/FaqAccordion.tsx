export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-border bg-surface px-5 py-4 transition-colors open:shadow-sm hover:border-primary/25"
          open={i === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[15px] font-bold text-foreground">
            {item.question}
            <span className="shrink-0 text-accent transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <p className="faq-answer mt-3 text-[14px] leading-relaxed text-foreground-dim">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
