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
      "Worked on production-grade systems serving real users, with a focus on reliability, performance, and maintainable UI.",
    highlights: [
      "Built and maintained backend APIs used by internal and customer-facing applications",
      "Developed reusable React components with accessibility and scalability in mind",
      "Collaborated closely with product and QA teams in an Agile environment",
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
      "Built and maintained backend APIs used by internal and customer-facing applications",
      "Developed reusable React components with accessibility and scalability in mind",
      "Collaborated closely with product and QA teams in an Agile environment",
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
      "Built and maintained backend APIs used by internal and customer-facing applications",
      "Developed reusable React components with accessibility and scalability in mind",
      "Collaborated closely with product and QA teams in an Agile environment",
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
