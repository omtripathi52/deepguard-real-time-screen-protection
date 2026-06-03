import { Shield, CheckCircle2 } from "lucide-react";

const productImage =
  "https://raw.createusercontent.com/fe3bdebf-7280-45c1-846d-9b2f38c6f902/";

const features = [
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="1"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="var(--accent)"
          strokeWidth="1.3"
        />
        <circle
          cx="11"
          cy="10"
          r="3"
          fill="var(--accent)"
          opacity="0.2"
          stroke="var(--accent)"
          strokeWidth="1.2"
        />
        <line
          x1="7"
          y1="19"
          x2="15"
          y2="19"
          stroke="var(--accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="17"
          x2="11"
          y2="19"
          stroke="var(--accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M9.5 9.5l1 1 2-2"
          stroke="var(--accent)"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Works on any video, from anywhere",
    desc: "Zoom calls, YouTube, news sites, WhatsApp video — it doesn't matter where the video is coming from. ScreenSentinel is watching quietly and you don't have to do anything.",
    col: "#10b981",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle
          cx="11"
          cy="11"
          r="9"
          stroke="var(--accent)"
          strokeWidth="1.3"
          strokeDasharray="3 2"
        />
        <path
          d="M7 11l3 3 5-5"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Simple warning when something looks fake",
    desc: "No confusing scores or technical readouts. If a video looks suspicious, you get one clear, plain English message telling you what we spotted.",
    col: "#0ea5e9",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L2 6.5v6.5c0 5 3.8 9.3 9 10.5 5.2-1.2 9-5.5 9-10.5V6.5L11 2z"
          fill="var(--accent)"
          opacity="0.1"
          stroke="var(--accent)"
          strokeWidth="1.3"
        />
        <path
          d="M8 11l2 2 4-4"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Everything stays on your computer",
    desc: "The moment a check is done, all the information is wiped. Nothing is saved. Nothing is sent to us or anyone else. We don't even know what videos you've been watching.",
    col: "#8b5cf6",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2a3 3 0 0 1 3 3 6 6 0 0 1 3 3h-2a1 1 0 0 0 0 2v2a5 5 0 0 1-4 2 5 5 0 0 1-4-2v-2a1 1 0 0 0 0-2H5a6 6 0 0 1 3-3 3 3 0 0 1 3-3z"
          stroke="var(--accent)"
          strokeWidth="1.2"
        />
        <circle cx="15.5" cy="15.5" r="3.5" fill="#10b981" opacity="0.9" />
        <path
          d="M14.2 15.5l1 1 1.8-1.8"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Quietly runs without slowing you down",
    desc: "You won't notice it's there until it needs to warn you. It runs softly in the background and doesn't slow your computer down or show annoying pop-ups.",
    col: "#f59e0b",
  },
];

const steps = [
  {
    n: "1",
    emoji: "⬇️",
    title: "Download and open it",
    desc: "Takes under 60 seconds. No accounts, no complicated settings. Just open it and you're protected straight away.",
  },
  {
    n: "2",
    emoji: "👁️",
    title: "It watches your screen",
    desc: "ScreenSentinel quietly runs in the background watching any video that plays on your computer. You don't have to do anything.",
  },
  {
    n: "3",
    emoji: "🔍",
    title: "It checks if the video is real",
    desc: "It looks at things like: does this face blink naturally? Do the eyes and mouth move like a real person? Is the skin texture real?",
  },
  {
    n: "4",
    emoji: "✅",
    title: "You get a simple answer",
    desc: "If everything looks genuine, nothing happens. If something seems fake, you get one clear, friendly warning in plain English.",
  },
];

