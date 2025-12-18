import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <div className="footerInner">
          <p className="muted">© {year} </p>
          <a className="footerTop" href="#home">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
