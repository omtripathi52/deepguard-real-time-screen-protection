export default function Privacy() {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 120px" }}>
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.03em" }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: 48, fontSize: 14 }}>Last updated: February 2026</p>

      <Section title="Overview">
        <p>ScreenSentinel runs entirely on your device. By default, we do not upload video frames, detection results, or personal data to any server. The only optional network activity is an update check.</p>
      </Section>

      <Section title="Scope">
        <p>This policy covers the ScreenSentinel desktop application and the promotional website at screensentinel.me.</p>
      </Section>

      <Section title="Data We Collect">
        <p><strong>None by default.</strong> The app performs all analysis locally and does not collect, store, transmit, or process your data. This includes:</p>
        <ul>
          <li>Screen content or video frames</li>
          <li>Detection results or analysis history</li>
          <li>Usage statistics or analytics</li>
          <li>Personal information or device identifiers</li>
        </ul>
      </Section>

      <Section title="Update Checks (Optional)">
        <p>If enabled, ScreenSentinel may request a small JSON manifest from our public releases endpoint to check for updates. These requests contain only standard HTTP headers — no screen content, detection results, or personal identifiers. You can disable this in the app settings or block network access for the application entirely.</p>
      </Section>

      <Section title="Website Hosting Logs">
        <p>When you visit screensentinel.me, our hosting provider (Vercel) may temporarily process standard server logs — IP address, user agent, referrer — for hosting and security purposes. We do not use this data to track individual users across the web.</p>
      </Section>

      <Section title="Third-Party Services">
        <p>We rely on GitHub Releases to deliver app updates and Vercel to host this website. Their handling of logs and metadata is governed by their own privacy policies.</p>
      </Section>

      <Section title="Security">
        <p>The app processes video frames in memory and does not write them to disk by default. We follow standard practices to protect any operational data we do hold.</p>
      </Section>

      <Section title="Changes to This Policy">
        <p>We may update this policy from time to time. Changes will be posted here with a revised "Last updated" date.</p>
      </Section>

      <Section title="Contact">
        <p>
          Questions? Email us at{" "}
          <a href="mailto:screensentinel.ai@gmail.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            screensentinel.ai@gmail.com
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
