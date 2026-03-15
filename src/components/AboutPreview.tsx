"use client";

import styles from "./AboutPreview.module.css";

const stats = [
  { value: "10+", label: "Tecnologias" },
  { value: "3+", label: "Projetos" },
  { value: "2028", label: "Formação" },
];

export default function AboutPreview() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Coluna visual (esquerda) */}
          <div className={styles.visualCol}>
            <div className={styles.card}>
              {/* Avatar row */}
              <div className={styles.avatarRow}>
                <div className={styles.avatarThumb}>
                  <img src="/images/perfil.jpg" alt="Foto de perfil" />
                </div>
                <div>
                  <p className={styles.avatarName}>Bianca</p>
                  <p className={styles.avatarRole}>Frontend Developer</p>
                  <p className={styles.avatarLocation}>📍 Brasil</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className={styles.statsGrid}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.statItem}>
                    <p className={styles.statValue}>{s.value}</p>
                    <p className={styles.statLabel}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna de texto (direita) */}
          <div className={styles.textCol}>
            <p className="section-label">Sobre mim</p>
            <h2 className="section-title">Curiosa</h2>
            <div className="divider" />

            <p className={styles.bodyText}>
              Sou estudante de Análise e Desenvolvimento de Sistemas e tenho um
              lado criativo que gosta bastante de observar design de interfaces
              e a forma como as pessoas interagem com os produtos digitais.
            </p>
            <p className={styles.bodyText}>
              Gosto de entender como as coisas funcionam por trás das
              aplicações. Tenho estudado principalmente HTML, CSS, JavaScript e
              React, sempre melhorarando tanto a parte técnica quanto a
              experiência do usuário.
            </p>

            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary">
                Fale comigo
              </a>
              <a href="#projects" className="btn btn-outline">
                Ver projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
