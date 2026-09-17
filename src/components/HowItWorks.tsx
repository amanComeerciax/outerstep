"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Mail, FileText, Bell, Building2, Pencil, Zap, MessageSquare, Send, CheckCircle2, Search, ArrowRight, Check } from "lucide-react";

export default function HowItWorks() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.4 });

    const cards = document.querySelectorAll('.how-step-card');
    cards.forEach(card => observer.observe(card));

    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 4);
    }, 2000);
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const step1Items = ["Product", "Details", "Review", "Submit"];
  const step3Items = ["Inquiry received", "Draft ready", "You review", "Send reply"];
  const step2Importers = [
    { name: "Importer A", baseStatus: "Inquiry sent" },
    { name: "Importer B", baseStatus: "Follow-up sent" },
    { name: "Importer C", baseStatus: "Replied" },
    { name: "Importer D", baseStatus: "Interested" },
  ];

  return (
    <section
      id="how"
      style={{
        padding: "100px 0",
        background: "var(--os-paper)",
        position: "relative",
      }}
    >
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* STEP 01 */}
        <div
          style={{
            background: "var(--os-white)",
            borderRadius: "var(--os-radius-2xl)",
            padding: "60px 48px",
            border: "1px solid var(--os-hairline)",
            boxShadow: "var(--os-shadow-sm)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="how-step-card"
        >
          <div className="how-text-content">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <span
                style={{
                  background: "var(--os-seam-teal)",
                  color: "var(--os-deep-water)",
                  fontFamily: "var(--os-font-mono)",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                01
              </span>
              <span
                style={{
                  fontFamily: "var(--os-font-mono)",
                  color: "var(--os-ink-muted)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                ABOUT FORTY MINUTES, ONCE
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--os-font-sans)",
                fontSize: "clamp(38px, 4vw, 52px)",
                fontWeight: 700,
                color: "var(--os-deep-water)",
                marginBottom: "20px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Tell us what you sell
            </h3>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: "var(--os-ink-secondary)",
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Grades, capacity, minimum order, certifications and loading ports.
              The detail a buyer asks for before they quote.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {[
                "Saves as you type",
                "HS code suggested",
                "Existing customers excluded"
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--os-ink-secondary)", fontWeight: 500 }}>
                  <CheckCircle size={18} color="var(--os-seam-teal)" fill="var(--os-teal-wash)" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="how-visual-content" style={{ position: "relative" }}>
            {/* Visual: Floating UI */}
            <div style={{ background: "var(--os-paper)", padding: "24px", borderRadius: "16px", border: "1px solid var(--os-hairline)", width: "100%", maxWidth: "480px", marginLeft: "auto", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", gap: "24px" }}>
                {/* Stepper (Dynamic) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingRight: "16px", borderRight: "1px solid var(--os-rule)" }}>
                  {step1Items.map((item, i) => {
                    const isActive = i === tick;
                    
                    return (
                      <div key={i} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "16px", 
                        color: isActive ? "var(--os-deep-water)" : "var(--os-ink-secondary)", 
                        fontSize: "16px", 
                        fontWeight: isActive ? 700 : 500,
                        transition: "all 0.3s ease"
                      }}>
                        <div style={{ 
                          width: "16px", 
                          height: "16px", 
                          borderRadius: "50%", 
                          background: isActive ? "var(--os-deep-water)" : "transparent",
                          border: isActive ? "none" : "2px solid var(--os-hairline)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                          flexShrink: 0
                        }} />
                        {item}
                      </div>
                    );
                  })}
                </div>

                {/* Form area */}
                <div style={{ flex: 1, background: "var(--os-white)", padding: "24px", borderRadius: "12px", boxShadow: "var(--os-shadow-md)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--os-deep-water)" }}>Product details</h4>
                    <span style={{ fontSize: "11px", color: "var(--os-ink-muted)", fontWeight: 600 }}>Step {tick + 1} of 4</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                    <div style={{ background: "var(--os-paper)", border: "1px solid var(--os-hairline)", borderRadius: "6px", padding: "10px 14px", opacity: tick >= 0 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>
                      <div style={{ fontSize: "11px", color: "var(--os-ink-muted)", marginBottom: "4px" }}>Product name</div>
                      <div style={{ fontSize: "13px", color: "var(--os-deep-water)", fontWeight: 500 }}>Granular Urea 46% N</div>
                    </div>
                    <div style={{ background: "var(--os-paper)", border: "1px solid var(--os-hairline)", borderRadius: "6px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", opacity: tick >= 0 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>
                      <div>
                        <div style={{ fontSize: "11px", color: "var(--os-ink-muted)", marginBottom: "4px" }}>HS Code</div>
                        <div style={{ fontSize: "13px", color: "var(--os-deep-water)", fontWeight: 500 }}>3102.10</div>
                      </div>
                      <Search size={14} color="var(--os-ink-muted)" />
                    </div>
                    <div style={{ background: "var(--os-paper)", border: "1px solid var(--os-hairline)", borderRadius: "6px", padding: "10px 14px", opacity: tick >= 1 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>
                      <div style={{ fontSize: "11px", color: "var(--os-ink-muted)", marginBottom: "4px" }}>Grade / Specification</div>
                      <div style={{ fontSize: "13px", color: "var(--os-deep-water)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Prilled, biuret max 1.0%</div>
                    </div>
                    <div style={{ background: "var(--os-paper)", border: "1px solid var(--os-hairline)", borderRadius: "6px", padding: "10px 14px", opacity: tick >= 1 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>
                      <div style={{ fontSize: "11px", color: "var(--os-ink-muted)", marginBottom: "4px" }}>Loading port</div>
                      <div style={{ fontSize: "13px", color: "var(--os-deep-water)", fontWeight: 500 }}>Alexandria, Damietta</div>
                    </div>
                    <div style={{ background: "var(--os-paper)", border: "1px solid var(--os-hairline)", borderRadius: "6px", padding: "10px 14px", opacity: tick >= 2 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>
                      <div style={{ fontSize: "11px", color: "var(--os-ink-muted)", marginBottom: "4px" }}>Minimum order quantity</div>
                      <div style={{ fontSize: "13px", color: "var(--os-deep-water)", fontWeight: 500 }}>500 MT</div>
                    </div>
                    <div style={{ background: "var(--os-paper)", border: "1px solid var(--os-hairline)", borderRadius: "6px", padding: "10px 14px", opacity: tick >= 2 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>
                      <div style={{ fontSize: "11px", color: "var(--os-ink-muted)", marginBottom: "4px" }}>Certifications</div>
                      <div style={{ fontSize: "13px", color: "var(--os-deep-water)", fontWeight: 500 }}>ISO 9001, SGS</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button style={{ background: tick === 3 ? "var(--os-seam-teal)" : "var(--os-deep-water)", color: tick === 3 ? "var(--os-deep-water)" : "#fff", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", border: "none", transition: "all 0.3s ease" }}>
                      {tick === 3 ? "Submit" : "Save and continue"} {tick !== 3 && <ArrowRight size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative blob */}
            <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "80%", height: "140%", background: "radial-gradient(ellipse, var(--os-teal-wash) 0%, transparent 70%)", zIndex: 0 }} />
          </div>
        </div>

        {/* STEP 02 */}
        <div
          style={{
            background: "var(--os-deep-water)",
            borderRadius: "var(--os-radius-2xl)",
            padding: "60px 48px",
            border: "1px solid rgba(79, 192, 174, 0.2)",
            boxShadow: "var(--os-shadow-dark)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
          className="how-step-card"
        >
          {/* Subtle grid background */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 0 }} />
          
          <div className="how-text-content" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <span
                style={{
                  background: "var(--os-seam-teal)",
                  color: "var(--os-deep-water)",
                  fontFamily: "var(--os-font-mono)",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                02
              </span>
              <span
                style={{
                  fontFamily: "var(--os-font-mono)",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                CONTINUOUSLY, IN THE BACKGROUND
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--os-font-sans)",
                fontSize: "clamp(38px, 4vw, 52px)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "20px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              We find them, write to them, and read what comes back
            </h3>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "40px",
                maxWidth: "480px",
              }}
            >
              Companies that already import your product. Four touches in their
              language, about your actual spec. Every reply classified, with the
              quantity, port and timeline pulled out.
            </p>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { icon: Mail, text: "No lists to review" },
                { icon: FileText, text: "No copy to approve" },
                { icon: Bell, text: "No mailbox to warm" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
                  <div style={{ padding: "8px", borderRadius: "50%", border: "1px solid rgba(255, 255, 255, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <item.icon size={16} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="how-visual-content" style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: "30px" }}>
            {/* Visual: Pipeline Map (Dynamic) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Fortgreen", baseStatus: "Inquiry sent" },
                { name: "SEMPRE AGTECH", baseStatus: "Follow-up sent" },
                { name: "Coopadap", baseStatus: "Replied" },
                { name: "Cooperativa Tradição", baseStatus: "Interested" },
              ].map((imp, i) => {
                const isActive = tick === i;
                const isReplied = tick >= 2 && i >= 2; // C and D simulate replies
                
                let status = imp.baseStatus;
                let color = "rgba(255, 255, 255, 0.6)";
                let dotColor = "rgba(255, 255, 255, 0.3)";
                
                if (isActive) {
                  color = "#fff";
                  dotColor = "var(--os-seam-teal)";
                  if (i < 2) status = "Processing...";
                } else if (isReplied) {
                  color = "var(--os-seam-teal)";
                  dotColor = "var(--os-seam-teal)";
                }

                return (
                  <div key={i} style={{ 
                    background: isActive ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)", 
                    border: isActive ? "1px solid var(--os-seam-teal)" : "1px solid rgba(255, 255, 255, 0.1)", 
                    borderRadius: "8px", 
                    padding: "12px 16px", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "12px", 
                    width: "180px", 
                    position: "relative",
                    transition: "all 0.3s ease"
                  }}>
                    <Building2 size={16} color={isActive ? "var(--os-seam-teal)" : "rgba(255, 255, 255, 0.5)"} />
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{imp.name}</div>
                      <div style={{ fontSize: "11px", color: color, transition: "color 0.3s ease" }}>{status}</div>
                    </div>
                    {/* Connection Node */}
                    <div style={{ 
                      position: "absolute", 
                      right: "-20px", 
                      top: "50%", 
                      transform: "translateY(-50%)", 
                      width: "6px", 
                      height: "6px", 
                      borderRadius: "50%", 
                      background: dotColor, 
                      boxShadow: dotColor === "var(--os-seam-teal)" ? "0 0 8px var(--os-seam-teal)" : "none",
                      transition: "all 0.3s ease"
                    }} />
                  </div>
                );
              })}
            </div>

            {/* SVG Connecting Lines (Dynamic) */}
            <div style={{ width: "60px", height: "240px", position: "relative" }}>
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, overflow: "visible" }}>
                {/* Lines from Importers to New Reply */}
                <path d="M 0,35 C 30,35 30,120 60,120" fill="none" stroke={tick === 0 ? "var(--os-seam-teal)" : "rgba(255,255,255,0.1)"} strokeWidth={tick === 0 ? "2" : "1.5"} strokeDasharray="4 4" style={{ transition: "all 0.3s ease" }} />
                <path d="M 0,95 C 30,95 30,120 60,120" fill="none" stroke={tick === 1 ? "var(--os-seam-teal)" : "rgba(255,255,255,0.1)"} strokeWidth={tick === 1 ? "2" : "1.5"} strokeDasharray="4 4" style={{ transition: "all 0.3s ease" }} />
                <path d="M 0,155 C 30,155 30,120 60,120" fill="none" stroke={tick >= 2 ? "var(--os-seam-teal)" : "rgba(255,255,255,0.1)"} strokeWidth={tick === 2 ? "2" : "1.5"} style={{ transition: "all 0.3s ease" }} />
                <path d="M 0,215 C 30,215 30,120 60,120" fill="none" stroke={tick >= 3 ? "var(--os-seam-teal)" : "rgba(255,255,255,0.1)"} strokeWidth={tick === 3 ? "2" : "1.5"} style={{ transition: "all 0.3s ease" }} />
                
                {/* Animated Dot on Active Path */}
                <circle cx="0" cy="0" r="4" fill="var(--os-white)" style={{ 
                  offsetPath: `path('M 0,${35 + (tick * 60)} C 30,${35 + (tick * 60)} 30,120 60,120')`, 
                  animation: "moveDot 2s ease-in-out infinite",
                  filter: "drop-shadow(0 0 4px var(--os-seam-teal))"
                }} />
              </svg>
            </div>

            {/* New Reply Card (Dynamic Pulse) */}
            <div style={{ 
              background: tick >= 2 ? "rgba(11, 58, 63, 0.8)" : "rgba(11, 58, 63, 0.4)", 
              border: tick >= 2 ? "1px solid var(--os-seam-teal)" : "1px solid rgba(79, 192, 174, 0.3)", 
              borderRadius: "12px", 
              padding: "20px", 
              width: "240px", 
              backdropFilter: "blur(8px)", 
              position: "relative",
              transform: tick >= 2 ? "scale(1.02)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: tick >= 2 ? "0 0 30px rgba(79, 192, 174, 0.15)" : "none"
            }}>
              <div style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", width: "6px", height: "6px", borderRadius: "50%", background: tick >= 2 ? "var(--os-seam-teal)" : "rgba(255, 255, 255, 0.3)", boxShadow: tick >= 2 ? "0 0 12px var(--os-seam-teal)" : "none", transition: "all 0.3s ease" }} />
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", opacity: tick >= 2 ? 1 : 0.5, transition: "opacity 0.3s ease" }}>New Reply</div>
                <div style={{ background: tick >= 2 ? "var(--os-seam-teal)" : "transparent", border: tick < 2 ? "1px solid rgba(255, 255, 255, 0.2)" : "none", color: tick >= 2 ? "var(--os-deep-water)" : "rgba(255, 255, 255, 0.5)", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "100px", transition: "all 0.3s ease" }}>{tick >= 2 ? "High Intent" : "Waiting"}</div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", opacity: tick >= 2 ? 1 : 0.3, transition: "opacity 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}>Quantity</span>
                  <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>500 MT</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}>Port</span>
                  <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>Paranaguá</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "8px" }}>
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}>Timeline</span>
                  <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>Q4 2024</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}>Status</span>
                  <span style={{ fontSize: "13px", color: "var(--os-seam-teal)", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--os-seam-teal)" }} /> Qualified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03 */}
        <div
          style={{
            background: "var(--os-white)",
            borderRadius: "var(--os-radius-2xl)",
            padding: "60px 48px",
            border: "1px solid var(--os-hairline)",
            boxShadow: "var(--os-shadow-sm)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="how-step-card"
        >
          <div className="how-text-content">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <span
                style={{
                  background: "var(--os-seam-teal)",
                  color: "var(--os-deep-water)",
                  fontFamily: "var(--os-font-mono)",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                03
              </span>
              <span
                style={{
                  fontFamily: "var(--os-font-mono)",
                  color: "var(--os-ink-muted)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                ONLY WHEN A BUYER REPLIES
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--os-font-sans)",
                fontSize: "clamp(38px, 4vw, 52px)",
                fontWeight: 700,
                color: "var(--os-deep-water)",
                marginBottom: "20px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Answer the buyer
            </h3>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.6,
                color: "var(--os-ink-secondary)",
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              A qualified inquiry with a drafted reply, waiting in your inbox.
              Edit it and send, without leaving the platform.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { icon: Pencil, text: "Draft written for you" },
                { icon: Zap, text: "Never auto-sent" },
                { icon: MessageSquare, text: "One screen, one thread" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 600, color: "var(--os-ink-secondary)", padding: "8px 16px", background: "var(--os-paper)", borderRadius: "100px" }}>
                  <item.icon size={16} color="var(--os-seam-teal)" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="how-visual-content" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {/* Visual: Chat/Draft UI */}
            <div style={{ flex: 1, background: "var(--os-white)", borderRadius: "16px", border: "1px solid var(--os-hairline)", boxShadow: "var(--os-shadow-md)", overflow: "hidden" }}>
              {/* Incoming Message */}
              <div style={{ padding: "20px", borderBottom: "1px solid var(--os-rule)", display: "flex", gap: "16px", opacity: tick >= 0 ? 1 : 0.3, transition: "opacity 0.3s ease" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--os-sunken)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--os-ink-secondary)", fontSize: "14px", flexShrink: 0 }}>
                  B
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--os-deep-water)" }}>Brazil · farming</div>
                    <div style={{ fontSize: "12px", color: "var(--os-ink-muted)" }}>10 Sept</div>
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--os-ink-secondary)", lineHeight: 1.5 }}>
                    "Bom dia, Trabalhamos com volumes menores. Qual o pedido mínimo? Se conseguirem 500 MT CIF Paranaguá podemos avaliar para o próximo trimestre."
                  </div>
                </div>
              </div>

              {/* Draft Reply Area */}
              <div style={{ padding: "20px", background: "var(--os-paper)" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--os-ink-muted)", marginBottom: "12px", opacity: tick >= 1 ? 1 : 0.3, transition: "opacity 0.3s ease" }}>Your reply (draft)</div>
                <div style={{ background: "var(--os-white)", border: "1px solid var(--os-hairline)", borderRadius: "8px", padding: "16px", fontSize: "13px", color: "var(--os-ink-secondary)", lineHeight: 1.5, marginBottom: "16px", opacity: tick >= 1 ? 1 : 0.3, transition: "opacity 0.3s ease" }}>
                  Hello. Thank you for reaching out. Our minimum order for Granular Urea 46% N is 500 MT. We can offer CIF Paranaguá for the next quarter as requested...
                </div>
                <div style={{ display: "flex", gap: "12px", opacity: tick >= 2 ? 1 : 0.3, transition: "opacity 0.3s ease" }}>
                  <button style={{ background: tick === 3 ? "var(--os-seam-teal)" : "var(--os-deep-water)", color: tick === 3 ? "var(--os-deep-water)" : "#fff", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, border: "none", transition: "all 0.3s ease" }}>
                    {tick === 3 ? "Sent Successfully ✓" : "Send reply"}
                  </button>
                  <button style={{ background: "var(--os-white)", color: "var(--os-ink-secondary)", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, border: "1px solid var(--os-hairline)" }}>
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {/* Timeline sidebar (Dynamic) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px", position: "relative", paddingBottom: "70px" }}>
              <div style={{ position: "absolute", left: "15px", top: "16px", bottom: "16px", width: "2px", background: "var(--os-rule)", zIndex: 0 }}>
                {/* Animated fill line */}
                <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: `${(tick / 3) * 100}%`, background: "var(--os-seam-teal)", transition: "height 0.3s ease" }} />
              </div>
              
              {step3Items.map((item, i) => {
                const isPast = i < tick;
                const isActive = i === tick;
                const isFuture = i > tick;
                
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative", zIndex: 1 }}>
                    {/* Circle Indicator */}
                    <div style={{ 
                      width: "32px", 
                      height: "32px", 
                      borderRadius: "50%", 
                      background: "var(--os-white)",
                      border: isFuture ? "2px solid var(--os-hairline)" : "2px solid var(--os-seam-teal)",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      flexShrink: 0
                    }}>
                      {isPast && <Check size={16} color="var(--os-seam-teal)" strokeWidth={3} />}
                      {isActive && (
                        <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--os-deep-water)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--os-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--os-deep-water)" }} />
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Label */}
                    <div style={{ 
                      fontSize: "15px", 
                      color: isActive ? "var(--os-deep-water)" : (isPast ? "var(--os-ink-secondary)" : "var(--os-ink-muted)"), 
                      fontWeight: isActive ? 700 : 500,
                      transition: "all 0.3s ease"
                    }}>
                      {item}
                    </div>
                  </div>
                );
              })}

              <div style={{ 
                position: "absolute", 
                bottom: "0px", 
                left: "-12px", 
                width: "56px", 
                height: "56px", 
                borderRadius: "50%", 
                background: "var(--os-teal-wash)", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                zIndex: 1,
                transform: tick === 3 ? "scale(1.05)" : "scale(1)",
                transition: "all 0.3s ease",
                boxShadow: tick === 3 ? "0 0 20px rgba(79, 192, 174, 0.4)" : "none"
              }}>
                <Send size={24} color="var(--os-seam-teal)" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .how-text-content {
          opacity: 0;
          transform: translateX(-40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }
        .how-visual-content {
          opacity: 0;
          transform: translateX(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        :global(.how-step-card.is-visible) .how-text-content,
        :global(.how-step-card.is-visible) .how-visual-content {
          opacity: 1;
          transform: translateX(0);
        }
        @keyframes moveDot {
          0% { offset-distance: 0%; opacity: 1; }
          90% { offset-distance: 100%; opacity: 0; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @media (max-width: 992px) {
          .how-step-card {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 40px 24px !important;
          }
          .how-visual-content {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