export default function ProductPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* ── HERO ────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 640,
              margin: "0 auto 52px",
            }}
          >
            <p className="ss-pill" style={{ marginBottom: 18 }}>
              How it works
            </p>
            <h1
              style={{
                fontSize: "clamp(36px,4.5vw,58px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: 18,
                lineHeight: 1.1,
              }}
            >
              As simple as watching a video
            </h1>
            <p
              style={{
                fontSize: 17,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              You watch video the same way you always do. ScreenSentinel quietly
              watches alongside you and tells you instantly if something looks
              fake. No learning curve. No effort.
            </p>
          </div>
          <div
            style={{
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid var(--border)",
              position: "relative",
              marginBottom: 96,
            }}
          >
            <img
              src={productImage}
              alt="ScreenSentinel in action"
              style={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 28,
                left: 28,
                padding: "18px 22px",
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(16px)",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.1)",
                maxWidth: 340,
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                  fontSize: 15,
                }}
              >
                Is this person real?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13,
                  lineHeight: 1.65,
                }}
              >
                ScreenSentinel looks at tiny details — like how eyes blink, how
                skin moves, and whether the face matches what someone is saying.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "rgba(16,185,129,0.2)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: 10,
                padding: "8px 16px",
                backdropFilter: "blur(8px)",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981" }}>
                ✓ Video looks real
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS — vertical timeline ─── */}
      <section
        style={{
          padding: "96px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2
              style={{
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              Here's exactly what happens
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 15,
                maxWidth: 380,
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              No technical knowledge needed. It really is this simple.
            </p>
          </div>

          {/* Timeline */}
          <div
            style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}
          >
            {/* Centre line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--border)",
                transform: "translateX(-50%)",
              }}
              className="ss-timeline-line"
            />

            {steps.map(({ n, title, desc, emoji }, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    marginBottom: 48,
                    position: "relative",
                  }}
                  className="ss-timeline-row"
                >
                  {/* Number bubble on centre line */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 20,
                      transform: "translate(-50%,-50%)",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#fff",
                      boxShadow: "0 0 0 4px var(--bg2)",
                    }}
                    className="ss-timeline-bubble"
                  >
                    {emoji}
                  </div>
                  {/* Content card */}
                  <div
                    style={{
                      width: "44%",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: 16,
                      padding: "28px 28px 24px",
                      marginLeft: isLeft ? 0 : 0,
                    }}
                    className="ss-timeline-card"
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--accent)",
                        marginBottom: 10,
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                        borderRadius: 6,
                        padding: "3px 10px",
                        display: "inline-block",
                      }}
                    >
                      Step {n}
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 10,
                        fontSize: 17,
                        lineHeight: 1.3,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURES — rows not cards ── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2
              style={{
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              Designed to fit into your life
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 15,
                maxWidth: 460,
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              Whether you're on a call with your bank, watching the news, or
              checking a viral video — it has you covered.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 72,
              border: "1px solid var(--border)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {features.map(({ svg, title, desc, col }, idx) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                  padding: "32px 36px",
                  background: "var(--bg2)",
                  borderBottom:
                    idx < features.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${col}18`,
                    border: `1px solid ${col}28`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {svg}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 8,
                      fontSize: 17,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 14,
                      lineHeight: 1.75,
                      maxWidth: 560,
                    }}
                  >
                    {desc}
                  </p>
                </div>
                <div style={{ fontSize: 22, flexShrink: 0, opacity: 0.15 }}>
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────── */}
      <section
        style={{
          padding: "72px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="ss-container"
          style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}
        >
          <h2
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Ready to give it a try?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 15,
              marginBottom: 28,
              lineHeight: 1.65,
            }}
          >
            Free to download. No credit card. No account needed.
          </p>
          <a href="/contact" className="ss-btn ss-btn-primary">
            Download for Free <Shield size={15} />
          </a>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
      <style jsx>{`
        @media (max-width: 900px) {
          .ss-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .ss-feat-grid { grid-template-columns: 1fr 1fr !important; }
          .ss-two-col { grid-template-columns: 1fr !important; }
          .ss-timeline-line { display: none !important; }
          .ss-timeline-row { justify-content: flex-start !important; }
          .ss-timeline-card { width: 100% !important; }
          .ss-timeline-bubble { left: 20px !important; transform: none !important; }
        }
        @media (max-width: 560px) {
          .ss-steps-grid { grid-template-columns: 1fr !important; }
          .ss-feat-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
