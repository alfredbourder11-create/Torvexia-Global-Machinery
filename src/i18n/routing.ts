import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "fr", "pt", "it", "zh"],
  defaultLocale: "es",
  localeDetection: true,
});
