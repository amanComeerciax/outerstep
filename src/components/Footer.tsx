import React from "react";
import { Compass, ArrowUpRight, Globe, Share2, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#072425] text-white border-t border-[#2dd4bf]/20 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#2dd4bf]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#2dd4bf] flex items-center justify-center shadow-lg shadow-[#2dd4bf]/20">
                <Compass className="w-5 h-5 text-[#0b3536]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-serif">
                Outerstep
              </span>
            </div>
            <p className="text-sm text-[#a7f3d0]/70 max-w-sm font-sans leading-relaxed">
              Automated buyer inquiries, verified trade deals, and end-to-end export intelligence for global trade suppliers.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-colors font-serif font-bold text-sm"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/amanComeerciax/outerstep"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@outerstep.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-[#0b3536] border border-[#2dd4bf]/30 flex items-center justify-center text-[#5eead4] hover:bg-[#2dd4bf] hover:text-[#0b3536] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#2dd4bf] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[#a7f3d0]/80">
              <li>
                <a href="#setup" className="hover:text-white transition">
                  01 Setup
                </a>
              </li>
              <li>
                <a href="#inbox" className="hover:text-white transition">
                  02 Inbox
                </a>
              </li>
              <li>
                <a href="#introduction" className="hover:text-white transition">
                  03 Introduction
                </a>
              </li>
              <li>
                <a href="#reply" className="hover:text-white transition">
                  04 Your Reply
                </a>
              </li>
              <li>
                <a href="#dealroom" className="hover:text-white transition">
                  05 Deal Room
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#2dd4bf] uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-[#a7f3d0]/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  Global Markets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HS Code Lookup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Buyer Verification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition flex items-center gap-1">
                  <span>API Docs</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2dd4bf]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#2dd4bf] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#a7f3d0]/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2dd4bf]/15 flex flex-col md:flex-row items-center justify-between text-xs text-[#a7f3d0]/60 space-y-4 md:space-y-0">
          <p>© 2026 Outerstep, Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0b3536] border border-[#2dd4bf]/30 text-[11px] text-[#5eead4]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </span>
            <span>Built with Next.js 16 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
