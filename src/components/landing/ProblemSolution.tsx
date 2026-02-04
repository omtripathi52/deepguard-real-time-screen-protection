import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const problems = [
  "Deepfakes are everywhere",
  "You can't tell what's real anymore",
  "Traditional detectors require uploads and waiting",
];

const solutions = [
  "ScreenSentinel watches your screen automatically",
  "Instant visual feedback as you scroll",
  "No friction, no interruption",
];

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <MotionWrapper className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">ScreenSentinel</span>?
          </h2>
        </MotionWrapper>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Problem side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 border-danger/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-danger/20 flex items-center justify-center">
                <X className="w-5 h-5 text-danger" />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Problem</h3>
            </div>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-danger" />
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Solution side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-2xl p-8 border-safe/20 glow-safe"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-safe/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-safe" />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Solution</h3>
            </div>
            
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-safe/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-safe" />
                  </div>
                  <span className="text-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
