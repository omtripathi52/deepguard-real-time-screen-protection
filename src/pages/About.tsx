import { Link } from "react-router-dom";
import { Shield, Heart, Target, ArrowRight } from "lucide-react";
import { teamMembers } from "@/data/content";

const values = [
  { icon: Shield, title: "Privacy first, always", desc: "Every product decision starts with one question: does this respect what's on the user's screen? If the answer's no, we don't ship it." },
  { icon: Heart, title: "Built for real people", desc: "Not for security experts, not for IT teams — for anyone who's ever wondered if a video is real. Simple language, no jargon, no fuss." },
  { icon: Target, title: "Ship what matters", desc: "We don't add features for the sake of it. Every release makes the core promise — spotting fakes — a little bit better." },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-12 text-center">
        <span className="accent-chip mx-auto">About</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          We're building the tool <span className="grad-text">we wished existed.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A small team in London on a simple mission: give everyone the power to tell real video from fake — without giving anything up.
        </p>
      </section>

      {/* Story */}
      <section className="ss-container py-12">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our story</h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              In 2024, our founder Marcus watched a senior executive get tricked into transferring half a million pounds during what looked like a perfectly normal video call with his CEO. The CEO was a deepfake.
            </p>
            <p>
              The thing that stuck with him wasn't the money. It was how easily it happened. Smart, experienced people had no way to tell. The tools they had — antivirus, secure email, two-factor authentication — were built for a different kind of threat.
            </p>
            <p>
              <span className="text-foreground font-medium">ScreenSentinel exists for that moment.</span> It's the warning that didn't exist that day. A small, quiet app that watches what you're watching and tells you — clearly, calmly, locally — when something doesn't add up.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="ss-container py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-2">What we believe</h2>
        <p className="text-muted-foreground text-center mb-10">Three principles, no exceptions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <v.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-[17px] font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="ss-container py-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-2">The team</h2>
        <p className="text-muted-foreground text-center mb-10">Small on purpose. Each of us ships.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-7 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-4">
                {m.initials}
              </div>
              <h3 className="text-lg font-semibold mb-1">{m.name}</h3>
              <div className="text-xs uppercase tracking-wider text-primary mb-3">{m.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ss-container py-16">
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Want to join us?</h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            We're hiring engineers, designers, and security specialists in London.
          </p>
          <Link to="/careers" className="ss-btn ss-btn-primary px-7 h-12 text-[15px]">
            See open roles <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
