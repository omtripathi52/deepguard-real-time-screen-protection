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
    <div className="ss-mobile-page ss-product-page">
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(32px, 4vw, 52px)",
          paddingBottom: "clamp(36px, 4vw, 56px)",
          overflow: "hidden",
        }}
      >
        {/* ambient */}
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
          {/* headline */}
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 28px" }}>
            <p className="ss-pill" style={{ marginBottom: 12 }}>
              <Sparkles size={11} /> Version {version} · On-device
            </p>
            <h1
              style={{
                fontSize: "clamp(30px, 4.4vw, 54px)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                color: "var(--text)",
                marginBottom: 14,
                lineHeight: 1.06,
              }}
            >
              Trust infrastructure
              <br />
              for everything you watch.
            </h1>
            <p
              style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              ScreenSentinel sits invisibly behind every video on your screen and tells you,
              in real time, whether the human you're watching is actually human.
            </p>
          </div>

          {/* Hero image — constrained to fit viewport */}
          <div
            className="product-hero-frame"
            style={{
              position: "relative",
              borderRadius: "clamp(12px, 2vw, 20px)",
              overflow: "hidden",
              border: "1px solid var(--border-strong)",
              boxShadow:
                "0 32px 80px -32px rgba(16,185,129,0.28), 0 16px 48px -24px rgba(0,0,0,0.55)",
              maxWidth: "min(100%, 1100px)",
              margin: "0 auto",
              /* Key fix: cap height so the image never exceeds the viewport */
              maxHeight: "min(56vh, 540px)",
              aspectRatio: "16 / 9",
            }}
          >
            <img
              src={productHero}
              alt="ScreenSentinel analyzing a video call in real time"
              width={1600}
              height={900}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />

            {/* gradient overlays */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(9,9,11,0.88) 0%, rgba(9,9,11,0.18) 40%, transparent 65%), linear-gradient(to right, rgba(9,9,11,0.45), transparent 35%, transparent 65%, rgba(9,9,11,0.45))",
              }}
            />

            {/* Face reticle — hidden on very small screens via inline media */}
            <div
              aria-hidden
              className="product-reticle"
              style={{
                position: "absolute",
                top: "22%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "clamp(120px, 18%, 240px)",
                aspectRatio: "1 / 1.15",
                borderRadius: "44%",
                border: "1.5px solid rgba(16,185,129,0.65)",
                boxShadow: "0 0 0 1px rgba(16,185,129,0.15) inset, 0 0 32px rgba(16,185,129,0.18)",
              }}
            >
              {[
                { top: -5, left: -5, borderTop: "2px solid rgba(16,185,129,0.85)", borderLeft: "2px solid rgba(16,185,129,0.85)" },
                { top: -5, right: -5, borderTop: "2px solid rgba(16,185,129,0.85)", borderRight: "2px solid rgba(16,185,129,0.85)" },
                { bottom: -5, left: -5, borderBottom: "2px solid rgba(16,185,129,0.85)", borderLeft: "2px solid rgba(16,185,129,0.85)" },
                { bottom: -5, right: -5, borderBottom: "2px solid rgba(16,185,129,0.85)", borderRight: "2px solid rgba(16,185,129,0.85)" },
              ].map((s, i) => (
                <span key={i} style={{ position: "absolute", width: 12, height: 12, ...s }} />
              ))}
            </div>

            {/* Live verdict chip — top right */}
            <div
              className="product-chip"
              style={{
                position: "absolute",
                top: "clamp(10px, 2vw, 20px)",
                right: "clamp(10px, 2vw, 20px)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                background: "rgba(9,9,11,0.70)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(16,185,129,0.45)",
                borderRadius: 999,
                fontSize: "clamp(10px, 1.2vw, 12px)",
                fontWeight: 700,
                color: "#10b981",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              REAL · 99.2%
            </div>

            {/* Bottom telemetry — desktop */}
            <div
              className="product-telemetry"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "clamp(12px,2vw,20px) clamp(14px,2.5vw,26px)",
                display: "flex",
                gap: "clamp(14px,2vw,24px)",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "clamp(12px,2vw,20px)", alignItems: "center", flexWrap: "wrap" }}>
                {[
                  { l: "Blink cadence", v: "Normal" },
                  { l: "Lip-sync drift", v: "0.4 ms" },
                  { l: "Lighting", v: "Consistent" },
                ].map((t) => (
                  <div key={t.l} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <span
                      style={{
                        fontSize: "clamp(8px,0.9vw,10px)",
                        color: "rgba(255,255,255,0.55)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t.l}
                    </span>
                    <span style={{ fontSize: "clamp(11px,1.1vw,13px)", color: "#fff", fontWeight: 600 }}>{t.v}</span>
                  </div>
                ))}
              </div>
              {/* Mini waveform */}
              <div
                className="product-waveform"
                style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 24 }}
              >
                {Array.from({ length: 22 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: "clamp(2px, 0.3vw, 3px)",
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
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: "clamp(18px, 2.5vw, 28px)",
              flexWrap: "wrap",
            }}
          >
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
          padding: "clamp(48px,5vw,72px) 0 clamp(32px,4vw,48px)",
          borderTop: "1px solid var(--ss-line)",
          background: "linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(600px 400px at 50% 0%, rgba(16,185,129,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>The detection pipeline</p>
            <h2
              style={{
                fontSize: "clamp(26px,3.6vw,46px)",
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
                className="pipeline-step"
                style={{ padding: "0 clamp(8px,1.5vw,18px)", position: "relative", display: "flex", flexDirection: "column" }}
              >
                <div
                  className="pipeline-icon"
                  style={{
                    width: "clamp(52px,7vw,72px)",
                    height: "clamp(52px,7vw,72px)",
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${s.accent}22, ${s.accent}08)`,
                    border: `1px solid ${s.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    position: "relative",
                    boxShadow: `0 12px 32px -8px ${s.accent}40, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  }}
                >
                  <s.icon size={24} color={s.accent} strokeWidth={1.6} />
                </div>
                <div
                  className="pipeline-card"
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--ss-line)",
                    borderRadius: 18,
                    padding: "clamp(16px,2vw,26px) clamp(14px,1.8vw,22px) clamp(18px,2.2vw,28px)",
                    flex: 1,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: s.accent, letterSpacing: "0.12em" }}>
                      {s.label.toUpperCase()}
                    </span>
                    <span style={{ fontSize: 10, color: "var(--text-subtle)" }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(14px,1.4vw,17px)", fontWeight: 700, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "clamp(12px,1.2vw,13.5px)", color: "var(--text-muted)", lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE FEATURE RAILS ============ */}
      <section style={{ padding: "clamp(40px,4vw,56px) 0 clamp(56px,7vw,88px)", position: "relative", borderTop: "1px solid var(--ss-line)" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(800px 500px at 100% 50%, rgba(34,211,238,0.07), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ marginBottom: 36, maxWidth: 640 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>Built for daily life</p>
            <h2 style={{ fontSize: "clamp(26px,3.6vw,46px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
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
            style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0, 420px)", gap: 40, alignItems: "stretch" }}
          >
            {/* feature rail */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                        gap: 18,
                        alignItems: "flex-start",
                        padding: "18px 20px",
                        background: active
                          ? "linear-gradient(135deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))"
                          : "var(--bg2)",
                        border: active ? "1px solid rgba(16,185,129,0.35)" : "1px solid var(--ss-line)",
                        borderRadius: active ? "14px 14px 0 0" : 14,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 11,
                          background: active ? "var(--accent-dim)" : "var(--bg3)",
                          border: active ? "1px solid var(--accent-border)" : "1px solid var(--ss-line)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <f.icon size={18} color={active ? "var(--accent)" : "var(--text-muted)"} strokeWidth={1.7} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 5 }}>{f.title}</h3>
                        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{f.desc}</p>
                      </div>
                      <ArrowRight
                        size={14}
                        color={active ? "var(--accent)" : "var(--text-subtle)"}
                        style={{ flexShrink: 0, marginTop: 4, transform: active ? "rotate(90deg)" : "translateX(0)", transition: "all 0.2s ease" }}
                      />
                    </button>
                    {/* Mobile inline preview */}
                    <div
                      className="feat-mobile-preview"
                      style={{
                        padding: "16px 20px 18px",
                        background: "linear-gradient(160deg, rgba(16,185,129,0.10), rgba(34,211,238,0.04) 60%, transparent)",
                        border: "1px solid rgba(16,185,129,0.30)",
                        borderTop: "1px solid rgba(16,185,129,0.12)",
                        borderRadius: "0 0 14px 14px",
                        marginTop: -1,
                      }}
                    >
                      <p style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--text-subtle)", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>
                        {f.preview.label}
                      </p>
                      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>
                        {f.preview.value}
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {f.preview.chips.map((c) => (
                          <span key={c} style={{ fontSize: 12, padding: "4px 10px", borderRadius: 999, background: "var(--bg3)", border: "1px solid var(--ss-line)", color: "var(--text-muted)" }}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop feature preview panel */}
            <div
              className="feat-desktop-panel"
              style={{
                borderRadius: 20,
                background: "linear-gradient(160deg, rgba(16,185,129,0.12), rgba(34,211,238,0.05) 60%, transparent)",
                border: "1px solid rgba(16,185,129,0.28)",
                padding: "clamp(24px,3vw,36px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: 280,
              }}
            >
              <p style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-subtle)", textTransform: "uppercase", marginBottom: 8, fontWeight: 600 }}>
                {Active.preview.label}
              </p>
              <div style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 16, lineHeight: 1 }}>
                {Active.preview.value}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {Active.preview.chips.map((c) => (
                  <span key={c} style={{ fontSize: 13, padding: "5px 12px", borderRadius: 999, background: "var(--bg3)", border: "1px solid var(--ss-line)", color: "var(--text-muted)" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Active.icon size={16} color="var(--accent)" />
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{Active.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD CTA ============ */}
      <section style={{ padding: "clamp(48px,5vw,80px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(700px circle at 50% 0%, rgba(16,185,129,0.12), transparent 60%)", pointerEvents: "none" }} />
        <div className="ss-container" style={{ position: "relative", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <p className="ss-pill" style={{ marginBottom: 16 }}>Get protected today</p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,44px)", fontWeight: 800, letterSpacing: "-0.038em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
            Free. Private. Yours.
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
            ScreenSentinel is free to download. No accounts, no subscriptions, no data collection — ever.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={exeLink} className="ss-btn ss-btn-primary">
              <Download size={14} /> Download for Windows — free
            </a>
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 20, fontSize: 12.5, color: "var(--text-subtle)" }}>
            {["Windows 10 & 11", "100% on-device", "Sub-200ms inference"].map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                <CheckCircle2 size={12} color="var(--accent)" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Hide mobile previews on desktop */
        @media (min-width: 768px) {
          .feat-mobile-preview { display: none !important; }
          .feat-desktop-panel { display: flex !important; }
        }
        /* Hide desktop panel + show mobile previews on mobile */
        @media (max-width: 767px) {
          .feat-desktop-panel { display: none !important; }
          .feat-mobile-preview { display: block !important; }
          .feat-grid { grid-template-columns: 1fr !important; }
          .pipeline-grid { grid-template-columns: repeat(2,1fr) !important; gap: 12px !important; }
          .pipeline-rail { display: none !important; }
          .product-reticle { display: none !important; }
          .product-telemetry { flex-direction: column !important; gap: 10px !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .pipeline-grid { grid-template-columns: 1fr !important; }
          .product-waveform { display: none !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
