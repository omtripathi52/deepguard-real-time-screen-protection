import { ArrowRight, Building2, FileSearch, User, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCases } from "@/data/content";

const industries = [
  {
    title: "For journalists and newsrooms",
    Icon: FileSearch,
    color: "#f59e0b",
    items: [
      "Check if a video clip is real before you publish it",
      "Verify footage during live broadcasts automatically",
      "Flag suspicious videos before they reach your desk",
      "Works on YouTube, Twitter, email links, and more",
    ],
  },
  {
    title: "For businesses and finance",
    Icon: Building2,
    color: "#10b981",
    items: [
      "Spot criminals who fake your CEO's face on a video call",
      "Protect board meetings and sensitive conversations",
      "Works on Zoom, Teams, Google Meet, and more",
      "Alert your whole team the moment something looks wrong",
    ],
  },
  {
    title: "For creators and public figures",
    Icon: User,
    color: "#8b5cf6",
    items: [
      "Find out if someone made a fake video using your face",
      "Get alerted when a deepfake of you appears online",
      "Protect your name across social media platforms",
      "No technical knowledge needed - it just runs",
    ],
  },
];

export default function Solutions() {
  return (
    <div className="ss-mobile-page ss-solutions-page" style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ maxWidth: 680, marginBottom: 72 }}>
            <p className="ss-pill" style={{ marginBottom: 20 }}>
              Who it helps
            </p>
            <h1 style={{ fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.07, marginBottom: 20 }}>
              Fake videos do not just affect famous people.
            </h1>
            <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 560 }}>
              Anyone who watches video online can be tricked. Here is who ScreenSentinel is protecting right now.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 80, background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-row1" style={{ marginBottom: 14 }}>
            <div style={{ borderRadius: 18, background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.18)", overflow: "hidden", padding: "44px 44px 36px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                <span style={{ fontSize: 48 }}>Social</span>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--ss-line)", padding: "4px 12px", borderRadius: 999 }}>
                  {useCases[0].stat}
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                {useCases[0].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6", marginBottom: 16 }}>
                Stop sharing misinformation before it spreads.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, flex: 1 }}>
                {useCases[0].description}
              </p>
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(59,130,246,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                  {["Catches fakes instantly", "Works on any site", "No setup needed"].map((t) => (
                    <span key={t} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                  Get started <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 18, background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.2)", overflow: "hidden", padding: "44px 36px 36px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, marginBottom: 28, display: "block" }}>Identity</span>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                {useCases[1].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#8b5cf6", marginBottom: 14 }}>
                Your face. Your rules.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75, flex: 1 }}>
                {useCases[1].description}
              </p>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--ss-line)", padding: "4px 10px", borderRadius: 999 }}>
                  {useCases[1].stat}
                </span>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: "#8b5cf6", textDecoration: "none", display: "flex", alignItems: "center", gap: 5, marginLeft: "auto" }}>
                  Get started <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          <div className="ss-row2">
            <div style={{ borderRadius: 18, background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)", overflow: "hidden", padding: "44px 36px 36px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 44, marginBottom: 28, display: "block" }}>News</span>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                {useCases[2].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b", marginBottom: 14 }}>
                Publish with confidence.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75, flex: 1 }}>
                {useCases[2].description}
              </p>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--ss-line)", padding: "4px 10px", borderRadius: 999 }}>
                  {useCases[2].stat}
                </span>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b", textDecoration: "none", display: "flex", alignItems: "center", gap: 5, marginLeft: "auto" }}>
                  Get started <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 18, background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)", overflow: "hidden", padding: "44px 44px 36px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                <span style={{ fontSize: 48 }}>Enterprise</span>
                <span style={{ fontSize: 11, color: "var(--text-subtle)", border: "1px solid var(--ss-line)", padding: "4px 12px", borderRadius: 999 }}>
                  {useCases[3].stat}
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                {useCases[3].title}
              </h2>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#10b981", marginBottom: 16 }}>
                Scammers now look and sound exactly like your boss.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.75, flex: 1 }}>
                {useCases[3].description}
              </p>
              <div style={{ marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(16,185,129,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                  {["Works on Zoom and Teams", "Flags fakes in real time", "No IT setup needed"].map((t) => (
                    <span key={t} style={{ fontSize: 12, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" style={{ fontSize: 13, fontWeight: 700, color: "#10b981", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
                  Talk to us <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, gap: 24, flexWrap: "wrap" }}>
            <div>
              <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 10 }}>
                Made to fit how you already work
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 460, lineHeight: 1.65 }}>
                Different jobs face different risks. Here is what ScreenSentinel does for your specific situation.
              </p>
            </div>
            <Link to="/contact" className="ss-btn ss-btn-ghost" style={{ flexShrink: 0 }}>
              Talk to us <ArrowRight size={14} />
            </Link>
          </div>

          <div className="ss-ind-grid">
            {industries.map(({ title, Icon, color, items }) => (
              <div key={title} style={{ background: "var(--bg)", border: "1px solid var(--ss-line)", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ height: 3, background: color, width: "100%" }} />
                <div style={{ padding: "28px 26px 32px" }}>
                  <div style={{ width: 42, height: 42, background: `${color}18`, border: `1px solid ${color}28`, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <Icon size={19} color={color} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: "var(--text)", marginBottom: 22, fontSize: 16 }}>{title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 12 }}>
              Need to protect a whole team?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 420, margin: "0 auto", lineHeight: 1.65 }}>
              We work directly with businesses, charities, and public bodies.
            </p>
          </div>
          <div className="ss-ent-grid">
            <div style={{ borderRadius: 18, border: "1px solid var(--ss-line)", background: "var(--bg2)", overflow: "hidden" }}>
              <div style={{ height: 3, background: "#10b981" }} />
              <div style={{ padding: "40px 36px" }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>Enterprise</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 14, lineHeight: 1.2 }}>
                  For businesses and large teams
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
                  Protect your whole office from one dashboard. Manage every seat, see who is covered, and get priority support.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 32 }}>
                  {["Central management for every seat", "Priority support with a named contact", "Volume pricing from 10 seats upward"].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <CheckCircle2 size={14} color="#10b981" />
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{ display: "inline-block", padding: "13px 28px", background: "var(--text)", color: "var(--bg)", borderRadius: 999, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                  Talk to our team
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 18, border: "1px solid rgba(139,92,246,0.25)", background: "rgba(139,92,246,0.04)", overflow: "hidden" }}>
              <div style={{ height: 3, background: "#8b5cf6" }} />
              <div style={{ padding: "40px 36px" }}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>Public</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 14, lineHeight: 1.2 }}>
                  For governments and non-profits
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.8, marginBottom: 28 }}>
                  Truth matters most in public life. We offer reduced pricing for organizations working to protect the people they serve.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 32 }}>
                  {["Discounted pricing for registered non-profits", "Supports election monitoring and fact-checking", "Works offline - nothing leaves your network"].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <CheckCircle2 size={14} color="#8b5cf6" />
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="ss-btn ss-btn-primary" style={{ display: "inline-flex" }}>
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
