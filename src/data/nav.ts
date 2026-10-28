// Links do cabeçalho. `path` é relativo à raiz do site (o BASE_URL é somado nos componentes).
// Apontam para as seções da página inicial.
export const navLinks = [
  { label: 'Competições', path: '#competicoes' },
  { label: 'Etapas', path: '#etapas' },
  { label: 'Ao vivo', path: '#ao-vivo' },
] as const;

export const navActions = {
  entrar: { label: 'Entrar', path: 'entrar/' },
  criarConta: { label: 'Criar conta', path: 'criar-conta/' },
} as const;
