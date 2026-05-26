import { Link } from "react-router-dom";
import { Download, ShieldCheck, Cpu, Eye, Zap, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";

const features = [
  { icon: Eye, title: "On-screen monitoring", desc: "Quietly watches the video playing on your screen — Zoom, YouTube, Teams, anything." },
  { icon: Cpu, title: "100% on-device", desc: "All analysis runs locally on your computer. Nothing is uploaded, ever." },
  { icon: Zap, title: "Real-time alerts", desc: "Spot fakes in seconds, not minutes. A small badge tells you what's real and what's not." },
  { icon: Lock, title: "Privacy by design", desc: "We don't collect, store, or transmit anything you see on your screen." },
  { icon: ShieldCheck, title: "Stable detection", desc: "We check a short frame window so alerts stay steady — no flicker, no false alarms." },
  { icon: CheckCircle2, title: "Lightweight", desc: "Runs in the background with barely any CPU. Built to be gentle on your machine." },
];

export default function Product() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  const version = release?.version || "v2.0.0";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="ss-container pt-20 pb-16 text-center">
        <span className="accent-chip mx-auto"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Version {version}</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          One small app. <span className="grad-text">Endless peace of mind.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          ScreenSentinel sits quietly on your computer and tells you the moment a video looks faked — wherever it's playing. No uploads, no fuss.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={exeLink} className="ss-btn ss-btn-primary px-7 h-12 text-[15px]">
            <Download size={16} /> Download — Free
          </a>
          <Link to="/technology" className="ss-btn ss-btn-ghost px-7 h-12 text-[15px]">
            See how it works <ArrowRight size={15} />
          </Link>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Windows 10 / 11 · 64-bit</p>
      </section>

      {/* Feature grid */}
      <section className="ss-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-[17px] font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="ss-container py-16">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Why ScreenSentinel is different</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Most tools ask you to upload a clip and wait. We watch what's already on your screen — and tell you right away.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-background p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Other tools</div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Upload required — your video leaves your computer</li>
                <li>Takes minutes to return a result</li>
                <li>Only works on files, not live calls</li>
                <li>Often needs a subscription</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6">
              <div className="text-xs uppercase tracking-wider text-primary mb-3">ScreenSentinel</div>
              <ul className="space-y-2.5 text-sm">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> Runs entirely on your device</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> Real-time — seconds, not minutes</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> Works on any video, anywhere</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> Free to download and use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ss-container py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to install?</h2>
        <p className="text-muted-foreground mb-7 max-w-xl mx-auto">Takes under a minute. No account needed.</p>
        <a href={exeLink} className="ss-btn ss-btn-primary px-7 h-12 text-[15px]">
          <Download size={16} /> Download for Windows
        </a>
      </section>
    </div>
  );
}
