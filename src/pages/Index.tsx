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
  // Support simple A/B hero variants: ?variant=b for alternative copy
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams('');
  const variant = params.get('variant') || 'a';

  const hero = variant === 'b' ? {
    titleLine1: 'Is That Video Real?',
    titleLine2: 'Get an Instant On-Screen Check',
    sub: 'A lightweight app that flags likely deepfakes while you watch — private, local, and easy to use.',
    cta: 'Download — Free'
  } : {
    titleLine1: 'Spot Deepfakes Instantly —',
    titleLine2: ' Right on Your Screen.',
    sub: 'Get an immediate alert when a video looks manipulated, so you can act before it spreads. No uploads, no extra steps — just protection while you watch.',
    cta: 'Download — Free'
  };

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
              {hero.titleLine1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{hero.titleLine2}</span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">{hero.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={exeLink}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-zinc-50 px-8 font-semibold text-zinc-950 shadow transition-colors hover:bg-zinc-200"
              >
                <Download className="h-4 w-4" />
                {hero.cta}
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
          <div className="relative z-10 w-full mt-12 lg:mt-0">
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

                {/* The ScreenSentinel Overlay (Responsive Mobile Sizing) */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 w-[130px] md:w-44 lg:w-52 bg-zinc-950/90 backdrop-blur-md border border-zinc-700 rounded-lg p-2 md:p-3 shadow-xl">
                  
                  <div className="flex items-center justify-between mb-1.5 md:mb-2">
                    <span className="text-[8px] md:text-[10px] font-semibold text-zinc-400 tracking-wider">
                      SCREENSENTINEL
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>

                  <div className="flex items-center gap-2 md:gap-2.5 mb-2 md:mb-2.5">
                    <div className="p-1 md:p-1.5 bg-emerald-500/20 rounded-md border border-emerald-500/30 shrink-0">
                      <ShieldCheck className="h-3 w-3 md:h-4 md:w-4 text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-emerald-400 font-bold text-[10px] md:text-sm leading-none whitespace-nowrap">
                        ✓ REAL
                      </h4>
                      <p className="text-[7px] md:text-[9px] text-zinc-500 mt-0.5 whitespace-nowrap">
                        Status: Stable
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-zinc-800 rounded-full h-1">
                    <div className="bg-emerald-500 h-1 rounded-full w-[94%]"></div>
                  </div>

                  <p className="text-[7px] md:text-[9px] text-zinc-400 mt-1.5 md:mt-2 leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-none">
                    No manipulation detected in current frame window.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 4. FAQ & CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-zinc-50">Quick FAQ</h2>
            <p className="text-zinc-400 mt-2">Short answers to the most common questions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
              <h4 className="text-zinc-100 font-semibold mb-2">Do you upload videos?</h4>
              <p className="text-zinc-400 text-sm">No — all analysis happens on your PC by default. We do not send your videos to the cloud.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
              <h4 className="text-zinc-100 font-semibold mb-2">Will it use my webcam?</h4>
              <p className="text-zinc-400 text-sm">No. ScreenSentinel only looks at the pixels of videos playing on your screen.</p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
              <h4 className="text-zinc-100 font-semibold mb-2">What if the alert is wrong?</h4>
              <p className="text-zinc-400 text-sm">Click the alert to report it. This helps us improve the detector and reduces future false positives.</p>
            </div>
          </div>

          <div className="text-center">
            <a href={exeLink} className="inline-flex items-center gap-3 bg-emerald-500 text-zinc-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-emerald-400">
              <Download className="w-4 h-4" /> Download — Free
            </a>
            <a href="/technology" className="ml-4 inline-flex items-center gap-2 border border-zinc-800 text-zinc-300 px-5 py-3 rounded-md hover:bg-zinc-900">Learn how it works</a>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-20 bg-zinc-950/50 border-b border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-50 mb-4">How it works</h2>
            <p className="text-zinc-400">ScreenSentinel quietly checks the video on your screen and warns you if something looks manipulated — all on your device, with no uploads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -z-10 -translate-y-1/2"></div>
            {[
              { icon: <Monitor className="h-6 w-6 text-emerald-500 mb-3" />, title: "Instant checks", text: "Detects likely fakes in seconds while you watch." },
              { icon: <Eye className="h-6 w-6 text-emerald-500 mb-3" />, title: "No camera access", text: "Only analyzes the video on your screen — it never uses your webcam." },
              { icon: <Cpu className="h-6 w-6 text-emerald-500 mb-3" />, title: "Local and private", text: "All analysis runs on your PC; nothing is uploaded." },
              { icon: <Layers className="h-6 w-6 text-emerald-500 mb-3" />, title: "Stable alerts", text: "We check a short frame window so alerts stay steady and useful." },
              { icon: <AlertTriangle className="h-6 w-6 text-emerald-500 mb-3" />, title: "Clear guidance", text: "When alerted, get a simple explanation and next steps." },
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
              <h2 className="text-3xl font-bold text-zinc-50 mb-4">The Future of Everyday Security.</h2>
              <p className="text-zinc-400 mb-6">
                ScreenSentinel is just the beginning. We're actively building the next generation of internet safety tools to protect everyday users from AI manipulation and online scams.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-sm"><strong>Optimized Performance:</strong> Running seamlessly in the background with zero impact on your computer's speed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-sm"><strong>Enhanced Detection:</strong> Continuously improving our core technology to catch even the newest forms of AI deception.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 text-sm"><strong>Wider Compatibility:</strong> Ensuring smooth protection directly across all your devices and online platforms.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-zinc-100 font-semibold mb-4 border-b border-zinc-800 pb-2">Installation Guide</h3>
              <div className="space-y-4 text-sm text-zinc-400">
                <p><strong>Standard Installer:</strong> The setup file is available to download and install today.</p>
                <div className="bg-zinc-950 p-4 rounded-md border border-zinc-800">
                  <p className="text-amber-500 font-semibold mb-1">Windows SmartScreen</p>
                  <p className="text-xs">Early builds are self-published and may show an "Unknown publisher" warning. Click "More info" then "Run anyway" to install, or wait for a signed build.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}