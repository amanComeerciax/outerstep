import React from "react"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"

const TrackRecordSection = dynamic(() => import("@/components/track-record-section").then((mod) => mod.TrackRecordSection))
const HowItWorksSection = dynamic(() => import("@/components/HowItWorksSection"))
const PricingSection = dynamic(() => import("@/components/PricingSection"))
const SixSystemsSection = dynamic(() => import("@/components/six-systems-section").then((mod) => mod.SixSystemsSection))
const WhoItFits = dynamic(() => import("@/components/WhoItFits"))
const CtaSection = dynamic(() => import("@/components/CtaSection"))
const Footer = dynamic(() => import("@/components/Footer"))

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-[#edf2f2]">
      <HeroSection />
      <TrackRecordSection />
      <HowItWorksSection />
      <PricingSection />
      <SixSystemsSection />
      <WhoItFits />
      <CtaSection />
      <Footer />
    </main>
  )
}
