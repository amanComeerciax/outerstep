import React from "react";
import type { Metadata } from "next";
import { AboutNavbar } from "@/components/about/AboutNavbar";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutVisionSection } from "@/components/about/AboutVisionSection";
import { AboutNameSection } from "@/components/about/AboutNameSection";
import { AboutProblemSection } from "@/components/about/AboutProblemSection";
import { AboutApproachSection } from "@/components/about/AboutApproachSection";
import { AboutImpactSection } from "@/components/about/AboutImpactSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutFooter } from "@/components/about/AboutFooter";

export const metadata: Metadata = {
  title: "About Us — Outerstep | Opportunities shouldn't depend on geography",
  description:
    "We believe every exporter should have the same chance to reach global markets. Outerstep combines AI, verified trade data and human expertise to connect exporters with genuine buyers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#edf2f2] text-[#0a3a40]">
      {/* Sticky / Floating Navigation Header */}
      <AboutNavbar />

      {/* Main Page Sections */}
      <main className="w-full max-w-full overflow-x-clip">
        {/* Section 1: OUR BELIEF */}
        <AboutHeroSection />

        {/* Section 2: OUR VISION */}
        <AboutVisionSection />

        {/* Section 2b: WHAT THE NAME MEANS */}
        <AboutNameSection />

        {/* Section 3: THE PROBLEM */}
        <AboutProblemSection />

        {/* Section 4: THE APPROACH */}
        <AboutApproachSection />

        {/* Section 5: OUR IMPACT */}
        <AboutImpactSection />

        {/* Section 6: THE PEOPLE BEHIND OUTERSTEP */}
        <AboutTeamSection />

        {/* Section 7: LET'S BUILD A MORE CONNECTED WORLD (CTA) */}
        <AboutCtaSection />
      </main>

      {/* Section 8: FOOTER */}
      <AboutFooter />
    </div>
  );
}
