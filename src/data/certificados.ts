const BASE = import.meta.env.BASE_URL;

export type Certificado = {
  id: number;
  titulo: string;
  instituicao: string;
  imagem: string;
  pdf: string;
};

export const certificados: Certificado[] = [
  { id: 1, titulo: "Desenvolvedor Front-End", instituicao: "EBAC", imagem: `${BASE}certificados/thumbs/desenvolvedor-front-end.png`, pdf: `${BASE}certificados/ebac-front-end.pdf` },
  { id: 2, titulo: "Desenvolvedor Back-End", instituicao: "Estudonauta — PHP Moderno", imagem: `${BASE}certificados/thumbs/desenvolvedor-back-end.png`, pdf: `${BASE}certificados/php.pdf` },
  { id: 3, titulo: "HTML5 e CSS3", instituicao: "Estudonauta", imagem: `${BASE}certificados/thumbs/html-css.png`, pdf: `${BASE}certificados/html-css.pdf` },
  { id: 4, titulo: "JavaScript", instituicao: "Estudonauta", imagem: `${BASE}certificados/thumbs/javascript.png`, pdf: `${BASE}certificados/javascript.pdf` },
  { id: 5, titulo: "Figma Aplicado", instituicao: "EBAC", imagem: `${BASE}certificados/thumbs/figma-aplicado.png`, pdf: `${BASE}certificados/ebac/figma-aplicado.pdf.pdf` },
  { id: 6, titulo: "Introdução à Programação", instituicao: "EBAC", imagem: `${BASE}certificados/thumbs/introducao-programacao.png`, pdf: `${BASE}certificados/ebac/introducao-programacao.pdf.pdf` },
];
