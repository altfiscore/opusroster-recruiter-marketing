// src/app/(marketing)/page.tsx
// OpusRoster home - editorial, anti-AI-feel

import Link from "next/link";
import {
  Container,
  Eyebrow,
  DisplayH1,
  SectionH2,
  Lede,
  Underline,
  Em,
  PrimaryButton,
  SecondaryButton,
  Card,
  Section,
} from "@/components/marketing/Sections";
import ProductScreenshot from "@/components/marketing/ProductScreenshot";
import { Search, Filter, Send, MessageSquare, Calendar, Users, ArrowRight, Check, Rocket } from "lucide-react";
import { dashboardScreenshot } from "@/lib/screenshots";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const AGENTS = [
  {
    icon: Search,
    color: "teal",
    name: "Sourcer",
    tagline: "Sources candidates daily, while you sleep.",
    description: "Every morning at 6 AM, AI scans 800M+ profiles for each active job. Filters by your specific title and location. Scores candidates honestly — no inflated matches.",
    bullets: ["Smart PDL search per job", "Strict scoring (8–35 for poor fits, 80+ for real matches)", "5 candidates per job per day, max"],
    href: "/features/sourcer-agent",
  },
  {
    icon: Filter,
    color: "coral",
    name: "Triage",
    tagline: "Reviews your shortlist every 4 hours.",
    description: "Catches inflated scores, transitions stages, auto-rejects clearly poor fits after 14 days (recoverable). Keeps your sourced bucket honest, not piling up.",
    bullets: ["Hybrid re-scoring — only when something changes", "Plan-based rate limits", "Audit trail for every decision"],
    href: "/features/triage-agent",
  },
  {
    icon: Send,
    color: "teal",
    name: "Outreach",
    tagline: "Personalizes every email. Not a template.",
    description: "Within 5 minutes of shortlisting, AI drafts a unique email per candidate based on their actual background — current company, recent role, why they fit this specific job.",
    bullets: ["AI-personalized per candidate", "Multi-step follow-ups", "Honest 'powered by AI' disclosure"],
    href: "/features/outreach-agent",
  },
  {
    icon: MessageSquare,
    color: "coral",
    name: "Reply",
    tagline: "Reads replies. Drafts answers. Knows when to escalate.",
    description: "Classifies every reply: interested, declined, needs more info. Drafts contextual responses. Escalates anything ambiguous to you with full conversation context.",
    bullets: ["Sentiment classification", "Context-aware drafts", "Smart escalation rules"],
    href: "/features/reply-agent",
  },
  {
    icon: Calendar,
    color: "teal",
    name: "Scheduler",
    tagline: "Books interviews. Zero back-and-forth.",
    description: "When a candidate says yes, AI sends your Cal.com link. They self-book. Synced to your calendar. No 4-email chains to find a time.",
    bullets: ["Cal.com integration", "Automatic timezone handling", "Confirmation + reminders"],
    href: "/features/scheduler",
  },
];

const VALUE_PROPS = [
  { stat: "Up to 50%", label: "less than other AI recruiting platforms" },
  { stat: "5 agents", label: "working together — not just one tool" },
  { stat: "800M+", label: "candidate profiles searchable" },
  { stat: "5 days", label: "free trial — no credit card required" },
];

