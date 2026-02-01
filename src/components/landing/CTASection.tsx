import { Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 mb-8 glow-effect">
            <Shield className="w-10 h-10 text-foreground" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Protect Yourself from{" "}
            <span className="gradient-text">Deepfakes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Free. Private. No signup required.
          </p>
          
          <Button variant="download" size="xl" className="gap-3 text-lg">
            <Download className="w-6 h-6" />
            Download for Windows
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Version 1.0.0 | 150MB | Windows 10/11
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
