import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "fr", "pt", "it", "zh", "de", "hr", "pl", "da", "nl", "ro", "sk", "sl", "sv"],
  defaultLocale: "es",
  localeDetection: true,
});
