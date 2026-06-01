import { Target, Heart, Shield, ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/content";

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
  { year: "2024 Q1", event: "ScreenSentinel founded by a small research team" },
  { year: "2024 Q3", event: "First beta deployed to 200 security researchers" },
  { year: "2025 Q1", event: "v1.0 public launch — 50,000 downloads in 30 days" },
  { year: "2025 Q3", event: "Enterprise programme launched with 12 anchor clients" },
  { year: "2026 Q1", event: "v2.4 released — 99.4% accuracy, sub-50ms latency" },
];

const pressItems = [
  {
    outlet: "The Guardian",
    quote: '"The most privacy-conscious deepfake detector we\'ve tested."',
    year: "2025",
  },
  {
    outlet: "Wired",
    quote: '"Finally, a tool that doesn\'t require you to hand over your data to stay safe."',
    year: "2025",
  },
  {
    outlet: "TechCrunch",
    quote: '"ScreenSentinel proves that real-time AI safety doesn\'t need the cloud."',
    year: "2026",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section style={{ padding: "96px 0 64px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px circle at 80% 0%, rgba(16,185,129,0.10), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <p className="ss-pill" style={{ marginBottom: 22 }}>Our Story</p>
            <h1 style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1.02, color: "var(--text)", marginBottom: 22 }}>
              Building the trust layer for synthetic media.
            </h1>
            <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14 }}>
              ScreenSentinel was founded on a simple observation: the tools to create synthetic media are outpacing the tools to detect it.
            </p>
            <p style={{ fontSize: 16, color: "var(--text-subtle)", lineHeight: 1.7 }}>
              We are a remote-first team of researchers and engineers building software that works for everyone, every day — right on their device, with zero compromise on privacy.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="ss-three-col">
            {values.map(({ title, Icon, desc }) => (
              <div key={title} className="ss-card" style={{ padding: "30px 26px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={20} color="var(--accent)" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 10 }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 13.5, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 16 }}>Milestones</p>
              <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 28 }}>
                Our journey
              </h2>
              <div>
                {milestones.map(({ year, event }, i) => (
                  <div key={year} style={{ display: "flex", gap: 20, paddingBottom: 22, borderBottom: i < milestones.length - 1 ? "1px solid var(--border)" : "none", marginBottom: i < milestones.length - 1 ? 22 : 0 }}>
                    <div style={{ flexShrink: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", fontFamily: "monospace", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", borderRadius: 6, padding: "3px 8px", whiteSpace: "nowrap" }}>
                        {year}
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginTop: 2 }}>
                      {event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="ss-pill" style={{ marginBottom: 16 }}>In the press</p>
              <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 28 }}>
                What they say
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {pressItems.map(({ outlet, quote, year }) => (
                  <div key={outlet} className="ss-card" style={{ padding: "22px 22px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        {outlet}
                      </span>
                      <span style={{ fontSize: 11, color: "var(--text-subtle)" }}>{year}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, fontStyle: "italic" }}>{quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <p className="ss-pill" style={{ marginBottom: 16 }}>The team</p>
          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 36 }}>
            Leadership
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="ss-three-col">
            {teamMembers.map(({ name, role, initials, bio }) => (
              <div key={name} className="ss-card" style={{ padding: "28px 24px" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--accent)", fontSize: 16, marginBottom: 18 }}>
                  {initials}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, marginBottom: 14 }}>{role}</div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 64, color: "var(--accent)", lineHeight: 0.7, marginBottom: 24, opacity: 0.4 }}>
            "
          </div>
          <p style={{ fontSize: 24, fontWeight: 600, color: "var(--text)", lineHeight: 1.45, marginBottom: 28 }}>
            The future of security is at the edge, where privacy and performance meet.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 36 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "var(--accent)", fontSize: 13 }}>
              MT
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Marcus Thorne</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Founder and CEO, ScreenSentinel</div>
            </div>
          </div>
          <a href="/careers" className="ss-btn ss-btn-primary">
            Join our team <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
