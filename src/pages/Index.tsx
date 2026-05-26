import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";
import { faqs, useCases } from "@/data/content";

const IMG = {
  hero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=1200&q=80",
  london: "https://raw.createusercontent.com/ccd74725-e0d2-4cb4-8c32-f1b3fa0b8fad/",
  teamFun: "https://raw.createusercontent.com/ca8cf7f9-95de-496c-9835-fc6dc686bda6/",
  collab: "https://raw.createusercontent.com/46d2361b-241c-4514-b167-4614b864a206/",
  lunch: "https://raw.createusercontent.com/85496808-8f95-40aa-aaf8-6a845631d802/",
  meeting: "https://raw.createusercontent.com/da8d53c9-1735-44bf-9b47-6b7a0019424e/",
};

const stats = [
  { v: "99/100", l: "Fake videos caught", sub: "We rarely miss one" },
  { v: "Instant", l: "Warning speed", sub: "You are told right away" },
  { v: "Zero", l: "Data sent to us", sub: "Complete privacy, always" },
  { v: "4,000+", l: "People protected", sub: "And growing every day" },
];

const logos = ["JPMORGAN", "REUTERS", "KPMG", "DELOITTE", "THE GUARDIAN", "BBC NEWS"];

const pillars = [
  {
    title: "Works on any video, anywhere",
    desc: "Whether you are on a video call, watching the news, or scrolling social media, ScreenSentinel quietly watches alongside you.",
  },
  {
    title: "Your screen stays private",
    desc: "We never see what is on your screen. Everything is checked on your computer and nothing is sent to us.",
  },
  {
    title: "Clear warnings, straight away",
    desc: "The moment something looks fake, you get one simple alert you can act on.",
  },
  {
    title: "So quiet you forget it is there",
    desc: "Runs in the background and only speaks up when it matters. No slowdowns.",
  },
];

