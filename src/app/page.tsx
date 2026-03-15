import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsPreview from "@/components/SkillsPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsSection />
      <SkillsPreview />
      <ContactSection />
    </>
  );
}
