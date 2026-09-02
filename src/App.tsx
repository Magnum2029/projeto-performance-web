import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Skills from "./pages/Skills/Skills";
import Projetos from "./pages/Projetos/Projetos";
import Certificados from "./pages/Certificados/Certificados";
import Contato from "./pages/Contato/Contato";

export default function App() {
  return (
    <>
      <Header />
<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/sobre" element={<Sobre />} />

  <Route path="/skills" element={<Skills />} />

  <Route path="/projetos" element={<Projetos />} />

  <Route path="/certificados" element={<Certificados />} />

  <Route path="/contato" element={<Contato />} />
</Routes>
    </>
  );
}
