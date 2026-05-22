"use client";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const STATS = [
  { key: "countries", value: "18+", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "machines", value: "500+", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { key: "support", value: "24/7", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
  { key: "warranty", value: "12â€“24M", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
];

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const reduce = useReducedMotion();

  const EASE: Transition = { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] };
  const fadeUp = (delay = 0) => ({
    initial: reduce ? {} : { opacity: 0, y: 28 },
    animate: reduce ? {} : { opacity: 1, y: 0 },
    transition: { ...EASE, delay },
  });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950"
      style={{ paddingTop: "4rem" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,158,11,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/8 text-amber-400 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.2)}>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white mb-6"
            style={{ fontFamily: "var(--font-display, system-ui)" }}
          >
            {t("title")}
            <br />
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "1px transparent",
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {t("titleHighlight")}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 text-sm uppercase tracking-wider cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            {t("cta1")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-500/50 bg-zinc-900/50 hover:bg-zinc-800/50 text-zinc-300 hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm uppercase tracking-wider cursor-pointer"
          >
            {t("cta2")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {STATS.map((s) => (
            <div
              key={s.key}
              className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 backdrop-blur-sm p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900/80"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 mx-auto mb-3">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                </svg>
              </div>
              <div
                className="text-2xl font-black text-white mb-1"
                style={{ fontFamily: "var(--font-display, system-ui)" }}
              >
                {s.value}
              </div>
              <div className="text-zinc-500 text-xs uppercase tracking-wider font-medium">
                {t(`stats.${s.key}`)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <motion.div
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
