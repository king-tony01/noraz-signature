"use client";

import React, { useState } from "react";
import { Sparkles, Calculator, Plus, Minus, Check, MessageCircle, ArrowRight, Shield } from "lucide-react";

interface BookingCalculatorProps {
  onApplyToBooking: (serviceName: string, notes: string) => void;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({ onApplyToBooking }) => {
  const [selectedService, setSelectedService] = useState<string>("bridal-makeup");
  const [bridalPartyCount, setBridalPartyCount] = useState<number>(3);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["extended-touchup"]);
  const [travelType, setTravelType] = useState<"studio" | "metro" | "destination">("metro");

  const services = [
    { id: "bridal-makeup", name: "Bridal Makeup", basePrice: 650, label: "Bridal Makeup (Signature Look) ($650)" },
    { id: "traditional-bridal", name: "Traditional Bridal Makeup", basePrice: 550, label: "Traditional Bridal Makeup ($550)" },
    { id: "signature-glam", name: "Signature Glam", basePrice: 220, label: "Signature Glam (Special Occasion) ($220)" },
    { id: "photoshoot-editorial", name: "Photoshoot & Editorial Makeup", basePrice: 850, label: "Photoshoot & Editorial Production ($850)" },
    { id: "makeup-lessons", name: "Makeup Lessons", basePrice: 450, label: "Makeup Lessons (1-on-1 Session) ($450)" },
  ];

  const addonsList = [
    { id: "extended-touchup", name: "Full-Day Touch-Up Concierge", price: 300, desc: "On-site artist standby until reception change" },
    { id: "second-look", name: "Evening Reception Glam Transformation", price: 180, desc: "Second complete look switch for evening party" },
    { id: "airbrush-upgrade", name: "Airbrush HD Complexion Upgrade", price: 75, desc: "24-Hour micro-mist featherweight finish" },
    { id: "early-bird", name: "Early Morning Call (Before 6:00 AM)", price: 100, desc: "Early morning prep logistics" },
  ];

  const travelFees = {
    studio: { name: "Studio Appointment (Victoria Island / Lekki)", price: 0 },
    metro: { name: "On-Location Metro Hotel / Venue", price: 75 },
    destination: { name: "Destination Wedding (Custom travel quote required)", price: 250 },
  };

