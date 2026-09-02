import "./Stats.css";

const stats = [
  { numero: "4+", titulo: "Projetos Publicados" },
  { numero: "2", titulo: "Formações em Tecnologia" },
  { numero: "7+", titulo: "Tecnologias Utilizadas" },
  { numero: "2026", titulo: "Ano do Portfólio" },
];

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((item) => (
        <div key={item.titulo} className="stat-card">
          <h2>{item.numero}</h2>
          <p>{item.titulo}</p>
        </div>
      ))}
    </section>
  );
}