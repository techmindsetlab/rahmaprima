import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://rahmaprima.vercel.app",
  output: "static",
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    ssr: { noExternal: ["gsap"] },
  },
});
