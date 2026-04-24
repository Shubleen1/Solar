import { createFileRoute } from "@tanstack/react-router";
import teamImage from "@/assets/solar-team.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ratandeep Traders Solar Division" },
      { name: "description", content: "Learn about Ratandeep Traders, a trusted solar EPC contractor with proven expertise across Punjab, Rajasthan & Haryana." },
      { property: "og:title", content: "About Us — Ratandeep Traders Solar Division" },
      { property: "og:description", content: "Trusted solar solutions provider with a strong presence in North India." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-24">
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                Building a Sustainable Future with Solar Energy
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Ratandeep Traders and its business associates is a trusted solar solutions provider known for delivering reliable and high-performance solar installations across North India. With a strong and consistent presence in Punjab, Rajasthan, and Haryana, we handle residential, agricultural, and commercial solar projects with complete end-to-end EPC capabilities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For large-scale industrial and commercial requirements, we also operate pan-India, undertaking installations of 150 kW and above. We have earned a solid reputation for precise system design, practical on-site execution, and dependable long-term performance.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.15} className="relative">
              <img src={teamImage} alt="Ratandeep Traders solar team at work" className="rounded-2xl shadow-2xl" width={1280} height={720} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Values</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">What Drives Us</h2>
          </Reveal>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🤝", title: "Integrity", desc: "Transparent dealings and honest business practices in every project." },
              { icon: "👥", title: "Customer Focus", desc: "Solutions tailored to each client's unique requirements and budget." },
              { icon: "💡", title: "Innovation", desc: "Adopting the latest solar technologies for maximum efficiency." },
              { icon: "✅", title: "Quality", desc: "Only Tier-1 components and certified installation practices." },
            ].map((v) => (
              <StaggerItem key={v.title} className="rounded-2xl border bg-card p-8 text-center transition-all duration-300 hover:shadow-solar hover:-translate-y-1">
                <span className="text-4xl">{v.icon}</span>
                <h3 className="mt-4 font-bold text-card-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Future Goals</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">Our Vision Ahead</h2>
          </Reveal>
          <Stagger className="space-y-6" stagger={0.1}>
            {[
              { title: "Strengthen Scale of Operations", desc: "Expanding project capacity across residential, commercial, and industrial sectors." },
              { title: "Enhance Performance Standards", desc: "Refining installation quality, safety practices, and long-term system efficiency." },
              { title: "Broaden Market Presence", desc: "Increasing our active regions to deliver solar expertise to more communities." },
              { title: "Sustainable Energy Impact", desc: "Ensuring each project delivers maximum lifetime value and reduced carbon impact." },
            ].map((goal, i) => (
              <StaggerItem key={goal.title} direction="right" className="flex gap-6 rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-solar">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl gradient-solar text-lg font-bold" style={{ color: "oklch(1 0 0)" }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground">{goal.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{goal.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}
