import type { Project } from "../data/content";
//import Button from "./Button";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card projectCard">
      <div className="projectTop">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="muted">{project.description}</p>
      </div>

      <ul className="bullets">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="pillRow">
        {project.tags.map((t) => (
          <span className="pill" key={t}>
            {t}
          </span>
        ))}
      </div>

      {/*<div className="projectLinks">
        {project.links.live ? (
          <Button href={project.links.live} variant="primary" newTab>
            Live
          </Button>
        ) : null}
        {project.links.repo ? (
          <Button href={project.links.repo} variant="secondary" newTab>
            Repo
          </Button>
        ) : null}
        {project.links.caseStudy ? (
          <Button href={project.links.caseStudy} variant="ghost" newTab>
            Case Study
          </Button>
        ) : null} 
      </div>*/}
    </article>
  );
}
