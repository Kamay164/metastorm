// Etapas do torneio. A ordem importa: é o caminho que o campeonato percorre.
export interface Etapa {
  titulo: string;
  texto: string;
}

export const etapas: Etapa[] = [
  {
    titulo: 'Inscrição',
    texto: 'Criamos formulários personalizados para cada modalidade do torneio.',
  },
  {
    titulo: 'Comunicação',
    texto: 'Criação de uma sala de bate-papo para os integrantes do torneio.',
  },
  {
    titulo: 'Partidas',
    texto: 'Organizamos a chave do torneio e ordem das partidas.',
  },
  {
    titulo: 'Divulgação',
    texto: 'Disponibilizamos uma área de divulgação.',
  },
];
