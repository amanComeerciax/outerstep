"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CtaSectionProps {
  onOpenBookCall?: () => void;
}

export default function CtaSection({ onOpenBookCall }: CtaSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".cta-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "var(--os-paper)", paddingBottom: "120px" }}>
      <section 
        ref={containerRef}
        style={{
          position: "relative",
          padding: "160px 24px",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        {/* Background Image - Original Opacity */}
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
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Darkens the image enough to read white text
          }}
        />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>

          
          <h2 
            className="cta-reveal"
            style={{ 
              fontSize: "clamp(48px, 8vw, 80px)", 
              fontWeight: 600, 
              letterSpacing: "-0.04em", 
              lineHeight: 1.1, 
              margin: "0 auto 48px auto",
              color: "var(--os-white)",
              maxWidth: "800px"
            }}
          >
            Let's find your buyers.
          </h2>

          <button 
            className="cta-reveal btn-primary"
            onClick={onOpenBookCall}
            style={{
              padding: "20px 48px",
              fontSize: "18px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Book a 15-min fit call →
          </button>
        </div>
      </section>
    </div>
  );
}
