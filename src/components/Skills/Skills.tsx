import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="habilidades" className="skills">
      <p className="subtitle">Tecnologias que utilizo</p>

      <h2>Habilidades</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <SiJavascript className="skill-icon javascript" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <SiTypescript className="skill-icon typescript" />
          <h3>TypeScript</h3>
        </div>

        <div className="skill-card">
          <SiNextdotjs className="skill-icon next" />
          <h3>Next.js</h3>
        </div>

        <div className="skill-card">
          <FaPython className="skill-icon python" />
          <h3>Python</h3>
        </div>

        <div className="skill-card">
          <FaGithub className="skill-icon github" />
          <h3>GitHub</h3>
        </div>
      </div>
    </section>
  );
}