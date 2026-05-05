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
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  FileText,
  Scale,
  Database,
  Server,
  Users,
  Mail,
  CheckCircle2,
} from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "All data is encrypted in transit (TLS 1.3) and at rest. Database connections use SSL. API tokens are hashed. Passwords are never stored — we use industry-standard credential providers and OAuth flows for sign-in.",
  },
  {
    icon: Database,
    title: "Row-level security",
    body: "Every database query is filtered by organization. Your data is isolated from every other customer at the database layer, not just the application layer. A bug in our code cannot leak another customer’s data — the database itself enforces the boundary.",
  },
  {
    icon: Server,
    title: "Infrastructure on enterprise providers",
    body: "OpusRoster runs on Supabase (Postgres, Auth, Storage) and Vercel (compute, edge network). Both are SOC 2 compliant providers used by Fortune 500 companies. Data centers are in the United States; we do not move customer data outside the US.",
  },
  {
    icon: Eye,
    title: "Audit logs on everything",
    body: "Every meaningful action — every email sent, every candidate scored, every job edited, every plan upgrade — is logged with timestamp, actor, and context. You can audit every action your team or our agents take on your behalf.",
  },
];

const AI_PRINCIPLES = [
  {
    title: "Nothing auto-sends without your authorization",
    body: "Outreach emails are drafted by AI but only sent after a recruiter approves them — or after you explicitly enable Autopilot for a specific role. We never blast emails on your behalf without consent. There is no “oops, the AI sent 200 cold emails” failure mode in OpusRoster.",
  },
  {
    title: "Every score is explainable",
    body: "When the Sourcer or Triage Agent assigns a fit score to a candidate, it shows you the reasoning: matching skills, location alignment, experience signals, gaps. No black-box scoring. You can audit why any candidate ranked where they did, and override the score if you disagree.",
  },
  {
    title: "Bias-aware by design",
    body: "Our scoring prompts explicitly exclude protected characteristics from consideration: age, gender, ethnicity, marital status, national origin. Outreach templates are reviewed for inclusive language. We log every prompt and output so we can audit for drift.",
  },
  {
    title: "You can turn it off",
    body: "Every AI agent can be paused globally or per-job with one click. If you want to take over a candidate manually, “Lock to me” removes that candidate from agent control. The platform works fully without any AI features enabled — the agents are leverage, not lock-in.",
  },
];

const COMPLIANCE_AREAS = [
  {
    icon: Scale,
    title: "EEO-aware outreach",
    body: "Outreach templates use inclusive, role-focused language. We avoid age-coded terms, gendered descriptors, and exclusionary phrasing. Every email is logged and auditable for compliance review.",
  },
  {
    icon: FileText,
    title: "Data subject rights",
    body: "Candidates can request data deletion at any time. We honor opt-out requests within 24 hours. Every outreach email includes a clear opt-out path. You can export or delete a candidate’s record from the platform with one click.",
  },
  {
    icon: Users,
    title: "Recruiter accountability",
    body: "Every action on the platform is tied to a specific user account. Multi-recruiter agencies and TA teams have full visibility into who did what, when, and why. No anonymous actions.",
  },
  {
    icon: Mail,
    title: "Email deliverability",
    body: "We enforce SPF, DKIM, and DMARC on all outbound email. We respect bounces and unsubscribes globally. We do not send through unverified senders. Recruiter sender verification is part of onboarding.",
  },
];

const DATA_HANDLING = [
  {
    label: "Where is my data stored?",
    body: "All customer data is stored in US-based Supabase Postgres infrastructure (AWS us-east-1). We do not store data outside the United States.",
  },
  {
    label: "Who can access my data?",
    body: "Only authorized users from your organization, plus a small number of OpusRoster engineers for support purposes — logged and audited. We do not share customer data with third parties for advertising, training, or any commercial purpose.",
  },
  {
    label: "Is my candidate data used to train AI?",
    body: "No. Your candidate data is never used to train AI models — ours, OpenAI’s, Anthropic’s, or anyone else’s. We use AI providers under contracts that explicitly forbid training on customer data.",
  },
  {
    label: "What happens if I cancel?",
    body: "You can export all your data — candidates, jobs, conversations, audit logs — in standard CSV/JSON formats at any time. After cancellation, your data is retained for 30 days for restoration, then permanently deleted.",
  },
  {
    label: "How do you handle PDL data?",
    body: "Sourcing data from People Data Labs is fetched on-demand, scored against your role, and stored only for candidates you choose to engage with. Profiles you reject are not retained beyond the search session.",
  },
];

