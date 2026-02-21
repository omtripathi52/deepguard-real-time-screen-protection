import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Menu, X } from "lucide-react";
import { useGitHubRelease } from "@/hooks/use-github-release";

export default function Navbar() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to handle clicks on links
  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu if it's open
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-zinc-50" onClick={() => handleNavClick('/')}>
          <ShieldAlert className="h-5 w-5 text-emerald-500" />
          <span className="font-bold tracking-wide">ScreenSentinel</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link to="/technology" onClick={() => handleNavClick('/technology')} className="hover:text-zinc-50 transition-colors">How It Works</Link>
          <Link to="/security" onClick={() => handleNavClick('/security')} className="hover:text-zinc-50 transition-colors">Security</Link>
          <Link to="/about" onClick={() => handleNavClick('/about')} className="hover:text-zinc-50 transition-colors">About</Link>
          <Link to="/contact" onClick={() => handleNavClick('/contact')} className="hover:text-zinc-50 transition-colors">Contact</Link>
        </nav>

        {/* Desktop Download Button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={exeLink} 
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 shadow transition-colors hover:bg-zinc-200"
          >
            Download for Windows
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-zinc-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-zinc-950 px-4 py-6 space-y-6 shadow-2xl">
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
            <Link to="/technology" onClick={() => handleNavClick('/technology')} className="hover:text-zinc-50">How It Works</Link>
            <Link to="/security" onClick={() => handleNavClick('/security')} className="hover:text-zinc-50">Privacy & Security</Link>
            <Link to="/about" onClick={() => handleNavClick('/about')} className="hover:text-zinc-50">About Us</Link>
            <Link to="/contact" onClick={() => handleNavClick('/contact')} className="hover:text-zinc-50">Contact Support</Link>
          </nav>
          
          <div className="pt-4 border-t border-zinc-900">
            <a 
              href={exeLink} 
              className="flex w-full h-10 items-center justify-center rounded-md bg-emerald-500 px-4 text-sm font-bold text-zinc-950 shadow transition-colors hover:bg-emerald-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download for Windows (.exe)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}