import { Lock, Monitor, EyeOff, Zap } from "lucide-react";

const badges = [
  {
    icon: Lock,
    title: "100% Offline",
    description: "No internet required",
  },
  {
    icon: Monitor,
    title: "Runs Locally",
    description: "On your machine only",
  },
  {
    icon: EyeOff,
    title: "No Data Collection",
    description: "Complete privacy",
  },
  {
    icon: Zap,
    title: "Real-Time Detection",
    description: "Instant results",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
