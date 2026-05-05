export const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container py-12 grid md:grid-cols-4 gap-8 text-sm">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 font-display text-2xl font-bold">
          <span className="w-8 h-8 rounded-lg bg-grad-primary inline-block" />
          Pixelcraft<span className="text-primary">.</span>
        </div>
        <p className="mt-4 text-muted-foreground max-w-md">
          A small studio shipping web & software for ambitious brands. Built with care, on time, in budget.
        </p>
      </div>
      <div>
        <p className="font-mono text-xs uppercase text-muted-foreground mb-3">Studio</p>
        <ul className="space-y-2">
          <li>hello@pixelcraft.dev</li>
          <li>+91 98XXX 12345</li>
          <li>Remote · India</li>
        </ul>
      </div>
      <div>
        <p className="font-mono text-xs uppercase text-muted-foreground mb-3">Social</p>
        <ul className="space-y-2">
          <li><a className="hover:text-primary" href="#">Instagram</a></li>
          <li><a className="hover:text-primary" href="#">LinkedIn</a></li>
          <li><a className="hover:text-primary" href="#">Dribbble</a></li>
        </ul>
      </div>
    </div>
    <div className="container py-6 border-t border-border/50 flex justify-between text-xs text-muted-foreground font-mono">
      <span>© 2026 Pixelcraft Studio</span>
      <span>Crafted with obsession</span>
    </div>
  </footer>
);
