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
      // Header Animation
      gsap.from(".reveal-header", {
        scrollTrigger: {
          trigger: ".reveal-header",
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
        // We don't animate the last card pushing back
        if (index === cards.length - 1) return;
        
        // As the NEXT wrapper comes up, push THIS card back and fade it completely out
        gsap.to(card, {
          scale: 0.9,
          opacity: 0, // Fade completely to 0 to prevent any bleed-through bugs
          y: -30, // push it slightly up
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrappers[index + 1], // The next wrapper triggers it
            start: "top 85%", // Start fading when next card enters
            end: "top 20%",   // Finish fading when next card is near top
            scrub: true,
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="fit"
      style={{
        padding: "120px 0 160px 0",
        background: "var(--os-paper)",
        position: "relative",
      }}
    >
      <div className="container mx-auto" style={{ maxWidth: "1000px", padding: "0 24px" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "100px", maxWidth: "800px", margin: "0 auto 100px auto", textAlign: "center" }}>
          <h2
            className="reveal-header"
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
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Card 1 */}
          <div className="sticky-wrapper" style={{ position: "sticky", top: "120px", zIndex: 1 }}>
            <div 
              className="stacked-card" 
              style={{ 
                background: "#ffffff",
                padding: "60px",
                borderRadius: "32px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "80px", fontWeight: 700, color: "var(--os-deep-water)", lineHeight: 0.8 }}>
                01
              </div>
              <div>
                <h3 style={{ fontSize: "32px", fontWeight: 500, color: "var(--os-deep-water)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                  You sell a specifiable product
                </h3>
                <p style={{ fontSize: "20px", color: "var(--os-ink-secondary)", margin: 0, lineHeight: 1.6 }}>
                  A grade, a spec sheet, an HS code. Something a buyer can price without a meeting first.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sticky-wrapper" style={{ position: "sticky", top: "140px", zIndex: 2 }}>
            <div 
              className="stacked-card" 
              style={{ 
                background: "#ffffff",
                padding: "60px",
                borderRadius: "32px",
                boxShadow: "0 -20px 40px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "80px", fontWeight: 700, color: "var(--os-deep-water)", lineHeight: 0.8 }}>
                02
              </div>
              <div>
                <h3 style={{ fontSize: "32px", fontWeight: 500, color: "var(--os-deep-water)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                  Your buyers already import it
                </h3>
                <p style={{ fontSize: "20px", color: "var(--os-ink-secondary)", margin: 0, lineHeight: 1.6 }}>
                  They exist, they buy this today, and they appear in customs and trade records. We find them there.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sticky-wrapper" style={{ position: "sticky", top: "160px", zIndex: 3 }}>
            <div 
              className="stacked-card" 
              style={{ 
                background: "#ffffff",
                padding: "60px",
                borderRadius: "32px",
                boxShadow: "0 -20px 40px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                willChange: "transform, opacity",
              }}
            >
              <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "80px", fontWeight: 700, color: "var(--os-deep-water)", lineHeight: 0.8 }}>
                03
              </div>
              <div>
                <h3 style={{ fontSize: "32px", fontWeight: 500, color: "var(--os-deep-water)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                  You have capacity you are not filling
                </h3>
                <p style={{ fontSize: "20px", color: "var(--os-ink-secondary)", margin: 0, lineHeight: 1.6 }}>
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
