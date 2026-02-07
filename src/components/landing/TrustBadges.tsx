import { Lock, Monitor, EyeOff, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-10 sm:py-16 border-y border-border/30">
      <div className="container mx-auto px-5 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-2 sm:gap-3 group"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <badge.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{badge.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
