import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const links: Array<{ href: string; label: string }> = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <Container>
        <div className="navInner">
          <a className="brand" href="#home" aria-label="Go to top">
            {/*<span className="brandMark" aria-hidden="true" />*/}
            {/*<span className="brandText">NA</span>*/}
          </a>

          <nav className="navLinks" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} className="navLink" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="navRight">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
