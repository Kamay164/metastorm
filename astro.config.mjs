// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL e BASE_PATH são preenchidos automaticamente pelo GitHub Actions
// (.github/workflows/deploy.yml) a partir do seu usuário e do nome do repositório.
// Rodando localmente, o site fica na raiz ("/").
// A barra no fim garante que import.meta.env.BASE_URL sempre termine com "/".
const base = (process.env.BASE_PATH || '').replace(/\/+$/, '') + '/';

export default defineConfig({
  site: process.env.SITE_URL,
  base,
});
