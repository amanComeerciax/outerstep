import React from "react"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"

const TrackRecordSection = dynamic(() => import("@/components/track-record-section").then((mod) => mod.TrackRecordSection))
const HowItWorksSection = dynamic(() => import("@/components/HowItWorksSection"))
const ToolsShowcase = dynamic(() => import("@/components/ToolsShowcase"))
const SixSystemsSection = dynamic(() => import("@/components/six-systems-section").then((mod) => mod.SixSystemsSection))
const WhyDifferent = dynamic(() => import("@/components/WhyDifferent"))
const WhoItFits = dynamic(() => import("@/components/WhoItFits"))
const CtaSection = dynamic(() => import("@/components/CtaSection"))
const Footer = dynamic(() => import("@/components/Footer"))

export default function Home() {
  return (
    <main className="min-h-screen bg-[#edf2f2]">
      <HeroSection />
      <TrackRecordSection />
      <HowItWorksSection />
      <ToolsShowcase />
      <SixSystemsSection />
      <WhyDifferent />
      <WhoItFits />
      <CtaSection />
      <Footer />
    </main>
  )
}
