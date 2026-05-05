// src/app/features/triage-agent/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { Filter, RefreshCw, AlertCircle, TrendingDown, Check, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Triage Agent — Self-cleaning shortlist",
};

export default function TriageAgentPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">Agent #2 of 5</Eyebrow>
            <DisplayH1>
              A self-cleaning
              <br />
              <span className="italic"><Underline color="coral">shortlist</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Every 4 hours, AI reviews your sourced candidates. Auto-shortlists fits.
              Re-scores stale candidates. Retires clearly poor matches after 14 days.
              Your pipeline stays fresh — without your involvement.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-[#2A2D30]/55">
              Pro: Daily, 50 candidates · Business: Every 4h, 200 candidates
            </p>
          </div>
        </Container>
      </Section>

      {/* THE PROBLEM */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="navy">The problem we solve</Eyebrow>
            <SectionH2>
              Your sourced bucket
              <br />
              <span className="italic">becomes a graveyard.</span>
            </SectionH2>
            <Lede className="mt-6">
              You sourced 200 candidates last month. 30 stayed in &quot;Sourced&quot; because you got busy.
              Some are great fits you forgot about. Most are noise. Without Triage, you'd have to
              manually review all 200 to find the gold.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* WHAT IT DOES */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow color="teal">What it does</Eyebrow>
              <SectionH2>
                Three decisions, made fairly.
              </SectionH2>
              <Lede className="mt-6">
                Triage looks at each Sourced candidate and decides one of three things,
                based on score and age. No favorites. No human bias.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: TrendingDown,
                  color: "#3AB0A2",
                  title: "Auto-shortlist (score ≥ threshold)",
                  desc: "Candidate moves to Shortlisted. Outreach Agent picks them up within 5 minutes.",
                },
                {
                  icon: AlertCircle,
                  color: "#FF6B6B",
                  title: "Auto-reject (score < 25 + age > 14d)",
                  desc: "Marked as Rejected. Recoverable — not deleted. Recruiter can revive any time.",
                },
                {
                  icon: RefreshCw,
                  color: "#1D3557",
                  title: "Re-score if 30+ days old",
                  desc: "Stale candidates get fresh AI evaluation. Catches improvements when job descriptions evolve.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    <item.icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2A2D30]">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-[#2A2D30]/65">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* COST DISCIPLINE */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow color="coral">Cost discipline</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
              Hybrid scoring.
              <br />
              <span className="italic text-[#B7E4C7]">Tokens spent only when needed.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Naive AI tools re-score every candidate every run. We don't.
              Triage trusts the original Sourcer score unless something has changed —
              the candidate is 30+ days old, or the job was meaningfully edited.
              Most runs spend $0 in token costs. Heavy weeks: $10-20. Compare to other tools that quietly burn $100+/mo.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "Re-scores only stale candidates",
                "Plan-based rate limits prevent runaway costs",
                "Audit trail logged for every decision",
                "Manual trigger available for one-off runs",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#3AB0A2]" strokeWidth={2.5} />
                  <span className="text-[15px] text-white/85">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* RELATED */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Works with</Eyebrow>
            <SectionH2>Part of a coordinated team.</SectionH2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Link href="/features/sourcer-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Before: Agent #1</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Sourcer Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Finds candidates daily. Hands off Sourced bucket to Triage.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3AB0A2]">
                Learn about Sourcer <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link href="/features/outreach-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">After: Agent #3</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Outreach Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Picks up shortlisted candidates from Triage. Sends personalized email within 5 minutes.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B]">
                Learn about Outreach <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8 lg:p-16">
            <Eyebrow color="teal">Get started</Eyebrow>
            <SectionH2>
              Less manual review.
              <br />
              <span className="italic">More signal.</span>
            </SectionH2>
            <Lede className="mt-6">
              Triage Agent is included in Pro and Business plans.
              Free 5-day trial — no credit card required.
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
