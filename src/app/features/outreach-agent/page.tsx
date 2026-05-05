// src/app/features/outreach-agent/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { Send, Sparkles, Mail, Eye, Check, ArrowRight } from "lucide-react";
import ProductScreenshot from "@/components/marketing/ProductScreenshot";
import { outreachScreenshot } from "@/lib/screenshots";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Outreach Agent — Personal at scale",
};

export default function OutreachAgentPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="teal">Agent #3 of 5</Eyebrow>
            <DisplayH1>
              Personal.
              <br />
              <span className="italic">Not a <Underline color="teal">template</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Within 5 minutes of shortlisting, AI drafts a unique email per candidate.
              Based on their actual background — current company, recent role, why they fit
              this specific job. No "Hi {`{first_name}`}" generic blasts.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHY IT MATTERS */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="navy">Why it matters</Eyebrow>
            <SectionH2>
              Generic outreach
              <br />
              <span className="italic">gets ignored.</span>
            </SectionH2>
            <Lede className="mt-6">
              Senior candidates get 30+ recruiter emails a week. They open the ones that
              actually mention their work. Templated "I saw your profile" messages
              go straight to trash. Personalized ones get 4-6x reply rates.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* WHAT IT DOES */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow color="coral">How it personalizes</Eyebrow>
              <SectionH2>
                Reads context.
                <br />
                <span className="italic">Writes accordingly.</span>
              </SectionH2>
              <Lede className="mt-6">
                Each email is built from candidate's profile + your job description.
                Mentions specific work history, fit reasons, and a clear next step.
                Honest "powered by AI" disclosure included in footer.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                { icon: Sparkles, title: "Per-candidate personalization", desc: "Pulls from current role, company, recent projects when available." },
                { icon: Mail, title: "Multi-step follow-up sequences", desc: "Initial email + day-3 follow-up + day-7 nudge. Stops automatically when candidate replies." },
                { icon: Send, title: "Within 5 minutes of shortlist", desc: "Cron picks up new shortlisted candidates and sends within minutes — no batch delays." },
                { icon: Eye, title: "Honest AI disclosure", desc: "Footer says 'Powered by AI · Recruiter reviews all replies'. Builds trust, not deception." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B6B]/10 text-[#FF6B6B]">
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

      {/* COMPARISON */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow color="coral">The difference</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
              "Hi {`{first_name}`}"
              <br />
              <span className="italic text-[#B7E4C7]">vs. an actual conversation.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Most "AI outreach" tools fill a template with name and company.
              Ours reads the candidate's actual background, finds the angle that's relevant
              to your job, and writes from there. Same workflow speed, dramatically higher reply rates.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "Mentions specific work history",
                "Tailored fit reasoning per candidate",
                "Honest AI disclosure builds trust",
                "Auto-pause when candidate replies",
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
            <Link href="/features/triage-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Before: Agent #2</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Triage Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Decides who's shortlisted. Hands off to Outreach for first contact.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B]">
                Learn about Triage <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link href="/features/reply-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">After: Agent #4</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Reply Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">When candidates reply, classifies the sentiment, drafts response, escalates ambiguous.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3AB0A2]">
                Learn about Reply <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
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
              Stop blasting.
              <br />
              <span className="italic">Start connecting.</span>
            </SectionH2>
            <Lede className="mt-6">
              Outreach Agent is included in Pro and Business plans.
              Free 5-day trial — no credit card required.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Start free trial</PrimaryButton>
              <SecondaryButton href="/pricing">View pricing</SecondaryButton>
            </div>
          </div>
        </Container>
      </Section>
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Eyebrow>See it in action</Eyebrow>
            <SectionH2 className="mt-4">Personalized outreach, written for each candidate</SectionH2>
            <p className="mt-6 text-lg text-graphite/70">Every email references the candidate’s actual background. No “Hi {{firstName}}” templates. No mass blasts. Reads like you wrote it.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProductScreenshot
              src={outreachScreenshot}
              alt="OpusRoster outreach modal showing a personalized email being sent"
              blurRegions={[{ top: "30%", bottom: "10%", left: "8%", right: "8%", height: "auto" }]}
            />
          </div>
        </Container>
      </section>

    </>
  );
}
