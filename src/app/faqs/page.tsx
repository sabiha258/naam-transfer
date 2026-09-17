import type { Metadata } from "next";
import { FaqSection } from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about Naam Transfer's name transfer services.",
};

export default function FaqsPage() {
  return (
    <div className="py-6">
      <FaqSection />
    </div>
  );
}
