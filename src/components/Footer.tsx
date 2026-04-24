import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="gradient-navy border-t border-solar/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-solar">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="4" fill="currentColor" style={{ color: "oklch(1 0 0)" }} />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" style={{ color: "oklch(1 0 0)" }} />
                </svg>
              </div>
              <div>
                <p className="font-bold" style={{ color: "oklch(0.96 0.005 90)" }}>Ratandeep Traders</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: "oklch(0.75 0.16 65)" }}>Solar Division</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>
              Trusted solar EPC contractor delivering reliable and high-performance solar installations across North India.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "oklch(0.75 0.16 65)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {[{ to: "/about", label: "About Us" }, { to: "/services", label: "Services" }, { to: "/projects", label: "Projects" }, { to: "/contact", label: "Contact" }].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-solar" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "oklch(0.75 0.16 65)" }}>Services</h4>
            <ul className="space-y-3">
              {["Residential Solar", "Commercial Solar", "Industrial Solar", "Agricultural Solar"].map(s => (
                <li key={s} className="text-sm" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: "oklch(0.75 0.16 65)" }}>Contact</h4>
            <ul className="space-y-3 text-sm" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "oklch(0.75 0.16 65)" }}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>98131-16005, 86994-09973</span>
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "oklch(0.75 0.16 65)" }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                </svg>
                <span>ratandeeptraders1@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "oklch(0.75 0.16 65)" }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8" style={{ borderColor: "oklch(1 0 0 / 8%)" }}>
          <p className="text-center text-xs" style={{ color: "oklch(0.96 0.005 90 / 40%)" }}>
            © {new Date().getFullYear()} Ratandeep Traders — Solar Division. All rights reserved. GSTIN: 03ABJPD8951H1ZP
          </p>
        </div>
      </div>
    </footer>
  );
}
