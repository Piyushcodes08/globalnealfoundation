import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Search,
  BarChart3,
  Zap,
  MapPin,
  Globe,
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
  Wifi,
  Gauge,
  DollarSign,
  Layers3,
  TrendingUp,
  Building2,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";
import {
  stats,
  coreValues,
  capabilities,
  howItWorks,
  internetServices,
  whyChoose,
} from "@/data/about";

export default function About() {
  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-20 pt-36">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about-hero-bg.webp"
            alt="Neal Foundation About Hero Background"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>

        {/* Texture + Glow */}
        <div className="absolute inset-0 dot-grid-light opacity-25" />
        <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

        {/* Luxury Lines */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl space-y-7"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/45 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  About Neal Foundation
                </span>
              </div>
            </motion.div>

              <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
            >
              Scalable Operations for{" "}
              <span className="text-gradient-brand">Business Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-light leading-8 text-muted-foreground"
            >
              Neal Foundation delivers enterprise sales outsourcing, customer support, lead generation, consulting, and operational excellence across the United States, Canada, and Bharat.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="h-12 w-full sm:w-auto rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
              >
                <Link href="/contact">
                  Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 w-full sm:w-auto rounded-md border-primary/30 bg-background/35 px-8 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:bg-background/70"
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <div>
              <motion.div variants={fadeUp} className="mb-6">
                <SectionLabel>Our Platform</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mb-8 font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
              >
                Simplifying{" "}
                <em className="not-italic text-primary">
                  Internet Comparison
                </em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-base font-light leading-relaxed text-muted-foreground"
              >
                With just an address or ZIP code search, users can instantly compare internet service providers, available plans, speeds, pricing, coverage, and special offers from multiple providers in their area.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-10 text-base font-light leading-relaxed text-muted-foreground"
              >
                We empower consumers and businesses to make informed decisions by providing transparent comparisons, accurate pricing information, and location-based recommendations for finding the best internet connectivity solutions available.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden border border-border/70 bg-card/60 p-4 sm:p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04]"
                    >
                      <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                      <div className="mb-5 flex h-10 w-10 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <h3 className="mb-2 font-serif text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                        {item.title}
                      </h3>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -inset-px bg-gradient-to-br from-primary/25 via-border to-primary/10" />

              <div className="relative overflow-hidden bg-card p-3 shadow-[0_32px_90px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src="/about-right.webp"
                    alt="24X7NetConnect Internet Comparison"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 border border-primary/20 bg-background/85 p-4 sm:p-5 backdrop-blur-md">
                    <div className="mb-2 sm:mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-primary/25 bg-primary/10 text-primary">
                        <Globe className="h-4 w-4" />
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                        Global Reach
                      </p>
                    </div>

                    <p className="font-serif text-lg sm:text-xl font-bold text-foreground">
                      United States · Canada · Bharat
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#F7F4EE] py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 dot-grid-light opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden border border-primary/10 bg-white/45 p-4 sm:px-5 sm:py-9 text-center shadow-[0_20px_60px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/70"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-primary/5 opacity-80" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 sm:mb-5 h-2 w-2 rotate-45 bg-primary/60 shadow-[0_0_18px_rgba(220,38,38,0.45)]" />

                  <div className="mb-3 sm:mb-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-none text-primary">
                    {stat.value}
                  </div>

                  <div className="mx-auto mb-3 sm:mb-4 h-px w-8 sm:w-10 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Simple Process</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
            >
              How 24X7NetConnect{" "}
              <em className="not-italic text-primary">Works</em>
            </motion.h2>
          </div>

          <div className="relative space-y-6">
            <div className="absolute left-[17px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:block" />

            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.09,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex gap-4 sm:gap-7"
              >
                <div className="relative z-10 mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary/25 bg-muted text-[11px] font-serif font-bold italic text-primary/55 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  {step.n}
                </div>

                <div className="flex-1 border-t border-border/80 pt-4 sm:pt-5 transition-all duration-500 group-hover:border-primary/45">
                  <h4 className="mb-2 font-serif text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                    {step.title}
                  </h4>

                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNET SERVICES */}
      <section className="relative overflow-hidden bg-muted py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Internet Types</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
            >
              Services We Help{" "}
              <em className="not-italic text-primary">You Compare</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border/70 md:grid-cols-2 lg:grid-cols-3">
            {internetServices.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden bg-muted p-6 sm:p-8 transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="mb-4 text-sm font-light leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-all duration-500 group-hover:bg-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute left-0 bottom-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 grid grid-cols-1 items-end gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-4 sm:space-y-6"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Why Choose Us</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
              >
                Why Choose{" "}
                <em className="not-italic text-primary">24X7NetConnect</em>
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="max-w-md text-sm font-light leading-relaxed text-muted-foreground lg:justify-self-end"
            >
              Our platform simplifies internet comparison, saving you time and money while helping you find the perfect connectivity solution for your home or business.
            </motion.p>
          </div>

          <div className="border-y border-border/70">
            {whyChoose.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex gap-4 sm:gap-5 overflow-hidden border-b border-border/60 px-2 sm:px-4 py-5 sm:py-6 transition-all duration-500 last:border-b-0 hover:bg-background/45"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                <CheckCircle2 className="relative z-10 h-5 w-5 flex-shrink-0 text-primary transition-all duration-500 group-hover:scale-110" />

                <p className="relative z-10 text-sm sm:text-base font-light text-foreground transition-colors duration-500 group-hover:text-primary">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="relative overflow-hidden bg-muted py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-border/70 lg:grid-cols-2">
            {[
              {
                icon: Target,
                label: "Our Mission",
                title: "Simplifying Internet Selection",
                desc: "Our mission is to simplify the process of choosing an internet provider by providing transparent comparisons, accurate pricing information, and location-based recommendations. We empower consumers and businesses to make informed decisions and find the best internet connectivity solutions.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                title: "Connected Communities",
                desc: "Our vision is to be the leading internet provider comparison platform that connects people with the best internet solutions in their area. We're committed to making quality internet access simple, affordable, and accessible to everyone.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-0 sm:min-h-[360px] overflow-hidden bg-card p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-6 sm:mb-8 flex items-center justify-between">
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="font-serif text-xs tracking-[0.24em] text-muted-foreground/50 group-hover:text-primary">
                        0{i + 1}
                      </span>
                    </div>

                    <SectionLabel>{item.label}</SectionLabel>

                    <h3 className="mb-4 sm:mb-5 mt-4 sm:mt-6 font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-foreground transition-colors duration-500 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_45%)]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-5xl overflow-hidden border border-border/80 bg-card p-6 sm:p-10 md:p-14 text-center shadow-[0_32px_90px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-3xl space-y-6 sm:space-y-7">
              <div className="flex justify-center">
                <SectionLabel>Ready to Find?</SectionLabel>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground">
                Search. Compare. <br />
                <em className="not-italic text-primary">Connect.</em>
              </h2>

              <p className="mx-auto max-w-2xl text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                Enter your address or ZIP code today and discover the best internet provider for your home or business with 24X7NetConnect.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="h-12 w-full sm:w-auto rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
                >
                  <Link href="/contact">
                    Start Searching <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 w-full sm:w-auto rounded-md border-primary/25 px-8 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
