"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { servicesData, addonOptions, ServiceTier } from "@/data/servicesData";
import { Sparkles, Check, Clock, Calendar, ArrowRight, PlusCircle } from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | "bridal" | "glam" | "editorial" | "masterclass">("all");

  const handleSelect = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      router.push(`/book?service=${encodeURIComponent(serviceName)}`);
    }
  };

  const filteredServices = activeTab === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeTab);

  return (
    <section
      id="services"
      style={{
        background: "var(--color-brand-ivory)",
        padding: "6.5rem 1.5rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem auto" }}>
          <span className="badge-gold">
            <Sparkles size={12} color="var(--color-brand-espresso)" />
            Couture Beauty Catalog
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "var(--color-brand-espresso)",
            }}
          >
            Curated Services for Life’s Most Unforgettable Moments
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "1rem", lineHeight: "1.7" }}>
            Every session is a masterclass in personalized beauty. From full-day bespoke bridal suites to high-impact red carpet glam, explore our transparent offerings.
          </p>

          {/* Interactive Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {[
              { key: "all", label: "All Offerings" },
              { key: "bridal", label: "Bridal Suites" },
              { key: "glam", label: "Red Carpet & Gala" },
              { key: "editorial", label: "Editorial & Production" },
              { key: "masterclass", label: "1-on-1 Masterclasses" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                style={{
                  padding: "0.6rem 1.35rem",
                  borderRadius: "9999px",
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: activeTab === tab.key
                    ? "1px solid var(--color-brand-espresso)"
                    : "1px solid var(--color-border)",
                  background: activeTab === tab.key
                    ? "var(--color-brand-espresso)"
                    : "var(--color-white)",
                  color: activeTab === tab.key
                    ? "var(--color-white)"
                    : "var(--color-brand-espresso)",
                  boxShadow: "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-luxury"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2.25rem 2rem",
                position: "relative",
                borderRadius: "0px",
                border: service.isPopular
                  ? "1.5px solid var(--color-brand-champagne)"
                  : "1px solid var(--color-border)",
                background: "var(--color-white)",
                boxShadow: "none",
              }}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "24px",
                    background: "var(--color-brand-champagne)",
                    color: "var(--color-brand-espresso)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "0px",
                    border: "1px solid var(--color-brand-espresso)",
                    boxShadow: "none",
                  }}
                >
                  ★ Most Cherished by Brides
                </div>
              )}

              {/* Service Title & Tagline */}
              <div style={{ marginBottom: "1.25rem" }}>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--color-brand-espresso)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.name}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-taupe)", lineHeight: "1.5" }}>
                  {service.tagline}
                </p>
              </div>

              {/* Price & Duration */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  paddingBottom: "1.25rem",
                  marginBottom: "1.25rem",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <div>
                  <span
                    className="font-serif"
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: "var(--color-brand-espresso)",
                    }}
                  >
                    {service.price}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.75rem",
                    color: "var(--color-taupe)",
                    fontWeight: 500,
                  }}
                >
                  <Clock size={13} color="var(--color-brand-champagne)" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Ideal for callout */}
              <div
                style={{
                  background: "var(--color-surface)",
                  borderRadius: "0px",
                  border: "1px solid var(--color-border)",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.5rem",
                  fontSize: "0.8125rem",
                  color: "var(--color-brand-espresso)",
                }}
              >
                <span style={{ fontWeight: 600, color: "var(--color-brand-espresso)" }}>Ideal For: </span>
                <span style={{ color: "var(--color-taupe)" }}>{service.idealFor}</span>
              </div>

              {/* Features List */}
              <div style={{ flex: 1, marginBottom: "2rem" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                    color: "var(--color-brand-espresso)",
                    marginBottom: "0.85rem",
                  }}
                >
                  What is Included:
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {service.features.map((feat, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontSize: "0.8125rem",
                        color: "var(--color-brand-espresso)",
                        lineHeight: "1.45",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "rgba(216, 190, 138, 0.25)",
                          border: "1px solid rgba(216, 190, 138, 0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <Check size={10} color="var(--color-brand-espresso)" strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelect(service.name)}
                className={service.isPopular ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", justifyContent: "center", borderRadius: "0px" }}
              >
                <Calendar size={14} color="var(--color-brand-champagne)" />
                <span>Select & Reserve</span>
              </button>
            </div>
          ))}
        </div>

        {/* Add-on Enhancements Section */}
        <div
          style={{
            marginTop: "4.5rem",
            background: "var(--color-white)",
            border: "1px solid var(--color-border)",
            borderRadius: "0px",
            padding: "2.5rem 2rem",
            boxShadow: "none",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="badge-gold">
              <PlusCircle size={12} color="var(--color-brand-espresso)" />
              Custom Upgrades
            </span>
            <h3 className="font-serif" style={{ fontSize: "1.6rem", marginTop: "0.5rem", color: "var(--color-brand-espresso)" }}>
              A La Carte Enhancements & Bridal Add-ons
            </h3>
            <p style={{ color: "var(--color-taupe)", fontSize: "0.875rem" }}>
              Pair these optional upgrades with any bridal or glamour package to elevate your day.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {addonOptions.map((addon) => (
              <div
                key={addon.id}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0px",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.35rem" }}>
                    <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-brand-espresso)", fontFamily: "var(--font-montserrat)" }}>
                      {addon.name}
                    </h4>
                    <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-brand-espresso)", fontFamily: "var(--font-playfair)" }}>
                      +${addon.price}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-taupe)", lineHeight: "1.4", marginBottom: "0.5rem" }}>
                    {addon.description}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.7rem", color: "var(--color-brand-champagne)", fontWeight: 600, textTransform: "uppercase" }}>
                  <Clock size={11} />
                  <span>{addon.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
