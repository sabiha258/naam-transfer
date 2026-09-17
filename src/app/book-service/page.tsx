import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookServiceForm } from "@/components/book-service/BookServiceForm";
import { Reveal } from "@/components/motion/Reveal";
import { services, whatsappNumber } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Book Service",
  description: "Start your electricity, gas, AMC, or documentation name transfer with Naam Transfer.",
};

export default async function BookServicePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; city?: string }>;
}) {
  const params = await searchParams;
  const service = services.find((s) => s.href === params.service)?.name ?? "a name transfer";
  const city = params.city ?? "";

  const message = `Hi Naam Transfer, I'd like help with ${service}${city ? ` in ${city}` : ""}.`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Book service" title="Start your transfer" />
      </Reveal>

      <Reveal delay={0.1} className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h3 className="font-sans text-sm font-bold text-foreground">Fastest way to start: WhatsApp</h3>
        <p className="mt-2 text-[13.5px] text-foreground-dim">
          Message us directly and one of our experts will confirm what&apos;s needed for {service.toLowerCase()}
          {city ? ` in ${city}` : ""}.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:brightness-110"
        >
          Message us on WhatsApp
        </a>
      </Reveal>

      <Reveal delay={0.18}>
        <BookServiceForm defaultServiceHref={params.service} />
      </Reveal>

      <Reveal delay={0.24} className="mt-6 text-[13px] text-foreground-dim">
        Or reach us on <a href="tel:+919274510633" className="text-accent hover:underline">+91 92745 10633</a>{" "}
        · <a href="mailto:naamtransfer@gmail.com" className="text-accent hover:underline">naamtransfer@gmail.com</a>
      </Reveal>
    </section>
  );
}
