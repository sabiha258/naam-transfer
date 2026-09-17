import { Hero } from "@/components/home/Hero";

import { TrustBlock } from "@/components/home/TrustBlock";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProfessionalServices } from "@/components/home/ProfessionalServices";
import { AreasWeServe } from "@/components/home/AreasWeServe";
import { InstagramReels } from "@/components/home/InstagramReels";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBlock />
      <HowItWorks />
      <ServicesGrid />
      <ProfessionalServices />
      <AreasWeServe />
      <InstagramReels />
      <InstagramFeed />
      <Testimonials />
      <BlogPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
