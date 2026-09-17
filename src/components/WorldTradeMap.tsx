"use client";

import React, { useState } from "react";
import { Ship, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Port {
  id: string;
  name: string;
  country: string;
  x: number;
  y: number;
  product: string;
  volume: string;
  value: string;
  incoterm: string;
  status: "deal_closed" | "inquiry_live" | "in_transit";
}

const PORTS: Port[] = [
  {
    id: "alexandria",
    name: "Alexandria",
    country: "Egypt (Origin)",
    x: 542,
    y: 135,
    product: "Granular Urea & DAP",
    volume: "15,000 MT/mo Capacity",
    value: "Export Hub",
    incoterm: "FOB Alexandria",
    status: "deal_closed",
  },
  {
    id: "santos",
    name: "Santos",
    country: "Brazil",
    x: 330,
    y: 250,
    product: "Granular Urea 46% N",
    volume: "3,000 MT",
    value: "$1,140,000",
    incoterm: "CIF Santos",
    status: "deal_closed",
  },
  {
    id: "rotterdam",
    name: "Rotterdam",
    country: "Netherlands",
    x: 495,
    y: 95,
    product: "DAP Fertilizer",
    volume: "1,542 MT",
    value: "$1,020,000",
    incoterm: "CIF Rotterdam",
    status: "deal_closed",
  },
  {
    id: "mundra",
    name: "Mundra",
    country: "India",
    x: 650,
    y: 145,
    product: "Industrial Chemicals",
    volume: "2,500 MT",
    value: "$890,000",
    incoterm: "CFR Mundra",
    status: "inquiry_live",
  },
  {
    id: "dakar",
    name: "Dakar",
    country: "Senegal",
    x: 435,
    y: 170,
    product: "Granular Urea",
    volume: "1,200 MT",
    value: "$460,000",
    incoterm: "CIF Dakar",
    status: "inquiry_live",
  },
  {
    id: "callao",
    name: "Callao",
    country: "Peru",
    x: 260,
    y: 235,
    product: "Agricultural Nitrogen",
    volume: "2,000 MT",
    value: "$760,000",
    incoterm: "CIF Callao",
    status: "in_transit",
  },
  {
    id: "houston",
    name: "Houston",
    country: "United States",
    x: 215,
    y: 135,
    product: "Specialty Fertilizer",
    volume: "1,800 MT",
    value: "$920,000",
    incoterm: "CIF Houston",
    status: "inquiry_live",
  },
  {
    id: "jakarta",
    name: "Jakarta",
    country: "Indonesia",
    x: 755,
    y: 220,
    product: "Bulk Chemicals",
    volume: "3,200 MT",
    value: "$1,350,000",
    incoterm: "CFR Jakarta",
    status: "in_transit",
  },
];

export default function WorldTradeMap() {
  const [selectedPort, setSelectedPort] = useState<Port>(PORTS[1]); // Santos selected by default
  const [hoveredPort, setHoveredPort] = useState<Port | null>(null);

  const origin = PORTS[0]; // Alexandria

  // Curved quadratic bezier arc generator
  const getArcPath = (target: Port) => {
    const dx = target.x - origin.x;
    const dy = target.y - origin.y;
    // Calculate arc apex
    const midX = (origin.x + target.x) / 2;
    const midY = (origin.y + target.y) / 2 - Math.abs(dx) * 0.22;
    return `M ${origin.x} ${origin.y} Q ${midX} ${midY} ${target.x} ${target.y}`;
  };

  const activePort = hoveredPort || selectedPort;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "var(--os-radius-2xl)",
        border: "1px solid rgba(220, 228, 227, 0.8)",
        boxShadow: "0 16px 40px rgba(11, 58, 63, 0.08)",
        overflow: "hidden",
        padding: "16px",
      }}
    >
      {/* Top Header Strip inside Map */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 14px",
          borderBottom: "1px solid var(--os-hairline)",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="badge-pulse" />
          <span
            style={{
              fontFamily: "var(--os-font-mono)",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--os-deep-water)",
              letterSpacing: "0.04em",
            }}
          >
            GLOBAL TRADE CORRIDORS · LIVE RADAR
          </span>
        </div>
        <div
          style={{
            fontFamily: "var(--os-font-mono)",
            fontSize: "11px",
            color: "var(--os-ink-muted)",
          }}
        >
          Active Hub: <strong style={{ color: "var(--os-deep-water)" }}>Alexandria Port (EG)</strong>
        </div>
      </div>

      {/* SVG Interactive Canvas */}
      <div style={{ position: "relative", width: "100%", minHeight: "330px" }}>
        <svg
          viewBox="120 60 720 250"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        >
          <defs>
            {/* Glow Filter for Active Arcs */}
            <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gradient Arc */}
            <linearGradient id="tradeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B3A3F" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4FC0AE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4FC0AE" stopOpacity="0.95" />
            </linearGradient>

            <pattern id="dotGrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#0B3A3F" opacity="0.1" />
            </pattern>
          </defs>

          {/* Background Grid Dots */}
          <rect x="0" y="0" width="1000" height="400" fill="url(#dotGrid)" />

          {/* Continents Faint Outlines / Shapes */}
          <g opacity="0.14" fill="#0B3A3F">
            {/* North America */}
            <ellipse cx="230" cy="115" rx="70" ry="38" />
            {/* South America */}
            <ellipse cx="320" cy="225" rx="42" ry="60" />
            {/* Europe */}
            <ellipse cx="500" cy="98" rx="42" ry="24" />
            {/* Africa */}
            <ellipse cx="510" cy="180" rx="55" ry="65" />
            {/* Asia */}
            <ellipse cx="680" cy="125" rx="90" ry="45" />
            {/* Southeast Asia */}
            <ellipse cx="760" cy="210" rx="45" ry="30" />
          </g>

          {/* Trade Routes (Arcs) */}
          {PORTS.slice(1).map((port) => {
            const isSelected = selectedPort.id === port.id;
            const isHovered = hoveredPort?.id === port.id;
            const active = isSelected || isHovered;
            const pathData = getArcPath(port);

            return (
              <g key={port.id} style={{ cursor: "pointer" }} onClick={() => setSelectedPort(port)}>
                {/* Background Shadow Arc */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={active ? "rgba(79, 192, 174, 0.4)" : "rgba(11, 58, 63, 0.12)"}
                  strokeWidth={active ? "4" : "1.5"}
                  strokeLinecap="round"
                />

                {/* Animated Glowing Arc */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={active ? "#4FC0AE" : "rgba(79, 192, 174, 0.45)"}
                  strokeWidth={active ? "2.5" : "1.2"}
                  strokeDasharray={active ? "6 4" : "4 6"}
                  filter={active ? "url(#tealGlow)" : undefined}
                  className={active ? "route-anim-active" : "route-anim"}
                />
              </g>
            );
          })}

          {/* Origin Port (Alexandria) */}
          <g transform={`translate(${origin.x}, ${origin.y})`}>
            {/* Radar Pulsing Rings */}
            <circle r="14" fill="rgba(79, 192, 174, 0.2)" className="pulse-ring-svg" />
            <circle r="8" fill="#0B3A3F" />
            <circle r="4" fill="#4FC0AE" />
            <text
              y="-12"
              textAnchor="middle"
              fill="#0B3A3F"
              fontFamily="var(--os-font-mono)"
              fontSize="10"
              fontWeight="700"
            >
              ALEXANDRIA (HUB)
            </text>
          </g>

          {/* Destination Port Nodes */}
          {PORTS.slice(1).map((port) => {
            const isSelected = selectedPort.id === port.id;
            const isHovered = hoveredPort?.id === port.id;
            const active = isSelected || isHovered;

            return (
              <g
                key={port.id}
                transform={`translate(${port.x}, ${port.y})`}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredPort(port)}
                onMouseLeave={() => setHoveredPort(null)}
                onClick={() => setSelectedPort(port)}
              >
                {/* Ping wave for active node */}
                {active && (
                  <circle r="12" fill="none" stroke="#4FC0AE" strokeWidth="1.5" opacity="0.8">
                    <animate attributeName="r" values="6;18" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Node circle */}
                <circle
                  r={active ? "6" : "4.5"}
                  fill={active ? "#4FC0AE" : "#0B3A3F"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  filter={active ? "url(#tealGlow)" : undefined}
                />

                {/* Port Label */}
                <text
                  y={port.y > 200 ? 15 : -10}
                  textAnchor="middle"
                  fill={active ? "#0B3A3F" : "#6D7E80"}
                  fontFamily="var(--os-font-mono)"
                  fontSize={active ? "10" : "8.5"}
                  fontWeight={active ? "700" : "500"}
                >
                  {port.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Selected Port Deal Card */}
        {activePort && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "14px",
              right: "14px",
              background: "rgba(11, 58, 63, 0.95)",
              backdropFilter: "blur(14px)",
              color: "#FFFFFF",
              borderRadius: "var(--os-radius-lg)",
              padding: "12px 18px",
              border: "1px solid rgba(79, 192, 174, 0.4)",
              boxShadow: "0 10px 30px rgba(11, 58, 63, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(79, 192, 174, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--os-seam-teal)",
                }}
              >
                <Ship size={18} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.01em" }}>
                    Alexandria → {activePort.name} ({activePort.country})
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--os-font-mono)",
                      fontSize: "10px",
                      background: "rgba(79, 192, 174, 0.2)",
                      color: "var(--os-seam-teal)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {activePort.incoterm}
                  </span>
                </div>
                <div style={{ fontSize: "12px", color: "var(--os-hairline)", marginTop: "2px" }}>
                  Product: <strong style={{ color: "#FFF" }}>{activePort.product}</strong> · Volume:{" "}
                  <strong style={{ color: "#FFF" }}>{activePort.volume}</strong>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "10px", color: "var(--os-mist)", fontFamily: "var(--os-font-mono)" }}>
                  DEAL VALUE
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--os-seam-teal)" }}>
                  {activePort.value}
                </div>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "11px",
                  color: "#4FC0AE",
                  background: "rgba(79, 192, 174, 0.15)",
                  padding: "6px 10px",
                  borderRadius: "var(--os-radius-pill)",
                  fontFamily: "var(--os-font-mono)",
                }}
              >
                <CheckCircle2 size={13} />
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Port Quick Selector Pills */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "12px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}
      >
        {PORTS.slice(1).map((port) => (
          <button
            key={port.id}
            onClick={() => setSelectedPort(port)}
            style={{
              padding: "5px 12px",
              borderRadius: "var(--os-radius-pill)",
              fontSize: "12px",
              fontFamily: "var(--os-font-mono)",
              border: selectedPort.id === port.id ? "1px solid #4FC0AE" : "1px solid var(--os-hairline)",
              background: selectedPort.id === port.id ? "var(--os-teal-wash)" : "var(--os-white)",
              color: selectedPort.id === port.id ? "var(--os-deep-water)" : "var(--os-ink-secondary)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
          >
            {port.name}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .route-anim-active {
          animation: dash 1.5s linear infinite;
        }
        .route-anim {
          animation: dash 3s linear infinite;
        }
        .pulse-ring-svg {
          animation: pulse-ring-anim 2s infinite ease-out;
        }
        @keyframes pulse-ring-anim {
          0% {
            r: 8;
            opacity: 0.8;
          }
          100% {
            r: 22;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
