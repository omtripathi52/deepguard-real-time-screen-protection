import { ArrowRight, Globe, Calendar, DollarSign, Users, Zap, Brain, Bot, BarChart2, FlaskConical, CheckCircle2, Send, Star, Clock, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    id: "gen-ai",
    label: "Track 01",
    title: "Generative AI",
    icon: Zap,
    accent: "#10b981",
    desc: "Build the next wave of generative systems. From LLM fine-tuning and prompt engineering to multimodal architectures — learn to create AI that generates, not just classifies.",
    skills: ["LLM Fine-tuning", "Prompt Engineering", "RAG Systems", "Multimodal Models", "Diffusion Models", "Evaluation Frameworks"],
    projects: "Build a production-grade generative pipeline that runs locally without cloud APIs.",
  },
  {
    id: "agentic-ai",
    label: "Track 02",
    title: "Agentic AI",
    icon: Bot,
    accent: "#22d3ee",
    desc: "Design autonomous AI agents that plan, reason, and act. Learn tool-use, memory architectures, multi-agent coordination, and how to build AI systems that actually get things done.",
    skills: ["Agent Frameworks", "Tool-Use & Planning", "Memory Systems", "Multi-Agent Orchestration", "ReAct / Chain-of-Thought", "Safety & Alignment"],
    projects: "Deploy a fully autonomous agent that solves real-world research tasks end-to-end.",
  },
  {
    id: "ml-engineering",
    label: "Track 03",
    title: "ML Engineering",
    icon: FlaskConical,
    accent: "#a78bfa",
    desc: "Go from notebook to production. Master model optimisation, on-device inference, MLOps pipelines, and the engineering craft behind AI systems that ship to real users at scale.",
    skills: ["PyTorch & ONNX", "Quantization & Pruning", "Edge Inference", "MLOps & CI/CD", "Model Monitoring", "Distributed Training"],
    projects: "Compress and ship a vision model to run under 200ms on CPU — no GPU required.",
  },
  {
    id: "data-science",
    label: "Track 04",
    title: "Data Science",
    icon: BarChart2,
    accent: "#f59e0b",
    desc: "Turn raw data into decisions. Master statistical modelling, experiment design, adversarial dataset curation, and the full lifecycle from messy data to insights that change products.",
    skills: ["Statistical Modelling", "Experiment Design", "Adversarial Data", "Feature Engineering", "Evaluation & Metrics", "Python & SQL"],
    projects: "Design an adversarial evaluation suite that exposes blind spots in an existing AI system.",
  },
];

const timeline = [
  { phase: "Apply", date: "Rolling admissions", desc: "Submit your application anytime. We review on a rolling basis — no deadlines to stress about." },
  { phase: "Interview", date: "Within 2 weeks", desc: "A 30-minute conversation with a ScreenSentinel engineer. No leetcode. We talk about what you've built and what you want to learn." },
  { phase: "Onboard", date: "Month 1", desc: "Start with a structured onboarding week, meet your cohort, and get your project brief and mentor assigned." },
  { phase: "Build", date: "Months 2 – 5", desc: "Deep-work mode. Weekly mentor 1:1s, async collaboration with your cohort, and hands-on work on a real ScreenSentinel challenge." },
  { phase: "Demo Day", date: "Month 6", desc: "Present your work publicly. The best projects ship into ScreenSentinel's product or get open-sourced." },
];

const perks = [
  { Icon: DollarSign, title: "$2,000 / month stipend", desc: "Paid monthly in USD, worldwide. No equity, no strings." },
  { Icon: Laptop, title: "$500 equipment grant", desc: "Buy what you need to do your best work — hardware, software, anything." },
  { Icon: Brain, title: "$1,000 learning budget", desc: "Courses, conferences, books, API credits — fully expensed." },
  { Icon: Globe, title: "100% remote & async", desc: "Work from any timezone. Deep-work hours are protected." },
  { Icon: Users, title: "Direct mentor access", desc: "Weekly 1:1s with a senior ScreenSentinel engineer, not a TA." },
  { Icon: Star, title: "Fast-track to a role", desc: "Top fellows get an offer before Demo Day. No interview required." },
];

const faqs = [
  {
    q: "Do I need prior work experience?",
    a: "No. We accept fellows at all levels — including complete beginners. What we look for is curiosity, consistency, and a track record of learning independently, even if that's through personal projects or self-study.",
  },
  {
    q: "Is this a full-time commitment?",
    a: "The fellowship is designed for ~20 hours/week, so it works alongside university, a part-time job, or another commitment. Full-time fellows progress faster, but it's not required.",
  },
  {
    q: "What countries are eligible?",
    a: "Worldwide. We've had fellows from India, Nigeria, Brazil, Pakistan, Ukraine, the US, UK, and 30+ other countries. The fellowship is remote-first and fully async-friendly.",
  },
  {
    q: "Do I need to pick a track before applying?",
    a: "You can indicate your preference, but we sometimes suggest a better-fit track after the interview. Don't stress — we'll figure it out together.",
  },
  {
    q: "What happens after the fellowship?",
    a: "You get a public project to show for your work, a verified certificate, strong references, and a real shot at a full-time or internship role at ScreenSentinel — or any AI company.",
  },
];

