import { ArrowRight, Shield, Play, MapPin, CheckCircle } from "lucide-react";
import { useCases, faqs } from "../data/content";

const IMG = {
  engineer:
    "https://raw.createusercontent.com/fe3bdebf-7280-45c1-846d-9b2f38c6f902/",
  meeting:
    "https://raw.createusercontent.com/da8d53c9-1735-44bf-9b47-6b7a0019424e/",
  teamFun:
    "https://raw.createusercontent.com/ca8cf7f9-95de-496c-9835-fc6dc686bda6/",
  collab:
    "https://raw.createusercontent.com/46d2361b-241c-4514-b167-4614b864a206/",
  lunch:
    "https://raw.createusercontent.com/85496808-8f95-40aa-aaf8-6a845631d802/",
  london:
    "https://raw.createusercontent.com/ccd74725-e0d2-4cb4-8c32-f1b3fa0b8fad/",
};

/* ── Custom SVG Illustrations ─────────────────── */
function SvgEye() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="19"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <ellipse
        cx="20"
        cy="20"
        rx="13"
        ry="8"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="4" fill="var(--accent)" opacity="0.8" />
      <circle cx="21.5" cy="18.5" r="1.2" fill="white" opacity="0.7" />
    </svg>
  );
}

function SvgLock() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="19"
        width="24"
        height="16"
        rx="4"
        fill="var(--accent)"
        opacity="0.15"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <path
        d="M13 19v-5a7 7 0 0 1 14 0v5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="27" r="2.5" fill="var(--accent)" />
      <line
        x1="20"
        y1="29.5"
        x2="20"
        y2="32"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SvgBell() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6a10 10 0 0 0-10 10v6l-2 4h24l-2-4v-6A10 10 0 0 0 20 6z"
        fill="var(--accent)"
        opacity="0.15"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <path
        d="M17 30a3 3 0 0 0 6 0"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="28" cy="11" r="4" fill="#ef4444" />
      <text
        x="28"
        y="14"
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="700"
      >
        !
      </text>
    </svg>
  );
}

function SvgFeather() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8C20 8 10 16 8 32"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 8C32 8 26 14 20 20L8 32"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 14l-6 6M22 18l-4 4M18 22l-3 3"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="20" cy="20" r="2" fill="var(--accent)" opacity="0.4" />
    </svg>
  );
}

const stats = [
  { v: "99 in 100", l: "Fake videos caught", sub: "We rarely miss one" },
  { v: "Instant", l: "Warning speed", sub: "You're told straight away" },
  {
    v: "Your device",
    l: "Where checks happen",
    sub: "Never leaves your computer",
  },
  { v: "Zero", l: "Data sent to anyone", sub: "Complete privacy, always" },
];

const logos = [
  "JPMORGAN",
  "REUTERS",
  "KPMG",
  "DELOITTE",
  "THE GUARDIAN",
  "BBC NEWS",
];

