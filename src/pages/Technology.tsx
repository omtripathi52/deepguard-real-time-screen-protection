import { Layers, Cpu, Zap, Download } from "lucide-react";

export default function Technology() {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <Layers className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">Under the Hood</h1>
          <p className="text-lg text-zinc-400">The engineering behind our local, privacy-first deepfake defense engine.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <Cpu className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Hardware Isolation</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ScreenSentinel utilizes an embedded Python architecture. This means the application runs entirely in its own sandboxed environment on your PC. It does not hook into your sensitive webcam drivers or require virtual camera routing.
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
            <Zap className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-100 mb-3">Temporal Aggregation</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              To prevent the overlay from flickering constantly, our engine uses a 30-frame exponential sliding window. It tracks the AI confidence score over time and only updates your screen when a reliable, stable threat is detected.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-zinc-100 mb-6">Deployment Options</h2>
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            <div className="p-8">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">1. Windows Installer (.exe)</h3>
              <p className="text-zinc-400 text-sm mb-6">Best for most users. Automatically unpacks the models, places files in your Program Files directory, and creates a convenient Start Menu shortcut.</p>
              <a href="https://github.com/omtripathi52/ScreenSentinel/releases/latest" className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                <Download className="h-4 w-4 mr-2" /> Download Installer
              </a>
            </div>
            <div className="p-8 opacity-50">
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">2. Portable Archive (.zip)</h3>
              <p className="text-zinc-400 text-sm mb-6">Best for power users. A standalone folder that leaves zero registry footprint. Currently in development for a future update.</p>
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