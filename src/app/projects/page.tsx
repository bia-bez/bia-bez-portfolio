import { Project } from "@/types/project";
import ProjectsSection from "@/components/ProjectsSection";

// Mock data — substituir por dados reais ou fetch futuramente
const projects: Project[] = [
  {
    id: "1",
    title: "Projeto Exemplo",
    description: "Descrição do projeto exemplo.",
    tags: ["Next.js", "TypeScript"],
    url: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projetos</h1>
      <ProjectsSection projects={projects} />
    </main>
  );
}
