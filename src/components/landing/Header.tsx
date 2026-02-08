import { Shield, Download, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
            <Shield className="w-5 h-5 text-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">ScreenSentinel</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://ko-fi.com/screensentinel"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Heart className="w-4 h-4 text-danger" />
              Support
            </Button>
          </a>
          <a href="https://github.com/omtripathi52/ScreenSentinel/releases/download/v1.0.0/ScreenSentinel_Setup_v1.0.0.exe">
            <Button variant="hero" size="sm" className="gap-2 hidden sm:inline-flex">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border/30 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-secondary/50"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 sm:hidden flex flex-col gap-2">
                <a href="https://github.com/omtripathi52/ScreenSentinel/releases/download/v1.0.0/ScreenSentinel_Setup_v1.0.0.exe">
                  <Button variant="hero" size="sm" className="gap-2 w-full">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </a>
                <a href="https://ko-fi.com/screensentinel" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 w-full">
                    <Heart className="w-4 h-4 text-danger" />
                    Support on Ko-fi
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;