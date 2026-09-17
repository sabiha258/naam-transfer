import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Terms of Service" };

const sections = [
  {
    heading: "Our service",
    body: "Naam Transfer prepares and submits name-transfer applications for electricity, gas, and municipal (AMC) records on your behalf, and follows up with the relevant board or office until the update is confirmed. We also refer clients to independent professional service providers — real estate agents, loan & insurance partners, interior designers, and construction contractors.",
  },
  {
    heading: "What we need from you",
    body: "Accurate documents and information — ID proof, sale deed or index copy, and any NOCs required by the utility or municipal body. Delays caused by incomplete, incorrect, or late documents are outside our control.",
  },
  {
    heading: "Timelines",
    body: "Stated timelines (typically 10–15 working days) are indicative estimates based on the standard processing time of the relevant utility board or municipal office, not a guarantee. The final approval and processing time rests with that authority, not with Naam Transfer.",
  },
  {
    heading: "Fees",
    body: "Service fees are communicated and agreed with you before work begins. Any government or utility-board charges (statutory fees, security deposits, etc.) are separate from our service fee and are your responsibility.",
  },
  {
    heading: "Professional service referrals",
    body: "Real estate, loan & insurance, interior design, and construction providers we refer you to are independent third parties, not Naam Transfer employees or agents. We vet partners for reliability but are not responsible for the quality, pricing, or outcome of work performed by a referred provider — that agreement is between you and them.",
  },
  {
    heading: "Limitation of liability",
    body: "We facilitate the submission and follow-up of your application. Final approval, rejection, or any conditions attached to a name transfer are decided solely by the utility board or municipal authority. Naam Transfer is not liable for decisions made by those third parties.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of India, with courts in Ahmedabad, Gujarat having jurisdiction over any dispute.",
  },
  {
    heading: "Changes to these terms",
    body: "We may update these terms from time to time; the current version is always the one published on this page.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms can be sent to naamtransfer@gmail.com or +91 92745 10633.",
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <SectionHeading eyebrow="Legal" title="Terms of Service" dek="Last updated May 2026." />
      <div className="mt-10 flex flex-col gap-7">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-sans text-base font-bold text-foreground">{s.heading}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-foreground-dim">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
