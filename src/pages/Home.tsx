import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Users2, ShieldCheck, Network, TrendingUp, Building2, Wifi, Globe, Mail, HeartHandshake, LineChart, Users, PhoneCall, Code2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { fadeUp, stagger } from "@/lib/animations";
import { AnimatedCounter, SectionLabel } from "@/components/shared";
import { contactSchema, type ContactFormValues } from "@/data/contact";
import {
  homeServices,
  parentCompanyPoints,
  nealDivisionPoints,
  homeValues,
  coPartnerHighlights,
  testimonials,
  marqueeItems,
} from "@/data/home";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      message: "",
    },
  });

  const onSubmit = (_values: ContactFormValues) => {
    toast({
      title: "Consultation Request Received",
      description: "A representative will contact you within 24 hours.",
    });
    form.reset();
  };

  const services = homeServices;

  return (
    <div className="w-full overflow-x-hidden">

      {/* ─── HERO ─── */}
    <section
  id="home"
  className="relative flex min-h-dvh items-end overflow-hidden bg-background pb-0 pt-32"
  data-testid="section-hero"
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/hero-bg.webp"
      alt="Neal Foundation Hero Background"
      className="h-full w-full object-cover"
      fetchPriority="high"
    />
  </div>

  {/* Texture + Glow */}
  <div className="absolute inset-0 dot-grid-light opacity-25" />
  <div className="absolute right-0 top-0 h-[660px] w-[660px] rounded-full bg-primary/15 blur-[155px]" />
  <div className="absolute bottom-0 left-0 h-[430px] w-[430px] rounded-full bg-primary/8 blur-[120px]" />

  {/* Premium Lines */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 pb-20 md:pb-24 lg:px-8">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-6xl space-y-8"
    >
      {/* Premium Badge */}
      <motion.div variants={fadeUp}>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/45 px-4 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Neal Foundation
          </span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
      >
        <span className="block">Your Trusted</span>

        <span className="block text-gradient-brand">
          Growth Partner
        </span>

      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeUp}
        className="max-w-2xl text-base font-light leading-8 text-muted-foreground"
      >
        Neal Foundation delivers enterprise-grade sales outsourcing, customer
        support, lead generation, and BPO solutions across the United States,
        Canada, and Bharat — helping businesses scale with reliable,
        performance-driven operations.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
      >
        <Button
          size="lg"
          asChild
          className="h-[52px] w-full sm:w-auto rounded-md bg-primary px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
          data-testid="button-schedule-consultation"
        >
          <Link href="/contact">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button
          size="lg"
          variant="outline"
          asChild
          className="h-[52px] w-full sm:w-auto rounded-md border-primary/30 bg-background/35 px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-background/70"
        >
          <Link href="/services">
            Explore Services
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* ─── MARQUEE TICKER ─── */}
      <div className="marquee-gradient overflow-hidden py-4" aria-hidden="true">
        <div className="marquee-track select-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-5 text-[10px] font-semibold tracking-[0.2em] uppercase text-white px-8">
              {item}
              <span className="w-1 h-1 rotate-45 bg-cream/50 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT ─── */}
     <section
  id="about"
  className="relative overflow-hidden py-20 lg:py-36 bg-background"
  data-testid="section-about"
>
  {/* Premium Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 dot-grid-light opacity-40" />
    <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-primary/5 blur-[120px] rounded-full" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center"
    >
      {/* Left Content */}
      <div className="relative">
        <motion.div variants={fadeUp} className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">
              Who We Are
            </span>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-serif font-bold text-foreground leading-[1.02] tracking-tight"
        >
          <span className="block text-2xl sm:text-3xl lg:text-5xl">
            Architects of
          </span>
          <span className="block mt-2 text-2xl sm:text-3xl lg:text-5xl">
            <em className="not-italic bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
              Scalable Operations
            </em>
          </span>
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-6 sm:mt-8 flex items-center gap-4">
          <div className="w-14 h-px bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed font-light"
        >
       Neal Foundation provides end-to-end sales, customer support, lead generation,
