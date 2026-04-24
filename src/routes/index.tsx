import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-solar.jpg";
import servicesImage from "@/assets/solar-services.jpg";
import projectImage from "@/assets/solar-project.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ratandeep Traders — Solar Division | Trusted Solar EPC Contractor" },
      { name: "description", content: "Leading solar EPC contractor providing end-to-end solar solutions across North India. Residential, commercial, industrial & agricultural solar installations." },
      { property: "og:title", content: "Ratandeep Traders — Solar Division" },
      { property: "og:description", content: "Trusted solar solutions provider delivering reliable and high-performance solar installations across North India." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Solar farm at golden hour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="animate-fade-up">
            <span
              className="inline-block rounded-full px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-6 border"
              style={{ color: "oklch(0.75 0.16 65)", borderColor: "oklch(0.75 0.16 65 / 30%)", background: "oklch(0.75 0.16 65 / 10%)" }}
            >
              Trusted Solar EPC Contractor
            </span>
          </div>
          <h1 className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl" style={{ color: "oklch(0.98 0.005 90)", animationDelay: "0.1s" }}>
            Powering India with{" "}
            <span className="text-gradient-solar">Clean Energy</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "oklch(0.96 0.005 90 / 70%)", animationDelay: "0.2s" }}>
            End-to-end solar solutions for residential, commercial, industrial and agricultural sectors across Punjab, Rajasthan & Haryana.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact" className="rounded-xl px-8 py-4 text-sm font-semibold gradient-solar shadow-solar-lg transition-all duration-300 hover:scale-105" style={{ color: "oklch(1 0 0)" }}>
              Get Free Consultation
            </Link>
            <Link to="/projects" className="rounded-xl border px-8 py-4 text-sm font-semibold transition-all duration-200 hover:bg-solar/10" style={{ color: "oklch(0.96 0.005 90)", borderColor: "oklch(1 0 0 / 20%)" }}>
              View Projects
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "oklch(0.96 0.005 90 / 40%)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 mx-auto max-w-5xl px-6">
        <div className="rounded-2xl p-8 shadow-xl" style={{ background: "oklch(1 0 0)" }}>
          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4" stagger={0.08} amount={0.3}>
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50MW+", label: "Capacity Installed" },
              { value: "3", label: "States Covered" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-gradient-solar">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Built on Trust, Driven by Quality</h2>
          </Reveal>
          <Stagger className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "⚡", title: "End-to-End EPC", desc: "Complete solar solutions from site survey to commissioning, handled entirely by our expert team." },
              { icon: "🛡️", title: "Tier-1 Components", desc: "We partner with Waaree, Adani, Luminous, Reliance & Jackson for guaranteed performance." },
              { icon: "🎯", title: "Proven Track Record", desc: "Successful installations across Punjab, Rajasthan & Haryana with pan-India capability for 150kW+." },
            ].map((item) => (
              <StaggerItem key={item.title} className="group rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-solar hover:-translate-y-1">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-5 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6" style={{ background: "oklch(0.18 0.03 260)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "oklch(0.75 0.16 65)" }}>Our Services</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "oklch(0.96 0.005 90)" }}>
                Complete Solar Solutions for Every Need
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>
                From residential rooftops to large-scale industrial installations, we deliver customized solar systems designed for maximum efficiency and long-term reliability.
              </p>
              <ul className="mt-8 space-y-4">
                {["Residential Solar Systems", "Commercial & Industrial Projects", "Agricultural Solar Pumping", "Net Metering & DISCOM Compliance"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.96 0.005 90 / 80%)" }}>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "oklch(0.75 0.16 65 / 20%)" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5" style={{ color: "oklch(0.75 0.16 65)" }}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold gradient-solar shadow-solar transition-all hover:scale-105" style={{ color: "oklch(1 0 0)" }}>
                View All Services
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </Reveal>
            <Reveal direction="left" delay={0.15} className="relative">
              <img src={servicesImage} alt="Solar panel installation" className="rounded-2xl shadow-2xl" width={1280} height={720} loading="lazy" />
              <div className="absolute -bottom-6 -left-6 rounded-xl p-6 shadow-xl" style={{ background: "oklch(1 0 0)" }}>
                <p className="text-2xl font-extrabold text-gradient-solar">100%</p>
                <p className="text-xs font-medium text-muted-foreground">Client Satisfaction</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Featured Projects</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Our Work Speaks for Itself</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            <StaggerItem className="group relative overflow-hidden rounded-2xl">
              <img src={projectImage} alt="Industrial solar installation" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "oklch(0.75 0.16 65 / 20%)", color: "oklch(0.75 0.16 65)" }}>300 kW</span>
                <h3 className="mt-2 text-lg font-bold" style={{ color: "oklch(0.96 0.005 90)" }}>Ardhan Plywood, Hanumangarh</h3>
                <p className="text-sm" style={{ color: "oklch(0.96 0.005 90 / 60%)" }}>Large-scale industrial rooftop installation</p>
              </div>
            </StaggerItem>
            <StaggerItem className="grid gap-6">
              {[
                { title: "Gurpreet Industries", location: "Hanumangarh Junction", kw: "100 kW" },
                { title: "Kia Showroom", location: "Hisar", kw: "150 kW" },
              ].map((p) => (
                <div key={p.title} className="group flex items-center gap-6 rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-solar hover:-translate-y-1">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl gradient-solar">
                    <span className="text-lg font-bold" style={{ color: "oklch(1 0 0)" }}>{p.kw}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-card-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.location}</p>
                  </div>
                </div>
              ))}
            </StaggerItem>
          </Stagger>
          <Link to="/projects" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View Full Portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Brands We Partner With</span>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {["Waaree", "Adani", "Luminous", "Reliance", "Jackson"].map((brand) => (
              <span key={brand} className="text-xl font-bold tracking-wide text-foreground/30 transition-colors hover:text-primary">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 gradient-solar relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(1 0 0) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "oklch(1 0 0)" }}>Ready to Go Solar?</h2>
          <p className="mt-4 text-lg" style={{ color: "oklch(1 0 0 / 80%)" }}>
            Get a free consultation and custom solar solution designed for your needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-xl px-8 py-4 text-sm font-semibold transition-all hover:scale-105" style={{ background: "oklch(1 0 0)", color: "oklch(0.55 0.15 50)" }}>
              Get Free Quote
            </Link>
            <a href="tel:9813116005" className="rounded-xl border px-8 py-4 text-sm font-semibold transition-all hover:scale-105" style={{ borderColor: "oklch(1 0 0 / 30%)", color: "oklch(1 0 0)" }}>
              Call: 98131-16005
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
