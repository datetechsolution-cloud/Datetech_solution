import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Globe, Sparkles, Zap, Shield } from
"lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const features = [
{ icon: Globe, title: "Web Development", desc: "Custom websites built with modern frameworks — fast, accessible, beautifully crafted." },
{ icon: Code2, title: "Custom Software", desc: "Tailored business software, 1 dashboards and internal tools that fit how you actually work." },
{ icon: Smartphone, title: "Mobile-Ready", desc: "Every product ships responsive, performant, and ready for any screen your users bring." },
{ icon: Zap, title: "Performance First", desc: "Optimised builds, lightning page loads, and SEO foundations baked in from day one." },
{ icon: Shield, title: "Reliable Support", desc: "Direct line to the team that built it. Real humans, fast responses, honest advice." },
{ icon: Sparkles, title: "Design Forward", desc: "Interfaces that feel as good as they look — thoughtful details, clear hierarchy." },
];
const Home = () => (
<>
<Helmet>
<title>Datetech Solution | Software & Web Development Company India</
title>
<meta
name="description"
content="Datetech Solution provides website development, software
development, SEO, web applications and digital solutions for businesses across
India."
/>
<meta
name="keywords"
content="software development company, web development company india,
website development, SEO services, custom software, React developers"
/>
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Datetech Solution" />
<meta
property="og:description"
content="Software development and web development company in India."
/>
<meta property="og:type" content="website" />
<meta
property="og:url"
content="https://www.datetechsolution.store/"
/>
2
<link
rel="canonical"
href="https://www.datetechsolution.store/"
/>
<script type="application/ld+json">
{JSON.stringify({
"@context": "https://schema.org",
"@type": "Organization",
name: "Datetech Solution",
url: "https://www.datetechsolution.store",
logo: "https://www.datetechsolution.store/logo.png",
contactPoint: {
"@type": "ContactPoint",
telephone: "+91-9917615189",
contactType: "customer service",
},
address: {
"@type": "PostalAddress",
addressLocality: "Bareilly",
addressRegion: "Uttar Pradesh",
addressCountry: "India",
},
})}
</script>
</Helmet>
<section className="relative overflow-hidden">
<img src={heroBg} alt="Datetech Solution software development company"
width={1920} height={1080} className="absolute inset-0 w-full h-full objectcover opacity-40" />
<div className="absolute inset-0 grid-bg opacity-30" />
<div className="absolute inset-0 bg-gradient-to-b from-background/60 viabackground/80 to-background" />
<div className="container relative py-24 md:py-36">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 roundedfull border border-primary/30 bg-primary/5 backdrop-blur text-sm text-primary
mb-8">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
Bareilly · India · Available for new projects
</div>
<h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
We build <span className="text-gradient">websites & software</span>
that move your business forward.
</h1>
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl
3
mb-10">
DateTech Solution is a software development and web development
company helping businesses across India build modern digital products.
</p>
<div className="flex flex-wrap gap-4">
<Button variant="hero" size="xl" asChild>
<Link to="/contact">Start a Project <ArrowRight /></Link>
</Button>
<Button variant="outlineGlow" size="xl" asChild>
<Link to="/portfolio">See Our Work</Link>
</Button>
</div>
</div>
</div>
</section>
</>
);
export default Home;