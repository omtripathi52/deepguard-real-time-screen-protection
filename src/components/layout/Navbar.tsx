import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, Sun, Moon, ChevronDown } from "lucide-react";

type NavChild = { label: string; href: string; desc: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const nav: NavItem[] = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about", desc: "Our story and mission" },
      { label: "Careers", href: "/careers", desc: "Join the team in London" },
      { label: "Events", href: "/events", desc: "Hackathons & workshops" },
      { label: "Blog", href: "/blog", desc: "Research & insights" },
    ],
  },
  { label: "Trust", href: "/trust" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExp, setMobileExp] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setIsDark(stored ? stored === "dark" : true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl saturate-150 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="ss-container-nav flex items-center h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 pr-2 sm:pr-3">
          <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
            <Shield size={18} className="text-primary" />
          </div>
          <span className="text-[15px] font-bold tracking-tight">ScreenSentinel</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-2 xl:gap-3 lg:-translate-x-6 xl:-translate-x-10">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors">
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform ${dropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 min-w-[220px] rounded-xl border border-border bg-popover p-1.5 shadow-2xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.href}
                        className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="text-[13px] font-semibold text-foreground">{c.label}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{c.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right (desktop) */}
        <div className="hidden lg:flex items-center gap-2.5 ml-auto">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            {isDark ? <Sun size={15} className="text-muted-foreground" /> : <Moon size={15} className="text-muted-foreground" />}
          </button>
          <Link to="/contact" className="ss-btn ss-btn-primary text-[13px] px-5 py-2.5">
            Get Started
          </Link>
        </div>

        {/* Mobile toggles */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center"
          >
            {isDark ? <Sun size={14} className="text-muted-foreground" /> : <Moon size={14} className="text-muted-foreground" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/97 backdrop-blur-xl border-t border-border px-6 pb-6 pt-3">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExp(mobileExp === item.label ? null : item.label)}
                  className="w-full flex justify-between items-center py-3.5 text-[15px] font-semibold text-foreground border-b border-border"
                >
                  {item.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform ${mobileExp === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExp === item.label && (
                  <div className="pl-3 pb-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.href}
                        className="block py-2.5 text-sm text-muted-foreground border-b border-border"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className="block py-3.5 text-[15px] font-semibold text-foreground border-b border-border"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4">
            <Link to="/contact" className="ss-btn ss-btn-primary w-full justify-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
