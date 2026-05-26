import { useGitHubRelease } from "@/hooks/use-github-release";

const productImage = "https://raw.createusercontent.com/fe3bdebf-7280-45c1-846d-9b2f38c6f902/";

const features = [
  {
    title: "Works on any video, from anywhere",
    desc: "Zoom calls, YouTube, news sites, and video messages - it does not matter where the video is coming from.",
    col: "#10b981",
  },
  {
    title: "Simple warning when something looks fake",
    desc: "No confusing scores or technical readouts. If a video looks suspicious, you get one clear message.",
    col: "#0ea5e9",
  },
  {
    title: "Everything stays on your computer",
    desc: "Checks happen locally. Nothing is saved or sent to us, ever.",
    col: "#8b5cf6",
  },
  {
    title: "Quietly runs without slowing you down",
    desc: "Runs in the background and does not interrupt your day.",
    col: "#f59e0b",
  },
];

const steps = [
  {
    n: "1",
    title: "Download and open it",
    desc: "Takes under 60 seconds. No accounts, no complicated settings.",
  },
  {
    n: "2",
    title: "It watches your screen",
    desc: "ScreenSentinel quietly runs in the background watching any video that plays on your computer.",
  },
  {
    n: "3",
    title: "It checks if the video is real",
    desc: "It looks at tiny details like blinking patterns and facial motion consistency.",
  },
  {
    n: "4",
    title: "You get a simple answer",
    desc: "If something seems fake, you get one clear warning in plain English.",
  },
];

export default function Product() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const version = release?.version || "v2.0.0";

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
            <p className="ss-pill" style={{ marginBottom: 18 }}>
              Version {version}
            </p>
            <h1 style={{ fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 18, lineHeight: 1.1 }}>
              As simple as watching a video
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
              You watch video the same way you always do. ScreenSentinel quietly watches alongside you and tells you instantly if something looks fake.
            </p>
          </div>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", position: "relative", marginBottom: 96 }}>
            <img src={productImage} alt="ScreenSentinel in action" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 28, left: 28, padding: "18px 22px", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(16px)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", maxWidth: 340 }}>
              <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: 8, fontSize: 15 }}>Is this person real?</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.65 }}>
                ScreenSentinel looks at tiny details like how eyes blink, how skin moves, and whether the face matches what someone is saying.
              </p>
            </div>
            <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: 10, padding: "8px 16px", backdropFilter: "blur(8px)" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981" }}>Video looks real</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              Here is exactly what happens
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 380, margin: "0 auto", lineHeight: 1.65 }}>
              No technical knowledge needed. It really is this simple.
            </p>
          </div>

          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            {steps.map((s, idx) => (
              <div key={s.n} style={{ display: "flex", justifyContent: "flex-start", marginBottom: 48, position: "relative" }}>
                <div style={{ width: "44%", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 16, padding: "28px 28px 24px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", marginBottom: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", borderRadius: 6, padding: "3px 10px", display: "inline-block" }}>
                    Step {s.n}
                  </div>
                  <h3 style={{ fontWeight: 700, color: "var(--text)", marginBottom: 10, fontSize: 17, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              Designed to fit into your life
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 460, margin: "0 auto", lineHeight: 1.65 }}>
              Whether you are on a call with your bank, watching the news, or checking a viral video - it has you covered.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 72, border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
            {features.map((f, idx) => (
              <div key={f.title} style={{ display: "flex", gap: 28, alignItems: "flex-start", padding: "32px 36px", background: "var(--bg2)", borderBottom: idx < features.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${f.col}18`, border: `1px solid ${f.col}28`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: f.col }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 700, color: "var(--text)", marginBottom: 8, fontSize: 17 }}>
                    {f.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75, maxWidth: 560 }}>
                    {f.desc}
                  </p>
                </div>
                <div style={{ fontSize: 22, flexShrink: 0, opacity: 0.15 }}>{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 14 }}>
            Ready to install?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 28, lineHeight: 1.65 }}>
            Takes under a minute. No account needed.
          </p>
          <a href={exeLink} className="ss-btn ss-btn-primary">
            Download for Windows
          </a>
        </div>
      </section>
    </div>
  );
}
