"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const tocItems = [
  { id: "in-short", label: "In short" },
  { id: "who-we-are", label: "1. Who we are" },
  { id: "data-about-our-customers", label: "2. Data about our customers" },
  { id: "data-about-business-contacts", label: "3. Data about business contacts" },
  { id: "why-we-are-allowed-to", label: "4. Why we are allowed to" },
  { id: "who-we-share-it-with", label: "5. Who we share it with" },
  { id: "how-long-we-keep-it", label: "6. How long we keep it" },
  { id: "your-rights", label: "7. Your rights" },
  { id: "opting-out", label: "8. Opting out" },
  { id: "security", label: "9. Security" },
  { id: "international-transfers", label: "10. International transfers" },
  { id: "changes", label: "11. Changes" },
  { id: "contact", label: "12. Contact" },
];

export function PrivacyContent() {
  const [activeSection, setActiveSection] = useState<string>("in-short");
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
          Privacy Notice
        </h1>
        <p className="font-sans-clean text-base sm:text-lg text-[#0a3a40]/80 leading-relaxed max-w-3xl mb-6">
          How we handle personal data, both for exporters who use Outerstep and for the business contacts we approach on their behalf. These are two different relationships and this notice treats them separately.
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
          {/* Section: In short */}
          <section id="in-short" className="scroll-mt-28">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              In short
            </h2>
            <p>
              We are a business-to-business service: we help exporters identify and contact companies that already import what they make. We only contact individuals in a business capacity about products their company already imports. We do not sell personal data. Opt-out from one exporter applies across the whole platform, permanently.
            </p>
          </section>

          {/* Section 1 */}
          <section id="who-we-are" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              1. Who we are
            </h2>
            <p>
              Outerstep is operated by Commercialica Infotech Pvt Ltd, which is the controller for the personal data described in this notice. Contact us at{" "}
              <a
                href="mailto:hello@outerstep.com"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                hello@outerstep.com
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-about-our-customers" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              2. Data about our customers
            </h2>
            <p className="mb-3">If you are an exporter using Outerstep, we hold:</p>
            <ul className="list-disc pl-5 space-y-2.5 my-3 text-[#0a3a40]/85">
              <li>
                <strong className="font-semibold text-[#0a3a40]">Account and company data:</strong> name, work email, phone, title, company legal name, country, and business address.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">What you sell:</strong> product catalog specifications, capacity, certificates, past exported HS codes.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Activity:</strong> communications and sessions through the platform, interaction data, invoices, and receipts, messages sent and received through the service, responses and results.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Agreement records:</strong> the contracts you enter into with us, the riders, agreements with buyers that take place through us, and confirmation that an agreement has been concluded.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Payment details:</strong> held by our payment processor (Stripe); we receive confirmation of payment, last four digits of the card used, and tax details.
              </li>
            </ul>
            <p className="mt-4">
              We use this information to deliver the service, match you with buyers, verify who you are, communicate with you, process payments, and keep records of what happens.
            </p>
          </section>

          {/* Section 3 */}
          <section id="data-about-business-contacts" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              3. Data about business contacts
            </h2>
            <p className="mb-4">
              If you have received an email from us on behalf of an exporter, we hold your work email address, your name and title, and your company&apos;s details, all of them sourced from public sources or company websites, relevant to your purchasing decisions.
            </p>
            <p className="mb-4">
              We contact you in a business capacity, about a product your company already imports, because that is the basis on which exporters decide to reach out with an offer. We do not use consumer data or send unsolicited consumer marketing to personal email addresses.
            </p>
            <p>
              If you reply, your messages will be shared with the relevant exporter you are replying to and processed to understand what you are looking for and negotiate terms. If you do not reply, we discontinue communication after the sequence concludes, and if you opt out, we never contact you again.
            </p>
          </section>

          {/* Section 4 */}
          <section id="why-we-are-allowed-to" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              4. Why we are allowed to
            </h2>
            <ul className="list-disc pl-5 space-y-2.5 my-3 text-[#0a3a40]/85">
              <li>
                <strong className="font-semibold text-[#0a3a40]">Contract:</strong> for customer accounts, because we need it to provide the service you signed up for.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Legitimate interests:</strong> for business contact data, in providing targeted introduction information relevant to the recipient&apos;s role. Which we weigh against your privacy rights: we contact you on professional matters only, in connection to products your company already imports, and we stop if you opt out.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Legal obligation:</strong> where we must keep records for tax, accounting or compliance.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="who-we-share-it-with" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              5. Who we share it with
            </h2>
            <ul className="list-disc pl-5 space-y-2.5 my-3 text-[#0a3a40]/85">
              <li>
                <strong className="font-semibold text-[#0a3a40]">The exporter</strong>, when you have replied to an introduction or asked to discuss an trade opportunity. That is the point of the service.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Service providers</strong> who run parts of our platform on our behalf: email delivery and communications infrastructure, cloud hosting and document storage, payment processing, and analytics tools needed to reliably reply and draft responses. Each is bound to use the data only for that purpose.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Authorities</strong>, where the law requires it.
              </li>
            </ul>
            <p className="mt-4">
              We do not sell personal data, and we do not share commercial contacts with advertisers.
            </p>
          </section>

          {/* Section 6 */}
          <section id="how-long-we-keep-it" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              6. How long we keep it
            </h2>
            <ul className="list-disc pl-5 space-y-2.5 my-3 text-[#0a3a40]/85">
              <li>
                <strong className="font-semibold text-[#0a3a40]">Customer account and deal records:</strong> for the life of the account and 7 years following, as required for tax, accounting and dispute resolution purposes.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Agreement records:</strong> seven years from the end of the contract term or commercial relationship with us was signed.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Business contact data:</strong> while the relevant company remains relevant to a customer campaign, and otherwise deleted.
              </li>
              <li>
                <strong className="font-semibold text-[#0a3a40]">Opt-out suppression lists:</strong> permanently, in minimal form (hashed email) so that if you decide you do not want to be contacted by Outerstep again, we remember we do not contact you again.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="your-rights" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              7. Your rights
            </h2>
            <p className="mb-4">
              Subject to the law that applies to you, you can ask for a copy of your personal data, correct it, delete it, restrict how we use it, or object to our use of it. You can also object to legitimate-interests processing at any time.
            </p>
            <p>
              Email{" "}
              <a
                href="mailto:hello@outerstep.com"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                hello@outerstep.com
              </a>{" "}
              and we will respond within one month. There is no charge.
            </p>
          </section>

          {/* Section 8 */}
          <section id="opting-out" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              8. Opting out
            </h2>
            <p className="mb-4">
              Every message we send includes an unsubscribe link. Replying to ask us to stop works just as well, and you do not have to provide a reason.
            </p>
            <p>
              <span className="font-bold">An opt-out is platform-wide:</span> No exporter using Outerstep can reach you through us afterwards, across the whole platform, permanently.
            </p>
          </section>

          {/* Section 9 */}
          <section id="security" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              9. Security
            </h2>
            <p className="mb-4">
              Data is encrypted in transit and at rest. Cloud resources are located in secure data centers with appropriate certifications. Access is restricted to staff who need it, and authenticated sessions are logged with user identity and timestamps.
            </p>
            <p>
              No system is perfectly secure. If a incident affects your data and poses a risk to you, we will notify you.
            </p>
          </section>

          {/* Section 10 */}
          <section id="international-transfers" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              10. International transfers
            </h2>
            <p>
              We operate from India and our providers operate in various countries. Customers and commercial contacts agree to this contact being processed in and transferred to the jurisdictions necessary to deliver the service and subject to safeguards.
            </p>
          </section>

          {/* Section 11 */}
          <section id="changes" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              11. Changes
            </h2>
            <p>
              We may update this notice. The version and effective date at the top of this page tell you which is current. If a change materially affects how we use your data, we will notify you either directly or by a notice on your account.
            </p>
          </section>

          {/* Section 12 */}
          <section id="contact" className="scroll-mt-28 pt-8 border-t border-[#2a6369]/15">
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#0a3a40] mb-3">
              12. Contact
            </h2>
            <p>
              If you have questions about data or wish to make a complaint:{" "}
              <a
                href="mailto:hello@outerstep.com"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                hello@outerstep.com
              </a>
              . You also have the right to complain to your local data protection authority. For platform terms, see our{" "}
              <Link
                href="/terms"
                className="text-[#0a3a40] font-medium underline decoration-[#2dd4bf] decoration-2 underline-offset-2 hover:text-[#2dd4bf] transition-colors"
              >
                Terms of Use
              </Link>
              .
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
