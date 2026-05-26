import { Mail, MapPin, MessageSquare, Building2 } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="ss-container pt-20 pb-12 text-center">
        <span className="accent-chip mx-auto">Contact</span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          We'd love <span className="grad-text">to hear from you.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Questions, partnerships, security concerns, or just saying hi — we read everything.
        </p>
      </section>

      <section className="ss-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:screensentinel.ai@gmail.com?subject=Website%20enquiry";
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Subject</span>
              <select
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary"
                defaultValue="support"
              >
                <option value="support">Technical support</option>
                <option value="enterprise">Enterprise enquiry</option>
                <option value="press">Press / media</option>
                <option value="security">Security concern</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </label>
            <button type="submit" className="ss-btn ss-btn-primary px-7 h-12 text-[15px] w-full md:w-auto">
              Send message
            </button>
            <p className="text-xs text-muted-foreground">
              For urgent security concerns, please prefix your subject line with <strong className="text-foreground">Security:</strong>.
            </p>
          </form>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <Mail size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email us directly</h3>
              <a
                href="mailto:screensentinel.ai@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              >
                screensentinel.ai@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <MapPin size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">London HQ</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Shoreditch, London<br />United Kingdom
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <Building2 size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deploying to a team of 50+? Mention "Enterprise" in your message and we'll prioritise your reply.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <MessageSquare size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Response time</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We aim to reply within 1 business day. Security reports get a same-day acknowledgement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
