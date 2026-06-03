import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { blogPosts } from "@/data/content";

export default function Blog() {
  const categories = useMemo(() => ["All", ...new Set(blogPosts.map((p) => p.category))], []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchQuery = `${p.title} ${p.excerpt} ${p.author}`.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });

  const [featured, ...rest] = (filtered.length ? filtered : blogPosts) as typeof blogPosts;

  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="ss-container">
          <div className="ss-two-col" style={{ alignItems: "center" }}>
            <div>
              <p className="ss-pill" style={{ marginBottom: 20 }}>
                Journal
              </p>
              <h1 style={{ fontSize: "clamp(34px,4.6vw,58px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.08, marginBottom: 18 }}>
                Research, stories, and insights on digital authenticity.
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: 16, lineHeight: 1.7, marginBottom: 26 }}>
                A closer look at the policies, products, and people building trustworthy AI media.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className="ss-btn"
                    style={{
                      padding: "8px 16px",
                      borderRadius: 999,
                      border: "1px solid var(--ss-line)",
                      background: selectedCategory === c ? "var(--accent)" : "var(--bg2)",
                      color: selectedCategory === c ? "#fff" : "var(--text-muted)",
                      fontWeight: 600,
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--bg2)", border: "1px solid var(--ss-line)", borderRadius: 18, padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--ss-line)", borderRadius: 12, padding: "10px 14px", background: "var(--bg)" }}>
                <Search size={16} color="var(--text-subtle)" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles"
                  style={{ border: "none", outline: "none", background: "transparent", color: "var(--text)", width: "100%", fontSize: 14 }}
                />
              </div>
              <p style={{ marginTop: 14, fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
                Looking for press materials? Email <strong style={{ color: "var(--text)" }}>press@screensentinel.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section style={{ padding: "0 0 80px", background: "var(--bg)" }}>
          <div className="ss-container">
            <article style={{ border: "1px solid var(--ss-line)", borderRadius: 20, padding: "36px", background: "var(--bg2)", display: "grid", gap: 20 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                <span className="ss-pill">Featured</span>
                <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>{featured.category}</span>
                <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>•</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-subtle)" }}>
                  <Calendar size={12} /> {featured.date}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-subtle)" }}>
                  <Clock size={12} /> {featured.readTime}
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)" }}>{featured.title}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>{featured.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "var(--accent)" }}>
                  {featured.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{featured.author}</div>
                  <div style={{ fontSize: 12, color: "var(--text-subtle)" }}>Research team</div>
                </div>
                <Link to="/contact" className="ss-btn" style={{ marginLeft: "auto", background: "var(--accent)", color: "#fff", textDecoration: "none" }}>
                  Request full article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section style={{ padding: "60px 0 90px", background: "var(--bg2)", borderTop: "1px solid var(--ss-line)" }}>
        <div className="ss-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 18 }}>
            {rest.map((post) => (
              <article key={post.id} style={{ border: "1px solid var(--ss-line)", borderRadius: 16, padding: "22px", background: "var(--bg)", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <span className="ss-pill">{post.category}</span>
                  <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--ss-line)" }}>
                  <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>{post.author} • {post.date}</span>
                  <Link to="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
                    Request summary <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
