import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        Magnum<span>.dev</span>
      </div>

      <nav>
  <Link to="/">Home</Link>

       <Link to="/sobre">Sobre</Link>

       <Link to="/skills">Skills</Link>

       <Link to="/projetos">Projetos</Link>

       <Link to="/certificados">Certificados</Link>

       <Link to="/contato" className="contato">
          Contato
       </Link>
     </nav>
    </header>
  );
}