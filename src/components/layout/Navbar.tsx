"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { routing } from "@/i18n/routing";
import Image from "next/image";

const localeLabels: Record<string, string> = {
  es: "ES", en: "EN", fr: "FR", pt: "PT", it: "IT", zh: "中文",
  de: "DE", hr: "HR", pl: "PL", da: "DA", nl: "NL",
  ro: "RO", sk: "SK", sl: "SL", sv: "SV",
};

const NAV_LINKS = [
  ["catalog", "#catalog"],
  ["payment", "#payment"],
  ["shipping", "#shipping"],
  ["testimonials", "#testimonials"],
  ["contact", "#contact"],
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLocale = (next: string) => {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
    setLangOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/60 shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href={`/${locale}`} className="flex items-center group cursor-pointer">
              <Image
                src="/logo.png"
                alt="TORVEXIA Global Machinery"
                width={140}
                height={44}
                className="h-11 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                priority
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  className="px-3 py-2 text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-zinc-800/50 cursor-pointer"
                >
                  {t(key)}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {/* Language dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {localeLabels[locale]}
                  <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl shadow-black/60 overflow-hidden z-50"
                    >
                      <div className="grid grid-cols-2 gap-0.5 p-1.5">
                        {routing.locales.map((l) => (
                          <button
                            key={l}
                            onClick={() => switchLocale(l)}
                            className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer text-center ${
                              l === locale
                                ? "bg-amber-500 text-zinc-950"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            }`}
                          >
                            {localeLabels[l]}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href={`/${locale}/quote`}
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("quote")}
              </a>
            </div>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-xl flex flex-col pt-16 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8 gap-2">
              {NAV_LINKS.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {t(key)}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-zinc-800 space-y-3">
                <a
                  href={`/${locale}/quote`}
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("quote")}
                </a>
                <div className="grid grid-cols-5 gap-1.5">
                  {routing.locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        l === locale
                          ? "bg-amber-500 text-zinc-950"
                          : "bg-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
