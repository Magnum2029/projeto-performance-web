import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(){
  return(
    <footer className="footer">

      <h2>Magnum Santos.</h2>

      <p>
        Desenvolvedor Front-End & Back-End Python
      </p>

      <div className="footer-socials">

        <a href="https://github.com/Magnum2029" target="_blank">
          <FaGithub/>
        </a>

        <a href="LINKEDIN" target="_blank">
          <FaLinkedin/>
        </a>

      </div>

      <span>
        © 2026 Magnum Santos — Todos os direitos reservados.
      </span>

    </footer>
  )
}