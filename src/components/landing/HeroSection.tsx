import { Download, ChevronDown, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-safe/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span>100% Offline Protection</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
            >
              Know What's{" "}
              <span className="gradient-text">Real.</span>
              <br />
              <span className="text-foreground">Instantly.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              ScreenSentinel scans your screen in real-time and alerts you when deepfakes appear.{" "}
              <span className="text-foreground font-medium">No uploads. No cloud. 100% private.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="download" size="xl" className="gap-3">
                <Download className="w-5 h-5" />
                Download for Windows (Free)
              </Button>
              <a href="#how-it-works">
                <Button variant="outline" size="xl" className="gap-2 w-full sm:w-auto">
                  See how it works
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Version 1.0.0 • Windows 10/11 • 150MB
            </motion.p>
          </div>
          
          {/* Right content - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              {/* Desktop mockup */}
              <div className="w-full max-w-md glass-card rounded-2xl p-4 shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-danger/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-safe/60" />
                  </div>
                  <div className="flex-1 bg-secondary/50 rounded-lg px-3 py-1.5 text-xs text-muted-foreground">
                    instagram.com/reels
                  </div>
                </div>
                
                {/* Content area */}
                <div className="bg-secondary/30 rounded-xl p-6 space-y-4">
                  <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">Video Content</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-24 bg-muted/50 rounded" />
                    <div className="h-3 w-16 bg-muted/30 rounded" />
                  </div>
                </div>
              </div>
              
              {/* Floating overlay widget */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 top-1/3 glass-card rounded-xl p-3 shadow-xl glow-safe animate-pulse-slow hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-safe flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-safe">REAL</div>
                    <div className="text-[10px] text-muted-foreground">98% confidence</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Second overlay - showing danger state */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 0.7, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -left-8 bottom-1/4 glass-card rounded-xl p-3 shadow-xl glow-danger hidden sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-danger flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-danger">DEEPFAKE</div>
                    <div className="text-[10px] text-muted-foreground">92% confidence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
