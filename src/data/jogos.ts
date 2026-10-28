import type { ImageMetadata } from 'astro';
import lol from '../assets/images/carrossel-1.webp';
import valorant from '../assets/images/carrossel-2.webp';
import csgo from '../assets/images/carrossel-3.webp';
import warzone from '../assets/images/carrossel-4.webp';
import fortnite from '../assets/images/carrossel-5.webp';

// Jogos do carrossel. O nome vem do que aparece escrito em cada capa.
export interface Jogo {
  nome: string;
  imagem: ImageMetadata;
}

export const jogos: Jogo[] = [
  { nome: 'League of Legends', imagem: lol },
  { nome: 'Valorant', imagem: valorant },
  { nome: 'CS:GO', imagem: csgo },
  { nome: 'Call of Duty Warzone', imagem: warzone },
  { nome: 'Fortnite', imagem: fortnite },
];
