// src/components/marketing/Sections.tsx
// Reusable building blocks for editorial marketing pages

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Wrapping max-width container - 1200px editorial */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Editorial section eyebrow - small caps label above heading */
export function Eyebrow({ children, color = "teal" }: { children: React.ReactNode; color?: "teal" | "coral" | "navy" }) {
  const colors = {
    teal: "text-[#3AB0A2]",
    coral: "text-[#FF6B6B]",
    navy: "text-[#1D3557]",
  };
  return (
    <p className={`mb-4 text-sm font-medium uppercase tracking-[0.14em] ${colors[color]}`}>
      {children}
    </p>
  );
}

/** Display headline - serif, editorial weight */
export function DisplayH1({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`font-display text-[44px] leading-[1.05] tracking-tight text-[#2A2D30] sm:text-[58px] lg:text-[68px] ${className}`}>
      {children}
    </h1>
  );
}

/** Section heading - serif, mid-scale */
export function SectionH2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[34px] leading-[1.1] tracking-tight text-[#2A2D30] sm:text-[44px] lg:text-[52px] ${className}`}>
      {children}
    </h2>
  );
}

/** Lead paragraph - larger body for opening lines */
export function Lede({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[18px] leading-[1.55] text-[#2A2D30]/70 lg:text-[20px] ${className}`}>
      {children}
    </p>
  );
}

/** Underlined emphasis on a key word - hand-drawn feel via SVG underline */
export function Underline({ children, color = "coral" }: { children: React.ReactNode; color?: "coral" | "teal" | "mint" }) {
  const colorMap = {
    coral: "#FF6B6B",
    teal: "#3AB0A2",
    mint: "#B7E4C7",
  };
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        className="absolute -bottom-1 left-0 w-full"
        height="8"
        viewBox="0 0 200 8"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M2 6 Q 50 2, 100 4 T 198 5"
          stroke={colorMap[color]}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </span>
  );
}

/** Italicized emphasis - editorial tone */
export function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-display italic text-[#3AB0A2]">{children}</em>;
}

/** Primary CTA button */
export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-[#3AB0A2] px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#329a8e] hover:gap-3 ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

/** Secondary CTA - ghost/outlined */
export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-[#2A2D30]/15 bg-white px-6 py-3.5 text-[15px] font-medium text-[#2A2D30] transition hover:border-[#2A2D30]/30 hover:gap-3 ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

/** Card for feature blocks, "for whom" cards, etc */
export function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const baseClasses = `block rounded-2xl border border-[#2A2D30]/10 bg-white p-7 transition ${
    href ? "hover:-translate-y-0.5 hover:border-[#3AB0A2]/30 hover:shadow-lg hover:shadow-[#2A2D30]/5" : ""
  } ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }
  return <div className={baseClasses}>{children}</div>;
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const baseClass = "block rounded-2xl border border-[#2A2D30]/10 bg-white p-7 transition";
  const hoverClass = "hover:-translate-y-0.5 hover:border-[#3AB0A2]/30 hover:shadow-lg hover:shadow-[#2A2D30]/5";

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${hoverClass} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <div className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}

/** Section spacing wrapper */
export function Section({
  children,
  className = "",
  as = "section",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  const Tag = as;
  return <Tag className={`py-20 lg:py-28 ${className}`}>{children}</Tag>;
}
