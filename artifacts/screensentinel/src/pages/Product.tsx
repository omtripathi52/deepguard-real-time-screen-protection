import { useGitHubRelease } from "@/hooks/use-github-release";
import productHero from "@/assets/product-hero.jpg";
import {
  Video,
  ScanFace,
  Activity,
  ShieldCheck,
  Globe,
  Bell,
  Lock,
  Cpu,
  ArrowRight,
  Download,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    n: "01",
    icon: Video,
    label: "Capture",
    title: "Video detected on screen",
    desc: "A webcam call, livestream, news clip or social video — ScreenSentinel watches the pixels of any video as it plays.",
    accent: "#10b981",
  },
  {
    n: "02",
    icon: ScanFace,
    label: "Analyze",
    title: "Facial micro-signals scanned",
    desc: "On-device vision models inspect blink cadence, skin micro-motion, lip-sync drift and lighting consistency in real time.",
    accent: "#22d3ee",
  },
  {
    n: "03",
    icon: Activity,
    label: "Score",
    title: "Confidence model engages",
    desc: "A calibrated ensemble fuses every signal into a single probability — no hallucinated certainty, no opaque scores.",
    accent: "#a78bfa",
  },
  {
    n: "04",
    icon: ShieldCheck,
    label: "Verdict",
    title: "Trust result delivered",
    desc: "One plain-English answer appears beside the video. Real, suspicious, or fake — always within a second.",
    accent: "#f59e0b",
  },
];

const features = [
  {
    icon: Globe,
    title: "Works on any video, anywhere",
    desc: "Zoom, Teams, YouTube, X, news sites, DMs — if it plays on your screen, ScreenSentinel reads it.",
    preview: { label: "Coverage", value: "All apps", chips: ["Zoom", "Meet", "YouTube", "Chrome", "X"] },
  },
  {
    icon: Bell,
    title: "A single, plain-English warning",
    desc: "No confidence percentages, no waveform jargon. Just one calm verdict the moment something looks wrong.",
    preview: { label: "Last verdict", value: "Looks real", chips: ["No anomalies", "Calibrated"] },
  },
  {
    icon: Lock,
    title: "Nothing ever leaves your device",
    desc: "All inference runs locally on your CPU/GPU. No frames, no audio, no metadata are uploaded — ever.",
    preview: { label: "Network", value: "0 bytes sent", chips: ["Offline", "Zero telemetry"] },
  },
  {
    icon: Cpu,
    title: "Quiet by design",
    desc: "Lightweight runtime sips memory and stays out of the way. You'll forget it's running until it matters.",
    preview: { label: "Footprint", value: "~120 MB RAM", chips: ["Background", "Low CPU"] },
  },
];

