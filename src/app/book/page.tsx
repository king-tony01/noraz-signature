"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Sparkles, MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "The Royal Bridal Suite";
  const initialNotes = searchParams.get("notes") || "";

  return (
    <>
      <PageHeader
        badge="Exclusive Commissions"
        title="Reserve Your Date & Bridal Consultation"
        description="Submit your event details below to check master calendar availability. You will receive an itemized proposal, timeline schedule, and retainer paperwork within 24 business hours."
        breadcrumb="VIP Reservation"
      />

      <div style={{ background: "var(--color-brand-ivory)", padding: "4rem 1.5rem 6.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Main Grid: Form + Studio Info Sidebar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
              alignItems: "flex-start",
            }}
            className="book-page-grid"
          >
            {/* Left: Interactive Booking Form */}
            <div>
              <BookingForm
                initialService={initialService}
                initialNotes={initialNotes}
              />
            </div>

            {/* Right: Studio Concierge Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Concierge Card */}
              <div
                className="card-luxury"
                style={{
                  padding: "2.5rem 2rem",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-brand-nude)",
                    fontWeight: 700,
                  }}
                >
                  Direct Concierge
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.4rem",
                    color: "var(--color-brand-espresso)",
                    marginTop: "0.4rem",
                    marginBottom: "1rem",
                  }}
                >
                  Noraz Studio Suite
                </h3>
                <p style={{ color: "var(--color-taupe)", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                  For urgent date confirmations, press shoots, or multi-day destination inquiries, our studio concierge is available directly on WhatsApp.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.85rem", color: "var(--color-brand-espresso)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <MapPin size={18} color="var(--color-brand-champagne)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontWeight: 600 }}>Private Studio Location</p>
                      <p style={{ color: "var(--color-taupe)", fontSize: "0.8rem" }}>Victoria Island / Lekki Phase 1, Lagos, Nigeria</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Phone size={16} color="var(--color-brand-champagne)" style={{ flexShrink: 0 }} />
                    <span>+234 708 683 3653</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Mail size={16} color="var(--color-brand-champagne)" style={{ flexShrink: 0 }} />
                    <span>concierge@norazsignature.com</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Clock size={16} color="var(--color-brand-champagne)" style={{ flexShrink: 0 }} />
                    <span>Response Time: Under 24 Business Hours</span>
                  </div>
                </div>

                <div style={{ marginTop: "1.75rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
                  <a
                    href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20event%20date"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-champagne"
                    style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp Direct</span>
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  padding: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <ShieldCheck size={18} color="var(--color-brand-champagne)" />
                  <h4 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--color-brand-espresso)", margin: 0 }}>
                    Commission Guarantee
                  </h4>
                </div>
                <p style={{ color: "var(--color-taupe)", fontSize: "0.8125rem", lineHeight: "1.6", margin: 0 }}>
                  We accept only one full-day bridal commission per artist per date to ensure 100% focused attention and seamless morning timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BookPage() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: "60vh", padding: "10rem 2rem", textAlign: "center" }}>Loading booking suite...</div>}>
        <BookingContent />
      </Suspense>
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
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20event%20date"
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
