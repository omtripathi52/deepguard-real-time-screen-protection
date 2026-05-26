import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "@/data/content";

export default function Events() {
  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-12 text-center">
        <span className="accent-chip mx-auto">Events</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Come build with us <span className="grad-text">in real life.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Hackathons, workshops, and conversations about AI, trust, and what comes next.
        </p>
      </section>

      <section className="ss-container py-10 space-y-5">
        {events.map((e) => (
          <article key={e.id} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-colors">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="accent-chip">{e.type}</span>
              {!e.registrationOpen && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                  Registration soon
                </span>
              )}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{e.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{e.description}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pt-5 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={15} className="text-primary" />
                <span className="text-muted-foreground">{e.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={15} className="text-primary" />
                <span className="text-muted-foreground">{e.location}</span>
              </div>
              <button
                disabled={!e.registrationOpen}
                className={`md:ml-auto ss-btn ${e.registrationOpen ? "ss-btn-primary" : "ss-btn-ghost opacity-60 cursor-not-allowed"} px-5 h-10`}
              >
                {e.registrationOpen ? "Register" : "Notify me"} <ArrowRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