export default function Fellowship() {
  return (
    <div className="ss-mobile-page">
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: "clamp(56px,7vw,96px) 0 clamp(40px,5vw,72px)",
          overflow: "hidden",
          background: "var(--bg)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1000px 600px at 60% -15%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(700px 500px at 0% 80%, rgba(167,139,250,0.10), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(16,185,129,0.35)",
                background: "rgba(16,185,129,0.08)",
                fontSize: 12,
                fontWeight: 700,
                color: "#10b981",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                }}
              />
              Now accepting applications · Cohort 1
            </span>
          </div>

          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 48px" }}>
            <h1
              style={{
                fontSize: "clamp(38px,5.2vw,72px)",
                fontWeight: 900,
                letterSpacing: "-0.048em",
                color: "var(--text)",
                lineHeight: 1.02,
                marginBottom: 20,
              }}
            >
              The ScreenSentinel{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #10b981, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Fellowship
              </span>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px,1.8vw,20px)",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: 640,
                margin: "0 auto 32px",
              }}
            >
              A 6-month, fully remote, paid AI fellowship for builders at every level. Work on real deepfake detection challenges alongside ScreenSentinel engineers. Ship something you're proud of.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:fellowship@screensentinel.me?subject=Fellowship%20Application"
                className="ss-btn ss-btn-primary"
                style={{ fontSize: 15, padding: "12px 28px" }}
              >
                Apply now — it's free <ArrowRight size={15} />
              </a>
              <a href="#tracks" className="ss-btn ss-btn-ghost" style={{ fontSize: 15, padding: "12px 28px" }}>
                Explore tracks
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 1,
              background: "var(--ss-line)",
              border: "1px solid var(--ss-line)",
              borderRadius: 18,
              overflow: "hidden",
              maxWidth: 860,
              margin: "0 auto",
            }}
            className="fellowship-stats"
          >
            {[
              { v: "$2,000", l: "Monthly stipend" },
              { v: "6 months", l: "Program duration" },
              { v: "4 tracks", l: "Specializations" },
              { v: "Worldwide", l: "Open to everyone" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  padding: "22px 20px",
                  background: "var(--bg2)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(22px,2.8vw,32px)",
                    fontWeight: 800,
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                    marginBottom: 4,
                  }}
                >
                  {s.v}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-subtle)", fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRACKS ── */}
      <section
        id="tracks"
        style={{
          padding: "clamp(56px,6vw,88px) 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--ss-line)",
        }}
      >
        <div className="ss-container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>Fellowship tracks</p>
            <h2
              style={{
                fontSize: "clamp(28px,3.4vw,46px)",
                fontWeight: 800,
                letterSpacing: "-0.038em",
                color: "var(--text)",
                lineHeight: 1.1,
                marginBottom: 14,
              }}
            >
              Choose your specialization
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
              Each track is 6 months of focused, project-driven learning — mentored by engineers actively working in that domain.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
            className="tracks-grid"
          >
            {tracks.map((t) => (
              <div
                key={t.id}
                style={{
                  background: "var(--bg)",
                  border: `1px solid ${t.accent}28`,
                  borderRadius: 20,
                  padding: "clamp(24px,3vw,36px)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${t.accent}55`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${t.accent}28`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* ambient glow */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${t.accent}12, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20, gap: 12 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: `linear-gradient(135deg, ${t.accent}22, ${t.accent}08)`,
                        border: `1px solid ${t.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 8px 24px -6px ${t.accent}40`,
                        flexShrink: 0,
                      }}
                    >
                      <t.icon size={24} color={t.accent} strokeWidth={1.6} />
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: t.accent,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        paddingTop: 4,
                      }}
                    >
                      {t.label}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(20px,2vw,26px)",
                      fontWeight: 800,
                      color: "var(--text)",
                      marginBottom: 12,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
                    {t.desc}
                  </p>

                  {/* Skills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                    {t.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: 12,
                          padding: "4px 10px",
                          borderRadius: 8,
                          background: `${t.accent}10`,
                          border: `1px solid ${t.accent}28`,
                          color: "var(--text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Capstone */}
                  <div
                    style={{
                      padding: "14px 16px",
                      borderRadius: 12,
                      background: `${t.accent}08`,
                      border: `1px solid ${t.accent}20`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: t.accent,
                        marginBottom: 6,
                      }}
                    >
                      Capstone project
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                      {t.projects}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        style={{
          padding: "clamp(56px,6vw,88px) 0",
          background: "var(--bg)",
          borderTop: "1px solid var(--ss-line)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(800px 500px at 80% 60%, rgba(34,211,238,0.07), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ maxWidth: 640, marginBottom: 52 }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>How it works</p>
            <h2
              style={{
                fontSize: "clamp(28px,3.4vw,46px)",
                fontWeight: 800,
                letterSpacing: "-0.038em",
                color: "var(--text)",
                lineHeight: 1.1,
                marginBottom: 14,
              }}
            >
              Six months.<br />One real project shipped.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
              No fake assignments. No certificate mills. You'll build something that actually matters — and have the code and a public demo to prove it.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((t, i) => (
              <div
                key={t.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1px 1fr",
                  gap: 0,
                  alignItems: "stretch",
                  minHeight: 80,
                }}
                className="timeline-row"
              >
                {/* Left */}
                <div
                  style={{
                    padding: "20px 20px 20px 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    paddingTop: 22,
                  }}
                >
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text)",
                      textAlign: "right",
                      marginBottom: 2,
                    }}
                  >
                    {t.phase}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--accent)",
                      fontWeight: 600,
                      textAlign: "right",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Clock size={10} />
                    {t.date}
                  </div>
                </div>
                {/* Rail */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#10b981",
                      border: "2px solid var(--bg)",
                      boxShadow: "0 0 12px rgba(16,185,129,0.6)",
                      marginTop: 22,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  />
                  {i < timeline.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        background: "linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(16,185,129,0.1))",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>
                {/* Right */}
                <div style={{ padding: "18px 0 20px 24px" }}>
                  <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 560 }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section
        style={{
          padding: "clamp(56px,6vw,88px) 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--ss-line)",
        }}
      >
        <div className="ss-container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>What you get</p>
            <h2
              style={{
                fontSize: "clamp(26px,3vw,40px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              Everything you need to focus
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
            className="ss-three-col"
          >
            {perks.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  padding: "22px 24px",
                  borderRadius: 16,
                  border: "1px solid var(--ss-line)",
                  background: "var(--bg)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ss-line)")}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 14,
                  }}
                >
                  <Icon size={17} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{title}</div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section
        style={{
          padding: "clamp(56px,6vw,88px) 0",
          background: "var(--bg)",
          borderTop: "1px solid var(--ss-line)",
        }}
      >
        <div className="ss-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 14 }}>Common questions</p>
              <h2
                style={{
                  fontSize: "clamp(26px,3vw,40px)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  color: "var(--text)",
                  lineHeight: 1.1,
                  marginBottom: 16,
                }}
              >
                Everything you need to know
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
                Still unsure? Email us at{" "}
                <a href="mailto:fellowship@screensentinel.me" style={{ color: "var(--accent)" }}>
                  fellowship@screensentinel.me
                </a>
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  style={{
                    padding: "20px 22px",
                    borderRadius: 14,
                    border: "1px solid var(--ss-line)",
                    background: "var(--bg2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="var(--accent)"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{q}</div>
                      <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "clamp(56px,6vw,96px) 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--ss-line)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px 500px at 50% 0%, rgba(16,185,129,0.14), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="ss-container"
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
              padding: "6px 14px",
              borderRadius: 999,
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-border)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Globe size={12} /> Remote · Worldwide · All levels welcome
          </div>
          <h2
            style={{
              fontSize: "clamp(30px,4vw,52px)",
              fontWeight: 900,
              letterSpacing: "-0.042em",
              color: "var(--text)",
              lineHeight: 1.06,
              marginBottom: 18,
            }}
          >
            Start building something real.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 520,
              margin: "0 auto 32px",
            }}
          >
            Applications are open on a rolling basis. No degree required. No experience required. Just show us what you want to build and why.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:fellowship@screensentinel.me?subject=Fellowship%20Application"
              className="ss-btn ss-btn-primary"
              style={{ fontSize: 15, padding: "13px 32px" }}
            >
              <Send size={14} /> Apply now — free & rolling
            </a>
            <Link to="/careers" className="ss-btn ss-btn-ghost" style={{ fontSize: 15, padding: "13px 28px" }}>
              See full-time roles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .tracks-grid { grid-template-columns: 1fr !important; }
          .fellowship-stats { grid-template-columns: repeat(2,1fr) !important; }
          .timeline-row { grid-template-columns: 80px 1px 1fr !important; }
        }
        @media (max-width: 480px) {
          .fellowship-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
