"use client";
import { useState, useEffect } from "react";
import { Shield, Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "../utils/ThemeProvider";

const nav = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about", desc: "Our story and mission" },
      { label: "Careers", href: "/careers", desc: "Join the team in London" },
      { label: "Events", href: "/events", desc: "Hackathons & workshops" },
      { label: "Blog", href: "/blog", desc: "Research & insights" },
    ],
  },
  { label: "Trust", href: "/trust" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileExp, setMobileExp] = useState(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled
    ? isDark
      ? "rgba(9,9,11,0.94)"
      : "rgba(255,255,255,0.94)"
    : "transparent";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: navBg,
          backdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="ss-container"
          style={{ display: "flex", alignItems: "center", height: 70 }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
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
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}
            >
              ScreenSentinel
            </span>
          </a>

          {/* Desktop links */}
          <div
            className="ss-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginLeft: 36,
            }}
          >
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "8px 12px",
                      border: "none",
                      background: "transparent",
                      color: "var(--text-muted)",
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: "pointer",
                      borderRadius: 8,
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      style={{
                        transition: "transform 0.2s",
                        transform:
                          dropdown === item.label ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {dropdown === item.label && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: isDark ? "#1c1c1f" : "#fff",
                        border: "1px solid var(--border)",
                        borderRadius: 14,
                        padding: 6,
                        minWidth: 210,
                        boxShadow: isDark
                          ? "0 20px 60px rgba(0,0,0,0.7)"
                          : "0 20px 60px rgba(0,0,0,0.12)",
                      }}
                    >
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          style={{
                            display: "block",
                            padding: "9px 12px",
                            textDecoration: "none",
                            borderRadius: 8,
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "var(--bg3)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: "var(--text)",
                              marginBottom: 2,
                            }}
                          >
                            {c.label}
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "var(--text-subtle)",
                            }}
                          >
                            {c.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: "8px 12px",
                    textDecoration: "none",
                    color: "var(--text-muted)",
                    fontSize: 14,
                    fontWeight: 500,
                    borderRadius: 8,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {item.label}
                </a>
              ),
            )}
          </div>

          {/* Right */}
          <div
            className="ss-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginLeft: "auto",
            }}
          >
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {isDark ? (
                <Sun size={15} color="var(--text-muted)" />
              ) : (
                <Moon size={15} color="var(--text-muted)" />
              )}
            </button>
            <a
              href="/contact"
              className="ss-btn ss-btn-primary"
              style={{ fontSize: 13, padding: "9px 18px" }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile icons */}
          <div
            className="ss-mobile-toggle"
            style={{
              marginLeft: "auto",
              display: "none",
              alignItems: "center",
              gap: 8,
            }}
          >
            <button
              onClick={toggle}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {isDark ? (
                <Sun size={14} color="var(--text-muted)" />
              ) : (
                <Moon size={14} color="var(--text-muted)" />
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {open ? (
                <X size={17} color="var(--text)" />
              ) : (
                <Menu size={17} color="var(--text)" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            style={{
              background: isDark ? "rgba(9,9,11,0.97)" : "#fff",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border)",
              padding: "12px 24px 24px",
            }}
          >
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExp(mobileExp === item.label ? null : item.label)
                    }
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "13px 0",
                      background: "transparent",
                      border: "none",
                      color: "var(--text)",
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      style={{
                        transform:
                          mobileExp === item.label ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                  {mobileExp === item.label && (
                    <div style={{ paddingLeft: 12, paddingBottom: 4 }}>
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          style={{
                            display: "block",
                            padding: "10px 0",
                            textDecoration: "none",
                            color: "var(--text-muted)",
                            fontSize: 14,
                            borderBottom: "1px solid var(--border)",
                          }}
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "13px 0",
                    textDecoration: "none",
                    color: "var(--text)",
                    fontSize: 15,
                    fontWeight: 600,
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {item.label}
                </a>
              ),
            )}
            <div style={{ paddingTop: 16 }}>
              <a
                href="/contact"
                className="ss-btn ss-btn-primary"
                onClick={() => setOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 860px) {
          .ss-desktop-links { display: none !important; }
          .ss-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
