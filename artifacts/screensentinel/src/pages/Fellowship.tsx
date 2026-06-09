import { ArrowRight, Globe, Users, Zap, Bot, CheckCircle2, Send, Award, BookOpen, Code2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    id: "gen-ai",
    label: "Track 01",
    title: "Generative AI",
    icon: Zap,
    accent: "#10b981",
    desc: "Learn how generative AI actually works — from the ground up. Understand LLMs, prompt engineering, RAG, and multimodal systems through hands-on projects you build and ship yourself.",
    skills: ["LLM Fundamentals", "Prompt Engineering", "RAG Systems", "Multimodal AI", "Fine-tuning", "AI Evaluation"],
    project: "Build a production-grade AI assistant that runs entirely locally — no paid APIs.",
  },
  {
    id: "agentic-ai",
    label: "Track 02",
    title: "Agentic AI",
    icon: Bot,
    accent: "#22d3ee",
    desc: "Understand how autonomous AI agents think, plan, and act. Build real agent systems that use tools, maintain memory, coordinate with other agents, and actually get things done.",
    skills: ["Agent Architecture", "Tool-Use & Planning", "Memory Systems", "Multi-Agent Systems", "ReAct & CoT", "Agent Safety"],
    project: "Deploy a fully autonomous agent that solves complex research tasks end-to-end without human input.",
  },
];

const timeline = [
  { week: "Week 1–2", title: "Foundations", desc: "Core AI engineering concepts, tooling setup, and cohort onboarding. Meet your peers and pick your track." },
  { week: "Week 3–5", title: "Core Modules", desc: "Structured learning through video lessons, readings, and guided coding exercises. Build small projects each week." },
  { week: "Week 6–7", title: "Capstone Project", desc: "Apply everything to a real, self-directed project. Guided by structured milestones and peer feedback." },
  { week: "Week 8", title: "Demo & Certificate", desc: "Present your project to the cohort. Top projects get featured. Everyone who completes gets a verified certificate." },
];

const whatYouGet = [
  { Icon: BookOpen, title: "Structured curriculum", desc: "8 weeks of carefully designed modules covering AI engineering end-to-end — built by practitioners, not academics." },
  { Icon: Code2, title: "Project-based learning", desc: "No theory-only lessons. Every concept is taught through code you write and projects you ship." },
  { Icon: Users, title: "Cohort community", desc: "Learn alongside a global cohort. Peer reviews, async discussion, and collaboration make the learning stick." },
  { Icon: Lightbulb, title: "Mentor office hours", desc: "Live weekly office hours with ScreenSentinel engineers. Ask anything, get unfiltered answers." },
  { Icon: Award, title: "Verified certificate", desc: "Completers receive a ScreenSentinel Fellowship certificate to showcase on LinkedIn and their portfolio." },
  { Icon: Globe, title: "Open to the world", desc: "Worldwide and fully remote. No timezone requirements, no prior experience, no cost — ever." },
];

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes, completely free. No course fee, no subscription, no hidden cost. The ScreenSentinel Fellowship is a learning initiative — we believe everyone should be able to learn AI engineering regardless of background.",
  },
  {
    q: "Do I need prior experience?",
    a: "No. The fellowship starts from the fundamentals. You need basic Python and a willingness to learn consistently. Complete beginners are welcome.",
  },
  {
    q: "How much time does it take per week?",
    a: "Roughly 10–15 hours/week. The curriculum is designed to fit alongside university, a job, or other commitments. Everything is async — no mandatory live sessions except optional office hours.",
  },
  {
    q: "What countries can apply?",
    a: "Every country. This is a worldwide, fully online program. We've designed it to be accessible from any timezone and any background.",
  },
  {
    q: "What happens after the fellowship?",
    a: "You walk away with a real project, a verified certificate, and actual AI engineering skills you built with your hands. Many fellows go on to jobs, freelance work, or further research.",
  },
];

