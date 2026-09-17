import Link from "next/link";
import { Logo } from "./Logo";
import { services, areas } from "@/lib/nav";

const professionalServices = [
  { name: "Real Estate Agents", href: "/professional-services/real-estate" },
  { name: "Loans & Insurance", href: "/professional-services/loans-insurance" },
  { name: "Interior Design", href: "/professional-services/interior-design" },
  { name: "Construction Services", href: "/professional-services/construction" },
];

const legal = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { name: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-dim">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-foreground-dim hover:text-foreground">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="inline-flex">
              <Logo height={44} />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-dim">
              We simplify the shift from buying a house to owning it. Utilities like Electricity,
              Piped gas, Municipal name transfers, handled end to end with your complete peace of
              mind.
            </p>
            <p className="mt-5 text-sm text-foreground-dim">
              <a href="tel:+919274510633" className="hover:text-foreground font-medium">+91 92745 10633</a>
              <br />
              <a href="mailto:naamtransfer@gmail.com" className="hover:text-foreground">naamtransfer@gmail.com</a>
            </p>
          </div>
          <FooterColumn title="Services" links={services.map((s) => ({ name: s.name, href: s.href }))} />
          <FooterColumn title="Areas we serve" links={areas.map((a) => ({ name: a.name, href: a.href }))} />
          <FooterColumn title="Other Professional Services" links={professionalServices} />
          <FooterColumn title="Legal" links={legal} />
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-6 text-xs text-foreground-dim sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Naam Transfer. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://instagram.com/naam_transfer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Instagram
            </a>
            <a href="https://facebook.com/Naamtransfer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              Facebook
            </a>
            <a href="https://youtube.com/@NAAMTransfer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
