import styles from "./Experience.module.css";

type Experience = {
  company: string;
  role: string;
  meta: string;
  highlights: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    company: "Manulife",
    role: "Full-Stack Software Engineer",
    meta: "Canada · Dec 2022 – Present",
    highlights: [
      "Production backend APIs",
      "Reusable React UI components",
      "Accessibility & maintainability",
    ],
    tags: ["React", "TypeScript", "Node", "Cloud"],
  },
  {
    company: "Validere Technologies",
    role: "Software Engineer",
    meta: "Canada · Nov 2021 – Oct 2022",
    highlights: [
      "High-performance backend systems",
      "Data-driven applications",
      "Reliability & observability",
    ],
    tags: ["Backend", "Java", "Distributed Systems"],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="sectionTitle">Experience</h2>

        <div className={styles.grid}>
          {experiences.map((exp) => (
            <article key={exp.company} className={styles.card}>
              <header className={styles.header}>
                <div>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <p className={styles.role}>{exp.role}</p>
                </div>
                <span className={styles.meta}>{exp.meta}</span>
              </header>

              <ul className={styles.highlights}>
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
