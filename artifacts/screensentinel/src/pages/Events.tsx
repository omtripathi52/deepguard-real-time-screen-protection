import { Calendar, MapPin, Users, Zap, Award, ArrowRight, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/data/content";

const IMG = {
  hackathon: "https://raw.createusercontent.com/87f37f11-dceb-4517-aabf-2fff4cf24440/",
  allHands: "https://raw.createusercontent.com/9e8b570a-0a03-4f98-8f5e-f177694f90b6/",
};

const highlights = [
  {
    Icon: Award,
    title: "Prizes and grants",
    desc: "We fund developers building open-source tools for media authenticity. 50k in prizes at our annual hackathon.",
  },
  {
    Icon: Users,
    title: "Community first",
    desc: "Online meetups for AI researchers, journalists, and security professionals worldwide.",
  },
  {
    Icon: Zap,
    title: "On-demand learning",
    desc: "Access recordings, research papers, and slides from all past events in our resource library.",
  },
];

const typeColors: Record<string, { bg: string; text: string; dark: string; darkText: string }> = {
  Hackathon: { bg: "#fef3c7", text: "#92400e", dark: "rgba(251,191,36,0.12)", darkText: "#fbbf24" },
  Workshop: { bg: "#dbeafe", text: "#1e40af", dark: "rgba(96,165,250,0.12)", darkText: "#60a5fa" },
  Conference: { bg: "#f3e8ff", text: "#7c3aed", dark: "rgba(167,139,250,0.12)", darkText: "#a78bfa" },
};

export default function Events() {
  return (
    <div className="ss-mobile-page ss-events-page" style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-two-col" style={{ alignItems: "center", marginBottom: 80 }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 22 }}>
                Events and community
              </p>
              <h1 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.08, color: "var(--text)", marginBottom: 22 }}>
                Shaping the future of truth, together.
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36 }}>
                We host hackathons, workshops, and webinars online to empower developers and professionals fighting synthetic misinformation.
              </p>
              <a href="#events" className="ss-btn ss-btn-primary">
                View upcoming events <ArrowRight size={15} />
              </a>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--ss-line)" }}>
                <img src={IMG.hackathon} alt="Sentinel Hackathon 2026" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", top: 16, right: 16, background: "var(--accent)", borderRadius: 999, padding: "8px 16px", display: "flex", alignItems: "center", gap: 6 }}>
                <Ticket size={13} color="#fff" />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Sentinel Hack 2026 - Open</span>
              </div>
            </div>
          </div>

          <div className="ss-three-col">
            {highlights.map(({ Icon, title, desc }) => (
              <div key={title} className="ss-card" style={{ padding: "28px 24px", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                  <Icon size={20} color="var(--accent)" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 96px", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ border: "1px solid var(--accent-border)", borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="ss-two-col">
            <div style={{ overflow: "hidden" }}>
              <img src={IMG.allHands} alt="Sentinel community gathering" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 280 }} />
            </div>
            <div style={{ padding: "48px 40px", background: "var(--accent-dim)" }}>
              <div className="ss-pill" style={{ marginBottom: 20 }}>
                Flagship event
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 14 }}>
                Sentinel Hackathon 2026
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                48 hours. 3 tracks. 50k in prizes. Join us in London for the most important hackathon in AI-powered media authentication.
              </p>
              {[
                ["Date", "August 12-14, 2026"],
                ["Location", "London, UK + virtual stream"],
                ["Prizes", "50,000 across 3 categories"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
                  <strong style={{ color: "var(--text)", minWidth: 82 }}>{k}:</strong> {v}
                </div>
              ))}
              <a href="#events" className="ss-btn ss-btn-primary" style={{ marginTop: 12 }}>
                Apply now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="events" style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              Upcoming events
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 520, margin: "0 auto" }}>
              Join us in person or online. Every event is designed to help people build safer media.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {events.map((e) => {
              const tint = typeColors[e.type as keyof typeof typeColors];
              return (
                <article key={e.id} style={{ border: "1px solid var(--ss-line)", borderRadius: 18, background: "var(--bg)", padding: "28px 26px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span style={{ padding: "6px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700, background: tint?.dark ?? "var(--bg3)", color: tint?.darkText ?? "var(--text-muted)" }}>
                      {e.type}
                    </span>
                    {!e.registrationOpen && (
                      <span style={{ fontSize: 12, color: "var(--text-subtle)", border: "1px solid var(--ss-line)", padding: "4px 10px", borderRadius: 999 }}>
                        Registration soon
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
                    {e.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{e.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                      <Calendar size={14} color="var(--accent)" /> {e.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                      <MapPin size={14} color="var(--accent)" /> {e.location}
                    </span>
                    {e.registrationOpen ? (
                      <Link
                        to="/contact"
                        className="ss-btn"
                        style={{ marginLeft: "auto", background: "var(--accent)", color: "#fff", padding: "10px 18px", borderRadius: 999, textDecoration: "none" }}
                      >
                        Register interest
                      </Link>
                    ) : (
                      <button className="ss-btn" style={{ marginLeft: "auto", background: "var(--bg3)", color: "var(--text-muted)", padding: "10px 18px", borderRadius: 999 }} disabled>
                        Notify me
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
