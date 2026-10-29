# CLAUDE.md — Metastorm (repaginação)

## ⛔ Regra nº 1 — uma etapa por vez
- Cada etapa abaixo é executada **separadamente**, só quando o Vinicius pedir explicitamente ("pode fazer a Etapa N").
- Ao terminar uma etapa: pare, mostre o resultado e a verificação, e **espere autorização**. Nunca comece a etapa seguinte por conta própria, nem "adiante um pouco" dela.
- Antes de executar, apresente um plano curto da etapa (arquivos que serão criados/alterados) e confirme se algo for ambíguo.
- Se surgir algo fora do escopo da etapa atual, anote em "Pendências" no fim deste arquivo em vez de fazer.
- Ao concluir uma etapa, marque-a como ✅ na tabela de status e **passe ao Vinicius os comandos de Git** (add/commit/push) para ele mesmo executar, explicando cada um em uma linha. O Claude não faz commit nem push.

## Fluxo de teste: sempre pelo site publicado
- O Vinicius **não roda o site localmente**. Todo teste dele é feito no **GitHub Pages**: ele faz o push, o GitHub Actions gera e publica o site, e ele abre a URL.
- Por isso, toda etapa termina com: (1) build validado pelo Claude, quando possível; (2) comandos de Git; (3) o que conferir no site publicado e em qual URL.
- URL do site: `https://<usuario>.github.io/<repositorio>/`. O original fica em `.../legacy/` para comparar antes × depois.
- Links e caminhos internos **sempre** com `import.meta.env.BASE_URL` (o site roda num subcaminho). Nunca usar `/arquivo` fixo.

## Objetivo
Repaginar a landing page **Metastorm** (plataforma fictícia de torneios de e-Sports, feita originalmente em curso) para que fique:
1. **Muito mais rápida** (hoje pesa ~16 MB, quase tudo em imagens não otimizadas).
2. **Mais bonita e moderna**, mantendo a identidade (logo, laranja, textos).
3. **Responsiva** (hoje só funciona bem em desktop ~1366–1920px).
4. Com **vídeo em loop, mudo, de fundo** no lugar da imagem da seção "Transmissões ao vivo".
5. Com **telas visuais** (sem back-end): Entrar, Criar conta e Painel do usuário (usando a barra da pasta `BarraNav`).

Projeto de portfólio. Créditos no rodapé: "Desenvolvido por Vinicius Kamay".

## Restrição principal: só ferramentas gratuitas
Nada pago: sem serviços, fontes, imagens, vídeos ou bibliotecas com custo. Toda mídia de terceiros precisa ter licença livre (ex.: Pexels, Pixabay, Coverr) e a fonte deve ser anotada em `CREDITS.md`.

## Estado atual (site original) — referência
- HTML/CSS/JS puro: `index.html`, `css/style.css`, `css/reset.css`, `java/main.js`, `BarraNav/` (barra de usuário logado, não usada), `Logo/`, `images/`.
- Seções: Topo (hero "Explore seu lado PRO-PLAYER") → Carrossel de jogos → "Competições para todos os níveis" (Amigos, Gamers, Amador, Profissional) → "Cuidamos de todas as etapas" (Inscrição, Comunicação, Partidas, Divulgação) → "Torneios e transmissões ao vivo" (`images/pn4.png` → vira vídeo) → Rodapé.
- Identidade: laranja `#F36422` (variação `#F05024`), escuro `#1B1D21`, branco `#F8F8F8`; fontes Roboto e Roboto Condensed.
- Problemas conhecidos:
  - Imagens gigantes: `Jogando-Videoame.jpg` 6,4 MB (6720px, exibida a 350px), `amador.jpg` 2,6 MB, `gamer.jpg` 2,3 MB, `painel1.png` 1,5 MB, `pn4.png` 1 MB.
  - Imagens não usadas: `pn2Img1-4`, `nova_hud.png`, `perfil.png`.
  - Google Fonts carregando todos os pesos/itálicos.
  - Sem responsividade (media queries vazias; `margin-left: 515px`, `gap: 535px`, `gap: 50vw`).
  - Bugs: caminho de `bg_branco.png` errado; `@keyframes circulate` inválido (`translateX()` vazio); carrossel clona DOM a cada resize; `<li>` fora de `<ul>`; `alt` vazios; `<h1>` repetido; botões sem destino; textos "Profissinal" e "areá".
