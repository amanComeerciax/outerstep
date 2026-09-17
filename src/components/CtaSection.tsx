"use client";

import React from "react";
import { ArrowRight, Sparkles, Shield, CheckCircle2 } from "lucide-react";

interface CtaProps {
  onOpenBookCall: () => void;
}

export default function CtaSection({ onOpenBookCall }: CtaProps) {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--os-paper)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, var(--os-deep-water) 0%, #062427 100%)",
            borderRadius: "var(--os-radius-2xl)",
            padding: "60px 48px",
            color: "var(--os-white)",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(79, 192, 174, 0.3)",
            boxShadow: "0 24px 60px rgba(11, 58, 63, 0.25)",
            textAlign: "center",
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(circle, rgba(79, 192, 174, 0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                background: "rgba(79, 192, 174, 0.15)",
                border: "1px solid rgba(79, 192, 174, 0.3)",
                borderRadius: "var(--os-radius-pill)",
                marginBottom: "24px",
              }}
            >
              <span className="badge-pulse" />
              <span
                style={{
                  fontFamily: "var(--os-font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--os-seam-teal)",
                  letterSpacing: "0.08em",
                }}
              >
                READY TO SCALE YOUR EXPORT VOLUME?
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--os-font-sans)",
                fontSize: "clamp(34px, 4.2vw, 54px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--os-white)",
                marginBottom: "20px",
              }}
            >
              Tell us what you sell.
              <br />
              We'll show you who is buying it today.
            </h2>

            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "36px",
              }}
            >
              Book a 15-minute qualification session with our export desk. We'll pull active customs
              manifests for your HS codes and show live importer demand in your target destination ports.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "32px",
              }}
            >
              <button
                onClick={onOpenBookCall}
                className="btn-teal"
                style={{
                  padding: "16px 36px",
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                <span>Book a 15-min fit call</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#simulator"
                className="btn-ghost-dark"
                style={{
                  padding: "16px 28px",
                  fontSize: "16px",
                }}
              >
                Check your commodity first
              </a>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.65)",
                fontFamily: "var(--os-font-mono)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={14} color="var(--os-seam-teal)" />
                <span>No long-term retainers</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={14} color="var(--os-seam-teal)" />
                <span>Transparent deal-based terms</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={14} color="var(--os-seam-teal)" />
                <span>Verified customs import records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
