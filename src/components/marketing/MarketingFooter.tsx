// src/components/marketing/MarketingFooter.tsx
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { href: "/features/sourcer-agent", label: "Sourcer Agent" },
      { href: "/features/triage-agent", label: "Triage Agent" },
      { href: "/features/outreach-agent", label: "Outreach Agent" },
      { href: "/features/reply-agent", label: "Reply Agent" },
      { href: "/features/client-portal", label: "Client Portal" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "For",
    links: [
      { href: "/for/agencies", label: "Agencies" },
      { href: "/for/in-house", label: "In-house teams" },
      { href: "/for/founders", label: "Founders" },
      { href: "/for/staffing-firms", label: "Staffing firms" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/trust", label: "Trust & Security" },
      { href: `${APP_URL}/sign-in`, label: "Sign in" },
      { href: `${APP_URL}/sign-in?mode=signup`, label: "Start free trial" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-[#2A2D30]/8 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand block */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={32} variant="color" />
              <span className="font-display text-2xl tracking-tight text-[#2A2D30]">
                OpusRoster
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#2A2D30]/65">
              Recruiting software, built by recruiters.
              Full AI team — sourcing, outreach, replies, scheduling.
            </p>
            <p className="mt-6 text-sm text-[#2A2D30]/55">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#B7E4C7]/40 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3AB0A2]" />
                SOC 2 Type 2 in progress
              </span>
            </p>
          </div>

          {/* Sitemap */}
          <div className="grid grid-cols-3 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-[#2A2D30]/50">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#2A2D30]/75 transition hover:text-[#3AB0A2]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#2A2D30]/8 pt-8 lg:flex-row lg:items-center">
          <p className="text-sm text-[#2A2D30]/55">
            © {new Date().getFullYear()} OpusRoster. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#2A2D30]/55">
            <Link href="/trust" className="hover:text-[#2A2D30]">
              Privacy
            </Link>
            <Link href="/trust" className="hover:text-[#2A2D30]">
              Terms
            </Link>
            <Link href="/trust" className="hover:text-[#2A2D30]">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
