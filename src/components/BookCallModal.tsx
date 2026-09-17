"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Calendar, Clock, ArrowRight, ShieldCheck, Ship } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function BookCallModal({ isOpen, onClose, initialProduct = "" }: BookCallModalProps) {
  const [product, setProduct] = useState(initialProduct);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [volume, setVolume] = useState("1,000 - 5,000 MT / month");
  const [targetRegion, setTargetRegion] = useState("South America (Santos, Callao)");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(11, 58, 63, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--os-white)",
          width: "100%",
          maxWidth: "560px",
          borderRadius: "var(--os-radius-2xl)",
          padding: "36px",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
          border: "1px solid var(--os-hairline)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "var(--os-paper)",
            border: "1px solid var(--os-hairline)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--os-ink)",
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                background: "var(--os-teal-wash)",
                color: "var(--os-deep-water)",
                borderRadius: "var(--os-radius-pill)",
                fontSize: "11px",
                fontFamily: "var(--os-font-mono)",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              <span className="badge-pulse" />
              <span>15-MINUTE FIT ASSESSMENT</span>
            </div>

            <h3
              style={{
                fontSize: "24px",
                fontWeight: 750,
                color: "var(--os-deep-water)",
                marginBottom: "8px",
                letterSpacing: "-0.02em",
              }}
            >
              Book a Qualification Call
            </h3>

            <p style={{ fontSize: "14px", color: "var(--os-ink-secondary)", lineHeight: 1.5, marginBottom: "24px" }}>
              We'll review your commodity specifications, verify active import manifests in your target
              ports, and confirm whether your product fits our automated inquiry sequence.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontFamily: "var(--os-font-mono)", fontWeight: 600, color: "var(--os-deep-water)", marginBottom: "6px" }}>
                  YOUR EXPORT COMMODITY / PRODUCT
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Granular Urea 46% N, Bitumen 60/70, Polypropylene"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "var(--os-radius-md)",
                    border: "1px solid var(--os-hairline)",
                    fontSize: "14px",
                    fontFamily: "var(--os-font-sans)",
                    outline: "none",
                    background: "var(--os-paper)",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontFamily: "var(--os-font-mono)", fontWeight: 600, color: "var(--os-deep-water)", marginBottom: "6px" }}>
                  EXPORTER / COMPANY NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nile Chemical Industries SAE"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "var(--os-radius-md)",
                    border: "1px solid var(--os-hairline)",
                    fontSize: "14px",
                    fontFamily: "var(--os-font-sans)",
                    outline: "none",
                    background: "var(--os-paper)",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontFamily: "var(--os-font-mono)", fontWeight: 600, color: "var(--os-deep-water)", marginBottom: "6px" }}>
                  ESTIMATED MONTHLY EXPORT CAPACITY
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "var(--os-radius-md)",
                    border: "1px solid var(--os-hairline)",
                    fontSize: "14px",
                    fontFamily: "var(--os-font-sans)",
                    background: "var(--os-paper)",
                  }}
                >
                  <option value="500 - 1,000 MT / month">500 - 1,000 MT / month</option>
                  <option value="1,000 - 5,000 MT / month">1,000 - 5,000 MT / month</option>
                  <option value="5,000 - 20,000 MT / month">5,000 - 20,000 MT / month</option>
                  <option value="20,000+ MT / month (Bulk Vessel)">20,000+ MT / month (Bulk Vessel)</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontFamily: "var(--os-font-mono)", fontWeight: 600, color: "var(--os-deep-water)", marginBottom: "6px" }}>
                  TARGET TRADE CORRIDOR
                </label>
                <select
                  value={targetRegion}
                  onChange={(e) => setTargetRegion(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "var(--os-radius-md)",
                    border: "1px solid var(--os-hairline)",
                    fontSize: "14px",
                    fontFamily: "var(--os-font-sans)",
                    background: "var(--os-paper)",
                  }}
                >
                  <option value="South America (Santos, Callao)">South America (Santos, Callao)</option>
                  <option value="Western & Southern Europe (Rotterdam, Antwerp)">Western & Southern Europe (Rotterdam, Antwerp)</option>
                  <option value="South & Southeast Asia (Mundra, Jakarta)">South & Southeast Asia (Mundra, Jakarta)</option>
                  <option value="Middle East & North Africa (Jebel Ali, Alexandria)">Middle East & North Africa (Jebel Ali, Alexandria)</option>
                  <option value="North America (Houston, New Orleans)">North America (Houston, New Orleans)</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontFamily: "var(--os-font-mono)", fontWeight: 600, color: "var(--os-deep-water)", marginBottom: "6px" }}>
                  CORPORATE WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="procurement@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "var(--os-radius-md)",
                    border: "1px solid var(--os-hairline)",
                    fontSize: "14px",
                    fontFamily: "var(--os-font-sans)",
                    outline: "none",
                    background: "var(--os-paper)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "14px",
                  fontSize: "15px",
                  marginTop: "8px",
                }}
              >
                <span>Confirm Call & Check Live Filings</span>
                <ArrowRight size={18} />
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", color: "var(--os-ink-muted)", fontFamily: "var(--os-font-mono)" }}>
                <ShieldCheck size={14} color="var(--os-seam-teal)" />
                <span>Strict commercial confidentiality. No obligation.</span>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "var(--os-teal-wash)",
                color: "var(--os-seam-teal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: "24px", fontWeight: 750, color: "var(--os-deep-water)", marginBottom: "12px" }}>
              Call Request Confirmed!
            </h3>

            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--os-ink-secondary)", maxWidth: "420px", margin: "0 auto 24px auto" }}>
              We have indexed active customs manifests for <strong>{product || "your commodity"}</strong>.
              An invite has been sent to <strong>{email}</strong> for a 15-minute screen-share session.
            </p>

            <div
              style={{
                background: "var(--os-paper)",
                borderRadius: "var(--os-radius-lg)",
                padding: "18px",
                border: "1px solid var(--os-hairline)",
                marginBottom: "24px",
                textAlign: "left",
                fontFamily: "var(--os-font-mono)",
                fontSize: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "var(--os-ink-muted)" }}>CORRIDOR:</span>
                <span style={{ fontWeight: 600 }}>{targetRegion}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "var(--os-ink-muted)" }}>ESTIMATED ACTIVE IMPORTERS:</span>
                <span style={{ color: "var(--os-seam-teal)", fontWeight: 700 }}>240+ Verified Buyers</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--os-ink-muted)" }}>STATUS:</span>
                <span style={{ color: "var(--os-positive)", fontWeight: 600 }}>Trade Desk Assigned</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-primary"
              style={{ padding: "12px 28px", fontSize: "14px" }}
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
