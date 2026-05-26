import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Award,
  ArrowRight,
  Ticket,
} from "lucide-react";
import { events } from "../../data/content";

const IMG = {
  hackathon:
    "https://raw.createusercontent.com/87f37f11-dceb-4517-aabf-2fff4cf24440/",
  allHands:
    "https://raw.createusercontent.com/9e8b570a-0a03-4f98-8f5e-f177694f90b6/",
};

const highlights = [
  {
    Icon: Award,
    title: "Prizes & Grants",
    desc: "We fund developers building open-source tools for media authenticity. £50k in prizes at our annual hackathon.",
  },
  {
    Icon: Users,
    title: "Community First",
    desc: "Monthly meetups in London for AI researchers, journalists, and security professionals.",
  },
  {
    Icon: Zap,
    title: "On-Demand Learning",
    desc: "Access recordings, research papers, and slides from all past events in our resource library.",
  },
];

const typeColors = {
  Hackathon: {
    bg: "#fef3c7",
    text: "#92400e",
    dark: "rgba(251,191,36,0.12)",
    darkText: "#fbbf24",
  },
  Workshop: {
    bg: "#dbeafe",
    text: "#1e40af",
    dark: "rgba(96,165,250,0.12)",
    darkText: "#60a5fa",
  },
  Conference: {
    bg: "#f3e8ff",
    text: "#7c3aed",
    dark: "rgba(167,139,250,0.12)",
    darkText: "#a78bfa",
  },
};

export default function EventsPage() {
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
              marginBottom: 80,
            }}
            className="ss-two-col"
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 22 }}>
                Events & Community
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
                Shaping the future of truth, together.
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 36,
                }}
              >
                We host hackathons, workshops, and webinars in London and online
                to empower developers and professionals fighting synthetic
                misinformation.
              </p>
              <a href="#events" className="ss-btn ss-btn-primary">
                View Upcoming Events <ArrowRight size={15} />
              </a>
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
                  src={IMG.hackathon}
                  alt="Sentinel Hackathon 2026"
                  style={{
                    width: "100%",
                    aspectRatio: "16/10",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "var(--accent)",
                  borderRadius: 999,
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Ticket size={13} color="#fff" />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>
                  Sentinel Hack 2026 — Open
                </span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 16,
            }}
            className="ss-three-col"
          >
            {highlights.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="ss-card"
                style={{ padding: "28px 24px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                  }}
                >
                  <Icon size={20} color="var(--accent)" />
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: "var(--text)",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HACKATHON FEATURE ────────── */}
      <section style={{ padding: "0 0 96px", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              border: "1px solid var(--accent-border)",
              borderRadius: 20,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
            className="ss-two-col"
          >
            <div style={{ overflow: "hidden" }}>
              <img
                src={IMG.allHands}
                alt="Sentinel community gathering"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: 280,
                }}
              />
            </div>
            <div
              style={{ padding: "48px 40px", background: "var(--accent-dim)" }}
            >
              <div className="ss-pill" style={{ marginBottom: 20 }}>
                Flagship Event
              </div>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 14,
                }}
              >
                Sentinel Hackathon 2026
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                48 hours. 3 tracks. £50,000 in prizes. Join us in London for the
                most important hackathon in AI-powered media authentication.
                Open to students, professionals, and teams worldwide.
              </p>
              {[
                ["Date", "August 12–14, 2026"],
                ["Location", "London, UK (+ Virtual stream)"],
                ["Prizes", "£50,000 across 3 categories"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{ display: "flex", gap: 12, marginBottom: 12 }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--text-subtle)",
                      width: 72,
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--text)",
                      fontWeight: 500,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
              <a
                href="/contact"
                className="ss-btn ss-btn-primary"
                style={{ marginTop: 24 }}
              >
                Register Now <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS LIST ──────────────── */}
      <section
        id="events"
        style={{
          padding: "96px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="ss-container">
          <h2
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 36,
            }}
          >
            Upcoming events
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 60,
            }}
          >
            {events.map((ev) => {
              const tc = typeColors[ev.type] || typeColors["Workshop"];
              return (
                <div
                  key={ev.id}
                  className="ss-card"
                  style={{
                    padding: "28px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: 999,
                          background: "var(--accent-dim)",
                          color: "var(--accent)",
                          border: "1px solid var(--accent-border)",
                        }}
                      >
                        {ev.type}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <Calendar size={11} />
                        {ev.date}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--text-muted)",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <MapPin size={11} />
                        {ev.location}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 8,
                      }}
                    >
                      {ev.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {ev.description}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    {ev.registrationOpen ? (
                      <a
                        href="/contact"
                        className="ss-btn ss-btn-primary"
                        style={{ fontSize: 13, padding: "10px 20px" }}
                      >
                        Register <ArrowRight size={13} />
                      </a>
                    ) : (
                      <span
                        style={{
                          fontSize: 13,
                          color: "var(--text-subtle)",
                          padding: "10px 20px",
                          border: "1px solid var(--border)",
                          borderRadius: 999,
                          display: "inline-block",
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Propose event */}
          <div
            style={{
              textAlign: "center",
              padding: "56px 32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
            }}
          >
            <h2
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              Want to collaborate on an event?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 14,
                maxWidth: 480,
                margin: "0 auto 28px",
                lineHeight: 1.65,
              }}
            >
              We're open to co-hosting workshops, webinars, and meetups with
              universities, newsrooms, and security firms.
            </p>
            <a href="/contact" className="ss-btn ss-btn-primary">
              Get in Touch <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          .ss-two-col { grid-template-columns: 1fr !important; }
          .ss-three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .ss-three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