- O original fica preservado em `public/legacy/` (somente leitura, publicado em `/legacy/` para comparação). Nunca editar.

## Tecnologias (todas gratuitas)
- **Astro** (site estático) + **CSS puro** com variáveis (tokens). Sem framework de UI e sem Tailwind, salvo decisão registrada.
- `astro:assets` (sharp) para gerar AVIF/WebP responsivos e `srcset` automaticamente.
- Fontes self-hosted via **@fontsource** (Roboto / Roboto Condensed), só pesos usados.
- **ffmpeg** para comprimir o vídeo (WebM + MP4 + poster).
- **Git + GitHub**; deploy em **GitHub Pages** via GitHub Actions (alternativas gratuitas: Netlify, Cloudflare Pages).
- Qualidade: Lighthouse (Chrome DevTools), validador W3C, DevTools no modo responsivo.
- JavaScript mínimo: só onde CSS não resolve (menu mobile, play/pause do vídeo por visibilidade, validação de formulário).

## Estrutura alvo
```
Metastorm/
├─ CLAUDE.md
├─ CREDITS.md            # licenças de mídia de terceiros
├─ README.md
├─ docs/baseline.md      # medições antes × depois
├─ .github/workflows/deploy.yml   # publica no GitHub Pages a cada push na main
├─ public/
│  ├─ legacy/            # site original intacto (não editar), publicado em /legacy/
│  ├─ favicon.svg / favicon.png
│  └─ video/             # live.webm, live.mp4
├─ src/
│  ├─ assets/images/     # imagens-fonte (otimizadas no build)
│  ├─ components/        # Header, Footer, Button, SectionTitle, GameMarquee, LevelCard, StepCard, LiveVideo, UserBar…
│  ├─ layouts/           # BaseLayout.astro, AppLayout.astro (painel)
│  ├─ data/              # dados fictícios (jogos, níveis, etapas, torneios)
│  ├─ pages/             # index, entrar, criar-conta, painel
│  └─ styles/            # tokens.css, global.css
├─ astro.config.mjs
└─ package.json
```

## Etapas (ordem de execução)

| # | Etapa | Status |
|---|-------|--------|
| 0 | Preparação, linha de base e publicação inicial | ✅ (falta o 1º push do Vinicius) |
| 1 | Otimização de mídia | ✅ (aguardando conferência do Vinicius) |
| 2 | Design system e layout base | ✅ (aguardando aprovação visual do Vinicius em `/design/`) |
| 3 | Landing page — seções | ✅ (aguardando aprovação visual do Vinicius na home) |
| 4 | Vídeo da seção "Transmissões ao vivo" | ✅ (vídeo do Vinicius aplicado; aguardando conferência no site publicado) |
| 5 | Telas visuais (Entrar, Criar conta, Painel) | ✅ (aguardando conferência no site publicado) |
| 6 | Animações, acessibilidade e SEO | ⬜ |
| 7 | Revisão final de qualidade | ⬜ |
| 8 | Finalização (README, medição final, repositório) | ⬜ |

### Etapa 0 — Preparação, linha de base e publicação inicial
- Original copiado para `public/legacy/` sem alterações; `.gitignore`; projeto Astro mínimo (Astro 7.3.8) com página provisória "em reconstrução".
- `astro.config.mjs` lê `SITE_URL`/`BASE_PATH` do GitHub Actions; workflow `.github/workflows/deploy.yml` publica no GitHub Pages.
- Linha de base do Lighthouse registrada em `docs/baseline.md`.
- Vinicius: instalar Git, criar o repositório, primeiro push, ativar GitHub Pages (fonte: GitHub Actions).
- **Concluída quando:** a URL do Pages mostra a página provisória e `/legacy/` mostra o site original igual ao de antes.

