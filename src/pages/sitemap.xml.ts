/**
 * Sitemap gerado no build, sem dependência extra.
 * Só entram as páginas públicas: o painel e a página /design/ têm noindex e ficam de fora,
 * e o /legacy/ é só para comparação.
 */
import type { APIRoute } from 'astro';

const paginas = ['', 'entrar/', 'criar-conta/'];

export const GET: APIRoute = ({ site }) => {
  const origem = site ?? new URL('http://localhost:4321');
  const base = import.meta.env.BASE_URL;
  const urls = paginas
    .map((p) => `  <url><loc>${new URL(base + p, origem).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
