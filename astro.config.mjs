// @ts-check
import { defineConfig } from 'astro/config';

/**
 * URL pubblico del sito, usato per i link canonici e i meta Open Graph.
 * Su Vercel viene ricavato automaticamente dal dominio di produzione;
 * si può forzare con la variabile d'ambiente SITE_URL.
 */
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:4321');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
