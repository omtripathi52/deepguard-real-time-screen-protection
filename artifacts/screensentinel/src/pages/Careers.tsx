import { useState } from "react";
import { ArrowRight, MapPin, Globe, Heart, BookOpen, Zap, Users, CheckCircle2, DollarSign, Send, Briefcase, GraduationCap, Clock } from "lucide-react";
import { openRoles, openInternships } from "@/data/content";

const whyNow = [
  {
    n: "01",
    title: "Synthetic media is going mainstream",
    desc: "Consumer-grade tools can now fabricate convincing video in minutes. The threat surface is no longer theoretical — it's daily.",
  },
  {
    n: "02",
    title: "Trust infrastructure barely exists",
    desc: "There is no widely deployed layer to verify the integrity of video at the point it's watched. We are building it.",
  },
  {
    n: "03",
    title: "Small team, large ownership",
    desc: "Less than a dozen people, no committees, no roadmap theatre. The work you ship is the work people use.",
  },
  {
    n: "04",
    title: "An emerging category, defined now",
    desc: "How on-device detection should look is still being decided. The next two years set the standard for the next decade.",
  },
];

const benefits = [
  { Icon: DollarSign, title: "Globally competitive pay", desc: "Salaries set to be attractive wherever you are — India, USA, UK, or anywhere else." },
  { Icon: Globe, title: "Fully remote, worldwide", desc: "Work from any timezone. Async-first with deep-work blocks protected." },
  { Icon: Heart, title: "Health & wellness", desc: "Private medical cover and a monthly wellness stipend." },
  { Icon: BookOpen, title: "Learning budget", desc: "$1,000/year for conferences, courses, API credits, and books." },
  { Icon: Users, title: "Team retreats", desc: "Twice a year, the whole team gathers in person." },
  { Icon: Zap, title: "Top-tier equipment", desc: "Your choice of laptop, monitor, and home-office setup — fully covered." },
];

const applyLink = (title: string) =>
  `mailto:screensentinel.ai@gmail.com?subject=${encodeURIComponent(`Application: ${title}`)}`;

type Tab = "jobs" | "internships";

