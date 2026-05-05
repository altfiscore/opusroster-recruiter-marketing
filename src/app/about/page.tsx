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
import { ArrowRight, Globe, Users, Target, Zap } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://opus-rosterrecruiter.vercel.app";

const PRINCIPLES = [
  {
    icon: Target,
    title: "Hiring is leverage",
    body: "Every great company is downstream of its first ten hires. Every hire after that compounds — or dilutes. The recruiting function shouldn't be the place where leverage goes to die in spreadsheets and Boolean searches.",
  },
  {
    icon: Zap,
    title: "AI does the work. Humans do the judgment.",
    body: "Sourcing, scoring, outreach, reply triage — these are pattern-matching tasks that machines do faster and more consistently than people. Closing a candidate, reading the room, deciding who joins your team — that's human work. We draw the line clearly.",
  },
  {
    icon: Globe,
    title: "Distribution is the unfair advantage",
    body: "The best candidate for your role is probably not browsing job boards. They're not even looking. OpusRoster's marketplace + 100+ ATS network integration means every job you post reaches both halves of the market — active applicants and passive candidates — without you running ten different campaigns.",
  },
  {
    icon: Users,
    title: "Small teams should have Fortune 500 firepower",
    body: "Major staffing firms spend millions on recruiting tech. Solo recruiters and growth-stage TA teams shouldn't have to compete with one hand tied behind their back. Same tools. Same reach. A fraction of the cost.",
  },
];

const NUMBERS = [
  { number: "3B+", label: "Profiles in our sourcing database" },
  { number: "100+", label: "ATS networks where your jobs appear" },
  { number: "6", label: "AI agents running your recruiting workflow" },
  { number: "$89", label: "Starting price per month" },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>Our mission</Eyebrow>
            <DisplayH1>
              Hiring is the <Em>highest-leverage decision</Em><br />
              a company makes.<br />
              It deserves <Underline>better tools.</Underline>
            </DisplayH1>
            <Lede>
              For decades, recruiting tech has optimized the wrong things — bigger ATS databases, more sophisticated Boolean operators, prettier dashboards over the same broken workflow. Meanwhile, the people doing the work — recruiters, TA leaders, founders — are still spending most of their day on tasks that should run themselves.
            </Lede>
            <Lede>
              We started OpusRoster to change the shape of the work. Not to add another tool to your stack — to replace half the stack.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* WHAT WE BELIEVE */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>What we believe</Eyebrow>
            <SectionH2>
              Four ideas that shape <Em>everything</Em> we build.
            </SectionH2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => {
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

      {/* NOT JUST A TOOL */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>What makes us different</Eyebrow>
            <SectionH2>
              We are not <Em>another tool</Em>.<br />
              We are a <Underline>distribution engine.</Underline>
            </SectionH2>
            <Lede>
              Most recruiting platforms ask you to bring your own candidates. You sign up, you connect your LinkedIn, you do the work. OpusRoster works the other way: every job you post is automatically syndicated to the OpusRoster candidate marketplace and boosted to 100+ ATS networks, niche boards, and aggregators.
            </Lede>
            <Lede>
              That means a job posted on OpusRoster gets roughly <Em>100x the visibility</Em> of a job posted on a single site. Your role appears on Indeed, LinkedIn, Dice, AngelList, Glassdoor, ZipRecruiter, regional aggregators, niche industry boards — without you logging into any of them. Active applicants find you. Passive candidates get sourced and outreached. Both pipelines feed into one unified workflow.
            </Lede>
            <Lede>
              That's why we say OpusRoster is not just a recruiting tool. It's the entire recruiting function — discovery, distribution, scoring, outreach, scheduling, and pipeline management — running in one platform, twenty-four hours a day.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* THE NUMBERS */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <Eyebrow>By the numbers</Eyebrow>
            <SectionH2>
              The reach of an enterprise team. The cost of a <Em>SaaS subscription.</Em>
            </SectionH2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NUMBERS.map((n) => (
              <Card key={n.label}>
                <div className="text-5xl font-serif text-teal mb-3">{n.number}</div>
                <div className="text-sm font-medium text-graphite">{n.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* HOW WE THINK ABOUT AI */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>How we think about AI</Eyebrow>
            <SectionH2>
              The agents do the <Em>work</Em>.<br />
              You make the <Underline>calls.</Underline>
            </SectionH2>
            <Lede>
              Every AI feature in OpusRoster is designed to run by default but defer to humans on demand. The Sourcer pulls candidates — but you set the fit threshold. The Outreach Agent drafts emails — but you approve them. The Reply Agent classifies replies — but you can override its read of any conversation.
            </Lede>
            <Lede>
              We never auto-send anything you haven't explicitly authorized. We never make hiring decisions for you. We never hide what the AI is doing — every action is logged, every email is auditable, every score is explainable.
            </Lede>
            <Lede>
              That's the deal: you keep the judgment, we automate the grind.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* WHO WE BUILD FOR */}
      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <Eyebrow>Who we build for</Eyebrow>
            <SectionH2>
              Anyone whose job depends on <Em>finding the right people.</Em>
            </SectionH2>
            <Lede>
              We don't believe recruiting tech should be segmented. The agency owner with eight retainers, the in-house TA partner running twenty reqs, the founder hiring their first engineer, the staffing recruiter pushing thirty contractors a month — they're all doing the same fundamental work. Find good candidates. Get them interested. Move them through a pipeline. Close.
            </Lede>
            <Lede>
              OpusRoster is built so the same platform serves all of them. The agents adapt to the workload. The pricing scales with usage. The marketplace and ATS distribution work the same whether you're posting one job or two hundred.
            </Lede>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {[
              { label: "Recruiting agencies", href: "/for/agencies" },
              { label: "In-house TA teams", href: "/for/in-house" },
              { label: "Founders hiring", href: "/for/founders" },
              { label: "Staffing firms", href: "/for/staffing-firms" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-6 rounded-xl border border-graphite/10 bg-white hover:border-teal hover:shadow-md transition group"
              >
                <span className="text-graphite font-medium group-hover:text-teal transition">
                  {item.label}
                </span>
                <ArrowRight className="w-4 h-4 text-graphite/40 mt-3 group-hover:text-teal transition" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHERE WE'RE GOING */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Where we're going</Eyebrow>
            <SectionH2>
              The future of recruiting is <Em>fewer tools, more leverage.</Em>
            </SectionH2>
            <Lede>
              In a few years, the idea of running a recruiting workflow across a sourcing tool, an ATS, an email platform, a CRM, a scheduling app, and a job-distribution service will feel as outdated as printing resumes. Recruiting will run on a single platform that handles end-to-end workflow, integrates everywhere, and lets a recruiter focus on the parts of the job that require taste, judgment, and human connection.
            </Lede>
            <Lede>
              That's what we're building. We're early — and we'd rather be honest about that than pretend otherwise. The platform you see today is the foundation. The roadmap is ambitious. The thesis isn't going to change.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionH2>
              Try the <Em>recruiting platform</Em><br />
              built for the way work <Underline>actually happens.</Underline>
            </SectionH2>
            <p className="mt-6 text-lg text-graphite/70">
              5 days free. 50 candidates sourced. See what one platform with 100x reach can do for your pipeline.
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
