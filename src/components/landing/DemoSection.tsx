import { CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import demoRealVideo from "@/assets/demo-real-video.jpg";
import demoFakeVideo from "@/assets/demo-fake-video.jpg";
import demoUnsureVideo from "@/assets/demo-unsure-video.jpg";

const DemoSection = () => {
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container mx-auto px-5 sm:px-4 relative z-10">
        <MotionWrapper className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            ScreenSentinel running while browsing Instagram Reels
          </p>
        </MotionWrapper>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Demo mockup */}
          <div className="glass-card rounded-3xl p-3 sm:p-6 shadow-2xl">
            {/* Browser chrome */}
            <div className="hidden sm:flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-danger/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-safe/60" />
              </div>
              <div className="flex-1 bg-secondary/50 rounded-lg px-4 py-2 text-sm text-muted-foreground">
                instagram.com/reels
              </div>
            </div>
            
            {/* Content grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Reel 1 - Safe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative aspect-[9/16] bg-secondary/30 rounded-xl overflow-hidden group"
              >
                <img 
                  src={demoRealVideo} 
                  alt="Real video content" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="absolute top-3 right-3 glass-card rounded-lg p-2 glow-safe"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-safe" />
                    <span className="text-xs font-semibold text-safe">REAL</span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Reel 2 - Danger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="relative aspect-[9/16] bg-secondary/30 rounded-xl overflow-hidden group"
              >
                <img 
                  src={demoFakeVideo} 
                  alt="Deepfake video content" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="absolute top-3 right-3 glass-card rounded-lg p-2 glow-danger"
                >
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-danger" />
                    <span className="text-xs font-semibold text-danger">FAKE</span>
                  </div>
                </motion.div>
                <div className="absolute inset-0 border-2 border-danger/50 rounded-xl pointer-events-none" />
              </motion.div>
              
              {/* Reel 3 - Uncertain */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative aspect-[9/16] bg-secondary/30 rounded-xl overflow-hidden group"
              >
                <img 
                  src={demoUnsureVideo} 
                  alt="Uncertain video content" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="absolute top-3 right-3 glass-card rounded-lg p-2"
                >
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-warning" />
                    <span className="text-xs font-semibold text-warning">UNSURE</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-6"
          >
            Real-time detection while scrolling through social media content
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
