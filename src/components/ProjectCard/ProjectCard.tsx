import "./ProjectCard.css";
import type { Projeto } from "../../data/projetos";

type Props = {
  projeto: Projeto;
};

export default function ProjectCard({ projeto }: Props) {
  return (
    <div className="project-card">
      {/* Imagem do projeto */}
      <img
        src={projeto.imagem}
        alt={projeto.titulo}
        className="project-image"
        loading="lazy"
        decoding="async"
        width="800"
        height="500"
      />

      <div className="project-content">
        <span className="categoria">{projeto.categoria}</span>

        <h3>{projeto.titulo}</h3>

        <p>{projeto.descricao}</p>

        <div className="tecnologias">
          {projeto.tecnologias.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="links">
          <a href={projeto.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          {projeto.demo && (
            <a href={projeto.demo} target="_blank" rel="noreferrer">
              Demonstração
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
