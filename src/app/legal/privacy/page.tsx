import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Privacy Policy" };

const sections = [
  {
    heading: "Information we collect",
    body: "When you book a service or contact us, we collect your name, phone number, email, property address, and the documents needed for your name transfer (such as ID proof, sale deed copies, and utility bills). We only collect what's needed to complete the service you've asked for.",
  },
  {
    heading: "How we use it",
    body: "Your details and documents are used to prepare and submit your application to the relevant utility board or municipal office, to follow up on its status, and to contact you with updates. We don't use your information for anything beyond completing the service and, with your consent, letting you know about other services you may need.",
  },
  {
    heading: "Document handling",
    body: "Copies of ID and property documents you share are used only for the transfer they were provided for and are not sold or shared with unrelated third parties. Documents are retained only as long as needed to complete and confirm your transfer, plus a reasonable period for follow-up in case of disputes with the utility or municipal body.",
  },
  {
    heading: "Professional service referrals",
    body: "If you use our referral service for real estate, loans & insurance, interior design, or construction, we share only the details necessary to connect you with that independent provider. Naam Transfer is not responsible for how the third-party provider subsequently handles your information — check their own privacy terms directly.",
  },
  {
    heading: "Your rights",
    body: "You can ask us at any time what information we hold about you, request a correction, or ask us to delete it once your case is closed. Reach out using the contact details below and we'll action it within a reasonable time.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy or your data can be sent to naamtransfer@gmail.com or +91 92745 10633.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" dek="Last updated May 2026." />
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
