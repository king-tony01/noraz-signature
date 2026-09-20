export interface ServiceTier {
  id: string;
  name: string;
  tagline: string;
  category: "bridal" | "glam" | "editorial" | "masterclass";
  price: string;
  duration: string;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
}

export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
}

export const servicesData: ServiceTier[] = [
  {
    id: "bridal-couture",
    name: "The Royal Bridal Suite",
    tagline: "Our premier signature experience for your once-in-a-lifetime walk down the aisle.",
    category: "bridal",
    price: "$650",
    duration: "3.5 Hours (Includes Trial)",
    isPopular: true,
    idealFor: "Modern & Luxury Brides seeking perfection, transfer-proof wear, and zero stress.",
    features: [
      "Dedicated 90-minute Pre-Wedding Trial & Look Design",
      "Hydrating Luxury 24k Gold Skincare Prep & Lip Therapy",
      "Bespoke Tone-Matched Complexion & Sculpting",
      "Custom Hand-Mink Lash Mapping & Precision Brow Arching",
      "16-Hour Transfer-Resistant & Cry-Proof Setting Seal",
      "Deluxe Bridal Touch-up Emergency Kit Included",
      "Veil & Jewelry Placement Support On-Location"
    ]
  },
  {
    id: "traditional-splendor",
    name: "Traditional & Cultural Elegance",
    tagline: "Vibrant, regal cultural bridal artistry crafted for rich ceremonies and heavy jewelry.",
    category: "bridal",
    price: "$550",
    duration: "2.5 Hours",
    idealFor: "Yoruba, Igbo, Edo, Hausa, Ghanaian, and multicultural cultural celebrations.",
    features: [
      "Sweat-resistant, high-humidity HD Velvet Base Formulation",
      "Vibrant Eye Artistry tailored to attire colors and fabrics",
      "High-Definition Brow & Lip Architecture",
      "Long-Wear Collarbone & Shoulder Body Shimmer",
      "Gele / Cultural Headgear Coordination & Placement",
      "Full Touch-Up Powder & Lip Glaze Set Included"
    ]
  },
  {
    id: "red-carpet-glam",
    name: "Signature Red Carpet & Gala",
    tagline: "High-voltage glamour engineered for gala lights, flashes, and unforgettable entries.",
    category: "glam",
    price: "$220",
    duration: "90 Minutes",
    idealFor: "Galas, Award Shows, Milestones, Birthdays, and VIP Red Carpet Events.",
    features: [
      "Illuminating Skin Polish & Poreless Base Perfecting",
      "Choice of Smoked Velvet, Hollywood Wing, or Soft Glam",
      "Dimensional Highlight & Contour for Flash Photography",
      "Luxury 3D Multi-Layered False Eyelashes",
      "Hydrating Gloss or Matte Velvet Lip Chemistry",
      "Setting Spray Mist with 12-Hour Anti-Shine Lock"
    ]
  },
  {
    id: "editorial-commercial",
    name: "Editorial & High-Fashion Campaign",
    tagline: "Studio and runway-grade makeup execution designed for high-resolution 8K capture.",
    category: "editorial",
    price: "$850 / Half-Day",
    duration: "Half-Day / Full-Day On-Set",
    idealFor: "Lookbooks, Magazine Covers, Commercial Video, and Designer Runway Shows.",
    features: [
      "Flawless Glass Skin and Texture-True Complexion Matching",
      "Zero-Flashback Formulations calibrated for studio strobes",
      "Continuous On-Set Standby for Look Changes & Touch-ups",
      "Creative Concept Collaboration with Creative Directors",
      "Male Grooming & Multi-Model Adaptability",
      "Fast Runway Turnaround Protocols"
    ]
  },
  {
    id: "masterclass-pro",
    name: "1-on-1 VIP Artistry Masterclass",
    tagline: "Private mentorship to master complex undertones, flawless blending, and business mastery.",
    category: "masterclass",
    price: "$450",
    duration: "4.5 Hours",
    idealFor: "Aspiring makeup artists and beauty lovers wanting pro-level mastery.",
    features: [
      "In-Depth Undertone & Color Theory for Melanated Complexions",
      "Brush Anatomy, Product Chemistry & Lighting Calibration",
      "Hands-On Live Model Practice with Noraz Mentorship",
      "Social Media Photography, Lighting & Client Booking Tactics",
      "Comprehensive Noraz Signature Product Guide & Resource List",
      "Official Certificate of Completion & Gift Bag"
    ]
  }
];

export const addonOptions: ServiceAddon[] = [
  {
    id: "bridal-party",
    name: "Bridesmaid / Mother of Bride Glam",
    price: 150,
    description: "Full soft glam including lashes & touch-up powder per attendee.",
    duration: "45 mins per person"
  },
  {
    id: "extended-touchup",
    name: "Full-Day On-Site Touch-up Concierge",
    price: 300,
    description: "Dedicated artist standby through ceremony, photo session & reception change.",
    duration: "Up to 5 hours"
  },
  {
    id: "second-look",
    name: "Reception Glam Transformation (Second Look)",
    price: 180,
    description: "Transition from soft daytime bridal to sultry evening party glam.",
    duration: "45 mins"
  },
  {
    id: "airbrush-upgrade",
    name: "Airbrush HD Complexion Upgrade",
    price: 75,
    description: "Ultra-fine micro-mist application for featherweight, 24-hour waterproof base.",
    duration: "+15 mins"
  },
  {
    id: "early-bird",
    name: "Early Morning Call-Time (Before 6:00 AM)",
    price: 100,
    description: "Accommodates early ceremonies, church call times, and photo schedules.",
    duration: "Fixed"
  }
];
