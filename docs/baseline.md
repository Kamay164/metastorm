# Linha de base — site original (antes da repaginação)

Medido em 28/10/2026 com Lighthouse 13.6, servindo o site original numa máquina de teste (localhost).

## Notas do Lighthouse

| Métrica | Celular | Desktop |
|---|---|---|
| Performance | 97 | 79 |
| Acessibilidade | 82 | 82 |
| Boas práticas | 92 | 92 |
| SEO | 91 | 91 |
| LCP | 1,4 s | 4,0 s |
| CLS | 0 | 0 |
| Speed Index | 4,5 s | 0,5 s |
| **Peso total da página** | **13,7 MB** | **13,7 MB** |

> ⚠️ **Atenção:** a nota de Performance no celular (97) parece boa, mas engana. O teste rodou em localhost, onde o "download" é praticamente instantâneo, e as fontes do Google não carregaram no ambiente de teste. O dado que importa é o **peso de 13,7 MB**: num 4G real, isso leva vários segundos e gasta o plano de dados de quem visita.
> A medição definitiva do "antes" será feita com o **PageSpeed Insights** (grátis, rede real) depois da primeira publicação, usando a cópia do original em `/legacy/`.

## Os 5 arquivos mais pesados

| Arquivo | Peso | Como aparece no site |
|---|---|---|
| `images/Jogando-Videoame.jpg` | 6,3 MB | card de 350×350 px (a foto tem 6720×4480) |
| `images/amador.jpg` | 2,6 MB | card de 350×350 px (a foto tem 6000×4000) |
| `images/gamer.jpg` | 2,3 MB | card de 350×350 px (a foto tem 4000×6000) |
| `images/painel1.png` | 1,5 MB | fundo do topo (hero) |
| `images/pn4.png` | 1,0 MB | imagem da seção "Transmissões ao vivo" (vai virar vídeo) |

Só esses 5 arquivos somam ~13,7 MB, quase o peso total da página.

## Medição real (PageSpeed Insights) — preencher após a publicação

Como medir (grátis, sem login): abra https://pagespeed.web.dev, cole a URL, clique em "Analisar" e anote as notas de **Celular** e de **Computador**. Faça nas duas páginas abaixo, de preferência 2 ou 3 vezes (os números variam um pouco) e anote a mediana.

| Página | Celular: Desempenho / LCP | Desktop: Desempenho / LCP |
|---|---|---|
| Original (`/legacy/`) | | |
| Novo (home) | | |
| Novo (`/entrar/`) | | |

## Depois — Etapa 7 (medição local, Lighthouse 13.6, site servido em `/Metastorm/` como no GitHub Pages)

| Métrica | Original celular | **Novo celular** | Original desktop | **Novo desktop** |
|---|---|---|---|---|
| Performance | 97 | **100** | 79 | **100** |
| Acessibilidade | 82 | **100** | 82 | **100** |
| Boas práticas | 92 | **100** | 92 | **100** |
| SEO | 91 | **100** | 91 | **100** |
| LCP | 1,4 s | **1,1 s** | 4,0 s | **0,5 s** |
| CLS | 0 | 0,001 | 0 | 0,001 |
| Peso inicial da home | 13,7 MB | **~231 KB** | 13,7 MB | **~216 KB** |

Valores da home. Entrar e Criar conta: 100 em tudo (LCP 0,8–0,9 s no celular, ~148 KB). Painel: 100 / 100 / 100 / 66 (o SEO menor vem só do `noindex` proposital).
O peso foi medido sem compressão (servidor de teste); no GitHub Pages, com gzip, o HTML, o CSS e o JS ficam ainda menores. A medição com rede real (PageSpeed Insights) fica para a Etapa 8.

**Outras verificações da Etapa 7**
- Validador oficial do W3C (Nu HTML Checker): **0 erros** nas 5 páginas. Restam só avisos de `role="list"` em `<ul>`/`<ol>`, que é proposital (o Safari tira a semântica de lista quando o CSS remove os marcadores).
- Links: 76 verificados, nenhum quebrado.
- Largura: em 360, 768, 1024, 1440 e 1920 px nenhum elemento passa da borda da tela (medido elemento por elemento, porque o `overflow-x: clip` do `body` esconderia a sobra numa medição só da rolagem).
- axe-core 4 (WCAG 2.2 AA): 0 violações nas 4 páginas.
- Console: 0 erros nas 4 páginas (390 e 1440 px). Nenhuma requisição com erro.
- Vídeo: não é baixado no carregamento inicial.
- O `/legacy/` continua com os erros do original (404 do `bg_branco.png`), de propósito: ele não é editado.

