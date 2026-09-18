"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoItFits() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header Animation — scoped to containerRef so it doesn't bleed
      gsap.from(".who-reveal-header", {
        scrollTrigger: {
          trigger: ".who-reveal-header",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Sticky Stacked Cards Animation
      const wrappers = gsap.utils.toArray(".sticky-wrapper") as Element[];
      const cards = gsap.utils.toArray(".stacked-card") as Element[];
      
      cards.forEach((card: any, index) => {
        if (index === cards.length - 1) return;
        
        gsap.to(card, {
          scale: 0.9,
          opacity: 0,
          y: -30,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrappers[index + 1],
            start: "top 85%",
            end: "top 20%",
            scrub: true,
          }
        });
      });

    }, containerRef);

    // Refresh on resize for responsiveness
    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="fit"
      className="w-full max-w-full overflow-x-clip"
      style={{
        padding: "clamp(60px, 10vw, 120px) 0 clamp(80px, 15vw, 160px) 0",
        background: "var(--os-paper)",
        position: "relative",
      }}
    >
      <div className="container mx-auto" style={{ maxWidth: "1000px", padding: "0 clamp(16px, 4vw, 24px)" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "100px", maxWidth: "800px", margin: "0 auto 100px auto", textAlign: "center" }}>
          <h2
            className="who-reveal-header"
            style={{
              fontFamily: "var(--os-font-sans)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--os-deep-water)",
            }}
          >
            Exporters doing $1M to $50M a year.
          </h2>
        </div>

        {/* Stacked Cards Section */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)" }}>
          
          {/* Card 1 */}
          <div className="sticky-wrapper" style={{ position: "sticky", top: "calc(var(--header-height, 80px) + clamp(20px, 4vw, 40px))", zIndex: 1 }}>
            <div 
              className="stacked-card" 
              style={{ 
                background: "#ffffff",
                padding: "clamp(24px, 5vw, 60px)",
                borderRadius: "clamp(20px, 4vw, 32px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(16px, 3vw, 24px)",
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 700, color: "var(--os-deep-water)", lineHeight: 0.8 }}>
                01
              </div>
              <div>
                <h3 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 500, color: "var(--os-deep-water)", marginBottom: "clamp(12px, 2vw, 16px)", letterSpacing: "-0.02em" }}>
                  You sell a specifiable product
                </h3>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "var(--os-ink-secondary)", margin: 0, lineHeight: 1.6 }}>
                  A grade, a spec sheet, an HS code. Something a buyer can price without a meeting first.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sticky-wrapper" style={{ position: "sticky", top: "calc(var(--header-height, 80px) + clamp(30px, 6vw, 60px))", zIndex: 2 }}>
            <div 
              className="stacked-card" 
              style={{ 
                background: "#ffffff",
                padding: "clamp(24px, 5vw, 60px)",
                borderRadius: "clamp(20px, 4vw, 32px)",
                boxShadow: "0 -20px 40px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(16px, 3vw, 24px)",
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 700, color: "var(--os-deep-water)", lineHeight: 0.8 }}>
                02
              </div>
              <div>
                <h3 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 500, color: "var(--os-deep-water)", marginBottom: "clamp(12px, 2vw, 16px)", letterSpacing: "-0.02em" }}>
                  Your buyers already import it
                </h3>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "var(--os-ink-secondary)", margin: 0, lineHeight: 1.6 }}>
                  They exist, they buy this today, and they appear in customs and trade records. We find them there.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sticky-wrapper" style={{ position: "sticky", top: "calc(var(--header-height, 80px) + clamp(40px, 8vw, 80px))", zIndex: 3 }}>
            <div 
              className="stacked-card" 
              style={{ 
                background: "#ffffff",
                padding: "clamp(24px, 5vw, 60px)",
                borderRadius: "clamp(20px, 4vw, 32px)",
                boxShadow: "0 -20px 40px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(16px, 3vw, 24px)",
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 700, color: "var(--os-deep-water)", lineHeight: 0.8 }}>
                03
              </div>
              <div>
                <h3 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 500, color: "var(--os-deep-water)", marginBottom: "clamp(12px, 2vw, 16px)", letterSpacing: "-0.02em" }}>
                  You have capacity you are not filling
                </h3>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "var(--os-ink-secondary)", margin: 0, lineHeight: 1.6 }}>
                  Real tonnage, real certifications, and room to take an order that lands next quarter.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
