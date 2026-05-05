// src/app/features/client-portal/page.tsx
import Link from "next/link";
import {
  Container, Eyebrow, DisplayH1, SectionH2, Lede,
  Underline, Em, PrimaryButton, SecondaryButton, Section,
} from "@/components/marketing/Sections";
import { Users, Shield, MessageSquare, Eye, Check, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

export const metadata = {
  title: "Client Portal — Share work, hide the chaos",
};

export default function ClientPortalPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="navy">The differentiator</Eyebrow>
            <DisplayH1>
              Show clients
              <br />
              <span className="italic">the <Underline color="teal">work</Underline>. Hide the chaos.</span>
            </DisplayH1>
            <Lede className="mt-6">
              Live pipeline portal for hiring managers and clients.
              They see the candidates you've selected — names, fit scores, statuses.
              They don't see your dashboard, your other clients, or AI machinery.
              Built for the way agencies actually work.
            </Lede>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href={`${APP_URL}/sign-in?mode=signup`}>Try it free</PrimaryButton>
              <SecondaryButton href="/pricing">See pricing</SecondaryButton>
            </div>
            <p className="mt-6 text-sm text-[#2A2D30]/55">
              Available on Pro and Business plans
            </p>
          </div>
        </Container>
      </Section>

      {/* WHY MOST AGENCIES STRUGGLE */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">Why agencies need this</Eyebrow>
            <SectionH2>
              Recruiting is half placement,
              <br />
              <span className="italic">half client communication.</span>
            </SectionH2>
            <Lede className="mt-6">
              You spend hours updating clients via email, sending PDFs, copying candidate
              details into shared docs. Most "AI recruiting tools" ignore this entirely.
              We built portals because agency reality demands them.
            </Lede>
          </div>
        </Container>
      </Section>

      {/* WHAT CLIENTS SEE */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow color="teal">What clients see</Eyebrow>
              <SectionH2>
                Just enough.
                <br />
                <span className="italic">Nothing more.</span>
              </SectionH2>
              <Lede className="mt-6">
                Clients log in via magic link to a clean portal showing only their pipeline.
                Curated candidates, statuses, your notes. They can comment on candidates,
                request interviews, mark preferences — all without seeing your other clients
                or your internal Autopilot machinery.
              </Lede>
            </div>

            <div className="space-y-5">
              {[
                { icon: Users, title: "Candidates you choose to share", desc: "You decide which candidates appear in client view. Drafts and sourced stay private." },
                { icon: MessageSquare, title: "Two-way comments per candidate", desc: "Client can leave notes. You see them in your dashboard. Email notifications keep both sides synced." },
                { icon: Eye, title: "Client-friendly views", desc: "Stages re-labeled in plain English. Fit scores hidden by default (configurable). No AI mention unless you opt in." },
                { icon: Shield, title: "Strict access scoping", desc: "Each client sees only their org's pipeline. No cross-client data leaks. Client logout invalidates session." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1D3557]/10 text-[#1D3557]">
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

      {/* WHITE-LABEL UPGRADE */}
      <Section className="bg-[#1D3557] text-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow color="coral">White-label option</Eyebrow>
            <h2 className="font-display text-[36px] leading-tight tracking-tight lg:text-[48px]">
              Your brand.
              <br />
              <span className="italic text-[#B7E4C7]">Your domain. Your portal.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Add the white-label option ($30/mo) and the portal lives at your domain
              (like portal.youragency.com), with your logo and colors.
              Clients never see "OpusRoster" — they see your agency. Important when
              you're a premium boutique and brand consistency matters.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                "Custom subdomain (portal.youragency.com)",
                "Your logo + brand colors",
                "Email notifications from your domain",
                "No OpusRoster mentions visible to clients",
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
            <Eyebrow>Built for agencies</Eyebrow>
            <SectionH2>The agency-friendly platform.</SectionH2>
            <Lede className="mt-6">
              Portal is one piece. The rest is built for multi-client recruiting too.
            </Lede>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Link href="/for/agencies" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">For you</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">For Agencies</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Multi-client workflow, white-label, billing per seat or unlimited. See the agency view.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3AB0A2]">
                Agency overview <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </p>
            </Link>
            <Link href="/features/sourcer-agent" className="group rounded-2xl border border-[#2A2D30]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-[#2A2D30]/45">Combine with</p>
              <h3 className="mt-2 font-display text-2xl text-[#2A2D30]">Sourcer Agent</h3>
              <p className="mt-2 text-[15px] text-[#2A2D30]/65">Auto-source candidates per client job. Show clients only the best, hide the rest in your bucket.</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#FF6B6B]">
                Sourcer Agent <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
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
              Stop emailing PDFs.
              <br />
              <span className="italic">Show clients live progress.</span>
            </SectionH2>
            <Lede className="mt-6">
              Client Portal is included in Pro and Business plans.
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
