import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../utils/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="site-root">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900&display=swap');

        :root {
          --bg: #09090b;
          --bg2: #111113;
          --bg3: #18181b;
          --surface: #1c1c1f;
          --border: rgba(255,255,255,0.07);
          --border-strong: rgba(255,255,255,0.14);
          --text: #f4f4f5;
          --text-muted: #a1a1aa;
          --text-subtle: #71717a;
          --accent: #10b981;
          --accent-hover: #0ea572;
          --accent-dim: rgba(16,185,129,0.1);
          --accent-border: rgba(16,185,129,0.22);
          --shadow: 0 1px 3px rgba(0,0,0,0.4);
        }
        [data-theme="light"] {
          --bg: #ffffff;
          --bg2: #f9fafb;
          --bg3: #f3f4f6;
          --surface: #ffffff;
          --border: rgba(0,0,0,0.08);
          --border-strong: rgba(0,0,0,0.15);
          --text: #09090b;
          --text-muted: #6b7280;
          --text-subtle: #9ca3af;
          --accent: #059669;
          --accent-hover: #047857;
          --accent-dim: rgba(5,150,105,0.07);
          --accent-border: rgba(5,150,105,0.18);
          --shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background-color: var(--bg);
          color: var(--text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition: background-color 0.25s ease, color 0.25s ease;
          line-height: 1.6;
        }
        .site-root { min-height: 100vh; display: flex; flex-direction: column; }
        main { flex: 1; }

        ::selection { background: var(--accent-dim); color: var(--accent); }

        /* Layout */
        .ss-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        @media(min-width:640px){ .ss-container { padding: 0 36px; } }
        @media(min-width:1024px){ .ss-container { padding: 0 56px; } }
        .ss-section { padding: 100px 0; }
        .ss-section-sm { padding: 64px 0; }

        /* Color tokens as classes */
        .t-text { color: var(--text); }
        .t-muted { color: var(--text-muted); }
        .t-subtle { color: var(--text-subtle); }
        .t-accent { color: var(--accent); }
        .bg-ss { background: var(--bg); }
        .bg-ss2 { background: var(--bg2); }
        .bg-ss3 { background: var(--bg3); }
        .bg-surface { background: var(--surface); }
        .border-ss { border-color: var(--border); }
        .border-ss-strong { border-color: var(--border-strong); }

        /* Card */
        .ss-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .ss-card:hover { border-color: var(--border-strong); }

        /* Pill */
        .ss-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 999px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--accent-dim); border: 1px solid var(--accent-border);
          color: var(--accent);
        }

        /* Buttons */
        .ss-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 999px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          text-decoration: none; border: none;
          transition: all 0.15s ease; white-space: nowrap;
        }
        .ss-btn-primary { background: var(--accent); color: #fff; }
        .ss-btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); }
        .ss-btn-ghost {
          background: transparent; color: var(--text);
          border: 1px solid var(--border-strong);
        }
        .ss-btn-ghost:hover { background: var(--bg3); border-color: var(--border-strong); }

        /* Divider */
        .ss-divider { border: none; border-top: 1px solid var(--border); }

        /* Image styles */
        .ss-img { width: 100%; display: block; object-fit: cover; }
        .ss-img-rounded { border-radius: 16px; overflow: hidden; }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes aFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes glow {
          0%,100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--bg3); border-radius: 3px; }
      `}</style>
    </QueryClientProvider>
  );
}
