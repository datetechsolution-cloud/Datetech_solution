import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles, Rocket, Layers, Zap } from "lucide-react";
import { projects } from "@/data/projects";

const services = [
  { icon: Code2, title: "Web Development", desc: "Fast, accessible sites built with React, Next & Tailwind. Pixel-perfect, always." },
  { icon: Layers, title: "Custom Software", desc: "Internal tools, dashboards and SaaS MVPs that ship in weeks — not quarters." },
  { icon: Sparkles, title: "Brand & UI Design", desc: "Identity systems and interfaces that make small teams look enormous." },
  { icon: Rocket, title: "Launch & SEO", desc: "From DNS to Lighthouse 100s. We make sure your work gets found." },
];

const stats = [
  { k: "30+", v: "Projects shipped" },
  { k: "12", v: "Industries served" },
  { k: "98%", v: "Client retention" },
  { k: "<14d", v: "Avg. time to launch" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative bg-hero grain pt-40 pb-32">
        <div className="container relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            ✦ Independent studio · est. 2021
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] font-black max-w-6xl">
            We build <em className="text-grad-primary not-italic">websites</em> & software
            <br />for brands that <span className="italic font-light">refuse</span> to look generic.
          </h1>
          <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-6">
            <Button asChild size="lg" className="bg-grad-primary text-primary-foreground hover:opacity-90 rounded-full h-14 px-8 text-base font-semibold shadow-glow">
              <a href="#contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full h-14 px-8 text-base">
              <Link to="/portfolio">See our work →</Link>
            </Button>
            <p className="text-muted-foreground text-sm md:ml-6 max-w-xs">
              A 4-person studio shipping serious work for sweet shops, clinics, and startups across India.
            </p>
          </div>
        </div>

        {/* marquee */}
        <div className="mt-32 overflow-hidden border-y border-border/50 py-6 bg-card/40">
          <div className="flex gap-16 marquee whitespace-nowrap font-display text-3xl md:text-5xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                <span>React</span><span className="text-primary">✦</span>
                <span>Next.js</span><span className="text-primary">✦</span>
                <span>TypeScript</span><span className="text-primary">✦</span>
                <span>Tailwind</span><span className="text-primary">✦</span>
                <span>Supabase</span><span className="text-primary">✦</span>
                <span>Stripe</span><span className="text-primary">✦</span>
                <span>Figma</span><span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.v} className="border-l-2 border-primary pl-5">
              <p className="font-display text-5xl md:text-6xl font-bold">{s.k}</p>
              <p className="text-muted-foreground mt-2 text-sm">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">— What we do</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold max-w-3xl">
              Small team. <em className="text-grad-primary not-italic">Big</em> output.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every engagement is led by a senior. No account managers, no handoffs, no fluff —
            just designers and engineers who care about the craft.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-grad-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-2">0{i + 1}</p>
                  <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold">Selected work</h2>
          <Link to="/portfolio" className="font-mono text-sm hover:text-primary inline-flex items-center gap-2">
            View full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(p => (
            <Link
              key={p.slug}
              to="/portfolio"
              className="group block rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.client}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center text-xs font-mono text-muted-foreground mb-3">
                  <span>{p.category}</span><span>{p.year}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {p.client}
                </h3>
                <p className="text-muted-foreground mt-2">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container py-24">
        <div className="relative rounded-[2.5rem] p-10 md:p-20 bg-grad-accent grain overflow-hidden">
          <Zap className="absolute -top-8 -right-8 w-64 h-64 text-background/10 rotate-12" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/80 mb-4">— Let's build</p>
          <h2 className="font-display text-5xl md:text-8xl font-bold text-background max-w-4xl leading-[0.95]">
            Got an idea?<br />We'll ship it.
          </h2>
          <p className="text-background/80 mt-8 max-w-xl text-lg">
            Tell us about your project — a sentence is enough. We reply within one business day with a plan and a price.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full h-14 px-8 bg-background text-foreground hover:bg-background/90 text-base font-semibold">
              <a href="mailto:hello@pixelcraft.dev">hello@pixelcraft.dev</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full h-14 px-8 text-base text-background hover:bg-background/10 hover:text-background">
              <a href="tel:+919800012345">+91 98XXX 12345</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
