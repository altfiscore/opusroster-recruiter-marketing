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
import { dashboardScreenshot, candidatesScreenshot } from "@/lib/screenshots";
import { ArrowRight, Check, Zap, Target, Globe, TrendingUp, Shield, Users } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const PAINS = [
  {
    title: "Your ATS is a graveyard, not a pipeline",
    body: "Thousands of resumes go in. Maybe 5% ever get a human read. The other 95% silently age out while your hiring managers ask why nothing’s moving.",
  },
  {
    title: "You’re paying agencies because internal sourcing can’t keep up",
    body: "Every contingent fee is a tax on TA capacity. $25–30K per hire. And the agency just sourced from the same LinkedIn search you would’ve.",
  },
  {
    title: "Your sourcers are burning out on Boolean",
    body: "Senior TA partners spending their day on x-ray searches and copy-pasting profiles into spreadsheets. That’s not what you hired them for.",
  },
  {
    title: "Hiring managers think TA is slow",
    body: "Time-to-shortlist is the metric they remember. Every day a role sits open costs them productivity — and your team takes the heat.",
  },
];

const PLATFORM_PIECES = [
  {
    icon: Target,
    title: "Sourcer Agent",
    body: "Pulls 5 fresh, scored candidates per role per day from PDL’s 3B+ profile database. Filters by your fit threshold. Your sourcers wake up to a pre-qualified shortlist instead of a blank Boolean.",
  },
  {
    icon: Zap,
    title: "Triage Agent",
    body: "Re-scores your existing pipeline every 4 hours. Auto-rejects stale low-fit applicants. Promotes hidden gems your team missed in the resume pile.",
  },
  {
    icon: Users,
    title: "Outreach Agent",
    body: "Personalized cold outreach at the volume only AI can produce — with the personalization a recruiter would. References each candidate’s specific background, your role, your EVP. No “Hi {firstName}”.",
  },
  {
    icon: Shield,
    title: "Reply Agent",
    body: "Inbound replies sorted into Interested / Declined / Needs Review. AI drafts responses. Your team approves in two clicks. No reply gets dropped.",
  },
  {
    icon: Globe,
    title: "Marketplace + Distribution",
    body: "Every req auto-posts to the OpusRoster marketplace and 100+ ATS networks — Indeed, LinkedIn, niche boards, regional aggregators. You stop paying for separate job-posting subscriptions.",
  },
  {
    icon: TrendingUp,
    title: "Hiring Manager Portal",
    body: "Hiring managers see shortlists, leave structured feedback, schedule interviews — without bothering you for status updates. Branded with your company.",
  },
];

const MATH = [
  { number: "$25K–30K", label: "Average agency fee per placement", sub: "Eliminate it for most roles" },
  { number: "1,000", label: "Sourced candidates per month", sub: "On Business plan" },
  { number: "<24 hrs", label: "Time-to-shortlist", sub: "Down from 5–7 days" },
  { number: "$230/mo", label: "Per recruiter, all-in", sub: "Less than one sponsored job post" },
];

