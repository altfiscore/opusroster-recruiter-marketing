// src/app/pricing/page.tsx
"use client";

import { useState } from "react";
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
  Section,
} from "@/components/marketing/Sections";
import { Check, X, ArrowRight, Sparkles } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://opus-rosterrecruiter.vercel.app";

interface Plan {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  monthlyAnnualEquivalent: number;
  highlight?: boolean;
  cta: string;
  features: string[];
  notIncluded?: string[];
}

const PLANS: Plan[] = [
  {
    name: "Trial",
    tagline: "Test the platform free for 5 days.",
    monthly: 0,
    annual: 0,
    monthlyAnnualEquivalent: 0,
    cta: "Start free trial",
    features: [
      "1 active job",
      "50 sourcing credits",
      "1 client in portal",
      "Manual sourcing + AI scoring",
      "Outreach + Cal.com booking",
      "Full pipeline kanban",
    ],
    notIncluded: [
      "Sourcer Agent (auto-source)",
      "Triage Agent (auto-shortlist)",
      "AI-personalized emails",
      "AI reply handling",
    ],
  },
  {
    name: "Pro",
    tagline: "AI helps you. You stay in control.",
    monthly: 89,
    annual: 854,
    monthlyAnnualEquivalent: 71,
    cta: "Start with Pro",
    features: [
      "5 active jobs",
      "350 sourcing credits / month",
      "3 clients in portal",
      "Triage Agent — daily, 50 candidates",
      "AI-personalized outreach",
      "AI reply handling",
      "Cal.com booking integration",
      "Email support",
    ],
    notIncluded: [
      "Sourcer Agent (Business only)",
      "Full Autopilot mode",
    ],
  },
  {
    name: "Business",
    tagline: "AI does it all. You review the wins.",
    monthly: 230,
    annual: 2208,
    monthlyAnnualEquivalent: 184,
    highlight: true,
    cta: "Start with Business",
    features: [
      "Unlimited active jobs",
      "1,000 sourcing credits / month",
      "Unlimited clients in portal",
      "Sourcer Agent — daily, 5/job auto-sourced",
      "Triage Agent — every 4h, 200 max",
      "Full Autopilot mode (sources → emails → books)",
      "AI-personalized outreach",
      "AI reply handling",
      "Cal.com booking integration",
      "Priority email + chat support",
    ],
  },
];

const ADDONS = [
  {
    name: "Volume credits",
    desc: "+500 sourcing credits per month for heavy users",
    price: "$50/mo",
    annualPrice: "$480/yr",
  },
  {
    name: "Whereby video screening",
    desc: "Automated video interview rounds before live calls",
    price: "$20/mo",
    annualPrice: "Coming soon",
  },
  {
    name: "White-label client portal",
    desc: "Your branding, your domain on the client portal",
    price: "$30/mo",
    annualPrice: "Coming soon",
  },
];

