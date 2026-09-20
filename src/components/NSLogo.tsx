import React from "react";

interface NSLogoProps {
  className?: string;
  isDark?: boolean;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const NSLogo: React.FC<NSLogoProps> = ({
  className = "",
  isDark = false,
  size = "md",
  showText = true,
}) => {
  const sizeMap = {
    sm: { imgSize: 34, textSize: "1.05rem", gap: "0.5rem" },
    md: { imgSize: 44, textSize: "1.28rem", gap: "0.65rem" },
    lg: { imgSize: 58, textSize: "1.65rem", gap: "0.85rem" },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`flex items-center select-none ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: currentSize.gap,
        textDecoration: "none",
      }}
    >
      {/* Original NS Luxury Monogram */}
      <div
        style={{
          width: `${currentSize.imgSize}px`,
          height: `${currentSize.imgSize}px`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "transparent",
          boxShadow: "none",
          flexShrink: 0,
        }}
      >
        <img
          src="/logo.png"
          alt="Noraz Signature Monogram"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            mixBlendMode: isDark ? "screen" : "multiply",
            filter: isDark
              ? "brightness(1.15) contrast(1.1)"
              : "contrast(1.05)",
          }}
        />
      </div>

      {/* Brand Typography — Single Line with Logo-Matching Metallic Gradient */}
      {showText && (
        <span
          className={`font-serif tracking-widest leading-none font-semibold ${
            isDark ? "text-gradient-gold-bright" : "text-gradient-gold"
          }`}
          style={{
            fontSize: currentSize.textSize,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Noraz Signature
        </span>
      )}
    </div>
  );
};
