import "./About.css";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        {/* Foto */}
        <div className="about-image">
          <img src="/images/magnum.jpeg" alt="Magnum Santos" />
        </div>

        {/* Texto */}
        <div className="about-content">
          <p className="subtitle">Quem sou eu</p>

          <h2>Sobre Mim</h2>

          <p>
            Olá! Sou <strong>Magnum Santos</strong>, desenvolvedor Front-End e
            Desenvolvedor Back-End Python, atualmente morando em
            <strong> Portimão, Portugal</strong>.
          </p>

          <p>
            Sou estudante da <strong>EBAC</strong> (Engenharia Front-End) e da
            <strong> Tokio School</strong> (Desenvolvimento Python), onde venho
            desenvolvendo aplicações modernas utilizando React, Next.js,
            TypeScript, Python, Flask e APIs REST.
          </p>

          <p>
            Meu objetivo é conquistar uma oportunidade na área de tecnologia,
            contribuindo com soluções bem estruturadas, interfaces modernas e
            código limpo.
          </p>

          <div className="about-info">
            <div>
              <FaMapMarkerAlt />
              <span>Portimão, Portugal</span>
            </div>

            <div>
              <FaGraduationCap />
              <span>EBAC • Tokio School</span>
            </div>

            <div>
              <FaBriefcase />
              <span>Front-End • Back-End Python</span>
            </div>
          </div>

          <div className="about-buttons">
            <a
              href="https://github.com/Magnum2029"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/magnum-santos"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}