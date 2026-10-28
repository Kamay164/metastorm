import type { ImageMetadata } from 'astro';
import amigos from '../assets/images/jogos-videoame.jpg';
import gamers from '../assets/images/nivel-gamer.jpg';
import amador from '../assets/images/nivel-amador.jpg';
import profissional from '../assets/images/nivel-profissional.jpg';

export interface Nivel {
  nome: string;
  imagem: ImageMetadata;
  alt: string;
  /** Ajuste do enquadramento da foto no cartão (object-position). */
  posicao?: string;
}

export const niveis: Nivel[] = [
  {
    nome: 'Amigos',
    imagem: amigos,
    alt: 'Duas pessoas sentadas no chão jogando videogame com controles nas mãos',
    posicao: '50% 45%',
  },
  {
    nome: 'Gamers',
    imagem: gamers,
    alt: 'Jogador sorrindo, de headset, em frente ao computador num ambiente com luz azul',
    posicao: '50% 30%',
  },
  {
    nome: 'Amador',
    imagem: amador,
    alt: 'Jogadores de headset lado a lado em computadores, sob luzes vermelha e azul',
    posicao: '75% 50%',
  },
  {
    nome: 'Profissional',
    imagem: profissional,
    alt: 'Equipe profissional jogando numa arena de e-Sports, com telas e patrocinadores ao redor',
    posicao: '40% 50%',
  },
];