export default function MarketingHome() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* Left: Copy */}
            <div className="max-w-2xl">
              <Eyebrow color="coral">Recruiting software, built by recruiters</Eyebrow>

              <DisplayH1>
                Your AI recruiting team.
                <br />
                <span className="font-display italic">
                  Working while you <Underline color="coral">sleep</Underline>.
                </span>
              </DisplayH1>

              <Lede className="mt-6">
                Five AI agents — sourcing, triage, outreach, replies, scheduling.
                One pipeline. Honest scoring, no fake matches.
                Up to <Em>50% less</Em> than other AI recruiting platforms.
              </Lede>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Start free trial</PrimaryButton>
                <SecondaryButton href="/pricing">See pricing</SecondaryButton>
              </div>

              <p className="mt-6 text-sm text-[#2A2D30]/55">
                Free 5-day trial · No credit card · Cancel anytime
              </p>
            </div>

            {/* Right: Hero screenshot */}
            <div className="relative">
              {/* Decorative coral shape */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF6B6B]/10" aria-hidden />
              <div className="absolute -left-4 -bottom-12 h-40 w-40 rounded-full bg-[#3AB0A2]/10" aria-hidden />

              <ProductScreenshot
                src={dashboardScreenshot}
                alt="OpusRoster dashboard showing active searches, pipeline stages, and recent autopilot activity"
              />
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {VALUE_PROPS.map((vp, i) => (
              <div key={i} className="border-l-2 border-[#3AB0A2]/30 pl-4">
                <div className="font-display text-3xl text-[#2A2D30] lg:text-4xl">
                  {vp.stat}
                </div>
                <p className="mt-1 text-[15px] text-[#2A2D30]/65">{vp.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* JOB PROMOTION CALLOUT */}
      <Section>
        <Container>
          <Link href="/features/job-promotion" className="group block">
            <div className="flex flex-wrap items-center gap-8 rounded-3xl border border-[#2A2D30]/10 bg-white p-8 transition hover:shadow-lg lg:p-10">
              {/* Starburst badge */}
              <div
                className="relative flex h-44 w-44 shrink-0 flex-col items-center justify-center rounded-full bg-[#FF6B6B] text-center transition group-hover:scale-105"
                style={{ transform: "rotate(-8deg)" }}
              >
                <div className="absolute inset-[9px] rounded-full border-2 border-dashed border-white/40" />
                <span className="mb-1.5 rounded-full bg-white px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#993C1D]">
                  New
                </span>
                <p className="font-display text-xl leading-tight text-white">
                  Promote
                  <br />
                  your jobs
                </p>
                <p className="mt-1.5 max-w-[120px] text-[10px] leading-snug text-white/90">
                  Inbound applicants, not just search
                </p>
              </div>

              {/* Pitch card */}
              <div className="flex-1 min-w-[260px] rounded-2xl bg-[#F5F7FA] p-6">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#3AB0A2] px-3 py-1 text-xs font-medium text-white">
                  <Rocket size={12} strokeWidth={2} /> Job promotion
                </span>
                <h3 className="text-[18px] font-semibold leading-snug text-[#2A2D30]">
                  Most recruiting tools only search. We bring candidates to you.
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#2A2D30]/65">
                  Promote any job to Google, Bing, and hundreds of job boards. Inbound
                  applicants land straight in your pipeline — already scored by AI.
                </p>
                <div className="mt-4 flex gap-8">
                  <div>
                    <p className="text-[17px] font-semibold text-[#2A2D30]">Inbound</p>
                    <p className="text-[11px] text-[#2A2D30]/55">not just outbound search</p>
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold text-[#2A2D30]">Per-click</p>
                    <p className="text-[11px] text-[#2A2D30]/55">pay only for results</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </Section>

      {/* THE PROBLEM */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="navy">The problem</Eyebrow>
            <SectionH2>
              You spend <Em>6 hours a day</Em> on LinkedIn.
              <br />
              You should be on calls.
            </SectionH2>
            <Lede className="mt-6">
              Most recruiters burn hours hunting for candidates, copy-pasting outreach,
              and chasing replies. AI tools promise to fix it — and then send 50 generic
              emails to people who don't fit. We built OpusRoster because we got tired
              of both.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* 5 AGENTS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The five agents</Eyebrow>
            <SectionH2>
              Not one AI tool.
              <br />
              <span className="italic">A coordinated team.</span>
            </SectionH2>
            <Lede className="mt-6">
              Each agent has one job and does it well. Together they run your pipeline
              from search to scheduled interview.
            </Lede>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {AGENTS.map((agent, i) => {
              const Icon = agent.icon;
              const accentColor = agent.color === "teal" ? "#3AB0A2" : "#FF6B6B";
              return (
                <Link
                  key={agent.name}
                  href={agent.href}
                  className="group rounded-3xl border border-[#2A2D30]/10 bg-white p-8 transition hover:-translate-y-0.5 hover:border-[#2A2D30]/20 hover:shadow-xl hover:shadow-[#2A2D30]/5"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${accentColor}15`, color: accentColor }}
                    >
                      <Icon size={22} strokeWidth={1.75} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">
                        Agent #{i + 1}
                      </p>
                      <h3 className="font-display text-[28px] leading-tight text-[#2A2D30]">
                        {agent.name}
                      </h3>
                      <p className="mt-1 text-[17px] italic leading-snug text-[#2A2D30]/75">
                        {agent.tagline}
                      </p>

                      <p className="mt-4 text-[15px] leading-relaxed text-[#2A2D30]/65">
                        {agent.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {agent.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-[#2A2D30]/70">
                            <Check size={14} className="mt-1 shrink-0" style={{ color: accentColor }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: accentColor }}>
                        Learn more
                        <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Plus Client Portal as a 6th differentiator card */}
            <Link
              href="/features/client-portal"
              className="group lg:col-span-2 rounded-3xl border border-[#2A2D30]/10 bg-gradient-to-br from-[#3AB0A2]/5 to-[#FF6B6B]/5 p-8 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2A2D30]/5"
            >
              <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Users size={26} strokeWidth={1.75} className="text-[#1D3557]" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">
                    Plus, the differentiator
                  </p>
                  <h3 className="font-display text-[28px] leading-tight text-[#2A2D30]">
                    White-label Client Portal
                  </h3>
                  <p className="mt-2 text-[17px] italic text-[#2A2D30]/75">
                    Share live pipeline status with hiring managers — without giving them dashboard access.
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#2A2D30]/65">
                    Agencies live or die by client communication. We built portals so your clients see exactly what they need (candidates in stage, comments, status), and nothing they don't.
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3AB0A2] px-5 py-2.5 text-sm font-medium text-white">
                    Tour the portal
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* PRICING TEASE */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <Eyebrow color="coral">Honest pricing</Eyebrow>
              <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
                <span className="text-white">Half the price of others.</span>
                <br />
                <span className="italic text-[#B7E4C7]">More features in the box.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/75">
                We charge $89/mo for Pro and $230/mo for Business. Other AI recruiting
                platforms charge $149-$249. Same agents, similar features, lower bill.
                Annual saves another 20%.
              </p>
            </div>

            <div className="lg:text-right">
              <PrimaryButton href="/pricing" className="bg-[#3AB0A2] hover:bg-[#2c9587]">
                See full pricing
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8 lg:p-16">
            <Eyebrow color="teal">Get started</Eyebrow>
            <SectionH2>
              Recruit smarter.
              <br />
              <span className="italic">Not louder.</span>
            </SectionH2>
            <Lede className="mt-6">
              Free 5-day trial. 50 sourcing credits. Full pipeline. No credit card.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Start free trial</PrimaryButton>
              <SecondaryButton href="/pricing">View pricing</SecondaryButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
