import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileCheck, Server, KeyRound, ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/content";

const principles = [
  { icon: Lock, title: "On-device only", desc: "Detection happens entirely on your computer. Your video data never travels to our servers — because it never has to." },
  { icon: Eye, title: "Zero screen recording", desc: "We analyse pixels in memory and discard them. Nothing is saved, captured, or stored — anywhere." },
  { icon: Server, title: "No tracking", desc: "We don't sell, share, or monetise behavioural data. We don't even collect it." },
  { icon: KeyRound, title: "Open about how it works", desc: "Our model architecture and detection pipeline are documented publicly. No hidden magic." },
  { icon: FileCheck, title: "Independent audits", desc: "Annual third-party security reviews. Reports available on request to enterprise customers." },
  { icon: Shield, title: "EU & UK GDPR-aligned", desc: "Designed from day one to meet the strictest privacy regulations in the world." },
];

export default function Trust() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-12 text-center">
        <span className="accent-chip mx-auto">Trust & Security</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Privacy isn't a feature. <span className="grad-text">It's the foundation.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          ScreenSentinel was built around one simple promise: what's on your screen stays on your screen.
        </p>
      </section>

      <section className="ss-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <p.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-[17px] font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="ss-container py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center">Frequently asked</h2>
        <p className="text-muted-foreground mb-10 text-center">Real questions, honest answers.</p>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-6 hover:bg-secondary/40 transition-colors"
              >
                <span className="text-[15px] font-semibold pr-4">{f.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="ss-container py-16">
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Security questions for your team?</h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            We're happy to share our security documentation, audit reports, and architecture details with prospective customers.
          </p>
          <Link to="/contact" className="ss-btn ss-btn-primary px-7 h-12 text-[15px]">
            Request security pack
          </Link>
        </div>
      </section>
    </div>
  );
}
