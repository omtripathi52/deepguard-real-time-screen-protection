export default function Terms() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 120px" }}>
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.03em" }}>
        Terms of Service
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: 48, fontSize: 14 }}>Last updated: February 2026</p>

      <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>
        By downloading and using ScreenSentinel, you agree to these terms. Please read them carefully.
      </p>

      <Section title="1. Acceptance & License">
        <p>ScreenSentinel grants you a personal, non-exclusive, non-transferable license to use the software for personal or internal business purposes. You may not modify, distribute, sell, or reverse-engineer the software binaries or proprietary UI components.</p>
      </Section>

      <Section title="2. Accuracy Disclaimer">
        <div style={{
          padding: "16px 20px",
          borderRadius: 12,
          border: "1px solid var(--border-strong)",
          background: "var(--bg2)",
          marginBottom: 8,
        }}>
          <p style={{ color: "var(--text)", margin: 0 }}>
            ScreenSentinel uses machine learning models to detect potential deepfakes. <strong>No detection system is perfect.</strong> ScreenSentinel provides confidence levels, not absolute determinations. Do not rely solely on ScreenSentinel for critical financial, legal, or security decisions. Always apply your own judgment and seek additional verification when needed.
          </p>
        </div>
      </Section>

      <Section title="3. Disclaimer of Warranties">
        <p>ScreenSentinel is provided "as is" without any warranties, express or implied. We do not warrant that:</p>
        <ul>
          <li>The software will be uninterrupted or error-free</li>
          <li>Detection results will be 100% accurate</li>
          <li>The software will be compatible with all hardware configurations</li>
        </ul>
      </Section>

      <Section title="4. Limitation of Liability">
        <p>In no event shall ScreenSentinel or its creators be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the software, including damages from incorrect detection results, false positives, or false negatives.</p>
      </Section>

      <Section title="5. Termination">
        <p>You may stop using ScreenSentinel at any time by uninstalling the software. We reserve the right to terminate or suspend access to ScreenSentinel at our discretion.</p>
      </Section>

      <Section title="6. Contact">
        <p>
          Questions about these terms? Contact us at{" "}
          <a href="mailto:hello@screensentinel.me" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            hello@screensentinel.me
          </a>
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <div style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75 }}>
        {children}
      </div>
    </div>
  );
}
