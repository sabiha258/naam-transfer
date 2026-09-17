import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/lib/faq";
import { Reveal } from "@/components/motion/Reveal";

export function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal>
        <SectionHeading align="center" eyebrow="FAQs" title="Questions homeowners ask us" />
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <FaqAccordion items={[...homeFaqs]} />
      </Reveal>
    </section>
  );
}
