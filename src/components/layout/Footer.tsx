import { Link } from "react-router-dom";
import { useGitHubRelease } from "@/hooks/use-github-release";

export default function Footer() {
  const { data: release } = useGitHubRelease();
  const exeLink = release?.exeUrl || "https://github.com/omtripathi52/ScreenSentinel/releases/latest";

  // Universal helper to force scroll if clicking a link for the page we are already on
  const handleSamePageScroll = (path: string, hash?: string) => {
    if (window.location.pathname === path) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-zinc-400 text-sm mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-zinc-50 font-semibold mb-4 tracking-wide text-sm">Downloads</h3>
          <ul className="space-y-3">
            <li><a href={exeLink} className="hover:text-emerald-400 transition-colors">Windows Installer (.exe)</a></li>
            <li><span className="text-zinc-600 cursor-not-allowed">Portable Version (.zip) - Soon</span></li>
            <li>
              <Link 
                to="/security#signatures" 
                onClick={() => handleSamePageScroll('/security', 'signatures')}
                className="hover:text-emerald-400 transition-colors"
              >
                Security Signatures
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-50 font-semibold mb-4 tracking-wide text-sm">Company</h3>
          <ul className="space-y-3">
            <li><Link to="/about" onClick={() => handleSamePageScroll('/about')} className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link to="/technology" onClick={() => handleSamePageScroll('/technology')} className="hover:text-emerald-400 transition-colors">How It Works</Link></li>
            <li><Link to="/contact" onClick={() => handleSamePageScroll('/contact')} className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-50 font-semibold mb-4 tracking-wide text-sm">Legal</h3>
          <ul className="space-y-3">
            <li><Link to="/privacy" onClick={() => handleSamePageScroll('/privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={() => handleSamePageScroll('/terms')} className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-50 font-semibold mb-4 tracking-wide text-sm">ScreenSentinel</h3>
          <ul className="space-y-3">
            <li>Lucknow, Uttar Pradesh</li>
            <li>India</li>
            <li><a href="mailto:screensentinel.ai@gmail.com" className="hover:text-emerald-400 transition-colors">screensentinel.ai@gmail.com</a></li>
          </ul>
          <div className="flex items-center gap-4 mt-5">
            <a href="https://x.com/screensentinelx" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X" className="text-zinc-500 hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/omtripathi52/ScreenSentinel" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" className="text-zinc-500 hover:text-emerald-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-zinc-900/50 text-xs text-zinc-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} ScreenSentinel. Built by Om Tripathi.</p>
        <p>Windows is a registered trademark of Microsoft Corporation.</p>
      </div>
    </footer>
  );
}