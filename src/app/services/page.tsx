import type { Metadata } from "next";
import { ServicesGrid } from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description: "Electricity, gas, AMC, and documentation name transfer services from Naam Transfer.",
};

export default function ServicesIndexPage() {
  return (
    <div className="py-6">
      <ServicesGrid />
    </div>
  );
}