## Etapa 1 — otimização de mídia (antes × depois)

Imagens usadas pelo site. As que não aparecem no código (`pn2Img1-4`, `nova_hud.png`, `perfil.png`, `Logo_Metastorm.png`, `icon.png`) ficam só no `legacy/`.

| Original | Peso | Novo arquivo | Peso | Uso |
|---|---|---|---|---|
| `images/Jogando-Videoame.jpg` | 6268 KB | `jogos-videoame.jpg` | 64 KB | card de 350 px |
| `images/gamer.jpg` | 2264 KB | `nivel-gamer.jpg` | 49 KB | card de 350 px |
| `images/amador.jpg` | 2601 KB | `nivel-amador.jpg` | 51 KB | card de 350 px |
| `images/proplayer.jpg` | 55 KB | `nivel-profissional.jpg` | 44 KB | card de 350 px |
| `images/painel1.png` | 1499 KB | `hero-painel.webp` | 29 KB | fundo do topo |
| `images/pn4.png` | 1037 KB | `transmissao.jpg` | 157 KB | vira vídeo na Etapa 4 (poster) |
| `images/coin.png` | 46 KB | `moeda.webp` | 4 KB | moeda da barra (~20 px) |
| `images/seta_img.png` | 0 KB | `seta.webp` | 0 KB | seta entre as etapas |
| `images/img_painel1.png` | 54 KB | `carrossel-1.webp` | 10 KB | carrossel |
| `images/img2_painel1.png` | 43 KB | `carrossel-2.webp` | 8 KB | carrossel |
| `images/img3_painel1.png` | 37 KB | `carrossel-3.webp` | 5 KB | carrossel |
| `images/img4_painel1.png` | 51 KB | `carrossel-4.webp` | 10 KB | carrossel |
| `images/img5_painel1.png` | 48 KB | `carrossel-5.webp` | 8 KB | carrossel |
| **Total** | **14004 KB** | | **440 KB** | |

**Logo:** extraído do `Logo metastorme.ai` em SVG vetorial, em duas versões: `logo-escuro.svg` (fundo claro) e `logo-branco.svg` (fundo escuro), mais a marca `icone-branco.svg`. As letras já são curvas, sem depender de fonte instalada.

**Favicon:** `favicon.svg` (fundo escuro, marca branca), `favicon.png` (32 px) e `apple-touch-icon.png` (180 px). O antigo tinha 14×11 px.

**Atenção:** as miniaturas do carrossel (133×160 px) são exibidas em 200 px, então ficam levemente borradas. Para melhorar, precisa de versões maiores dessas imagens.

## Etapa 3 — landing page nova (medição local, Lighthouse 13.6)

| Métrica | Original (celular) | Novo (celular) | Original (desktop) | Novo (desktop) |
|---|---|---|---|---|
| Performance | 97 | **100** | 79 | **100** |
| Acessibilidade | 82 | **100** | 82 | **100** |
| Boas práticas | 92 | **100** | 92 | **100** |
| SEO | 91 | **100** | 91 | **100** |
| LCP | 1,4 s | 1,7 s | 4,0 s | **0,4 s** |
| CLS | 0 | 0,001 | 0 | 0,001 |
| Peso carregado | 13,7 MB | **182 KB** | 13,7 MB | **228 KB** |

O peso inicial caiu cerca de **75 vezes**. As notas de Performance foram medidas em localhost, então a medição definitiva (rede real, PageSpeed Insights) fica para a Etapa 7. O LCP do celular subiu um pouco porque o Lighthouse simula uma rede lenta e agora a foto do topo é de fato a maior imagem carregada, mas continua abaixo de 2,5 s.

## Etapa 4 — vídeo na seção "Transmissões ao vivo" (medição local)

| Item | Resultado |
|---|---|
| Vídeo (15 s de gameplay, 1024×576, 30 fps, sem áudio) | WebM 1,3 MB · MP4 1,4 MB (como GIF seriam 19,5 MB) |
| Peso da home no carregamento (celular) | **182 KB** (o vídeo e o poster não entram) |
| Lighthouse (celular / desktop) | **100 / 100** em Desempenho, Acessibilidade, Boas práticas e SEO |
| LCP | 1,7 s (celular) · 0,4 s (desktop) |

Ao primeiro teste, o poster do vídeo (abaixo da dobra) foi baixado junto com a página e o peso subiu para 273 KB, com LCP de 2,4 s no celular. Passei a baixar o poster só quando o vídeo está perto da tela, e os números voltaram ao normal.

