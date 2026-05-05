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
import { dashboardScreenshot, pipelineScreenshot } from "@/lib/screenshots";
import { ArrowRight, Check, Zap, Target, Globe, TrendingUp, Shield, Users } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const PAINS = [
  {
    title: "You're billing for time you spend on grunt work",
    body: "Sourcing, screening, and chasing replies eats 60% of every search. Your placement fees are subsidizing tasks AI does in seconds.",
  },
  {
    title: "Adding clients means adding recruiters",
    body: "Every new retainer means another headcount, another desk, another $80K+ salary. Margins compress with every win.",
  },
  {
    title: "Your candidates ghost \u2014 and you find out a week late",
    body: "Replies hit personal inboxes. Auto-responders confuse follow-up. By the time you notice, the warm lead is cold or gone.",
  },
  {
    title: "Clients want a portal. You're sending PDFs.",
    body: "Every modern agency you compete with offers a branded client portal. You're still emailing zip files of resumes.",
  },
];

const PLATFORM_PIECES = [
  {
    icon: Target,
    title: "Sourcer Agent",
    body: "Wakes up at 6am every day, pulls 5 fresh candidates per active role from PDL\u2019s 3B+ profile database, scores each against your job requirements. Only candidates above your fit threshold get auto-shortlisted.",
  },
  {
    icon: Zap,
    title: "Triage Agent",
    body: "Every 4 hours, re-evaluates your pipeline. Auto-rejects stale low-fit candidates, escalates strong ones, keeps your kanban honest. No more graveyard pipelines.",
  },
  {
    icon: Users,
    title: "Outreach Agent",
    body: "Writes a personalized email per candidate \u2014 referencing their actual background, your specific role, the client\u2019s value prop. No mail-merge templates. Reads like you wrote it at 9am with coffee.",
  },
  {
    icon: Shield,
    title: "Reply Agent",
    body: "Classifies every inbound reply: Interested / Declined / Needs Review. Drafts a response. You approve in two clicks. Auto-schedules calls when candidates say yes.",
  },
  {
    icon: Globe,
    title: "Marketplace + ATS Distribution",
    body: "Every job you post auto-syndicates to the OpusRoster candidate marketplace and boosts to 100+ ATS networks and job boards. Candidates discover you, not the other way around.",
  },
  {
    icon: TrendingUp,
    title: "Client Portal",
    body: "White-label portal where your clients see shortlists, leave feedback, schedule interviews. Branded with your logo, your domain. They think you built it.",
  },
];

const MATH = [
  { number: "$89/mo", label: "Pro plan", sub: "vs $7,500/mo for one junior recruiter" },
  { number: "350", label: "Sourced candidates per month", sub: "Pro plan; Business is 1,000" },
  { number: "5 jobs", label: "Active simultaneously on Pro", sub: "Unlimited on Business" },
  { number: "8\u201312 hrs", label: "Saved per role per week", sub: "Sourcing + outreach + reply triage" },
];

export default function ForAgenciesPage() {
  return (
    <main>
      {/* HERO */}
      <Section className="pt-20 pb-16">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>For Recruiting Agencies</Eyebrow>
            <DisplayH1 className="mt-6">
              Bill for <Em>placements</Em>.<br />
              Not for <Underline>sourcing.</Underline>
            </DisplayH1>
            <Lede className="mt-8 max-w-3xl">
              Your team\u2019s time is the most expensive ingredient in every search. OpusRoster runs the parts of recruiting you shouldn\u2019t be paying senior people to do \u2014 sourcing, triage, outreach, reply management \u2014 so your recruiters spend their day on the work clients actually pay for: closing.
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
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>The agency margin trap</Eyebrow>
            <SectionH2 className="mt-4">
              You\u2019re running an <Em>arbitrage business</Em> on time you don\u2019t have.
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
      <Section className="py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>The full platform</Eyebrow>
            <SectionH2 className="mt-4">
              Not a tool. A <Underline>recruiting team</Underline> that doesn\u2019t take vacation.
            </SectionH2>
            <Lede className="mt-6">
              Most AI recruiting tools give you one thing \u2014 a sourcer, a chatbot, a scheduler. OpusRoster is the entire stack: discovery, scoring, outreach, reply management, scheduling, distribution, and client collaboration in one platform.
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
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Eyebrow>One dashboard. Every search.</Eyebrow>
            <SectionH2 className="mt-4">Run 20 retained searches like it\u2019s 2.</SectionH2>
            <Lede className="mt-6">
              Active jobs, sourced candidates, in-flight outreach, replies needing attention \u2014 every search, every client, in one view.
            </Lede>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProductScreenshot
              src={dashboardScreenshot}
              alt="OpusRoster dashboard showing multiple active searches"
              blurRegions={[{ top: "55%", height: "30%", left: "60%", right: "5%" }]}
            />
          </div>
        </Container>
      </Section>

      {/* MATH */}
      <Section className="py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>The math</Eyebrow>
            <SectionH2 className="mt-4">
              <Em>$89/month</Em> replaces what a junior recruiter does in a week.
            </SectionH2>
            <Lede className="mt-6">
              Most agencies pay $5K\u201315K/month for a sourcing recruiter. OpusRoster\u2019s Pro plan handles 350 candidates a month for less than the cost of a tank of gas. Business plan handles 1,000.
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
      <Section className="py-20 bg-navy text-white">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="text-mint">Distribution that works while you sleep</Eyebrow>
            <SectionH2 className="mt-4 text-white">
              Post once. Boosted to <Underline>100+ ATS networks</Underline>.
            </SectionH2>
            <Lede className="mt-6 text-white/80">
              Every job you post hits the OpusRoster candidate marketplace and gets syndicated to 100+ ATS networks, niche boards, and aggregators. Candidates apply directly into your pipeline \u2014 no extra ads, no separate dashboards, no recruiter time lost to copy-paste.
            </Lede>
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                "Indeed, LinkedIn, ZipRecruiter, Monster, Glassdoor",
                "Industry-specific boards (Dice, AngelList, Stack Overflow)",
                "Regional and niche aggregators",
              ].map((g) => (
                <div key={g} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-mint mt-0.5 shrink-0" />
                  <span className="text-sm text-white/90">{g}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* PLAN RECOMMENDATION */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>Which plan</Eyebrow>
            <SectionH2 className="mt-4">For agencies, start on <Em>Business</Em>.</SectionH2>
            <Lede className="mt-6">
              Pro fits solo recruiters and small shops with a few active retainers. Once you\u2019re juggling more than 5 active searches \u2014 or you want the full Sourcer Agent running daily across your desk \u2014 Business is the answer.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card>
              <div className="text-sm font-medium text-graphite/60 mb-2">Pro \u2014 $89/mo</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">For solo desks</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />5 active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />350 sourced candidates/mo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Triage Agent (daily)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Manual sourcing + AI outreach</li>
              </ul>
            </Card>
            <Card className="border-2 border-teal">
              <div className="text-sm font-medium text-teal mb-2">Business \u2014 $230/mo \u2190 recommended</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">For agencies running multiple desks</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Unlimited active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />1,000 sourced candidates/mo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Sourcer Agent (autopilot, 5/job/day)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Triage every 4 hours</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Unlimited clients + portal</li>
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
      <Section className="py-24 bg-cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionH2>
              Stop hiring recruiters.<br />
              <Em>Hire OpusRoster.</Em>
            </SectionH2>
            <p className="mt-6 text-lg text-graphite/70">
              5 days free. 50 candidates sourced. See your pipeline fill before you commit a dollar.
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
