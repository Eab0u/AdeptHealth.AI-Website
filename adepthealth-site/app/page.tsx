import type { Metadata } from "next";
import { Hero } from "@/src/components/sections/Hero";
import { ServicesPreview } from "@/src/components/sections/ServicesPreview";
import { Process } from "@/src/components/sections/Process";
import { Outcomes } from "@/src/components/sections/Outcomes";
import { Trust } from "@/src/components/sections/Trust";
import { FAQ } from "@/src/components/sections/FAQ";
import { ContactSection } from "@/src/components/sections/ContactSection";
import { ContactScrollSync } from "@/src/components/sections/ContactScrollSync";

export const metadata: Metadata = {
  title: "AdeptHealth.AI",
  description: "Healthcare AI strategy and implementation consulting.",
};

export default function HomePage() {
  return (
    <div className="pb-8 sm:pb-12">
      <ContactScrollSync />
      <Hero />
      <ServicesPreview />
      <Process />
      <Outcomes />
      <Trust />
      <FAQ />
      <ContactSection />
    </div>
  );
}
