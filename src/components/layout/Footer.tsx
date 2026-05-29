import { Link } from "react-router-dom";
import { Shield, Github, Mail } from "lucide-react";

const cols: Record<string, { name: string; path: string }[]> = {
  Product: [
    { name: "How it Works", path: "/product" },
    { name: "Use Cases", path: "/solutions" },
    { name: "Trust & Security", path: "/trust" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
  ],
  Resources: [
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border pt-16 pb-10 mt-20">
      <div className="ss-container">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Shield size={18} className="text-primary" />
              </div>
              <span className="text-[15px] font-bold tracking-tight">ScreenSentinel</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-5">
              On-device deepfake detection that quietly checks the video on your screen — your data never leaves your computer.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://github.com/omtripathi52/ScreenSentinel"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="mailto:screensentinel.ai@gmail.com"
                className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase mb-4">
                {heading}
              </div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-7 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} ScreenSentinel Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Trust infrastructure for the video web.
          </p>
        </div>
      </div>
    </footer>
  );
}
