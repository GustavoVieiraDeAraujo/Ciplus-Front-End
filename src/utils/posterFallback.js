// Usado quando o poster de um filme (movie_image_link) nao carrega,
// por exemplo os links antigos do Discord que expiraram
export const posterIndisponivel = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="230" viewBox="0 0 180 230">
  <rect width="180" height="230" fill="#1a1533"/>
  <path d="M50 90 L90 60 L130 90 L130 150 L50 150 Z" fill="none" stroke="#4a4370" stroke-width="4"/>
  <text x="90" y="185" fill="#8a83b0" font-family="Helvetica, Arial, sans-serif" font-size="13" text-anchor="middle">Pôster indisponível</text>
</svg>
`);
