// Conteúdo FICTÍCIO do painel de demonstração. Nada aqui vem de um servidor.
export const usuario = {
  nome: 'Jogador Demo',
  nivel: 'Amador',
  moedas: '3.866,00', // valor que aparecia na barra do site original
};

export const painelLinks = [
  { label: 'Torneios', id: 'torneios' },
  { label: 'Clãs', id: 'clas' },
  { label: 'Notícias', id: 'noticias' },
  { label: 'Loja', id: 'loja' },
  { label: 'Perfil', id: 'perfil' },
] as const;

export const resumo = [
  { rotulo: 'Torneios jogados', valor: '12' },
  { rotulo: 'Vitórias', valor: '7' },
  { rotulo: 'Posição no ranking', valor: '#48' },
] as const;

export const torneios = [
  { jogo: 'Valorant', nome: 'Copa Metastorm Amadora', data: '15 nov', vagas: '12 de 16 vagas', nivel: 'Amador' },
  { jogo: 'CS:GO', nome: 'Liga dos Amigos', data: '22 nov', vagas: '6 de 8 vagas', nivel: 'Amigos' },
  { jogo: 'League of Legends', nome: 'Desafio Gamers', data: '29 nov', vagas: '20 de 32 vagas', nivel: 'Gamers' },
] as const;

export const cla = {
  nome: 'Tempestade Laranja',
  membros: 14,
  descricao: 'Clã de demonstração. Entre para jogar em equipe nos torneios.',
};
