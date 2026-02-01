import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-lg text-muted-foreground mb-8">
                Last updated: January 2026
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                By downloading and using DeepGuard, you agree to these terms. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, installing, or using DeepGuard, you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. License</h2>
              <p className="text-muted-foreground leading-relaxed">
                DeepGuard grants you a free, non-exclusive, non-transferable license to use the software for personal, non-commercial purposes. You may not modify, distribute, sell, or reverse engineer the software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                DeepGuard is provided "as is" without any warranties, express or implied. We do not warrant that:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• The software will meet your requirements</li>
                <li>• The software will be uninterrupted or error-free</li>
                <li>• The detection results will be 100% accurate</li>
                <li>• The software will be compatible with all systems</li>
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-8 border-warning/20">
              <h2 className="text-2xl font-bold mb-4 text-warning">4. Accuracy Disclaimer</h2>
              <p className="text-foreground leading-relaxed">
                DeepGuard uses machine learning models to detect potential deepfakes. No detection system is perfect. DeepGuard provides confidence levels, not absolute determinations. You should not rely solely on DeepGuard for critical decisions. Always use your own judgment and seek additional verification when needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall DeepGuard or its creators be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the software, including but not limited to damages from incorrect detection results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use DeepGuard for any unlawful purpose or in any way that could damage, disable, or impair the software. DeepGuard is intended for personal use to help identify potentially manipulated media.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Updates and Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update the software and these terms from time to time. Continued use of DeepGuard after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may stop using DeepGuard at any time by uninstalling the software. We reserve the right to terminate or suspend access to DeepGuard at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at{" "}
                <a href="mailto:legal@deepguard.app" className="text-primary hover:underline">
                  legal@deepguard.app
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

export default Terms;
