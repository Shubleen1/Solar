import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-solar.jpg";
import servicesImage from "@/assets/solar-services.jpg";
import projectImage from "@/assets/solar-project.jpg";
// import solarLogo from "@/assets/solar-logo.svg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section } from "lucide-react";

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
          {/* <img src={solarLogo} alt="Solar Logo" className="animate-fade-up inline-block h-24 w-24 mb-6" style={{ color: "oklch(1 0 0)", animationDelay: "0.05s" }} /> */}
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

      {/* Savings Calculator Component */}
      <SavingsCalculator />

      {/* CTA - Original Orange Gradient Inline Section */}
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
              Call: 7087056330
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

// === CALC MODE TYPES ===
type CalcMode = "residential" | "commercial";

function SavingsCalculator() {
  const [mode, setMode] = useState<CalcMode>("residential");
  const isResidential = mode === "residential";
  
  // Residential: smaller bills, ₹8/unit, ₹60k/kW capex, govt subsidy applies
  // Commercial: larger bills, ₹10/unit avg, ₹50k/kW capex (bulk), no subsidy, accelerated depreciation benefit
  const billRange = isResidential
    ? { min: 1000, max: 50000, step: 500, default: 8000 }
    : { min: 20000, max: 500000, step: 5000, default: 100000 };
    
  const [bill, setBill] = useState(billRange.default);
  
  // Clamp bill when switching modes
  const clampedBill = Math.min(Math.max(bill, billRange.min), billRange.max);
  
  // Calculation differs per mode
  // Adjusting the commercial calculation: ₹20,000 bill now correctly maps to ~23 kW 
  const kwRequired = isResidential
    ? Math.max(1, Math.round(clampedBill / 1000)) 
    : Math.max(5, Math.round(clampedBill / 870)); // Adjusted divisor for commercial requirements
    
  const savingsRate = isResidential ? 0.9 : 0.75; // commercial offsets ~75% (load curve)
  const annualSavings = Math.round(clampedBill * 12 * savingsRate);
  
  const capexPerKw = isResidential ? 60000 : 50000;
  const subsidy = isResidential ? Math.min(78000, kwRequired >= 3 ? 78000 : 0) : 0;
  
  // Lifetime is 30 years
  const lifetime = annualSavings * 30;
  
  const handleBillChange = (v: number) => setBill(v);
  const handleModeSwitch = (next: CalcMode) => {
    setMode(next);
    setBill(next === "residential" ? 8000 : 100000);
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32" style={{ background: "oklch(0.18 0.03 260)" }}>
      {/* Purple glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "600px",
          height: "600px",
          background: "oklch(0.75 0.16 65)",
          filter: "blur(120px)",
          opacity: 0.15,
          borderRadius: "50%",
        }}
      />
      
      <div className="relative mx-auto max-w-5xl">
        {/* Massive Heading */}
        <div className="mb-16 text-center">
          <p className="text-2xl md:text-3xl font-bold uppercase tracking-[0.3em] text-white/60 mb-4">Estimate</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter text-white drop-shadow-2xl">
            Your<br/>Savings
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/60">
            Move the slider to your monthly electricity bill. We'll project the rest.
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-[1fr_360px] items-stretch">
          <div
            className="rounded-[32px] p-8 md:p-12"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
          >
            {/* Animated Mode Toggle */}
            <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1.5 gap-1">
              {(["residential", "commercial"] as CalcMode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => handleModeSwitch(m)}
                  className={`rounded-full px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    mode === m
                      ? "gradient-solar text-white shadow-solar"
                      : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="label-cinematic text-white/60">Monthly Bill</p>
                <p className="mt-2 text-5xl md:text-7xl font-black text-white">
                  ₹{clampedBill.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-right">
                <p className="label-cinematic text-white/60">System Size</p>
                <p className="mt-2 text-3xl md:text-4xl font-black text-gradient-solar">
                  {kwRequired} kW
                </p>
              </div>
            </div>
            
            <input
              type="range"
              min={billRange.min}
              max={billRange.max}
              step={billRange.step}
              value={clampedBill}
              onChange={(e) => handleBillChange(Number(e.target.value))}
              className="cinema-range mt-8 w-full"
            />
            
            <div className="mt-2 flex justify-between text-xs text-white/40">
              <span>₹{billRange.min.toLocaleString("en-IN")}</span>
              <span>₹{billRange.max.toLocaleString("en-IN")}</span>
            </div>
            
            <div className="mt-12 grid gap-6 grid-cols-2">
              {[
                { label: "Annual Savings", value: `₹${annualSavings.toLocaleString("en-IN")}` },
                { label: "30-yr Lifetime", value: `₹${(lifetime / 100000).toFixed(1)}L` },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                  <p className="label-cinematic text-white/50">{s.label}</p>
                  <p className="mt-2 text-2xl md:text-3xl font-black text-white truncate" title={s.value}>{s.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link
                to="/contact"
                className="inline-block rounded-full gradient-solar px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform hover:scale-[1.02] shadow-solar"
              >
                Lock This Estimate
              </Link>
            </div>
          </div>
          
          {/* Benefit Highlight Box */}
          <aside
            className="relative overflow-hidden rounded-[32px] p-8 md:p-10 flex flex-col justify-between"
            style={{
              background: isResidential
                ? "linear-gradient(160deg, #06b6d4 0%, #ec4899 100%)"
                : "linear-gradient(160deg, #f59e0b 0%, #7c3aed 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 30px 80px -20px rgba(236,72,153,0.4)",
            }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <p className="label-cinematic text-white/80">
                {isResidential ? "Government Subsidy" : "Business Benefit"}
              </p>
              <p className="mt-6 text-6xl md:text-7xl font-black text-white leading-none">
                {isResidential ? "FLAT ₹78,000" : "80%"}
              </p>
              <p className="mt-4 text-lg font-bold uppercase tracking-wide text-white">
                {isResidential ? "Subsidy Available" : "SLASH OPERATIONAL COSTS"}
              </p>
              <p className="mt-6 text-white/90 leading-relaxed">
                {isResidential ? (
                  <>For <span className="font-black">3 kW to 8 kW</span> solar plants!</>
                ) : (
                  <> <span className="font-black">Drastically reduce your heavy commercial electricity bills and instantly boost your business's bottom line.</span> </>
                )}
              </p>
            </div>
            <div className="relative mt-8 rounded-2xl bg-black/30 backdrop-blur p-4 border border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                {isResidential ? "Save ₹78,000 upfront · Start process" : "Tax savings · Talk to us"}
              </p>
            </div>
          </aside>
        </div>
        
        <p className="mt-6 text-center text-xs text-white/40">
          Indicative figures based on average North India irradiance. Final quote after site survey.
        </p>
      </div>
    </section>
  );
}