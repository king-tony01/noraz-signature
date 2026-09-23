export interface PortfolioItem {
  id: string;
  title: string;
  category: "Bridal" | "Traditional" | "Editorial" | "Soft Glam";
  tag: string;
  image: string;
  description: string;
  details: string[];
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  skinTone: string;
  keyTechniques: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "emerald-silk-glam",
    title: "Emerald Elegance & Soft Warm Glam",
    category: "Soft Glam",
    tag: "Emerald Silk Glam",
    image: "/portfolio/emerald-silk-glam.jpg",
    description: "A polished, soft-glam makeup look featuring subtle smoky eyes, glowing skin, and warm nude-glossed lips, perfectly complemented by a rich emerald green satin robe.",
    details: ["Subtle Smoky Eyes", "Glossy Nude Lips", "Warm Toned Complexion", "Emerald Satin Robe Styling"]
  },
  {
    id: "look-2",
    title: "Regal Yoruba Royal Elegance",
    category: "Traditional",
    tag: "Traditional Wedding",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80",
    description: "Vibrant coral undertone balancing, sculpted cheekbones, and high-shine copper glaze for cultural splendor.",
    details: ["Aso-Oke Tone Harmony", "Sculpted Brows", "24hr Sweat Defense"]
  },
  {
    id: "look-3",
    title: "High-Fashion Glass Skin & Bronze",
    category: "Editorial",
    tag: "Vogue Runway Editorial",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    description: "Ultra-clean skin finish with feather-light bronzed sculpting and wet-look gloss accents.",
    details: ["Zero Flashback", "Dewy Micro-Glow", "Minimalist Perfection"]
  },
  {
    id: "look-4",
    title: "Velvet Siren Red Carpet Glam",
    category: "Soft Glam",
    tag: "Celebrity Gala",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
    description: "Rich cocoa contouring paired with a timeless deep burgundy velvet lip and razor-sharp feline wing.",
    details: ["Precision Lip Arch", "Smoked Liner", "Anti-Shine Micro Powder"]
  },
  {
    id: "look-5",
    title: "Sun-Drenched Monochromatic Nude",
    category: "Soft Glam",
    tag: "Milestone Glamour",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    description: "Seamless transitions of warm terracotta, soft espresso, and peach tones for effortless sophistication.",
    details: ["Neutral Terracotta Eyes", "Cloud Skin Texture", "Custom Nude Blend"]
  },
  {
    id: "look-6",
    title: "Ethereal Destination Bride",
    category: "Bridal",
    tag: "Outdoor Coastal Ceremony",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80",
    description: "Humidity-defying coastal bridal look featuring airy lashes, soft flushed cheeks, and pillowy satin lips.",
    details: ["UV-Resistant Primer", "Airbrush Finish", "18-Hour Coastal Hold"]
  }
];

export const beforeAfterShowcase: BeforeAfterPair = {
  id: "ba-bridal",
  title: "The Signature Bridal Glow Transformation",
  category: "Bridal Artistry",
  description: "Witness the art of skin-first complexion architecture: from bare hydrated canvas to luminous, sculpted bridal radiance with zero heavy caking.",
  beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  skinTone: "Deep Warm Caramel with Golden Olive Undertones",
  keyTechniques: [
    "Targeted Color Correction (Hyperpigmentation neutralization without gray cast)",
    "Dimensional Micro-Contour that honors natural facial bone structure",
    "Multi-Zone Setting (Hydrating center with shine-resistant perimeter)"
  ]
};
