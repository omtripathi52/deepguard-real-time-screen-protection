import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  ScanFace,
  Cpu,
  ShieldCheck,
  Lock,
  Zap,
  EyeOff,
  Video,
  PhoneCall,
  Newspaper,
  UserX,
  Check,
  X,
} from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";
import heroImg from "@/assets/hero-deepfake.png";
import demoAuthentic from "@/assets/demo-authentic.jpg";
import demoSynthetic from "@/assets/demo-synthetic.jpg";

const problems = [
  {
    icon: Video,
    title: "Social media manipulation",
    desc: "Fabricated clips of public figures spread faster than any fact-check ever could.",
  },
  {
    icon: PhoneCall,
    title: "Video-call scams",
    desc: "Live face-swaps now sit on calls long enough to authorise transfers and approvals.",
  },
  {
    icon: Newspaper,
    title: "News misinformation",
    desc: "Synthetic footage is entering breaking news cycles before editors can verify it.",
  },
  {
    icon: UserX,
    title: "Identity theft",
    desc: "Your face — pulled from one photo — can be placed inside a video you never recorded.",
  },
];

const pipeline = [
  {
    icon: Monitor,
    step: "01",
    title: "Capture",
    desc: "Any video on your screen — calls, clips, streams — read locally, frame by frame.",
  },
  {
    icon: ScanFace,
    step: "02",
    title: "Analyse",
    desc: "Micro-expressions, blink cadence, lip-sync drift and voiceprint, profiled in real time.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Score",
    desc: "An on-device model fuses temporal and acoustic signals into a calibrated trust score.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Verdict",
    desc: "A quiet, instant indicator tells you whether what you are watching can be trusted.",
  },
];

