import "./Certificados.css";
import { certificados } from "../../data/certificados";

export default function Certificados() {
  return (
    <main className="certificados-page">
      <div className="certificados-container">
        <p className="subtitle">Minhas formações e certificados</p>
        <h1>Todos os meus certificados</h1>
        <p className="certificados-resumo">
          Desenvolvedor Front-End <span aria-hidden="true">•</span>{" "}
          Desenvolvedor Back-End <span aria-hidden="true">•</span>{" "}
          Estudonauta: HTML5, CSS3 e JavaScript
        </p>

        <div className="certificados-grid">
          {certificados.map((certificado) => (
            <article className="cert-card" key={certificado.id}>
              <a href={certificado.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Abrir certificado ${certificado.titulo}`}>
                <img
                  src={certificado.imagem}
                  alt={`Certificado ${certificado.titulo}`}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="566"
                />
              </a>
              <div className="cert-card-content">
                <span>{certificado.instituicao}</span>
                <h2>{certificado.titulo}</h2>
                <a href={certificado.pdf} target="_blank" rel="noopener noreferrer" className="btn-certificado">
                  Ver certificado
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
