import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Monitor,
  ScanFace,
  Cpu,
  ShieldCheck,
  Lock,
  Zap,
  WifiOff,
  Globe,
  Activity,
  EyeOff,
} from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";
import { faqs, useCases } from "@/data/content";
import heroImg from "@/assets/hero-deepfake.jpg";

const stats = [
  { v: "99/100", l: "Fake videos caught", sub: "Detection accuracy in benchmarks" },
  { v: "<200ms", l: "Time to verdict", sub: "From frame to confidence score" },
  { v: "0 bytes", l: "Sent to our servers", sub: "Inference runs 100% on-device" },
  { v: "Any app", l: "Platform coverage", sub: "Browsers, calls, social, media" },
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

const pipeline = [
  {
    icon: Monitor,
    step: "01",
    title: "Video appears on your screen",
    desc: "A call, a clip, a livestream — anything playing in any window is captured frame-by-frame, locally.",
  },
  {
    icon: ScanFace,
    step: "02",
    title: "Facial & audio signals are analyzed",
    desc: "Micro-expressions, blink cadence, lip-sync drift, and voiceprint consistency are profiled in real time.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Detection engine scores anomalies",
    desc: "An on-device model fuses temporal and acoustic signals into a single calibrated trust score.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "You get an instant verdict",
    desc: "A clear, non-intrusive indicator tells you whether what you are watching can be trusted.",
  },
];

const trustItems = [
  { icon: Lock, title: "Runs locally on your device", desc: "All analysis happens on your CPU/GPU. Nothing leaves your machine." },
  { icon: EyeOff, title: "No videos uploaded, ever", desc: "We never see, store, or transmit a single frame of your screen." },
  { icon: Zap, title: "Real-time analysis", desc: "Sub-200ms inference per frame, designed for live calls and streams." },
  { icon: Globe, title: "Works on any platform", desc: "Zoom, Teams, browsers, social apps — anything that plays video." },
  { icon: WifiOff, title: "Privacy-first architecture", desc: "Fully offline-capable. No account required to use detection." },
  { icon: Activity, title: "Calibrated confidence", desc: "Honest scores with uncertainty surfaced, not black-box verdicts." },
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
      <section style={{ padding: "32px 0 80px", overflow: "hidden", background: "var(--bg)", position: "relative" }}>
        <div className="ss-hero-bg" />
        <div className="ss-grid-texture" />
        {/* Ambient atmospheric layers */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 40% at 80% 30%, rgba(16,185,129,0.18), transparent 70%), radial-gradient(50% 40% at 20% 80%, rgba(59,130,246,0.12), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="ss-two-col"
            style={{ alignItems: "center", gap: 56, gridTemplateColumns: "0.9fr 1.25fr" }}
          >
            <div>
              <div className="ss-pill" style={{ marginBottom: 22 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                {releaseText}
              </div>
              <h1
                style={{
                  fontSize: "clamp(42px,5.2vw,72px)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.02,
                  color: "var(--text)",
                  marginBottom: 22,
                }}
              >
                Can you trust
                <br />
                <span className="grad-text">what you are watching?</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 540, marginBottom: 32 }}>
                ScreenSentinel is an on-device AI layer that detects deepfaked faces and synthetic voices the moment they appear on your screen — privately, instantly, anywhere video plays.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
                <a href={exeLink} className="ss-btn ss-btn-primary">
                  Download free <ArrowRight size={15} />
                </a>
                <Link to="/product" className="ss-btn ss-btn-ghost">
                  See how it works
                </Link>
              </div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 12, color: "var(--text-subtle)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Lock size={12} /> 100% on-device
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Zap size={12} /> Sub-200ms inference
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Monitor size={12} /> Windows 10 & 11
                </span>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              {/* Ambient glow bleed */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-12% -10%",
                  background:
                    "radial-gradient(closest-side, rgba(16,185,129,0.35), transparent 70%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />
              <div
                className="ss-hero-frame"
                style={{
                  boxShadow:
                    "0 50px 140px -30px rgba(16,185,129,0.35), 0 30px 90px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                <div className="ss-hero-glow" />
                <img
                  src={heroImg}
                  alt="Cinematic close-up of a person on a video call being analyzed by ScreenSentinel"
                  width={1920}
                  height={1080}
                  style={{
                    width: "100%",
                    aspectRatio: "16/10",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                    display: "block",
                  }}
                />

                {/* Image grade overlay for cinematic depth */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%), linear-gradient(90deg, rgba(0,0,0,0.35), transparent 35%)",
                    pointerEvents: "none",
                  }}
                />

                <div className="ss-scanlines" />

                {/* Face tracking reticle */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "22%",
                    left: "38%",
                    width: "26%",
                    aspectRatio: "1/1.15",
                    pointerEvents: "none",
                  }}
                >
                  <div className="ss-corner tl" style={{ top: 0, left: 0 }} />
                  <div className="ss-corner tr" style={{ top: 0, right: 0 }} />
                  <div className="ss-corner bl" style={{ bottom: 0, left: 0 }} />
                  <div className="ss-corner br" style={{ bottom: 0, right: 0 }} />
                </div>

                {/* Live signal — top left */}
                <div
                  style={{
                    position: "absolute",
                    left: 18,
                    top: 18,
                    background: "rgba(9,9,11,0.55)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 10,
                    padding: "7px 12px",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                  LIVE · analyzing stream
                </div>

                {/* Waveform — bottom left */}
                <div
                  className="ss-float"
                  style={{
                    position: "absolute",
                    left: 18,
                    bottom: 18,
                    background: "rgba(9,9,11,0.6)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 12,
                    padding: "10px 14px",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 2, height: 18 }}>
                    {[6, 11, 4, 14, 8, 16, 5, 12, 7, 10, 4, 13].map((h, i) => (
                      <span
                        key={i}
                        style={{
                          width: 2,
                          height: h,
                          background: "var(--accent)",
                          borderRadius: 2,
                          opacity: 0.8,
                        }}
                      />
                    ))}
                  </div>
                  <span>Voiceprint match · 0.94</span>
                </div>

                {/* Verdict — top right */}
                <div
                  style={{
                    position: "absolute",
                    right: 18,
                    top: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.45)",
                      borderRadius: 10,
                      padding: "7px 12px",
                      backdropFilter: "blur(10px)",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#10b981",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Authentic · 96%
                  </div>
                  <div
                    style={{
                      background: "rgba(9,9,11,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 10,
                      padding: "6px 10px",
                      backdropFilter: "blur(10px)",
                      fontSize: 10,
                      color: "#a1a1aa",
                      fontWeight: 600,
                    }}
                  >
                    Blink cadence · normal
                  </div>
                  <div
                    style={{
                      background: "rgba(9,9,11,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 10,
                      padding: "6px 10px",
                      backdropFilter: "blur(10px)",
                      fontSize: 10,
                      color: "#a1a1aa",
                      fontWeight: 600,
                    }}
                  >
                    Lip-sync drift · 2.1ms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "56px 0 88px", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }} className="ss-stats-grid">
            {stats.map((s, i) => (
              <div
                key={s.l}
                style={{
                  padding: "36px 26px",
                  background: i === 3 ? "var(--accent)" : "var(--bg2)",
                  textAlign: "center",
                  borderRight: i < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    color: i === 3 ? "#fff" : "var(--text)",
                    marginBottom: 6,
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div style={{ fontSize: 13, color: i === 3 ? "rgba(255,255,255,0.95)" : "var(--text)", fontWeight: 700, marginBottom: 4 }}>
                  {s.l}
                </div>
                <div style={{ fontSize: 12, color: i === 3 ? "rgba(255,255,255,0.7)" : "var(--text-subtle)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(700px circle at 80% 10%, rgba(16,185,129,0.12), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>
              The detection pipeline
            </p>
            <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14, lineHeight: 1.05 }}>
              How ScreenSentinel works
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
              Four stages, executed locally on every frame. No cloud round-trip. No data egress. Just continuous, calibrated trust.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              position: "relative",
            }}
            className="ss-pipeline-grid"
          >
            {/* Connecting line */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 38,
                left: "8%",
                right: "8%",
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(16,185,129,0.5) 20%, rgba(16,185,129,0.5) 80%, transparent)",
              }}
            />
            {pipeline.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  style={{
                    position: "relative",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 18,
                    padding: "28px 22px 24px",
                    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.borderColor = "var(--accent-border)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(16,185,129,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-subtle)", letterSpacing: "0.12em", marginBottom: 8 }}>
                    {p.step}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST / PRODUCT GUARANTEES */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 40 }}>
            <div style={{ maxWidth: 600 }}>
              <p className="ss-pill" style={{ marginBottom: 16 }}>
                Built on guarantees
              </p>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
                Trust, not because we say so
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
                Every decision in ScreenSentinel is shaped by one rule: the user's screen never leaves the user's device.
              </p>
            </div>
            <Link to="/trust" className="ss-btn ss-btn-ghost">
              Explore the trust center <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
            className="ss-trust-3"
          >
            {trustItems.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 18,
                    padding: "26px 24px",
                    background: "var(--bg2)",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "var(--accent-border)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      color: "var(--accent)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{t.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="ss-usecase-section" style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 16 }}>Built for every surface</p>
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

      {/* MISSION */}
      <section style={{ padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px circle at 50% 0%, rgba(16,185,129,0.12), transparent 60%), radial-gradient(500px circle at 80% 100%, rgba(59,130,246,0.1), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
          <p className="ss-pill" style={{ marginBottom: 22 }}>
            Our mission
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 4.4vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.08,
              color: "var(--text)",
              marginBottom: 22,
            }}
          >
            Building the future of <span className="grad-text">media trust</span>.
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, margin: "0 auto" }}>
            Synthetic media is here, and it is going to keep getting better. We are a small, focused team building the infrastructure layer that keeps human truth verifiable — locally, in real time, on every screen.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/about" className="ss-btn ss-btn-ghost">Read our mission</Link>
            <a href={exeLink} className="ss-btn ss-btn-primary">Download free <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 16 }}>Trust answers</p>
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

          <div style={{ borderRadius: 20, border: "1px solid var(--border)", background: "var(--bg)", padding: "22px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
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
    </div>
  );
}
