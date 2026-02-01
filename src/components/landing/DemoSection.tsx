import { CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DeepGuard running while browsing Instagram Reels
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Demo mockup */}
          <div className="glass-card rounded-3xl p-6 shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
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
            <div className="grid grid-cols-3 gap-4">
              {/* Reel 1 - Safe */}
              <div className="relative aspect-[9/16] bg-secondary/30 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                  <span className="text-xs">Video Content</span>
                </div>
                <div className="absolute top-3 right-3 glass-card rounded-lg p-2 glow-safe">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-safe" />
                    <span className="text-xs font-semibold text-safe">REAL</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="h-2 w-16 bg-muted/50 rounded mb-1" />
                  <div className="h-2 w-24 bg-muted/30 rounded" />
                </div>
              </div>
              
              {/* Reel 2 - Danger */}
              <div className="relative aspect-[9/16] bg-secondary/30 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                  <span className="text-xs">Video Content</span>
                </div>
                <div className="absolute top-3 right-3 glass-card rounded-lg p-2 glow-danger">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-danger" />
                    <span className="text-xs font-semibold text-danger">FAKE</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-danger/50 rounded-xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="h-2 w-20 bg-muted/50 rounded mb-1" />
                  <div className="h-2 w-16 bg-muted/30 rounded" />
                </div>
              </div>
              
              {/* Reel 3 - Uncertain */}
              <div className="relative aspect-[9/16] bg-secondary/30 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                  <span className="text-xs">Video Content</span>
                </div>
                <div className="absolute top-3 right-3 glass-card rounded-lg p-2">
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-warning" />
                    <span className="text-xs font-semibold text-warning">UNSURE</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="h-2 w-14 bg-muted/50 rounded mb-1" />
                  <div className="h-2 w-20 bg-muted/30 rounded" />
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Real-time detection while scrolling through social media content
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