export default function Fellowship() {
  const email = "screensentinel.ai@gmail.com";
  const applyHref = `mailto:${email}?subject=${encodeURIComponent("Fellowship Application")}`;

  return (
    <div className="ss-mobile-page">

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "clamp(56px,7vw,96px) 0 clamp(40px,5vw,72px)", overflow: "hidden", background: "var(--bg)" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(1000px 600px at 60% -15%, rgba(16,185,129,0.16), transparent 60%), radial-gradient(700px 500px at 0% 80%, rgba(34,211,238,0.08), transparent 60%)", pointerEvents: "none" }} />
        <div className="ss-container" style={{ position: "relative" }}>
          {/* Live badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(16,185,129,0.35)", background: "rgba(16,185,129,0.08)", fontSize: 12, fontWeight: 700, color: "#10b981", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981", flexShrink: 0 }} />
              Now enrolling · Cohort 1 · Free
            </span>
          </div>

          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 44px" }}>
            <h1 style={{ fontSize: "clamp(36px,5.2vw,70px)", fontWeight: 900, letterSpacing: "-0.048em", color: "var(--text)", lineHeight: 1.02, marginBottom: 20 }}>
              Learn AI Engineering.
              <br />
              <span style={{ background: "linear-gradient(90deg, #10b981, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Completely free.
              </span>
            </h1>
            <p style={{ fontSize: "clamp(15px,1.8vw,19px)", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px" }}>
              The ScreenSentinel Fellowship is an 8-week, project-based AI engineering program — open to everyone in the world, at any experience level, at zero cost.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={applyHref} className="ss-btn ss-btn-primary" style={{ fontSize: 15, padding: "12px 28px" }}>
                Apply now — it's free <ArrowRight size={15} />
              </a>
              <a href="#tracks" className="ss-btn ss-btn-ghost" style={{ fontSize: 15, padding: "12px 28px" }}>
                Explore tracks
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "var(--ss-line)", border: "1px solid var(--ss-line)", borderRadius: 18, overflow: "hidden", maxWidth: 860, margin: "0 auto" }} className="fellowship-stats">
            {[
              { v: "Free", l: "Always, forever" },
              { v: "8 weeks", l: "Program duration" },
              { v: "2 tracks", l: "AI Engineering" },
              { v: "Worldwide", l: "Open to everyone" },
            ].map((s) => (
              <div key={s.l} style={{ padding: "22px 16px", background: "var(--bg2)", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(20px,2.8vw,30px)", fontWeight: 800, color: s.v === "Free" ? "#10b981" : "var(--text)", letterSpacing: "-0.03em", marginBottom: 4 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "var(--text-subtle)", fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section style={{ padding: "clamp(48px,5vw,80px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 14 }}>What is it?</p>
              <h2 style={{ fontSize: "clamp(26px,3.2vw,42px)", fontWeight: 800, letterSpacing: "-0.038em", color: "var(--text)", lineHeight: 1.1, marginBottom: 16 }}>
                The fastest way to go from zero to AI engineer
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15.5, lineHeight: 1.75, marginBottom: 16 }}>
                Most AI courses are either too theoretical or too expensive. The ScreenSentinel Fellowship is neither. It's a focused 8-week program where you learn by building — real projects, real code, real skills.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15.5, lineHeight: 1.75 }}>
                You'll work through structured modules, build a capstone project, and graduate with a verified certificate and a portfolio piece that proves you can do the work.
              </p>
            </div>
            {/* Visual */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { n: "01", label: "Learn concepts", detail: "Structured modules, not lectures" },
                { n: "02", label: "Build projects", detail: "Code every week, ship real things" },
                { n: "03", label: "Get feedback", detail: "Peers + mentor office hours" },
                { n: "04", label: "Earn certificate", detail: "Verified, shareable, yours forever" },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", borderRadius: 12, border: "1px solid var(--ss-line)", background: "var(--bg)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, lineHeight: 0 }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "var(--accent)", lineHeight: 1, display: "block" }}>{s.n}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRACKS ── */}
      <section id="tracks" style={{ padding: "clamp(56px,6vw,88px) 0", background: "var(--bg)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>Choose your track</p>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,44px)", fontWeight: 800, letterSpacing: "-0.038em", color: "var(--text)", lineHeight: 1.1, marginBottom: 14 }}>
              Two tracks. One goal: ship real AI.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15.5, lineHeight: 1.7 }}>
              Both tracks teach AI engineering end-to-end. Pick the one that matches what excites you most.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 900, margin: "0 auto" }} className="tracks-grid">
            {tracks.map((t) => (
              <div
                key={t.id}
                style={{ background: "var(--bg2)", border: `1px solid ${t.accent}30`, borderRadius: 20, padding: "clamp(24px,3vw,36px)", position: "relative", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${t.accent}60`; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${t.accent}30`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${t.accent}14, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ position: "relative" }}>
                  {/* Icon — centered */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${t.accent}22, ${t.accent}08)`, border: `1px solid ${t.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 8px 24px -6px ${t.accent}40`, flexShrink: 0, lineHeight: 0 }}>
                      <t.icon size={26} color={t.accent} strokeWidth={1.6} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: t.accent, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.label}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 800, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.02em" }}>{t.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>{t.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                    {t.skills.map((s) => (
                      <span key={s} style={{ fontSize: 12, padding: "4px 10px", borderRadius: 8, background: `${t.accent}10`, border: `1px solid ${t.accent}28`, color: "var(--text-muted)", fontWeight: 500 }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ padding: "14px 16px", borderRadius: 12, background: `${t.accent}08`, border: `1px solid ${t.accent}20` }}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: t.accent, marginBottom: 6 }}>Capstone project</div>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: "clamp(56px,6vw,88px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 14 }}>8-week curriculum</p>
              <h2 style={{ fontSize: "clamp(26px,3.2vw,42px)", fontWeight: 800, letterSpacing: "-0.038em", color: "var(--text)", lineHeight: 1.1, marginBottom: 16 }}>
                Eight weeks.<br />One real project shipped.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
                No fluff. No endless theory. The curriculum is built around doing — you'll build something every week, and the capstone project is something you can actually show to employers.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: CheckCircle2, text: "~10–15 hours/week" },
                  { icon: CheckCircle2, text: "Fully async — no mandatory live sessions" },
                  { icon: CheckCircle2, text: "Weekly mentor office hours (optional)" },
                  { icon: CheckCircle2, text: "Verified certificate on completion" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--text-muted)" }}>
                    <Icon size={14} color="var(--accent)" style={{ flexShrink: 0 }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {timeline.map((t, i) => (
                <div key={t.week} style={{ display: "flex", gap: 0, alignItems: "stretch" }}>
                  {/* Rail */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981", border: "2px solid var(--bg2)", boxShadow: "0 0 10px rgba(16,185,129,0.6)", marginTop: 20, flexShrink: 0, zIndex: 1 }} />
                    {i < timeline.length - 1 && <div style={{ flex: 1, width: 1, background: "linear-gradient(to bottom, rgba(16,185,129,0.4), rgba(16,185,129,0.1))", marginTop: 4 }} />}
                  </div>
                  {/* Content */}
                  <div style={{ padding: "14px 0 20px 16px", flex: 1 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{t.week}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 5 }}>{t.title}</div>
                    <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: "clamp(56px,6vw,88px) 0", background: "var(--bg)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>What you get</p>
            <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1 }}>
              Everything you need to learn AI
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="ss-three-col">
            {whatYouGet.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{ padding: "22px 24px", borderRadius: 16, border: "1px solid var(--ss-line)", background: "var(--bg2)", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--ss-line)")}
              >
                <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 14 }}>
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
      <section style={{ padding: "clamp(56px,6vw,88px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 14 }}>Common questions</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1, marginBottom: 16 }}>
                Everything you need to know
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 14.5, lineHeight: 1.7 }}>
                Still unsure? Email us at{" "}
                <a href={`mailto:${email}`} style={{ color: "var(--accent)" }}>{email}</a>
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ padding: "18px 20px", borderRadius: 14, border: "1px solid var(--ss-line)", background: "var(--bg)" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <CheckCircle2 size={15} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{q}</div>
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
      <section style={{ padding: "clamp(56px,6vw,96px) 0", background: "var(--bg)", borderTop: "1px solid var(--ss-line)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(800px 500px at 50% 0%, rgba(16,185,129,0.14), transparent 60%)", pointerEvents: "none" }} />
        <div className="ss-container" style={{ position: "relative", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, padding: "6px 14px", borderRadius: 999, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <Globe size={12} /> Free · Remote · Worldwide · All levels
          </div>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-0.042em", color: "var(--text)", lineHeight: 1.06, marginBottom: 18 }}>
            Start learning AI engineering for free.
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520, margin: "0 auto 32px" }}>
            Applications are open on a rolling basis. No degree, no experience, no cost. Just apply and show up ready to build.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={applyHref} className="ss-btn ss-btn-primary" style={{ fontSize: 15, padding: "13px 32px" }}>
              <Send size={14} /> Apply now — it's free
            </a>
            <Link to="/careers" className="ss-btn ss-btn-ghost" style={{ fontSize: 15, padding: "13px 28px" }}>
              See job openings <ArrowRight size={14} />
            </Link>
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--text-subtle)" }}>
            Questions? Email <a href={`mailto:${email}`} style={{ color: "var(--accent)" }}>{email}</a>
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .tracks-grid { grid-template-columns: 1fr !important; }
          .fellowship-stats { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
