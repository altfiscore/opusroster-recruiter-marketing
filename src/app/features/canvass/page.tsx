// src/app/features/canvass/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { Video, Calendar, FileText, Users, Check, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Canvass — Video interviews, scheduling, and notes that write themselves",
};

export default function CanvassPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#3AB0A2]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#0F6E56]">
              Included free
            </span>
            <Eyebrow color="teal">Canvass</Eyebrow>
            <DisplayH1>
              Interviews that
              <br />
              <span className="italic">run <Underline color="coral">themselves</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Schedule, run, and review every interview in one place. Calendars sync automatically.
              Every word gets transcribed in real time. Notes and scorecards save themselves —
              you just focus on the conversation.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-[#2A2D30]/55">
              Included with every plan · no extra setup
            </p>
          </div>
        </Container>
      </Section>

      {/* SCREENSHOT - live interview card */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/canvass-live-card.png" alt="Live interview in progress with real-time AI fit score and talk ratio" className="w-full h-auto block" />
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
                Every step,
                <br />
                <span className="italic">already handled.</span>
              </SectionH2>
              <Lede className="mt-6">
                From booking the first call to writing up the final scorecard, Canvass removes
                the busywork around interviewing so you can focus on the conversation itself.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                { icon: Calendar, title: "Calendars that sync both ways", desc: "Candidates pick a time that works for everyone. No back-and-forth emails, no double-bookings." },
                { icon: Video, title: "One-click video interviews", desc: "Candidates join from a link — no downloads, no accounts. Works on any device." },
                { icon: FileText, title: "Transcribed automatically", desc: "Every word is captured in real time as the interview happens. Nothing to remember to turn on." },
                { icon: Users, title: "Scorecards that fill themselves", desc: "Notes, fit scores, and follow-up questions appear as the conversation unfolds — ready to review after." },
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

      {/* SCREENSHOT - booking page */}
      <Section className="bg-white">
        <Container>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-[#2A2D30]/45">
            Candidates pick a time. You never chase a calendar invite again.
          </p>
          <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/canvass-booking.png" alt="Candidate booking page showing AI-ranked best time slots" className="w-full h-auto block" />
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">How it works</Eyebrow>
            <SectionH2>Three steps. Zero scheduling emails.</SectionH2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Send a link",
                desc: "Candidates see real availability and pick a time that works — synced across every interviewer's calendar.",
              },
              {
                step: "02",
                title: "Run the interview",
                desc: "One click to join. Every word is transcribed live. Notes and a fit score build themselves as you talk.",
              },
              {
                step: "03",
                title: "Review and decide",
                desc: "Full transcript, scorecard, and summary waiting the moment the call ends. Share with the hiring panel instantly.",
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

      {/* SCREENSHOT - calendar */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screenshots/canvass-calendar-tight.png" alt="Calendar view showing scheduled, live, and completed interviews" className="w-full h-auto block" />
          </div>
        </Container>
      </Section>

      {/* WHY IT'S DIFFERENT */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow color="coral">Why it's different</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
              Stop taking notes.
              <br />
              <span className="italic text-[#FF6B6B]">Start interviewing.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Most interviewers split their attention between the conversation and the
              keyboard. Canvass captures everything in the background, so the only thing
              you have to do is listen.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "No downloads for candidates — join from any browser",
                "Notes and transcripts save automatically, every time",
                "Panel interviewers see one shared scorecard, in sync",
                "Recordings available to review or share anytime",
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

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-12 text-center shadow-xl shadow-[#2A2D30]/5 ring-1 ring-[#2A2D30]/8 lg:p-16">
            <Eyebrow color="teal">Get started</Eyebrow>
            <SectionH2>
              Your next interview,
              <br />
              <span className="italic">already organized.</span>
            </SectionH2>
            <Lede className="mt-6">
              Canvass is included free with every plan. Free 5-day trial — no credit card required.
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
