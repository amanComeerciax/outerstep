"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const tocItems = [
  { id: "what-these-terms-cover", label: "1. What these terms cover" },
  { id: "who-we-are", label: "2. Who we are" },
  { id: "accounts-and-access", label: "3. Accounts and access" },
  { id: "acceptable-use", label: "4. Acceptable use" },
  { id: "your-data-and-content", label: "5. Your data and content" },
  { id: "buyer-information", label: "6. Buyer information" },
  { id: "fees", label: "7. Fees" },
  { id: "availability", label: "8. Availability" },
  { id: "intellectual-property", label: "9. Intellectual property" },
  { id: "liability", label: "10. Liability" },
  { id: "ending-access", label: "11. Ending access" },
  { id: "changes-to-these-terms", label: "12. Changes to these terms" },
  { id: "governing-law", label: "13. Governing law" },
  { id: "contact", label: "14. Contact" },
];

export function TermsContent() {
  const [activeSection, setActiveSection] = useState<string>("what-these-terms-cover");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileTocOpen(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 pb-20 sm:pb-28">
      {/* Header Area */}
      <div className="max-w-4xl mb-12 sm:mb-16">
        <div className="font-mono-tech text-[11px] sm:text-xs tracking-[0.18em] uppercase text-[#2a6369] font-medium mb-3">
          LEGAL
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0a3a40] mb-5">
          Terms of Use
        </h1>
        <p className="font-sans-clean text-base sm:text-lg text-[#0a3a40]/80 leading-relaxed max-w-3xl mb-6">
          These terms govern your use of the Outerstep website and platform. If you are a seller under contract with us, your commercial relationship is governed by the Outerstep Seller Agreement and the Fee Annex for your segment, not by this page.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono-tech text-xs tracking-wider text-[#2a6369]/70 uppercase pt-2">
          <span>VERSION 1.0</span>
          <span className="text-[#2a6369]/30">·</span>
          <span>EFFECTIVE 11 NOVEMBER 2024</span>
        </div>
      </div>

      {/* Horizontal divider */}
      <div className="w-full h-px bg-[#2a6369]/15 mb-10 sm:mb-14" />

      {/* Mobile Table of Contents Accordion */}
      <div className="lg:hidden mb-10 bg-white/60 border border-[#2a6369]/15 rounded-xl overflow-hidden backdrop-blur-sm">
        <button
          onClick={() => setMobileTocOpen(!mobileTocOpen)}
          className="w-full px-5 py-3.5 flex items-center justify-between text-left font-mono-tech text-xs tracking-wider uppercase text-[#0a3a40] font-semibold"
        >
          <span className="flex items-center gap-2">
            <span>CONTENTS</span>
            <span className="font-sans-clean text-xs font-normal text-[#2a6369]/70 normal-case">
              ({tocItems.find((t) => t.id === activeSection)?.label || "Quick navigation"})
            </span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#2a6369] transition-transform duration-200 ${
              mobileTocOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {mobileTocOpen && (
          <nav className="px-5 pb-4 pt-2 border-t border-[#2a6369]/10 flex flex-col gap-2">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-sm py-1 font-sans-clean transition-colors ${
                  activeSection === item.id
                    ? "text-[#0a3a40] font-semibold"
                    : "text-[#2a6369]/80 hover:text-[#0a3a40]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Main Grid: Sidebar TOC + Editorial Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start">
        {/* Left Sticky Table of Contents (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-28 self-start">
          <div className="font-mono-tech text-[11px] tracking-[0.14em] uppercase text-[#2a6369]/70 font-semibold mb-4">
            CONTENTS
          </div>
          <nav className="flex flex-col space-y-2.5 font-sans-clean text-[13px] sm:text-[13.5px]">
            {tocItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left leading-snug transition-all duration-150 flex items-center justify-between group py-0.5 ${
                    isActive
                      ? "text-[#0a3a40] font-semibold translate-x-1"
                      : "text-[#2a6369]/75 hover:text-[#0a3a40] hover:translate-x-0.5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#2dd4bf] shrink-0" />
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right Content Column */}
        <article className="lg:col-span-8 max-w-2xl font-sans-clean text-[#0a3a40]/85 text-[15px] sm:text-[15.5px] leading-relaxed space-y-10 sm:space-y-12">
          {/* Section 1 */}
          <section id="what-these-terms-cover" className="scroll-mt-28">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              1. What these terms cover
            </h2>
            <p className="mb-4">
              These terms apply to everyone who visits the Outerstep website or uses the Outerstep platform. By using either, you accept them.
            </p>
            <p>
              If you are a seller under contract with us, the Outerstep Seller Agreement and the Fee Annex for your segment govern our commercial relationship: the commission we charge, the payment terms, the reporting requirements and the dispute mechanisms. Where these terms and those documents disagree, those documents win. You can download a countersigned copy from Settings at any time.
            </p>
          </section>

          {/* Section 2 */}
          <section id="who-we-are" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              2. Who we are
            </h2>
            <p>
              Outerstep is operated by CommerciaX Infotech Pvt Ltd (&quot;CommerciaX&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;Outerstep&quot; in these terms). Reach the team behind Outerstep at{" "}
              <a
                href="mailto:hello@outerstep.com"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                hello@outerstep.com
              </a>
              .
            </p>
          </section>

          {/* Section 3 */}
          <section id="accounts-and-access" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              3. Accounts and access
            </h2>
            <ul className="list-disc pl-5 space-y-2.5 my-3 text-[#0a3a40]/85">
              <li>
                You are responsible for accurate information when you register and keeping it current. We need to be sure who you are and where you are located when we send introductions, and invoices rely on accurate billing data.
              </li>
              <li>
                You are responsible for keeping your login credentials confidential and for everything that happens under your account. Notify us immediately if you suspect unauthorized access to your account.
              </li>
              <li>
                Accounts are for the registered company&apos;s business only; you cannot resell or share access outside your organisation.
              </li>
              <li>
                We may suspend or terminate your account if you breach these terms, fail to pay, or use the platform in ways that could damage the platform or other users&apos; ability to use it.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="acceptable-use" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              4. Acceptable use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2.5 my-3 text-[#0a3a40]/85">
              <li>
                Use the platform to send spam, hateful, deceptive or misleading communications or for anything apart from legitimate trade enquiries.
              </li>
              <li>
                Reverse-engineer, scrape or extract data from the platform or use automated mechanisms to access it without our prior written permission.
              </li>
              <li>
                Attempt to identify, scrape or contact buyers outside of the introductions we provide except through ordinary public channels.
              </li>
              <li>
                Interfere with the platform&apos;s operation, probe its security, or attempt to access parts of it you have not been granted access to.
              </li>
              <li>
                Deliver goods that differ in material respects from what was offered, fail to honour quotes without reasonable excuse, or engage in unfair trade practices.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="your-data-and-content" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              5. Your data and content
            </h2>
            <p className="mb-4">
              You keep ownership of what you provide to the platform: your product catalogs, specifications, quotes, and trade messages. You give us a licence to use and display it solely to provide the services to you: to show your products to relevant buyers, present quotes, and enable communications between buyer and seller as requested.
            </p>
            <p>
              We do not sell your data, and we do not disclose confidential commercial information to other exporters.
            </p>
          </section>

          {/* Section 6 */}
          <section id="buyer-information" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              6. Buyer information
            </h2>
            <p className="mb-4">
              Any buyer information and trade leads we provide to you are confidential and for your organisation&apos;s use only. They are sent to you for the sole purpose of deciding whether to pursue a commercial opportunity, negotiating terms, and fulfilling orders; they cannot be shared with third parties or used for purposes unrelated to the transaction.
            </p>
            <p>
              All buyer data and related trade inquiries are collected and aggregated across the whole platform, and only for you, in accordance with applicable data protection laws and the relevant privacy notices.
            </p>
          </section>

          {/* Section 7 */}
          <section id="fees" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              7. Fees
            </h2>
            <p className="mb-4">
              Fees are set by the Fee Annex for your segment and agreed with you in writing before you start. Nothing is charged without the amount, billing frequency, and acceptance in writing. No hidden charges for holding an account.
            </p>
            <p>
              Where a fee becomes payable, the platform shows the invoice and terms of payment before you are charged, and receipt is sent to you.
            </p>
          </section>

          {/* Section 8 */}
          <section id="availability" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              8. Availability
            </h2>
            <p>
              We aim to make the platform available and will give reasonable advance notice before maintenance where possible. We do not guarantee uninterrupted operation, and we may suspend or withdraw features without advance notice for operational reasons or under contract, as well as on notice under the Seller Agreement.
            </p>
          </section>

          {/* Section 9 */}
          <section id="intellectual-property" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              9. Intellectual property
            </h2>
            <p>
              The platform, its software, design and documentation belong to us or our licensors. Nothing in these terms transfers ownership of any of it. Your access right is limited to using it.
            </p>
          </section>

          {/* Section 10 */}
          <section id="liability" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              10. Liability
            </h2>
            <p className="mb-4">
              We provide introductions and the tooling around them. We are not a party to contract between you and every buyer we introduce, and we do not guarantee that introductions will lead to orders, or accept responsibility for buyer performance. Checking out counter-parties before you contract with them remains your responsibility.
            </p>
            <p>
              To the extent permitted by law, our liability under these terms is limited to direct loss, and we are not liable for indirect or consequential loss, or for lost profits, arising from your use of the platform. For sellers under contract, liability provisions of the Seller Agreement apply instead of this section.
            </p>
          </section>

          {/* Section 11 */}
          <section id="ending-access" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              11. Ending access
            </h2>
            <p className="mb-4">
              You may stop using the platform at any time. Accounts can be closed by contacting us at{" "}
              <a
                href="mailto:hello@outerstep.com"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                hello@outerstep.com
              </a>
              , subject to settlement of outstanding invoices and pending transactions.
            </p>
            <p>
              We may suspend or terminate your access immediately if you breach these terms, stop operating your business, or if your continued access creates liability or risk for us.
            </p>
          </section>

          {/* Section 12 */}
          <section id="changes-to-these-terms" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              12. Changes to these terms
            </h2>
            <p>
              We may update these terms. The version and effective date at the top of this page indicate which version is current. Material changes affecting sellers under contract are notified under the Seller Agreement at least 30 days before they take effect.
            </p>
          </section>

          {/* Section 13 */}
          <section id="governing-law" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              13. Governing law
            </h2>
            <p>
              These terms are governed by the laws of India and the courts of India have jurisdiction over any dispute arising from them. Sellers under contract are subject to the dispute resolution mechanism of the Seller Agreement, which supersedes this commercial arbitration section.
            </p>
          </section>

          {/* Section 14 */}
          <section id="contact" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              14. Contact
            </h2>
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:hello@outerstep.com"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                hello@outerstep.com
              </a>
              . For how we handle personal data, see our{" "}
              <Link
                href="/privacy"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                privacy policy
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
