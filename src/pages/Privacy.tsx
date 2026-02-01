import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Shield className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DeepGuard</span>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: January 2026
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                At DeepGuard, your privacy is our top priority. This policy explains how DeepGuard handles your data—or more accurately, how we don't handle it at all.
              </p>
            </section>

            <section className="glass-card rounded-2xl p-8 border-safe/20">
              <h2 className="text-2xl font-bold mb-4 text-safe">The Short Version</h2>
              <p className="text-foreground text-lg">
                DeepGuard collects absolutely no data. Zero. None. Your screen content, analysis results, and usage patterns stay on your computer and are never transmitted anywhere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">None.</strong> DeepGuard runs entirely offline on your local machine. We do not collect, store, transmit, or process any of your data. This includes:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Screen content or screenshots</li>
                <li>• Analysis results or detection history</li>
                <li>• Usage statistics or analytics</li>
                <li>• Personal information of any kind</li>
                <li>• Device information or identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How DeepGuard Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                DeepGuard analyzes your screen content using machine learning models that run locally on your computer. The analysis happens in real-time, and the results are displayed immediately without any data leaving your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No Network Communication</h2>
              <p className="text-muted-foreground leading-relaxed">
                DeepGuard does not require an internet connection to function. It makes no network requests, sends no data to external servers, and has no backend infrastructure. Your privacy is guaranteed by design.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                Software updates are distributed through our website. When you download an update, no personal data is transmitted. The download is a one-way transfer of the application files to your computer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@deepguard.app" className="text-primary hover:underline">
                  privacy@deepguard.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 DeepGuard. Built by Om Tripathi
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
