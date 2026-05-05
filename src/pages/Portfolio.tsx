import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />

      <section className="bg-hero grain pt-40 pb-24">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            ✦ The work · 2021 — 2026
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-black max-w-5xl">
            Real businesses.<br /><em className="text-grad-primary not-italic">Real</em> results.
          </h1>
          <p className="mt-8 text-muted-foreground max-w-2xl text-lg">
            A handpicked selection of recent projects — from heritage food brands to independent
            healthcare practices. Every site below is live, in production, and serving real customers daily.
          </p>
        </div>
      </section>

      <section className="container py-24 space-y-32">
        {projects.map((p, idx) => (
          <article key={p.slug} className="grid md:grid-cols-12 gap-10 items-center">
            <div className={`md:col-span-7 ${idx % 2 ? "md:order-2" : ""}`}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="block group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all shadow-soft"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={`Screenshot of ${p.client} website`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </a>
            </div>
            <div className={`md:col-span-5 ${idx % 2 ? "md:order-1" : ""}`}>
              <div className="flex justify-between text-xs font-mono text-muted-foreground mb-4">
                <span>0{idx + 1} / {projects.length.toString().padStart(2, "0")}</span>
                <span>{p.category} · {p.year}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                {p.client}
              </h2>
              <p className="font-display italic text-2xl text-muted-foreground mt-3">
                "{p.title}"
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.services.map(s => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Visit live site <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="container py-24">
        <div className="rounded-[2rem] p-10 md:p-16 bg-card border border-border text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
            Your project could be <em className="text-grad-primary not-italic">next</em>.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            We take on a limited number of projects each quarter to keep quality high. Get in touch early.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 px-8 h-14 rounded-full bg-grad-primary text-primary-foreground font-semibold shadow-glow"
          >
            Start a conversation →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
