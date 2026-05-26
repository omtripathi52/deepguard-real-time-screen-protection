import { Link } from "react-router-dom";
import { MapPin, Briefcase, ArrowRight, Heart, Globe, Zap } from "lucide-react";
import { openRoles } from "@/data/content";

const perks = [
  { icon: Heart, title: "Generous time off", desc: "28 days + bank holidays. We mean it — take them." },
  { icon: Globe, title: "Hybrid London HQ", desc: "Beautiful office in Shoreditch. Work from home when you want to." },
  { icon: Zap, title: "Real ownership", desc: "Meaningful equity for every full-time hire. Build it, share in it." },
];

export default function Careers() {
  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-12 text-center">
        <span className="accent-chip mx-auto">Careers</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Help us make the <span className="grad-text">internet honest again.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A small, focused team in London building tools that matter. If you care about privacy, craft, and shipping — we'd love to hear from you.
        </p>
      </section>

      {/* Perks */}
      <section className="ss-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <p.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-[17px] font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="ss-container py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Open roles</h2>
        <p className="text-muted-foreground mb-8">{openRoles.length} positions in London right now.</p>
        <div className="space-y-3">
          {openRoles.map((r) => (
            <Link
              key={r.id}
              to="/contact"
              className="block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-primary mb-1.5">{r.department}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{r.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin size={12} />{r.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={12} />{r.type}</span>
                  </div>
                </div>
                <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ss-container py-16">
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Don't see your role?</h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            We're always interested in talented people. Drop us a line — tell us what you'd build here.
          </p>
          <Link to="/contact" className="ss-btn ss-btn-primary px-7 h-12 text-[15px]">
            Get in touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