export default function Index() {
  const [side, setSide] = useState<"real" | "fake">("real");
  const { data: release, isLoading } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const versionText = isLoading ? "Checking..." : (release?.version || "v2.0.0");
  const releaseText = isLoading ? "Checking latest release" : `Latest release ${versionText}`;

  useEffect(() => {
    [demoAuthentic, demoSynthetic].forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <div className="ss-mobile-page ss-home-page">
      {/* HERO — full viewport, owns the opening */}
      <section
        style={{
          minHeight: "calc(100vh - 52px)",
          display: "flex",
          alignItems: "center",
          padding: "40px 0 64px",
          overflow: "hidden",
          background: "var(--bg)",
          position: "relative",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 75% 20%, rgba(16,185,129,0.12), transparent 70%), radial-gradient(700px 400px at 10% 90%, rgba(59,130,246,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none",
          }}
        />

        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div
            className="ss-two-col"
            style={{ alignItems: "center", gap: 48, gridTemplateColumns: "0.85fr 1.3fr" }}
          >
            <div>
              <div className="ss-pill" style={{ marginBottom: 22 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                {releaseText}
              </div>
              <h1
                style={{
                  fontSize: "clamp(40px,5vw,68px)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.02,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                Can you trust
                <br />
                <span className="grad-text">what you are watching?</span>
              </h1>
              <p style={{ fontSize: 16.5, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 460, marginBottom: 28 }}>
                ScreenSentinel is an on-device AI layer that detects deepfaked faces and synthetic voices the moment they appear on your screen — privately, instantly, anywhere video plays.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
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
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-15% -12%",
                  background:
                    "radial-gradient(closest-side at 70% 40%, rgba(16,185,129,0.28), transparent 70%), radial-gradient(closest-side at 20% 80%, rgba(59,130,246,0.18), transparent 70%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 60px 140px -40px rgba(16,185,129,0.3), 0 30px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  background: "#000",
                }}
              >
                <img
                  src={heroImg}
                  alt="ScreenSentinel analyzing a video call in real time and flagging deepfake content"
                  width={1920}
                  height={1080}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>The problem</p>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 16, lineHeight: 1.05 }}>
              Fake videos are no longer rare.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
              Synthetic media now arrives at consumer speed — generated in minutes, shared in seconds, indistinguishable on a glance. The threats below are not future scenarios. They are happening today, at scale.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="ss-pipeline-grid">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--ss-line)",
                    borderRadius: 16,
                    padding: "24px 22px",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      color: "#f87171",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "96px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(700px circle at 80% 10%, rgba(16,185,129,0.10), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 680, marginBottom: 48 }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>How it works</p>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14, lineHeight: 1.05 }}>
              Four stages, all on your device
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
              No cloud round-trip. No data egress. Just continuous, calibrated trust running quietly in the background.
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
                    background: "var(--bg2)",
                    border: "1px solid var(--ss-line)",
                    borderRadius: 16,
                    padding: "26px 22px 22px",
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

      {/* INTERACTIVE: REAL vs FAKE */}
      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)", borderBottom: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 40px" }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>Interactive</p>
            <h2 style={{ fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14, lineHeight: 1.05 }}>
              See what ScreenSentinel sees
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>
              Toggle between a real frame and a synthetic one. Watch the signals shift in real time.
            </p>
          </div>

          {/* Toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
            <div
              role="tablist"
              style={{
                display: "inline-flex",
                padding: 4,
                borderRadius: 999,
                border: "1px solid var(--ss-line)",
                background: "var(--bg)",
                gap: 4,
              }}
            >
              {(["real", "fake"] as const).map((opt) => (
                <button
                  key={opt}
                  role="tab"
                  aria-selected={side === opt}
                  onClick={() => setSide(opt)}
                  style={{
                    padding: "8px 22px",
                    borderRadius: 999,
                    border: "none",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    color: side === opt ? "#000" : "var(--text-muted)",
                    background:
                      side === opt
                        ? opt === "real"
                          ? "var(--accent)"
                          : "#f87171"
                        : "transparent",
                    transition: "all 0.2s ease",
                    textTransform: "capitalize",
                  }}
                >
                  {opt === "real" ? "Authentic frame" : "Synthetic frame"}
                </button>
              ))}
            </div>
          </div>

          {/* Viewer */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 18,
              maxWidth: 1080,
              margin: "0 auto",
            }}
            className="ss-two-col"
          >
            {/* Frame */}
            <div
              style={{
                position: "relative",
                borderRadius: 18,
                overflow: "hidden",
                border: `1px solid ${side === "real" ? "rgba(16,185,129,0.35)" : "rgba(239,68,68,0.35)"}`,
                background: "#000",
                aspectRatio: "16/10",
                transition: "border-color 0.4s ease",
              }}
            >
              <img
                src={demoAuthentic}
                alt="Authentic video frame"
                width={1536}
                height={1024}
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: side === "real" ? 1 : 0,
                  transition: "opacity 0.25s ease",
                }}
              />
              <img
                src={demoSynthetic}
                alt="Synthetic video frame"
                width={1536}
                height={1024}
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: side === "fake" ? 1 : 0,
                  transition: "opacity 0.25s ease",
                }}
              />
              {/* Scan overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `repeating-linear-gradient(0deg, transparent 0px, transparent 6px, ${
                    side === "real" ? "rgba(16,185,129,0.05)" : "rgba(239,68,68,0.06)"
                  } 6px, ${side === "real" ? "rgba(16,185,129,0.05)" : "rgba(239,68,68,0.06)"} 7px)`,
                  pointerEvents: "none",
                }}
              />
              {/* Detection box */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "22%",
                  left: "32%",
                  width: "36%",
                  height: "52%",
                  border: `1.5px dashed ${side === "real" ? "rgba(16,185,129,0.9)" : "rgba(239,68,68,0.9)"}`,
                  borderRadius: 6,
                  boxShadow: `0 0 0 2000px rgba(0,0,0,0.15) inset`,
                  transition: "border-color 0.4s ease",
                }}
              />
              {/* Verdict badge */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: side === "real" ? "rgba(16,185,129,0.18)" : "rgba(239,68,68,0.2)",
                  border: `1px solid ${side === "real" ? "rgba(16,185,129,0.5)" : "rgba(239,68,68,0.5)"}`,
                  color: side === "real" ? "var(--accent)" : "#fca5a5",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                }}
              >
                {side === "real" ? <Check size={14} /> : <X size={14} />}
                {side === "real" ? "Authentic · 97%" : "Synthetic · 94%"}
              </div>
            </div>

            {/* Signals panel */}
            <div
              style={{
                background: "var(--bg)",
                border: "1px solid var(--ss-line)",
                borderRadius: 18,
                padding: "24px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-subtle)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Signal analysis
              </div>
              {[
                { label: "Blink cadence", real: 96, fake: 38 },
                { label: "Lip-sync drift", real: 98, fake: 22 },
                { label: "Micro-expression", real: 94, fake: 41 },
                { label: "Voiceprint match", real: 99, fake: 18 },
                { label: "Temporal coherence", real: 95, fake: 29 },
              ].map((s) => {
                const v = side === "real" ? s.real : s.fake;
                const good = v >= 70;
                return (
                  <div key={s.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
                      <span style={{ color: "var(--text)", fontWeight: 600 }}>{s.label}</span>
                      <span style={{ color: good ? "var(--accent)" : "#f87171", fontFamily: "monospace", fontWeight: 700 }}>{v}%</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 4, background: "var(--ss-line)", overflow: "hidden" }}>
                      <div
                        style={{
                          width: `${v}%`,
                          height: "100%",
                          background: good ? "var(--accent)" : "#f87171",
                          transition: "width 0.6s cubic-bezier(0.4,0,0.2,1), background 0.4s ease",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              <div
                style={{
                  marginTop: 6,
                  paddingTop: 14,
                  borderTop: "1px solid var(--ss-line)",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                {side === "real"
                  ? "Signals align with natural human behaviour. ScreenSentinel returns a clean verdict — you can keep watching."
                  : "Multiple signals fall outside human baselines. ScreenSentinel raises a quiet alert before the content can deceive."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST PREVIEW */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div
            style={{
              border: "1px solid var(--ss-line)",
              borderRadius: 22,
              padding: "44px",
              background:
                "linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%), radial-gradient(600px circle at 80% 0%, rgba(16,185,129,0.08), transparent 60%)",
              display: "grid",
              gridTemplateColumns: "1fr 1.1fr",
              gap: 40,
              alignItems: "center",
            }}
            className="ss-two-col"
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 18 }}>Architecture, not promises</p>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
                Built so your screen never has to leave your device
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                Detection runs entirely on your CPU. No frames are uploaded. No telemetry is collected. Privacy isn't a setting — it's the architecture.
              </p>
              <Link to="/trust" className="ss-btn ss-btn-primary">
                Explore trust architecture <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { icon: Lock, title: "Runs locally", desc: "All inference happens on your machine." },
                { icon: EyeOff, title: "No uploads, ever", desc: "Frames never leave your device." },
                { icon: ShieldCheck, title: "Zero tracking", desc: "No accounts, no analytics, no logs." },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 18px",
                      borderRadius: 14,
                      border: "1px solid var(--ss-line)",
                      background: "var(--bg)",
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
                        color: "var(--accent)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{t.title}</div>
                      <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{t.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "104px 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px circle at 50% 0%, rgba(16,185,129,0.14), transparent 60%), radial-gradient(500px circle at 80% 100%, rgba(59,130,246,0.08), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(36px, 4.4vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              color: "var(--text)",
              marginBottom: 18,
            }}
          >
            Trust what you watch.
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 32px" }}>
            Free for personal use. Installs in under a minute. Runs entirely on your device.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={exeLink} className="ss-btn ss-btn-primary">
              Download for Windows <ArrowRight size={15} />
            </a>
            <Link to="/product" className="ss-btn ss-btn-ghost">
              Learn how it works
            </Link>
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", fontSize: 12, color: "var(--text-subtle)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Lock size={12} /> 100% on-device</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><EyeOff size={12} /> No uploads</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Zap size={12} /> Sub-200ms</span>
          </div>
        </div>
      </section>
    </div>
  );
}
