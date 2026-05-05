// src/app/features/reply-agent/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { MessageSquare, ThumbsUp, ThumbsDown, AlertTriangle, Check, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Reply Agent — Reads context, knows when to escalate",
};

export default function ReplyAgentPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">Agent #4 of 5</Eyebrow>
            <DisplayH1>
              Reads replies.
              <br />
              <span className="italic">Knows when to <Underline color="coral">step back</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Classifies every candidate reply. Drafts contextual responses for clear cases.
              Escalates ambiguous ones to you with full conversation context.
              Out-of-office replies are detected and quietly suppressed.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* CLASSIFICATION */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="navy">How it classifies</Eyebrow>
            <SectionH2>
              Three categories.
              <br />
              <span className="italic">Three different actions.</span>
            </SectionH2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: ThumbsUp,
                color: "#3AB0A2",
                label: "Interested",
                action: "Drafts an enthusiastic response with next steps. Sends Cal.com booking link.",
              },
              {
                icon: ThumbsDown,
                color: "#FF6B6B",
                label: "Declined",
                action: "Politely accepts. Marks candidate as Closed. Logs reason for future analysis.",
              },
              {
                icon: AlertTriangle,
                color: "#1D3557",
                label: "Ambiguous",
                action: "Escalates to recruiter. Surfaces in your inbox with full context. No auto-response.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-[#2A2D30]/10 bg-[#F5F7FA] p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${item.color}15`, color: item.color }}
                >
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-2xl text-[#2A2D30]">{item.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#2A2D30]/65">{item.action}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHEN IT ESCALATES */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow color="teal">When it escalates</Eyebrow>
              <SectionH2>
                AI judgment, with humility.
              </SectionH2>
              <Lede className="mt-6">
                Reply Agent doesn't pretend to handle everything. When candidate context is unclear,
                it pauses and pings you. Your judgment beats AI judgment in nuanced cases.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                { title: "Candidate asks specific salary or benefits questions", desc: "AI doesn't have your offer details. Escalates to you." },
                { title: "Tone is unclear (sarcastic, ambiguous, contradictory)", desc: "Better to pause than misread." },
                { title: "Candidate proposes alternate role or referral", desc: "Strategic decisions stay with you." },
                { title: "Reply mentions sensitive topics (legal, compensation disputes)", desc: "Auto-escalation, no AI response." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3AB0A2]/10 text-[#3AB0A2]">
                    <MessageSquare size={18} strokeWidth={1.75} />
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

      {/* INBOX FEATURE */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow color="coral">Recruiter inbox</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
              All replies.
              <br />
              <span className="italic text-[#B7E4C7]">One inbox. Your context.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Every reply lands in your unified inbox — categorized as Interested / Declined / Needs Review.
              See the full thread, the candidate's profile, the original outreach.
              Click "AI reply" to get a contextual draft you can send or edit.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "Unified inbox across all jobs and candidates",
                "AI-drafted responses you can edit before sending",
                "Auto-categorized: Interested / Declined / Needs Review",
                "Full conversation history + candidate context inline",
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
            <Link href="/features/outreach-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Before: Agent #3</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Outreach Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Sends initial personalized outreach. Reply Agent handles what comes back.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B]">
                Learn about Outreach <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link href="/features/client-portal" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Plus: Differentiator</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Client Portal</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Share live pipeline with hiring managers — without showing them the AI machinery.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3AB0A2]">
                Learn about Client Portal <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
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
              Reads replies.
              <br />
              <span className="italic">Knows your judgment matters.</span>
            </SectionH2>
            <Lede className="mt-6">
              Reply Agent is included in Pro and Business plans.
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
