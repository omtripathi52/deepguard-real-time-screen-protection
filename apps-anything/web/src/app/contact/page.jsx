"use client";
import { useState } from "react";
import {
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

const contacts = [
  { Icon: Mail, label: "General Enquiries", value: "hello@screensentinel.com" },
  {
    Icon: MessageSquare,
    label: "Enterprise Sales",
    value: "sales@screensentinel.com",
  },
  { Icon: MapPin, label: "Headquarters", value: "Shoreditch, London, UK" },
  { Icon: Clock, label: "Response Time", value: "Within 1 business day" },
];

const subjects = [
  "Enterprise Inquiry",
  "Product Support",
  "Media & Press",
  "Partnerships",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Enterprise Inquiry",
    message: "",
  });
  const set = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputStyle = {
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

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}
            className="ss-two-col"
          >
            {/* Left */}
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Contact
              </p>
              <h1
                style={{
                  fontSize: "clamp(32px,4vw,54px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  color: "var(--text)",
                  marginBottom: 18,
                }}
              >
                Let's talk about digital truth.
              </h1>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 40,
                }}
              >
                Based in London, our team is dedicated to building the future of
                media authenticity. Reach out for enterprise inquiries, support,
                or partnership opportunities.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                {contacts.map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 18px",
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={17} color="var(--accent)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-subtle)",
                          marginBottom: 3,
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "var(--text)",
                          fontWeight: 600,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "16px 18px",
                  background: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--accent)",
                    }}
                  >
                    Fast Response Guarantee
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  Enterprise conversations typically begin within 4 hours during
                  business days (London time).
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "40px 36px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 160,
                  height: 160,
                  background: "var(--accent-dim)",
                  borderRadius: "0 20px 0 160px",
                  pointerEvents: "none",
                }}
              />
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "60px 0",
                  }}
                >
                  <CheckCircle2
                    size={52}
                    color="var(--accent)"
                    style={{ marginBottom: 20 }}
                  />
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 8,
                    }}
                  >
                    Message sent!
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
                    We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: 28,
                    }}
                  >
                    Send us a message
                  </h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 18,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                    >
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "var(--text-muted)",
                            marginBottom: 7,
                          }}
                        >
                          First Name
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          value={form.firstName}
                          onChange={set}
                          style={inputStyle}
                          required
                          onFocus={(e) =>
                            (e.target.style.borderColor = "var(--accent)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            display: "block",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "var(--text-muted)",
                            marginBottom: 7,
                          }}
                        >
                          Last Name
                        </label>
                        <input
                          name="lastName"
                          type="text"
                          value={form.lastName}
                          onChange={set}
                          style={inputStyle}
                          required
                          onFocus={(e) =>
                            (e.target.style.borderColor = "var(--accent)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--text-muted)",
                          marginBottom: 7,
                        }}
                      >
                        Work Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={set}
                        style={inputStyle}
                        required
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--text-muted)",
                          marginBottom: 7,
                        }}
                      >
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={set}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      >
                        {subjects.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--text-muted)",
                          marginBottom: 7,
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={set}
                        style={{ ...inputStyle, resize: "none" }}
                        required
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="ss-btn ss-btn-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "13px 24px",
                        borderRadius: 12,
                      }}
                    >
                      Send Message <ArrowRight size={15} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Strip */}
      <section
        style={{
          padding: "40px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="ss-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
            Looking to join our London team?
          </p>
          <a
            href="/careers"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            View Open Roles <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          .ss-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
