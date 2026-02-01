import { Download, Globe, Bell } from "lucide-react";

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
    description: "Use Instagram, YouTube, TikTok, or any app as usual. DeepGuard works silently in the background.",
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
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start protecting yourself in under 2 minutes. No configuration required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
