"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const ICONS = [
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  "M5 10l7-7m0 0l7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V5l-7 7h8",
];

export function ShippingSection() {
  const t = useTranslations("shipping");
  const steps = t.raw("steps") as string[];
  const reduce = useReducedMotion();

  return (
    <section id="shipping" className="relative py-28 lg:py-36 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">
            {t("badge")}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-display, system-ui)" }}
          >
            {t("title")}
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={reduce ? {} : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
            className="hidden sm:block absolute top-8 left-0 right-0 h-px origin-left"
            style={{ background: "linear-gradient(90deg, transparent 5%, rgba(245,158,11,0.3) 20%, rgba(245,158,11,0.3) 80%, transparent 95%)" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-2">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:border-amber-500/60 flex items-center justify-center transition-colors duration-300 cursor-default z-10 relative">
                    <svg className="w-6 h-6 text-zinc-400 hover:text-amber-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICONS[i]} />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center z-20">
                    <span className="text-zinc-950 text-[10px] font-black">{i + 1}</span>
                  </div>
                </div>

                <span className="text-zinc-400 text-xs font-medium uppercase tracking-wide leading-tight">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: t("avgDelay"), value: t("avgDelayValue"), icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: t("ports"), value: t("portsValue"), icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: t("tracking"), value: t("trackingValue"), icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-xl bg-zinc-900 border border-zinc-800 p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wide">{item.label}</p>
                <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-display, system-ui)" }}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
