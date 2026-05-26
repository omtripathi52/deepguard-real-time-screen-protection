import { Link } from "react-router-dom";
import { Shield, User, FileSearch, Lock, ArrowRight } from "lucide-react";
import { useCases } from "@/data/content";

const iconMap = { Shield, User, FileSearch, Lock } as const;

export default function Solutions() {
  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-12 text-center">
        <span className="accent-chip mx-auto">Solutions</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Built for everyone <span className="grad-text">who watches video.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From journalists to executives, from parents to policy-makers — anyone who needs to trust what they see online uses ScreenSentinel.
        </p>
      </section>

      <section className="ss-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((u) => {
            const Icon = iconMap[u.icon as keyof typeof iconMap] || Shield;
            return (
              <div key={u.title} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{u.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{u.description}</p>
                <div className="text-xs font-semibold text-primary border-t border-border pt-4">{u.stat}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="ss-container py-16">
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Need a tailored deployment?</h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            Newsroom, enterprise, or government? Our team will help you roll out ScreenSentinel to your whole organisation.
          </p>
          <Link to="/contact" className="ss-btn ss-btn-primary px-7 h-12 text-[15px]">
            Talk to our team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
