import "./Hero.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope
} from "react-icons/fa";

export default function Hero() {
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
         <p>
           Desenvolvedor Front-End e Desenvolvedor Back-End Python especializado em React,
           Next.js, TypeScript, JavaScript, Python e Flask.

           Atualmente moro em Portimão, Portugal, desenvolvendo projetos modernos com foco
           em interfaces intuitivas, responsivas e APIs robustas, buscando minha primeira
           oportunidade como desenvolvedor.
        </p>
        </p>

        <div className="tecnologias">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>Flask</span>
        </div>

        <div className="hero-buttons">
          <a href="/projetos" className="btn-primary">
            Ver Projetos
          </a>

          <a
            href="/cv/CV-Magnum.pdf"
            target="_blank"
            className="btn-outline"
          >
            Baixar Currículo
          </a>
        </div>

        <div className="socials">

          <a
            href="https://github.com/Magnum2029"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>

          <a href="mailto:magnum@email.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-photo">

        <div className="photo-circle">

          <img
            
            
           src={`${import.meta.env.BASE_URL}images/magnum.jpg`}
           alt="Magnum Santos"
            className="hero-image"
          />
          
          

        </div>

      </div>

    </section>
  );
}