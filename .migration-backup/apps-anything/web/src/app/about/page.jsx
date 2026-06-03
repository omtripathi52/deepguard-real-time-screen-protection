import { Target, Heart, Shield, MapPin, ArrowRight } from "lucide-react";
import { teamMembers } from "../../data/content";

const IMG = {
  allHands:
    "https://raw.createusercontent.com/9e8b570a-0a03-4f98-8f5e-f177694f90b6/",
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

const values = [
  {
    title: "Truth Above All",
    Icon: Target,
    desc: "Our mission is to preserve the integrity of visual media in a world where seeing is no longer believing.",
  },
  {
    title: "Privacy First",
    Icon: Shield,
    desc: "We believe privacy is a fundamental human right. Our architecture reflects this in every line of code.",
  },
  {
    title: "Human Centric",
    Icon: Heart,
    desc: "We build technology that serves people, not the other way around. Simple, clear, and effective.",
  },
];

const milestones = [
  { year: "2024 Q1", event: "ScreenSentinel founded in Shoreditch, London" },
  { year: "2024 Q3", event: "First beta deployed to 200 security researchers" },
  {
    year: "2025 Q1",
    event: "v1.0 public launch — 50,000 downloads in 30 days",
  },
  {
    year: "2025 Q3",
    event: "Enterprise programme launched with 12 anchor clients",
  },
  {
    year: "2026 Q1",
    event: "v2.4 released — 99.4% accuracy, sub-50ms latency",
  },
];

const pressItems = [
  {
    outlet: "The Guardian",
    quote: '"The most privacy-conscious deepfake detector we\'ve tested."',
    year: "2025",
  },
  {
    outlet: "Wired UK",
    quote:
      '"Finally, a tool that doesn\'t require you to hand over your data to stay safe."',
    year: "2025",
  },
  {
    outlet: "TechCrunch",
    quote:
      '"ScreenSentinel proves that real-time AI safety doesn\'t need the cloud."',
    year: "2026",
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* ── HERO ─────────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
              marginBottom: 96,
            }}
            className="ss-two-col"
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 22 }}>
                Our Story
              </p>
              <h1
                style={{
                  fontSize: "clamp(36px,4.5vw,58px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.08,
                  color: "var(--text)",
                  marginBottom: 22,
                }}
              >
                Defending truth from London.
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                Founded in 2024, ScreenSentinel was born from a simple
                observation: the tools to create synthetic media were outpacing
                the tools to detect it.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-subtle)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Our team of researchers and engineers in London came together to
                build a solution that doesn't just work in a lab — it works for
                everyone, every day, right on their desktop, with zero
                compromise on privacy.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                <MapPin size={16} color="var(--accent)" />
                Shoreditch, London, United Kingdom
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
                  src={IMG.allHands}
                  alt="ScreenSentinel all-hands meeting"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  padding: "16px 20px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "var(--text)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  2024
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: 4,
                  }}
                >
                  Established
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
              marginBottom: 96,
            }}
            className="ss-three-col"
          >
            {values.map(({ title, Icon, desc }) => (
              <div
                key={title}
                className="ss-card"
                style={{ padding: "32px 28px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon size={22} color="var(--accent)" />
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
            className="ss-two-col"
          >
            <div>
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 32,
                }}
              >
                Our journey
              </h2>
              <div>
                {milestones.map(({ year, event }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 20,
                      paddingBottom: 24,
                      borderBottom:
                        i < milestones.length - 1
                          ? "1px solid var(--border)"
                          : "none",
                      marginBottom: i < milestones.length - 1 ? 24 : 0,
                    }}
                  >
                    <div style={{ flexShrink: 0 }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "var(--accent)",
                          fontFamily: "monospace",
                          background: "var(--accent-dim)",
                          border: "1px solid var(--accent-border)",
                          borderRadius: 6,
                          padding: "3px 8px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {year}
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        marginTop: 2,
                      }}
                    >
                      {event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Press quotes */}
            <div>
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 32,
                }}
              >
                What they say
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {pressItems.map(({ outlet, quote, year }) => (
                  <div
                    key={outlet}
                    className="ss-card"
                    style={{ padding: "24px 24px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        {outlet}
                      </span>
                      <span
                        style={{ fontSize: 11, color: "var(--text-subtle)" }}
                      >
                        {year}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text)",
                        lineHeight: 1.6,
                        fontStyle: "italic",
                      }}
                    >
                      {quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE PHOTOS ───────────── */}
      <section
        style={{
          padding: "96px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>
              Life at ScreenSentinel
            </p>
            <h2
              style={{
                fontSize: 36,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: 14,
              }}
            >
              Where we work and how we think
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 15,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              We're based in Shoreditch, East London — a stone's throw from
              Silicon Roundabout, surrounded by the energy that makes London a
              world-class tech hub.
            </p>
          </div>
          {/* 3-col photo row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 12,
              marginBottom: 12,
            }}
            className="ss-three-col"
          >
            <div style={{ borderRadius: 14, overflow: "hidden", height: 280 }}>
              <img
                src={IMG.teamFun}
                alt="Team hanging out"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div style={{ borderRadius: 14, overflow: "hidden", height: 280 }}>
              <img
                src={IMG.meeting}
                alt="Team meeting"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 14, overflow: "hidden", height: 280 }}>
              <img
                src={IMG.lunch}
                alt="Team lunch"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 12 }}
            className="ss-culture-bottom"
          >
            <div style={{ borderRadius: 14, overflow: "hidden", height: 220 }}>
              <img
                src={IMG.collab}
                alt="Collaboration session"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 14, overflow: "hidden", height: 220 }}>
              <img
                src={IMG.london}
                alt="London skyline"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 70%",
                }}
              />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="/careers" className="ss-btn ss-btn-primary">
              Join our team <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <h2
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 40,
            }}
          >
            Leadership team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
            }}
            className="ss-three-col"
          >
            {teamMembers.map(({ name, role, initials, bio }) => (
              <div
                key={name}
                className="ss-card"
                style={{ padding: "28px 24px" }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontSize: 16,
                    marginBottom: 18,
                  }}
                >
                  {initials}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginBottom: 14,
                  }}
                >
                  {role}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ────────────────────── */}
      <section
        style={{
          padding: "72px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="ss-container"
          style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              fontSize: 64,
              color: "var(--accent)",
              lineHeight: 0.7,
              marginBottom: 28,
              opacity: 0.4,
            }}
          >
            "
          </div>
          <p
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.45,
              marginBottom: 32,
            }}
          >
            The future of security is at the edge, where privacy and performance
            meet.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--accent-dim)",
                border: "1px solid var(--accent-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "var(--accent)",
                fontSize: 13,
              }}
            >
              MT
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}
              >
                Marcus Thorne
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                Founder & CEO, ScreenSentinel
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .ss-two-col { grid-template-columns: 1fr !important; }
          .ss-three-col { grid-template-columns: 1fr 1fr !important; }
          .ss-culture-bottom { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .ss-three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
