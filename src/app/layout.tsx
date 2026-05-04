import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OpusRoster — Recruiting Software, Built by Recruiters",
    template: "%s — OpusRoster",
  },
  description:
    "Full AI recruiting team — sourcing, outreach, replies, scheduling. Up to 50% less than other AI recruiting platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-[#F5F7FA] text-[#2A2D30]">
        <MarketingNav />
        <main>{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}
