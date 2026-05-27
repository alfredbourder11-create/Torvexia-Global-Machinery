import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    other: { google: "notranslate" },
    title: `TORVEXIA Global Machinery | ${t("title")} ${t("titleHighlight")}`,
    description: t("subtitle"),
    keywords: [
      "agricultural machinery",
      "tractors from china",
      "maquinaria agricola china",
      "tractores agricolas",
      "farm equipment exporter",
      "torvexia",
    ],
    openGraph: {
      title: "TORVEXIA Global Machinery",
      description: "International Agricultural Equipment Division",
      type: "website",
      locale: locale,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) notFound();
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      translate="no"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body
        className="bg-zinc-950 text-white antialiased"
        style={{ fontFamily: "var(--font-sans, system-ui, sans-serif)" }}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