const pillars = [
  {
    Svg: SvgEye,
    title: "Works on any video, anywhere",
    desc: "Whether you're on a video call, watching the news, or scrolling social media — ScreenSentinel quietly watches alongside you. No setup. No extra steps.",
  },
  {
    Svg: SvgLock,
    title: "Your screen stays completely private",
    desc: "We never see what's on your screen. Everything is checked right there on your own computer — nothing is ever sent to us, stored, or shared with anyone.",
  },
  {
    Svg: SvgBell,
    title: "Clear warnings, straight away",
    desc: "The moment something looks fake, you get a plain, simple alert. No confusing scores, no technical reports — just a clear message you can act on.",
  },
  {
    Svg: SvgFeather,
    title: "So quiet you'll forget it's there",
    desc: "It runs softly in the background and only speaks up when something needs your attention. It won't slow your computer down or interrupt your day.",
  },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          padding: "80px 0 0",
          overflow: "hidden",
          background: "var(--bg)",
        }}
      >
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
              paddingBottom: 72,
            }}
            className="ss-two-col"
          >
            <div>
              <div className="ss-pill" style={{ marginBottom: 24 }}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                Free to try — Windows 10 &amp; 11
              </div>
              <h1
                style={{
                  fontSize: "clamp(36px,4.5vw,60px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.07,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                Can you trust
                <br />
                <span style={{ color: "var(--accent)" }}>
                  what you're watching?
                </span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  maxWidth: 460,
                  marginBottom: 36,
                }}
              >
                AI can now create fake videos of real people saying and doing
                things they never did. ScreenSentinel watches your screen and
                tells you instantly if a video has been faked — so you never get
                fooled again.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 48,
                }}
              >
                <a href="/contact" className="ss-btn ss-btn-primary">
                  Try It Free <ArrowRight size={15} />
                </a>
                <a href="/product" className="ss-btn ss-btn-ghost">
                  <Play size={14} /> See How It Works
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  {["#1B4D3E", "#1A3A5C", "#5C2B00", "#3B1F5E"].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: c,
                        border: "2px solid var(--bg)",
                        marginLeft: i > 0 ? -9 : 0,
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  Over{" "}
                  <strong style={{ color: "var(--text)" }}>4,000 people</strong>{" "}
                  already protected
                </span>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={IMG.engineer}
                  alt="Person using ScreenSentinel to check a video"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              {/* Alert badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: -18,
                  left: -18,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "14px 18px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  maxWidth: 240,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "#fee2e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2L2 17h16L10 2z"
                      fill="#dc2626"
                      opacity="0.2"
                    />
                    <path
                      d="M10 2L2 17h16L10 2z"
                      stroke="#dc2626"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="10"
                      y1="8"
                      x2="10"
                      y2="12"
                      stroke="#dc2626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="10" cy="14.5" r="0.8" fill="#dc2626" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 2,
                    }}
                  >
                    ⚠️ This looks fake
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-subtle)",
                      lineHeight: 1.4,
                    }}
                  >
                    ScreenSentinel spotted an AI-generated face
                  </div>
                </div>
              </div>
              {/* Live badge */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: 10,
                  padding: "8px 14px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "inline-block",
                      animation: "ping 1.5s ease-in-out infinite",
                    }}
                  />
                  Watching your screen
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
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 65%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, var(--bg) 0%, transparent 35%, transparent 65%, var(--bg) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
              <MapPin size={14} color="var(--accent)" />
              <span
                style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}
              >
                Based in Shoreditch, London 🇬🇧
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ─────────────────────────────── */}
      <section
        style={{
          padding: "44px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="ss-container">
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
            Trusted by organisations across the world
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 44,
              flexWrap: "wrap",
            }}
          >
            {logos.map((l) => (
              <span
                key={l}
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--text-subtle)",
                  opacity: 0.55,
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────── */}
      <section style={{ padding: "72px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 0,
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
            className="ss-stats-grid"
          >
            <div
              style={{
                padding: "40px 28px",
                background: "var(--bg2)",
                textAlign: "center",
                borderRight: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "var(--accent)",
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                99/100
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text)",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                Fake videos caught
              </div>
              <div style={{ fontSize: 12, color: "var(--text-subtle)" }}>
                We rarely miss one
              </div>
            </div>
            <div
              style={{
                padding: "40px 28px",
                background: "var(--bg2)",
                textAlign: "center",
                borderRight: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                Instant
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text)",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                You're warned
              </div>
              <div style={{ fontSize: 12, color: "var(--text-subtle)" }}>
                During the call, not after
              </div>
            </div>
            <div
              style={{
                padding: "40px 28px",
                background: "var(--bg2)",
                textAlign: "center",
                borderRight: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                Zero
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text)",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                Data sent to us
              </div>
              <div style={{ fontSize: 12, color: "var(--text-subtle)" }}>
                Complete privacy, always
              </div>
            </div>
            <div
              style={{
                padding: "40px 28px",
                background: "var(--accent)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "#fff",
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                4,000+
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.95)",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                People protected
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                And growing every day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM MOSAIC ───────────────────────── */}
      <section style={{ padding: "0 0 96px", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>
              Our People
            </p>
            <h2
              style={{
                fontSize: 38,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: 14,
              }}
            >
              Real people, real mission
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 16,
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.65,
              }}
            >
              We're a team of researchers, designers, and problem-solvers based
              in Shoreditch, London — united by a simple belief: people deserve
              to know what's real.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr 1fr",
              gridTemplateRows: "240px 240px",
              gap: 10,
            }}
            className="ss-mosaic"
          >
            <div
              style={{ gridRow: "1/3", borderRadius: 16, overflow: "hidden" }}
            >
              <img
                src={IMG.meeting}
                alt="Team meeting in our London office"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img
                src={IMG.teamFun}
                alt="The team enjoying time together"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img
                src={IMG.collab}
                alt="Working through an idea together"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img
                src={IMG.lunch}
                alt="Team lunch"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                borderRadius: 16,
                background: "var(--accent)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                padding: 28,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.04em",
                }}
              >
                18
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                people on the team
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.5,
                }}
              >
                All in London — engineers, researchers, designers, and more
              </div>
              <a
                href="/careers"
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                We're hiring →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SCREENSENTINEL — 2-col editorial ── */}
      <section
        style={{
          padding: "96px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "start",
            }}
            className="ss-two-col"
          >
            {/* Left — stacked feature rows, not equal cards */}
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Why people choose us
              </p>
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  marginBottom: 14,
                  lineHeight: 1.1,
                }}
              >
                Simple protection.
                <br />
                Zero effort.
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  marginBottom: 44,
                }}
              >
                No technical knowledge needed. Just install once and it quietly
                protects you — every time you watch a video, on any website or
                app.
              </p>
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                {pillars.map(({ Svg, title, desc }, idx) => (
                  <div
                    key={title}
                    style={{
                      padding: "24px 26px",
                      background: "var(--bg)",
                      borderBottom:
                        idx < pillars.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                      display: "flex",
                      gap: 18,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 11,
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <Svg />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "var(--text)",
                          marginBottom: 5,
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        style={{
                          fontSize: 13,
                          color: "var(--text-muted)",
                          lineHeight: 1.7,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — app mockup */}
            <div style={{ position: "sticky", top: 100 }}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  style={{
                    background: "var(--bg3)",
                    padding: "12px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {["#ff5f57", "#ffbd2e", "#28ca41"].map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 11,
                        height: 11,
                        borderRadius: "50%",
                        background: c,
                      }}
                    />
                  ))}
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 11,
                      color: "var(--text-subtle)",
                      fontFamily: "monospace",
                    }}
                  >
                    ScreenSentinel
                  </span>
                </div>
                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--text)",
                      }}
                    >
                      Watching your screen now
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "var(--accent)",
                        fontWeight: 600,
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "var(--accent)",
                          display: "inline-block",
                        }}
                      />
                      Live
                    </span>
                  </div>
                  <div
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      padding: 24,
                      textAlign: "center",
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ fontSize: 44, marginBottom: 10 }}>✅</div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: "var(--accent)",
                        marginBottom: 6,
                      }}
                    >
                      This video looks real
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      No signs of AI manipulation found.
                    </div>
                  </div>
                  {[
                    "Eye blinking looks natural",
                    "Facial movements match a real person",
                    "No signs of skin or lighting edits",
                    "Voice and lip movements match",
                  ].map((label) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "11px 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <span
                        style={{ fontSize: 13, color: "var(--text-muted)" }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--accent)",
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      marginTop: 18,
                      padding: "12px 14px",
                      background: "var(--accent-dim)",
                      borderRadius: 10,
                      border: "1px solid var(--accent-border)",
                      fontSize: 12,
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    💡 If anything looked fake, this panel would show a red
                    warning in plain English.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 72,
              alignItems: "center",
            }}
            className="ss-two-col"
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Who it's for
              </p>
              <h2
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  marginBottom: 20,
                  lineHeight: 1.1,
                }}
              >
                Anyone who watches
                <br />
                video online
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  marginBottom: 36,
                }}
              >
                You don't have to be a tech expert. If you've ever wondered "is
                this video real?" — ScreenSentinel answers that for you,
                automatically.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {useCases.map(({ title, description }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "16px 18px",
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color="var(--accent)"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: 4,
                          fontSize: 14,
                        }}
                      >
                        {title}
                      </div>
                      <div
                        style={{
                          color: "var(--text-muted)",
                          fontSize: 13,
                          lineHeight: 1.65,
                        }}
                      >
                        {description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/solutions"
                className="ss-btn ss-btn-ghost"
                style={{ marginTop: 28 }}
              >
                See all use cases <ArrowRight size={14} />
              </a>
            </div>
            {/* Right — editorial stat callout */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div
                style={{
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.07) 100%)",
                  border: "1px solid rgba(139,92,246,0.18)",
                  padding: "40px 36px",
                }}
              >
                <div
                  style={{
                    fontSize: 52,
                    fontWeight: 900,
                    letterSpacing: "-0.05em",
                    color: "var(--text)",
                    marginBottom: 10,
                    lineHeight: 1,
                  }}
                >
                  1 in 3
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 12,
                  }}
                >
                  people can't tell when a video is fake
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  AI video tools are so realistic that most people — including
                  experts — get fooled. ScreenSentinel doesn't get fooled.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "var(--bg2)",
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 900,
                      color: "var(--accent)",
                      marginBottom: 8,
                    }}
                  >
                    60+
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Newsrooms that trust ScreenSentinel
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                    background: "var(--bg2)",
                    padding: "28px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 900,
                      color: "#8b5cf6",
                      marginBottom: 8,
                    }}
                  >
                    Free
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    to try — no card required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────── */}
      <section
        style={{
          padding: "96px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="ss-container"
          style={{ maxWidth: 800, margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              Questions people ask us
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Plain answers, no technical language
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map((f, i) => (
              <div key={i} className="ss-card" style={{ padding: "22px 26px" }}>
                <h4
                  style={{
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: 9,
                    fontSize: 15,
                  }}
                >
                  {f.question}
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              background: "linear-gradient(135deg,#059669 0%,#0284c7 100%)",
              borderRadius: 24,
              padding: "72px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -50,
                left: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
              }}
            />
            {/* SVG decoration */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 3L4 9v8c0 7 5 13 12 15 7-2 12-8 12-15V9L16 3z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M11 16l3 3 7-7"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Stop being fooled by fake videos.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: 17,
                maxWidth: 520,
                margin: "0 auto 36px",
                lineHeight: 1.7,
              }}
            >
              Join thousands of people who now watch video with confidence. Free
              to try — no credit card needed.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#059669",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Download for Free <ArrowRight size={16} />
              </a>
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  border: "1px solid rgba(255,255,255,0.25)",
                  textDecoration: "none",
                }}
              >
                Contact our team
              </a>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 12,
                marginTop: 20,
              }}
            >
              Available for Windows 10 &amp; 11 · Free plan included · No card
              required
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes ping {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        @media (max-width: 900px) {
          .ss-two-col { grid-template-columns: 1fr !important; }
          .ss-pillars-grid { grid-template-columns: 1fr 1fr !important; }
          .ss-mosaic { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .ss-mosaic > div:first-child { grid-row: auto !important; }
          .ss-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .ss-stats-grid > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 600px) {
          .ss-pillars-grid { grid-template-columns: 1fr !important; }
          .ss-mosaic { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
