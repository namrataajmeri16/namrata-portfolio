import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { content } from "../data/content";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { GitHubIcon, LinkedInIcon, MailIcon, LocationIcon } from "../components/icons";
import styles from "./App.module.css";
import Projects from "../components/Projects";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectCard from "../components/ProjectCard";

export default function App() {
  const { person, about, skills, projects, contact } = content;

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* HERO */}
        <div id="home" className="hero">
          <Container>
            <div className="heroInner">
              <h1 className="heroTitle">
                {person.name}
                {/*<span className="accentDot">.</span>*/}
              </h1>
              <span className={styles.location}>
                    <LocationIcon className={styles.locationIcon} />
                    <span className="eyebrow">{person.locationLine}</span>
              </span>
              <p className="heroSubtitle">{person.headline}</p>

              <p className="heroSummary">{person.summary}</p>

              <div className="heroCtas">
                <Button href="#projects" variant="primary">
                  View Projects
                </Button>
                <Button href="#contact" variant="secondary">
                  Contact
                </Button>
              </div>

              <div className="heroMeta">
                <span className="metaItem">{person.primaryRole}</span>
                <span className="metaDivider" />
                <span className="metaItem">{person.techFocus}</span>
              </div>
            </div>
          </Container>
        </div>

        {/* ABOUT */}
        <Section id="about" title="About" subtitle={about.subtitle}>
          <div className="card">
            <p className="prose">{about.body}</p>
          </div>
        </Section>

        <Section id="experience" title="Work experience">
          <a href="#experience"><Experience /></a>
        </Section>

        {/* SKILLS */}
        <Section
          id="skills"
          title="Skills"
          subtitle="A practical toolkit for building and shipping production systems."
        >
          <div className="grid2">
            {skills.groups.map((g) => (
              <div className="card" key={g.title}>
                <h3 className="cardTitle">{g.title}</h3>
                <div className="pillRow">
                  {g.items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          subtitle="3–4 projects with clear impact, strong engineering choices, and clean UI."
        >
          <div className="projectsGrid">
            {projects.items.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
            {/*<Projects />*/}
            {/*<ProjectCarousel>
                        {projects.items.map((p) => (
                                      <ProjectCard key={p.title} project={p} />
                                    ))}
            </ProjectCarousel>*/}
          </div>
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>
        
        {/* CONTACT */}
        <Section
          id="contact"
          title="Contact"
          subtitle="If you’re hiring for full-stack roles or want to talk systems + UI craftsmanship, reach out."
        >
          <div className="card contactCard">
            <div className="contactLeft">
              <h3 className="cardTitle">Let’s connect</h3>
              <p className="muted">
                Email is best for initial reach-out. I usually respond within 24–48 hours.
              </p>
              <p className="contactEmail">{contact.email}</p>
            </div>

            <div className="contactRight">
              <a
                href={`mailto:${contact.email}`}
                className="iconButton"
                aria-label="Email"
                >
                <MailIcon />
            </a>
            <a
                href={contact.linkedinUrl}
                className="iconButton"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
            > 
                <LinkedInIcon />
            </a>
           <a
            href={contact.githubUrl}
            className="iconButton"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            >
                <GitHubIcon />
            </a>
              {contact.resumeUrl ? (
                <Button href={contact.resumeUrl} variant="ghost" newTab>
                  Resume
                </Button>
              ) : null}
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
