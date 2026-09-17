"use client"

import React, { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { TrackRecordSection } from "@/components/track-record-section"
import HowItWorksSection from "@/components/HowItWorksSection"
import ToolsShowcase from "@/components/ToolsShowcase"
import { SixSystemsSection } from "@/components/six-systems-section"
import WhoItFits from "@/components/WhoItFits"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"
import BookCallModal from "@/components/BookCallModal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")

  const handleOpenBookCall = (productName?: string) => {
    if (productName && typeof productName === "string") {
      setSelectedProduct(productName)
    }
    setModalOpen(true)
  }

  const handleCloseBookCall = () => {
    setModalOpen(false)
  }

  return (
    <main className="min-h-screen bg-[#edf2f2]">
      <HeroSection onOpenBookCall={() => handleOpenBookCall()} />
      <TrackRecordSection />
      <HowItWorksSection />
      <ToolsShowcase />
      <SixSystemsSection />
      <WhoItFits />
      <CtaSection onOpenBookCall={() => handleOpenBookCall()} />
      <Footer onOpenBookCall={() => handleOpenBookCall()} />
      <BookCallModal
        isOpen={modalOpen}
        onClose={handleCloseBookCall}
        initialProduct={selectedProduct}
      />
    </main>
  )
}
