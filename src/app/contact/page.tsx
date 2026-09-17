import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Naam Transfer by phone, email, or WhatsApp.",
};

const ADDRESS = "305, One World Capital, Beside La Renon, Off Rajpath Rangoli Road, Bodakdev, Ahmedabad 380059";
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const cards = [
  { title: "Office", content: <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{ADDRESS} →</a> },
  { title: "Phone", content: <a href="tel:+919274510633" className="hover:text-accent">+91 92745 10633</a> },
  { title: "Email", content: <a href="mailto:naamtransfer@gmail.com" className="hover:text-accent">naamtransfer@gmail.com</a> },
  { title: "WhatsApp", content: <a href="https://wa.me/919274510633" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Message us directly</a> },
];

const social = [
  { name: "Instagram", href: "https://instagram.com/naam_transfer" },
  { name: "Facebook", href: "https://facebook.com/Naamtransfer" },
  { name: "YouTube", href: "https://youtube.com/@NAAMTransfer" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Contact" title="Talk to us" dek="Fastest response is on WhatsApp — most queries get a reply within the day." />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(17,43,88,0.25)]">
            <h3 className="font-sans text-sm font-bold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-dim">{c.content}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3} className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-dim">Follow along</span>
        <div className="flex gap-5">
          {social.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground-dim hover:text-accent">
              {s.name}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
