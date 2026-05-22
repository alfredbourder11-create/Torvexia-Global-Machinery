"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const STEPS = [
  { key: "step1", pct: "30%", num: "01", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { key: "step2", pct: "40%", num: "02", icon: "M15 10l4.553-2.277A1 1 0 0121 8.68v6.64a1 1 0 01-1.447.897L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" },
  { key: "step3", pct: "30%", num: "03", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const SECURITY_ICONS = [
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M15 10l4.553-2.277A1 1 0 0121 8.68v6.64a1 1 0 01-1.447.897L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
];

export function PaymentSection() {
  const t = useTranslations("payment");
  const reduce = useReducedMotion();
  const security = t.raw("security") as string[];

  return (
    <section id="payment" className="relative py-28 lg:py-36 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(245,158,11,1) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="max-w-2xl mb-16 lg:mb-20"
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
          <p className="text-zinc-400 text-lg leading-relaxed">{t("subtitle")}</p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-1/2 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-amber-500/40 via-amber-500/20 to-amber-500/40 -translate-y-1/2 z-0" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.key}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
              className="relative z-10"
            >
              <div className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 p-8 overflow-hidden transition-colors duration-300">
                <span
                  className="absolute top-4 right-4 text-6xl font-black text-zinc-800 select-none leading-none"
                  style={{ fontFamily: "var(--font-display, system-ui)" }}
                  aria-hidden
                >
                  {s.num}
                </span>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-amber-500/40 rounded-full" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>

                  <div
                    className="text-4xl font-black text-amber-400 mb-1"
                    style={{ fontFamily: "var(--font-display, system-ui)" }}
                  >
                    {s.pct}
                  </div>
                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: "var(--font-display, system-ui)" }}
                  >
                    {t(`${s.key}.label`)}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {t(`${s.key}.desc`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-5 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400"
        >
          {security.map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={SECURITY_ICONS[i]} />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
