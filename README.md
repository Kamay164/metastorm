# Metastorm

Landing page e telas de demonstração de uma plataforma **fictícia** de torneios de e-Sports. Projeto de portfólio, refeito a partir de um site feito num curso, com foco em **desempenho**, visual moderno, responsividade e acessibilidade.

🔗 **Site:** `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`  
🕰️ **Versão original (para comparar):** `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/legacy/`

> Marca fictícia. Nenhum dado digitado nas telas de Entrar e Criar conta é enviado ou salvo.

## O que tem

- **Home:** topo, carrossel de jogos, níveis de competição, etapas do torneio e vídeo de transmissão ao vivo.
- **Entrar / Criar conta:** formulários com validação em português (demonstração, sem back-end).
- **Painel:** área do usuário com dados fictícios.
- Menu responsivo, animações de entrada ao rolar, vídeo que toca só quando aparece na tela, carrossel com botão de pausa.

## Antes × depois

Medição local com Lighthouse 13.6 (a medição em rede real está em [`docs/baseline.md`](docs/baseline.md)).

| | Original | Novo |
|---|---|---|
| Peso da página inicial | 13,7 MB | **~230 KB** |
| Desempenho (celular / desktop) | 97 / 79 | **100 / 100** |
| Acessibilidade | 82 | **100** |
| Boas práticas | 92 | **100** |
| SEO | 91 | **100** |
| LCP no desktop | 4,0 s | **0,5 s** |
| Responsivo | só desktop | **360 a 1920 px** |

Como chegou lá: imagens convertidas para AVIF/WebP em vários tamanhos, fontes hospedadas no próprio site (só os pesos usados), CSS puro sem bibliotecas, JavaScript mínimo, carrossel só com CSS e vídeo comprimido (1,4 MB em vez de 19,5 MB como GIF) que só baixa quando fica visível.

## Tecnologias (todas gratuitas)

- [Astro](https://astro.build) (site estático) + CSS puro com variáveis
- Fontes Roboto e Roboto Condensed via `@fontsource` (licença OFL)
- ffmpeg para o vídeo (WebM + MP4)
- GitHub Actions + GitHub Pages para publicar

## Como rodar

Precisa do Node 22.12 ou mais novo.

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # gera a pasta dist/
npm run preview   # testa o resultado do build
```

A publicação é automática: a cada `git push` na branch `main`, o workflow em `.github/workflows/deploy.yml` gera o site e publica no GitHub Pages. O endereço e o subcaminho vêm das variáveis `SITE_URL` e `BASE_PATH` (ver `astro.config.mjs`).

## Estrutura

```
src/components/   componentes (Header, Hero, Button, formulários…)
src/layouts/      BaseLayout (head, SEO, rodapé)
src/pages/        home, entrar, criar-conta, painel, sitemap
src/data/         conteúdo (jogos, níveis, etapas, painel fictício)
src/styles/       tokens.css (design system) e global.css
public/legacy/    site original, intacto
docs/             medições e notas do vídeo
```

O guia de design e as regras do projeto estão em [`CLAUDE.md`](CLAUDE.md).

## Créditos

Desenvolvido por [Vinicius Kamay](mailto:viniciuskamay123@gmail.com), com apoio do Claude (Anthropic).

Fotos, capas de jogos e o vídeo vêm do projeto original ou de terceiros e são usados só de forma ilustrativa, neste portfólio sem fins comerciais. Origem e pendências de licença em [`CREDITS.md`](CREDITS.md).
