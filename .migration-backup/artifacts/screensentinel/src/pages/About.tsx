import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, Eye, Lock, Sparkles, Download } from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";

const principles = [
  {
    Icon: Lock,
    title: "Privacy without compromise",
    desc: "Nothing on your screen ever leaves your device. Detection happens locally, in memory, with zero telemetry and zero accounts.",
  },
  {
    Icon: Cpu,
    title: "Local by default",
    desc: "If a system needs the cloud to tell you whether a video is real, the cost of trust is your data. We refuse that trade.",
  },
  {
    Icon: Shield,
    title: "Trust through verification",
    desc: "We don't ask people to take our word for it. The model runs in the open, on your machine, where it can be measured.",
  },
  {
    Icon: Eye,
    title: "Human judgment comes first",
    desc: "We surface a calibrated signal — not a verdict. The person watching the screen should always have the final word.",
  },
];

const why = [
  "Generative video models have moved from research labs into consumer apps in under two years.",
  "A convincing face-swap now takes a single photo and a few minutes — not a dataset and a studio.",
  "Live face replacement is being used inside video calls to authorise wires and approvals.",
  "Newsroom verification workflows were designed for a world where fabricating footage was hard.",
];

export default function AboutPage() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";

  return (
    <div className="ss-mobile-page ss-about-page">
      {/* HERO */}
      <section style={{ padding: "clamp(60px,7vw,112px) 0 clamp(40px,5vw,72px)", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px circle at 80% 0%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(600px circle at 0% 80%, rgba(59,130,246,0.06), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 820 }}>
            <p className="ss-pill" style={{ marginBottom: 22 }}>About ScreenSentinel</p>
            <h1 style={{ fontSize: "clamp(40px,5.4vw,72px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.0, color: "var(--text)", marginBottom: 24 }}>
              Trust what you watch.
            </h1>
            <p style={{ fontSize: 19, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 16, maxWidth: 720 }}>
              The ability to fabricate convincing video is now widely available. The ability to verify it isn't.
            </p>
            <p style={{ fontSize: 16, color: "var(--text-subtle)", lineHeight: 1.7, maxWidth: 720 }}>
              ScreenSentinel exists to close that gap — quietly, locally, and without ever asking you to give up your privacy in exchange for the truth.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section style={{ padding: "clamp(48px,6vw,88px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)", borderBottom: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }} className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 16 }}>Why we started</p>
              <h2 style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1 }}>
                Detection shouldn't cost you your privacy.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 16.5, color: "var(--text)", lineHeight: 1.75 }}>
                ScreenSentinel started with a simple question: why does almost every deepfake detector require you to upload the very video you're trying to protect?
              </p>
              <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.75 }}>
                The honest answer is that on-device inference is harder. It means smaller models, tighter latency budgets, and giving up the comfort of a server you control. We thought it was worth the work. Sending a private video call to a cloud API to find out if it's fake is its own kind of leak.
              </p>
              <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.75 }}>
                So we built the opposite. A detector that lives entirely on the device the video is being watched on. No uploads, no accounts, no logs. Just a quiet signal that tells you whether what's on your screen can be trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section style={{ padding: "clamp(48px,6vw,96px) 0", background: "var(--bg)" }}>
        <div className="ss-hero-wrap">
          <div style={{ maxWidth: 680, marginBottom: 44 }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>What we believe</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1, marginBottom: 14 }}>
              The principles the product is built on
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15.5, lineHeight: 1.7 }}>
              These aren't values on a wall. They are decisions we make every release — about what to ship, what to refuse, and what to remove.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }} className="ss-two-col">
            {principles.map(({ Icon, title, desc }) => (
              <div key={title} className="ss-card" style={{ padding: "28px 28px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={18} color="var(--accent)" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section style={{ padding: "clamp(48px,6vw,96px) 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)", borderBottom: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>Why now</p>
            <h2 style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: 800, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1, marginBottom: 14 }}>
              The window to build this is short.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15.5, lineHeight: 1.7 }}>
              Four things changed in the last twenty-four months, and together they make detection infrastructure necessary in a way it simply wasn't before.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="ss-two-col">
            {why.map((line, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 18,
                  padding: "22px 24px",
                  borderRadius: 14,
                  border: "1px solid var(--ss-line)",
                  background: "var(--bg)",
                }}
              >
                <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 700, color: "var(--accent)", paddingTop: 2 }}>
                  0{i + 1}
                </div>
                <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.65 }}>{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section style={{ padding: "clamp(56px,7vw,120px) 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(800px circle at 50% 0%, rgba(16,185,129,0.10), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="ss-hero-wrap" style={{ position: "relative", zIndex: 1, maxWidth: 820, textAlign: "center", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, border: "1px solid var(--accent-border)", background: "var(--accent-dim)", color: "var(--accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28 }}>
            <Sparkles size={12} /> The long view
          </div>
          <h2 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.1, marginBottom: 24 }}>
            Infrastructure for media trust.
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14 }}>
            We're not trying to build the world's most viral deepfake detector. We're trying to build the layer underneath — the one that lets anyone, anywhere, verify what they're watching without handing it over to anyone.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-subtle)", lineHeight: 1.7 }}>
            A future where seeing is believing again — because the verification happened on your device, in milliseconds, and the only person who ever saw the result was you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(48px,5vw,88px) 0 clamp(60px,6vw,112px)", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-hero-wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.02em" }}>
            Explore further
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14.5, marginBottom: 28 }}>
            How the product works, how the trust architecture is built, and how to start using it today.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={exeLink} className="ss-btn ss-btn-primary">
              <Download size={14} /> Download ScreenSentinel
            </a>
            <Link to="/product" className="ss-btn ss-btn-ghost">
              Explore the product <ArrowRight size={14} />
            </Link>
            <Link to="/trust" className="ss-btn ss-btn-ghost">
              Trust architecture <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
