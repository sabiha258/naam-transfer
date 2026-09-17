import type { Metadata } from "next";
import { ProfessionalServices } from "@/components/home/ProfessionalServices";

export const metadata: Metadata = {
  title: "Professional Services",
  description:
    "Vetted referral partners beyond utility transfers — real estate agents, loans & insurance, interior design, and construction services.",
};

export default function ProfessionalServicesIndexPage() {
  return (
    <div className="py-6">
      <ProfessionalServices />
    </div>
  );
}
