export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold text-zinc-50 mb-8">Privacy Policy</h1>
      <p className="text-zinc-400 mb-8">Last Updated: February 2026</p>
      
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8 not-prose">
        <h2 className="text-xl font-bold mb-2 text-emerald-400">The Short Version</h2>
        <p className="text-emerald-100/80">
          ScreenSentinel is designed to keep analysis on your device. By default we do not send your video or detection results to any servers. A minimal, optional check for updates may contact our release endpoint.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">1. Data We Collect</h2>
      <p className="text-zinc-400 leading-relaxed">
        <strong>None.</strong> ScreenSentinel runs entirely offline on your local machine. We do not collect, store, transmit, or process any of your data. This explicitly includes:
      </p>
      <ul className="text-zinc-400">
        <li>Screen content or screenshots</li>
        <li>Analysis results or detection history</li>
        <li>Usage statistics or analytics</li>
        <li>Personal information of any kind</li>
        <li>Device information or identifiers</li>
      </ul>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">2. No Network Communication</h2>
      <p className="text-zinc-400 leading-relaxed">
        ScreenSentinel does not require an internet connection to function. It makes no network requests, sends no data to external servers, and has no backend infrastructure. Your privacy is guaranteed by design. The only exception is an optional, anonymous ping to our public GitHub repository exclusively to check the <code>version.json</code> manifest for software updates.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">3. Website Data</h2>
      <p className="text-zinc-400 leading-relaxed">
        When visiting our promotional website (screensentinel.me), standard web server logs (such as IP address and browser type) are temporarily processed for security and hosting purposes via our infrastructure providers (Vercel).
      </p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">4. Contact Us</h2>
      <p className="text-zinc-400 leading-relaxed">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:screensentinel.ai@gmail.com" className="text-emerald-400 hover:text-emerald-300">screensentinel.ai@gmail.com</a>.
      </p>
    </div>
  );
}