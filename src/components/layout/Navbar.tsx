import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/94 backdrop-blur-xl border-b border-border shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
          : ""
      }`}
    >
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px section-accent-line" />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group z-50" aria-label="Neal Foundation home">
          <div className="relative flex h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 flex-shrink-0 items-center justify-center">
            <div className="absolute inset-1 rounded-full bg-primary/8 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/NealFoundation Logo.webp"
              alt="Neal Foundation logo"
              className="relative max-h-full max-w-full object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`nav-link-hover text-[12px] font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-border pl-5 lg:pl-6">
            <Button
              asChild
              className="h-9 px-4 lg:px-5 text-[11px] font-semibold tracking-[0.1em] uppercase rounded bg-primary hover:bg-primary/90 text-primary-foreground premium-glow transition-all duration-300"
            >
              <Link href="/contact" data-testid="link-book-consultation">
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 text-muted-foreground hover:text-foreground rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-background/98 backdrop-blur-2xl border-b border-border p-6 sm:p-8 flex flex-col gap-1 md:hidden shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`block text-sm font-medium tracking-[0.1em] uppercase py-3.5 border-b border-border/80 transition-colors ${
                    location === link.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Button
              asChild
              className="w-full mt-5 rounded-md text-xs font-semibold tracking-[0.1em] uppercase h-12 premium-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
