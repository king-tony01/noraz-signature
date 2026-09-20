import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Sparkles, Star, CheckCircle2, MessageCircle, Heart, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";

export const metadata: Metadata = {
  title: "Client Testimonials & Real Bride Reviews | Noraz Signature",
  description:
    "Read 5-star verified reviews and bride stories from real weddings, luxury traditional ceremonies, and editorial sessions styled by Noraz Signature.",
};

export default function TestimonialsPage() {
  const stats = [
    { value: "500+", label: "Brides & VIPs Styled" },
    { value: "100%", label: "On-Time Morning Track Record" },
    { value: "12+", label: "Destination Countries Traveled" },
    { value: "4.99★", label: "Average Client Rating" },
  ];

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <PageHeader
        badge="Client Love & Reviews"
        title="Cherished Words from Real Brides & VIPs"
        description="Read firsthand experiences from brides, gala honorees, and masterclass graduates who trusted Noraz Signature for their life’s biggest celebrations."
        breadcrumb="Testimonials"
      />

      {/* Featured Testimonial Carousel */}
      <Testimonials />

      {/* Verified Client Metrics Grid */}
      <section
        style={{
          background: "var(--color-brand-espresso)",
          color: "var(--color-brand-ivory)",
          padding: "4.5rem 1.5rem",
          borderTop: "1px solid #3A2925",
          borderBottom: "1px solid #3A2925",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
              textAlign: "center",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    color: "var(--color-brand-champagne)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: "0.8125rem", color: "#C9A18D", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Verified Reviews Grid */}
      <section style={{ padding: "6.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem auto" }}>
            <span className="badge-gold">
              <Star size={12} fill="var(--color-brand-espresso)" color="var(--color-brand-espresso)" />
              Verified Stories
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
              Every Review Represents a Sacred Milestone
            </h2>
            <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="card-luxury"
                style={{
                  padding: "2.5rem 2rem",
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", gap: "0.2rem" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="var(--color-brand-champagne)" color="var(--color-brand-champagne)" />
                      ))}
                    </div>
                    {item.highlightTag && (
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--color-brand-espresso)",
                          background: "rgba(216, 190, 138, 0.2)",
                          padding: "0.2rem 0.6rem",
                          fontWeight: 600,
                        }}
                      >
                        {item.highlightTag}
                      </span>
                    )}
                  </div>

                  <p
                    className="font-serif"
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--color-brand-espresso)",
                      lineHeight: "1.7",
                      fontStyle: "italic",
                      marginBottom: "1.5rem",
                    }}
                  >
                    “{item.quote}”
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.clientName}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      border: "1.5px solid var(--color-brand-champagne)",
                    }}
                  />
                  <div>
                    <h4 className="font-serif" style={{ fontSize: "1.05rem", color: "var(--color-brand-espresso)", margin: 0 }}>
                      {item.clientName}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-brand-nude)", fontWeight: 600, margin: 0 }}>
                      {item.roleOrEvent}
                    </p>
                    <p style={{ fontSize: "0.7rem", color: "var(--color-taupe)", margin: 0 }}>
                      {item.location} • {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Become Our Next Radiant Bride"
        subtitle="Let us curate a personalized, calm, and unforgettable morning of beauty for your wedding."
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
