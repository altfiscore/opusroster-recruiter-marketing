// src/app/features/job-promotion/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { Rocket, Globe, MousePointerClick, TrendingUp, Check, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Job Promotion — Reach candidates actively searching, not just your database",
};

export default function JobPromotionPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="teal">Job promotion</Eyebrow>
            <DisplayH1>
              Most recruiting tools only search.
              <br />
              <span className="italic">We bring <Underline color="coral">candidates to you</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Promote any job to Google, Bing, and hundreds of job board partners — plus our
              own marketplace. Inbound applicants land straight in your pipeline, already
              scored by AI. Pay only for clicks, pause anytime.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-[#2A2D30]/55">
              Included on every plan · pay-per-click, no flat fees
            </p>
          </div>
        </Container>
      </Section>

      {/* SCREENSHOT - per click breakdown */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/promote-perclick.png" alt="Per-click pricing breakdown showing estimated applicants and total cost" className="w-full h-auto block" />
          </div>
        </Container>
      </Section>

      {/* WHAT IT DOES */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow color="navy">What it does</Eyebrow>
              <SectionH2>
                Inbound applicants,
                <br />
                <span className="italic">not just outbound search.</span>
              </SectionH2>
              <Lede className="mt-6">
                Sourcer Agent finds candidates from our database. Job Promotion does the opposite —
                it puts your listing in front of people actively searching for work, on the
                platforms they already use.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                { icon: Globe, title: "Hundreds of job boards", desc: "One click distributes your listing to Google Jobs, Bing, and our network of job board partners." },
                { icon: MousePointerClick, title: "Pay only for clicks", desc: "No flat monthly fee. You're charged when someone actually clicks through to your listing — nothing more." },
                { icon: TrendingUp, title: "AI-scored on arrival", desc: "Every inbound applicant gets scored against your job requirements the moment they apply." },
                { icon: Rocket, title: "Launch in under 2 minutes", desc: "Pick an industry, set a radius, choose a daily budget. Your job goes live across every channel at once." },
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

      {/* SCREENSHOT - job row */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-[#2A2D30]/45">
              Real-time performance, right in your job list
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/screenshots/promote-job-row.png" alt="Job listing showing live views and applicant counts with a Promote button" className="w-full h-auto block" />
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">How it works</Eyebrow>
            <SectionH2>Four steps. Live in minutes.</SectionH2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-4">
            {[
              { step: "01", title: "Pick an industry", desc: "Helps us target the right candidates and set fair per-click pricing for your role." },
              { step: "02", title: "Set your radius", desc: "Choose a city and distance, or go nationwide. Candidates nearby see your listing ranked higher." },
              { step: "03", title: "Set a daily budget", desc: "From $5 to $499 a day. See your estimated reach before you commit." },
              { step: "04", title: "Launch & track", desc: "Your job goes live everywhere at once. Watch real views, clicks, and applicants roll in." },
            ].map((s) => (
              <div key={s.step} className="rounded-3xl border border-[#2A2D30]/10 bg-white p-6">
                <div className="font-display text-4xl text-[#3AB0A2]">{s.step}</div>
                <h3 className="mt-3 font-display text-xl text-[#2A2D30]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#2A2D30]/65">{s.desc}</p>
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
              Job boards charge you whether <span className="italic text-[#FF6B6B]">anyone applies</span> or not.
              <br />
              We don't.
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Most job boards sell flat monthly listings — you pay the same whether you get
              5 applicants or 500. Our model only charges for actual engagement. If nobody
              clicks, you pay nothing that day. Pause anytime, no penalty.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "Per-click billing, capped at your daily budget",
                "Distributed to hundreds of job board partners at once",
                "AI scoring on every inbound applicant, automatically",
                "Pause or resume any campaign instantly",
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
            <SectionH2>Inbound meets your pipeline.</SectionH2>
            <Lede className="mt-6">
              Every applicant from Job Promotion lands in the same pipeline as your sourced
              candidates — scored, organized, ready for outreach.
            </Lede>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Link href="/features/sourcer-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Pairs with</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Sourcer Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Outbound search from our database, running every morning while you sleep.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3AB0A2]">
                Learn about Sourcer <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link href="/features/triage-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Then</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Triage Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Reviews every inbound and sourced candidate every 4 hours, keeping your shortlist honest.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B]">
                Learn about Triage <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
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
              Stop waiting on outbound.
              <br />
              <span className="italic">Start getting inbound.</span>
            </SectionH2>
            <Lede className="mt-6">
              Job Promotion is included on every plan. Free 5-day trial — no credit card required.
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