### Etapa 1 — Otimização de mídia
- Listar imagens usadas vs. não usadas; copiar só as usadas (as originais continuam em `public/legacy/`).
- Levar as usadas para `src/assets/images/` com dimensões máximas coerentes com o uso (ex.: cards ≤ 800px, hero ≤ 2400px).
- Tentar extrair o logo em SVG do `Logo metastorme.ai` (ferramenta gratuita, ex.: Inkscape); se não der, usar PNG otimizado.
- Gerar favicon decente (SVG + PNG 32/180).
- **Concluída quando:** tabela "antes/depois" de peso por arquivo em `docs/baseline.md`; nenhuma imagem-fonte > 500 KB (exceto se justificado).

### Etapa 2 — Design system e layout base
- `tokens.css`: cores, tipografia fluida (`clamp`), espaçamentos, raios, sombras, breakpoints.
- Fontes via @fontsource (só pesos usados, `font-display: swap`).
- `BaseLayout` com `<head>` completo; `Header` responsivo (menu mobile acessível); `Footer`; `Button` (recriando o efeito de borda animada do original); `SectionTitle`.
- Direção visual: manter laranja/escuro/logo; modernizar (mais contraste, profundidade, tema "gamer" escuro onde fizer sentido). Apresentar a direção ao Vinicius antes de aplicar em tudo.
- **Concluída quando:** página de teste mostra os componentes em 360, 768, 1024 e 1440px sem quebra nem scroll horizontal.

### Etapa 3 — Landing page — seções
- Recriar em componentes: Hero, Carrossel de jogos (marquee **só CSS**, sem clonar DOM via JS, pausa no hover e em `prefers-reduced-motion`), Níveis, Etapas, Transmissões (com imagem provisória), Rodapé.
- Conteúdo em `src/data/`; corrigir textos ("Profissional", "área"); um único `<h1>`.
- Botões ENTRAR/CRIAR CONTA apontam para `/entrar` e `/criar-conta` (telas da Etapa 5).
- **Concluída quando:** visual aprovado pelo Vinicius em desktop e celular; sem erros no console; build OK.

### Etapa 4 — Vídeo da seção "Transmissões ao vivo"
- Vídeo **mudo, em loop, autoplay**, curto (ideal ≤ 20 s). Se o Vinicius ainda não tiver o vídeo, usar um de licença livre como provisório e registrar em `CREDITS.md`.
- ffmpeg: WebM (VP9) + MP4 (H.264) em 720p, sem áudio, alvo ≤ 3 MB cada; poster AVIF/WebP extraído do vídeo.
- `<video muted loop playsinline autoplay preload="none" poster>`; só carrega/toca quando visível (IntersectionObserver) e pausa fora da tela.
- `prefers-reduced-motion`: mostra só o poster.
- **Concluída quando:** vídeo não entra no carregamento inicial (verificar na aba Network); toca no Chrome, Firefox e celular.

### Etapa 5 — Telas visuais (sem back-end)
- `/entrar` e `/criar-conta`: formulários com rótulos, validação no navegador e mensagens claras; **não enviam dados para lugar nenhum** (deixar explícito na UI que é demonstração).
- `/painel`: layout de usuário logado com a barra da pasta `BarraNav` (Torneios, Clãs, Notícias, Loja, Perfil, moedas) e conteúdo fictício de `src/data/`.
- **Concluída quando:** navegação entre as 4 páginas funciona; responsivo; nenhum dado é salvo ou enviado.

### Etapa 6 — Animações, acessibilidade e SEO
- Animações leves de entrada ao rolar e micro-interações (só `transform`/`opacity`), todas respeitando `prefers-reduced-motion`.
- Acessibilidade: contraste AA, foco visível, `alt` descritivos, navegação por teclado, landmarks.
- SEO: `title`/`description` por página, Open Graph com imagem, `lang="pt-BR"`, `sitemap`.
- **Concluída quando:** Lighthouse Acessibilidade ≥ 95 e SEO ≥ 95 em todas as páginas.

