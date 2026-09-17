"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBookCall: (productName?: string) => void;
}

export default function Hero({ onOpenBookCall }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const container = heroRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        paddingTop: "72px",
        paddingBottom: "0px",
        overflow: "hidden",
        backgroundColor: "#edf4f3",
        backgroundImage: "radial-gradient(ellipse at 50% 0%, #f7fbf9 0%, #edf4f3 70%)",
        textAlign: "center",
      }}
      className="hero-horizon-section"
    >
      {/* Top Header Watermark Texts (Left & Right) */}
      <div
        style={{
          position: "relative",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Upper Left Monospace Caption */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "24px",
            textAlign: "left",
            fontFamily: "var(--os-font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            lineHeight: 1.6,
            letterSpacing: "0.16em",
            color: "rgba(11, 58, 63, 0.45)",
            userSelect: "none",
          }}
          className="hero-side-caption"
        >
          <div>EXPORT</div>
          <div>GROW</div>
          <div>BEYOND BORDERS</div>
        </div>

        {/* Upper Right Monospace Caption */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "24px",
            textAlign: "right",
            fontFamily: "var(--os-font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            lineHeight: 1.6,
            letterSpacing: "0.16em",
            color: "rgba(11, 58, 63, 0.45)",
            userSelect: "none",
          }}
          className="hero-side-caption"
        >
          <div>GLOBAL</div>
          <div>OPPORTUNITIES</div>
          <div>REAL CONNECTIONS</div>
        </div>

        {/* Center Main Headline */}
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontFamily: "var(--os-font-sans)",
              fontSize: "clamp(46px, 6.2vw, 84px)",
              fontWeight: 750,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#0b3a3f", display: "block" }}>
              You bring the product.
            </span>
            <span style={{ color: "#2a6469", display: "block" }}>
              We bring the buyers.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(16px, 1.7vw, 19px)",
              lineHeight: 1.6,
              color: "rgba(11, 58, 63, 0.8)",
              maxWidth: "680px",
              margin: "0 auto 36px auto",
            }}
          >
            We find companies already importing what you make, run the outreach,
            and hand you the ones who reply asking to buy, with the quantity,
            port and timeline already pulled out of their message.
          </p>

          {/* Dual Action CTAs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "20px",
              position: "relative",
              zIndex: 20,
            }}
          >
            <button
              onClick={() => onOpenBookCall()}
              className="btn-primary"
              style={{
                padding: "16px 36px",
                fontSize: "16px",
                fontWeight: 600,
                backgroundColor: "var(--os-deep-water)",
                borderRadius: "var(--os-radius-pill)",
                boxShadow: "0 6px 20px rgba(11, 58, 63, 0.22)",
              }}
            >
              <span>Book a call</span>
              <ArrowRight size={17} />
            </button>

            <a
              href="#product"
              className="btn-secondary"
              style={{
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 600,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(8px)",
                borderColor: "rgba(11, 58, 63, 0.25)",
                color: "var(--os-deep-water)",
                borderRadius: "var(--os-radius-pill)",
              }}
            >
              See the Platform
            </a>
          </div>
        </div>
      </div>

      {/* Massive 3D Curved Earth Horizon Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1540px",
          margin: "0 auto",
          marginTop: "-180px",
          userSelect: "none",
        }}
      >
        {/* Parallax Container for Globe Graphic & Pins */}
        <div
          style={{
            position: "relative",
            width: "100%",
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`,
            transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Main Globe Horizon Image with Seamless Multiply Blend Mode */}
          <div style={{ position: "relative", width: "100%", lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/globe-horizon.jpg"
              alt="Global Trade Horizon"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                mixBlendMode: "multiply",
                maskImage:
                  "radial-gradient(ellipse 88% 74% at 50% 68%, black 35%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 88% 74% at 50% 68%, black 35%, transparent 78%)",
              }}
            />
          </div>

          {/* Pin 1: NEW MARKETS (Upper Left) */}
          {/* Pin 1: NEW MARKETS (Upper Left) */}
          <div
            style={{
              position: "absolute",
              left: "26.5%",
              top: "44.4%",
              transform: `translate(-50%, -100%) ${hoveredPin === "new_markets" ? "scale(1.08)" : "scale(1)"}`,
              transformOrigin: "bottom center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredPin("new_markets")}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--os-deep-water)",
                marginBottom: "6px",
                whiteSpace: "nowrap",
                background: "rgba(237, 244, 243, 0.85)",
                backdropFilter: "blur(4px)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              NEW MARKETS
            </div>
            {/* Vertical Connecting Line */}
            <div
              style={{
                width: "1px",
                height: "68px",
                background:
                  "linear-gradient(to bottom, rgba(11, 58, 63, 0.6), rgba(79, 192, 174, 0.95))",
              }}
            />
            {/* Dot directly ON Earth Horizon */}
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--os-deep-water)",
                boxShadow: "0 0 0 4px rgba(79, 192, 174, 0.45)",
                transform: "translateY(4px)",
              }}
            />
          </div>

          {/* Pin 2: MORE BUYERS (Lower Left) */}
          <div
            style={{
              position: "absolute",
              left: "10.8%",
              top: "64.5%",
              transform: `translate(-50%, -100%) ${hoveredPin === "more_buyers" ? "scale(1.08)" : "scale(1)"}`,
              transformOrigin: "bottom center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredPin("more_buyers")}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--os-deep-water)",
                marginBottom: "6px",
                whiteSpace: "nowrap",
                background: "rgba(237, 244, 243, 0.85)",
                backdropFilter: "blur(4px)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              MORE BUYERS
            </div>
            {/* Vertical Connecting Line */}
            <div
              style={{
                width: "1px",
                height: "72px",
                background:
                  "linear-gradient(to bottom, rgba(11, 58, 63, 0.6), rgba(79, 192, 174, 0.95))",
              }}
            />
            {/* Dot directly ON Earth Horizon */}
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--os-deep-water)",
                boxShadow: "0 0 0 4px rgba(79, 192, 174, 0.45)",
                transform: "translateY(4px)",
              }}
            />
          </div>

          {/* Pin 3: STRONGER BUSINESSES (Upper Right) */}
          <div
            style={{
              position: "absolute",
              left: "74.8%",
              top: "45.7%",
              transform: `translate(-50%, -100%) ${hoveredPin === "stronger" ? "scale(1.08)" : "scale(1)"}`,
              transformOrigin: "bottom center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredPin("stronger")}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--os-deep-water)",
                marginBottom: "6px",
                whiteSpace: "nowrap",
                background: "rgba(237, 244, 243, 0.85)",
                backdropFilter: "blur(4px)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              STRONGER BUSINESSES
            </div>
            {/* Vertical Connecting Line */}
            <div
              style={{
                width: "1px",
                height: "68px",
                background:
                  "linear-gradient(to bottom, rgba(11, 58, 63, 0.6), rgba(79, 192, 174, 0.95))",
              }}
            />
            {/* Dot directly ON Earth Horizon */}
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--os-deep-water)",
                boxShadow: "0 0 0 4px rgba(79, 192, 174, 0.45)",
                transform: "translateY(4px)",
              }}
            />
          </div>

          {/* Pin 4: SUSTAINABLE GROWTH (Lower Right) */}
          <div
            style={{
              position: "absolute",
              left: "90.0%",
              top: "66.0%",
              transform: `translate(-50%, -100%) ${hoveredPin === "sustainable" ? "scale(1.08)" : "scale(1)"}`,
              transformOrigin: "bottom center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={() => setHoveredPin("sustainable")}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "var(--os-deep-water)",
                marginBottom: "6px",
                whiteSpace: "nowrap",
                background: "rgba(237, 244, 243, 0.85)",
                backdropFilter: "blur(4px)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              SUSTAINABLE GROWTH
            </div>
            {/* Vertical Connecting Line */}
            <div
              style={{
                width: "1px",
                height: "72px",
                background:
                  "linear-gradient(to bottom, rgba(11, 58, 63, 0.6), rgba(79, 192, 174, 0.95))",
              }}
            />
            {/* Dot directly ON Earth Horizon */}
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--os-deep-water)",
                boxShadow: "0 0 0 4px rgba(79, 192, 174, 0.45)",
                transform: "translateY(4px)",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-side-caption {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
