import ProjectCarousel from "./ProjectCarousel";
import ProjectCard from "./ProjectCard";
import { content } from "../data/content";
import styles  from "./Projects.module.css"

export default function Projects( ) {
    
  const { projects } = content;
  return (
    <section className="section" id="projects">
      <div className={styles.projectsSection}>

        <ProjectCarousel>
            {projects.items.map((p) => (
                          <ProjectCard key={p.title} project={p} />
                        ))}
          {/*<ProjectCard {...modalProject} />
          <ProjectCard {...claimsProject} />
          <ProjectCard {...realtimeProject} />*/}
        </ProjectCarousel>
      </div>
    </section>
  );
}
