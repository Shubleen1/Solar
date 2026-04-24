import { createFileRoute, Link } from "@tanstack/react-router";
import projectImage from "@/assets/solar-project.jpg";
import heroImage from "@/assets/hero-solar.jpg";
import servicesImage from "@/assets/solar-services.jpg";
import teamImage from "@/assets/solar-team.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Ratandeep Traders Solar Division" },
      { name: "description", content: "View our portfolio of successful solar installations across Punjab, Rajasthan & Haryana. From 20kW residential to 300kW industrial projects." },
      { property: "og:title", content: "Our Projects — Ratandeep Traders Solar Division" },
      { property: "og:description", content: "Portfolio of successful solar installations across North India." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { title: "Ardhan Plywood", location: "Hanumangarh Town", kw: "300 kW", type: "Industrial", image: projectImage },
  { title: "Gurpreet Industries", location: "Hanumangarh Junction", kw: "100 kW", type: "Industrial", image: heroImage },
  { title: "Kia Showroom", location: "Hisar", kw: "150 kW", type: "Commercial", image: servicesImage },
  { title: "Residential Project", location: "Patiala, Punjab", kw: "20 kW", type: "Residential", image: teamImage },
];

function ProjectsPage() {
  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Portfolio</span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl text-foreground">Select Projects</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A selection from our extensive portfolio of solar installations across North India
            </p>
          </Reveal>

          <Stagger className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <StaggerItem key={p.title} className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-solar-lg hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.image} alt={`${p.title} solar installation`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "oklch(0.75 0.16 65 / 90%)", color: "oklch(1 0 0)" }}>{p.kw}</span>
                    <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "oklch(1 0 0 / 20%)", color: "oklch(1 0 0)", backdropFilter: "blur(8px)" }}>{p.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-card-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {p.location}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 gradient-solar">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold" style={{ color: "oklch(1 0 0)" }}>Have a Project in Mind?</h2>
          <p className="mt-4 text-lg" style={{ color: "oklch(1 0 0 / 80%)" }}>Let us design the perfect solar solution for your needs.</p>
          <Link to="/contact" className="mt-8 inline-block rounded-xl px-8 py-4 text-sm font-semibold transition-all hover:scale-105" style={{ background: "oklch(1 0 0)", color: "oklch(0.55 0.15 50)" }}>
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
