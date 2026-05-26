import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";
import { faqs, useCases } from "@/data/content";

const IMG = {
  hero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=1200&q=80",
  london: "https://raw.createusercontent.com/ccd74725-e0d2-4cb4-8c32-f1b3fa0b8fad/",
  teamFun: "https://raw.createusercontent.com/ca8cf7f9-95de-496c-9835-fc6dc686bda6/",
  collab: "https://raw.createusercontent.com/46d2361b-241c-4514-b167-4614b864a206/",
  lunch: "https://raw.createusercontent.com/85496808-8f95-40aa-aaf8-6a845631d802/",
  meeting: "https://raw.createusercontent.com/da8d53c9-1735-44bf-9b47-6b7a0019424e/",
};

const stats = [
  { v: "99/100", l: "Fake videos caught", sub: "We rarely miss one" },
  { v: "Instant", l: "Warning speed", sub: "You are told right away" },
  { v: "Zero", l: "Data sent to us", sub: "Complete privacy, always" },
  { v: "4,000+", l: "People protected", sub: "And growing every day" },
];

const logos = ["JPMORGAN", "REUTERS", "KPMG", "DELOITTE", "THE GUARDIAN", "BBC NEWS"];

const pillars = [
  {
    title: "Works on any video, anywhere",
    desc: "Whether you are on a video call, watching the news, or scrolling social media, ScreenSentinel quietly watches alongside you.",
  },
  {
    title: "Your screen stays private",
    desc: "We never see what is on your screen. Everything is checked on your computer and nothing is sent to us.",
  },
  {
    title: "Clear warnings, straight away",
    desc: "The moment something looks fake, you get one simple alert you can act on.",
  },
  {
    title: "So quiet you forget it is there",
    desc: "Runs in the background and only speaks up when it matters. No slowdowns.",
  },
];

