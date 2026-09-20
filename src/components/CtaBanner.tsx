"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, MessageCircle, ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Ready to Experience Haute Couture Bridal Artistry?",
  subtitle = "Dates for the 2026 / 2027 wedding seasons are strictly exclusive. Reserve your date or chat directly with our studio concierge.",
}) => {
  return (
    <section
      style={{
        background: "var(--color-brand-espresso)",
        color: "var(--color-brand-ivory)",
        padding: "5.5rem 1.5rem",
        borderTop: "1px solid #3A2925",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(216, 190, 138, 0.12) 0%, rgba(36, 26, 24, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span className="badge-dark">
          <Sparkles size={12} color="var(--color-brand-champagne)" />
          VIP Date Reservation
        </span>

        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
            color: "var(--color-brand-ivory)",
            marginTop: "1.25rem",
            marginBottom: "1rem",
            lineHeight: "1.2",
          }}
        >
          {title}
        </h2>

        <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />

        <p
          style={{
            color: "#C9A18D",
            fontSize: "1rem",
            maxWidth: "620px",
            margin: "0 auto 2.5rem auto",
            lineHeight: "1.7",
          }}
        >
          {subtitle}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href="/book"
            className="btn-champagne"
            style={{
              padding: "0.95rem 2rem",
              fontSize: "0.875rem",
              borderRadius: "0px",
              boxShadow: "none",
            }}
          >
            <Calendar size={16} />
            <span>Inquire for Your Date</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20event%20date"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: "0.95rem 2rem",
              fontSize: "0.875rem",
              borderColor: "rgba(216, 190, 138, 0.4)",
              color: "var(--color-brand-champagne)",
              borderRadius: "0px",
              boxShadow: "none",
            }}
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </section>
  );
};
