import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const subjects = ["General question", "Product support", "Partnership", "Press", "Other"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg3)",
  border: "1px solid var(--ss-line)",
  borderRadius: 10,
  padding: "11px 14px",
  fontSize: 14,
  color: "var(--text)",
  outline: "none",
  transition: "border-color 0.15s",
  boxSizing: "border-box",
};

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@screensentinel.me?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="ss-mobile-page ss-contact-page" style={{ paddingTop: 70, background: "var(--bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px 120px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p className="ss-pill" style={{ marginBottom: 16 }}>Contact</p>
          <h1 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--text)", marginBottom: 14 }}>
            Get in touch.
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 480 }}>
            We're a small team. Send us a message and we'll get back to you personally.
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }} className="ss-two-col">
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: "var(--bg2)", border: "1px solid var(--ss-line)", borderRadius: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Mail size={17} color="var(--accent)" />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</div>
              <a href="mailto:hello@screensentinel.me" style={{ fontSize: 14, color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
                hello@screensentinel.me
              </a>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: "var(--bg2)", border: "1px solid var(--ss-line)", borderRadius: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock size={17} color="var(--accent)" />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 3, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>Response time</div>
              <div style={{ fontSize: 14, color: "var(--text)", fontWeight: 600 }}>Usually 1–3 business days</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "var(--bg2)", border: "1px solid var(--ss-line)", borderRadius: 20, padding: "36px 32px" }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "48px 0" }}>
              <CheckCircle2 size={48} color="var(--accent)" style={{ marginBottom: 18 }} />
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Message sent!</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14 }}>We'll be in touch within a few business days.</p>
            </div>
          ) : (
            <>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 24 }}>Send a message</h3>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="ss-two-col">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 6 }}>First name</label>
                    <input name="firstName" type="text" value={form.firstName} onChange={set} style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 6 }}>Last name</label>
                    <input name="lastName" type="text" value={form.lastName} onChange={set} style={inputStyle} required />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 6 }}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={set} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 6 }}>Subject</label>
                  <select name="subject" value={form.subject} onChange={set} style={inputStyle}>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 500, color: "var(--text-muted)", marginBottom: 6 }}>Message</label>
                  <textarea name="message" rows={5} value={form.message} onChange={set} style={{ ...inputStyle, resize: "none" }} required />
                </div>
                <button type="submit" className="ss-btn ss-btn-primary" style={{ justifyContent: "center", padding: "13px 24px", borderRadius: 12, marginTop: 4 }}>
                  Send message <ArrowRight size={15} />
                </button>
                <p style={{ fontSize: 12, color: "var(--text-subtle)", lineHeight: 1.5 }}>
                  This opens your email client with a pre-filled message to hello@screensentinel.me
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
