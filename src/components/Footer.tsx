import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/mainlogo.jpg";

const Footer = () => (
  <footer className="border-t border-border/50 mt-24">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="DateTech Solution" width={40} height={40} className="h-10 w-10" loading="lazy" />
          <span className="font-display font-bold text-lg">DateTech<span className="text-gradient"> Solution</span></span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          A small but mighty studio crafting websites and software for ambitious businesses. Based in Bareilly, building for the world.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
          <li><Link to="/services" className="hover:text-primary">Services</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /><a href="tel:+919917615189">+91-9917615189</a></li>
          <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /><a href="mailto:datetechsolution@gmail.com">datetechsolution@gmail.com</a></li>
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" />Bareilly, U.P., India</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/50">
      <div className="container py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} DateTech Solution. All rights reserved.</p>
        <p>Crafted with care in Bareilly.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
