import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Work" },
  { to: "/#services", label: "Services" },
  { to: "/#contact", label: "Contact" },
];

export const Nav = () => {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="w-7 h-7 rounded-lg bg-grad-primary inline-block" />
          Datetech Solution<span className="text-primary">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`hover:text-primary transition-colors ${pathname === l.to ? "text-primary" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="default" size="sm" className="bg-grad-primary text-primary-foreground hover:opacity-90 rounded-full font-medium">
          <a href="#contact">Start a project →</a>
        </Button>
      </nav>
    </header>
  );
};
