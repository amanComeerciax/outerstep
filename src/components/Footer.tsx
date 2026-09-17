"use client";

import React from "react";

interface FooterProps {
  onOpenBookCall?: () => void;
}

export default function Footer({ onOpenBookCall }: FooterProps) {
  return (
    <footer
      style={{
        background: "var(--os-deep-water)",
        color: "var(--os-white)",
        padding: "120px 0 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Glow Background */}
      <div 
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "400px",
          background: "var(--os-seam-teal)",
          filter: "blur(200px)",
          opacity: 0.15,
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10" style={{ maxWidth: "1300px" }}>
        


        {/* Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "100px",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Identity */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
                <rect x="0" y="0" width="120" height="120" rx="24" fill="var(--os-seam-teal)" />
                <rect x="20" y="76" width="24" height="24" rx="6" fill="var(--os-deep-water)" />
                <rect x="48" y="48" width="24" height="24" rx="6" fill="var(--os-deep-water)" />
                <rect x="76" y="20" width="24" height="24" rx="6" fill="var(--os-deep-water)" opacity="0.55" />
              </svg>
              <span style={{ fontWeight: 600, fontSize: "24px", letterSpacing: "-0.03em" }}>
                Outerstep
              </span>
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.6, maxWidth: "320px", color: "rgba(255, 255, 255, 0.6)", margin: 0 }}>
              Automated buyer inquiries for exporters. We find companies already importing what you make,
              run the outreach, and hand you qualified deals.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "12px", color: "var(--os-white)", letterSpacing: "0.1em", marginBottom: "24px", opacity: 0.4 }}>
              PRODUCT
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px" }}>
              <a href="#how" className="f-link">How It Works</a>
              <a href="#product" className="f-link">The Platform</a>
              <a href="#proof" className="f-link">Track Record ($20M+)</a>
              <a href="#simulator" className="f-link">Corridor Simulator</a>
              <a href="#fit" className="f-link">Exporter Qualification</a>
            </div>
          </div>

          {/* Col 3: Corridors */}
          <div>
            <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "12px", color: "var(--os-white)", letterSpacing: "0.1em", marginBottom: "24px", opacity: 0.4 }}>
              KEY CORRIDORS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px" }}>
              <span className="f-text">Alexandria → Santos (Brazil)</span>
              <span className="f-text">Alexandria → Rotterdam (EU)</span>
              <span className="f-text">Mundra → Middle East</span>
              <span className="f-text">Houston → Callao (Peru)</span>
              <span className="f-text">Dakar → West Africa</span>
            </div>
          </div>

          {/* Col 4: Legal & Contact */}
          <div>
            <div style={{ fontFamily: "var(--os-font-mono)", fontSize: "12px", color: "var(--os-white)", letterSpacing: "0.1em", marginBottom: "24px", opacity: 0.4 }}>
              LEGAL & SECURITY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px" }}>
              <span className="f-text">Terms of Introduction</span>
              <span className="f-text">Commercial Privacy Policy</span>
              <span className="f-text">Customs Data Compliance</span>
              <span className="f-text">Sanctions & AML Screening</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px", paddingBottom: "32px", fontFamily: "var(--os-font-mono)", fontSize: "12px", color: "rgba(255,255,255,0.4)", flexWrap: "wrap", gap: "16px" }}>
          <div>© {new Date().getFullYear()} Outerstep Ltd. All rights reserved.</div>
          <div>Automated Buyer Inquiries for Exporters. No cold calls, no scrapers.</div>
        </div>


      </div>

      <style jsx>{`
        .f-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .f-link:hover {
          color: var(--os-seam-teal);
        }
        .f-text {
          color: rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
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
