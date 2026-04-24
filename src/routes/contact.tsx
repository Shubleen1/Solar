import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ratandeep Traders Solar Division" },
      { name: "description", content: "Get in touch with Ratandeep Traders for a free solar consultation. Call 98131-16005 or email ratandeeptraders1@gmail.com." },
      { property: "og:title", content: "Contact Us — Ratandeep Traders Solar Division" },
      { property: "og:description", content: "Get a free solar consultation for your home, business, or farm." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact Us</span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl text-foreground">Get in Touch</h1>
            <p className="mt-4 text-muted-foreground">Ready to go solar? Reach out for a free consultation.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: "📞", label: "Phone", value: "98131-16005, 86994-09973", href: "tel:9813116005" },
                    { icon: "✉️", label: "Email", value: "ratandeeptraders1@gmail.com", href: "mailto:ratandeeptraders1@gmail.com" },
                    { icon: "📍", label: "Location", value: "Punjab, India", href: undefined },
                    { icon: "🏢", label: "GSTIN", value: "03ABJPD8951H1ZP", href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-xl">{item.icon}</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="font-bold text-card-foreground mb-2">Contact Person</h3>
                <p className="text-sm text-muted-foreground">K. Bansal & K. Singla</p>
                <p className="text-sm text-muted-foreground mt-1">Available Mon-Sat, 9 AM - 7 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border bg-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-solar mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-8 w-8" style={{ color: "oklch(1 0 0)" }}><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">Request a Free Quote</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                      <input required type="text" className="mt-1 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
                      <input required type="tel" className="mt-1 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your phone" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input type="email" className="mt-1 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your email" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Type</label>
                    <select className="mt-1 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Agricultural</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                    <textarea rows={4} className="mt-1 w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full rounded-xl py-3.5 text-sm font-semibold gradient-solar shadow-solar transition-all hover:shadow-solar-lg hover:scale-[1.02]" style={{ color: "oklch(1 0 0)" }}>
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
