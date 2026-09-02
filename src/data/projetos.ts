const BASE = import.meta.env.BASE_URL;

export type Projeto = {
  id: number;
  titulo: string;
  categoria: "React" | "Next.js" | "Python";
  descricao: string;
  tecnologias: string[];
  github: string;
  demo: string;
  imagem: string;
};

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Luxury Wheels API",
    categoria: "Python",
    descricao:
      "API REST para gerenciamento de uma locadora de carros de luxo.",
    tecnologias: ["Python", "Flask", "SQLite"],
    github: "https://github.com/Magnum2029/luxury-wheels",
    demo: "https://github.com/Magnum2029/luxury_wheels",
    imagem: `${BASE}images/Projeto/luxury-wheels.png`,
  },

  {
    id: 2,
    titulo: "Portal Viagens",
    categoria: "React",
    descricao: "Projeto em React para destinos turísticos.",
    tecnologias: ["React", "TypeScript"],
    github: "https://github.com/Magnum2029/portal-viagens",
    demo: "https://portal-viagens.vercel.app",
    imagem: `${BASE}images/Projeto/portal-viagens.png`,
  },

  {
    id: 3,
    titulo: "Next Blog IBAC",
    categoria: "Next.js",
    descricao: "Blog desenvolvido com Next.js 15 e App Router.",
    tecnologias: ["Next.js", "TypeScript"],
    github: "https://github.com/Magnum2029/next-blog-ibac",
    demo: "https://next-blog-ibac.vercel.app",
    imagem: `${BASE}images/Projeto/next-blog.png`,
  },

  {
    id: 4,
    titulo: "Lista de Tarefas",
    categoria: "React",
    descricao:
      "Projeto com testes automatizados usando Jest e React Testing Library.",
    tecnologias: ["React", "Jest"],
    github: "https://github.com/Magnum2029/next-tarefas-testes",
    demo: "",
    imagem: `${BASE}images/Projeto/tarefas.png`,
  },
];
