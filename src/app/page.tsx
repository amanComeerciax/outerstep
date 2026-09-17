import { HeroSection } from "@/components/hero-section"
import { TrackRecordSection } from "@/components/track-record-section"
import HowItWorksSection from "@/components/HowItWorksSection"
import ToolsShowcase from "@/components/ToolsShowcase"
import { SixSystemsSection } from "@/components/six-systems-section"
import WhoItFits from "@/components/WhoItFits"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#edf2f2]">
      <HeroSection />
      <TrackRecordSection />
      <HowItWorksSection />
      <ToolsShowcase />
      <SixSystemsSection />
      <WhoItFits />
      <CtaSection />
      <Footer />
    </main>
  )
}
