import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const message = data.get("message");
    const body = encodeURIComponent(`Hi DateTech,\n\n${message}\n\n— ${name}`);
    window.location.href = `mailto:datetechsolution@gmail.com?subject=${encodeURIComponent("New project enquiry")}&body=${body}`;
    toast({ title: "Opening your email…", description: "We'll get back to you within one business day." });
  };

  return (
    <section className="container py-20 md:py-28">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Contact</p>
        <h1 className="text-5xl md:text-6xl font-bold">Let's <span className="text-gradient">build something</span> together.</h1>
        <p className="text-lg text-muted-foreground mt-6">Tell us a bit about your project. We'll reply within one business day with thoughts, questions and next steps.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, label: "Call us", value: "+91-9917615189", href: "tel:+919917615189" },
            { icon: MessageCircle, label: "WhatsApp", value: "+91-9917615189", href: "https://wa.me/919917615189" },
            { icon: Mail, label: "Email", value: "datetechsolution@gmail.com", href: "mailto:datetechsolution@gmail.com" },
            { icon: MapPin, label: "Location", value: "Bareilly, Uttar Pradesh, India" },
          ].map((c) => {
            const Inner = (
              <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-gradient-card border border-border rounded-3xl p-8 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@business.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Project type</Label>
            <Input id="subject" name="subject" placeholder="Website, web app, e-commerce…" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about it</Label>
            <Textarea id="message" name="message" required rows={6} placeholder="What are you trying to build? What's the goal?" />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
