import { Link } from "react-router-dom";
import { Lock, ArrowRight, ShieldCheck, EyeOff, Server, FileCheck } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Your screen never leaves your computer",
    desc: "Inference happens locally on your device. There is no server that receives your video — by architecture, not by promise.",
  },
  {
    icon: Server,
    title: "Nothing is saved or stored",
    desc: "Once a frame is analyzed, the signal is discarded. No buffers, no logs, no retained media.",
  },
  {
    icon: ShieldCheck,
    title: "Zero behavioral telemetry",
    desc: "No usage tracking, no analytics, no hidden pings. The app does not phone home — ever.",
  },
  {
    icon: FileCheck,
    title: "Independently audited",
    desc: "External security researchers review the runtime annually. Reports are published in full.",
  },
];

const summary = [
  {
    heading: "What we collect",
    body: "Only your email — and only if you contact us — and a license validity flag.",
  },
  {
    heading: "What we never collect",
    body: "Anything on your screen. Your browsing. Your apps. Your files. Your location.",
  },
  {
    heading: "How it's handled",
    body: "The minimal data we do hold is protected with enterprise-grade security controls.",
  },
];

const certs = ["SOC 2 Certified", "GDPR Compliant", "ISO 27001", "Zero Tracking"];

// Recurring proprietary motif: forensic verification grid + scan line
function ForensicVisual() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid var(--border-strong)",
        aspectRatio: "1/1",
        background:
          "radial-gradient(120% 90% at 30% 20%, rgba(16,185,129,0.18), transparent 55%), radial-gradient(100% 80% at 80% 90%, rgba(34,211,238,0.10), transparent 55%), linear-gradient(160deg, #0a0e0c 0%, #06090a 100%)",
        boxShadow:
          "0 40px 100px -40px rgba(16,185,129,0.28), 0 20px 60px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* fine grid */}
      <svg
        aria-hidden
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(16,185,129,0.18)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>

      {/* center verification frame */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "58%",
          aspectRatio: "1/1.1",
          borderRadius: "44%",
          border: "1px solid rgba(16,185,129,0.55)",
          boxShadow:
            "0 0 0 1px rgba(16,185,129,0.10) inset, 0 0 60px rgba(16,185,129,0.18)",
        }}
      >
        {[
          { top: -8, left: -8, borderTop: "2px solid rgba(16,185,129,0.9)", borderLeft: "2px solid rgba(16,185,129,0.9)" },
          { top: -8, right: -8, borderTop: "2px solid rgba(16,185,129,0.9)", borderRight: "2px solid rgba(16,185,129,0.9)" },
          { bottom: -8, left: -8, borderBottom: "2px solid rgba(16,185,129,0.9)", borderLeft: "2px solid rgba(16,185,129,0.9)" },
          { bottom: -8, right: -8, borderBottom: "2px solid rgba(16,185,129,0.9)", borderRight: "2px solid rgba(16,185,129,0.9)" },
        ].map((s, i) => (
          <span key={i} style={{ position: "absolute", width: 16, height: 16, ...s }} />
        ))}
      </div>

      {/* moving scan line */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 90,
          background:
            "linear-gradient(to bottom, transparent, rgba(16,185,129,0.16) 50%, transparent)",
          animation: "ss-scan 5s linear infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* corner brackets */}
      {[
        { top: 14, left: 14, borderTop: "1px solid rgba(16,185,129,0.65)", borderLeft: "1px solid rgba(16,185,129,0.65)" },
        { top: 14, right: 14, borderTop: "1px solid rgba(16,185,129,0.65)", borderRight: "1px solid rgba(16,185,129,0.65)" },
        { bottom: 14, left: 14, borderBottom: "1px solid rgba(16,185,129,0.65)", borderLeft: "1px solid rgba(16,185,129,0.65)" },
        { bottom: 14, right: 14, borderBottom: "1px solid rgba(16,185,129,0.65)", borderRight: "1px solid rgba(16,185,129,0.65)" },
      ].map((s, i) => (
        <span key={i} aria-hidden style={{ position: "absolute", width: 22, height: 22, ...s }} />
      ))}

      {/* telemetry chip */}
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 12px",
          background: "rgba(9,11,12,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(16,185,129,0.4)",
          borderRadius: 999,
          fontSize: 10.5,
          fontWeight: 700,
          color: "#10b981",
          letterSpacing: "0.12em",
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981", animation: "ss-pulse 2.4s ease-in-out infinite" }} />
        ON-DEVICE
      </div>

      {/* bottom signature */}
      <div
        style={{
          position: "absolute",
          left: 18,
          bottom: 18,
          right: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 10,
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.16em",
          fontWeight: 600,
        }}
      >
        <span>VERIFY · LOCAL RUNTIME</span>
        <span>0 BYTES OUT</span>
      </div>
    </div>
  );
}

