// Links do cabeçalho. `path` é relativo à raiz do site (o BASE_URL é somado nos componentes).
export const navLinks = [
  { label: 'Notícias', path: '#noticias' },
] as const;

export const navActions = {
  entrar: { label: 'Entrar', path: 'entrar/' },
  criarConta: { label: 'Criar conta', path: 'criar-conta/' },
} as const;