## Etapa 5 — telas Entrar, Criar conta e Painel (medição local, Lighthouse 13.6)

| Página | Celular (Perf/A11y/BP/SEO) | Desktop | LCP celular | Peso |
|---|---|---|---|---|
| `/entrar/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 0,8 s | ~100 KB |
| `/criar-conta/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 0,8 s | ~100 KB |
| `/painel/` | 100 / 100 / 100 / 63 | 100 / 100 / 100 / 63 | 0,8 s | ~104 KB |

O SEO de 63 no painel é esperado: a página tem `noindex` de propósito (é demonstração, não deve aparecer no Google). Sem scroll horizontal em 360/768/1024/1440 px e sem erros no console. Ao validar o formulário nenhuma requisição é feita e nada vai para localStorage, sessionStorage ou cookies.

## Etapa 6 — animações, acessibilidade e SEO (medição local, Lighthouse 13.6)

| Página | Celular (Perf/A11y/BP/SEO) | Desktop | LCP celular | Peso |
|---|---|---|---|---|
| `/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1,4 s | ~197 KB |
| `/entrar/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 0,8 s | ~101 KB |
| `/criar-conta/` | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 0,8 s | ~101 KB |
| `/painel/` | 100 / 100 / 100 / 66 | 100 / 100 / 100 / 66 | 0,8 s | ~104 KB |

- **axe-core 4** (regras WCAG 2.0/2.1/2.2 A e AA + boas práticas): 0 violações nas 4 páginas, em 360 e 1440 px.
- **Teclado:** todos os itens recebem foco visível, na ordem da página (pular para o conteúdo → logo → menu → botões → vídeo → rodapé).
- **Reduzir movimento:** todos os elementos animados ficam visíveis desde o início.
- O SEO 66 do painel vem só do `noindex` proposital.

### Revisão independente (Etapa 7) — achados e correções

Um revisor separado, sem o histórico da implementação, comparou o projeto com o `CLAUDE.md`. Achados e o que foi feito:

| # | Gravidade | Achado | Correção |
|---|---|---|---|
| 1 | Alta | Home de 360 a 1023 px: título dos jogos cortado e página ~1500 px de largura (a coluna da grade esticava até a faixa do carrossel; regressão da Etapa 6) | `grid-template-columns: minmax(0, 1fr)` em `.jogos` e `min-width: 0` no bloco do carrossel |
| 2 | Média | Senha visível passava por baixo do botão "Ocultar" | espaço do botão por classe fixa (`campo__input--senha`), não por `[type=password]` |
| 3 | Média | Links da barra do painel sem margem lateral | barra refeita em grade: no desktop numa linha só (como o original), no celular alinhada ao conteúdo |
| 4 | Média | Imagem lateral de Entrar/Criar conta borrada (foto horizontal esticada num painel vertical) | trocada por composição vetorial: marca do controle + "Explore seu lado pro-player", sem foto |
| 5 | Média | Carrossel sem como pausar por teclado/toque (WCAG 2.2.2) | botão "Pausar animação" / "Retomar animação" |
| 6 | Baixa | `aria-pressed` junto com troca de texto; dois botões "Mostrar" iguais | `aria-pressed` removido; nomes "Mostrar senha" / "Mostrar confirmar senha" |
| 7 | Baixa | "Inscrever-se" do painel perdia o foco e não era anunciado | `aria-disabled`, aviso em `aria-live` e nome do torneio via `aria-describedby` |
| 8 | Baixa | Código morto e comentários desatualizados | removidos/corrigidos |
| 9 | Baixa | Cores soltas no código | novos tokens `--c-erro`, `--laranja-suave`, `--carvao-rgb`, `--gelo-rgb`, `--laranja-rgb` |
| 10 | Baixa | Ordem do painel diferente da barra | igualada (Torneios, Clãs, Notícias, Loja, Perfil) |
| 11 | Baixa | Dica e erro repetidos no campo | a dica some enquanto o erro aparece |
| 12 | Baixa | Rodapé apertado em 768 px | 3 colunas só a partir de 1024 px |
| 13 | Baixa | Cabeçalho não marcava a página atual | `aria-current="page"` com borda completa e sublinhado no botão |

Também corrigido pelas checagens automáticas: `pathLength` em `<rect>` (SVG 2, reprovado no validador W3C) trocado por `<path>` no botão de contorno; `<script>` do painel que ficava fora do `</html>`.

