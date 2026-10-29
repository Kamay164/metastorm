# Como trocar o vídeo da seção "Transmissões ao vivo"

O vídeo atual é um trecho de 15 s (0:22–0:38) do arquivo `Download.mp4` enviado pelo Vinicius, sem áudio, com o fim fundido ao começo para o loop não dar pulo. A origem está no `CREDITS.md`.
Para trocar, é só enviar o novo arquivo (pode ser o original, de qualquer tamanho) e dizer o trecho desejado, que eu recorto e comprimo.

**Por que vídeo e não GIF:** o mesmo trecho como GIF, mesmo em 640 px e 15 quadros por segundo, teria **19,5 MB**. Como vídeo, fica com 1,4 MB (MP4) e 1,3 MB (WebM), com mais qualidade. O site já toca o vídeo como um GIF: sozinho, mudo e em loop.

## O que o site espera

| Arquivo | Formato | Tamanho ideal |
|---|---|---|
| `public/video/live.webm` | VP9, sem áudio, 1024×576 ou 1280×720 | até ~3 MB |
| `public/video/live.mp4` | H.264, sem áudio, 1024×576 ou 1280×720 | até ~3 MB |
| `src/assets/images/live-poster.jpg` | primeiro quadro do vídeo | ~100 KB |

Dicas para o vídeo definitivo:
- Duração curta, de **10 a 20 segundos**. Vídeo longo pesa muito e ninguém assiste em loop.
- Proporção **16:9** (horizontal). Outras proporções são cortadas para caber.
- O som é removido (o vídeo toca mudo, em loop).
- O final deve "emendar" com o começo, para o loop não dar um pulo.

## Comandos usados (precisa do ffmpeg, que é gratuito)

Troque `entrada.mp4` pelo seu arquivo.

```bash
# WebM (VP9)
ffmpeg -i entrada.mp4 -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" -an -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 public/video/live.webm

# MP4 (H.264)
ffmpeg -i entrada.mp4 -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720" -an -c:v libx264 -preset veryfast -crf 27 -profile:v main -pix_fmt yuv420p -movflags +faststart public/video/live.mp4

# Poster (primeiro quadro)
ffmpeg -i public/video/live.mp4 -frames:v 1 quadro.png
```

Depois salve o `quadro.png` como JPG (qualidade ~82) em `src/assets/images/live-poster.jpg`.

## Como o site se comporta

- O vídeo **não baixa** junto com a página. Só começa quando a seção aparece na tela e pausa quando sai.
- Com "reduzir movimento" ligado no sistema, ou economia de dados, ele **não toca sozinho** (fica só a imagem de capa). A pessoa pode tocar pelo botão.
- Sem JavaScript, aparece só a imagem de capa.
- O botão "Pausar vídeo" dá a quem visita controle sobre o movimento.