### Etapa 7 — Revisão final de qualidade
- Revisão feita em **sessão nova** (sem o histórico de implementação), comparando com este arquivo.
- Lighthouse mobile e desktop em todas as páginas; validador W3C; teste manual em 360/768/1024/1440px; checar links, console e Network.
- Atualizar `docs/baseline.md` com o "depois".
- **Concluída quando:** critérios de conclusão (abaixo) todos atendidos ou exceções aprovadas pelo Vinicius.

### Etapa 8 — Finalização
- `README.md`: descrição, tecnologias, como rodar, link do site, antes × depois, créditos.
- Medição final com PageSpeed Insights (rede real) do novo site e do `/legacy/`, registrada em `docs/baseline.md`.
- Descrição, tópicos e link do site no repositório do GitHub (feito pelo Vinicius, com instruções).
- **Concluída quando:** README completo e números finais registrados.

## Design system (definido na Etapa 2) — seguir em todas as etapas
- **Direção:** "transmissão de campeonato". Base escura (carvão), faixas claras e uma faixa laranja alternando, como no original.
- **Assinatura visual (usar com parcimônia):** cantos chanfrados (`--chanfro`), como interface de jogo. Usada no botão principal e na barra do título de seção. Não espalhar em tudo.
- **Tokens:** sempre usar as variáveis de `src/styles/tokens.css`, nunca cores ou tamanhos soltos.
- **Tons de seção:** `class="tom-escuro" | "tom-claro" | "tom-laranja"` na `<section>`; os componentes se adaptam via `--bg`, `--fg`, `--fg-2`, `--linha`, `--destaque`, `--destaque-texto`, `--sobre-destaque`.
- **Contraste:** texto sobre laranja é **escuro** (branco sobre `#F36422` não passa no AA). Em fundo claro, o laranja só aparece em detalhes; textos e links usam `--destaque-texto` (`#C2410C`).
- **Tipografia:** Roboto Condensed 700 em títulos (h1/h2 em maiúsculas, como o original); Roboto 400/500/700 no texto. Escala fluida `--t-sm` … `--t-3xl`. Parágrafos com no máximo `--medida` (65ch).
- **Componentes:** `BaseLayout` (head, fontes, pular para o conteúdo), `Header` (menu mobile acessível, abaixo de 768px), `Footer`, `Button` (`primary` | `outline`, `md` | `sm`; com `href` vira link), `SectionTitle` (`title`, `lead`, `id`, `level`, `align`).
- **Movimento:** só em resposta à ação do usuário (hover, foco, abrir menu). Tudo desligado com `prefers-reduced-motion`.
- **Página de teste:** `src/pages/design.astro` (`/design/`, com `noindex`). Remover ou manter fora do sitemap na Etapa 7.

## Critérios de conclusão do projeto
- Lighthouse **Performance ≥ 90 (mobile) e ≥ 95 (desktop)**; Acessibilidade, Boas práticas e SEO ≥ 95.
- LCP < 2,5 s (mobile, Lighthouse); CLS < 0,1.
- Peso transferido no carregamento inicial da home **< 1 MB** (vídeo fora disso, carregado só ao ficar visível).
- Sem scroll horizontal e sem quebra de layout de 360px a 1920px.
- Zero erros no console; HTML válido; todos os links funcionam.
- Identidade preservada (logo, laranja `#F36422`, textos) e aprovação visual do Vinicius.

## Padrões de trabalho
- Idioma: código (nomes de componentes, variáveis) em inglês; textos do site, comentários e commits em **português**.
- Mobile-first; unidades relativas (`rem`, `clamp`, `%`); nada de margens fixas em px para posicionar blocos.
- HTML semântico (`header`, `nav`, `main`, `section`, `footer`, listas reais).
- Imagens sempre via `<Image>`/`<Picture>` do Astro com `alt`, `width`/`height` e `loading="lazy"` (exceto a do hero, que é `eager` + `fetchpriority="high"`).
- Sem dependências novas sem justificar (e todas gratuitas). Nada de jQuery, bibliotecas de carrossel ou de animação pesadas.
- Commits pequenos por etapa: `etapa-N: descrição` (o Vinicius executa; o Claude sugere os comandos).
- Nunca alterar nem apagar `public/legacy/`.
- Ao fim de cada etapa, responder: o que foi feito, como verificar, o que ficou pendente.
- Não inventar informações (textos, números, nomes de jogos/patrocinadores). Na dúvida, perguntar.

