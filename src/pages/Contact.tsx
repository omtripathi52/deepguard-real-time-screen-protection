import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, MessageSquare, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const contacts = [
  { Icon: Mail, label: "General enquiries", value: "hello@screensentinel.com" },
  { Icon: MessageSquare, label: "Enterprise sales", value: "sales@screensentinel.com" },
  { Icon: MapPin, label: "Headquarters", value: "Shoreditch, London, UK" },
  { Icon: Clock, label: "Response time", value: "Within 1 business day" },
];

const subjects = ["Enterprise inquiry", "Product support", "Media and press", "Partnerships", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const set = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "11px 14px",
    fontSize: 14,
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.15s",
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:screensentinel.ai@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-two-col">
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Contact
              </p>
              <h1 style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--text)", marginBottom: 18 }}>
                Let us talk about digital truth.
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
                Based in London, our team is dedicated to building the future of media authenticity. Reach out for enterprise inquiries, support, or partnership opportunities.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {contacts.map(({ Icon, label, value }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={17} color="var(--accent)" />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "var(--text-subtle)", marginBottom: 3, fontWeight: 500 }}>{label}</div>
                      <div style={{ fontSize: 14, color: "var(--text)", fontWeight: 600 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 18px", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", borderRadius: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)" }}>Fast response guarantee</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Enterprise conversations typically begin within 4 hours during business days (London time).
                </p>
              </div>
            </div>

            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: "40px 36px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: "var(--accent-dim)", borderRadius: "0 20px 0 160px", pointerEvents: "none" }} />
              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 0" }}>
                  <CheckCircle2 size={52} color="var(--accent)" style={{ marginBottom: 20 }} />
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Message sent!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14 }}>We will be in touch within one business day.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 28 }}>Send us a message</h3>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ss-two-col">
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 7 }}>First name</label>
                        <input name="firstName" type="text" value={form.firstName} onChange={set} style={inputStyle} required />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 7 }}>Last name</label>
                        <input name="lastName" type="text" value={form.lastName} onChange={set} style={inputStyle} required />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 7 }}>Work email</label>
                      <input name="email" type="email" value={form.email} onChange={set} style={inputStyle} required />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 7 }}>Subject</label>
                      <select name="subject" value={form.subject} onChange={set} style={inputStyle}>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 7 }}>Message</label>
                      <textarea name="message" rows={4} value={form.message} onChange={set} style={{ ...inputStyle, resize: "none" }} required />
                    </div>
                    <button type="submit" className="ss-btn ss-btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px 24px", borderRadius: 12 }}>
                      Send message <ArrowRight size={15} />
                    </button>
                    <p style={{ fontSize: 12, color: "var(--text-subtle)", lineHeight: 1.5 }}>
                      This opens your email client with a pre-filled message.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="ss-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>Looking to join our London team?</p>
          <Link to="/careers" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
            View open roles <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
