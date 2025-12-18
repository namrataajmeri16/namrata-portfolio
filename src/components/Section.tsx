import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section">
      <Container>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{title}</h2>
          {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
