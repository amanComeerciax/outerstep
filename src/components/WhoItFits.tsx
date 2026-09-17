"use client";

import React from "react";
import { Check, X, Building2, UserX } from "lucide-react";

export default function WhoItFits() {
  return (
    <section
      id="fit"
      style={{
        padding: "100px 0",
        background: "var(--os-paper)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "720px", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              background: "var(--os-teal-wash)",
              border: "1px solid var(--os-teal-edge)",
              borderRadius: "var(--os-radius-pill)",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--os-deep-water)",
                letterSpacing: "0.08em",
              }}
            >
              QUALIFICATION
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--os-font-sans)",
              fontSize: "clamp(34px, 4vw, 50px)",
              fontWeight: 750,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--os-deep-water)",
              marginBottom: "18px",
            }}
          >
            Exporters doing $1M to $50M a year.
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 19px)",
              lineHeight: 1.6,
              color: "var(--os-ink-secondary)",
            }}
          >
            We align directly with commercial results. That means we only partner with exporters
            who have physical product ready to quote and allocate.
          </p>
        </div>

        {/* Comparison Split Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "32px",
          }}
          className="fit-grid"
        >
          {/* Who It Fits (Positive) */}
          <div
            style={{
              background: "var(--os-white)",
              border: "2px solid var(--os-seam-teal)",
              borderRadius: "var(--os-radius-2xl)",
              padding: "40px",
              boxShadow: "0 16px 40px rgba(79, 192, 174, 0.12)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--os-radius-lg)",
                  background: "var(--os-teal-wash)",
                  color: "var(--os-deep-water)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Building2 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--os-deep-water)" }}>
                  Who Outerstep is built for
                </h3>
                <span style={{ fontSize: "13px", color: "var(--os-ink-muted)" }}>
                  Ideal fit for our automated inquiry engine
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Direct manufacturers & factory producers with verified physical production capacity.",
                "Authorized allocation holders for fertilizers, petrochemicals, minerals, metals, or agri-commodities.",
                "Exporters shipping full container loads (FCL) or bulk vessel shipments ($1M - $50M/yr).",
                "Teams able to quote FOB or CIF pricing and provide standard Certificates of Analysis (COA).",
                "Companies looking to open new international export corridors without hiring local sales reps in every country.",
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--os-teal-wash)",
                      color: "var(--os-seam-teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--os-ink)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Who It Is NOT For (Negative) */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              border: "1px solid var(--os-hairline)",
              borderRadius: "var(--os-radius-2xl)",
              padding: "40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--os-radius-lg)",
                  background: "rgba(11, 58, 63, 0.05)",
                  color: "var(--os-ink-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserX size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--os-deep-water)" }}>
                  Who it is NOT for
                </h3>
                <span style={{ fontSize: "13px", color: "var(--os-ink-muted)" }}>
                  Cases where our platform will not create value
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Unlicensed brokers or daisy-chain intermediaries without verified supplier mandate.",
                "B2C e-commerce, consumer retail products, dropshipping, or single-carton parcels.",
                "Companies without established commercial export documentation or banking facilities.",
                "Products without clear harmonized tariff (HS) classification or laboratory specifications.",
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(223, 88, 70, 0.1)",
                      color: "var(--os-tier-hot)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--os-ink-secondary)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .fit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
