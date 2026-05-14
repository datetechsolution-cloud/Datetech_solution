import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const projects = [
  {
    name: "Gupta Sweets & Caterers",
    url: "https://guptasweetscaterers.in/",
    tag: "Hospitality · Brand Website",
    desc:
      "A conversion-focused business website for a 30+ year sweets and catering brand in Bareilly with gallery, WhatsApp CTAs and mobile-first experience.",
    accent: "from-amber-500 to-rose-500",
    year: "2024",
  },

  {
    name: "Dr. Shivali Physio",
    url: "https://www.drshivaliphysio.com",
    tag: "Healthcare · Practice Website",
    desc:
      "A trust-focused physiotherapy website with appointment booking, SEO optimization, healthcare branding and responsive design.",
    accent: "from-sky-500 to-indigo-500",
    year: "2024",
  },
];

const Portfolio = () => (
  <>
    {/* SEO */}
    <Helmet>
      <title>
        Portfolio | Datetech Solution
      </title>

      <meta
        name="description"
        content="Explore website development and software projects built by Datetech Solution for healthcare, hospitality and growing businesses across India."
      />

      <meta
        name="keywords"
        content="website portfolio, web development projects, software development company portfolio, business website design, healthcare website development"
      />

      <meta name="robots" content="index, follow" />

      <meta
        property="og:title"
        content="Datetech Solution Portfolio"
      />

      <meta
        property="og:description"
        content="See real client projects developed by Datetech Solution."
      />

      <meta
        property="og:url"
        content="https://www.datetechsolution.store/portfolio"
      />

      <meta property="og:type" content="website" />

      <link
        rel="canonical"
        href="https://www.datetechsolution.store/portfolio"
      />
    </Helmet>

    {/* Hero Section */}
    <section className="container py-20 md:py-28">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
        Selected Work
      </p>

      <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
        Real businesses.{" "}
        <span className="text-gradient">
          Real results.
        </span>
      </h1>

      <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
        Explore a selection of websites and
        digital products developed by Datetech
        Solution for businesses across India.
        Every project is designed for performance,
        responsiveness and real-world growth.
      </p>
    </section>

    {/* Projects */}
    <section className="container pb-24 space-y-10">
      {projects.map((p, i) => (
        <article
          key={p.name}
          className="group bg-gradient-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-elegant"
        >
          <div
            className={`grid md:grid-cols-2 ${
              i % 2
                ? "md:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            {/* Preview */}
            <div
              className={`relative aspect-[4/3] md:aspect-auto bg-gradient-to-br ${p.accent} overflow-hidden`}
            >
              <iframe
                src={p.url}
                title={p.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full pointer-events-none scale-[0.6] origin-top-left"
                style={{
                  width: "166%",
                  height: "166%",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-primary uppercase tracking-widest">
                  {p.tag}
                </span>

                <span className="text-xs text-muted-foreground">
                  · {p.year}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {p.name}
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {p.desc}
              </p>

              <div>
                <Button
                  variant="outlineGlow"
                  asChild
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Live Website{" "}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>

    {/* CTA */}
    <section className="container pb-24">
      <div className="rounded-3xl border border-primary/30 bg-gradient-card p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your project could be next.
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          We work with a limited number of
          clients to ensure every project gets
          full attention, modern design and
          long-term support.
        </p>

        <Button
          variant="hero"
          size="lg"
          asChild
        >
          <Link to="/contact">
            Start the Conversation{" "}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default Portfolio;