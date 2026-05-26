import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/content";

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-10 text-center">
        <span className="accent-chip mx-auto">Blog</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Research, <span className="grad-text">guides & stories.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          What we've learned about deepfakes, privacy, and keeping the internet honest.
        </p>
      </section>

      {/* Featured */}
      <section className="ss-container py-10">
        <article className="rounded-3xl border border-border bg-card p-8 md:p-12 hover:border-primary/40 transition-colors cursor-pointer group">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="accent-chip">{featured.category}</span>
            <span className="flex items-center gap-1.5"><Calendar size={12} />{featured.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={12} />{featured.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-xs font-semibold text-primary">
              {featured.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="text-sm text-muted-foreground">{featured.author}</span>
            <ArrowRight size={16} className="ml-auto text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </article>
      </section>

      {/* Grid */}
      <section className="ss-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((post) => (
            <article key={post.id} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors cursor-pointer group">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="accent-chip">{post.category}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-[19px] font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{post.author} · {post.date}</span>
                <ArrowRight size={15} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
