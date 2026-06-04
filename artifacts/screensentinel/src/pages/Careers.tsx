import { ArrowRight, MapPin, Globe, Heart, BookOpen, Zap, Users, CheckCircle2, DollarSign, Send } from "lucide-react";
import { openRoles } from "@/data/content";

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
  { Icon: DollarSign, title: "Top-of-market USD pay", desc: "Compensation paid in USD, anywhere in the world." },
  { Icon: Globe, title: "Fully remote", desc: "Work from anywhere. Async-first with deep-work blocks." },
  { Icon: Heart, title: "Health & wellness", desc: "Private medical cover and a monthly wellness stipend." },
  { Icon: BookOpen, title: "Learning budget", desc: "$2,000/year for conferences, courses and books." },
  { Icon: Users, title: "Team retreats", desc: "Twice a year, the whole team gathers in person." },
  { Icon: Zap, title: "Top-tier equipment", desc: "Your choice of laptop, monitor and home-office setup." },
];

const applyLink = (title: string) =>
  `mailto:careers@screensentinel.com?subject=${encodeURIComponent(`Role application: ${title}`)}`;

export default function Careers() {
  return (
    <div>
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
                A small, remote-first team building on-device AI to verify what billions of people watch. If you care about privacy, craft, and work that matters — keep reading.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
                <a href="#roles" className="ss-btn ss-btn-primary">
                  See open roles <ArrowRight size={14} />
                </a>
                <a href="mailto:careers@screensentinel.com?subject=Open%20application" className="ss-btn ss-btn-ghost">
                  <Send size={13} /> Send open application
                </a>
              </div>
              <div style={{ display: "flex", gap: 22, flexWrap: "wrap", fontSize: 12.5, color: "var(--text-subtle)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Globe size={12} /> Remote — Worldwide
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <DollarSign size={12} /> Paid in USD
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Users size={12} /> {openRoles.length} open roles
                </span>
              </div>
            </div>

            {/* Distributed team visual */}
            <div className="careers-globe" style={{ position: "relative", aspectRatio: "1 / 0.85" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 22,
                  border: "1px solid var(--ss-line)",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.06), transparent 70%), var(--bg2)",
                  overflow: "hidden",
                }}
              >
                <svg viewBox="0 0 400 340" width="100%" height="100%" style={{ display: "block" }} aria-hidden>
                  <defs>
                    <radialGradient id="ring" cx="50%" cy="50%" r="50%">
                      <stop offset="60%" stopColor="rgba(16,185,129,0)" />
                      <stop offset="100%" stopColor="rgba(16,185,129,0.25)" />
                    </radialGradient>
                  </defs>
                  {/* concentric rings */}
                  {[60, 110, 160].map((r) => (
                    <circle key={r} cx="200" cy="170" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 5" />
                  ))}
                  <circle cx="200" cy="170" r="160" fill="url(#ring)" />
                  {/* connection lines */}
                  {[
                    [60, 90], [340, 80], [80, 260], [330, 250], [200, 40], [200, 300], [40, 170], [360, 170],
                  ].map(([x, y], i) => (
                    <line key={i} x1="200" y1="170" x2={x} y2={y} stroke="rgba(16,185,129,0.18)" strokeWidth="1" />
                  ))}
                  {/* nodes */}
                  {[
                    [60, 90], [340, 80], [80, 260], [330, 250], [200, 40], [200, 300], [40, 170], [360, 170],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="5" fill="rgba(16,185,129,0.9)" />
                      <circle cx={x} cy={y} r="11" fill="rgba(16,185,129,0.15)">
                        <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                      </circle>
                    </g>
                  ))}
                  {/* center */}
                  <circle cx="200" cy="170" r="14" fill="var(--bg)" stroke="rgba(16,185,129,0.9)" strokeWidth="1.5" />
                  <circle cx="200" cy="170" r="5" fill="rgba(16,185,129,0.9)" />
                </svg>
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
              The category is forming now. The people who shape it will be the ones who shipped early, made the right architectural calls, and held the line on privacy.
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

      {/* OPEN ROLES */}
      <section id="roles" style={{ padding: "clamp(48px,5vw,88px) 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 14 }}>Open positions</p>
              <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 6 }}>
                Now hiring
              </h2>
              <p style={{ fontSize: 13.5, color: "var(--text-muted)" }}>
                {openRoles.length} roles · Remote worldwide · Salaries in USD
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {openRoles.map((job) => (
              <article
                key={job.id}
                className="ss-role-card"
                style={{
                  border: "1px solid var(--ss-line)",
                  borderRadius: 16,
                  padding: "22px 24px",
                  background: "var(--bg2)",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--ss-line)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr auto", gap: 24, alignItems: "center" }} className="ss-role-row">
                  <div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "var(--accent-dim)", border: "1px solid var(--accent-border)" }}>
                        {job.department}
                      </span>
                      {job.seniority && (
                        <span style={{ fontSize: 10.5, color: "var(--text-subtle)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          {job.seniority}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.015em" }}>{job.title}</h3>
                    <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560, marginBottom: job.tags?.length ? 12 : 0 }}>
                      {job.description}
                    </p>
                    {job.tags && job.tags.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: 11.5,
                              color: "var(--text-muted)",
                              padding: "3px 9px",
                              borderRadius: 6,
                              background: "var(--bg)",
                              border: "1px solid var(--ss-line)",
                              fontWeight: 500,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-muted)" }}>
                      <MapPin size={13} color="var(--accent)" /> {job.location}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text)", fontWeight: 600 }}>
                      <DollarSign size={13} color="var(--accent)" /> {job.salary}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-subtle)" }}>
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

          <div style={{ marginTop: 24, padding: "20px 24px", borderRadius: 14, border: "1px dashed var(--ss-line)", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
            Don't see your role?{" "}
            <a href="mailto:careers@screensentinel.com?subject=Open%20application" style={{ color: "var(--accent)", fontWeight: 600 }}>
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
                style={{
                  padding: "20px 22px",
                  borderRadius: 14,
                  border: "1px solid var(--ss-line)",
                  background: "var(--bg)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Icon size={14} />
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
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(600px circle at 50% 0%, rgba(16,185,129,0.10), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
            Don't see your role?
          </h2>
          <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
            We hire for portfolios over CVs. Tell us what you've built, what you'd want to build here, and why.
          </p>
          <a href="mailto:careers@screensentinel.com?subject=Open%20application" className="ss-btn ss-btn-primary">
            careers@screensentinel.com <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
