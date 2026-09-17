"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import HowItWorks from "@/components/HowItWorks";
import PipelineTimeline from "@/components/PipelineTimeline";
import WhyDifferent from "@/components/WhyDifferent";
import WhoItFits from "@/components/WhoItFits";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BookCallModal from "@/components/BookCallModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOpenBookCall = (productName?: string) => {
    if (productName && typeof productName === "string") {
      setSelectedProduct(productName);
    }
    setModalOpen(true);
  };

  const handleCloseBookCall = () => {
    setModalOpen(false);
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Sticky Blur Navigation */}
      <Navigation onOpenBookCall={() => handleOpenBookCall()} />

      {/* Hero Section with World Trade Radar Map & Live Inquiry Card */}
      <Hero onOpenBookCall={() => handleOpenBookCall()} />

      {/* Proven Track Record Section with $20M+ & Deal Velocity Timeline */}
      <TrackRecord />

      {/* How It Works: 3 Steps */}
      <HowItWorks />

      {/* Pipeline: Lead sourcing → Handover */}
      <PipelineTimeline />

      {/* Three Things That Are Different */}
      <WhyDifferent />

      {/* Who It Fits: $1M - $50M Exporters */}
      <WhoItFits />


      {/* Final Call to Action Banner */}
      <CtaSection onOpenBookCall={() => handleOpenBookCall()} />

      {/* Comprehensive Brand Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookCallModal
        isOpen={modalOpen}
        onClose={handleCloseBookCall}
        initialProduct={selectedProduct}
      />
    </main>
  );
}
