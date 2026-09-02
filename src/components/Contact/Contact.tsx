import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (!nome || !email || !mensagem) {
      setStatus("erro");
      return;
    }

    setStatus("ok");
    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <section id="contato" className={styles.contact}>
      <p className={styles.subtitle}>Vamos conversar</p>

      <h2 className={styles.titulo}>Contato</h2>

      <p className={styles.descricao}>
        Estou disponível para oportunidades de trabalho, projetos freelance
        e networking na área de desenvolvimento Front-End e Back-End Python.
      </p>

      <form onSubmit={enviar} className={styles.form}>
        <input
          className={styles.input}
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className={styles.textarea}
          placeholder="Escreva sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />

        <button className={styles.botao}>Enviar Mensagem</button>

        {status === "ok" && (
          <p className={styles.ok}>
            ✅ Mensagem enviada com sucesso!
          </p>
        )}

        {status === "erro" && (
          <p className={styles.erro}>
            ⚠️ Preencha todos os campos.
          </p>
        )}
      </form>

      <div className={styles.redes}>
        <a href="mailto:magnumsantos97@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
          E-mail
        </a>

        <a href="https://wa.me/351914045512" target="_blank" rel="noreferrer">
          <FaWhatsapp />
          WhatsApp
        </a>

        <a href="https://github.com/Magnum2029" target="_blank" rel="noreferrer">
          <FaGithub />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/magnum-santos/">
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}