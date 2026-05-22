"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const TESTIMONIALS = [
  { name: "Carlos Mendez",      country: "MÃ©xico",          initials: "CM", product: "TORVEXIA TX504",          stars: 5 },
  { name: "Juan Pablo Rivera",  country: "PerÃº",            initials: "JR", product: "TX704 + Rotavator RT180", stars: 5 },
  { name: "Ana Lucia Torres",   country: "Ecuador",         initials: "AT", product: "Presse PB80",             stars: 4 },
  { name: "Miguel Ã. Flores",   country: "El Salvador",     initials: "MF", product: "TX804 Professional",      stars: 5 },
  { name: "Santiago GutiÃ©rrez", country: "Colombia",        initials: "SG", product: "Kit solaire + Pompe",     stars: 4 },
  { name: "Roberto Ixcot",      country: "Guatemala",       initials: "RI", product: "TX604 + Semoir 4 rangs",  stars: 5 },
  { name: "Marcos Oliveira",    country: "Brasil",          initials: "MO", product: "TX504 + Grade Aradora",   stars: 4 },
  { name: "Diego Fuentes",      country: "Chile",           initials: "DF", product: "TX904 4WD",               stars: 5 },
  { name: "Luis Mamani",        country: "Bolivia",         initials: "LM", product: "TX604 + Pulverizador",    stars: 4 },
  { name: "Pedro Galeano",      country: "Paraguay",        initials: "PG", product: "TX704 + Rotavator RT180", stars: 5 },
  { name: "JosÃ© Reyes",         country: "Honduras",        initials: "JR", product: "TX504 Compact",           stars: 4 },
  { name: "Rafael DÃ­az",        country: "Rep. Dominicana", initials: "RD", product: "TX804 + Kit irrigation",  stars: 5 },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400 fill-amber-400" : "text-zinc-700 fill-zinc-700"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const reduce = useReducedMotion();
  const items = t.raw("items") as { text: string; role: string }[];

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, rgba(245,158,11,1) 0%, transparent 60%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((tm, i) => {
            const item = items[i];
            if (!item) return null;
            return (
              <motion.div
                key={tm.name}
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
                whileHover={reduce ? {} : { y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/25 p-6 transition-colors duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <StarRow count={tm.stars} />

                  <p className="text-zinc-400 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                    <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 text-xs font-bold">{tm.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm leading-tight truncate">{tm.name}</p>
                      <p className="text-zinc-500 text-xs truncate">{item.role}</p>
                    </div>
                    <span className="text-xs font-semibold text-amber-500/80 bg-amber-500/8 border border-amber-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      {tm.country}
                    </span>
                  </div>

                  <p className="text-zinc-600 text-xs mt-2 truncate">{tm.product}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