export default function Index() {
  const { data: release, isLoading } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const versionText = isLoading ? "Checking..." : (release?.version || "v2.0.0");
  const releaseText = isLoading ? "Checking latest release" : `Latest release ${versionText}`;

  return (
    <div style={{ paddingTop: 70 }}>
      {/* HERO */}
      <section style={{ padding: "32px 0 0", overflow: "hidden", background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-two-col" style={{ alignItems: "flex-start", gap: 48, paddingBottom: 56 }}>
            <div>
              <div className="ss-pill" style={{ marginBottom: 24 }}>
                {releaseText}
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
                <span style={{ color: "var(--accent)" }}>what you are watching?</span>
              </h1>
              <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}>
                AI can create fake videos of real people saying and doing things they never did. ScreenSentinel watches your screen and tells you instantly if a video looks faked.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <a href={exeLink} className="ss-btn ss-btn-primary">
                  Download free <ArrowRight size={15} />
                </a>
                <Link to="/product" className="ss-btn ss-btn-ghost">
                  See how it works
                </Link>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Windows 10 and 11. Latest build: {versionText}
              </div>
            </div>

            <div style={{ position: "relative", marginTop: 6 }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={IMG.hero}
                  alt="Person on a video call"
                  style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
                />
              </div>
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <div
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: 10,
                    padding: "8px 14px",
                    backdropFilter: "blur(8px)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Watching your screen
                </div>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "8px 12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#dc2626" }} />
                  This looks fake
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
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 65%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, var(--bg) 0%, transparent 35%, transparent 65%, var(--bg) 100%)",
            }}
          />
          <div
            style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
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
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                Based in Shoreditch, London
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section style={{ padding: "44px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
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
            Trusted by organizations across the world
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 44, flexWrap: "wrap" }}>
            {logos.map((l) => (
              <span key={l} style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", color: "var(--text-subtle)", opacity: 0.55 }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "72px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }} className="ss-stats-grid">
            {stats.map((s, i) => (
              <div
                key={s.l}
                style={{ padding: "40px 28px", background: i === 3 ? "var(--accent)" : "var(--bg2)", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}
              >
                <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.05em", color: i === 3 ? "#fff" : "var(--text)", marginBottom: 6, lineHeight: 1 }}>
                  {s.v}
                </div>
                <div style={{ fontSize: 14, color: i === 3 ? "rgba(255,255,255,0.95)" : "var(--text)", fontWeight: 700, marginBottom: 4 }}>
                  {s.l}
                </div>
                <div style={{ fontSize: 12, color: i === 3 ? "rgba(255,255,255,0.65)" : "var(--text-subtle)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ padding: "80px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, gap: 24, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 10 }}>
                Made to fit how you already work
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 460, lineHeight: 1.65 }}>
                Different jobs face different risks. Here is what ScreenSentinel does for your specific situation.
              </p>
            </div>
            <Link to="/solutions" className="ss-btn ss-btn-ghost">
              See solutions <ArrowRight size={14} />
            </Link>
          </div>

          <div className="ss-row1" style={{ marginBottom: 14 }}>
            <div style={{ borderRadius: 18, background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.18)", overflow: "hidden", padding: "44px 44px 36px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                <span style={{ fontSize: 48 }}>Social</span>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--border)", padding: "4px 12px", borderRadius: 999 }}>
                  {useCases[0].stat}
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                {useCases[0].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6", marginBottom: 16 }}>
                Stop misinformation before it spreads.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, flex: 1 }}>
                {useCases[0].description}
              </p>
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(59,130,246,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                  {["Catches fakes instantly", "Works on any site", "No setup needed"].map((t) => (
                    <span key={t} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                  Get started <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 18, background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.2)", overflow: "hidden", padding: "44px 36px 36px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, marginBottom: 28, display: "block" }}>Identity</span>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                {useCases[1].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#8b5cf6", marginBottom: 14 }}>
                Your face. Your rules.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75, flex: 1 }}>
                {useCases[1].description}
              </p>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: 999 }}>
                  {useCases[1].stat}
                </span>
              </div>
            </div>
          </div>

          <div className="ss-row2">
            <div style={{ borderRadius: 18, background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)", overflow: "hidden", padding: "44px 36px 36px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, marginBottom: 28, display: "block" }}>News</span>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                {useCases[2].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b", marginBottom: 14 }}>
                Publish with confidence.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75, flex: 1 }}>
                {useCases[2].description}
              </p>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--border)", padding: "4px 10px", borderRadius: 999 }}>
                  {useCases[2].stat}
                </span>
              </div>
            </div>

            <div style={{ borderRadius: 18, background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)", overflow: "hidden", padding: "44px 44px 36px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                <span style={{ fontSize: 48 }}>Enterprise</span>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--border)", padding: "4px 12px", borderRadius: 999 }}>
                  {useCases[3].stat}
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                {useCases[3].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", marginBottom: 16 }}>
                Scammers now look and sound exactly like your boss.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, flex: 1 }}>
                {useCases[3].description}
              </p>
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(16,185,129,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                  {["Works on Zoom and Teams", "Flags fakes in real time", "No IT setup needed"].map((t) => (
                    <span key={t} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: "#10b981", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                  Talk to us <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SCREENSENTINEL */}
      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container">
          <div className="ss-two-col" style={{ alignItems: "start" }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Why people choose us
              </p>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14, lineHeight: 1.1 }}>
                Simple protection.
                <br />
                Zero effort.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, marginBottom: 44 }}>
                No technical knowledge needed. Install once and it quietly protects you every time you watch a video, on any site or app.
              </p>
              <div style={{ border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
                {pillars.map((p, idx) => (
                  <div
                    key={p.title}
                    style={{
                      padding: "24px 26px",
                      background: "var(--bg)",
                      borderBottom: idx < pillars.length - 1 ? "1px solid var(--border)" : "none",
                      display: "flex",
                      gap: 18,
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent)" }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 5 }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                <div style={{ background: "var(--bg3)", padding: "12px 18px", display: "flex", alignItems: "center", gap: 7, borderBottom: "1px solid var(--border)" }}>
                  {["#ff5f57", "#ffbd2e", "#28ca41"].map((c) => (
                    <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ fontSize: 12, color: "var(--text-subtle)", marginBottom: 10 }}>
                    Live screen check
                  </div>
                  <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                      Screen looks authentic
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                      ScreenSentinel checks micro-signals in real time and warns you if something looks off.
                    </div>
                  </div>
                  <div style={{ marginTop: 14, fontSize: 12, color: "var(--text-subtle)" }}>
                    Running quietly in the background
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              Quick FAQ
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
              Short answers to the most common questions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="ss-three-col">
            {faqs.slice(0, 3).map((f) => (
              <div key={f.question} className="ss-card" style={{ padding: "28px 24px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>
                  {f.question}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href={exeLink} className="ss-btn ss-btn-primary">
              Download free <ArrowRight size={14} />
            </a>
            <Link to="/product" className="ss-btn ss-btn-ghost" style={{ marginLeft: 10 }}>
              Learn how it works
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM MOSAIC */}
      <section style={{ padding: "0 0 96px", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="ss-pill" style={{ marginBottom: 16 }}>
              Our people
            </p>
            <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 14 }}>
              Real people, real mission
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 16, maxWidth: 500, margin: "0 auto", lineHeight: 1.65 }}>
              We are a team of researchers, designers, and problem-solvers based in London.
            </p>
          </div>
          <div className="ss-mosaic">
            <div style={{ gridRow: "1/3", borderRadius: 16, overflow: "hidden" }}>
              <img src={IMG.meeting} alt="Team meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src={IMG.teamFun} alt="Team working" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src={IMG.collab} alt="Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src={IMG.lunch} alt="Team lunch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, background: "var(--accent)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10, padding: 28, textAlign: "center" }}>
              <div style={{ fontSize: 52, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>18</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>people on the team</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                All in London - engineers, researchers, designers, and more
              </div>
              <Link to="/careers" style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}>
                We are hiring &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}