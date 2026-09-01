import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Sales Outsourcing", href: "/services" },
    { label: "Customer Support", href: "/services" },
    { label: "Lead Generation", href: "/services" },
    { label: "Business Consulting", href: "/services" },
    { label: "BPO Services", href: "/services" },
    { label: "Software Solutions", href: "/services" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted text-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-px section-accent-line" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-primary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 border-b border-border">

          <div className="sm:col-span-2 lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/NealFoundation Logo.webp"
                alt="Neal Foundation logo"
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
              Driven by Growth. Powered by Partnership.
            </p>

            <div className="space-y-2">
              {["United States", "Canada", "Bharat"].map((loc) => (
                <div key={loc} className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-[0.14em]">
                  <span className="w-5 h-px bg-primary/60" />
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-5 sm:space-y-6">
            <h4 className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-foreground/45">Services</h4>
            <ul className="space-y-3 sm:space-y-3.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    data-testid={`footer-link-${s.label.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            <h4 className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-foreground/45">Navigation</h4>
            <ul className="space-y-3 sm:space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    data-testid={`footer-nav-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-5 sm:space-y-6">
            <h4 className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-foreground/45">Legal</h4>
            <ul className="space-y-3 sm:space-y-3.5">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>

            <div className="pt-4 sm:pt-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-3">Global Operations</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs text-primary font-semibold tracking-[0.1em] uppercase border-b border-primary/40 pb-0.5 hover:border-primary hover:text-foreground transition-colors duration-300"
                data-testid="footer-link-contact"
              >
                Schedule Consultation
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        <div className="py-6 sm:py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[11px] text-muted-foreground font-light tracking-wide">
            &copy; {currentYear} Neal Foundation &amp; 24X7NetConnect. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.16em]">
            Building Businesses &nbsp;&middot;&nbsp; Creating Opportunities &nbsp;&middot;&nbsp; Delivering Results
          </p>
        </div>
      </div>
    </footer>
  );
}
