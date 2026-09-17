"use client";

import React from "react";
import { useModal } from "@/components/ModalProvider";

export default function CtaSection() {
  const { openModal } = useModal();
  return (
    <div style={{ background: "#ffffff", paddingBottom: "80px" }}>
      <section 
        style={{
          position: "relative",
          padding: "120px 24px",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        {/* Background Image */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/shipping-containers.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.45)",
          }}
        />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
          <h2 
            className="font-headline"
            style={{ 
              fontSize: "clamp(42px, 6vw, 76px)", 
              fontWeight: 700, 
              letterSpacing: "-0.03em", 
              lineHeight: 1.1, 
              margin: "0 auto 36px auto",
              color: "#ffffff",
              maxWidth: "800px",
            }}
          >
            Let's find your buyers.
          </h2>

          <button 
            onClick={() => openModal()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 36px",
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: "'Instrument Sans', sans-serif",
              borderRadius: "9999px",
              backgroundColor: "#16494f",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.35)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0f363b";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#16494f";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span>Book a 15-min fit call</span>
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
