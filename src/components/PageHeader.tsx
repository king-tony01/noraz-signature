"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  breadcrumb,
}) => {
  return (
    <section
      style={{
        background: "var(--color-brand-espresso)",
        color: "var(--color-brand-ivory)",
        padding: "8.5rem 1.5rem 4rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #3A2925",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "350px",
          background: "radial-gradient(ellipse, rgba(216, 190, 138, 0.15) 0%, rgba(36, 26, 24, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Breadcrumb Navigation */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-brand-nude)",
            marginBottom: "1.25rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: "var(--color-brand-nude)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-brand-champagne)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-brand-nude)")}
          >
            Home
          </Link>
          <ChevronRight size={12} color="var(--color-brand-champagne)" />
          <span style={{ color: "var(--color-brand-champagne)", fontWeight: 600 }}>{breadcrumb}</span>
        </div>

        {/* Badge */}
        <div>
          <span className="badge-dark">
            <Sparkles size={12} color="var(--color-brand-champagne)" />
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            color: "var(--color-brand-ivory)",
            marginTop: "1.25rem",
            marginBottom: "1.25rem",
            lineHeight: "1.15",
          }}
        >
          {title}
        </h1>

        {/* Gold Divider */}
        <div className="gold-accent-line" style={{ margin: "0 auto 1.5rem auto" }} />

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
            color: "#C9A18D",
            maxWidth: "720px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          {description}
        </p>
      </div>
    </section>
  );
};
