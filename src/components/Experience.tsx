import styles from "./Experience.module.css";

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Manulife",
    role: "Full-Stack Software Engineer",
    location: "Canada",
    period: "Dec 2022 – Present",
    description:
      "Health & Dental Insurance Platform serving internal operations with high-volume claim processing in a regulated financial environment.",
    highlights: [
      "Focussed on designing systems that balance automation with safety, especially when introducing AI into regulated workflows",
      "Build scalable full stack application in React, Javascript, Nodejs, Python, Java within a high volume distributed financial ecosystem",
      "Owned end-to-end delivery of features across React micro-frontends, Node.js APIs, and backend services, ensuring accessibility (WCAG 2.0) and performance for 10,000+ active users",
      "Designed and shipped extensible Node.js APIs, streamlining downstream data processing and enabling faster feature delivery across teams",
      "Built AI-powered MVP enabling faster/accurate claim processing, leveraged Agentic AI for automated claim processing via prompt-based information extraction, prepared solution flow.",
      "Acted as release owner and daytime support, mentoring junior engineers, reviewing PRs, and improving system observability to reduce production incidents.",
    ],
  },
  {
    company: "Validere Technologies Inc.",
    role: "Software Engineer",
    location: "Canada",
    period: "Nov 2021 – Oct 2022",
    description:
      "Worked on production-grade systems serving real users, with a focus on reliability, performance, and maintainable UI.",
    highlights: [
      "Built and enhanced application using React, Javascript, Typescript, HTML, CSS",
      "Took ownership of ambiguous requirements by collaborating with product owners to shape solutions early.",
      "Converted spike tickets into actionable tasks, and delivered iteratively",
      "Collaborated closely with product, design and QA teams to deliver feaured end-to-end",
      "Strengthened test coverage using React Testing Library and Jest, improving confidence in releases."
    ],
  },
  {
    company: "Geotab Inc",
    role: "Web developer Intern",
    location: "Canada",
    period: "Jan 2021 – Aug 2021",
    description:
      "Worked on production-grade systems serving real users, with a focus on reliability, performance, and maintainable UI.",
    highlights: [
      "Designed and developed public facing React components for geotab.com using React, typescript, material-ui, and webpack.",
      "Improved pageload performance by nearly 50% using lazy loading, preloading and code splitting strategies.",
      "Contributed to both frontend and backend fixes, gaining cross-stack exposure early in my career.",
    ],
  }
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
       {/*} <h2 className="sectionTitle">Experience</h2>*/}

        <div className={styles.list}>
          {experience.map((item) => (
            <div key={item.company} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h3 className={styles.company}>{item.company}</h3>
                  <p className={styles.role}>{item.role}</p>
                </div>

                <div className={styles.meta}>
                  <span>{item.location}</span>
                  <span>{item.period}</span>
                </div>
              </div>

              <p className={styles.description}>{item.description}</p>

              <ul className={styles.highlights}>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
