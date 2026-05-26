"use client";
import { useState } from "react";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../../data/content";

const IMG = {
  featured:
    "https://raw.createusercontent.com/da8d53c9-1735-44bf-9b47-6b7a0019424e/",
};

const cats = ["All", "Security Research", "Privacy", "Guides", "Product"];

const catColors = {
  "Security Research": "#dc2626",
  Privacy: "#7c3aed",
  Guides: "#0284c7",
  Product: "var(--accent)",
};

export default function BlogPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1).filter((p) => {
    const okCat = cat === "All" || p.category === cat;
    const okQ = !q || p.title.toLowerCase().includes(q.toLowerCase());
    return okCat && okQ;
  });

  return (
    <div style={{ paddingTop: 70 }}>
      {/* ── HEADER ──────────────────── */}
      <section style={{ padding: "80px 0 48px", background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 36,
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <p className="ss-pill" style={{ marginBottom: 18 }}>
                Stories & Guides
              </p>
              <h1
                style={{
                  fontSize: "clamp(32px,4vw,50px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                What's happening in the world of fake video
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: 15 }}>
                Real stories, practical guides, and updates — all written in
                plain English, for everyone.
              </p>
            </div>
            {/* Search */}
            <div style={{ position: "relative", width: 280 }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                style={{
                  width: "100%",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 999,
                  padding: "10px 16px 10px 38px",
                  fontSize: 13,
                  color: "var(--text)",
                  outline: "none",
                }}
              />
              <Search
                size={15}
                color="var(--text-subtle)"
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: "7px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "none",
                  background: cat === c ? "var(--accent)" : "var(--bg3)",
                  color: cat === c ? "#fff" : "var(--text-muted)",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ────────────────── */}
      <section style={{ paddingBottom: 72, background: "var(--bg)" }}>
        <div className="ss-container">
          <div
            className="ss-card ss-feat-grid"
            style={{
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: 52,
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <img
                src={IMG.featured}
                alt={featured.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: 280,
                  transition: "transform 0.4s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
            <div
              style={{
                padding: "44px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <span className="ss-pill">Featured</span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Calendar size={11} />
                  {featured.date}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Clock size={11} />
                  {featured.readTime}
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(20px,2.5vw,28px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 14,
                  lineHeight: 1.25,
                }}
              >
                {featured.title}
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                {featured.excerpt}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "var(--accent)",
                      fontSize: 12,
                    }}
                  >
                    EV
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {featured.author}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-subtle)" }}>
                      Security Research Lead
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  Read More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 20,
            }}
            className="ss-blog-grid"
          >
            {rest.length > 0 ? (
              rest.map((p) => (
                <div key={p.id} style={{ cursor: "pointer" }}>
                  <div
                    style={{
                      height: 180,
                      borderRadius: 12,
                      marginBottom: 18,
                      overflow: "hidden",
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, var(--bg2) 0%, var(--bg3) 100%)`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: "var(--text-subtle)",
                        fontFamily: "monospace",
                        position: "relative",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: catColors[p.category] || "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {p.category}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--text-subtle)" }}>
                      {p.date}
                    </span>
                    <span style={{ fontSize: 11, color: "var(--text-subtle)" }}>
                      {p.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "var(--text)",
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      marginBottom: 12,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {p.excerpt}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-subtle)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-subtle)")
                    }
                  >
                    Read article <ArrowRight size={12} />
                  </a>
                </div>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1/-1",
                  textAlign: "center",
                  padding: "48px 0",
                  color: "var(--text-subtle)",
                  fontSize: 14,
                }}
              >
                No articles match your search.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────── */}
      <section
        style={{
          padding: "72px 0",
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          className="ss-container"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 10,
            }}
          >
            Stay updated
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 14,
              marginBottom: 28,
            }}
          >
            Get the latest research and product news delivered to your inbox.
          </p>
          <form
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                minWidth: 240,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                padding: "11px 20px",
                fontSize: 13,
                color: "var(--text)",
                outline: "none",
              }}
            />
            <button
              type="submit"
              className="ss-btn ss-btn-primary"
              style={{ flexShrink: 0 }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .ss-feat-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 860px) {
          .ss-feat-grid { grid-template-columns: 1fr !important; }
          .ss-blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .ss-blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
