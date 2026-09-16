import { HeroSection } from "@/components/hero-section"
import HowItWorksSection from "@/components/HowItWorksSection"
import ToolsShowcase from "@/components/ToolsShowcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#edf2f2]">
      <HeroSection />
      <HowItWorksSection />
      <div id="platform" className="w-full">
        <ToolsShowcase />
      </div>
    </main>
  )
}
