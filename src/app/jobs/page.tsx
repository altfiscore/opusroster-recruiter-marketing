// src/app/jobs/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Container,
  Eyebrow,
  DisplayH1,
  Lede,
  Underline,
} from "@/components/marketing/Sections";
import {
  Search,
  MapPin,
  Wifi,
  Clock,
  DollarSign,
  Heart,
  ArrowRight,
  Building2,
} from "lucide-react";

const API_URL =
  (process.env.NEXT_PUBLIC_RECRUITER_API_URL ??
    "https://app.recruiter.opusroster.com") + "/api/public/jobs";

const TRACK_URL =
  (process.env.NEXT_PUBLIC_RECRUITER_API_URL ??
    "https://app.recruiter.opusroster.com") + "/api/public/jobs/track";

function trackEvent(jobId: string, eventType: "impression" | "view" | "click") {
  fetch(TRACK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ job_id: jobId, event_type: eventType, source: "marketing_site" }),
    keepalive: true,
  }).catch(() => {});
}


interface Job {
  id: string;
  title: string;
  company: string;
  company_logo: string | null;
  location: string | null;
  remote: boolean;
  employment_type: string;
  salary: string | null;
  skills: string[];
  description_preview: string;
  posted_at: string;
  apply_url: string;
  source: string;
  is_promoted?: boolean;
  is_urgent?: boolean;
}

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  Healthcare: ["nurse", "clinical", "patient", "care", "medical", "rn", "lpn"],
  Technology: ["engineer", "developer", "data", "software", "frontend", "backend"],
  Admin: ["coordinator", "assistant", "admin", "support", "operations"],
  Sales: ["sales", "account", "marketing", "growth", "business development"],
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

function isNewJob(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  return diff < 3 * 86400000;
}

function companyInitials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  { bg: "#E1F5EE", text: "#085041" },
  { bg: "#EEEDFE", text: "#3C3489" },
  { bg: "#FAECE7", text: "#712B13" },
  { bg: "#FBEAF0", text: "#72243E" },
];

