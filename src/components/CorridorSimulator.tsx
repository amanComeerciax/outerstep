"use client";

import React, { useState } from "react";
import { Search, Globe, Ship, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

interface CommodityProfile {
  id: string;
  name: string;
  category: string;
  hsCode: string;
  activeImporters: number;
  topPorts: string[];
  avgOrder: string;
  avgVelocity: string;
  confidence: number;
}

const COMMODITIES: CommodityProfile[] = [
  {
    id: "urea",
    name: "Granular Urea 46% N",
    category: "Fertilizers & Agro-chemicals",
    hsCode: "3102.10",
    activeImporters: 480,
    topPorts: ["Santos (Brazil)", "Mundra (India)", "Rotterdam (Netherlands)"],
    avgOrder: "3,000 - 15,000 MT",
    avgVelocity: "8 days to first inquiry",
    confidence: 96,
  },
  {
    id: "bitumen",
    name: "Bitumen Penetration Grade 60/70",
    category: "Petroleum & Asphalt",
    hsCode: "2713.20",
    activeImporters: 340,
    topPorts: ["Hai Phong (Vietnam)", "Chittagong (Bangladesh)", "Mombasa (Kenya)"],
    avgOrder: "1,500 - 5,000 MT",
    avgVelocity: "11 days to first inquiry",
    confidence: 94,
  },
  {
    id: "polymers",
    name: "Polypropylene (PP) Homopolymer",
    category: "Plastics & Polymers",
    hsCode: "3902.10",
    activeImporters: 620,
    topPorts: ["Mersin (Turkey)", "Jebel Ali (UAE)", "Antwerp (Belgium)"],
    avgOrder: "200 - 1,200 MT",
    avgVelocity: "6 days to first inquiry",
    confidence: 98,
  },
  {
    id: "steel",
    name: "Hot Rolled Steel Coils / Deformed Bars",
    category: "Metals & Construction",
    hsCode: "7208.38",
    activeImporters: 410,
    topPorts: ["Alexandria (Egypt)", "Dammam (Saudi Arabia)", "Callao (Peru)"],
    avgOrder: "2,500 - 10,000 MT",
    avgVelocity: "9 days to first inquiry",
    confidence: 92,
  },
  {
    id: "citrus",
    name: "Fresh Valencia Oranges & Citrus",
    category: "Agricultural Produce",
    hsCode: "0805.10",
    activeImporters: 290,
    topPorts: ["St. Petersburg (Russia)", "Rotterdam (Netherlands)", "Klang (Malaysia)"],
    avgOrder: "5 - 20 Reefer 40ft",
    avgVelocity: "7 days to first inquiry",
    confidence: 95,
  },
];

interface SimulatorProps {
  onSelectProduct: (productName: string) => void;
}

export default function CorridorSimulator({ onSelectProduct }: SimulatorProps) {
  const [selectedCommodity, setSelectedCommodity] = useState<CommodityProfile>(COMMODITIES[0]);
  const [customSearch, setCustomSearch] = useState("");

  const handleCustomInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSearch.trim()) return;
    onSelectProduct(customSearch);
  };

  return (
    <section
      id="simulator"
      style={{
        padding: "100px 0",
        background: "var(--os-paper)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "720px", marginBottom: "50px" }}>
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
              INTERACTIVE RADAR
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
            See whether your product fits.
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 19px)",
              lineHeight: 1.6,
              color: "var(--os-ink-secondary)",
            }}
          >
            Select a commodity below or enter your exact export product to see live importer counts
            and active destination trade corridors.
          </p>
        </div>

        {/* Commodity Selectors Buttons */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {COMMODITIES.map((c) => {
            const isSelected = selectedCommodity.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCommodity(c)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "var(--os-radius-pill)",
                  background: isSelected ? "var(--os-deep-water)" : "var(--os-white)",
                  color: isSelected ? "var(--os-white)" : "var(--os-ink)",
                  border: isSelected ? "1px solid var(--os-deep-water)" : "1px solid var(--os-hairline)",
                  fontFamily: "var(--os-font-sans)",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? "0 4px 12px rgba(11, 58, 63, 0.2)" : "none",
                }}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Match Card Display */}
        <div
          style={{
            background: "var(--os-white)",
            border: "1px solid var(--os-hairline)",
            borderRadius: "var(--os-radius-2xl)",
            padding: "40px",
            boxShadow: "0 16px 40px rgba(11, 58, 63, 0.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "40px",
              alignItems: "center",
            }}
            className="sim-grid"
          >
            {/* Left: Matched Details */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--os-font-mono)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--os-seam-teal)",
                    background: "var(--os-teal-wash)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  HS CODE {selectedCommodity.hsCode}
                </span>
                <span style={{ fontSize: "13px", color: "var(--os-ink-muted)" }}>
                  {selectedCommodity.category}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 750,
                  color: "var(--os-deep-water)",
                  marginBottom: "18px",
                  letterSpacing: "-0.02em",
                }}
              >
                {selectedCommodity.name}
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                <div style={{ padding: "16px", background: "var(--os-paper)", borderRadius: "var(--os-radius-md)" }}>
                  <div style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-ink-muted)", marginBottom: "4px" }}>
                    ACTIVE VERIFIED IMPORTERS
                  </div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--os-deep-water)", fontFamily: "var(--os-font-sans)" }}>
                    {selectedCommodity.activeImporters}+
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--os-positive)", fontWeight: 600 }}>
                    Verified Customs Filings
                  </div>
                </div>

                <div style={{ padding: "16px", background: "var(--os-paper)", borderRadius: "var(--os-radius-md)" }}>
                  <div style={{ fontSize: "11px", fontFamily: "var(--os-font-mono)", color: "var(--os-ink-muted)", marginBottom: "4px" }}>
                    AVERAGE INQUIRY VELOCITY
                  </div>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "var(--os-deep-water)", fontFamily: "var(--os-font-sans)", marginTop: "4px" }}>
                    {selectedCommodity.avgVelocity}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--os-ink-muted)" }}>
                    Typical Order: {selectedCommodity.avgOrder}
                  </div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: "12px", fontFamily: "var(--os-font-mono)", color: "var(--os-ink-muted)", marginBottom: "10px" }}>
                  TOP IMPORT DESTINATION PORTS:
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {selectedCommodity.topPorts.map((port, pIdx) => (
                    <span
                      key={pIdx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 12px",
                        background: "var(--os-teal-wash)",
                        color: "var(--os-deep-water)",
                        borderRadius: "var(--os-radius-pill)",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      <Ship size={13} color="var(--os-deep-water)" />
                      {port}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Instant Trigger Card */}
            <div
              style={{
                background: "var(--os-deep-water)",
                color: "var(--os-white)",
                borderRadius: "var(--os-radius-xl)",
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(79, 192, 174, 0.2)",
                  color: "var(--os-seam-teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <Globe size={24} />
              </div>

              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>
                Ready to source buyers for this commodity?
              </h4>

              <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.5, marginBottom: "24px" }}>
                We will pull live customs import manifests for {selectedCommodity.name} and deliver verified corporate buyer introductions.
              </p>

              <button
                onClick={() => onSelectProduct(selectedCommodity.name)}
                className="btn-teal"
                style={{ width: "100%", padding: "14px", fontSize: "15px" }}
              >
                <span>Request Buyer Inquiries for {selectedCommodity.name.split(" ")[0]}</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ marginTop: "16px", fontSize: "11px", color: "rgba(255, 255, 255, 0.5)", fontFamily: "var(--os-font-mono)" }}>
                No credit card required · Free 15-min assessment
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .sim-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