export default function Trust() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", padding: "20px 0 56px", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1000px 480px at 50% -10%, rgba(16,185,129,0.14), transparent 60%), radial-gradient(600px 360px at 12% 20%, rgba(34,211,238,0.06), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div
            className="ss-two-col"
            style={{
              alignItems: "center",
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 56,
            }}
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 18 }}>
                <Lock size={11} /> Privacy & Trust
              </p>
              <h1
                style={{
                  fontSize: "clamp(34px,4.3vw,56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "var(--text)",
                  marginBottom: 18,
                }}
              >
                Privacy isn't a policy.
                <br />
                It's the architecture.
              </h1>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 26,
                  maxWidth: 520,
                }}
              >
                ScreenSentinel is engineered so it is physically impossible for us to see what you watch.
                Every frame is analyzed on your device — and immediately forgotten.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {certs.map((c) => (
                  <span
                    key={c}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      fontSize: 11.5,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <Lock size={10} color="var(--accent)" />
                    {c}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: 14, fontSize: 12, color: "var(--text-subtle)" }}>
                Security documentation available on request.{" "}
                <Link to="/contact" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                  Contact us →
                </Link>
              </p>
            </div>
            <ForensicVisual />
          </div>
        </div>
      </section>

      {/* ============ FOUR PILLARS ============ */}
      <section
        style={{
          position: "relative",
          padding: "64px 0 72px",
          borderTop: "1px solid var(--border)",
          background: "linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(700px 360px at 50% 0%, rgba(16,185,129,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 44px" }}>
            <p className="ss-pill" style={{ marginBottom: 14 }}>Four guarantees</p>
            <h2
              style={{
                fontSize: "clamp(26px,3vw,38px)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              The trust architecture, in four lines.
            </h2>
          </div>
          <div
            className="ss-trust-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 18,
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  position: "relative",
                  padding: "28px 26px",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.035), rgba(255,255,255,0.005))",
                  border: "1px solid var(--border)",
                  borderRadius: 18,
                  backdropFilter: "blur(8px)",
                  boxShadow:
                    "0 20px 50px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  overflow: "hidden",
                }}
              >
                {/* corner motif */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 14,
                    height: 14,
                    borderTop: "1px solid rgba(16,185,129,0.35)",
                    borderRight: "1px solid rgba(16,185,129,0.35)",
                  }}
                />
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
                    flexShrink: 0,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <f.icon size={18} color="var(--accent)" strokeWidth={1.7} />
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 8,
                      fontSize: 15.5,
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROMISE PANEL ============ */}
      <section
        style={{
          position: "relative",
          padding: "64px 0 72px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="ss-container" style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              background:
                "linear-gradient(160deg, rgba(16,185,129,0.06), rgba(34,211,238,0.025) 60%, rgba(255,255,255,0.01))",
              border: "1px solid var(--border-strong)",
              borderRadius: 22,
              padding: "44px 44px 36px",
              overflow: "hidden",
              boxShadow:
                "0 30px 80px -40px rgba(16,185,129,0.22), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(500px 280px at 90% 0%, rgba(16,185,129,0.10), transparent 65%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "var(--text)",
                  textAlign: "center",
                  marginBottom: 32,
                }}
              >
                Our privacy promise — in plain English.
              </h2>
              <div
                className="ss-summary-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 32,
                  marginBottom: 28,
                }}
              >
                {summary.map((s) => (
                  <div key={s.heading}>
                    <p
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: 10,
                      }}
                    >
                      {s.heading}
                    </p>
                    <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 22, textAlign: "center" }}>
                <Link
                  to="/privacy"
                  style={{
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: "var(--text)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Read our full privacy policy <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section
        style={{
          position: "relative",
          padding: "72px 0 88px",
          borderTop: "1px solid var(--border)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px 420px at 50% 100%, rgba(16,185,129,0.16), transparent 65%), radial-gradient(500px 320px at 10% 0%, rgba(34,211,238,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* faint grid texture */}
        <svg
          aria-hidden
          width="100%"
          height="100%"
          style={{ position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none" }}
        >
          <defs>
            <pattern id="ctaGrid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M 42 0 L 0 0 0 42" fill="none" stroke="rgba(16,185,129,0.18)" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
        <div
          className="ss-container"
          style={{ position: "relative", textAlign: "center", maxWidth: 600, margin: "0 auto" }}
        >
          <p className="ss-pill" style={{ marginBottom: 18 }}>
            <ShieldCheck size={11} /> Still have questions?
          </p>
          <h2
            style={{
              fontSize: "clamp(26px,3.2vw,40px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              marginBottom: 14,
              lineHeight: 1.1,
            }}
          >
            Privacy questions get plain answers.
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 15,
              marginBottom: 26,
              lineHeight: 1.7,
            }}
          >
            We'll happily walk through how the runtime works, what's audited, and what's stored.
            Even the most basic question is welcome.
          </p>
          <Link to="/contact" className="ss-btn ss-btn-primary">
            Ask us anything <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes ss-scan {
          0%   { top: -15%; }
          100% { top: 110%; }
        }
        @keyframes ss-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 900px) {
          .ss-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ss-trust-grid { grid-template-columns: 1fr !important; }
          .ss-summary-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
