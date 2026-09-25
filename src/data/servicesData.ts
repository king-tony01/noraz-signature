export interface ServiceTier {
  id: string;
  name: string;
  tagline: string;
  category: "bridal" | "glam" | "editorial" | "styling" | "concierge" | "masterclass" | "events";
  isPopular?: boolean;
  features: string[];
  idealFor: string;
}

export interface FutureService {
  id: string;
  name: string;
  tagline: string;
  category: "hair" | "bridal-hair" | "wig-styling";
  badge?: string;
  features: string[];
}

export const servicesData: ServiceTier[] = [
  {
    id: "signature-glam",
    name: "Signature Glam",
    tagline: "Elegant, polished glam designed for special occasions, celebrations and unforgettable moments.",
    category: "glam",
    idealFor: "Milestone birthdays, gala dinners, wedding guests, dinners, and VIP evening outings.",
    features: [
      "Skin prep & poreless, weightless complexion balancing",
      "Custom eye artistry tailored to your style (Smokey, Soft Wing, or Neutral Shimmer)",
      "Defined brow architecture and luxury mink false lashes",
      "High-shine gloss or velvet matte lip perfection",
      "12-hour transfer-resistant setting lock"
    ]
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    tagline: "Flawless, long-lasting bridal glam carefully tailored to your features and wedding aesthetic.",
    category: "bridal",
    isPopular: true,
    idealFor: "White wedding ceremonies, luxury destination brides, and romantic reception transitions.",
    features: [
      "Deluxe hydrating skincare prep & 24k gold lip therapy",
      "Bespoke tone-matched HD complexion with waterproof cry-proof seal",
      "Hand-mapped flutter lashes and soft romantic eye dimension",
      "Complimentary bridal touch-up kit for day-long perfection",
      "Veil, crown and jewelry placement assistance on-site"
    ]
  },
  {
    id: "traditional-bridal-makeup",
    name: "Traditional Bridal Makeup",
    tagline: "Timeless bridal beauty designed to complement your traditional attire, accessories and gele.",
    category: "bridal",
    idealFor: "Yoruba, Igbo, Edo, Hausa, Ghanaian, and multicultural traditional wedding rites.",
    features: [
      "High-humidity & sweat-resistant velvet base formulation",
      "Rich, vibrant eye look harmonious with your coral beads & traditional attire",
      "High-definition sculpted brows and bold or nude lip pairing",
      "Collarbone & decolletage radiance shimmer",
      "Seamless aesthetic coordination with Gele & royal accessories"
    ]
  },
  {
    id: "gele-styling",
    name: "Gele Styling",
    tagline: "Beautifully structured gele styling created to complete your overall look.",
    category: "styling",
    idealFor: "Brides, celebrants, mothers of the couple, and traditional wedding guests.",
    features: [
      "Classic Avant-Garde, Rose, Fan, Auto-Gele, and Infinity Pleat styles",
      "Precision pleating & structural balance for all-day comfort",
      "Custom fit tailored to your face shape and outfit silhouette",
      "Crown and accessory pinning support",
      "Quick on-site tying and touch-up standby"
    ]
  },
  {
    id: "bridal-party-makeup",
    name: "Bridal Party Makeup",
    tagline: "Coordinated and elegant glam for bridesmaids, mothers and members of the bridal party.",
    category: "bridal",
    idealFor: "Maids of Honor, bridesmaids, mothers of the bride/groom, and sisters.",
    features: [
      "Harmonious glam matching the bride's overarching wedding color palette",
      "Skin-perfecting satin base with long-wear durability",
      "Flattering neutral soft glam eyes with wispy lashes",
      "Hydrating lip gloss or long-wear matte stain",
      "Rapid, synchronized morning timeline execution"
    ]
  },
  {
    id: "photoshoot-editorial-makeup",
    name: "Photoshoot & Editorial Makeup",
    tagline: "Camera-ready beauty tailored to your creative concept, photoshoot or editorial project.",
    category: "editorial",
    idealFor: "Studio portraits, fashion lookbooks, magazine editorials, pregnancy shoots, and brand campaigns.",
    features: [
      "8K Ultra-HD camera-ready finish with zero flashback",
      "Creative moodboard alignment and concept execution",
      "Precision contouring calibrated for studio flash and natural daylight",
      "Texture-true skin finish with editorial glow",
      "On-set touch-up standby for wardrobe and look transitions"
    ]
  },
  {
    id: "home-service",
    name: "Home Service",
    tagline: "A personalised beauty experience delivered at your preferred location.",
    category: "concierge",
    idealFor: "Clients desiring total privacy, comfort, and convenience at home, hotel, or private venue.",
    features: [
      "Complete professional studio setup brought directly to your doorstep",
      "Hospital-grade sanitized tools and luxury cosmetic kit",
      "Zero travel stress — relax in your own private sanctuary",
      "Flexible scheduling including early morning or evening call-times",
      "Personalized consultation and one-on-one undivided artistry"
    ]
  },
  {
    id: "makeup-lessons",
    name: "Makeup Lessons",
    tagline: "Personalised one-on-one sessions designed to help you master your makeup routine and techniques.",
    category: "masterclass",
    idealFor: "Beginners wanting a daily routine or beauty enthusiasts elevating their techniques.",
    features: [
      "Personal beauty audit: reviewing your current makeup bag & tools",
      "Hands-on demonstration: 'Half-Face' step-by-step guided practice",
      "Flawless brow shaping, blending, and skin-matching fundamentals",
      "Day-to-night transformation tips and product shopping checklist",
      "Personalized step-by-step recap guide to take home"
    ]
  },
  {
    id: "group-event-bookings",
    name: "Group & Event Bookings",
    tagline: "Customised beauty services for weddings, celebrations, events and group occasions.",
    category: "events",
    idealFor: "Large wedding entourages, corporate galas, birthday squads, and festive group gatherings.",
    features: [
      "Dedicated artistry schedule and coordinated multi-seat glams",
      "Unified, cohesive glam quality across the entire party",
      "Custom group pricing and VIP group concierge packages",
      "On-location travel setup with zero downtime between glams",
      "Group touch-up station prior to departure or ceremony"
    ]
  }
];

