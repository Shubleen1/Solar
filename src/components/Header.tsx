import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-solar/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-solar">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="4" fill="currentColor" className="text-primary-foreground" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" className="text-primary-foreground" />
            </svg>
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-solar-foreground" style={{ color: "oklch(0.96 0.005 90)" }}>
              Ratandeep Traders
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: "oklch(0.75 0.16 65)" }}>
              Solar Division
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-solar/15 text-solar"
                    : "text-solar-foreground/70 hover:text-solar hover:bg-solar/5"
                }`}
                style={!isActive ? { color: "oklch(0.96 0.005 90 / 70%)" } : { color: "oklch(0.75 0.16 65)" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 rounded-lg px-5 py-2.5 text-sm font-semibold gradient-solar shadow-solar transition-all duration-200 hover:shadow-solar-lg hover:scale-105"
            style={{ color: "oklch(1 0 0)" }}
          >
            Get Quote
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          style={{ color: "oklch(0.96 0.005 90)" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-solar/10 bg-navy/98 backdrop-blur-md px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              style={{ color: location.pathname === link.to ? "oklch(0.75 0.16 65)" : "oklch(0.96 0.005 90 / 80%)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
