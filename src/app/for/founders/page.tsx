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
import { dashboardScreenshot, outreachScreenshot } from "@/lib/screenshots";
import { ArrowRight, Check, Zap, Target, Globe, TrendingUp, Shield, Users } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const PAINS = [
  {
    title: "You’re the recruiter and you don’t want to be",
    body: "Every hour you spend Boolean-searching LinkedIn is an hour not spent on the product, the customers, the round. But you can’t hand it off — you don’t have anyone to hand it to.",
  },
  {
    title: "Agencies want $25K + 6 months of relationship",
    body: "You need to hire next month. Agencies want to scope, call, retain, and stretch the search. Their incentive is to take longer; yours is to move now.",
  },
  {
    title: "Your job posts disappear into the void",
    body: "You posted on LinkedIn. Got 200 unqualified resumes and 0 actual leads. The 1% of candidates you actually want are passive — they never see job posts.",
  },
  {
    title: "Every hire is your first hire",
    body: "You’re hiring roles you’ve never hired before. You don’t have a calibrated screen, you don’t know the market rate, you don’t have a pipeline. You’re flying blind.",
  },
];

const PLATFORM_PIECES = [
  {
    icon: Target,
    title: "Sourcer Agent",
    body: "You write the job once. Every morning at 6am, the Sourcer pulls 5 fresh candidates that match — from a 3B+ profile database. No more LinkedIn rabbit holes.",
  },
  {
    icon: Zap,
    title: "Triage Agent",
    body: "Auto-rejects bad-fit candidates, escalates good ones. Your pipeline self-organizes while you’re building product.",
  },
  {
    icon: Users,
    title: "Outreach Agent",
    body: "Personalized outreach to every candidate, written in your voice, referencing their actual background and why your company is interesting. Reads like a founder writing at midnight — because that’s the voice we trained it on.",
  },
  {
    icon: Shield,
    title: "Reply Agent",
    body: "Inbound replies sorted, drafted, ready for your two-click approval. No replies dropped. No promising candidates ghosted because you forgot to follow up.",
  },
  {
    icon: Globe,
    title: "Marketplace + 100+ ATS Networks",
    body: "Post your job once. It hits the OpusRoster marketplace and gets boosted to 100+ ATS networks and job boards — Indeed, LinkedIn, AngelList, niche boards. Apps come straight into your pipeline.",
  },
  {
    icon: TrendingUp,
    title: "Interview Scheduling",
    body: "When a candidate says yes, OpusRoster auto-schedules the call via your Cal.com. You go from cold sourcing to a calendar invite without lifting a finger.",
  },
];

const MATH = [
  { number: "$89/mo", label: "Pro plan", sub: "Less than your AWS bill" },
  { number: "5 days", label: "Free trial, 50 candidates", sub: "See your first hire pipeline before you pay" },
  { number: "0", label: "Hours of Boolean searching", sub: "Per week, going forward" },
  { number: "1 founder", label: "Replaces a sourcing recruiter", sub: "While building your company" },
];

export default function ForFoundersPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>For Founders Hiring</Eyebrow>
            <DisplayH1>
              Hire your first <Em>10 employees</Em><br />
              without becoming a <Underline>recruiter.</Underline>
            </DisplayH1>
            <Lede>
              Founders shouldn’t be the source-of-record for sourcing. But until you can afford a TA hire, the work falls on you. OpusRoster runs your top-of-funnel — sourcing, outreach, replies, scheduling — so the only thing you do is the closing call. The part you’re actually good at.
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
            <Eyebrow>Why founders get stuck</Eyebrow>
            <SectionH2>
              Hiring is the <Em>second-most-important thing</Em> you do. And the <Underline>least leveraged.</Underline>
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
              Your <Underline>recruiting team in a tab.</Underline>
            </SectionH2>
            <Lede>
              Most founders cobble together LinkedIn Recruiter, a CRM, an email tool, and a calendar. OpusRoster is all of it — sourcing, scoring, outreach, replies, scheduling, distribution — in one platform that runs while you’re heads-down.
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
            <Eyebrow>Outreach that actually converts</Eyebrow>
            <SectionH2>Personalized. Per candidate. <Em>Every time.</Em></SectionH2>
            <Lede>
              No mail-merge. The Outreach Agent reads each candidate’s background, your role, and writes a real email. Reply rates 3–5x what you’d get from a templated blast.
            </Lede>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProductScreenshot
              src={outreachScreenshot}
              alt="Personalized outreach email composed by OpusRoster"
              blurRegions={[{ top: "20%", height: "60%", left: "30%", right: "5%" }]}
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
              <Em>$89/month</Em> vs. 10 hours/week of your time.
            </SectionH2>
            <Lede>
              If your time is worth even $50/hour, OpusRoster pays for itself the first day. If it’s worth $500/hour (it is), it’s the highest-ROI subscription you’ll buy this year.
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
            <Eyebrow>Reach candidates LinkedIn won’t show you</Eyebrow>
            <SectionH2>
              Your job, on <Underline>100+ networks</Underline>. While you sleep.
            </SectionH2>
            <Lede>
              Most founders post on LinkedIn and call it done. OpusRoster syndicates every job to the OpusRoster marketplace and 100+ ATS networks — Indeed, AngelList, niche boards, regional aggregators — so passive and active candidates both find you. Apps flow into your pipeline automatically.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* PLAN */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>Which plan</Eyebrow>
            <SectionH2>For founders, start on <Em>Pro</Em>.</SectionH2>
            <Lede>
              You’re probably hiring 1–3 roles at a time. Pro’s 350 candidates/month and 5 active jobs is plenty. When you grow past 5 simultaneous reqs or want full autopilot sourcing, Business is the upgrade.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card>
              <div className="text-sm font-medium text-teal mb-2">Pro — $89/mo ← recommended</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">For founders hiring 1–5 roles</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />5 active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />350 sourced candidates/mo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Triage Agent (daily)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Outreach + Reply agents</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Marketplace distribution</li>
              </ul>
            </Card>
            <Card>
              <div className="text-sm font-medium text-graphite/60 mb-2">Business — $230/mo</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">When you’re hiring 6+ at once</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Unlimited active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />1,000 candidates/mo</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Full Sourcer autopilot</li>
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
              Get back to <Em>building.</Em>
            </SectionH2>
            <p className="mt-6 text-lg text-graphite/70">
              5 days free. 50 candidates sourced. Try it before your next investor update.
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
