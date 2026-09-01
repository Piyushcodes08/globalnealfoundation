import { motion } from "framer-motion";
import { Link } from "wouter";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  PhoneCall,
  Code2,
  LineChart,
  Users,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Layers3,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";
import { servicesData, processSteps } from "@/data/services";

export default function Services() {
  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO WITH BG IMAGE */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-0 pt-32">
        <div className="absolute inset-0">
          <img
            src="/services-hero-bg.webp"
            alt="Neal Foundation Services Background"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 pb-20 lg:px-8">
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
                  Our Expertise
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
            >
              Scalable Services for{" "}
              <span className="text-gradient-brand">Business Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-light leading-8 text-muted-foreground"
            >
              Comprehensive outsourcing, sales, support, consulting, and software
              solutions designed to integrate seamlessly with your operations and
              drive measurable growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="h-[52px] w-full sm:w-auto rounded-md bg-primary px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-[52px] w-full sm:w-auto rounded-md border-primary/30 bg-background/35 px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-background/70"
              >
                <a href="#service-list">
                  View Services <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section
        id="service-list"
        className="relative overflow-hidden bg-background py-20 lg:py-32"
        data-testid="section-services"
      >
        <div className="absolute inset-0 dot-grid-light opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.055),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.035),transparent_34%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-12 sm:mb-16"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>What We Offer</SectionLabel>
            </motion.div>

            <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
              <motion.h2
                variants={fadeUp}
                className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
              >
                Comprehensive Solutions <br />
                <em className="not-italic text-primary">Built for Scale</em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-md text-sm font-light leading-relaxed text-muted-foreground lg:mb-2"
              >
                Each service is designed to strengthen your operations, improve
                efficiency, and support sustainable business expansion.
              </motion.p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-primary/25 via-border to-primary/10" />

            <div className="relative grid grid-cols-1 gap-px bg-border/70 md:grid-cols-2 lg:grid-cols-3">
              {servicesData.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[375px] overflow-hidden bg-background transition-all duration-500 hover:z-10 hover:bg-card hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)]"
                  data-testid={`service-card-${i}`}
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute right-6 top-5 font-serif text-7xl font-bold leading-none text-primary/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:text-primary/[0.09]">
                    {service.num}
                  </span>

                  <div className="relative z-10 flex h-full flex-col p-6 lg:p-8">
                    <div className="mb-7 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_16px_40px_rgba(220,38,38,0.22)]">
                        {service.icon}
                      </div>

                      <span className="font-serif text-xs tracking-[0.24em] text-muted-foreground/55 transition-colors duration-500 group-hover:text-primary">
                        {service.num}
                      </span>
                    </div>

                    <div className="mb-5">
                      <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-foreground transition-colors duration-500 group-hover:text-primary">
                        {service.title}
                      </h3>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mb-5 h-px w-10 bg-primary/35 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

                    <div className="flex-1">
                      <ul className="space-y-2.5">
                        {service.features.slice(0, 5).map((feature, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm font-light leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary/80 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(220,38,38,0.45)]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="translate-y-2 pt-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 border-b border-primary/35 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:border-primary"
                      >
                        Get Started
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="relative overflow-hidden bg-muted py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-45" />
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-primary/7 blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-12 sm:mb-16 max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>Service Depth</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
            >
              Built to Support Every <br />
              <em className="not-italic text-primary">Stage of Growth</em>
            </motion.h2>
          </motion.div>

          <div className="space-y-px bg-border/70">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid grid-cols-1 overflow-hidden bg-muted transition-all duration-500 hover:bg-background lg:grid-cols-12"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                <div className="relative p-6 sm:p-7 lg:col-span-4 lg:p-9">
                  <span className="mb-4 sm:mb-5 block font-serif text-xs font-bold tracking-[0.24em] text-primary/60">
                    {service.num}
                  </span>

                  <div className="mb-5 sm:mb-6 flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    {service.icon}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-foreground transition-colors duration-500 group-hover:text-primary">
                    {service.title}
                  </h3>
                </div>

                <div className="border-t border-border/70 p-6 sm:p-7 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-9">
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {service.longDesc}
                  </p>
                </div>

                <div className="border-t border-border/70 p-6 sm:p-7 lg:col-span-3 lg:border-l lg:border-t-0 lg:p-9">
                  <ul className="space-y-2.5 sm:space-y-3">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm font-light leading-relaxed text-foreground/75"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-35" />
        <div className="absolute left-0 bottom-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6 sm:space-y-7"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>How We Work</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
              >
                A Clear Framework for <br />
                <em className="not-italic text-primary">Operational Success</em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base font-light leading-relaxed text-muted-foreground"
              >
                We do not simply provide resources. We help build systems,
                processes, teams, and performance models that support long-term
                business growth.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: <Target className="h-4 w-4" />,
                    label: "Strategy",
                  },
                  {
                    icon: <Layers3 className="h-4 w-4" />,
                    label: "Execution",
                  },
                  {
                    icon: <ShieldCheck className="h-4 w-4" />,
                    label: "Reliability",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group border border-border/70 bg-card p-4 sm:p-5 transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.04]"
                  >
                    <div className="mb-3 sm:mb-4 flex h-9 w-9 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                      {item.icon}
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/75">
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative space-y-6">
              <div className="absolute left-[17px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:block" />

              {processSteps.map((step, i) => (
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
                  <div className="relative z-10 mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary/25 bg-background text-[11px] font-serif font-bold italic text-primary/55 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_14px_35px_rgba(220,38,38,0.22)]">
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-muted py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.065),transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-5xl overflow-hidden border border-border/80 bg-background p-6 sm:p-10 md:p-14 text-center shadow-[0_32px_90px_rgba(0,0,0,0.12)]"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-3xl space-y-6 sm:space-y-7">
              <div className="flex justify-center">
                <SectionLabel>Start the Conversation</SectionLabel>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground">
                Ready to Strengthen Your <br />
                <em className="not-italic text-primary">Business Operations?</em>
              </h2>

              <p className="mx-auto max-w-2xl text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                Let’s discuss how Neal Foundation can support your sales,
                customer support, BPO, consulting, and software requirements.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="h-12 w-full sm:w-auto rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
                >
                  <Link href="/contact">
                    Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 w-full sm:w-auto rounded-md border-primary/25 px-8 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  <Link href="/">
                    Back to Home <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}