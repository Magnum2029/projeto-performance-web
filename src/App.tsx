import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";

const Sobre = lazy(() => import("./pages/Sobre/Sobre"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projetos = lazy(() => import("./pages/Projetos/Projetos"));
const Certificados = lazy(() => import("./pages/Certificados/Certificados"));
const Contato = lazy(() => import("./pages/Contato/Contato"));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="page" role="status">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projetos" element={<Projetos />} />

          <Route path="/certificados" element={<Certificados />} />

          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
    </>
  );
}
