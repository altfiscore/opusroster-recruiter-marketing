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
import { pipelineScreenshot, inboxScreenshot } from "@/lib/screenshots";
import { ArrowRight, Check, Zap, Target, Globe, TrendingUp, Shield, Users } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const PAINS = [
  {
    title: "Volume eats your margin",
    body: "Contract staffing runs on thin gross margins and high placement velocity. Every minute of recruiter time spent on sourcing is a minute not spent on submittals or redeployments.",
  },
  {
    title: "Your bench dies in 30 days",
    body: "You spent weeks building a database of contractors. By the time the next req comes in, half are placed elsewhere or have moved on. Re-sourcing the same talent over and over is the dirty secret of staffing.",
  },
  {
    title: "Compliance leaks kill you",
    body: "Recruiters sending personal-email outreach. No audit trail. No consistent EEO language. One bad email becomes a client problem becomes a contract loss.",
  },
  {
    title: "Your competitors are getting MSP-quality reach on a SMB budget",
    body: "Top staffing firms invest millions in sourcing tech. You can’t. But your clients judge you against them anyway.",
  },
];

const PLATFORM_PIECES = [
  {
    icon: Target,
    title: "Sourcer Agent",
    body: "Pulls fresh candidates daily across every active req — hundreds at a time. Scoring is consistent, bias-aware, and auditable. Your bench refreshes itself.",
  },
  {
    icon: Zap,
    title: "Triage Agent",
    body: "Re-scores your existing candidate database every 4 hours. Surfaces contractors coming off other engagements. Auto-rejects out-of-spec submissions before a human wastes time on them.",
  },
  {
    icon: Users,
    title: "Outreach Agent",
    body: "Personalized at scale. Every contractor gets a real email referencing their last engagement, their tech stack, and the new opportunity. Reply rates that templated mail-merge can’t touch.",
  },
  {
    icon: Shield,
    title: "Reply Agent + Compliance",
    body: "Every inbound classified, audit-trailed, drafted for human approval. Consistent EEO language. No rogue recruiter emails. Audit log on every action.",
  },
  {
    icon: Globe,
    title: "Marketplace + 100+ ATS Networks",
    body: "Every req auto-syndicates to the OpusRoster marketplace and 100+ ATS networks. Your contract roles reach passive candidates who never job-board-search. Volume distribution without volume cost.",
  },
  {
    icon: TrendingUp,
    title: "Multi-Client Pipeline",
    body: "Every client gets their own pipeline view, their own portal, their own branded experience. Your recruiters work one platform; your clients see what they need to see.",
  },
];

const MATH = [
  { number: "$230/mo", label: "Business plan", sub: "Per recruiter, all-in" },
  { number: "1,000", label: "Sourced candidates per month", sub: "Per seat. Add-on credits available." },
  { number: "Unlimited", label: "Active jobs simultaneously", sub: "Run your full desk on one platform" },
  { number: "100+", label: "ATS networks distributing your jobs", sub: "Indeed, LinkedIn, Dice, niche boards" },
];

export default function ForStaffingPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>For Staffing Firms</Eyebrow>
            <DisplayH1>
              Contract placements at <Em>MSP scale</Em>.<br />
              On a <Underline>SMB budget.</Underline>
            </DisplayH1>
            <Lede>
              Staffing firms compete on speed, volume, and bench depth. The big shops do it with seven-figure tech budgets and dedicated sourcing teams. OpusRoster gives you the same firepower — daily sourcing, automated outreach, intelligent triage, multi-client pipelines — for $230/mo per recruiter.
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
            <Eyebrow>Why staffing margins compress</Eyebrow>
            <SectionH2>
              Volume is your <Em>weapon</Em>. And your <Underline>weakness.</Underline>
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
              Every part of the staffing workflow. <Underline>Automated.</Underline>
            </SectionH2>
            <Lede>
              From discovery to submittal to compliance audit — OpusRoster runs the recruiting workflow end-to-end. Your team becomes a closing engine instead of a sourcing factory.
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
            <Eyebrow>Pipeline at staffing volume</Eyebrow>
            <SectionH2>Hundreds of candidates. <Em>One pipeline.</Em></SectionH2>
            <Lede>
              Triage moves candidates between stages automatically. Auto-rejects timed-out applicants. Surfaces hot replies. Your recruiters focus on submittals, not data entry.
            </Lede>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProductScreenshot
              src={pipelineScreenshot}
              alt="OpusRoster pipeline kanban with hundreds of candidates"
              blurRegions={[{ top: "20%", height: "75%", left: "20%", right: "5%" }]}
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
              <Em>$230/recruiter/month.</Em> Same firepower as the Fortune 500 staffing tech stack.
            </SectionH2>
            <Lede>
              Major staffing firms spend $1K–5K per recruiter per month on a stitched-together stack: Bullhorn + LinkedIn Recruiter + sourcing tool + email automation + scheduling. OpusRoster is one platform, one bill, one login.
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
            <Eyebrow>Distribution at staffing scale</Eyebrow>
            <SectionH2>
              <Underline>Every req</Underline>. Every network. <Em>Every day.</Em>
            </SectionH2>
            <Lede>
              Post once — OpusRoster syndicates to the marketplace, 100+ ATS networks, niche boards, and regional aggregators. Active candidates apply directly. Passive candidates get personalized outreach from the Sourcer Agent. You cover both halves of the market without doubling headcount.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* PLAN */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>Which plan</Eyebrow>
            <SectionH2>For staffing, <Em>Business</Em> is the only answer.</SectionH2>
            <Lede>
              Pro’s 5-job cap won’t fit a single staffing recruiter’s desk, let alone a firm. Business gives unlimited reqs, the Sourcer Agent on autopilot, and 1,000 sourced candidates per month per seat. Volume credits are available as add-ons for high-throughput desks.
            </Lede>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl">
            <Card>
              <div className="text-sm font-medium text-teal mb-2">Business — $230/mo per recruiter</div>
              <h3 className="text-2xl font-serif text-graphite mb-4">For staffing desks running real volume</h3>
              <ul className="space-y-2 text-sm text-graphite/80">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Unlimited active jobs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />1,000 sourced candidates per month per seat</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Sourcer Agent autopilot — 5 candidates per job per day</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Triage Agent every 4 hours</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Marketplace + 100+ ATS distribution</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Multi-client portals (white-labeled)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Volume credit add-ons available</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />Full audit trail — every email, every action</li>
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
              Outwork the giants. <Em>Out-tech them too.</Em>
            </SectionH2>
            <p className="mt-6 text-lg text-graphite/70">
              5 days free. 50 candidates sourced. See your bench refresh itself before you commit a dollar.
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
