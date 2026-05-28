import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>© 2026 Neuralis</div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/company/neuralis-in/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
