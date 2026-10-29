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

## Medição real (PageSpeed Insights) — preencher após a 1ª publicação

| Métrica | Original (`/legacy/`) celular | Original desktop |
|---|---|---|
| Performance | | |
| LCP | | |

## Depois (preencher na Etapa 7)

| Métrica | Novo site celular | Novo site desktop |
|---|---|---|
| Performance | | |
| Acessibilidade | | |
| Boas práticas | | |
| SEO | | |
| LCP | | |
| Peso inicial | | |

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

