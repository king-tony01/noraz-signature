"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { BookingCalculator } from "@/components/BookingCalculator";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, ShieldCheck, DollarSign, Clock, MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const router = useRouter();

  const handleApplyToBooking = (serviceName: string, notes: string) => {
    router.push(`/book?service=${encodeURIComponent(serviceName)}&notes=${encodeURIComponent(notes)}`);
  };

  const policies = [
    {
      title: "50% Retainer Guarantee",
      description: "Dates are reserved exclusively upon receipt of a 50% non-refundable retainer and signed contract.",
    },
    {
      title: "No Hidden Surcharges",
      description: "All quotes include luxury lashes, professional lighting kit setup, and skin prep consultation.",
    },
    {
      title: "Transparent Travel Policies",
      description: "Travel fees are calculated strictly based on location distance and logistics, with no inflated markups.",
    },
    {
      title: "Flexible Date Rescheduling",
      description: "With 30 days prior notice, retainers may be transferred once to an available alternate date.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <PageHeader
        badge="Transparent Investment"
        title="Interactive Bridal Price Estimator"
        description="Design your custom bridal commission in real time. Select your package, party size, travel logistics, and luxury add-ons for an instantaneous itemized estimate."
        breadcrumb="Price Estimator"
      />

      {/* Main Interactive Booking Calculator */}
      <BookingCalculator onApplyToBooking={handleApplyToBooking} />

      {/* Transparent Pricing Guarantees */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "6rem 1.5rem",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">
              <ShieldCheck size={12} color="var(--color-brand-espresso)" />
              Our Financial Promise
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "var(--color-brand-espresso)",
              }}
            >
              Honest, Transparent Booking Terms
            </h2>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {policies.map((p, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{
                  padding: "2rem",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h4 className="font-serif" style={{ fontSize: "1.15rem", color: "var(--color-brand-espresso)", marginBottom: "0.75rem" }}>
                  {p.title}
                </h4>
                <p style={{ color: "var(--color-taupe)", fontSize: "0.85rem", lineHeight: "1.6" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              href="/faq"
              style={{
                color: "var(--color-brand-espresso)",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <HelpCircle size={15} color="var(--color-brand-champagne)" />
              <span>Read Full Frequently Asked Questions & Retainer Policies</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Finalize Your Date?"
        subtitle="Submit your inquiry with your generated estimate to receive contract and retainer paperwork within 24 business hours."
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
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20have%20an%20inquiry%20regarding%20custom%20pricing"
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
