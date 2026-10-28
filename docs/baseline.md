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