function avatarColor(seed: string) {
  let hash = 0;
  for (const ch of seed) hash = (hash * 31 + ch.charCodeAt(0)) % AVATAR_COLORS.length;
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function JobBadges({ job, size = "sm" }: { job: Job; size?: "sm" | "md" }) {
  const badges: { label: string; bg: string; color: string; icon: string }[] = [];
  if (job.is_urgent) badges.push({ label: "Urgent", bg: "#FF6B6B", color: "#FFFFFF", icon: "\uD83D\uDD25" });
  if (isNewJob(job.posted_at)) badges.push({ label: "New", bg: "#F0997B", color: "#4A1B0C", icon: "\u2728" });
  if (job.is_promoted) badges.push({ label: "Promoted", bg: "#3AB0A2", color: "#FFFFFF", icon: "\uD83D\uDE80" });
  const shown = badges.slice(0, 2);
  if (shown.length === 0) return null;
  const fontSize = size === "sm" ? 10 : 11;
  const padY = size === "sm" ? 3 : 4;
  const padX = size === "sm" ? 8 : 10;
  return (
    <div className="flex gap-1.5 flex-wrap">
      {shown.map((b) => (
        <span
          key={b.label}
          className="inline-flex items-center gap-1 rounded-full font-medium"
          style={{ background: b.bg, color: b.color, fontSize, padding: `${padY}px ${padX}px` }}
        >
          <span style={{ fontSize: fontSize + 1 }}>{b.icon}</span>
          {b.label}
        </span>
      ))}
    </div>
  );
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [industry, setIndustry] = useState<string>("All");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  const [geoApplied, setGeoApplied] = useState(false);

  // Detect visitor location and auto-fill location filter (non-blocking, no permission prompt)
  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then((d) => {
        if (d.city) {
          setDetectedCity(d.city);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch(API_URL + "?limit=100")
      .then((r) => r.json())
      .then((d) => {
        setJobs(d.jobs ?? []);
        setLoading(false);
        if (d.jobs?.length > 0) {
          // do not override if user already typed something
          setSelectedJob(d.jobs[0]);
          // Track impressions for all loaded jobs (job board page load)
          (d.jobs as Job[]).forEach((j) => trackEvent(j.id, "impression"));
        }
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (detectedCity && !geoApplied && !locationQuery) {
      setLocationQuery(detectedCity);
      setGeoApplied(true);
    }
  }, [detectedCity, geoApplied, locationQuery]);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (query && !j.title.toLowerCase().includes(query.toLowerCase()) &&
          !j.company.toLowerCase().includes(query.toLowerCase())) {
        return false;
      }
      if (locationQuery && j.location &&
          !j.location.toLowerCase().includes(locationQuery.toLowerCase())) {
        return false;
      }
      if (remoteOnly && !j.remote) return false;
      if (industry !== "All") {
        const keywords = INDUSTRY_KEYWORDS[industry] ?? [];
        const haystack = (j.title + " " + j.skills.join(" ")).toLowerCase();
        if (!keywords.some((k) => haystack.includes(k))) return false;
      }
      return true;
    });
  }, [jobs, query, locationQuery, industry, remoteOnly]);

  return (
    <div className="min-h-screen bg-cream">
      <section className="border-b border-[#E4E7EB] bg-white">
        <Container className="py-12 lg:py-16">
          <Eyebrow>Open roles</Eyebrow>
          <DisplayH1 className="mb-4">
            Find your <Underline color="teal">next role</Underline>
          </DisplayH1>
          <Lede className="max-w-[640px]">
            Real jobs from real teams hiring right now — sourced and managed
            by recruiters who actually read your application.
          </Lede>
        </Container>
      </section>

      <Container className="py-8">
        <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto_auto]">
          <div className="flex items-center gap-2 rounded-2xl border border-[#E4E7EB] bg-white px-4 py-3">
            <Search size={16} className="shrink-0 text-[#9CA0A8]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title or company..."
              className="w-full bg-transparent text-[14px] text-graphite outline-none placeholder:text-[#7A7E84]"
            />
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-[#E4E7EB] bg-white px-4 py-3">
            <MapPin size={16} className="shrink-0 text-[#9CA0A8]" />
            <input
              value={locationQuery}
              onChange={(e) => { setLocationQuery(e.target.value); setGeoApplied(true); }}
              placeholder="City or state..."
              className="w-full bg-transparent text-[14px] text-graphite outline-none placeholder:text-[#7A7E84]"
            />
            {geoApplied && detectedCity && locationQuery === detectedCity && (
              <button
                onClick={() => { setLocationQuery(""); }}
                className="shrink-0 text-[11px] font-medium text-[#3AB0A2] whitespace-nowrap hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="rounded-2xl border border-[#E4E7EB] bg-white px-4 py-3 text-[14px] text-graphite outline-none"
          >
            <option>All</option>
            <option>Healthcare</option>
            <option>Technology</option>
            <option>Admin</option>
            <option>Sales</option>
          </select>
          <button
            onClick={() => setRemoteOnly((v) => !v)}
            className={
              "flex items-center gap-2 rounded-2xl border px-5 py-3 text-[14px] font-medium transition " +
              (remoteOnly
                ? "border-teal bg-teal/10 text-[#0F6E56]"
                : "border-[#E4E7EB] bg-white text-graphite hover:border-[#C9CDD3]")
            }
          >
            <Wifi size={16} />
            Remote
          </button>
        </div>

        <p className="mb-4 text-[13px] text-[#4A4D52]">
          {loading ? "Loading roles..." : `${filtered.length} open roles`}
        </p>

        {loading ? (
          <div className="rounded-2xl border border-[#E4E7EB] bg-white p-16 text-center">
            <p className="text-[14px] text-[#4A4D52]">Finding roles for you...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-[#E4E7EB] bg-white p-16 text-center">
            <p className="text-[15px] font-medium text-graphite mb-2">
              No roles match those filters
            </p>
            <p className="text-[13px] text-[#4A4D52]">
              Try clearing a filter or searching a different keyword.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[380px_1fr]">
            <div className="flex flex-col gap-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {filtered.map((job) => {
                const isSelected = selectedJob?.id === job.id;
                const av = avatarColor(job.company);
                return (
                  <button
                    key={job.id}
                    onClick={() => { setSelectedJob(job); trackEvent(job.id, "view"); }}
                    className={
                      "rounded-2xl border bg-white p-5 text-left transition " +
                      (isSelected
                        ? "border-teal shadow-[0_0_0_1px_#3AB0A2]"
                        : "border-[#E4E7EB] hover:border-[#C9CDD3]")
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[13px] font-semibold"
                        style={{ background: av.bg, color: av.text }}
                      >
                        {companyInitials(job.company)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] text-[#4A4D52]">{job.company}</p>
                        <h3 className="mb-1 text-[15px] font-semibold leading-snug text-graphite">
                          {job.title}
                        </h3>
                        <div className="mb-1.5">
                          <JobBadges job={job} size="sm" />
                        </div>
                        <p className="mb-2 text-[12px] text-[#4A4D52]">
                          {job.remote ? "Remote · " : ""}
                          {job.location ?? ""}
                        </p>
                        {job.salary && (
                          <p className="text-[13px] font-semibold text-graphite">{job.salary}</p>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-[11px] text-[#9CA0A8]">{timeAgo(job.posted_at)}</p>
                  </button>
                );
              })}
            </div>

            {selectedJob && (
              <div className="rounded-2xl border border-[#E4E7EB] bg-white p-8 max-h-[calc(100vh-220px)] overflow-y-auto lg:sticky lg:top-6">
                <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#E4E7EB] pb-6">
                  <div className="flex gap-4">
                    {(() => {
                      const av = avatarColor(selectedJob.company);
                      return (
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[18px] font-semibold"
                          style={{ background: av.bg, color: av.text }}
                        >
                          {companyInitials(selectedJob.company)}
                        </div>
                      );
                    })()}
                    <div>
                      <p className="mb-1 text-[13px] text-[#4A4D52]">{selectedJob.company}</p>
                      <h2 className="mb-3 font-display text-[26px] leading-tight text-graphite">
                        {selectedJob.title}
                      </h2>
                      <div className="mb-3">
                        <JobBadges job={selectedJob} size="md" />
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {selectedJob.location && (
                          <span className="flex items-center gap-1.5 text-[13px] text-[#4A4D52]">
                            <MapPin size={14} /> {selectedJob.location}
                          </span>
                        )}
                        {selectedJob.remote && (
                          <span className="flex items-center gap-1.5 text-[13px] text-[#4A4D52]">
                            <Wifi size={14} /> Remote OK
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 text-[13px] text-[#4A4D52]">
                          <Clock size={14} /> {selectedJob.employment_type}
                        </span>
                        {selectedJob.salary && (
                          <span className="flex items-center gap-1.5 text-[13px] text-[#4A4D52]">
                            <DollarSign size={14} /> {selectedJob.salary}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      aria-label="Save job"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E4E7EB] text-[#4A4D52] transition hover:border-[#C9CDD3]"
                    >
                      <Heart size={17} />
                    </button>
                    <a
                      href={selectedJob.apply_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent(selectedJob.id, "click")}
                      className="inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#329a8e]"
                    >
                      Apply now <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="mb-3 text-[14px] font-semibold text-graphite">About this role</h3>
                <p className="mb-6 whitespace-pre-wrap text-[14px] leading-[1.75] text-[#3A3D40] font-medium">
                  {selectedJob.description_preview}
                  {selectedJob.description_preview.length >= 200 && "…"}
                </p>

                {selectedJob.skills.length > 0 && (
                  <>
                    <h3 className="mb-3 text-[14px] font-semibold text-graphite">
                      Required skills
                    </h3>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-mint bg-[#F0FDF8] px-3 py-1.5 text-[12px] text-[#085041] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <div className="flex items-center gap-2 rounded-xl bg-cream p-4 text-[12px] text-[#4A4D52]">
                  <Building2 size={14} />
                  Posted via {selectedJob.source} · {timeAgo(selectedJob.posted_at)}
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
