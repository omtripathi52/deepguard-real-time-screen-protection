import {
  ArrowRight,
  MapPin,
  Globe,
  Coffee,
  Heart,
  Zap,
  Users,
  Briefcase,
} from "lucide-react";
import { openRoles } from "../../data/content";

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
  engineer:
    "https://raw.createusercontent.com/fe3bdebf-7280-45c1-846d-9b2f38c6f902/",
};

const perks = [
  {
    title: "Remote Friendly",
    Icon: Globe,
    desc: "Work from anywhere. Our Shoreditch hub is always open for those who value face-to-face time.",
  },
  {
    title: "Health & Wellbeing",
    Icon: Heart,
    desc: "Comprehensive private health insurance and mental health support for you and your family.",
  },
  {
    title: "Growth & Learning",
    Icon: Zap,
    desc: "£2,000 annual education budget and regular internal workshops on the evolving AI landscape.",
  },
  {
    title: "Modern London Office",
    Icon: Coffee,
    desc: "Premium workspace in Shoreditch with great coffee, ergonomic setups, and a brilliant team.",
  },
];

const cultureItems = [
  { label: "18", desc: "Team members" },
  { label: "12", desc: "Countries represented" },
  { label: "4", desc: "Open roles" },
  { label: "100%", desc: "Growth in 2026" },
];

export default function CareersPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* ── HERO ─────────────────────────────── */}
      <section style={{ padding: "80px 0 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
              paddingBottom: 80,
            }}
            className="ss-two-col"
          >
            <div>
              <p className="ss-pill" style={{ marginBottom: 22 }}>
                Careers
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
                Build the future of digital truth.
              </h1>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 36,
                }}
              >
                We're a mission-driven team of engineers, designers, and
                truth-seekers building the world's first privacy-first deepfake
                detection platform — from London.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#roles" className="ss-btn ss-btn-primary">
                  See Open Roles <ArrowRight size={15} />
                </a>
                <a href="/about" className="ss-btn ss-btn-ghost">
                  About Us
                </a>
              </div>
            </div>
            {/* Large hero image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <img
                  src={IMG.allHands}
                  alt="ScreenSentinel all-hands in London"
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
                  top: -16,
                  left: -16,
                  background: "var(--accent)",
                  borderRadius: 12,
                  padding: "12px 18px",
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.04em",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: 600,
                  }}
                >
                  Growth in 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Culture stats bar */}
        <div
          style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="ss-container">
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
              className="ss-stats-grid"
            >
              {cultureItems.map(({ label, desc }, i) => (
                <div
                  key={desc}
                  style={{
                    padding: "32px 24px",
                    textAlign: "center",
                    borderRight: i < 3 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "var(--text)",
                      marginBottom: 4,
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE PHOTOS ─────────────────── */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
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
              Where great people do meaningful work
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: 15,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              We work hard, learn together, and celebrate wins. Here's a glimpse
              into daily life at ScreenSentinel.
            </p>
          </div>
          {/* Photo grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr",
              gridTemplateRows: "260px 260px",
              gap: 10,
            }}
            className="ss-photo-grid"
          >
            <div
              style={{ gridRow: "1/3", borderRadius: 16, overflow: "hidden" }}
            >
              <img
                src={IMG.meeting}
                alt="Strategy meeting in London office"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img
                src={IMG.teamFun}
                alt="Team enjoying their work"
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
                alt="Pair programming session"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img
                src={IMG.lunch}
                alt="Team lunch together"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img
                src={IMG.engineer}
                alt="Engineer at work"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS ──────────────────────────── */}
      <section
        style={{
          padding: "96px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="ss-container">
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
              Why join us?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
              We build a place we actually want to work in.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 16,
            }}
            className="ss-four-col"
          >
            {perks.map(({ title, Icon, desc }) => (
              <div
                key={title}
                className="ss-card"
                style={{ padding: "28px 22px" }}
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
                  }}
                >
                  <Icon size={20} color="var(--accent)" />
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
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

      {/* ── ROLES ──────────────────────────── */}
      <section
        id="roles"
        style={{ padding: "96px 0", background: "var(--bg)" }}
      >
        <div className="ss-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}
            >
              Open roles
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "var(--text-muted)",
              }}
            >
              <MapPin size={14} color="var(--accent)" />
              All roles based in London, UK (hybrid available)
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 60,
            }}
          >
            {openRoles.map(({ id, title, location, department, type }) => (
              <div
                key={id}
                className="ss-card"
                style={{
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  flexWrap: "wrap",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent-border)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: 8,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 12,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 5 }}
                    >
                      <MapPin size={11} />
                      {location}
                    </span>
                    <span
                      style={{
                        padding: "2px 10px",
                        background: "var(--bg3)",
                        borderRadius: 999,
                        border: "1px solid var(--border)",
                      }}
                    >
                      {department}
                    </span>
                    <span
                      style={{
                        padding: "2px 10px",
                        background: "var(--accent-dim)",
                        borderRadius: 999,
                        border: "1px solid var(--accent-border)",
                        color: "var(--accent)",
                      }}
                    >
                      {type}
                    </span>
                  </div>
                </div>
                <a
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--accent)",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  Apply <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Open application CTA */}
          <div
            style={{
              background: "linear-gradient(135deg,#059669 0%,#0284c7 100%)",
              borderRadius: 20,
              padding: "56px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Don't see a role for you?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 15,
                maxWidth: 480,
                margin: "0 auto 28px",
                lineHeight: 1.65,
              }}
            >
              We're always looking for talented people who share our mission.
              Send your CV and we'll keep you in mind.
            </p>
            <a
              href="mailto:careers@screensentinel.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 26px",
                background: "#fff",
                color: "#059669",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Send Open Application
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .ss-two-col { grid-template-columns: 1fr !important; }
          .ss-four-col { grid-template-columns: 1fr 1fr !important; }
          .ss-photo-grid { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .ss-photo-grid > div:first-child { grid-row: auto !important; }
          .ss-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .ss-stats-grid > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 600px) {
          .ss-four-col { grid-template-columns: 1fr !important; }
          .ss-photo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
