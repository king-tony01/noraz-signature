import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { FAQ } from "@/components/FAQ";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, MessageCircle, HelpCircle, ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Policies | Noraz Signature",
  description:
    "Get clear answers on retainers, bridal trial scheduling, worldwide travel logistics, sanitation standards, and wedding morning timelines at Noraz Signature.",
};

export default function FAQPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <PageHeader
        badge="Studio Policies & Clarity"
        title="Frequently Asked Questions & Policies"
        description="Clear, transparent answers regarding retainer deposits, bridal trials, worldwide travel logistics, and sanitation standards."
        breadcrumb="FAQ"
      />

      {/* Main FAQ Accordion Component */}
      <FAQ />

      <CtaBanner
        title="Have an Unanswered Question?"
        subtitle="Our studio concierge is readily available on WhatsApp to discuss your unique date, entourage size, or travel requirements."
      />

      <Footer />

      {/* Floating VIP WhatsApp Widget */}
      <div
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 40,
        }}
      >
        <a
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20have%20a%20specific%20question%20regarding%20booking"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--color-brand-espresso)",
            color: "var(--color-brand-champagne)",
            border: "1px solid var(--color-brand-champagne)",
            padding: "0.75rem 1.15rem",
            borderRadius: "0px",
            boxShadow: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
            }}
          >
            <MessageCircle size={14} />
          </div>
          <span>VIP Artistry Concierge</span>
        </a>
      </div>
    </main>
  );
}
