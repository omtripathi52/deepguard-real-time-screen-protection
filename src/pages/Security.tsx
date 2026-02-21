import { ShieldAlert, HardDrive, Lock, AlertTriangle, FileKey } from "lucide-react";

export default function Security() {
  return (
    <div className="flex flex-col w-full py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="mb-16 text-center">
          <ShieldAlert className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">Security Center</h1>
          <p className="text-lg text-zinc-400">Total transparency on how ScreenSentinel protects your machine.</p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Zero Data Egress */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                <HardDrive className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100">The Offline Promise</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-400 space-y-4">
              <p>ScreenSentinel is designed from the ground up to be a <strong>100% offline utility</strong>. We believe relying on cloud APIs to analyze your live video feeds is a massive privacy violation.</p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-300">
                <li><strong>No Cloud Uploads:</strong> Video frames are analyzed in your computer's temporary memory (RAM) and immediately discarded.</li>
                <li><strong>Local Models:</strong> All AI models are bundled directly within the installation folder.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Windows SmartScreen */}
          <section className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100">Windows SmartScreen Notice</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-400 space-y-4">
              <p>As an early-stage startup, ScreenSentinel Version 1 is currently self-published. Because of this, when you run our installer, <strong>Windows SmartScreen may display an "Unknown Publisher" warning.</strong></p>
              <p>This is a standard Windows security feature for new software that has not yet purchased an EV (Extended Validation) Code Signing Certificate. We are actively working on acquiring this certification.</p>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mt-6">
                <h3 className="text-zinc-200 font-medium mb-2">How to install safely:</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Run the downloaded <code>ScreenSentinel_Setup.exe</code></li>
                  <li>If Windows displays a blue "Windows protected your PC" screen, click <strong>"More info"</strong>.</li>
                  <li>Click the <strong>"Run anyway"</strong> button that appears.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 3: Security Signatures */}
          <section id="signatures" className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                <FileKey className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100">Cryptographic Signatures</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-400">
              <p>If you are downloading ScreenSentinel in a strict IT environment, you can verify the integrity of the downloaded file against our official SHA-256 hash. This guarantees the file has not been tampered with.</p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-zinc-950 p-4 rounded-md border border-zinc-800">
                  <p className="text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">ScreenSentinel_Setup_v1.0.0.exe</p>
                  <code className="text-emerald-400 text-sm break-all">
                    {/* Placeholder Hash - You can update this with your actual v1.0.0 hash later if you want */}
                    Awaiting generation for current release...
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Threat Model */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Lock className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold text-zinc-100">Current Limitations (V1)</h2>
            </div>
            <div className="prose prose-invert max-w-none text-zinc-400">
              <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-300 text-sm">
                <li><strong>Visual Only:</strong> V1 does not currently analyze audio for AI voice-cloning.</li>
                <li><strong>CPU Usage:</strong> Processing live video requires significant CPU resources. You may notice increased fan speeds while the engine is active.</li>
                <li><strong>False Positives:</strong> Extreme lighting conditions or low-resolution webcams may occasionally trigger "Uncertain" alerts.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}