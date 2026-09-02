import "./Journey.css";

const jornada = [
  {
    ano: "2025",
    titulo: "Engenharia Front-End - EBAC",
    descricao:
      "Início da formação em HTML, CSS, JavaScript, React, TypeScript e Next.js.",
  },
  {
    ano: "2026",
    titulo: "Python - Tokio School",
    descricao:
      "Desenvolvimento Back-End com Python, Flask, APIs REST e SQLite.",
  },
  {
    ano: "2026",
    titulo: "Projetos Profissionais",
    descricao:
      "Luxury Wheels API, Portal Viagens, Next Blog e Lista de Tarefas com testes automatizados.",
  },
  {
    ano: "Objetivo",
    titulo: "Desenvolvedor Front-End & Back-End Python",
    descricao:
      "Atuar no mercado de tecnologia em Portugal desenvolvendo aplicações modernas e escaláveis.",
  },
];

export default function Journey() {
  return (
    <section id="jornada" className="journey">
      <p className="subtitle">Minha evolução</p>

      <h2>Minha Jornada</h2>

      <div className="timeline">
        {jornada.map((item) => (
          <div key={item.titulo} className="timeline-item">
            <div className="ano">{item.ano}</div>

            <div className="conteudo">
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}