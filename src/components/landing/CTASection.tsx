import { Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-5 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-primary/60 mb-6 sm:mb-8 glow-effect"
          >
            <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-foreground" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Protect Yourself from{" "}
            <span className="gradient-text">Deepfakes</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-10"
          >
            Free. Private. No signup required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="download" size="xl" className="gap-3 text-base sm:text-lg">
              <Download className="w-6 h-6" />
              Download for Windows
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-muted-foreground mt-6"
          >
            Version 1.0.0 | 150MB | Windows 10/11
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
