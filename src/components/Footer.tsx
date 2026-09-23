"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NSLogo } from "./NSLogo";
import { Mail, Phone, MapPin, MessageCircle, Heart, ArrowRight, Sparkles } from "lucide-react";

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      data-theme="dark"
      className="theme-dark"
      style={{
        background: "var(--color-brand-espresso)",
        color: "#F8F4EE",
        borderTop: "1px solid #4A3832",
        padding: "5rem 1.5rem 2.5rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            paddingBottom: "3.5rem",
            borderBottom: "1px solid #3A2925",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <NSLogo isDark size="lg" />
            <p style={{ color: "#C9A18D", fontSize: "0.875rem", lineHeight: "1.7", maxWidth: "340px" }}>
              Bespoke haute couture makeup artistry celebrating the majesty of diverse complexions. Specializing in luxury bridal suites, traditional ceremonies, and high-fashion editorial.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
              {[
                { icon: InstagramIcon, href: "https://www.instagram.com/noraz_signature/", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/2347086833653", label: "WhatsApp" },
                { icon: Mail, href: "mailto:concierge@norazsignature.com", label: "Email" },
              ].map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: "1px solid #4A3832",
                      background: "#30221E",
                      color: "var(--color-brand-champagne)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-brand-champagne)";
                      e.currentTarget.style.background = "#3A2925";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#4A3832";
                      e.currentTarget.style.background = "#30221E";
                    }}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4
              className="font-serif"
              style={{
                fontSize: "1.1rem",
                color: "var(--color-brand-champagne)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
              {[
                { label: "About Philosophy", href: "/about" },
                { label: "Services & Pricing", href: "/services" },
                { label: "High-Artistry Lookbook", href: "/lookbook" },
                { label: "Interactive Price Estimator", href: "/pricing" },
                { label: "Bridal Preparation Journal", href: "/journal" },
                { label: "Frequently Asked Questions", href: "/faq" },
                { label: "VIP Date Reservation", href: "/book" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: "#E5DCD3",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-brand-champagne)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#E5DCD3")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio & Locations */}
          <div>
            <h4
              className="font-serif"
              style={{
                fontSize: "1.1rem",
                color: "var(--color-brand-champagne)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Studio & Inquiries
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "#E5DCD3" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <MapPin size={18} color="var(--color-brand-champagne)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 600, color: "#F8F4EE" }}>Private Studio Suite</p>
                  <p style={{ color: "#C9A18D", fontSize: "0.8125rem" }}>Victoria Island / Lekki Phase 1, Lagos</p>
                  <p style={{ color: "#8C7A70", fontSize: "0.75rem" }}>Available for Worldwide Destination Travel</p>
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
            </div>
          </div>

          {/* Col 4: VIP Beauty Newsletter */}
          <div>
            <h4
              className="font-serif"
              style={{
                fontSize: "1.1rem",
                color: "var(--color-brand-champagne)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              The Bridal Chronicle
            </h4>
            <p style={{ color: "#C9A18D", fontSize: "0.8125rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              Receive priority notifications when new masterclass dates open and our complimentary 2026 Bridal Skincare Roadmap.
            </p>

            {subscribed ? (
              <div
                style={{
                  background: "#30221E",
                  border: "1px solid var(--color-brand-champagne)",
                  padding: "0.85rem",
                  borderRadius: "0px",
                  fontSize: "0.8125rem",
                  color: "var(--color-brand-champagne)",
                }}
              >
                ✓ Welcome to the inner circle of Noraz Signature.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0px",
                    border: "1px solid #4A3832",
                    background: "#30221E",
                    color: "#F8F4EE",
                    fontSize: "0.875rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="btn-champagne"
                  style={{
                    padding: "0.75rem",
                    fontSize: "0.8125rem",
                    justifyContent: "center",
                  }}
                >
                  <span>Subscribe to Journal</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Design Credit */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.75rem",
            color: "#8C7A70",
            gap: "1rem",
          }}
        >
          <p>© {new Date().getFullYear()} Noraz Signature. All rights reserved.</p>
          <p style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span>Crafted with quiet luxury & bespoke artistry</span>
            <Sparkles size={12} color="var(--color-brand-champagne)" />
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .footer-grid {
            grid-template-columns: 1.3fr 0.8fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
