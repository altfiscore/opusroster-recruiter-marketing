"use client";

interface BlurRegion {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  height?: string;
}

interface ProductScreenshotProps {
  src: string;
  alt: string;
  /** Which edges to fade out */
  fadeEdges?: ("top" | "bottom" | "left" | "right")[];
  /** Specific regions to blur (e.g. contact name rows) */
  blurRegions?: BlurRegion[];
  className?: string;
  priority?: boolean;
}

export default function ProductScreenshot({
  src,
  alt,
  fadeEdges = ["bottom", "left", "right"],
  blurRegions = [],
  className = "",
}: ProductScreenshotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-2xl border border-gray-200/60 ${className}`}
      style={{ background: "#f8fafc" }}
    >
      {/* The screenshot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        style={{ display: "block" }}
      />

      {/* Blur overlay regions (contact names, emails, etc.) */}
      {blurRegions.map((region, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: region.top ?? "auto",
            bottom: region.bottom ?? "auto",
            left: region.left ?? "0",
            right: region.right ?? "0",
            height: region.height ?? "40px",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            background: "rgba(248,250,252,0.25)",
          }}
        />
      ))}

      {/* Edge fades */}
      {fadeEdges.includes("bottom") && (
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "45%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(245,247,250,0.7) 60%, rgba(245,247,250,1) 100%)",
          }}
        />
      )}
      {fadeEdges.includes("top") && (
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "20%",
            background:
              "linear-gradient(to top, transparent 0%, rgba(245,247,250,0.8) 100%)",
          }}
        />
      )}
      {fadeEdges.includes("left") && (
        <div
          className="absolute top-0 left-0 bottom-0 pointer-events-none"
          style={{
            width: "6%",
            background:
              "linear-gradient(to left, transparent 0%, rgba(245,247,250,0.9) 100%)",
          }}
        />
      )}
      {fadeEdges.includes("right") && (
        <div
          className="absolute top-0 right-0 bottom-0 pointer-events-none"
          style={{
            width: "6%",
            background:
              "linear-gradient(to right, transparent 0%, rgba(245,247,250,0.9) 100%)",
          }}
        />
      )}
    </div>
  );
}
