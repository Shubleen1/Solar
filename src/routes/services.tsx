import { createFileRoute, Link } from "@tanstack/react-router";
import servicesImage from "@/assets/solar-services.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Solar Services — Ratandeep Traders" },
      { name: "description", content: "Complete solar EPC services including residential, commercial, industrial and agricultural solar installations with Tier-1 components." },
      { property: "og:title", content: "Solar Services — Ratandeep Traders" },
      { property: "og:description", content: "End-to-end solar solutions from site survey to commissioning." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden" style={{ background: "oklch(0.18 0.03 260)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.75 0.16 65)" }}>Our Services</span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl" style={{ color: "oklch(0.96 0.005 90)" }}>
                Complete Solar EPC Solutions
              </h1>
              <p className="mt-6 text-base leading-relaxed" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>
                From initial site survey to final commissioning, we handle every aspect of your solar installation with precision and expertise.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.15}>
              <img src={servicesImage} alt="Solar installation" className="rounded-2xl shadow-2xl" width={1280} height={720} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-8 md:grid-cols-2">
            {[
              { icon: "🏠", title: "Residential Solar", desc: "Rooftop solar systems for homes, designed to reduce electricity bills and provide energy independence. Includes net-metering support and complete documentation.", kw: "1-20 kW" },
              { icon: "🏢", title: "Commercial Solar", desc: "Large-scale rooftop and ground-mounted systems for offices, showrooms, and commercial establishments. Optimized for maximum ROI and energy savings.", kw: "20-500 kW" },
              { icon: "🏭", title: "Industrial Solar", desc: "High-capacity solar installations for factories, warehouses, and manufacturing units. Pan-India capability for projects 150 kW and above.", kw: "150 kW+" },
              { icon: "🌾", title: "Agricultural Solar", desc: "Solar pumping solutions and farm installations designed for Indian agricultural needs. Subsidy assistance and government scheme support included.", kw: "5-50 kW" },
            ].map((s) => (
              <StaggerItem key={s.title} className="rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-solar hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{s.icon}</span>
                  <span className="rounded-full px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground">{s.kw}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-card-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">How We Work</h2>
            <p className="mt-3 text-muted-foreground">A structured, transparent & time-bound approach for smooth project delivery</p>
          </Reveal>
          <Stagger className="space-y-6" stagger={0.1}>
            {[
              { step: "01", title: "Site Survey & Feasibility", items: ["Location assessment & shadow analysis", "Load evaluation & system feasibility", "Client requirement finalization"] },
              { step: "02", title: "System Design & Engineering", items: ["Customized solar system design", "Structural & electrical planning", "Compliance with MNRE & DISCOM norms"] },
              { step: "03", title: "Material Procurement", items: ["Tier-1 solar modules & branded inverters", "Quality-tested mounting structures", "Certified BOS components"] },
              { step: "04", title: "Installation & Execution", items: ["Professional structure erection", "Safe & efficient module installation", "DC/AC cabling, earthing & protection"] },
              { step: "05", title: "Testing & Commissioning", items: ["System testing & performance verification", "Net-metering support", "Final handover with documentation"] },
            ].map((p) => (
              <StaggerItem key={p.step} direction="right" className="flex gap-6 rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-solar">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl gradient-solar text-lg font-bold" style={{ color: "oklch(1 0 0)" }}>
                  {p.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">{p.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3 shrink-0 text-primary"><path d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 gradient-solar">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold" style={{ color: "oklch(1 0 0)" }}>Need a Custom Solar Solution?</h2>
          <p className="mt-4 text-lg" style={{ color: "oklch(1 0 0 / 80%)" }}>Contact us for a free site assessment and customized proposal.</p>
          <Link to="/contact" className="mt-8 inline-block rounded-xl px-8 py-4 text-sm font-semibold transition-all hover:scale-105" style={{ background: "oklch(1 0 0)", color: "oklch(0.55 0.15 50)" }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
