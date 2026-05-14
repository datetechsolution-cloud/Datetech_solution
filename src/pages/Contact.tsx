import { Helmet } from "react-helmet-async";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

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
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = encodeURIComponent(
      `Hi DateTech Solution,

Name: ${name}
Email: ${email}
Project Type: ${subject}

Project Details:
${message}

Regards,
${name}`
    );

    window.location.href = `mailto:datetechsolution@gmail.com?subject=${encodeURIComponent(
      "New Project Enquiry"
    )}&body=${body}`;

    toast({
      title: "Opening your email app...",
      description:
        "We’ll get back to you within one business day.",
    });
  };

  const contactCards = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9917615189",
      href: "tel:+919917615189",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9917615189",
      href: "https://api.whatsapp.com/send?phone=919917615189",
    },
    {
      icon: Mail,
      label: "Email",
      value: "datetechsolution@gmail.com",
      href: "mailto:datetechsolution@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bareilly, Uttar Pradesh, India",
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Contact Datetech Solution | Website & Software Development
        </title>

        <meta
          name="description"
          content="Contact Datetech Solution for website development, software development, SEO services, ecommerce websites and digital solutions across India."
        />

        <meta
          name="keywords"
          content="contact software company, website development company india, SEO agency contact, software developers Bareilly"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Contact Datetech Solution"
        />

        <meta
          property="og:description"
          content="Get in touch with Datetech Solution for your website, software or SEO project."
        />

        <meta
          property="og:url"
          content="https://www.datetechsolution.store/contact"
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://www.datetechsolution.store/contact"
        />
      </Helmet>

      {/* Main Section */}
      <section className="container py-20 md:py-28">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Let's{" "}
            <span className="text-gradient">
              build something
            </span>{" "}
            together.
          </h1>

          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Looking for website development, custom software,
            SEO services or digital solutions? Tell us about
            your project and we’ll get back to you within one
            business day.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((c) => {
              const Inner = (
                <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        {c.label}
                      </p>

                      <p className="font-medium break-all">
                        {c.value}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={
                    c.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gradient-card border border-border rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Your Name
                </Label>

                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@business.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject">
                Project Type
              </Label>

              <Input
                id="subject"
                name="subject"
                placeholder="Website, SEO, Software, E-commerce..."
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Project Details
              </Label>

              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project, goals, features and requirements..."
              />
            </div>

            {/* Button */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;