// src/components/marketing/ProductScreenshot.tsx
// Renders a product screenshot with edge fade and optional blur overlays
// to protect sensitive data while keeping the marketing visual real.

import Image from "next/image";

interface BlurRegion {
  /** percentage from left (0-100) */
  x: number;
  /** percentage from top (0-100) */
  y: number;
  /** percentage width */
  w: number;
  /** percentage height */
  h: number;
}

interface ProductScreenshotProps {
  src: string;
  alt: string;
  /** width in pixels - actual rendered size */
  width?: number;
  height?: number;
  /** apply edge fade (top + bottom) so screenshot blends into background */
  edgeFade?: boolean;
  /** blur regions in % coordinates (e.g., for emails / names) */
  blurRegions?: BlurRegion[];
  /** rounded corner size */
  radius?: "lg" | "xl" | "2xl" | "3xl";
  /** add subtle shadow */
  shadow?: boolean;
  className?: string;
}

export function ProductScreenshot({
  src,
  alt,
  width = 1400,
  height = 900,
  edgeFade = true,
  blurRegions = [],
  radius = "2xl",
  shadow = true,
  className = "",
}: ProductScreenshotProps) {
  const radiusClass = {
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  }[radius];

  return (
    <div
      className={`relative overflow-hidden ${radiusClass} ${
        shadow ? "shadow-2xl shadow-[#2A2D30]/15 ring-1 ring-[#2A2D30]/8" : ""
      } ${className}`}
      style={{
        // Edge fade via CSS mask
        WebkitMaskImage: edgeFade
          ? "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)"
          : undefined,
        maskImage: edgeFade
          ? "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)"
          : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full h-auto"
        priority={false}
      />

      {/* Blur regions overlay */}
      {blurRegions.map((region, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            left: `${region.x}%`,
            top: `${region.y}%`,
            width: `${region.w}%`,
            height: `${region.h}%`,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            background: "rgba(255,255,255,0.05)",
          }}
        />
      ))}
    </div>
  );
}

/** Specialized version for hero - large, dramatic edge fade */
export function HeroScreenshot(props: Omit<ProductScreenshotProps, "edgeFade" | "radius">) {
  return <ProductScreenshot {...props} edgeFade={true} radius="3xl" />;
}

/** Specialized for inline feature use - tighter, no fade */
export function InlineScreenshot(props: Omit<ProductScreenshotProps, "edgeFade">) {
  return <ProductScreenshot {...props} edgeFade={false} radius="xl" />;
}
