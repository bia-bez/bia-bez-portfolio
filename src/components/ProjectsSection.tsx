"use client";

import { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import styles from "./ProjectsSection.module.css";

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Portfólio Pessoal",
    description:
      "Este portfólio — construído com Next.js, React e TypeScript. Foco em performance, acessibilidade e design moderno.",
    tags: ["Next.js", "TypeScript", "React"],
    url: "https://github.com/bia-bez/bia-bez-portfolio",
  },
  {
    id: "2",
    title: "Organização de tecnologias",
    description:
      "Aplicação em React para organizar tecnologias que você deseja aprender, com níveis de prioridade e integração com Supabase.",
    tags: ["React", "JavaScript", "CSS"],
    url: "https://github.com/bia-bez/techwishlist",
  },
  {
    id: "3",
    title: "Landing Page AniVerse",
    description:
      "Página de site para assistir animes. Layout responsivo com Flexbox e Grid, sem frameworks de CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/bia-bez/AniVerse",
  },
];

interface ProjectsSectionProps {
  projects?: Project[];
}

export default function ProjectsSection({
  projects = mockProjects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div>
            <p className="section-label">Portfólio</p>
            <h2 className="section-title">
              Meus <span className={styles.titleAccent}>projetos</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
