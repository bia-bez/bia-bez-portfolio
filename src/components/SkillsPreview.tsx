"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTypescript, SiMysql, SiSupabase, SiNextdotjs } from "react-icons/si";
import { FaBox } from "react-icons/fa6";
import styles from "./SkillsPreview.module.css";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: "Sólido" },
  { name: "CSS3", icon: <FaCss3Alt />, level: "Sólido" },
  { name: "JavaScript", icon: <FaJs />, level: "Sólido" },
  { name: "TypeScript", icon: <SiTypescript />, level: "Básico" },
  { name: "React", icon: <FaReact />, level: "Aprendendo" },
  { name: "Next.js", icon: <SiNextdotjs />, level: "Aprendendo" },
  { name: "Node.js", icon: <FaNodeJs />, level: "Básico" },
  { name: "Git", icon: <FaGitAlt />, level: "Sólido" },
  { name: "GitHub", icon: <FaGithub />, level: "Sólido" },
  { name: "SQL / MySQL", icon: <SiMysql />, level: "Básico" },
  { name: "Supabase", icon: <SiSupabase />, level: "Básico" },
];

const levels = ["Sólido", "Aprendendo", "Básico"] as const;

export default function SkillsPreview() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">Tecnologias</p>
          <h2 className="section-title">
            <span className="gradientText">Minha stack</span>
          </h2>
          <p className={styles.headerDescription}>
            Ferramentas e tecnologias que uso no dia a dia e estou aprendendo.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={`card ${styles.skillCard}`}>
              {/* Ícone */}
              <span className={styles.skillIcon}>{skill.icon}</span>

              {/* Texto */}
              <div>
                <p className={styles.skillName}>{skill.name}</p>
                <p className={styles.skillLevel} data-level={skill.level}>
                  {skill.level}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legenda */}
        <div className={styles.legend}>
          {levels.map((level) => (
            <span key={level} className={styles.legendItem}>
              <span className={styles.legendDot} data-level={level} />
              {level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
