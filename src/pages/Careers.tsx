import { ArrowRight, MapPin, Globe, Heart, BookOpen, Sparkles, Zap, Users, CheckCircle2, DollarSign } from "lucide-react";
import { openRoles } from "@/data/content";

const values = [
  {
    Icon: Sparkles,
    title: "Mission that matters",
    desc: "Every model we ship defends the integrity of digital media. The work has weight — and we treat it that way.",
  },
  {
    Icon: Globe,
    title: "Remote, by design",
    desc: "Hire the best person for the role, wherever they are. We've built a culture that thrives across timezones.",
  },
  {
    Icon: Heart,
    title: "Care for the craft",
    desc: "We sweat the details — in research, in product, in code review. Quality is a non-negotiable here.",
  },
];

const benefits = [
  { Icon: DollarSign, title: "Competitive USD salary", desc: "Top-of-market compensation paid in USD, anywhere in the world." },
  { Icon: Globe, title: "Fully remote", desc: "Work from anywhere. Async-first culture with deep-work blocks." },
  { Icon: Heart, title: "Health & wellness", desc: "Private medical coverage and a monthly wellness stipend." },
  { Icon: BookOpen, title: "Learning budget", desc: "$2,000/year for conferences, courses and books." },
  { Icon: Users, title: "Team retreats", desc: "Twice a year, the whole team gathers in person." },
  { Icon: Zap, title: "Top-tier equipment", desc: "Your choice of laptop, monitor and home-office setup." },
];

const applyLink = (title: string) =>
  `mailto:careers@screensentinel.com?subject=${encodeURIComponent(`Role application: ${title}`)}`;

export default function Careers() {
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "96px 0 56px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px circle at 80% 0%, rgba(16,185,129,0.12), transparent 60%), radial-gradient(600px circle at 10% 100%, rgba(59,130,246,0.08), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 780 }}>
            <p className="ss-pill" style={{ marginBottom: 22 }}>Careers</p>
            <h1 style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 800, letterSpacing: "-0.045em", color: "var(--text)", lineHeight: 1.02, marginBottom: 22 }}>
              Help defend the integrity of <span className="grad-text">what we all see online.</span>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28, maxWidth: 620 }}>
              We're a remote-first team building on-device AI to detect synthetic media in real time. If you care about privacy, craft, and work that genuinely matters — we'd love to meet you.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
              <a href="#roles" className="ss-btn ss-btn-primary">
                View open roles <ArrowRight size={14} />
              </a>
              <a href="mailto:careers@screensentinel.com" className="ss-btn ss-btn-ghost">
                Introduce yourself
              </a>
            </div>
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap", fontSize: 13, color: "var(--text-subtle)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Globe size={13} /> Remote — Worldwide
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <DollarSign size={13} /> Paid in USD
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Users size={13} /> {openRoles.length} open roles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "72px 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="ss-three-col">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="ss-card" style={{ padding: "28px 26px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon size={18} color="var(--accent)" />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" style={{ padding: "88px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 14 }}>Open positions</p>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 8 }}>
                Now hiring
              </h2>
              <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
                {openRoles.length} roles · Remote worldwide · Salaries in USD
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            {openRoles.map((job) => (
              <article
                key={job.id}
                className="ss-role-card"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 18,
                  padding: "24px 26px",
                  background: "var(--bg)",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr auto", gap: 20, alignItems: "center" }} className="ss-role-row">
                  <div>
                    <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 700, marginBottom: 6 }}>
                      {job.department}
                    </div>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.01em" }}>{job.title}</h3>
                    <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560 }}>
                      {job.description}
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-muted)" }}>
                      <MapPin size={14} color="var(--accent)" /> {job.location}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text)", fontWeight: 600 }}>
                      <DollarSign size={14} color="var(--accent)" /> {job.salary}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-subtle)" }}>
                      <CheckCircle2 size={14} color="var(--accent)" /> {job.type}
                    </span>
                  </div>
                  <a href={applyLink(job.title)} className="ss-btn ss-btn-primary" style={{ whiteSpace: "nowrap" }}>
                    Apply <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 28, padding: "20px 24px", borderRadius: 14, border: "1px dashed var(--border)", textAlign: "center", color: "var(--text-muted)", fontSize: 14 }}>
            Don't see your role? We're always interested in exceptional people —{" "}
            <a href="mailto:careers@screensentinel.com" style={{ color: "var(--accent)", fontWeight: 600 }}>get in touch</a>.
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>Benefits</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              What you get
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.65 }}>
              We pay top of market and remove the friction so you can do the best work of your career.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="ss-three-col">
            {benefits.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  padding: "22px 22px",
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  background: "var(--bg2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                    <Icon size={15} />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{title}</div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(600px circle at 50% 0%, rgba(16,185,129,0.12), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 16, lineHeight: 1.1 }}>
            Build the trust layer with us
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
            Strong portfolio over CV. Tell us what you've built and what you want to build next.
          </p>
          <a href="mailto:careers@screensentinel.com" className="ss-btn ss-btn-primary">
            careers@screensentinel.com <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
