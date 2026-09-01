import { motion } from "framer-motion";
import { Link } from "wouter";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Sparkles,
  PhoneCall,
  Code2,
  Briefcase,
  CheckCircle2,
  Users,
  Building,
  Rocket,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";
import { industriesData, approachSteps, countries } from "@/data/industries";

export default function Industries() {
  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-0 pt-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[position:center_right]"
          style={{
            backgroundImage: "url('/industries-hero-bg.webp')",
          }}
        />

   

        {/* Texture + Glow */}
        <div className="absolute inset-0 dot-grid-light opacity-25" />
        <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

        {/* Luxury Lines */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

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
                  Where We Operate
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
            >
              Industries{" "}
              <span className="text-gradient-brand">We Serve</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-light leading-8 text-muted-foreground"
            >
              From telecommunications to technology startups — we bring proven
              operational expertise, sector-specific strategy, and scalable
              delivery systems to every industry we support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <Button
                size="lg"
                asChild
                className="h-[52px] w-full sm:w-auto rounded-md bg-primary px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
              >
                <Link href="/contact">
                  Discuss Your Sector
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-[52px] w-full sm:w-auto rounded-md border-primary/30 bg-background/35 px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-background/70"
              >
                <a href="#industries-grid">
                  View Industries
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section
        id="industries-grid"
        className="relative overflow-hidden bg-background py-20 lg:py-32"
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
              <SectionLabel>Our Focus Areas</SectionLabel>
            </motion.div>

            <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:flex-row lg:items-end">
              <motion.h2
                variants={fadeUp}
                className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
              >
                Sector-Specific{" "}
                <em className="not-italic text-primary">Expertise</em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-md text-sm font-light leading-relaxed text-muted-foreground lg:mb-2"
              >
                We support businesses across industries with customized sales,
                support, BPO, consulting, and technology solutions.
              </motion.p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-primary/25 via-border to-primary/10" />

            <div className="relative grid grid-cols-1 gap-px bg-border/70 md:grid-cols-2 lg:grid-cols-3">
              {industriesData.map((ind, i) => (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[390px] overflow-hidden bg-background transition-all duration-500 hover:z-10 hover:bg-card hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute right-6 top-5 font-serif text-7xl font-bold leading-none text-primary/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:text-primary/[0.09]">
                    {ind.num}
                  </span>

                  <div className="relative z-10 flex h-full flex-col p-6 lg:p-8">
                    <div className="mb-7 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_16px_40px_rgba(220,38,38,0.22)]">
                        {ind.icon}
                      </div>

                      <span className="font-serif text-xs tracking-[0.24em] text-muted-foreground/55 transition-colors duration-500 group-hover:text-primary">
                        {ind.num}
                      </span>
                    </div>

                    <div className="mb-5">
                      <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-foreground transition-colors duration-500 group-hover:text-primary">
                        {ind.title}
                      </h3>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="mb-5 h-px w-10 bg-primary/35 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

                    <div className="flex-1">
                      <ul className="space-y-2.5">
                        {ind.solutions.map((solution) => (
                          <li
                            key={solution}
                            className="flex items-start gap-3 text-sm font-light leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary/80 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(220,38,38,0.45)]" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-muted py-20 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-55" />
        <div className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full bg-primary/7 blur-[130px]" />
        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6 sm:space-y-7"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Our Approach</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
              >
                Tailored Solutions for{" "}
                <em className="not-italic text-primary">Every Sector</em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-base font-light leading-relaxed text-muted-foreground"
              >
                We do not apply generic frameworks. Every engagement starts with
                understanding your specific industry, competitive landscape, and
                operational context — then building solutions designed to fit.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-4 sm:space-y-5 pt-2">
                {approachSteps.map((item) => (
                  <div
                    key={item.n}
                    className="group relative flex items-start gap-3 sm:gap-4 overflow-hidden border border-border/70 bg-background/60 p-4 sm:p-5 transition-all duration-500 hover:border-primary/30 hover:bg-background"
                  >
                    <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-primary/20 bg-background text-[11px] font-serif font-bold italic text-primary/55 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      {item.n}
                    </span>

                    <div className="relative z-10">
                      <p className="mb-1 font-serif text-base sm:text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {item.title}
                      </p>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="premium-surface relative overflow-hidden border border-border/80 bg-background/85 p-6 sm:p-8 md:p-12 shadow-[0_28px_90px_rgba(0,0,0,0.10)] backdrop-blur-sm">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
                <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                <span className="absolute right-8 top-8 font-serif text-8xl font-bold leading-none text-primary/[0.045]">
                  03
                </span>

                <div className="relative z-10 space-y-6 sm:space-y-7">
                  <SectionLabel>Global Coverage</SectionLabel>

                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-foreground">
                    Serving Clients Across{" "}
                    <em className="not-italic text-primary">Three Nations</em>
                  </h3>

                  <p className="text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                    Regardless of your industry or geography, Neal Foundation
                    delivers consistent operational excellence — backed by
                    coordinated global delivery across the United States, Canada,
                    and Bharat.
                  </p>

                  <div className="space-y-3 pt-1">
                    {countries.map((item) => (
                      <div
                        key={item}
                        className="group/item flex items-start gap-3 border-b border-border/70 pb-3 text-sm font-medium text-foreground/80 transition-colors duration-300 last:border-b-0 last:pb-0 hover:text-primary"
                      >
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <Button
                      asChild
                      className="h-12 w-full rounded-md bg-primary text-[0.82rem] font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
                    >
                      <Link href="/contact">
                        Start a Conversation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}