"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NSLogo } from "./NSLogo";
import { Menu, X, Sparkles, MessageCircle, Calendar } from "lucide-react";

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "Price Estimator", href: "/pricing" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Bridal Journal", href: "/journal" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.35s ease",
      }}
    >
      {/* Top VIP Announcement Bar */}
      <div
        style={{
          background: "var(--color-brand-espresso)",
          color: "var(--color-brand-champagne)",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          padding: "0.4rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          borderBottom: "1px solid rgba(216, 190, 138, 0.2)",
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        <Sparkles size={13} color="var(--color-brand-champagne)" />
        <span>Now Accepting 2026 / 2027 Bridal Commissions & Destination Bookings</span>
        <span style={{ opacity: 0.4, display: "none" }} className="md-inline">|</span>
        <a
          href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20event%20date"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--color-brand-ivory)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <MessageCircle size={12} />
          VIP WhatsApp Direct
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav
        style={{
          background: isScrolled
            ? "rgba(248, 244, 238, 0.96)"
            : "rgba(248, 244, 238, 0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: isScrolled
            ? "1px solid var(--color-border)"
            : "1px solid rgba(229, 220, 211, 0.6)",
          boxShadow: "none",
          transition: "all 0.25s ease",
          padding: isScrolled ? "0.75rem 2rem" : "1.1rem 2rem",
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <NSLogo size={isScrolled ? "sm" : "md"} />
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--color-brand-champagne)" : "var(--color-brand-espresso)",
                  transition: "color 0.2s ease",
                  position: "relative",
                  textDecoration: "none",
                  paddingBottom: "4px",
                  borderBottom: isActive ? "2px solid var(--color-brand-champagne)" : "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--color-brand-nude)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--color-brand-espresso)";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "1rem",
          }}
          className="desktop-nav"
        >
          {onBookClick ? (
            <button
              onClick={onBookClick}
              className="btn-primary"
              style={{
                padding: "0.65rem 1.4rem",
                fontSize: "0.8rem",
                borderRadius: "0px",
                boxShadow: "none",
              }}
            >
              <Calendar size={14} color="var(--color-brand-champagne)" />
              <span>Reserve Date</span>
            </button>
          ) : (
            <Link
              href="/book"
              className="btn-primary"
              style={{
                padding: "0.65rem 1.4rem",
                fontSize: "0.8rem",
                borderRadius: "0px",
                boxShadow: "none",
                textDecoration: "none",
              }}
            >
              <Calendar size={14} color="var(--color-brand-champagne)" />
              <span>Reserve Date</span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            padding: "0.5rem",
            color: "var(--color-brand-espresso)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "92px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--color-brand-ivory)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderTop: "1px solid var(--color-border)",
            boxShadow: "none",
            zIndex: 49,
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.35rem",
                color: pathname === "/" ? "var(--color-brand-champagne)" : "var(--color-brand-espresso)",
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: "0.75rem",
                textDecoration: "none",
              }}
            >
              Home Flagship
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.35rem",
                    color: isActive ? "var(--color-brand-champagne)" : "var(--color-brand-espresso)",
                    borderBottom: "1px solid var(--color-border)",
                    paddingBottom: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
            >
              <Calendar size={16} color="var(--color-brand-champagne)" />
              <span>Reserve Your Date</span>
            </Link>

            <a
              href="https://wa.me/2347086833653?text=Hi%20Noraz%20Signature,%20I%20would%20like%20to%20inquire%20about%20booking%20my%20event%20date"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* CSS Helper for Responsive Nav display */}
      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .md-inline {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
};
