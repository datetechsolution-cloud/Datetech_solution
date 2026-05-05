import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="DateTech Solution logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-lg tracking-tight">
            DateTech<span className="text-gradient"> Solution</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="hero" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => `text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                {l.label}
              </NavLink>
            ))}
            <Button variant="hero" asChild><Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
