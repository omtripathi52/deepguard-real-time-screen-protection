import { Layers, Globe2, Palette, BarChart3, ShieldCheck, Feather } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Always-On Protection",
    description: "Floating overlay stays on top of all windows, protecting you wherever you browse.",
  },
  {
    icon: Globe2,
    title: "Works Everywhere",
    description: "Social media, video calls, streaming sites—any content on your screen.",
  },
  {
    icon: Palette,
    title: "Color-Coded Alerts",
    description: "Green = Real, Yellow = Uncertain, Red = Deepfake. Instant visual feedback.",
  },
  {
    icon: BarChart3,
    title: "Confidence Levels",
    description: "5-tier system: Real, Likely Real, Uncertain, Likely Fake, Deepfake.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "Your screen data never leaves your computer. Zero cloud processing.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    description: "Minimal CPU usage. DeepGuard won't slow down your PC or drain your battery.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay protected from deepfakes, built into one simple app.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
