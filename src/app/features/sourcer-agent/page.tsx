// src/app/features/sourcer-agent/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { Search, Clock, Shield, Filter, Check, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Sourcer Agent — Daily auto-sourcing while you sleep",
};

export default function SourcerAgentPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="teal">Agent #1 of 5</Eyebrow>
            <DisplayH1>
              Sources candidates daily.
              <br />
              <span className="italic">While you <Underline color="teal">sleep</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Every morning at 6 AM, AI searches 800M+ profiles for each of your active jobs.
              Filters by your specific title and location. Scores honestly — no inflated 95% matches.
              Auto-shortlists only candidates that genuinely fit.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-[#2A2D30]/55">
              Available on the Business plan · 5 candidates per job per day
            </p>
          </div>
        </Container>
      </Section>

      {/* WHAT IT DOES */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow color="navy">What it does</Eyebrow>
              <SectionH2>
                Hunting for candidates,
                <br />
                <span className="italic">without the hunt.</span>
              </SectionH2>
              <Lede className="mt-6">
                Most recruiters spend 3-6 hours daily searching LinkedIn, posting on job boards,
                copying candidate details into trackers. Sourcer Agent does that work overnight.
                You wake up to a curated shortlist.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                { icon: Clock, title: "Runs at 6 AM UTC", desc: "Every active job gets searched. You get fresh candidates before you start your day." },
                { icon: Filter, title: "Smart query construction", desc: "AI translates your job title and location into a PDL search. Sourcer Manager isn't searched as 'Engineer' by accident." },
                { icon: Shield, title: "Honest scoring", desc: "Strict scoring catches mismatches. A scheduling specialist won't be scored 95 just because PDL returned them." },
                { icon: Search, title: "5 candidates per job per day", desc: "Configurable cap prevents pipeline overflow. Set per-job thresholds to fine-tune fit requirements." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3AB0A2]/10 text-[#3AB0A2]">
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

      {/* HOW IT WORKS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">How it works</Eyebrow>
            <SectionH2>Three steps. No supervision required.</SectionH2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Reads your job",
                desc: "AI parses title, skills, location, experience requirements. Builds an optimal PDL search query.",
              },
              {
                step: "02",
                title: "Searches & scores",
                desc: "Pulls matching profiles. Sonnet 4.6 scores each candidate against the actual job description with strict domain validation.",
              },
              {
                step: "03",
                title: "Shortlists & alerts",
                desc: "Candidates scoring 80+ auto-move to Shortlisted. The rest stay Sourced for your review. Outreach Agent picks up Shortlisted within 5 minutes.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-3xl border border-[#2A2D30]/10 bg-white p-8">
                <div className="font-display text-5xl text-[#3AB0A2]">{s.step}</div>
                <h3 className="mt-4 font-display text-2xl text-[#2A2D30]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#2A2D30]/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY IT'S DIFFERENT */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow color="coral">Why it's different</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
              Other AI tools say <span className="italic text-[#FF6B6B]">95% fit</span>.
              <br />
              We tell you the truth.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Most AI sourcing tools default to inflated scores to look impressive.
              You end up emailing 50 candidates who don't fit, hurting your sender reputation
              and wasting weeks. We score strictly: a CEO scored against a Scheduling Specialist
              gets a 12, not a 95. That's the honest answer.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "DOMAIN_KEYWORDS validation catches role mismatches",
                "Title-overlap scoring prevents inflated matches",
                "Auto-caps poor fits at 25 (not 80+)",
                "Audit trail for every score and decision",
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

      {/* RELATED AGENTS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Works with</Eyebrow>
            <SectionH2>Part of a coordinated team.</SectionH2>
            <Lede className="mt-6">
              Sourcer hands off to Triage, which hands off to Outreach.
              Each agent has one job. Together they run your pipeline.
            </Lede>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Link href="/features/triage-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Next: Agent #2</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Triage Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Reviews shortlisted candidates every 4 hours. Catches inflated scores, retires stale fits.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3AB0A2]">
                Learn about Triage <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link href="/features/outreach-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Then: Agent #3</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Outreach Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Personalizes every email based on candidate background. Multi-step follow-ups.</p>
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
              Stop hunting.
              <br />
              <span className="italic">Start hiring.</span>
            </SectionH2>
            <Lede className="mt-6">
              Sourcer Agent is included in the Business plan.
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