export default function ForInhousePage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>For In-house TA Teams</Eyebrow>
            <DisplayH1>
              <Em>Stop paying agencies.</Em><br />
              Build the <Underline>recruiting machine</Underline> they wish they were.
            </DisplayH1>
            <Lede>
              In-house TA teams have one structural problem: you’re asked to compete with agencies on speed, quality, and reach — with a fraction of the headcount. OpusRoster gives you the leverage. Sourcing, scoring, outreach, reply management, and distribution — all running 24/7, all under your team’s control.
            </Lede>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>
                Start 5-day free trial <ArrowRight className="w-4 h-4 ml-2" />
              </PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-graphite/60">
              No credit card. 50 free credits. Cancel anytime.
            </p>
          </div>
        </Container>
      </Section>

      {/* PAIN */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Why TA teams burn out</Eyebrow>
            <SectionH2>
              You weren’t hired to do <Em>Boolean searches</Em> all day.
            </SectionH2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PAINS.map((p) => (
              <Card key={p.title}>
                <h3 className="text-xl font-semibold text-graphite mb-3">{p.title}</h3>
                <p className="text-graphite/70 leading-relaxed">{p.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* PLATFORM */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>The full platform</Eyebrow>
            <SectionH2>
              Six AI agents. <Underline>One unified pipeline.</Underline>
            </SectionH2>
            <Lede>
              OpusRoster isn’t a sourcing tool bolted onto an ATS. It’s the entire recruiting workflow — from discovery to hire — designed for a single recruiter to run what used to take a team of five.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORM_PIECES.map((piece) => {
              const Icon = piece.icon;
              return (
                <Card key={piece.title}>
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-graphite mb-2">{piece.title}</h3>
                  <p className="text-sm text-graphite/70 leading-relaxed">{piece.body}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* SCREENSHOT */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Eyebrow>Every candidate, scored</Eyebrow>
            <SectionH2>A talent pool that <Em>actually</Em> reflects fit.</SectionH2>
            <Lede>
              Stop scrolling through 200 resumes hoping for one match. OpusRoster ranks every candidate against the role, with reasoning you can audit.
            </Lede>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProductScreenshot
              src={candidatesScreenshot}
              alt="OpusRoster talent pool with fit-scored candidates"
              blurRegions={[{ top: "30%", height: "60%", left: "10%", right: "60%" }]}
            />
          </div>
        </Container>
      </Section>

      {/* MATH */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>The math</Eyebrow>
            <SectionH2>
              <Em>One placement</Em> pays for OpusRoster for the next decade.
            </SectionH2>
            <Lede>
              Average agency fee on a $100K role: $25–30K. OpusRoster Business is $2,760/year. The math is so lopsided we feel weird about it.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATH.map((m) => (
              <Card key={m.label}>
                <div className="text-4xl font-serif text-teal mb-2">{m.number}</div>
                <div className="text-sm font-medium text-graphite mb-1">{m.label}</div>
                <div className="text-xs text-graphite/60">{m.sub}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* DISTRIBUTION */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Beyond your ATS</Eyebrow>
            <SectionH2>
              Reach candidates your ATS will <Underline>never</Underline> see.
            </SectionH2>
            <Lede>
              Your applicants are 3% of the qualified market. The other 97% are passive candidates who never apply anywhere. OpusRoster’s Sourcer Agent finds them, the marketplace surfaces your roles to active job-seekers, and 100+ ATS network integrations make sure no qualified candidate slips through because they used a different platform.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* PLAN RECOMMENDATION */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>Which plan</Eyebrow>
            <SectionH2>For TA teams, <Em>Business</Em> is the floor.</SectionH2>
            <Lede>
              In-house teams typically run 10–40 active reqs at any given time. Pro’s 5-job cap is too tight for anything past a 3-person team. Business gives you unlimited active jobs and the full Sourcer Agent on autopilot.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card>
              <div className="text-sm font-medium text-graphite/60 mb-2">Pro — $89/mo</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">For 1–2 person teams</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />5 active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />350 sourced candidates/mo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Triage Agent (daily)</li>
              </ul>
            </Card>
            <Card>
              <div className="text-sm font-medium text-teal mb-2">Business — $230/mo ← recommended</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">For multi-recruiter TA teams</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Unlimited active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />1,000 sourced candidates/mo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Sourcer Agent (autopilot)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Hiring manager portal</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Marketplace + ATS distribution</li>
              </ul>
            </Card>
          </div>
          <div className="mt-12">
            <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>
              Start free trial <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionH2>
              Build a TA function that scales with <Em>headcount you don’t have to hire</Em>.
            </SectionH2>
            <p className="mt-6 text-lg text-graphite/70">
              5 days free. 50 candidates sourced. See your pipeline transform before you commit a dollar.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>
                Start free trial <ArrowRight className="w-4 h-4 ml-2" />
              </PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
