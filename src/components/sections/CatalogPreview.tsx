"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { products, categories } from "@/data/products";

export function CatalogPreview() {
  const t = useTranslations("catalog");
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? products.slice(0, 12) : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="relative py-28 lg:py-36 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">
            50+ equipos disponibles
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

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                active === c.key
                  ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/25"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
              whileHover={reduce ? {} : { y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 overflow-hidden transition-colors duration-300"
            >
              <div className="relative h-44 bg-zinc-800 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 50%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-zinc-700" viewBox="0 0 80 60" fill="currentColor">
                    <rect x="5" y="25" width="45" height="20" rx="2" />
                    <rect x="20" y="15" width="25" height="15" rx="2" />
                    <circle cx="15" cy="48" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="55" cy="48" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="15" cy="48" r="4" />
                    <circle cx="55" cy="48" r="2.5" />
                    <rect x="50" y="28" width="18" height="10" rx="1" />
                    <line x1="50" y1="30" x2="68" y2="30" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-zinc-950/80 backdrop-blur-sm text-zinc-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-zinc-700">
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col flex-1 p-4">
                <h3
                  className="text-white font-bold text-sm mb-1 line-clamp-1 group-hover:text-amber-300 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display, system-ui)" }}
                >
                  {p.name}
                </h3>
                {p.power && (
                  <p className="text-zinc-500 text-xs mb-3">
                    {t("power")}:{" "}
                    <span className="text-amber-400 font-semibold">{p.power}</span>
                  </p>
                )}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span
                      className="text-2xl font-black text-amber-400"
                      style={{ fontFamily: "var(--font-display, system-ui)" }}
                    >
                      ${p.price.toLocaleString()}
                    </span>
                    <span className="text-zinc-600 text-xs">USD</span>
                  </div>
                  <p className="text-zinc-600 text-xs mb-4">{p.warranty} garantÃ­a</p>
                  <ul className="space-y-1 mb-4">
                    {p.features.slice(0, 2).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-zinc-400 text-xs">
                        <svg className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full text-center bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-zinc-950 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    {t("quote")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-500/40 text-zinc-400 hover:text-amber-400 text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
          >
            Voir tout le catalogue â€” 50+ Ã©quipements
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
