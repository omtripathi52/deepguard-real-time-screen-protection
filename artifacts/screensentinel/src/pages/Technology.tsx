import { Layers, Cpu, Zap, Download } from "lucide-react";

export default function Technology() {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <Layers className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">How ScreenSentinel works</h1>
          <p className="text-lg text-zinc-400">A short, plain-language explanation of what the app does and why it keeps your videos private.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <Cpu className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Runs locally and safely</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ScreenSentinel runs on your PC in an isolated mode so it doesn't access your webcam or send video anywhere. The app analyzes short, temporary image samples and discards them immediately.
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <Zap className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Stable, sensible alerts</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Instead of warning on every single frame, the app checks a short group of frames and only shows an alert when the signal is steady. This keeps notifications useful and reduces flicker.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-100 mb-6">Install options</h2>
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="p-8">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Windows Installer (.exe)</h3>
              <p className="text-zinc-400 text-sm mb-6">Recommended for most users: installs the app, places shortcuts, and keeps files organized.</p>
              <a href="https://github.com/omtripathi52/ScreenSentinel/releases/latest" className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                <Download className="h-4 w-4 mr-2" /> Download Installer
              </a>
            </div>
            <div className="p-8 opacity-60">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">Portable Archive (.zip)</h3>
              <p className="text-zinc-400 text-sm mb-6">For advanced users: a self-contained folder with no installer. Coming in a future update.</p>
              <span className="inline-flex items-center text-sm font-medium text-zinc-500 cursor-not-allowed">
                <Download className="h-4 w-4 mr-2" /> Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}