const useCaseCards = [
  {
    key: "Social",
    title: useCases[0].title,
    desc: useCases[0].description,
    tone: "#3b82f6",
    tag: "Live feed protection",
    chips: ["Auto-flag suspicious clips", "Share-safe prompt", "Realtime scan"],
  },
  {
    key: "Identity",
    title: useCases[1].title,
    desc: useCases[1].description,
    tone: "#8b5cf6",
    tag: "Identity defense",
    chips: ["Biometric checks", "Consent alerts", "Low false alarms"],
  },
  {
    key: "News",
    title: useCases[2].title,
    desc: useCases[2].description,
    tone: "#f59e0b",
    tag: "Verified footage",
    chips: ["Broadcast safe", "Editorial review", "Provenance signals"],
  },
  {
    key: "Enterprise",
    title: useCases[3].title,
    desc: useCases[3].description,
    tone: "#10b981",
    tag: "Workplace protection",
    chips: ["Teams + Zoom", "Instant escalation", "Zero IT setup"],
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { data: release, isLoading } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const versionText = isLoading ? "Checking..." : (release?.version || "v2.0.0");
  const releaseText = isLoading ? "Checking latest release" : `Latest release ${versionText}`;

  return (
    <div style={{ paddingTop: 70 }}>
      {/* HERO */}
      <section style={{ padding: "24px 0 0", overflow: "hidden", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div
            className="ss-two-col"
            style={{ alignItems: "center", gap: 56, gridTemplateColumns: "1fr 1.1fr", paddingBottom: 52 }}
          >
            <div>
              <div className="ss-pill" style={{ marginBottom: 24 }}>
                {releaseText}
              </div>
              <h1
                style={{
                  fontSize: "clamp(38px,4.8vw,64px)",
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
                  lineHeight: 1.05,
                  color: "var(--text)",
                  marginBottom: 18,
                }}
              >
                Can you trust
                <br />
                <span style={{ color: "var(--accent)" }}>what you are watching?</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 34 }}>
                AI can create fake videos of real people saying and doing things they never did. ScreenSentinel watches your screen and tells you instantly if a video looks faked.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <a href={exeLink} className="ss-btn ss-btn-primary">
                  Download free <ArrowRight size={15} />
                </a>
                <Link to="/product" className="ss-btn ss-btn-ghost">
                  See how it works
                </Link>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Windows 10 and 11. Latest build: {versionText}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div className="ss-hero-frame">
                <div className="ss-hero-glow" />
                <img
                  src={IMG.hero}
                  alt="Person on a video call"
                  style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", objectPosition: "center 18%", display: "block" }}
                />
                <div className="ss-scanlines" />
                <div className="ss-corner tl" />
                <div className="ss-corner tr" />
                <div className="ss-corner bl" />
                <div className="ss-corner br" />
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    bottom: 16,
                    background: "rgba(15,23,42,0.55)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: 10,
                    padding: "8px 12px",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  AI analysis active
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} />
                  82% confidence
                </div>
              </div>
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 10,
                    padding: "8px 14px",
                    backdropFilter: "blur(8px)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Watching your screen
                </div>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "8px 12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#dc2626" }} />
                  This looks fake
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* London strip */}
        <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
          <img
            src={IMG.london}
            alt="London cityscape"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 65%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, var(--bg) 0%, transparent 35%, transparent 65%, var(--bg) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              background: "linear-gradient(to bottom, var(--bg), transparent)",
            }}
          />
          <div
            style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: "8px 20px",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                Based in Shoreditch, London
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section style={{ padding: "40px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap">
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-subtle)",
              marginBottom: 24,
            }}
          >
            Trusted by organizations across the world
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
            {logos.map((l) => (
              <span key={l} style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", color: "var(--text)", opacity: 0.75 }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "72px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }} className="ss-stats-grid">
            {stats.map((s, i) => (
              <div
                key={s.l}
                style={{ padding: "40px 28px", background: i === 3 ? "var(--accent)" : "var(--bg2)", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}
              >
                <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.05em", color: i === 3 ? "#fff" : "var(--text)", marginBottom: 6, lineHeight: 1 }}>
                  {s.v}
                </div>
                <div style={{ fontSize: 14, color: i === 3 ? "rgba(255,255,255,0.95)" : "var(--text)", fontWeight: 700, marginBottom: 4 }}>
                  {s.l}
                </div>
                <div style={{ fontSize: 12, color: i === 3 ? "rgba(255,255,255,0.65)" : "var(--text-subtle)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="ss-usecase-section" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 10 }}>
                AI protection for every video context
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 520, lineHeight: 1.65 }}>
                ScreenSentinel adapts to where you watch video, so trust remains consistent from social feeds to boardrooms.
              </p>
            </div>
            <Link to="/solutions" className="ss-btn ss-btn-ghost">
              See solutions <ArrowRight size={14} />
            </Link>
          </div>

          <div className="ss-usecase-grid">
            {useCaseCards.map((card) => (
              <div
                key={card.key}
                className="ss-usecase-card"
                style={{ borderColor: `${card.tone}55`, boxShadow: `0 24px 60px ${card.tone}22` }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{card.key}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: card.tone, background: `${card.tone}1A`, borderRadius: 999, padding: "4px 10px" }}>
                    {card.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.02em" }}>
                  {card.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  {card.desc}
                </p>
                <div style={{ display: "grid", gap: 10, marginBottom: 18 }}>
                  {card.chips.map((chip) => (
                    <div key={chip} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--text-muted)" }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: card.tone }} />
                      {chip}
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: card.tone, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Talk to us <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SCREENSENTINEL */}
      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Why people choose us
              </p>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
                Simple protection.
                <br />
                Zero effort.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, marginBottom: 44 }}>
                No technical knowledge needed. Install once and it quietly protects you every time you watch a video, on any site or app.
              </p>
              <div style={{ border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
                {pillars.map((p, idx) => (
                  <div
                    key={p.title}
                    style={{
                      padding: "24px 26px",
                      background: "var(--bg)",
                      borderBottom: idx < pillars.length - 1 ? "1px solid var(--border)" : "none",
                      display: "flex",
                      gap: 18,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent)" }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 5 }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 16 }}>
                Trust answers
              </p>
              <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 10 }}>
                Clear answers to the questions you are already asking
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 520 }}>
                Everything you need to know about privacy, detection accuracy, and how ScreenSentinel works day-to-day.
              </p>
            </div>
            <Link to="/trust" className="ss-btn ss-btn-ghost">
              Explore trust center <ArrowRight size={14} />
            </Link>
          </div>

          <div className="ss-faq-stack" style={{ marginBottom: 32 }}>
            {faqs.slice(0, 5).map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={f.question} className={`ss-faq-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", gap: 14, background: "none", border: "none", padding: 0, textAlign: "left", cursor: "pointer" }}
                  >
                    <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{f.question}</span>
                    <ChevronDown size={16} style={{ color: "var(--text-subtle)", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }} />
                  </button>
                  <div className={`ss-faq-answer ${isOpen ? "is-open" : ""}`}>
                    <p style={{ marginTop: 12, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620 }}>
                      {f.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg2)", padding: "22px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                Ready to see it in action?
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Download the latest Windows build or learn how detection works in detail.
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href={exeLink} className="ss-btn ss-btn-primary">
                Download free <ArrowRight size={14} />
              </a>
              <Link to="/product" className="ss-btn ss-btn-ghost">
                Learn how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ss-team-section" style={{ padding: "0 0 110px" }}>
        <div className="ss-hero-wrap">
          <div style={{ textAlign: "left", marginBottom: 36, maxWidth: 640 }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>
              Our people
            </p>
            <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              Real people, real mission
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.65 }}>
              Researchers, designers, and engineers building trustworthy media detection from London.
            </p>
          </div>

          <div className="ss-team-editorial">
            <div className="ss-team-img" style={{ minHeight: 420 }}>
              <img src={IMG.meeting} alt="Team meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="ss-team-side">
              <div className="ss-team-img" style={{ minHeight: 200 }}>
                <img src={IMG.collab} alt="Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="ss-team-img" style={{ minHeight: 200 }}>
                <img src={IMG.teamFun} alt="Team working" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="ss-team-stats">
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em", opacity: 0.7, marginBottom: 10 }}>
                  Team snapshot
                </div>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>18</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Researchers and builders in London</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: 12, opacity: 0.8, marginBottom: 14 }}>
                  <span>AI research</span>
                  <span>Product design</span>
                  <span>Security ops</span>
                </div>
                <Link to="/careers" style={{ fontSize: 13, fontWeight: 700, color: "#fff", textDecoration: "none" }}>
                  Meet the team &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}