"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const LINKS = [
  { key: "catalog", href: "#catalog" },
  { key: "payment", href: "#payment" },
  { key: "shipping", href: "#shipping" },
  { key: "testimonials", href: "#testimonials" },
  { key: "contact", href: "#contact" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href={`/${locale}`} className="inline-flex mb-4 cursor-pointer group">
              <Image
                src="/logo.png"
                alt="TORVEXIA Global Machinery"
                width={160}
                height={50}
                className="h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
              {t("tagline")}
            </p>
            <div className="flex gap-6">
              {[
                { value: "18+", label: "Pays" },
                { value: "500+", label: "Exportations" },
                { value: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-amber-400 font-black text-lg" style={{ fontFamily: "var(--font-display, system-ui)" }}>
                    {s.value}
                  </p>
                  <p className="text-zinc-600 text-xs uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-zinc-500 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-0 h-px bg-amber-500 group-hover:w-3 transition-all duration-200" />
                    {tNav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "Qingdao, China" },
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "Coming soon" },
                { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", text: "Coming soon" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-amber-500/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  <span className="text-zinc-500 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            © {year} TORVEXIA Global Machinery. {t("rights")}
          </p>
          <div className="flex items-center gap-1">
            {["es", "en", "fr", "pt", "it", "zh"].map((l) => (
              <a
                key={l}
                href={`/${l}`}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 cursor-pointer ${
                  l === locale
                    ? "text-amber-400"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