export default function Product() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const version = release?.version || "v2.0.0";
  const [activeFeature, setActiveFeature] = useState(0);
  const Active = features[activeFeature];

  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", padding: "20px 0 56px", overflow: "hidden" }}>
        {/* ambient atmospheric bridge from navbar */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1100px 520px at 50% -10%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(700px 420px at 88% 8%, rgba(34,211,238,0.10), transparent 60%), linear-gradient(to bottom, rgba(16,185,129,0.05), transparent 18%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 40px" }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>
              <Sparkles size={11} /> Version {version} · On-device
            </p>
            <h1
              style={{
                fontSize: "clamp(36px,4.4vw,58px)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                color: "var(--text)",
                marginBottom: 16,
                lineHeight: 1.04,
              }}
            >
              Trust infrastructure
              <br />
              for everything you watch.
            </h1>
            <p
              style={{
                fontSize: 17,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: 580,
                margin: "0 auto",
              }}
            >
              ScreenSentinel sits invisibly behind every video on your screen and tells you,
              in real time, whether the human you're watching is actually human.
            </p>
          </div>


          {/* Hero media */}
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid var(--border-strong)",
              boxShadow:
                "0 40px 120px -40px rgba(16,185,129,0.25), 0 20px 60px -30px rgba(0,0,0,0.6)",
              maxWidth: 1280,
              margin: "0 auto",
              aspectRatio: "16/9",
            }}
          >
            <img
              src={productHero}
              alt="ScreenSentinel analyzing a video call in real time"
              width={1600}
              height={900}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* gradient washes */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(9,9,11,0.92) 0%, rgba(9,9,11,0.25) 45%, transparent 70%), linear-gradient(to right, rgba(9,9,11,0.55), transparent 40%, transparent 60%, rgba(9,9,11,0.55))",
              }}
            />
            {/* face reticle */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "26%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "clamp(180px, 22%, 280px)",
                aspectRatio: "1/1.15",
                borderRadius: "44%",
                border: "1.5px solid rgba(16,185,129,0.65)",
                boxShadow: "0 0 0 1px rgba(16,185,129,0.15) inset, 0 0 40px rgba(16,185,129,0.18)",
              }}
            >
              {/* corner ticks */}
              {[
                { top: -6, left: -6, borderTop: "2px solid rgba(16,185,129,0.85)", borderLeft: "2px solid rgba(16,185,129,0.85)" },
                { top: -6, right: -6, borderTop: "2px solid rgba(16,185,129,0.85)", borderRight: "2px solid rgba(16,185,129,0.85)" },
                { bottom: -6, left: -6, borderBottom: "2px solid rgba(16,185,129,0.85)", borderLeft: "2px solid rgba(16,185,129,0.85)" },
                { bottom: -6, right: -6, borderBottom: "2px solid rgba(16,185,129,0.85)", borderRight: "2px solid rgba(16,185,129,0.85)" },
              ].map((s, i) => (
                <span key={i} style={{ position: "absolute", width: 14, height: 14, ...s }} />
              ))}
            </div>

            {/* live verdict chip */}
            <div
              style={{
                position: "absolute",
                top: 22,
                right: 22,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                background: "rgba(9,9,11,0.65)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(16,185,129,0.45)",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                color: "#10b981",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 12px #10b981",
                  animation: "pulse 2s infinite",
                }}
              />
              REAL · 99.2% confidence
            </div>

            {/* bottom telemetry bar */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "22px 28px",
                display: "flex",
                gap: 28,
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" }}>
                {[
                  { l: "Blink cadence", v: "Normal" },
                  { l: "Lip-sync drift", v: "0.4 ms" },
                  { l: "Lighting", v: "Consistent" },
                ].map((t) => (
                  <div key={t.l} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {t.l}
                    </span>
                    <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{t.v}</span>
                  </div>
                ))}
              </div>
              {/* mini waveform */}
              <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 28 }}>
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: 3,
                      height: `${20 + Math.sin(i * 0.7) * 14 + (i % 3) * 4}%`,
                      background: "rgba(16,185,129,0.85)",
                      borderRadius: 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <a href={exeLink} className="ss-btn ss-btn-primary">
              <Download size={14} /> Download for Windows
            </a>
            <a href="#pipeline" className="ss-btn ss-btn-ghost">
              See how it works <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ DETECTION PIPELINE ============ */}
      <section
        id="pipeline"
        style={{
          position: "relative",
          padding: "72px 0 32px",
          borderTop: "1px solid var(--ss-line)",
          background:
            "linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 400px at 50% 0%, rgba(16,185,129,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 640, margin: "0 auto 48px" }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>The detection pipeline</p>
            <h2
              style={{
                fontSize: "clamp(30px,3.6vw,46px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "var(--text)",
                marginBottom: 14,
                lineHeight: 1.1,
              }}
            >
              Four stages. Under one second.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7 }}>
              Every video on your screen flows through the same calibrated path — fully on-device.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              position: "relative",
            }}
            className="pipeline-grid"
          >
            {/* connecting rail */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 36,
                left: "12%",
                right: "12%",
                height: 1,
                background:
                  "linear-gradient(to right, transparent, rgba(16,185,129,0.4), rgba(34,211,238,0.4), rgba(167,139,250,0.4), rgba(245,158,11,0.4), transparent)",
              }}
              className="pipeline-rail"
            />
            {steps.map((s) => (
              <div
                key={s.n}
                style={{ padding: "0 18px", position: "relative", display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${s.accent}22, ${s.accent}08)`,
                    border: `1px solid ${s.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    position: "relative",
                    boxShadow: `0 12px 32px -8px ${s.accent}40, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  }}
                >
                  <s.icon size={28} color={s.accent} strokeWidth={1.6} />
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    border: "1px solid var(--ss-line)",
                    borderRadius: 18,
                    padding: "26px 24px 28px",
                    flex: 1,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: s.accent,
                        letterSpacing: "0.12em",
                      }}
                    >
                      {s.label.toUpperCase()}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--text-subtle)", fontVariantNumeric: "tabular-nums" }}>
                      {s.n}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE FEATURE RAILS ============ */}
      <section style={{ padding: "40px 0 88px", position: "relative", borderTop: "1px solid var(--ss-line)" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px 500px at 100% 50%, rgba(34,211,238,0.07), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ marginBottom: 40, maxWidth: 640 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>Built for daily life</p>
            <h2
              style={{
                fontSize: "clamp(30px,3.6vw,46px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "var(--text)",
                marginBottom: 14,
                lineHeight: 1.1,
              }}
            >
              Designed to disappear
              <br /> until you need it.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 540 }}>
              ScreenSentinel doesn't ask for attention. It earns trust by staying quiet — until the
              moment a video on your screen stops being trustworthy.
            </p>
          </div>

          <div
            className="feat-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0, 460px)",
              gap: 48,
              alignItems: "stretch",
            }}
          >
            {/* feature rail */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {features.map((f, i) => {
                const active = activeFeature === i;
                return (
                  <div key={f.title}>
                    <button
                      onMouseEnter={() => setActiveFeature(i)}
                      onFocus={() => setActiveFeature(i)}
                      onClick={() => setActiveFeature(i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        gap: 20,
                        alignItems: "flex-start",
                        padding: "22px 24px",
                        background: active
                          ? "linear-gradient(135deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))"
                          : "linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0))",
                        border: active
                          ? "1px solid rgba(16,185,129,0.35)"
                          : "1px solid var(--ss-line)",
                        borderRadius: active ? "16px 16px 0 0" : 16,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: active ? "var(--accent-dim)" : "rgba(255,255,255,0.04)",
                          border: active ? "1px solid var(--accent-border)" : "1px solid var(--ss-line)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <f.icon
                          size={20}
                          color={active ? "var(--accent)" : "var(--text-muted)"}
                          strokeWidth={1.7}
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "var(--text)",
                            marginBottom: 6,
                          }}
                        >
                          {f.title}
                        </h3>
                        <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>
                          {f.desc}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        color={active ? "var(--accent)" : "var(--text-subtle)"}
                        style={{
                          flexShrink: 0,
                          marginTop: 4,
                          transform: active ? "rotate(90deg)" : "translateX(0)",
                          transition: "all 0.2s ease",
                        }}
                      />
                    </button>
                    {/* Mobile inline preview — shown below the active card on small screens */}
                    {active && (
                      <div
                        className="feat-mobile-preview"
                        style={{
                          padding: "18px 22px 20px",
                          background:
                            "linear-gradient(160deg, rgba(16,185,129,0.10), rgba(34,211,238,0.04) 60%, transparent)",
                          border: "1px solid rgba(16,185,129,0.35)",
                          borderTop: "1px solid rgba(16,185,129,0.15)",
                          borderRadius: "0 0 16px 16px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 10,
                            letterSpacing: "0.14em",
                            color: "var(--text-subtle)",
                            textTransform: "uppercase",
                            marginBottom: 6,
                            fontWeight: 600,
                          }}
                        >
                          {f.preview.label}
                        </p>
                        <div
                          style={{
                            fontSize: 30,
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "var(--text)",
                            marginBottom: 12,
                            lineHeight: 1.1,
                          }}
                        >
                          {f.preview.value}
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {f.preview.chips.map((c) => (
                            <span
                              key={c}
                              style={{
                                fontSize: 12,
                                padding: "5px 11px",
                                borderRadius: 999,
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid var(--border-strong)",
                                color: "var(--text-muted)",
                                fontWeight: 500,
                              }}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* live preview surface */}
            <div
              className="feat-side-panel"
              style={{
                position: "sticky",
                top: 96,
                alignSelf: "start",
                background:
                  "linear-gradient(160deg, rgba(16,185,129,0.08), rgba(34,211,238,0.04) 60%, transparent)",
                border: "1px solid var(--border-strong)",
                borderRadius: 22,
                padding: 28,
                minHeight: 420,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                boxShadow: "0 30px 80px -40px rgba(16,185,129,0.3)",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(400px 240px at 80% 10%, rgba(16,185,129,0.18), transparent 65%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
                </div>
                <span
                  style={{
                    fontSize: 10,
                    color: "var(--text-subtle)",
                    letterSpacing: "0.16em",
                    fontWeight: 600,
                  }}
                >
                  SCREENSENTINEL · LIVE
                </span>
              </div>

              <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 22 }}>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-subtle)", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>
                    {Active.preview.label}
                  </p>
                  <div
                    key={activeFeature}
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--text)",
                      lineHeight: 1.05,
                      animation: "fade-in 0.35s ease-out",
                    }}
                  >
                    {Active.preview.value}
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {Active.preview.chips.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: 12,
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border-strong)",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* fake graph */}
                <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 80, marginTop: 12 }}>
                  {Array.from({ length: 32 }).map((_, i) => (
                    <span
                      key={`${activeFeature}-${i}`}
                      style={{
                        flex: 1,
                        height: `${30 + Math.abs(Math.sin((i + activeFeature * 3) * 0.5)) * 70}%`,
                        background: `linear-gradient(to top, rgba(16,185,129,0.7), rgba(16,185,129,0.1))`,
                        borderRadius: 2,
                        transition: "height 0.4s ease",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 16px",
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  borderRadius: 12,
                  position: "relative",
                }}
              >
                <CheckCircle2 size={16} color="#10b981" />
                <span style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>
                  All checks running locally · no data sent
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section
        style={{
          position: "relative",
          padding: "80px 0 96px",
          borderTop: "1px solid var(--ss-line)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 50% 100%, rgba(16,185,129,0.22), transparent 65%), radial-gradient(700px 400px at 20% 0%, rgba(34,211,238,0.10), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <p className="ss-pill" style={{ marginBottom: 22 }}>
            <ShieldCheck size={11} /> Ready when you are
          </p>
          <h2
            style={{
              fontSize: "clamp(36px,4.8vw,64px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              marginBottom: 20,
              lineHeight: 1.05,
            }}
          >
            Install once.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #10b981, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trust every video forever.
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 540, margin: "0 auto 36px" }}>
            One small download. No account. No subscription. The internet stops lying to you the moment it finishes installing.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
            <a href={exeLink} className="ss-btn ss-btn-primary" style={{ padding: "16px 28px", fontSize: 15 }}>
              <Download size={16} /> Download for Windows · {version}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              justifyContent: "center",
              flexWrap: "wrap",
              fontSize: 13,
              color: "var(--text-subtle)",
            }}
          >
            {[
              "100% on-device",
              "No telemetry",
              "Free forever",
              "Windows 10 & 11",
            ].map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <CheckCircle2 size={14} color="var(--accent)" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .pipeline-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .pipeline-rail { display: none; }
          .feat-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .pipeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