const FAQS = [
  {
    q: "How does the free trial work?",
    a: "5 days, no credit card required. You get 50 sourcing credits, 1 active job, and the full pipeline. After 5 days, you upgrade to Pro or Business — or your account pauses (no charge).",
  },
  {
    q: "What's a 'sourcing credit'?",
    a: "Each PDL profile lookup uses one credit. So if you source 50 candidates from PDL, that's 50 credits. AI scoring, outreach, and reply handling don't use credits — they're included.",
  },
  {
    q: "Can I switch plans?",
    a: "Anytime. Upgrade and the new features unlock immediately. Downgrade and you keep current features until the end of the billing period.",
  },
  {
    q: "How does annual billing work?",
    a: "Pay yearly, save 20%. Pro: $854/year (vs $89/mo monthly = $1,068/year). Business: $2,208/year (vs $230/mo monthly = $2,760/year). Same features, lower bill.",
  },
  {
    q: "What happens if I run out of credits?",
    a: "Sourcing pauses for the month. Everything else (outreach, replies, scheduling) keeps working. Buy a Volume Credits add-on ($50 for 500 more) or wait for next month's reset.",
  },
  {
    q: "Is my data secure?",
    a: "We're SOC 2 Type 2 in progress. Your data is encrypted at rest and in transit. We don't sell or share data with third parties. Cancel anytime — your data is portable.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no cancellation fees. Cancel from Settings → Billing. You keep access until the end of your billing period.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* HERO */}
      <Section className="pt-16 pb-12 lg:pt-20 lg:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="coral">Pricing</Eyebrow>
            <DisplayH1>
              Half the price of others.
              <br />
              <span className="italic">More <Underline color="teal">in the box</Underline>.</span>
            </DisplayH1>
            <Lede className="mt-6">
              No hidden fees. No per-seat upcharges for solo recruiters. Annual saves another <Em>20%</Em>.
              All plans include the full pipeline, kanban, and integrations.
            </Lede>

            {/* Billing toggle */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#2A2D30]/10 bg-white p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  !annual ? "bg-[#2A2D30] text-white" : "text-[#2A2D30]/65"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
                  annual ? "bg-[#2A2D30] text-white" : "text-[#2A2D30]/65"
                }`}
              >
                Annual
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  annual ? "bg-[#FF6B6B] text-white" : "bg-[#FF6B6B]/15 text-[#FF6B6B]"
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRICING CARDS */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => {
              const showPrice = annual ? plan.monthlyAnnualEquivalent : plan.monthly;
              const isFree = plan.monthly === 0;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl bg-white p-8 ${
                    plan.highlight
                      ? "border-2 border-[#3AB0A2] shadow-2xl shadow-[#3AB0A2]/15"
                      : "border border-[#2A2D30]/10 shadow-sm"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3AB0A2] px-3 py-1 text-xs font-semibold text-white">
                        <Sparkles size={12} />
                        Most popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-3xl text-[#2A2D30]">{plan.name}</h3>
                    <p className="mt-2 text-[15px] italic text-[#2A2D30]/65">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mt-6">
                    {isFree ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-5xl text-[#2A2D30]">Free</span>
                        <span className="text-[15px] text-[#2A2D30]/55">5 days</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-5xl text-[#2A2D30]">${showPrice}</span>
                          <span className="text-[15px] text-[#2A2D30]/55">/mo</span>
                        </div>
                        {annual && (
                          <p className="mt-1 text-sm text-[#3AB0A2]">
                            Billed ${plan.annual} annually
                          </p>
                        )}
                        {!annual && (
                          <p className="mt-1 text-sm text-[#2A2D30]/55">
                            Or ${plan.monthlyAnnualEquivalent}/mo billed annually
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`${APP_URL}/sign-in?mode=signup`}
                    className={`mt-6 block rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                      plan.highlight
                        ? "bg-[#3AB0A2] text-white hover:bg-[#2c9587]"
                        : "border border-[#2A2D30]/15 bg-white text-[#2A2D30] hover:border-[#2A2D30]/30"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Features */}
                  <div className="mt-8 border-t border-[#2A2D30]/8 pt-6">
                    <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#2A2D30]/50">
                      Includes
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-[#2A2D30]/80">
                          <Check size={15} className="mt-0.5 shrink-0 text-[#3AB0A2]" strokeWidth={2.5} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <ul className="mt-4 space-y-2 border-t border-[#2A2D30]/8 pt-4">
                        {plan.notIncluded.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-[#2A2D30]/45">
                            <X size={15} className="mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <p className="mt-12 text-center text-sm text-[#2A2D30]/55">
            All plans include: full pipeline kanban, candidate notes, email tracking, Stripe billing.
            <br />
            Free 5-day trial · No credit card · Cancel anytime
          </p>
        </Container>
      </Section>

      {/* ADD-ONS */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow color="navy">Add-ons</Eyebrow>
            <SectionH2>
              Scale features when you need them.
            </SectionH2>
            <Lede className="mt-6">
              Optional extras for heavy users. Add to any plan, cancel anytime.
            </Lede>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ADDONS.map((addon) => (
              <div
                key={addon.name}
                className="rounded-2xl border border-[#2A2D30]/10 bg-[#F5F7FA] p-7"
              >
                <h3 className="font-display text-2xl text-[#2A2D30]">{addon.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#2A2D30]/65">
                  {addon.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-3xl text-[#2A2D30]">{addon.price}</span>
                </div>
                <p className="mt-1 text-sm text-[#2A2D30]/55">{addon.annualPrice}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* COMPARISON */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Honest comparison</Eyebrow>
            <SectionH2>How we stack up.</SectionH2>
            <Lede className="mt-6">
              Other AI recruiting platforms charge $149-$249/month per user. We don't believe
              you should pay 2x for similar features.
            </Lede>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-[#2A2D30]/10 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2A2D30]/10 bg-[#F5F7FA]">
                  <th className="p-5 text-left text-sm font-medium text-[#2A2D30]">&nbsp;</th>
                  <th className="p-5 text-center text-sm font-medium text-[#3AB0A2]">OpusRoster Pro</th>
                  <th className="p-5 text-center text-sm font-medium text-[#2A2D30]/55">Other AI Platforms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2D30]/8">
                <tr>
                  <td className="p-5 text-sm">Monthly price (1 user)</td>
                  <td className="p-5 text-center font-medium text-[#3AB0A2]">$89/mo</td>
                  <td className="p-5 text-center text-[#2A2D30]/65">$149-$249/mo</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">Annual price (with 20% discount)</td>
                  <td className="p-5 text-center font-medium text-[#3AB0A2]">$854/yr</td>
                  <td className="p-5 text-center text-[#2A2D30]/65">$1,500-$2,400/yr</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">AI sourcing</td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#3AB0A2]" /></td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#2A2D30]/45" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">AI personalized outreach</td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#3AB0A2]" /></td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#2A2D30]/45" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">Triage Agent (auto-shortlist)</td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#3AB0A2]" /></td>
                  <td className="p-5 text-center text-sm text-[#2A2D30]/55">Varies</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">Client portal (white-label)</td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#3AB0A2]" /></td>
                  <td className="p-5 text-center"><X size={18} className="mx-auto text-[#2A2D30]/30" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">Honest scoring (no inflation)</td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#3AB0A2]" /></td>
                  <td className="p-5 text-center text-sm text-[#2A2D30]/55">Often inflated</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">Solo recruiter friendly</td>
                  <td className="p-5 text-center"><Check size={18} className="mx-auto text-[#3AB0A2]" /></td>
                  <td className="p-5 text-center text-sm text-[#2A2D30]/55">Per-seat tiers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <Eyebrow color="coral">FAQ</Eyebrow>
              <SectionH2>Common questions.</SectionH2>
            </div>

            <div className="mt-12 space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-[#2A2D30]/10 bg-[#F5F7FA] p-6 open:bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                    <span className="text-[17px] font-medium text-[#2A2D30]">{faq.q}</span>
                    <span className="font-display text-2xl text-[#3AB0A2] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#2A2D30]/70">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-[#1D3557] p-12 text-center text-white shadow-xl shadow-[#1D3557]/15 lg:p-16">
            <h2 className="font-display text-4xl leading-tight tracking-tight lg:text-5xl">
              Try it free.
              <br />
              <span className="italic text-[#B7E4C7]">No card required.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/75">
              5 days, full pipeline, 50 sourcing credits.
              <br />
              See if it fits your workflow before paying.
            </p>
            <div className="mt-10">
              <Link
                href={`${APP_URL}/sign-in?mode=signup`}
                className="inline-flex items-center gap-2 rounded-full bg-[#3AB0A2] px-7 py-4 text-[15px] font-medium text-white transition hover:bg-[#329a8e]"
              >
                Start free trial
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
