import {
  ShieldCheck,
  Download,
  Monitor,
  Cpu,
  Eye,
  ArrowRight,
  AlertTriangle,
  Layers,
  Mic,
  Video,
  PhoneOff
} from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";

export default function Index() {
  const { data: release, isLoading } = useGitHubRelease();
  
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const versionText = isLoading ? "Checking..." : (release?.version || "v1.0.0");

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-zinc-900">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col space-y-8 z-10">
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Version 1.0 is Live
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-50 leading-tight">
              Real-Time Deepfake Detection{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                Overlay for Windows.
              </span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              Visual, privacy-first detection that runs entirely on your local machine.
              Get instant, always-on alerts for suspected deepfakes right on your
              screen—no cloud upload required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={exeLink}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-zinc-50 px-8 font-semibold text-zinc-950 shadow transition-colors hover:bg-zinc-200"
              >
                <Download className="h-4 w-4" />
                Download Installer
              </a>
              {/* DISABLED ZIP BUTTON */}
              <button 
                disabled
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-8 font-semibold text-zinc-600 cursor-not-allowed"
              >
                Portable (.zip) - Coming Soon
              </button>
            </div>
            
            <p className="text-xs text-zinc-500 font-mono">
              Latest Build: <span className="text-zinc-300">{versionText}</span> | Requires: Windows 10/11 (64-bit)
            </p>
          </div>

          {/* Right Column: Realistic Overlay Mockup */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl overflow-hidden">
              
              <div className="aspect-video bg-zinc-950 rounded-lg relative border border-zinc-800 overflow-hidden">
                {/* Realistic Background Image (Face-Centered) */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=800&h=450&q=80" 
                  alt="Video Call Mockup" 
                  className="w-full h-full object-cover object-center opacity-90"
                />
                
                {/* Fake Meeting Controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <div className="bg-zinc-900/80 p-2.5 rounded-full border border-zinc-700/50 backdrop-blur-md">
                    <Mic className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="bg-zinc-900/80 p-2.5 rounded-full border border-zinc-700/50 backdrop-blur-md">
                    <Video className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div className="bg-red-500/90 p-2.5 rounded-full border border-red-600 backdrop-blur-md">
                    <PhoneOff className="w-4 h-4 text-zinc-50" />
                  </div>
                </div>

                {/* The ScreenSentinel Overlay (Moved to Left & Scaled Down) */}
                <div className="absolute top-4 left-4 w-52 bg-zinc-950/90 backdrop-blur-md border border-zinc-700 rounded-lg p-3 shadow-xl">
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold text-zinc-400 tracking-wider">
                      SCREENSENTINEL
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 bg-emerald-500/20 rounded-md border border-emerald-500/30">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold text-sm leading-none">
                        ✓ REAL
                      </h4>
                      <p className="text-[9px] text-zinc-500 mt-0.5">
                        Status: Stable
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-zinc-800 rounded-full h-1">
                    <div className="bg-emerald-500 h-1 rounded-full w-[94%]"></div>
                  </div>

                  <p className="text-[9px] text-zinc-400 mt-2 leading-relaxed">
                    No manipulation detected in current frame window.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-zinc-950/50 border-b border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-50 mb-4">How it works behind the scenes.</h2>
            <p className="text-zinc-400">ScreenSentinel is not a cloud API. It is a local engine that processes frames entirely on your hardware to guarantee absolute privacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -z-10 -translate-y-1/2"></div>
            {[
              { icon: <Monitor className="h-6 w-6 text-emerald-500 mb-3" />, title: "Secure Capture", text: "Reads your display securely without invasive webcam permissions." },
              { icon: <Eye className="h-6 w-6 text-emerald-500 mb-3" />, title: "Smart Tracking", text: "Isolates faces during live streams while filtering noise." },
              { icon: <Cpu className="h-6 w-6 text-emerald-500 mb-3" />, title: "Offline AI Analysis", text: "Neural network scans facial textures locally on your CPU." },
              { icon: <Layers className="h-6 w-6 text-emerald-500 mb-3" />, title: "Signal Smoothing", text: "Analyzes consecutive frames to prevent false alarms." },
              { icon: <AlertTriangle className="h-6 w-6 text-emerald-500 mb-3" />, title: "Visual Overlay", text: "Projects a clean, color-coded trust score on your screen." },
            ].map((step, index) => (
              <div key={index} className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center relative">
                <div className="h-12 w-12 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center mb-4 text-zinc-300 z-10">{index + 1}</div>
                {step.icon}
                <h3 className="font-semibold text-zinc-100 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ROADMAP */}
      <section className="py-20 border-b border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-zinc-50 mb-4">Building a Serious Security Startup.</h2>
              <p className="text-zinc-400 mb-6">
                ScreenSentinel V1 is a powerful proof-of-concept for offline deepfake defense. But we are just getting started. We are actively engineering V2 to solve current CPU loads and increase forensic accuracy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-sm"><strong>Performance Modes:</strong> Upgrading from MTCNN to BlazeFace/MediaPipe to reduce thermal impact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-sm"><strong>Model Upgrades:</strong> Transitioning from MesoNet to an EfficientNet-based classifier for higher accuracy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-sm"><strong>Hardware Acceleration:</strong> Adding optional local GPU support for seamless high-FPS analysis.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-zinc-100 font-semibold mb-4 border-b border-zinc-800 pb-2">Installation Guide & UAC</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <p><strong>Installer vs. Portable:</strong> The <code>Installer (.exe)</code> is available now. The isolated <code>Portable (.zip)</code> version is currently in development and will be released in an upcoming patch.</p>
                <div className="bg-zinc-950 p-4 rounded-md border border-zinc-800">
                  <p className="text-amber-500 font-semibold mb-1">Windows SmartScreen Note</p>
                  <p className="text-xs">As an early-stage startup, our installer is currently self-published. Windows may show an "Unknown Publisher" warning. A CA code-signing certificate is planned for our upcoming V2 release.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}