// src/components/marketing/Sections.tsx
// Reusable building blocks for editorial marketing pages

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Wrapping max-width container - 1200px editorial */
export function Container({
  children,
  className = "",

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
