import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileCheck, Server, KeyRound, ChevronDown } from "lucide-react";
import { Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const trustImage = "https://raw.createusercontent.com/39795801-ca82-403e-8b96-0ae8e8e28115/";

const features = [
  {
    title: "Your screen never leaves your computer",
    desc: "The checking happens on your device. We do not have servers that receive your video.",
  },
  {
    title: "Nothing is saved or stored",
    desc: "Once a video frame is checked, the information is immediately discarded.",
  },
  {
    title: "We do not track how often you use it",
    desc: "No usage tracking, no behavioral analytics, no hidden telemetry.",
  },
  {
    title: "Independently checked for safety",
    desc: "External experts review our software each year and we publish the results.",
  },
];

const summary = [
  {
    heading: "What we do collect",
    body: "Your email address only if you contact us, and the fact that your license is valid.",
  },
  {
    heading: "What we never collect",
    body: "Anything on your screen. Your browsing. The apps you use. Your files. Your location.",
  },
  {
    heading: "How your data is handled",
    body: "The tiny amount of information we do hold is protected using bank-grade security practices.",
  },
];

const certs = ["SOC 2 Certified", "GDPR Compliant", "ISO 27001", "Zero Tracking"];

export default function Trust() {
  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-two-col" style={{ alignItems: "center", marginBottom: 80 }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 22 }}>
                Privacy and Trust
              </p>
              <h1 style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--text)", marginBottom: 20 }}>
                Your privacy is not a small print issue.
              </h1>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 32 }}>
                We built ScreenSentinel so it is physically impossible for us to see what you are watching. That is a design decision, not a policy line.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {certs.map((c) => (
                  <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 999, background: "var(--bg3)", border: "1px solid var(--border)", fontSize: 12, fontWeight: 600, color: "var(--text-muted)" }}>
                    <Lock size={11} color="var(--accent)" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)" }}>
                <img src={trustImage} alt="Trust and privacy" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", opacity: 0.9 }} />
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg) 0%, transparent 50%)", borderRadius: 18 }} />
              <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "14px 22px", display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", backdropFilter: "blur(12px)" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent)" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                  We cannot see your screen by design
                </span>
              </div>
            </div>
          </div>

          <div className="ss-trust-grid" style={{ marginBottom: 64 }}>
            {features.map((f) => (
              <div key={f.title} className="ss-card" style={{ padding: "32px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 50, height: 50, borderRadius: 13, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent)" }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "var(--text)", marginBottom: 10, fontSize: 16, lineHeight: 1.3 }}>
                    {f.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 20, padding: "48px 44px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", textAlign: "center", marginBottom: 36 }}>
              Our privacy promise in plain English
            </h2>
            <div className="ss-summary-grid" style={{ marginBottom: 36 }}>
              {summary.map((s) => (
                <div key={s.heading}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
                    {s.heading}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28, textAlign: "center" }}>
              <Link to="/privacy" style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", textDecoration: "none" }}>
                Read our full privacy policy ->
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 14 }}>
            Still have questions about privacy?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 28, lineHeight: 1.65 }}>
            We are happy to answer any question, no matter how basic it sounds.
          </p>
          <Link to="/contact" className="ss-btn ss-btn-primary">
            Ask us anything <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
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
