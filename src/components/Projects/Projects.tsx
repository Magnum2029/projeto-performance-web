import { useState } from "react";
import "./Projects.css";

import { projetos } from "../../data/projetos";
import ProjectCard from "../ProjectCard/ProjectCard";

const categorias = ["Todos", "React", "Next.js", "Python"];

export default function Projects() {
  const [categoria, setCategoria] = useState("Todos");

  const lista =
    categoria === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === categoria);

  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>

      {/* Botões de filtro */}
      <div className="filtros">
        {categorias.map((item) => (
          <button
            key={item}
            className={categoria === item ? "ativo" : ""}
            onClick={() => setCategoria(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards dos projetos */}
      <div className="cards">
        {lista.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}