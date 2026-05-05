import { Code2, Globe, Smartphone, ShoppingCart, Search, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", desc: "Marketing sites, brand sites, and landing pages designed to convert.", points: ["Custom design", "SEO foundations", "CMS option"] },
  { icon: ShoppingCart, title: "E-commerce", desc: "Online stores ready to take orders, manage inventory and grow.", points: ["Payments setup", "Order dashboard", "WhatsApp / call CTAs"] },
  { icon: Code2, title: "Custom Software", desc: "Internal tools, dashboards and admin panels built around your workflow.", points: ["Auth & roles", "Reports & exports", "API integrations"] },
  { icon: Smartphone, title: "Web Apps", desc: "Full-stack web applications — booking systems, portals, SaaS MVPs.", points: ["Responsive UI", "Cloud hosting", "Realtime features"] },
  { icon: Search, title: "SEO & Analytics", desc: "Get found, measure what matters, and improve month over month.", points: ["On-page SEO", "GA4 setup", "Speed audits"] },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing care for your site or software — updates, fixes, improvements.", points: ["Monthly retainers", "Priority fixes", "Hosting help"] },
];

const Services = () => (
  <>
    <section className="container py-20 md:py-28 max-w-3xl">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Services</p>
      <h1 className="text-5xl md:text-6xl font-bold">Everything you need to <span className="text-gradient">go digital</span> — handled.</h1>
      <p className="text-lg text-muted-foreground mt-6">From the first wireframe to a live, supported product. Pick what you need, we'll handle the rest.</p>
    </section>

    <section className="container pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <div key={s.title} className="bg-gradient-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-elegant transition-all duration-300">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground mb-5">
            <s.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
          <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>
          <ul className="space-y-2 text-sm">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    <section className="container pb-24">
      <div className="rounded-3xl border border-primary/30 bg-gradient-card p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Not sure where to start?</h2>
          <p className="text-muted-foreground">Tell us your goal — we'll suggest the smallest first step that gets you moving.</p>
        </div>
        <Button variant="hero" size="lg" asChild><Link to="/contact">Talk to us <ArrowRight /></Link></Button>
      </div>
    </section>
  </>
);

export default Services;
