export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold text-zinc-50 mb-8">Privacy Policy</h1>
      <p className="text-zinc-400 mb-8">Last updated: February 2026</p>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8 not-prose">
        <h2 className="text-xl font-bold mb-2 text-emerald-400">The Short Version</h2>
        <p className="text-emerald-100/80">
          ScreenSentinel runs on your device and is designed to keep analysis local. By default we do not upload video, detection results, or personal data to any server. The only network activity the app may perform is an optional, minimal update check.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Scope</h2>
      <p className="text-zinc-400 leading-relaxed">This policy covers the ScreenSentinel desktop application and the promotional website (screensentinel.me).</p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Data We Collect (App)</h2>
      <p className="text-zinc-400 leading-relaxed"><strong>None by default.</strong> The app performs all analysis locally and does not collect, store, transmit, or process your data. This includes:</p>
      <ul className="text-zinc-400">
        <li>Screen content or screenshots</li>
        <li>Analysis results or detection history</li>
        <li>Usage statistics or analytics</li>
        <li>Personal information or device identifiers</li>
      </ul>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Update Checks (optional)</h2>
      <p className="text-zinc-400 leading-relaxed">If enabled, ScreenSentinel may request a small JSON manifest (for example, <code>version.json</code>) from our public releases endpoint to check for updates. These requests contain only standard HTTP headers and do not include screen content, analysis results, or personal identifiers. You can opt out of automatic update checks in the app or block network access for the application.</p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Website & Hosting Logs</h2>
      <p className="text-zinc-400 leading-relaxed">When you visit screensentinel.me, our hosting provider (Vercel) may temporarily process standard server logs (IP address, user agent, referrer) for hosting, security, and operational purposes. We do not use this information to track individual users across the web.</p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Third-Party Services</h2>
      <p className="text-zinc-400 leading-relaxed">We rely on third-party services (e.g., GitHub Releases, Vercel) to deliver updates and host the website. Their handling of logs and metadata is governed by their privacy policies.</p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Security</h2>
      <p className="text-zinc-400 leading-relaxed">We follow industry best practices to protect operational data. The app processes video frames in memory and does not persist them to disk by default.</p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Changes to this Policy</h2>
      <p className="text-zinc-400 leading-relaxed">We may update this policy occasionally. Any changes will be posted here with a revised “Last updated” date.</p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">Contact Us</h2>
      <p className="text-zinc-400 leading-relaxed">If you have questions, contact us at <a href="mailto:screensentinel.ai@gmail.com" className="text-emerald-400 hover:text-emerald-300">screensentinel.ai@gmail.com</a>.</p>
    </div>
  );
}