export const futureServicesData: FutureService[] = [
  {
    id: "wig-ventilation",
    name: "Wig Ventilation",
    tagline: "Natural-looking wig ventilation for a seamless and realistic finish.",
    category: "hair",
    badge: "Coming Soon",
    features: [
      "Precision single/double knot hair ventilation",
      "Custom hairline customization and density blending",
      "HD and Swiss lace foundation compatibility",
      "Seamless natural transition with realistic scalp look"
    ]
  },
  {
    id: "wigging",
    name: "Wigging",
    tagline: "Custom wig creation tailored to your preferred style and fit.",
    category: "hair",
    badge: "Coming Soon",
    features: [
      "Bespoke head measurement and cap structuring",
      "Secure sewing and machine-stitched durability",
      "Custom styling, layers, and partings tailored to your face",
      "Premium texture matching (Straight, Wavy, Curls)"
    ]
  },
  {
    id: "wig-revamping",
    name: "Wig Revamping & Styling",
    tagline: "Professional restoration and styling to give your existing wigs a fresh new look.",
    category: "wig-styling",
    badge: "Coming Soon",
    features: [
      "Deep cleansing, intense conditioning and silicone treatment",
      "Lace cleaning, detangling, and frizz elimination",
      "Precision cutting, trimming, hot comb styling and curling",
      "Revitalized bounce, silky sheen and extended longevity"
    ]
  },
  {
    id: "frontal-installation",
    name: "Frontal Installation",
    tagline: "Neat and seamless frontal installation for a natural-looking finish.",
    category: "hair",
    badge: "Coming Soon",
    features: [
      "Expert lace bleaching and customized plucking",
      "Skin-melt tint matching for undetectable scalp look",
      "Sweat-resistant, long-wear adhesive or glueless install",
      "Clean edges, baby hair customization or sleek flat press"
    ]
  },
  {
    id: "bridal-hairstyling",
    name: "Bridal Hairstyling",
    tagline: "Elegant bridal hairstyles designed to complement your makeup, gown and overall bridal look.",
    category: "bridal-hair",
    badge: "Coming Soon",
    features: [
      "Classic Hollywood waves, sleek chignons, textured updos & pony glam",
      "Harmonious pairing with veil, tiara, and hair accessories",
      "High-humidity anti-frizz hold for all-day ceremony endurance",
      "Seamless coordination with bridal makeup for total aesthetic harmony"
    ]
  }
];
