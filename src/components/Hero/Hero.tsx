import "./Hero.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope
} from "react-icons/fa";

export default function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="hero">

      <div className="hero-text">

        <span className="profissao">
          DESENVOLVEDOR FRONT-END • BACK-END PYTHON
        </span>

      <div className="status">
         <span className="bolinha"></span>
          Disponível para oportunidades · Portimão, Portugal
      </div>

        <h1>
          Magnum Santos
          <span className="wave"> 👋</span>
        </h1>

        <h2>
          Interfaces modernas, rápidas e responsivas.
        </h2>

        <p>
           Desenvolvedor Front-End e Desenvolvedor Back-End Python especializado em React,
           Next.js, TypeScript, JavaScript, Python e Flask.

           Atualmente moro em Portimão, Portugal, desenvolvendo projetos modernos com foco
           em interfaces intuitivas, responsivas e APIs robustas, buscando minha primeira
           oportunidade como desenvolvedor.
        </p>

        <div className="tecnologias">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>Flask</span>
        </div>

        <div className="hero-buttons">
          <a href={`${base}projetos`} className="btn-primary">
            Ver Projetos
          </a>

          <a
            href={`${base}cv/CV-Magnum.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Baixar Currículo
          </a>
        </div>

        <div className="socials">

          <a
            href="https://github.com/Magnum2029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Magnum Santos"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/magnum-de-oliveira-santos-b138041a1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Magnum Santos"
          >
            <FaLinkedinIn />
          </a>

          <a href="mailto:magnumsantos@gmail.com" aria-label="Enviar e-mail para Magnum Santos">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-photo">

        <div className="photo-circle">

          <img
            
            
           src={`${base}images/magnum.webp`}
           alt="Magnum Santos"
            className="hero-image"
            width="600"
            height="800"
            decoding="async"
            fetchPriority="high"
          />
          
          

        </div>

      </div>

    </section>
  );
}
