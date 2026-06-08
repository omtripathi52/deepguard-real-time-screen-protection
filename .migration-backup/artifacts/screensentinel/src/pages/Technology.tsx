import { Layers, Cpu, Zap, Download } from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";

export default function Technology() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";

  return (
    <div className="ss-technology-page" style={{ background: "var(--bg)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px 120px" }}>

        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "var(--accent)" }}>
            <Layers size={28} strokeWidth={1.75} />
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.03em" }}>
            How ScreenSentinel works
          </h1>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
            A short, plain-language explanation of what the app does and why it keeps your videos private.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }} className="ss-two-col">
          <div style={{ background: "var(--bg2)", border: "1px solid var(--ss-line)", padding: "28px 26px", borderRadius: 18 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16, lineHeight: 0 }}>
              <Cpu size={20} strokeWidth={1.75} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.02em" }}>Runs locally and safely</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75 }}>
              ScreenSentinel runs on your PC in an isolated mode so it doesn't access your webcam or send video anywhere. The app analyzes short, temporary image samples and discards them immediately.
            </p>
          </div>
          <div style={{ background: "var(--bg2)", border: "1px solid var(--ss-line)", padding: "28px 26px", borderRadius: 18 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16, lineHeight: 0 }}>
              <Zap size={20} strokeWidth={1.75} />
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.02em" }}>Stable, sensible alerts</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75 }}>
              Instead of warning on every single frame, the app checks a short group of frames and only shows an alert when the signal is steady. This keeps notifications useful and reduces flicker.
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 16, letterSpacing: "-0.02em" }}>
          Install options
        </h2>
        <div style={{ background: "var(--bg2)", border: "1px solid var(--ss-line)", borderRadius: 18, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="ss-two-col">
            <div style={{ padding: "28px 28px", borderRight: "1px solid var(--ss-line)" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Windows Installer (.exe)</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                Recommended for most users: installs the app, places shortcuts, and keeps files organized.
              </p>
              <a
                href={exeLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}
              >
                <Download size={15} /> Download Installer
              </a>
            </div>
            <div style={{ padding: "28px 28px", opacity: 0.5 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Portable Archive (.zip)</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
                For advanced users: a self-contained folder with no installer. Coming in a future update.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "var(--text-subtle)", cursor: "not-allowed" }}>
                <Download size={15} /> Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