export default function Careers() {
  const [tab, setTab] = useState<Tab>("jobs");

  return (
    <div className="ss-mobile-page ss-careers-page">
      {/* HERO */}
      <section style={{ padding: "clamp(48px,5vw,80px) 0 clamp(36px,4vw,56px)", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px circle at 85% 10%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(500px circle at 5% 90%, rgba(59,130,246,0.06), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>Careers</p>
              <h1 style={{ fontSize: "clamp(36px,4.6vw,60px)", fontWeight: 800, letterSpacing: "-0.045em", color: "var(--text)", lineHeight: 1.04, marginBottom: 18 }}>
                Build the trust layer for <span className="grad-text">synthetic media.</span>
              </h1>
              <p style={{ fontSize: 16.5, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24, maxWidth: 560 }}>
                Remote-first, worldwide team. Zero experience required to apply. We hire on curiosity, craft, and what you've built — not years on a CV.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
                <a href="#roles" className="ss-btn ss-btn-primary">
                  See open roles <ArrowRight size={14} />
                </a>
                <a href="mailto:screensentinel.ai@gmail.com?subject=Open%20application" className="ss-btn ss-btn-ghost">
                  <Send size={13} /> Open application
                </a>
              </div>
              <div style={{ display: "flex", gap: 22, flexWrap: "wrap", fontSize: 12.5, color: "var(--text-subtle)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Globe size={12} /> Remote · Worldwide
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <CheckCircle2 size={12} color="var(--accent)" /> 0 experience OK
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Briefcase size={12} /> {openRoles.length} jobs · {openInternships.length} internships
                </span>
              </div>
            </div>

            {/* Team facts visual */}
            <div className="careers-globe" style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { value: "30+", label: "Countries represented", accent: "#10b981", sub: "on the team" },
                  { value: "<200ms", label: "Detection speed", accent: "#22d3ee", sub: "on-device" },
                  { value: "0 bytes", label: "Data sent to servers", accent: "#a78bfa", sub: "ever" },
                  { value: "100%", label: "Remote & async-first", accent: "#f59e0b", sub: "no office required" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      padding: "22px 20px",
                      borderRadius: 16,
                      border: `1px solid ${s.accent}28`,
                      background: "var(--bg2)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${s.accent}55`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${s.accent}28`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <div aria-hidden style={{ position: "absolute", top: -20, right: -20, width: 90, height: 90, borderRadius: "50%", background: `radial-gradient(circle, ${s.accent}18, transparent 70%)`, pointerEvents: "none" }} />
                    <div style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 900, color: s.accent, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 11.5, color: "var(--text-subtle)" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ padding: "clamp(48px,5vw,80px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)", borderBottom: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap">
          <div style={{ maxWidth: 700, marginBottom: 36 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>Why join now</p>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,40px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1, marginBottom: 12 }}>
              A short window to build something important.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
              The category is forming now. The people who shape it will be the ones who shipped early, made the right calls, and held the line on privacy.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }} className="ss-two-col">
            {whyNow.map(({ n, title, desc }) => (
              <div key={n} className="ss-card" style={{ padding: "24px 26px", background: "var(--bg)" }}>
                <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", marginBottom: 10 }}>{n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS — TAB SWITCHER */}
      <section id="roles" style={{ padding: "clamp(48px,5vw,88px) 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          {/* Header + tabs */}
          <div style={{ marginBottom: 28 }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>Open positions</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
              <div>
                <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 6 }}>
                  Now hiring
                </h2>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)" }}>
                  Remote worldwide · All experience levels welcome · Salaries competitive globally
                </p>
              </div>
              {/* Tab toggle */}
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 12,
                  border: "1px solid var(--ss-line)",
                  background: "var(--bg2)",
                  padding: 4,
                  gap: 4,
                }}
              >
                {([["jobs", Briefcase, `${openRoles.length} Jobs`], ["internships", GraduationCap, `${openInternships.length} Internships`]] as const).map(([id, Icon, label]) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "8px 16px",
                      borderRadius: 9,
                      border: "none",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 600,
                      transition: "all 0.2s ease",
                      background: tab === id ? "var(--bg)" : "transparent",
                      color: tab === id ? "var(--text)" : "var(--text-muted)",
                      boxShadow: tab === id ? "0 1px 4px rgba(0,0,0,0.15)" : "none",
                    }}
                  >
                    <Icon size={13} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* JOBS TAB */}
          {tab === "jobs" && (
            <div style={{ display: "grid", gap: 12 }}>
              {openRoles.map((job) => (
                <article
                  key={job.id}
                  className="ss-role-card"
                  style={{
                    border: "1px solid var(--ss-line)",
                    borderRadius: 16,
                    padding: "clamp(16px,2vw,22px) clamp(16px,2vw,24px)",
                    background: "var(--bg2)",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--ss-line)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr auto", gap: 20, alignItems: "center" }} className="ss-role-row">
                    <div>
                      <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "var(--accent-dim)", border: "1px solid var(--accent-border)" }}>
                          {job.department}
                        </span>
                        {job.seniority && (
                          <span style={{ fontSize: 10, color: "var(--text-subtle)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                            {job.seniority}
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontSize: "clamp(16px,1.8vw,19px)", fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.015em" }}>{job.title}</h3>
                      <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 520, marginBottom: job.tags?.length ? 10 : 0 }}>
                        {job.description}
                      </p>
                      {job.tags && job.tags.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                          {job.tags.map((t) => (
                            <span key={t} style={{ fontSize: 11.5, color: "var(--text-muted)", padding: "3px 9px", borderRadius: 6, background: "var(--bg)", border: "1px solid var(--ss-line)", fontWeight: 500 }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 13 }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--text-muted)" }}>
                        <MapPin size={13} color="var(--accent)" /> {job.location}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--text)", fontWeight: 600 }}>
                        <DollarSign size={13} color="var(--accent)" /> {job.salary}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--text-subtle)" }}>
                        <CheckCircle2 size={13} color="var(--accent)" /> {job.type}
                      </span>
                    </div>
                    <a href={applyLink(job.title)} className="ss-btn ss-btn-primary" style={{ whiteSpace: "nowrap" }}>
                      Apply <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* INTERNSHIPS TAB */}
          {tab === "internships" && (
            <div>
              {/* Internship intro banner */}
              <div
                style={{
                  padding: "18px 22px",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(34,211,238,0.04))",
                  border: "1px solid rgba(16,185,129,0.25)",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={17} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                    Open to all experience levels — including zero
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                    We believe learning-by-doing beats credentials. All internships are paid, fully remote, and open worldwide. If you've built something in AI, ML, or data — even just a project — apply.
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                {openInternships.map((intern) => (
                  <article
                    key={intern.id}
                    style={{
                      border: "1px solid var(--ss-line)",
                      borderRadius: 16,
                      padding: "clamp(18px,2vw,26px) clamp(18px,2vw,26px)",
                      background: "var(--bg2)",
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--ss-line)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }} className="intern-row">
                      <div>
                        <div style={{ display: "flex", gap: 7, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                          <span
                            style={{
                              fontSize: 10,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "#22d3ee",
                              fontWeight: 700,
                              padding: "3px 8px",
                              borderRadius: 6,
                              background: "rgba(34,211,238,0.10)",
                              border: "1px solid rgba(34,211,238,0.25)",
                            }}
                          >
                            {intern.domain}
                          </span>
                          <span style={{ fontSize: 10, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 4 }}>
                            <GraduationCap size={10} /> Internship
                          </span>
                        </div>
                        <h3 style={{ fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.015em" }}>
                          {intern.title}
                        </h3>
                        <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 14, maxWidth: 580 }}>
                          {intern.description}
                        </p>

                        {/* Tags */}
                        {intern.tags && (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                            {intern.tags.map((t) => (
                              <span key={t} style={{ fontSize: 11.5, color: "var(--text-muted)", padding: "3px 9px", borderRadius: 6, background: "var(--bg)", border: "1px solid var(--ss-line)", fontWeight: 500 }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Meta row */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, fontSize: 13 }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--text-muted)" }}>
                            <MapPin size={13} color="var(--accent)" /> {intern.location}
                          </span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--text)", fontWeight: 600 }}>
                            <DollarSign size={13} color="var(--accent)" /> {intern.stipend}
                          </span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--text-muted)" }}>
                            <Clock size={13} color="var(--accent)" /> {intern.duration}
                          </span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "#10b981", fontSize: 12, fontWeight: 600 }}>
                            <CheckCircle2 size={12} /> {intern.level}
                          </span>
                        </div>
                      </div>

                      <a href={applyLink(intern.title)} className="ss-btn ss-btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                        Apply <ArrowRight size={14} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ marginTop: 20, padding: "16px 20px", borderRadius: 12, border: "1px dashed var(--ss-line)", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
                Want a longer engagement?{" "}
                <a href="/fellowship" style={{ color: "var(--accent)", fontWeight: 600 }}>
                  Check out the ScreenSentinel Fellowship
                </a>
                {" "}— 6 months, $2,000/mo, fully mentored.
              </div>
            </div>
          )}

          <div style={{ marginTop: 20, padding: "18px 22px", borderRadius: 14, border: "1px dashed var(--ss-line)", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
            Don't see your role?{" "}
            <a href="mailto:screensentinel.ai@gmail.com?subject=Open%20application" style={{ color: "var(--accent)", fontWeight: 600 }}>
              Send an open application
            </a>
            {" "}— we read every one.
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "clamp(48px,5vw,80px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap">
          <div style={{ maxWidth: 640, marginBottom: 32 }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>What you get</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 10 }}>
              Set up to do your best work
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="ss-three-col">
            {benefits.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{ padding: "20px 22px", borderRadius: 14, border: "1px solid var(--ss-line)", background: "var(--bg)" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "grid", placeItems: "center", fontSize: 0 }}>
                    <Icon size={14} color="var(--accent)" style={{ display: "block" }} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{title}</div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(48px,5vw,88px) 0", background: "var(--bg)", borderTop: "1px solid var(--ss-line)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(600px circle at 50% 0%, rgba(16,185,129,0.10), transparent 60%)", pointerEvents: "none" }} />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
            We hire for what you can build.
          </h2>
          <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
            No degree required. No minimum experience. Tell us what you've built, what excites you about this problem, and why.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:screensentinel.ai@gmail.com?subject=Open%20application" className="ss-btn ss-btn-primary">
              <Send size={14} /> screensentinel.ai@gmail.com
            </a>
            <a href="/fellowship" className="ss-btn ss-btn-ghost">
              Explore Fellowship <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .intern-row { grid-template-columns: 1fr !important; }
          .intern-row a { width: 100% !important; justify-content: center; }
        }
      `}</style>
    </div>
  );
}
