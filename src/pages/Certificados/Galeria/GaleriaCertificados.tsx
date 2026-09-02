import { useParams } from "react-router-dom";
import "./Galeria.css";

const banco = {
  ebac: [
    {
      nome: "React",
      thumb: "/certificados/ebac/react.jpg",
      pdf: "/certificados/ebac/react.pdf",
    },
    {
      nome: "TypeScript",
      thumb: "/certificados/ebac/typescript.jpg",
      pdf: "/certificados/ebac/typescript.pdf",
    },
    {
      nome: "Next.js",
      thumb: "/certificados/ebac/nextjs.jpg",
      pdf: "/certificados/ebac/nextjs.pdf",
    },
  ],

  tokio: [
    {
      nome: "Python Back-End",
      thumb: "/certificados/tokio/python.jpg",
      pdf: "/certificados/tokio/python.pdf",
    },
    {
      nome: "Flask",
      thumb: "/certificados/tokio/flask.jpg",
      pdf: "/certificados/tokio/flask.pdf",
    },
  ],

  estudonauta: [
    {
      nome: "HTML5",
      thumb: "/certificados/estudonauta/html.jpg",
      pdf: "/certificados/estudonauta/html.pdf",
    },
    {
      nome: "CSS3",
      thumb: "/certificados/estudonauta/css.jpg",
      pdf: "/certificados/estudonauta/css.pdf",
    },
    {
      nome: "JavaScript",
      thumb: "/certificados/estudonauta/javascript.jpg",
      pdf: "/certificados/estudonauta/javascript.pdf",
    },
  ],
};

export default function GaleriaCertificados() {
  const { escola } = useParams();

  const lista = banco[escola as keyof typeof banco] || [];

  return (
    <section className="galeria">
      <h1>Certificados</h1>

      <div className="grid-certificados">
        {lista.map((cert) => (
          <a
            href={cert.pdf}
            target="_blank"
            rel="noreferrer"
            className="certificado-card"
            key={cert.nome}
          >
            <img src={cert.thumb} alt={cert.nome} />

            <h3>{cert.nome}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}