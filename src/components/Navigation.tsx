"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenBookCall: () => void;
}

export default function Navigation({ onOpenBookCall }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(237, 244, 243, 0.92)" : "rgba(237, 244, 243, 0.82)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(11, 58, 63, 0.1)"
            : "1px solid rgba(11, 58, 63, 0.05)",
          padding: scrolled ? "14px 0" : "20px 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo (Exact match to screenshot: Outerstep •) */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "var(--os-font-sans)",
                fontWeight: 750,
                fontSize: "22px",
                letterSpacing: "-0.03em",
                color: "var(--os-deep-water)",
                lineHeight: 1,
              }}
            >
              Outerstep
            </span>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--os-deep-water)",
                display: "inline-block",
                marginLeft: "2px",
              }}
            />
          </Link>

          {/* Desktop Nav Links (Matching screenshot: How It Works, Industries, Success Stories, About) */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "34px",
            }}
            className="desktop-nav"
          >
            <a
              href="#how"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(11, 58, 63, 0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="nav-link"
            >
              How It Works
            </a>
            <a
              href="#product"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(11, 58, 63, 0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="nav-link"
            >
              Industries
            </a>
            <a
              href="#proof"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(11, 58, 63, 0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="nav-link"
            >
              Success Stories
            </a>
            <a
              href="#fit"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(11, 58, 63, 0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              className="nav-link"
            >
              About
            </a>
          </nav>

          {/* Nav Right CTA: Book a Call → */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <button
              onClick={onOpenBookCall}
              className="btn-primary"
              style={{
                padding: "11px 22px",
                fontSize: "14px",
                fontWeight: 600,
                backgroundColor: "var(--os-deep-water)",
                borderRadius: "var(--os-radius-pill)",
                boxShadow: "0 4px 14px rgba(11, 58, 63, 0.2)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Book a Call</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-nav-toggle"
              aria-label="Toggle navigation"
              style={{
                display: "none",
                background: "transparent",
                border: "1px solid rgba(11, 58, 63, 0.2)",
                borderRadius: "var(--os-radius-md)",
                padding: "8px",
                color: "var(--os-deep-water)",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: "20px 24px",
              background: "#edf4f3",
              borderBottom: "1px solid rgba(11, 58, 63, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <a
              href="#how"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "16px", fontWeight: 600, color: "var(--os-deep-water)", textDecoration: "none" }}
            >
              How It Works
            </a>
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "16px", fontWeight: 600, color: "var(--os-deep-water)", textDecoration: "none" }}
            >
              Industries
            </a>
            <a
              href="#proof"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "16px", fontWeight: 600, color: "var(--os-deep-water)", textDecoration: "none" }}
            >
              Success Stories
            </a>
            <a
              href="#fit"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: "16px", fontWeight: 600, color: "var(--os-deep-water)", textDecoration: "none" }}
            >
              About
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookCall();
              }}
              className="btn-primary"
              style={{ width: "100%", marginTop: "8px", borderRadius: "var(--os-radius-pill)" }}
            >
              Book a Call →
            </button>
          </div>
        )}
      </header>

      <style jsx>{`
        .nav-link:hover {
          color: var(--os-deep-water) !important;
        }
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
