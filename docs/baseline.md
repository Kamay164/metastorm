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
