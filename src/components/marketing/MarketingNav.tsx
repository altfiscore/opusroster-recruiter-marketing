// src/components/marketing/MarketingNav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ChevronDown, Menu, X } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const FEATURES = [
  { href: "/features/sourcer-agent", label: "Sourcer Agent", desc: "Auto-source candidates daily" },
  { href: "/features/triage-agent", label: "Triage Agent", desc: "Auto-shortlist top fits" },
  { href: "/features/outreach-agent", label: "Outreach Agent", desc: "AI-personalized emails" },
  { href: "/features/reply-agent", label: "Reply Agent", desc: "Classify, draft, escalate" },
  { href: "/features/client-portal", label: "Client Portal", desc: "Share pipeline with clients" },
];

const FOR_WHOM = [
  { href: "/for/agencies", label: "Agencies", desc: "Multi-client recruiting" },
  { href: "/for/in-house", label: "In-house teams", desc: "Internal recruiters" },
  { href: "/for/founders", label: "Founders", desc: "Hiring without an HR team" },
  { href: "/for/staffing-firms", label: "Staffing firms", desc: "High-volume placement" },
];

export function MarketingNav() {
  const [openMenu, setOpenMenu] = useState<"features" | "for" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2A2D30]/8 bg-[#F5F7FA]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo size={32} variant="color" />
          <span className="font-display text-2xl tracking-tight text-[#2A2D30]">
            OpusRoster
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Features dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("features")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] text-[#2A2D30]/80 transition hover:text-[#2A2D30]">
              Features
              <ChevronDown size={14} className={`transition ${openMenu === "features" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "features" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[420px] rounded-2xl border border-[#2A2D30]/10 bg-white p-2 shadow-xl shadow-[#2A2D30]/5">
                  {FEATURES.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      className="block rounded-xl px-4 py-3 transition hover:bg-[#3AB0A2]/5"
                    >
                      <div className="font-medium text-[#2A2D30]">{f.label}</div>
                      <div className="text-sm text-[#2A2D30]/55">{f.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* For Whom dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("for")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] text-[#2A2D30]/80 transition hover:text-[#2A2D30]">
              For whom
              <ChevronDown size={14} className={`transition ${openMenu === "for" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "for" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[360px] rounded-2xl border border-[#2A2D30]/10 bg-white p-2 shadow-xl shadow-[#2A2D30]/5">
                  {FOR_WHOM.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      className="block rounded-xl px-4 py-3 transition hover:bg-[#FF6B6B]/5"
                    >
                      <div className="font-medium text-[#2A2D30]">{f.label}</div>
                      <div className="text-sm text-[#2A2D30]/55">{f.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/pricing" className="rounded-lg px-3 py-2 text-[15px] text-[#2A2D30]/80 hover:text-[#2A2D30]">
            Pricing
          </Link>
          <Link href="/about" className="rounded-lg px-3 py-2 text-[15px] text-[#2A2D30]/80 hover:text-[#2A2D30]">
            About
          </Link>
        </nav>

        {/* Right CTAs (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`${APP_URL}/sign-in`}
            className="rounded-lg px-3 py-2 text-[15px] text-[#2A2D30]/80 transition hover:text-[#2A2D30]"
          >
            Sign in
          </Link>
          <Link
            href={`${APP_URL}/sign-in?mode=signup`}
            className="rounded-full bg-[#3AB0A2] px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#329a8e]"
          >
            Start free trial
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-[#2A2D30]/8 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <div className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-[#2A2D30]/50">
              Features
            </div>
            {FEATURES.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-2 text-[15px] text-[#2A2D30]/80 hover:bg-[#3AB0A2]/5"
              >
                {f.label}
              </Link>
            ))}

            <div className="mt-3 px-2 py-1 text-xs font-medium uppercase tracking-wider text-[#2A2D30]/50">
              For whom
            </div>
            {FOR_WHOM.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-2 text-[15px] text-[#2A2D30]/80 hover:bg-[#FF6B6B]/5"
              >
                {f.label}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-center text-[15px] text-[#2A2D30]/80 hover:bg-[#2A2D30]/5"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-center text-[15px] text-[#2A2D30]/80 hover:bg-[#2A2D30]/5"
              >
                About
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href={`${APP_URL}/sign-in`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-[#2A2D30]/15 px-4 py-2.5 text-center text-[15px]"
              >
                Sign in
              </Link>
              <Link
                href={`${APP_URL}/sign-in?mode=signup`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-[#3AB0A2] px-4 py-2.5 text-center text-[15px] font-medium text-white"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
