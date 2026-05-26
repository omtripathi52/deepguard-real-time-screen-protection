import { ArrowRight, MapPin, Briefcase, HeartHandshake, Code, Cpu, ShieldCheck, Globe, PenTool, CheckCircle2 } from "lucide-react";
import { openRoles } from "@/data/content";

const values = [
  {
    Icon: ShieldCheck,
    title: "Mission-driven focus",
    desc: "Every model we build defends the integrity of digital media. We care about the impact of our work.",
  },
  {
    Icon: Globe,
    title: "Global outlook",
    desc: "Our team spans 6 countries. We design for diverse audiences and critical use cases worldwide.",
  },
  {
    Icon: PenTool,
    title: "Design-led engineering",
    desc: "We care about how the product feels. Beautiful, intuitive, and respectful experiences matter.",
  },
];

const perks = [
  "Remote-first in the UK or Europe",
  "Private health coverage and wellness stipend",
  "Annual retreat in London",
  "Learning budget for conferences and courses",
];

const departments = [
  { Icon: Code, label: "Engineering" },
  { Icon: Cpu, label: "Machine Learning" },
  { Icon: HeartHandshake, label: "Customer success" },
  { Icon: Briefcase, label: "Operations" },
];

const applyLink = (title: string) =>
  `mailto:careers@screensentinel.com?subject=${encodeURIComponent(`Role application: ${title}`)}`;

export default function Careers() {
  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: "90px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-two-col" style={{ alignItems: "center" }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 24 }}>
                Careers
              </p>
              <h1 style={{ fontSize: "clamp(36px,4.6vw,60px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.05, marginBottom: 18 }}>
                Build the trust layer for AI-generated media.
              </h1>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>
                We are a tight-knit team in London and across Europe. We move quickly, we sweat the details, and we believe truth should be effortless.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a href="#roles" className="ss-btn ss-btn-primary">
                  View open roles <ArrowRight size={14} />
                </a>
                <a href="mailto:careers@screensentinel.com" className="ss-btn" style={{ border: "1px solid var(--border)", background: "var(--bg2)" }}>
                  Introduce yourself
                </a>
              </div>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>What we are building</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                ScreenSentinel verifies digital media in real time using proprietary AI detection and forensic analysis. Our mission is to keep the world safe from synthetic misinformation.
              </p>
              <div style={{ display: "grid", gap: 12 }}>
                {perks.map((p) => (
                  <div key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--text)" }}>
                    <CheckCircle2 size={15} color="var(--accent)" /> {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>Teams we are hiring for</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Choose a path that matches your skills and passion.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: 18 }}>
            {departments.map(({ Icon, label }) => (
              <div key={label} style={{ border: "1px solid var(--border)", borderRadius: 14, padding: "18px", background: "var(--bg)" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <Icon size={16} color="var(--accent)" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" style={{ padding: "90px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>Open roles</h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{openRoles.length} positions in London right now.</p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {openRoles.map((job) => (
              <article key={job.id} style={{ border: "1px solid var(--border)", borderRadius: 18, padding: "24px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: 16, alignItems: "center", background: "var(--bg2)" }} className="ss-job-row">
                <div>
                  <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-subtle)", marginBottom: 6 }}>
                    {job.department} • {job.level}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{job.title}</h3>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{job.description}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text-muted)" }}>
                  <MapPin size={14} color="var(--accent)" /> {job.location}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{job.type}</div>
                <a href={applyLink(job.title)} className="ss-btn ss-btn-primary" style={{ padding: "10px 16px", borderRadius: 999 }}>
                  Apply <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container">
          <div className="ss-three-col">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="ss-card" style={{ padding: "26px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon size={18} color="var(--accent)" />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
