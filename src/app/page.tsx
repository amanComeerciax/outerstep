import { HeroSection } from "@/components/hero-section"
import HowItWorksSection from "@/components/HowItWorksSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#edf2f2]">
      <HeroSection />
      <HowItWorksSection />
    </main>
  )
}