consulting, software, and operational solutions. Beyond staffing, we design
scalable systems, strengthen business processes, develop high-performing teams,
and build sustainable operations for long-term success.
        </motion.p>

        {/* Premium Feature Grid */}
        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {[
            {
              title: "Build Strong Teams",
              icon: Users2,
            },
            {
              title: "Improve Operational Performance",
              icon: ShieldCheck,
            },
            {
              title: "Increase Revenue Opportunities",
              icon: TrendingUp,
            },
            {
              title: "Create Sustainable Growth",
              icon: Building2,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {item.title}
                    </p>
                    <div className="mt-2 h-px w-10 bg-primary/40 transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Mini CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-8 sm:mt-10 inline-flex items-center gap-3 text-sm font-semibold text-foreground group"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
            <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span>Built for performance, process, and long-term growth.</span>
        </motion.div>
      </div>

      {/* Right Visual */}
      <motion.div variants={fadeUp} className="relative lg:pl-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-muted">
            <img
              src="/about-right.webp"
              alt="Corporate team at Neal Foundation"
              className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
              data-testid="img-about"
              loading="lazy"
              decoding="async"
            />

            {/* Logo Badge */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-primary/25 bg-background/85 p-2 shadow-xl backdrop-blur-md logo-halo">
              <img
                src="/NealFoundation Logo.webp"
                alt="Neal Foundation"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>      
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* ─── STATS ─── */}
   <section
  className="relative overflow-hidden bg-[#F7F4EE] py-16 sm:py-24 lg:py-28"
  data-testid="section-stats"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-60" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.055),transparent_55%)]" />

  {/* Top / Bottom Luxury Lines */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
      {[
        { value: 100, label: "Business Projects", suffix: "+" },
        { value: 50, label: "Team Members", suffix: "+" },
        { value: 3, label: "Countries Served", suffix: "" },
        { value: "24/7", label: "Support Operations", suffix: "" },
      ].map((stat, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-[20px] sm:rounded-[28px] border border-primary/10 bg-white/45 p-4 sm:px-5 sm:py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/70 hover:shadow-[0_30px_90px_rgba(255,0,0,0.10)]"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-primary/5 opacity-80" />

          {/* Corner Accent */}
          <div className="absolute top-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Diamond Mark */}
          <div className="mx-auto mb-4 sm:mb-6 h-2 w-2 rotate-45 bg-primary/60 shadow-[0_0_18px_rgba(255,0,0,0.45)]" />

          <div className="relative z-10">
            {typeof stat.value === "string" ? (
              <div
                className="mb-2 sm:mb-4 font-serif text-3xl sm:text-5xl font-bold leading-none text-primary lg:text-6xl"
                data-testid="stat-support-operations"
              >
                {stat.value}
              </div>
            ) : (
              <div className="mb-2 sm:mb-4 [&_*:first-child]:font-serif [&_*:first-child]:text-3xl sm:[&_*:first-child]:text-5xl [&_*:first-child]:font-bold [&_*:first-child]:leading-none [&_*:first-child]:text-primary lg:[&_*:first-child]:text-6xl">
                <AnimatedCounter
                  value={stat.value}
                  label=""
                  suffix={stat.suffix}
                />
              </div>
            )}

            <div className="mx-auto mb-3 sm:mb-4 h-px w-10 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

            <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.26em] text-foreground/70">
              {stat.label}
            </div>
          </div>

          {/* Bottom Shine */}
          <div className="absolute bottom-0 left-4 sm:left-6 right-4 sm:right-6 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ─── SERVICES ─── */}
<section
  id="services"
  className="py-20 lg:py-32 bg-background relative overflow-hidden"
  data-testid="section-services"
>
  {/* Premium Background Texture */}
  <div className="absolute inset-0 dot-grid-light opacity-35" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_35%)]" />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mb-12 sm:mb-16 lg:mb-18"
    >
      <motion.div variants={fadeUp} className="mb-6">
        <SectionLabel>Our Expertise</SectionLabel>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
        <motion.h2
          variants={fadeUp}
          className="font-serif font-bold text-2xl sm:text-3xl lg:text-5xl leading-[1.06] max-w-3xl text-foreground"
        >
          Comprehensive Solutions <br />
          <em className="not-italic text-primary">Built for Scale</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground max-w-md text-sm sm:text-base font-light leading-relaxed lg:mb-2"
        >
          End-to-end outsourcing and consulting services that integrate
          seamlessly with your operations.
        </motion.p>
      </div>
    </motion.div>

    {/* Premium Compact Grid */}
    <div className="relative">
      {/* Outer Border Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/22 via-border to-primary/10" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/70">
        {services.map((service, i) => (
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
            className="group relative overflow-hidden bg-background min-h-0 sm:min-h-[360px] transition-all duration-500 hover:bg-card hover:z-10 hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]"
            data-testid={`card-service-${i}`}
          >
            {/* Top Hover Line */}
            <div className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

            {/* Soft Hover Glow */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Background Number */}
            <span className="pointer-events-none select-none absolute right-6 top-5 font-serif text-6xl font-bold leading-none text-primary/[0.04] transition-all duration-500 group-hover:text-primary/[0.09] group-hover:scale-105">
              {service.num}
            </span>

            <div className="relative z-10 p-6 lg:p-7 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <div className="w-10 h-10 border border-primary/25 bg-background flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_14px_35px_rgba(220,38,38,0.20)]">
                  {service.icon}
                </div>

                <span className="font-serif text-xs tracking-[0.24em] text-muted-foreground/60 transition-colors duration-500 group-hover:text-primary">
                  {service.num}
                </span>
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-3 leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              <div className="w-10 h-px bg-primary/35 mb-5 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

              <div className="flex-1">
                <ul className="space-y-2.5">
                  {service.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/75 transition-colors font-light leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-primary/80 flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_12px_rgba(220,38,38,0.45)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-primary border-b border-primary/35 pb-1 hover:border-primary"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom Hover Line */}
            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* ─── WHY CHOOSE US ─── */}
    <section
  className="relative overflow-hidden bg-muted py-20 lg:py-32"
  data-testid="section-why"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-55" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.065),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.035),transparent_34%)]" />

  {/* Luxury Top / Bottom Lines */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-start gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
      {/* Left Content */}
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:space-y-7">
          <SectionLabel>Why Choose Us</SectionLabel>

          <h2
            className="font-serif font-bold leading-[1.06] text-foreground text-2xl sm:text-3xl lg:text-5xl"
          >
            The Foundation of <br />
            <em className="not-italic text-primary">
              Operational Excellence
            </em>
          </h2>

          <div className="h-px w-24 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>

        <div className="relative space-y-5 sm:space-y-6">
          {/* Vertical Accent Line */}
          <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:block" />

          {[
            {
              n: "01",
              title: "Industry Experience",
              desc: "Practical solutions built from real-world experience scaling sales and support operations across industries.",
            },
            {
              n: "02",
              title: "End-to-End Support",
              desc: "From recruitment and training to implementation and performance management — we assist at every stage.",
            },
            {
              n: "03",
              title: "Cost-Effective Operations",
              desc: "Reduce operational costs while maintaining the exceptional service quality your clients expect.",
            },
            {
              n: "04",
              title: "Scalable Growth Model",
              desc: "Systems that support sustainable growth — from a five-person team to a five-hundred-person operation.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex gap-4 sm:gap-7"
              data-testid={`pillar-${i}`}
            >
              <div className="relative z-10 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-primary/25 bg-muted text-[10px] font-serif font-bold italic text-primary/55 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_14px_35px_rgba(220,38,38,0.22)]">
                {p.n}
              </div>

              <div className="relative flex-1 overflow-hidden border-t border-border/80 pt-4 sm:pt-5 transition-all duration-500 group-hover:border-primary/45">
                <div className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-24" />

                <h4 className="mb-2 font-serif text-base sm:text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                  {p.title}
                </h4>

                <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Sticky Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:sticky lg:top-32"
      >
        <div className="premium-surface relative overflow-hidden border border-border/80 bg-background/85 text-card-foreground shadow-[0_28px_90px_rgba(0,0,0,0.10)] backdrop-blur-sm">
          {/* Premium Glow */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
          <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />

          {/* Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          {/* Big Watermark Number */}
          <span className="pointer-events-none select-none absolute right-8 top-8 font-serif text-8xl font-bold leading-none text-primary/[0.045]">
            05
          </span>

          <div className="relative z-10 space-y-6 sm:space-y-8 p-6 sm:p-8 md:p-12 lg:p-14">
            <SectionLabel>Our Business Model</SectionLabel>

            <div className="space-y-4 sm:space-y-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Partnerships Built <br />
                on Growth
              </h3>

              <p className="text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
                Rather than simply providing resources, Neal Foundation works closely
                with clients to build stronger teams, improve operational performance,
                increase revenue opportunities, develop long-term business strategies,
                and create sustainable growth.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {[
                "Build Strong Teams",
                "Improve Operational Performance",
                "Increase Revenue Opportunities",
                "Develop Long-Term Business Strategies",
                "Create Sustainable Growth",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group/item flex items-center gap-3 border-b border-border/70 pb-3 text-sm font-medium text-foreground/80 transition-colors duration-300 last:border-b-0 last:pb-0 hover:text-primary"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-primary/20 bg-primary/[0.04] text-primary transition-all duration-300 group-hover/item:bg-primary group-hover/item:text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-5 sm:pt-6">
              <p className="font-serif text-base sm:text-lg italic leading-relaxed text-foreground/75">
                “Our success is directly connected to the success of our clients.”
              </p>
            </div>
          </div>

          {/* Bottom Shine */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* ─── 24X7 CONNECT SECTION ─── */}
<section
  id="business-ecosystem"
  className="relative overflow-hidden bg-background py-20 lg:py-32"
  data-testid="section-business-ecosystem"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-35" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.06),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.035),transparent_34%)]" />

  {/* Luxury Lines */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-20">
      {/* Left Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="lg:col-span-6"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <SectionLabel>Our Business Ecosystem</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.06] text-foreground"
        >
          Find the Best Internet Provider in Your Area {''}
          <em className="not-italic text-primary">24X7NetConnect</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-base font-light leading-relaxed text-muted-foreground"
        >
          24X7NetConnect is the parent business platform focused on helping
          residential and business customers search, compare, and connect with
          reliable internet service providers available in their area.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base font-light leading-relaxed text-muted-foreground"
        >
          Under this broader business ecosystem, Neal Foundation operates as
          the business growth, outsourcing, customer support, lead generation,
          consulting, and operational solutions division.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-7 sm:mt-9 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2"
        >
          {parentCompanyPoints.map((item) => (
            <div
              key={item}
              className="group flex items-start gap-3 text-sm font-light leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://www.nealfoundation.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-7 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
          >
            Visit Website
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-primary/25 bg-card/50 px-7 text-xs font-bold uppercase tracking-[0.14em] text-primary backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/5"
          >
            Connect With Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Premium Structure Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-6"
      >
        <div className="premium-surface relative overflow-hidden border border-border/80 bg-card/90 shadow-[0_32px_90px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          {/* Glow Effects */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
          <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />

          {/* Accent Line */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          {/* Watermark */}
          <span className="pointer-events-none select-none absolute right-8 top-8 font-serif text-8xl font-bold leading-none text-primary/[0.045]">
            24
          </span>

          <div className="relative z-10 p-5 sm:p-8 md:p-10 lg:p-12">
            {/* Logo Box */}
            <div className="mb-6 sm:mb-8 overflow-hidden border border-primary/20 bg-black p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
              <div className="flex items-center justify-between gap-4 sm:gap-6">
                <img
                  src="/24x7netconnect-logo.webp"
                  alt="24X7NetConnect Logo"
                  className="h-14 sm:h-20 w-auto max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />

                <div className="hidden h-12 w-12 items-center justify-center border border-[#f26a21]/40 bg-[#f26a21]/10 text-[#f26a21] md:flex">
                  <Network className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Parent Company Card */}
            <div className="relative overflow-hidden border border-primary/20 bg-background p-4 sm:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent" />

              <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                <div className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center border border-primary/30 bg-primary/10 text-primary px-2 flex-shrink-0">
                  <Wifi className="h-5 w-5" />
                </div>

                <div>
                  <p className="mb-1 sm:mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                    Parent Company
                  </p>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    24X7NetConnect
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    A smart internet service comparison company helping users
                    find providers, compare plans, check availability, and
                    connect with the best internet options by location.
                  </p>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            <div className="mx-auto flex w-px flex-col items-center py-4 sm:py-5">
              <div className="h-8 sm:h-10 w-px bg-gradient-to-b from-primary/60 to-border" />
              <div className="h-2 w-2 rotate-45 bg-primary shadow-[0_0_18px_rgba(220,38,38,0.45)]" />
              <div className="h-8 sm:h-10 w-px bg-gradient-to-b from-border to-primary/40" />
            </div>

            {/* Neal Foundation Division */}
            <div className="relative overflow-hidden border border-border/80 bg-muted p-4 sm:p-6 transition-all duration-500 hover:border-primary/30">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-primary" />

              <div className="relative z-10 flex items-start gap-4 sm:gap-5">
                <div className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center px-2 border border-primary/25 bg-background text-primary flex-shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="mb-1 sm:mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    Business Division
                  </p>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    Neal Foundation
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    The business growth and outsourcing division supporting
                    companies with sales, customer service, BPO, consulting,
                    software, and operational solutions.
                  </p>

                  <a
                    href="https://www.nealfoundation.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:gap-3"
                  >
                    www.nealfoundation.com
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* ─── VALUES & INDUSTRIES ─── */}
     <section
  id="industries"
  className="relative overflow-hidden bg-background py-20 lg:py-32"
  data-testid="section-industries"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-35" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.045),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.04),transparent_36%)]" />

  {/* Top / Bottom Luxury Lines */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
      {/* Core Values */}
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-4 sm:space-y-6">
          <SectionLabel>What Drives Us</SectionLabel>

          <h2
            className="font-serif font-bold leading-[1.06] text-foreground text-2xl sm:text-3xl lg:text-5xl"
          >
            Our Core Values
          </h2>

          <div className="h-px w-20 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>

        <div className="relative border-y border-border/70">
          {homeValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex gap-4 sm:gap-6 overflow-hidden border-b border-border/60 px-1 sm:px-4 py-4 sm:py-6 transition-all duration-500 last:border-b-0 hover:bg-muted/35"
              data-testid={`value-${val.title.toLowerCase()}`}
            >
              {/* Hover Accent */}
              <div className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-primary origin-top transition-transform duration-500 group-hover:scale-y-100" />

              {/* Soft Hover Glow */}
              <div className="absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex-shrink-0 pt-0.5">
                <span className="flex h-9 w-9 items-center justify-center border border-primary/20 bg-background text-[11px] font-serif font-bold italic text-primary/45 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_14px_35px_rgba(220,38,38,0.20)]">
                  0{i + 1}
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="mb-2 font-serif text-lg sm:text-xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                  {val.title}
                </h4>

                <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-4 sm:space-y-6">
          <SectionLabel>Where We Operate</SectionLabel>

          <h2
            className="font-serif font-bold leading-[1.06] text-foreground text-2xl sm:text-3xl lg:text-5xl"
          >
            Industries We Serve
          </h2>

          <div className="h-px w-20 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>

        <div className="relative overflow-hidden border-y border-border/70">
          {[
            "Telecommunications",
            "Technology Services",
            "Software Solutions",
            "Professional Services",
            "Customer Support Operations",
            "Small & Medium Businesses",
            "Startups & Entrepreneurs",
          ].map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.07,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex cursor-pointer items-center justify-between overflow-hidden border-b border-border/60 px-1 sm:px-4 py-4 sm:py-5 transition-all duration-500 last:border-b-0 hover:bg-muted/35"
              data-testid={`industry-${i}`}
            >
              {/* Hover Accent */}
              <div className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-primary origin-top transition-transform duration-500 group-hover:scale-y-100" />

              {/* Hover Background Shine */}
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-primary/[0.06] via-transparent to-transparent transition-transform duration-700 group-hover:translate-x-0" />

              <div className="relative z-10 flex items-center gap-4">
                <span className="h-1.5 w-1.5 rotate-45 bg-primary/55 transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_14px_rgba(220,38,38,0.45)]" />

                <span className="text-sm sm:text-base font-medium text-foreground transition-colors duration-500 group-hover:text-primary">
                  {ind}
                </span>
              </div>

              <div className="relative z-10 flex h-8 w-8 translate-x-2 items-center justify-center border border-primary/20 bg-primary/[0.04] text-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-primary group-hover:text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ─── TESTIMONIALS ─── */}
      <section
  className="relative overflow-hidden bg-background py-20 lg:py-32"
  data-testid="section-testimonials"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-40" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.055),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.035),transparent_34%)]" />

  {/* Top / Bottom Luxury Lines */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mb-12 sm:mb-14 lg:mb-16"
    >
      <motion.div variants={fadeUp} className="mb-5">
        <SectionLabel>Client Success</SectionLabel>
      </motion.div>

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <motion.div variants={fadeUp} className="space-y-4 sm:space-y-5">
          <h2
            className="font-serif font-bold leading-[1.06] text-foreground text-2xl sm:text-3xl lg:text-5xl"
          >
            Delivering Real <br />
            <em className="not-italic text-primary">Results</em>
          </h2>

          <div className="h-px w-20 bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="max-w-md text-sm font-light leading-relaxed text-muted-foreground lg:mb-2"
        >
          Trusted partnerships built through consistent delivery, operational
          excellence, and measurable business impact.
        </motion.p>
      </div>
    </motion.div>

    {/* Premium Testimonial Grid */}
    <div className="relative">
  {/* Outer Premium Border */}
  <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-border to-primary/10" />

  {/* Subtle Glow */}
  <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[90px]" />

  <div className="relative grid grid-cols-1 gap-px bg-border/70 md:grid-cols-3">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          delay: i * 0.12,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative flex min-h-[340px] flex-col overflow-hidden bg-card p-6 sm:p-7 lg:p-9 transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)]"
        data-testid={`card-testimonial-${i}`}
      >
        {/* Top Accent Line */}
        <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

        {/* Left Accent Line */}
        <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary/80 transition-transform duration-500 group-hover:scale-y-100" />

        {/* Hover Glow */}
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Quote Watermark */}
        <div className="pointer-events-none select-none absolute right-6 top-4 font-serif text-9xl font-bold leading-none text-primary/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:text-primary/[0.085]">
          “
        </div>

        {/* Card Number */}
        <span className="pointer-events-none select-none absolute bottom-6 right-7 font-serif text-5xl font-bold leading-none text-primary/[0.035] transition-colors duration-500 group-hover:text-primary/[0.08]">
          0{i + 1}
        </span>

        <div className="relative z-10 flex h-full flex-col">
          {/* Top Row */}
          <div className="mb-6 sm:mb-7 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_16px_40px_rgba(220,38,38,0.22)]">
              <span className="font-serif text-3xl leading-none">“</span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground/55 transition-colors duration-500 group-hover:text-primary">
              Client Success
            </span>
          </div>

          {/* Quote */}
          <p className="flex-1 text-sm sm:text-[15px] font-light italic leading-7 sm:leading-8 text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80">
            {t.quote}
          </p>

          {/* Divider */}
          <div className="my-6 sm:my-8 h-px w-full bg-gradient-to-r from-primary/35 via-border to-transparent" />

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/25 bg-primary/[0.07] transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_14px_35px_rgba(220,38,38,0.20)]">
              <span className="text-xs font-bold text-primary transition-colors duration-500 group-hover:text-white">
                {t.initials}
              </span>
            </div>

            <div className="min-w-0">
              <p className="font-serif text-base font-bold leading-tight text-foreground transition-colors duration-500 group-hover:text-primary">
                {t.author}
              </p>

              <p className="mt-1 text-xs font-medium leading-relaxed text-primary/80">
                {t.role}, {t.company}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Shine */}
        <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </motion.div>
    ))}
  </div>
</div>
  </div>
</section>

      {/* ─── CONTACT ─── */}
  <section
  id="contact"
  className="relative overflow-hidden bg-background py-20 lg:py-32"
  data-testid="section-contact"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-40" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.055),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.04),transparent_36%)]" />

  {/* Luxury Lines */}
  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="relative">
        {/* Outer Border Glow */}
        <div className="absolute -inset-px bg-gradient-to-br from-primary/25 via-border to-primary/10" />

        <div className="relative grid grid-cols-1 overflow-hidden bg-border/70 lg:grid-cols-5 lg:gap-px">
          {/* Left Contact Info */}
          <div className="relative overflow-hidden bg-muted p-6 sm:p-8 text-foreground md:p-12 lg:col-span-2 lg:p-14">
            {/* Premium Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />

            {/* Top Accent */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

            {/* Watermark */}
            <span className="pointer-events-none select-none absolute right-8 top-8 font-serif text-8xl font-bold leading-none text-primary/[0.045]">
              01
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between gap-8 sm:gap-12">
              <div className="space-y-5 sm:space-y-7">
                <SectionLabel>Get in Touch</SectionLabel>

                <div className="space-y-4 sm:space-y-5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-foreground md:text-4xl">
                    Let&apos;s Grow <br />
                    <em className="not-italic text-primary">Together</em>
                  </h2>

                  <div className="h-px w-16 bg-gradient-to-r from-primary/70 to-transparent" />

                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    Whether you&apos;re looking to expand your sales operations,
                    improve customer service, build an outsourcing team, or launch
                    a new business operation, Neal Foundation is ready to support
                    your growth.
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    icon: <Globe className="h-3.5 w-3.5" />,
                    label: "Global Presence",
                    value: "United States · Canada · Bharat",
                  },
                  {
                    icon: <Mail className="h-3.5 w-3.5" />,
                    label: "Response Time",
                    value: "Within 24 business hours",
                  },
                  {
                    icon: <HeartHandshake className="h-3.5 w-3.5" />,
                    label: "Partnership First",
                    value: "Dedicated to long-term success",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 sm:gap-4 border-t border-border/70 pt-4 sm:pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_14px_35px_rgba(220,38,38,0.20)]">
                      {item.icon}
                    </div>

                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-light text-foreground/75">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="relative bg-card p-6 sm:p-8 md:p-12 lg:col-span-3 lg:p-14">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.055] blur-[80px]" />

            <div className="relative z-10 mb-8 sm:mb-10 space-y-2 sm:space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground md:text-3xl">
                Start Your Consultation
              </h3>
              <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                Share your requirements and our team will connect with you to
                understand your business goals.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="relative z-10 space-y-6 sm:space-y-8"
                data-testid="form-contact"
              >
                <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-11 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                            placeholder="John Doe"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-11 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                            placeholder="Acme Corp"
                            data-testid="input-company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Work Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-11 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                            type="email"
                            placeholder="john@acme.com"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-11 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                            placeholder="+1 (555) 000-0000"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceRequired"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Service Required
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            className="h-11 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus:border-primary focus:ring-0"
                            data-testid="select-service"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sales">Sales Outsourcing</SelectItem>
                          <SelectItem value="support">
                            Customer Service Solutions
                          </SelectItem>
                          <SelectItem value="leads">
                            Lead Generation Services
                          </SelectItem>
                          <SelectItem value="bpo">
                            Business Process Outsourcing
                          </SelectItem>
                          <SelectItem value="consulting">
                            Business Setup & Growth Consulting
                          </SelectItem>
                          <SelectItem value="software">
                            Software & Digital Solutions
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[96px] resize-none rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                          placeholder="Tell us about your goals..."
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="group h-12 w-full rounded-md text-sm font-semibold uppercase tracking-[0.14em] premium-glow"
                    data-testid="button-submit-consultation"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
