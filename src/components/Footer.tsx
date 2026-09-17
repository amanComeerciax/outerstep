"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--os-deep-water)",
        color: "rgba(255, 255, 255, 0.75)",
        padding: "80px 0 40px 0",
        borderTop: "1px solid rgba(79, 192, 174, 0.2)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "60px",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Identity */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <svg width="26" height="26" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                <rect x="0" y="0" width="120" height="120" rx="24" fill="var(--os-seam-teal)" />
                <rect x="20" y="76" width="24" height="24" rx="6" fill="var(--os-deep-water)" />
                <rect x="48" y="48" width="24" height="24" rx="6" fill="var(--os-deep-water)" />
                <rect x="76" y="20" width="24" height="24" rx="6" fill="var(--os-deep-water)" opacity="0.55" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--os-font-sans)",
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "-0.02em",
                  color: "var(--os-white)",
                }}
              >
                Outerstep
              </span>
            </div>

            <p style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "320px", color: "rgba(255, 255, 255, 0.65)", marginBottom: "20px" }}>
              Automated buyer inquiries for exporters. We find companies already importing what you make,
              run the outreach, and hand you qualified deals.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                color: "var(--os-seam-teal)",
                background: "rgba(79, 192, 174, 0.12)",
                padding: "6px 12px",
                borderRadius: "var(--os-radius-pill)",
              }}
            >
              <span className="badge-pulse" />
              <span>Monitoring 28 Global Trade Corridors</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "11px", fontWeight: 700, color: "var(--os-white)", letterSpacing: "0.08em", marginBottom: "16px" }}>
              PRODUCT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <a href="#how" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }} className="f-link">
                How It Works
              </a>
              <a href="#product" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }} className="f-link">
                The Platform
              </a>
              <a href="#proof" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }} className="f-link">
                Track Record ($20M+)
              </a>
              <a href="#simulator" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }} className="f-link">
                Corridor Simulator
              </a>
              <a href="#fit" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }} className="f-link">
                Exporter Qualification
              </a>
            </div>
          </div>

          {/* Col 3: Corridors */}
          <div>
            <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "11px", fontWeight: 700, color: "var(--os-white)", letterSpacing: "0.08em", marginBottom: "16px" }}>
              KEY CORRIDORS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px" }}>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Alexandria → Santos (Brazil)</span>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Alexandria → Rotterdam (EU)</span>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Mundra → Middle East</span>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Houston → Callao (Peru)</span>
              <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>Dakar → West Africa</span>
            </div>
          </div>

          {/* Col 4: Legal & Contact */}
          <div>
            <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "11px", fontWeight: 700, color: "var(--os-white)", letterSpacing: "0.08em", marginBottom: "16px" }}>
              LEGAL & SECURITY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>Terms of Introduction</span>
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>Commercial Privacy Policy</span>
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>Customs Data Compliance</span>
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>Sanctions & AML Screening</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.5)",
            fontFamily: "var(--os-font-mono)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>© {new Date().getFullYear()} Outerstep Ltd. All rights reserved.</div>
          <div>Automated Buyer Inquiries for Exporters. No cold calls, no scrapers.</div>
        </div>
      </div>

      <style jsx>{`
        .f-link:hover {
          color: var(--os-seam-teal) !important;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
