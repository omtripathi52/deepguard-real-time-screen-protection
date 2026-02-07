import { Download, Globe, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Install",
    description: "One-click setup. No Python, no technical knowledge needed. Just download and run.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Browse Normally",
    description: "Use Instagram, YouTube, TikTok, or any app as usual. ScreenSentinel works silently in the background.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Get Instant Alerts",
    description: "A small overlay shows green (real) or red (deepfake) in real-time as you scroll.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-5 sm:px-4 relative z-10">
        <MotionWrapper className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Start protecting yourself in under 2 minutes. No configuration required.
          </p>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-5xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
