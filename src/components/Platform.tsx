"use client";

import React, { useState } from "react";
import { Sliders, Inbox, ShieldCheck, FileCheck, Check, Clock, ChevronRight, Lock } from "lucide-react";

interface ScreenTab {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
}

const SCREENS: ScreenTab[] = [
  {
    id: "setup",
    number: "01",
    tag: "SETUP",
    title: "Describe what you sell, once.",
    description:
      "Grades, capacity, minimum order, certifications and loading ports. This is what we search on, so precision here decides how close the buyers are.",
    highlights: ["Saves as you type, resumable", "HS code suggested from the name", "Existing customers excluded upfront"],
  },
  {
    id: "inbox",
    number: "02",
    tag: "INBOX",
    title: "Only real buyer replies reach you.",
    description:
      "Bounces, out-of-offices and polite declines are handled before you see them. What lands is a buyer asking about your product, with the quantity, incoterm and destination already pulled out of their message.",
    highlights: ["Their own words, with a translation", "Quantity, port and timeline extracted", "Estimated buyer size and volume"],
  },
  {
    id: "intro",
    number: "03",
    tag: "INTRODUCTION",
    title: "See the terms before you see the name.",
    description:
      "Every introduction states what it costs and what it commits you to, per deal, before the buyer is revealed. Nothing is buried in an agreement you signed weeks earlier.",
    highlights: ["Clear fixed success terms", "Buyer balance sheet & customs history", "Zero long-term lock-in"],
  },
  {
    id: "draft",
    number: "04",
    tag: "NEGOTIATION",
    title: "The draft is written. The price is yours.",
    description:
      "Every reply comes drafted from your product record and the buyer's message. Commercial terms are left marked, and the send button stays disabled until you set them. We never quote a price on your behalf.",
    highlights: ["Pre-filled from product record", "Commercial terms strictly marked", "One timeline to bill of lading"],
  },
];