## Comandos
- `npm run build` — gera `dist/` (o GitHub Actions roda isso sozinho a cada push)
- `npm run dev` / `npm run preview` — servidor local (opcional; o Vinicius testa pelo GitHub Pages)
- Git do dia a dia: `git add .` → `git commit -m "etapa-N: ..."` → `git push`

## Pendências / decisões em aberto
- **Etapa 1 — mídia com marcas de terceiros:** as fotos `nivel-profissional.jpg` (patrocinadores visíveis), `jogos-videoame.jpg` e os cards do carrossel (arte de jogos) têm marcas de terceiros. Confirmar origem e licença antes de publicar em público; registrar em `CREDITS.md`.
- **Etapa 1 — carrossel:** as 5 miniaturas são 133×160 px e ficam borradas em 200 px. Pedir versões maiores ao Vinicius, se ele tiver.
- **Etapa 2 — `bg_branco.png`:** decidido não usar (o tema novo é escuro e a imagem nunca apareceu no original).
- **Etapa 1 — logo:** versões SVG em `src/assets/logo/` (`logo-escuro.svg`, `logo-branco.svg`, `icone-branco.svg`). O `logo-branco.svg` já está no Header e no Footer.
- **Etapa 3 — menu:** o link "Notícias" foi trocado por âncoras das seções reais (Competições, Etapas, Ao vivo), porque o original não tem notícias e não vamos inventar conteúdo. Se o Vinicius quiser Notícias, criar a seção com textos fornecidos por ele.
- **Etapa 3 — foto do topo:** o PNG original tinha 14 linhas transparentes embaixo (cortadas) e é muito escura; a página aplica `filter: brightness(1.5)` e um véu só no lado do texto. Se trocar a foto, revisar o véu em `Hero.astro`.
- **Etapa 4 — vídeo:** trecho 0:22–0:38 do `Download.mp4` enviado pelo Vinicius (repost no TikTok de @thelastclipscsgo da transmissão do IEM Rio Major 2022). Marca d'água do TikTok mantida de propósito (não remover). ⚠️ Não é licença livre: registrado no `CREDITS.md`; para divulgação pública, sugerir gameplay gravada pelo próprio Vinicius. Ele pediu "como um gif": mantido em vídeo porque o GIF teria 19,5 MB contra ~1,4 MB (ver `docs/video.md`).
- **Etapa 4 — decisão técnica:** o `<video>` NÃO usa o atributo `autoplay`. O `LiveVideo.astro` toca e pausa por visibilidade (IntersectionObserver), baixa o poster só perto da tela e tem botão pausar/reproduzir (acessibilidade). Respeita `prefers-reduced-motion` e `saveData`.
- **Etapa 4 — não testado:** reprodução no Firefox e no Safari/iPhone (o ambiente só tem Chromium). O Vinicius deve conferir no site publicado; WebM é a 1ª fonte e o MP4 é o plano B.
- **Etapa 5 — telas:** `/entrar/`, `/criar-conta/` e `/painel/` prontas. Formulários sem atributo `name` (nada é serializado), validação própria em português, ao validar levam ao painel sem enviar/salvar nada. O painel tem `noindex` de propósito (por isso o SEO do Lighthouse nele é 63; as demais páginas dão 100). Conteúdo fictício em `src/data/painel.ts` (torneios, clã, números): revisar/aprovar com o Vinicius. Notícias e Loja são só placeholders. Não há checkbox de termos (não existem termos de uso).
- Pasta fica dentro do **Google Drive**. Como o build roda no GitHub, não é preciso `npm install` local (sem `node_modules` no Drive). Se um dia instalar localmente, preferir uma pasta fora do Drive. Evitar mexer no repositório por dois computadores ao mesmo tempo (o Drive pode criar conflitos na pasta `.git`).
- Nome do repositório e URL final no GitHub Pages: preencher após o 1º push.