  const currentService = services.find((s) => s.id === selectedService) || services[0];
  const partyTotal = bridalPartyCount * 150;
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = addonsList.find((a) => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);
  const travelFee = travelFees[travelType].price;
  const grandTotal = currentService.basePrice + partyTotal + addonsTotal + travelFee;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const generateWhatsAppMessage = () => {
    const addonNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hello Noraz Signature! I would like to inquire about booking:
*Service:* ${currentService.name} ($${currentService.basePrice})
*Bridal Party / Attendees:* ${bridalPartyCount} persons ($${partyTotal})
*Selected Add-ons:* ${addonNames || "None"} ($${addonsTotal})
*Location Type:* ${travelFees[travelType].name} ($${travelFee})
*Estimated Total:* $${grandTotal}

Please let me know if my requested date is available!`;

    return encodeURIComponent(text);
  };

  return (
    <section id="estimator" className="estimator-section">
      <div className="estimator-inner">
        {/* Section Header */}
        <div className="estimator-header">
          <span className="badge-gold">
            <Calculator size={12} color="var(--color-brand-espresso)" />
            Transparent Investment Estimator
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.7rem)",
              marginTop: "1rem",
              marginBottom: "1rem",
              color: "var(--color-brand-espresso)",
            }}
          >
            Design Your Custom Glamour & Bridal Package
          </h2>
          <div className="gold-accent-line" style={{ margin: "0 auto 1.25rem auto" }} />
          <p style={{ color: "var(--color-taupe)", fontSize: "0.95rem" }}>
            Select your primary service, bridal party requirements, and bespoke add-ons for an instantaneous, transparent investment estimate.
          </p>
        </div>

        {/* Main Calculator Grid (White Container) */}
        <div className="calc-container">
          {/* Left Column: Form Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Step 1: Base Service */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-brand-espresso)",
                  marginBottom: "0.75rem",
                }}
              >
                1. Select Core Service Package
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {services.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    style={{
                      border: selectedService === s.id
                        ? "1.5px solid var(--color-brand-champagne)"
                        : "1px solid var(--color-border)",
                      background: selectedService === s.id
                        ? "rgba(216, 190, 138, 0.08)"
                        : "var(--color-surface)",
                      borderRadius: "0px",
                      padding: "0.85rem 1.15rem",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-brand-espresso)" }}>
                        {s.name}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)" }}>{s.label}</p>
                    </div>
                    <span className="font-serif" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-brand-espresso)" }}>
                      ${s.basePrice}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Bridal Party / Group Size */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-brand-espresso)",
                  marginBottom: "0.75rem",
                }}
              >
                2. Bridal Party / Attendees (+$150 each)
              </label>
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0px",
                  padding: "0.85rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-brand-espresso)" }}>
                    Bridesmaids & Mothers of the Bride/Groom
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-taupe)" }}>
                    Full glam with lashes & touch-up powder included
                  </p>
                </div>

                {/* Counter Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <button
                    type="button"
                    onClick={() => setBridalPartyCount(Math.max(0, bridalPartyCount - 1))}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--color-border)",
                      background: "var(--color-white)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "var(--color-brand-espresso)",
                    }}
                  >
                    <Minus size={14} />
                  </button>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, width: "20px", textAlign: "center" }}>
                    {bridalPartyCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setBridalPartyCount(bridalPartyCount + 1)}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--color-brand-espresso)",
                      background: "var(--color-brand-espresso)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "var(--color-white)",
                    }}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Optional Upgrades */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-brand-espresso)",
                  marginBottom: "0.75rem",
                }}
              >
                3. Bespoke Enhancements & Add-ons
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem" }}>
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      style={{
                        border: isChecked
                          ? "1.5px solid var(--color-brand-champagne)"
                          : "1px solid var(--color-border)",
                        background: isChecked
                          ? "rgba(216, 190, 138, 0.08)"
                          : "var(--color-surface)",
                        borderRadius: "0px",
                        padding: "0.75rem 1rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            border: isChecked ? "none" : "1.5px solid var(--color-border)",
                            background: isChecked ? "var(--color-brand-champagne)" : "var(--color-white)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {isChecked && <Check size={14} color="#241A18" strokeWidth={3} />}
                        </div>
                        <div>
                          <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-brand-espresso)" }}>
                            {addon.name}
                          </p>
                          <p style={{ fontSize: "0.725rem", color: "var(--color-taupe)" }}>{addon.desc}</p>
                        </div>
                      </div>
                      <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-brand-espresso)" }}>
                        +${addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Location Type */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-brand-espresso)",
                  marginBottom: "0.75rem",
                }}
              >
                4. Location & Travel
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.5rem" }}>
                {(["studio", "metro", "destination"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTravelType(type)}
                    style={{
                      padding: "0.75rem 0.5rem",
                      borderRadius: "9999px",
                      border: travelType === type
                        ? "1.5px solid var(--color-brand-espresso)"
                        : "1px solid var(--color-border)",
                      background: travelType === type
                        ? "var(--color-brand-espresso)"
                        : "var(--color-surface)",
                      color: travelType === type
                        ? "var(--color-white)"
                        : "var(--color-brand-espresso)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      boxShadow: "none",
                    }}
                  >
                    {type === "studio" && "Studio (+ $0)"}
                    {type === "metro" && "On-Location (+ $75)"}
                    {type === "destination" && "Destination (+ $250)"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Summary Card */}
          <div
            style={{
              background: "var(--color-brand-espresso)",
              color: "#F8F4EE",
              borderRadius: "0px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid rgba(216, 190, 138, 0.4)",
              boxShadow: "none",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <span className="badge-dark">
                  <Sparkles size={11} color="var(--color-brand-champagne)" />
                  Live Quote Breakdown
                </span>
                <span style={{ fontSize: "0.7rem", color: "#C9A18D" }}>No Hidden Fees</span>
              </div>

              {/* Line items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.875rem", borderBottom: "1px solid #4A3832", paddingBottom: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#E5DCD3" }}>{currentService.name}</span>
                  <span style={{ fontWeight: 600 }}>${currentService.basePrice}</span>
                </div>

                {bridalPartyCount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#E5DCD3" }}>{bridalPartyCount}x Party Attendees</span>
                    <span style={{ fontWeight: 600 }}>+${partyTotal}</span>
                  </div>
                )}

                {selectedAddons.map((id) => {
                  const item = addonsList.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#C9A18D" }}>+ {item.name}</span>
                      <span style={{ fontWeight: 600 }}>+${item.price}</span>
                    </div>
                  );
                })}

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#E5DCD3" }}>Travel ({travelType})</span>
                  <span style={{ fontWeight: 600 }}>+${travelFee}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-brand-champagne)", fontWeight: 600 }}>
                  Estimated Investment Total:
                </p>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "3rem",
                    color: "var(--color-brand-champagne)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginTop: "0.25rem",
                  }}
                >
                  ${grandTotal}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#C9A18D", marginTop: "0.5rem" }}>
                  *40% retainer secures your date. Final balance settled prior to event.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={`https://wa.me/2347086833653?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-champagne"
                style={{ width: "100%", justifyContent: "center", borderRadius: "0px", boxShadow: "none" }}
              >
                <MessageCircle size={16} />
                <span>Send via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const notes = `Selected ${bridalPartyCount} party members, ${travelType} travel, and add-ons. Estimated: $${grandTotal}`;
                  onApplyToBooking(currentService.name, notes);
                }}
                className="btn-dark"
                style={{ width: "100%", justifyContent: "center", borderRadius: "0px", boxShadow: "none" }}
              >
                <span>Proceed to Booking Form</span>
                <ArrowRight size={14} color="var(--color-brand-champagne)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