export default function Platform() {
  const [activeTab, setActiveTab] = useState(1); // Inbox active by default
  const activeScreen = SCREENS[activeTab];

  return (
    <section
      id="product"
      style={{
        padding: "100px 0",
        background: "var(--os-deep-water)",
        color: "var(--os-white)",
        position: "relative",
      }}
      className="bg-grid-dark"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 12px",
              background: "rgba(79, 192, 174, 0.15)",
              border: "1px solid rgba(79, 192, 174, 0.3)",
              borderRadius: "var(--os-radius-pill)",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--os-seam-teal)",
                letterSpacing: "0.08em",
              }}
            >
              THE PLATFORM
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--os-font-sans)",
              fontSize: "clamp(34px, 4vw, 50px)",
              fontWeight: 750,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "var(--os-white)",
              marginBottom: "18px",
            }}
          >
            Four screens, in the order you meet them.
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 19px)",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            Built expressly for exporters selling high-volume physical goods. Every screen is
            focused on deal velocity without CRM overhead.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "40px",
            overflowX: "auto",
            paddingBottom: "8px",
          }}
        >
          {SCREENS.map((screen, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "var(--os-radius-lg)",
                  background: isActive ? "var(--os-seam-teal)" : "rgba(255, 255, 255, 0.06)",
                  color: isActive ? "var(--os-deep-water)" : "rgba(255, 255, 255, 0.8)",
                  border: isActive ? "1px solid var(--os-seam-teal)" : "1px solid rgba(255, 255, 255, 0.12)",
                  cursor: "pointer",
                  fontFamily: "var(--os-font-sans)",
                  fontWeight: 600,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--os-font-mono)",
                    fontSize: "11px",
                    opacity: 0.85,
                  }}
                >
                  {screen.number}
                </span>
                <span>{screen.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Screen Display Area */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "40px",
            alignItems: "center",
            background: "rgba(6, 42, 46, 0.7)",
            border: "1px solid rgba(79, 192, 174, 0.25)",
            borderRadius: "var(--os-radius-2xl)",
            padding: "44px 40px",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
          }}
          className="screen-grid"
        >
          {/* Left Column: Screen Detail Description */}
          <div>
            <div
              style={{
                fontFamily: "var(--os-font-mono)",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--os-seam-teal)",
                letterSpacing: "0.08em",
                marginBottom: "12px",
              }}
            >
              {activeScreen.number} · {activeScreen.tag}
            </div>

            <h3
              style={{
                fontSize: "clamp(26px, 2.5vw, 34px)",
                fontWeight: 750,
                lineHeight: 1.2,
                color: "var(--os-white)",
                marginBottom: "18px",
                letterSpacing: "-0.02em",
              }}
            >
              {activeScreen.title}
            </h3>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: "28px",
              }}
            >
              {activeScreen.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {activeScreen.highlights.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(79, 192, 174, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--os-seam-teal)",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Screen UI Window Simulation */}
          <div
            style={{
              background: "var(--os-white)",
              color: "var(--os-deep-water)",
              borderRadius: "var(--os-radius-xl)",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* macOS / Web App Window Header */}
            <div
              style={{
                background: "var(--os-paper)",
                padding: "12px 18px",
                borderBottom: "1px solid var(--os-hairline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F56" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27C93F" }} />
                <span
                  style={{
                    marginLeft: "12px",
                    fontFamily: "var(--os-font-mono)",
                    fontSize: "11px",
                    color: "var(--os-ink-muted)",
                  }}
                >
                  app.outerstep.com/{activeScreen.id}
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--os-font-mono)",
                  fontSize: "10px",
                  color: "var(--os-ink-faint)",
                }}
              >
                LIVE DEMO
              </span>
            </div>

            {/* Simulated UI Body according to activeTab */}
            <div style={{ padding: "24px" }}>
              {activeTab === 0 && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 700, fontSize: "16px" }}>Granular Urea 46% N</span>
                    <span style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-seam-teal)", fontWeight: 700 }}>
                      ● 83% PROFILE COMPLETION
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontFamily: "var(--os-font-mono)", fontSize: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "var(--os-paper)", borderRadius: "6px" }}>
                      <span style={{ color: "var(--os-ink-muted)" }}>PRODUCT NAME</span>
                      <span style={{ fontWeight: 600 }}>Granular Urea 46% N</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "var(--os-paper)", borderRadius: "6px" }}>
                      <span style={{ color: "var(--os-ink-muted)" }}>HS CODE</span>
                      <span style={{ color: "var(--os-deep-water)", fontWeight: 700, background: "var(--os-teal-wash)", padding: "2px 6px", borderRadius: "4px" }}>
                        3102.10 (SUGGESTED)
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "var(--os-paper)", borderRadius: "6px" }}>
                      <span style={{ color: "var(--os-ink-muted)" }}>SPECIFICATION</span>
                      <span style={{ fontWeight: 600 }}>46% N min · biuret max 1.0%</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "var(--os-paper)", borderRadius: "6px" }}>
                      <span style={{ color: "var(--os-ink-muted)" }}>CAPACITY</span>
                      <span style={{ fontWeight: 600 }}>15,000 MT / month</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "var(--os-paper)", borderRadius: "6px" }}>
                      <span style={{ color: "var(--os-ink-muted)" }}>MINIMUM ORDER</span>
                      <span style={{ fontWeight: 600 }}>500 MT</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 700, fontSize: "16px" }}>Buyer Inquiries</span>
                    <span style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-tier-hot)", fontWeight: 700 }}>
                      1 AWAITING YOU
                    </span>
                  </div>

                  <div style={{ border: "1px solid var(--os-hairline)", borderRadius: "var(--os-radius-md)", padding: "16px", background: "var(--os-paper)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                      <span style={{ fontSize: "10px", fontFamily: "var(--os-font-mono)", background: "var(--os-tier-hot-wash)", color: "var(--os-tier-hot)", padding: "2px 6px", borderRadius: "3px", fontWeight: 700 }}>
                        HOT INQUIRY · CONFIDENCE 93%
                      </span>
                      <span style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-ink-muted)" }}>
                        just now
                      </span>
                    </div>
                    <p style={{ fontSize: "13px", fontStyle: "italic", lineHeight: 1.5, marginBottom: "14px", color: "var(--os-deep-water)" }}>
                      “Prezados, recebemos seu contato. Temos interesse em ureia granulada 46% N para a safra.
                      Poderiam cotar 3.000 MT CIF Santos, embarque outubro?”
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", fontFamily: "var(--os-font-mono)", fontSize: "11px" }}>
                      <div>
                        <span style={{ color: "var(--os-ink-muted)", fontSize: "9px" }}>QUANTITY</span>
                        <div style={{ fontWeight: 700 }}>3,000 MT</div>
                      </div>
                      <div>
                        <span style={{ color: "var(--os-ink-muted)", fontSize: "9px" }}>INCOTERM</span>
                        <div style={{ fontWeight: 700 }}>CIF</div>
                      </div>
                      <div>
                        <span style={{ color: "var(--os-ink-muted)", fontSize: "9px" }}>DESTINATION</span>
                        <div style={{ fontWeight: 700 }}>Santos, Brazil</div>
                      </div>
                      <div>
                        <span style={{ color: "var(--os-ink-muted)", fontSize: "9px" }}>TIMELINE</span>
                        <div style={{ fontWeight: 700 }}>October</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 700, fontSize: "16px" }}>Introduction Agreement</span>
                    <span style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-seam-teal)", fontWeight: 700 }}>
                      TRANSPARENT TERMS
                    </span>
                  </div>

                  <div style={{ background: "var(--os-paper)", padding: "16px", borderRadius: "8px", border: "1px solid var(--os-hairline)", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <Lock size={14} color="var(--os-deep-water)" />
                      <span style={{ fontWeight: 700, fontSize: "13px" }}>Buyer: Large Agricultural Cooperative (São Paulo, BR)</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--os-ink-secondary)", lineHeight: 1.5, marginBottom: "12px" }}>
                      Annual fertilizer import volume: 120,000+ MT. Verified credit rating, 0 customs infractions.
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--os-hairline)", paddingTop: "10px", fontFamily: "var(--os-font-mono)", fontSize: "11px" }}>
                      <span style={{ color: "var(--os-ink-muted)" }}>INTRO COMMITMENT:</span>
                      <strong style={{ color: "var(--os-deep-water)" }}>Fixed fee upon signed contract only</strong>
                    </div>
                  </div>

                  <button
                    className="btn-primary"
                    style={{ width: "100%", padding: "10px", fontSize: "13px", borderRadius: "6px" }}
                  >
                    Reveal Buyer Identity & Contact
                  </button>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                    <span style={{ fontWeight: 700, fontSize: "16px" }}>Drafted Reply Composer</span>
                    <span style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-tier-positive)", fontWeight: 700 }}>
                      ● DRAFT AUTOGENERATED
                    </span>
                  </div>

                  <div style={{ background: "var(--os-paper)", padding: "14px", borderRadius: "8px", border: "1px solid var(--os-hairline)", marginBottom: "14px", fontSize: "13px", lineHeight: 1.5 }}>
                    Dear Procurement Team,<br />
                    Thank you for your inquiry. We can supply 3,000 MT Granular Urea 46% N for October shipment.
                    <div style={{ margin: "10px 0", padding: "8px 12px", background: "var(--os-teal-wash)", borderRadius: "4px", border: "1px dashed var(--os-seam-teal)", fontWeight: 600 }}>
                      Your Price: [Enter $/MT CIF Santos here]
                    </div>
                    Inspection: SGS at loading port. Payment: Irrevocable LC at sight.
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      className="btn-primary"
                      style={{ flex: 1, padding: "10px", fontSize: "13px", borderRadius: "6px" }}
                    >
                      Approve & Dispatch
                    </button>
                    <button
                      style={{ padding: "10px 16px", borderRadius: "6px", border: "1px solid var(--os-hairline)", background: "#FFF", fontSize: "13px", cursor: "pointer" }}
                    >
                      Edit Terms
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .screen-grid {
            grid-template-columns: 1fr !important;
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
