export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl prose prose-invert">
      <h1 className="text-4xl font-bold text-zinc-50 mb-8">Terms of Service</h1>
      <p className="text-zinc-400 mb-8">Last Updated: February 2026</p>

      <p className="text-zinc-400 leading-relaxed">
        By downloading and using ScreenSentinel, you agree to these terms. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">1. Acceptance & License</h2>
      <p className="text-zinc-400 leading-relaxed">
        ScreenSentinel grants you a personal, non-exclusive, non-transferable license to use the Software for personal or internal business purposes. You may not modify, distribute, sell, or reverse engineer the software binaries or proprietary UI overlays.
      </p>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 my-8 not-prose">
        <h2 className="text-xl font-bold mb-2 text-amber-500">2. Accuracy Disclaimer</h2>
        <p className="text-amber-100/80">
          ScreenSentinel uses machine learning models to detect potential deepfakes. <strong>No detection system is perfect.</strong> ScreenSentinel provides confidence levels, not absolute determinations. You should not rely solely on ScreenSentinel for critical financial, legal, or security decisions. Always use your own judgment and seek additional verification when needed.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">3. Disclaimer of Warranties</h2>
      <p className="text-zinc-400 leading-relaxed">
        ScreenSentinel is provided "as is" without any warranties, express or implied. We do not warrant that:
      </p>
      <ul className="text-zinc-400">
        <li>The software will be uninterrupted or error-free</li>
        <li>The detection results will be 100% accurate</li>
        <li>The software will be compatible with all hardware configurations</li>
      </ul>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">4. Limitation of Liability</h2>
      <p className="text-zinc-400 leading-relaxed">
        In no event shall ScreenSentinel or its creators be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the software, including but not limited to damages from incorrect detection results, false positives, or false negatives.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">5. Termination</h2>
      <p className="text-zinc-400 leading-relaxed">
        You may stop using ScreenSentinel at any time by uninstalling the software. We reserve the right to terminate or suspend access to ScreenSentinel at our discretion.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">6. Contact</h2>
      <p className="text-zinc-400 leading-relaxed">
        If you have any questions about these Terms of Use, please contact us at <a href="mailto:screensentinel.ai@gmail.com" className="text-emerald-400 hover:text-emerald-300">screensentinel.ai@gmail.com</a>.
      </p>
    </div>
  );
}