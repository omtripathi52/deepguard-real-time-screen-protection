import { Shield, Twitter, Linkedin, Github, MapPin } from "lucide-react";

const cols = {
  Product: [
    { name: "How it Works", path: "/product" },
    { name: "Use Cases", path: "/solutions" },
    { name: "Trust & Security", path: "/trust" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
  ],
  Resources: [
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        paddingTop: 72,
        paddingBottom: 40,
      }}
    >
      <div className="ss-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="ss-footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)",
                  borderRadius: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Shield size={17} color="var(--accent)" />
              </div>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                }}
              >
                ScreenSentinel
              </span>
            </a>
            <p
              style={{
                color: "var(--text-subtle)",
                fontSize: 13,
                lineHeight: 1.7,
                maxWidth: 260,
                marginBottom: 22,
              }}
            >
              Real-time deepfake detection for Windows. Privacy-first,
              local-only processing. Built in London.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "var(--text-subtle)",
                fontSize: 12,
                marginBottom: 20,
              }}
            >
              <MapPin size={13} />
              Shoreditch, London, United Kingdom
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-subtle)",
                    textDecoration: "none",
                    transition: "border-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-strong)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-subtle)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-subtle)",
                  marginBottom: 16,
                }}
              >
                {section}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 11,
                }}
              >
                {links.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.path}
                      style={{
                        color: "var(--text-muted)",
                        fontSize: 14,
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-subtle)", fontSize: 12 }}>
            © {year} ScreenSentinel Ltd. All rights reserved. Registered in
            England & Wales.
          </p>
          <p style={{ color: "var(--text-subtle)", fontSize: 12 }}>
            🇬🇧 Made with pride in London
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .ss-footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .ss-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