export default function TrustPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Trust & Security</Eyebrow>
            <DisplayH1>
              Built for the work that <Em>matters most.</Em><br />
              Secured like the data <Underline>demands.</Underline>
            </DisplayH1>
            <Lede>
              Recruiting data is some of the most sensitive information a business handles — personal contact details, employment history, salary expectations, candidate evaluations. OpusRoster is built from the ground up to protect it: encrypted infrastructure, row-level isolation, explainable AI, and audit logs on every action. No black boxes. No surprises.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* SECURITY */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Security</Eyebrow>
            <SectionH2>
              Your data, <Em>protected at every layer.</Em>
            </SectionH2>
            <Lede>
              Security isn’t a feature — it’s a precondition. We treat customer data like the production database of a regulated business, because for many of our customers, it is one.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SECURITY_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title}>
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">{p.title}</h3>
                  <p className="text-graphite/70 leading-relaxed">{p.body}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* AI ETHICS */}
      <div className="bg-navy">
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>AI Ethics</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight">
              The agents do the <Em>work</Em>.<br />
              You make the <Underline>calls.</Underline>
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              AI in recruiting only works if recruiters can trust it. Trust comes from transparency, control, and predictable behavior. Here is exactly how OpusRoster’s AI is designed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {AI_PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-mint shrink-0 mt-0.5" />
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <p className="text-white/75 leading-relaxed text-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      </div>

      {/* COMPLIANCE */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Compliance</Eyebrow>
            <SectionH2>
              Recruiting law is <Em>non-negotiable.</Em><br />
              We build for it from the start.
            </SectionH2>
            <Lede>
              Equal-opportunity hiring, candidate data rights, opt-out enforcement, deliverability standards — these aren’t edge cases. They’re the operating environment of every serious recruiter. OpusRoster is designed so that doing the right thing is the default, not an extra step.
            </Lede>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {COMPLIANCE_AREAS.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title}>
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-graphite mb-3">{c.title}</h3>
                  <p className="text-graphite/70 leading-relaxed">{c.body}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* DATA HANDLING FAQ */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>Data handling</Eyebrow>
            <SectionH2>
              Direct answers to the <Em>questions you should ask.</Em>
            </SectionH2>
            <Lede>
              If you’re evaluating OpusRoster for a TA team, an agency, or a staffing firm — these are the questions your security or legal team will ask. We’ve answered them upfront so you don’t have to chase us for them.
            </Lede>
          </div>
          <div className="space-y-6 max-w-4xl">
            {DATA_HANDLING.map((q) => (
              <div
                key={q.label}
                className="p-6 rounded-xl bg-white border border-graphite/10"
              >
                <h3 className="text-lg font-semibold text-graphite mb-3 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  {q.label}
                </h3>
                <p className="text-graphite/70 leading-relaxed pl-8">{q.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* RESPONSIBLE DISCLOSURE */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Responsible disclosure</Eyebrow>
            <SectionH2>
              Found a security issue? <Em>Tell us.</Em>
            </SectionH2>
            <Lede>
              We take security reports seriously. If you discover a vulnerability in OpusRoster — in the application, the API, the marketing site, or anywhere else — please report it directly to our security team.
            </Lede>
            <div className="mt-8 p-6 rounded-xl bg-cream border border-graphite/10">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-graphite">security@opusroster.com</div>
                  <div className="text-sm text-graphite/60 mt-1">
                    We acknowledge reports within 48 hours and work with researchers in good faith. No legal action against researchers acting in good faith. No ransom demands. No silent fixes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionH2>
              Recruiting platform built like the <Em>infrastructure it is.</Em>
            </SectionH2>
            <p className="mt-6 text-lg text-graphite/70">
              5 days free. 50 candidates sourced. See for yourself how a serious platform handles serious data.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>
                Start free trial <ArrowRight className="w-4 h-4 ml-2" />
              </PrimaryButton>
              <SecondaryButton href="/about">Read our mission</SecondaryButton>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
