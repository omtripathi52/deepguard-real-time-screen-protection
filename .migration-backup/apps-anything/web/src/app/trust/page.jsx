import { Lock, ArrowRight } from "lucide-react";

const trustImage =
  "https://raw.createusercontent.com/39795801-ca82-403e-8b96-0ae8e8e28115/";

const features = [
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect
          x="3"
          y="11"
          width="20"
          height="14"
          rx="3"
          fill="var(--accent)"
          opacity="0.12"
          stroke="var(--accent)"
          strokeWidth="1.3"
        />
        <path
          d="M8 11V8a5 5 0 0 1 10 0v3"
          stroke="var(--accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="13" cy="18" r="2" fill="var(--accent)" />
      </svg>
    ),
    title: "Your screen never leaves your computer",
    desc: "The checking happens right there on your own device. We don't have servers that receive your video. It's physically impossible for us to see what's on your screen.",
  },
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle
          cx="13"
          cy="13"
          r="10"
          stroke="var(--accent)"
          strokeWidth="1.3"
          strokeDasharray="3 2"
        />
        <path
          d="M13 5v8l5 3"
          stroke="var(--accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M8 18l3-3"
          stroke="#ef4444"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M8 21l3-3"
          stroke="#ef4444"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    title: "Nothing is saved or stored anywhere",
    desc: "Once a video frame has been checked, the information is immediately discarded. We don't build up a history of what you've been watching — not even on your own device.",
  },
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M3 13l5 5 10-10"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="21"
          cy="7"
          r="4"
          fill="var(--accent)"
          opacity="0.12"
          stroke="var(--accent)"
          strokeWidth="1.1"
        />
        <line
          x1="19.5"
          y1="7"
          x2="22.5"
          y2="7"
          stroke="var(--accent)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="5.5"
          x2="21"
          y2="8.5"
          stroke="var(--accent)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "We don't know how often you use it",
    desc: "We don't track how much you use ScreenSentinel, when you open it, or what you scan. We have no idea — and that's on purpose. Your habits are your business.",
  },
  {
    svg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect
          x="4"
          y="4"
          width="18"
          height="18"
          rx="3"
          stroke="var(--accent)"
          strokeWidth="1.3"
        />
        <path
          d="M9 12l3 3 6-6"
          stroke="var(--accent)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="6" r="3.5" fill="#10b981" opacity="0.85" />
        <path
          d="M19 6l0.8 0.8 1.5-1.5"
          stroke="white"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Independently checked for safety",
    desc: "Every year, an outside team of security experts reviews our software to make sure there are no hidden ways for information to leak out. We publish the results so you can read them.",
  },
];

const summary = [
  {
    heading: "What we do collect",
    body: "Your email address (only if you create an account) and the fact that your licence is valid. That's it.",
  },
  {
    heading: "What we never collect",
    body: "Anything on your screen. Your browsing. The apps you use. Your files. Your location. Nothing like that, ever.",
  },
  {
    heading: "How your data is handled",
    body: "The tiny amount of information we do hold is protected using the same security standards used by major banks.",
  },
];

const certs = [
  "SOC 2 Certified",
  "GDPR Compliant",
  "ISO 27001",
  "Zero Tracking",
];

export default function TrustPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* ── HERO ────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
              marginBottom: 80,
            }}
            className="ss-two-col"
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 22 }}>
                Privacy & Trust
              </p>
              <h1
                style={{
                  fontSize: "clamp(34px,4.5vw,56px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                Your privacy isn't
                <br />a small print issue.
              </h1>
              <p
                style={{
                  fontSize: 16,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                A lot of apps say they care about your privacy. We built
                ScreenSentinel from the ground up so it's physically impossible
                for us to see what you're watching. Not a policy decision — a
                design decision.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {certs.map((c) => (
                  <span
                    key={c}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "7px 14px",
                      borderRadius: 999,
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    <Lock size={11} color="var(--accent)" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <img
                  src={trustImage}
                  alt="Trust and privacy"
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                    display: "block",
                    opacity: 0.9,
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, var(--bg) 0%, transparent 50%)",
                  borderRadius: 18,
                }}
              />
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "14px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  whiteSpace: "nowrap",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  We cannot see your screen — by design
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 64,
            }}
            className="ss-trust-grid"
          >
            {features.map(({ svg, title, desc }) => (
              <div
                key={title}
                className="ss-card"
                style={{
                  padding: "32px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 13,
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {svg}
                </div>
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 10,
                      fontSize: 16,
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
            ))}
          </div>

          {/* Summary */}
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "48px 44px",
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                textAlign: "center",
                marginBottom: 36,
              }}
            >
              Our privacy promise — in plain English
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 32,
                marginBottom: 36,
              }}
              className="ss-summary-grid"
            >
              {summary.map(({ heading, body }) => (
                <div key={heading}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: 12,
                    }}
                  >
                    {heading}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 28,
                textAlign: "center",
              }}
            >
              <button
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
              >
                Read our full privacy policy →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              marginBottom: 14,
            }}
          >
            Still have questions about privacy?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 15,
              marginBottom: 28,
              lineHeight: 1.65,
            }}
          >
            We're happy to answer any question — no matter how basic it sounds.
            Privacy concerns are always worth asking about.
          </p>
          <a href="/contact" className="ss-btn ss-btn-primary">
            Ask us anything <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          .ss-two-col { grid-template-columns: 1fr !important; }
          .ss-trust-grid { grid-template-columns: 1fr !important; }
          .ss-summary-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
