import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = { to: string; label: string; hash?: string };

const NAV_ITEMS: NavItem[] = [
  { to: "/", hash: "#work", label: "Work" },
  { to: "/", hash: "#services", label: "Services" },
  { to: "/", hash: "#process", label: "Process" },
  { to: "/blog", label: "Blog" },
  { to: "/", hash: "#contact", label: "Contact" }
];

/**
 * The marketing nav. Re-implements the original static markup so that the
 * existing styles in `home.css` / `blog.css` keep applying, but uses React
 * Router for navigation and React state for the mobile menu and scrolled
 * indicator.
 */
export function SiteNav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isBlog = pathname.startsWith("/blog");

  const renderLink = (item: NavItem, onClick?: () => void) => {
    const target = item.hash ? `${item.to}${item.hash}` : item.to;
    const isCurrent = item.to === "/blog" && isBlog;
    return (
      <Link
        key={item.label}
        to={target}
        className={isCurrent ? "is-current" : undefined}
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <nav
        className={`nav${scrolled ? " scrolled" : ""}${
          isBlog ? " is-blog" : ""
        }`}
        id="nav"
      >
        <div className="container nav-inner">
          <Link to="/" className="wordmark">
            Neuralis
          </Link>
          <div className="nav-links">
            {NAV_ITEMS.map((item) => renderLink(item))}
            <Link to="/#contact" className="nav-cta nav-cta-desktop">
              Start a conversation
            </Link>
          </div>
          <button
            className="nav-hamburger"
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        {NAV_ITEMS.map((item) => renderLink(item, () => setMenuOpen(false)))}
        <Link
          to="/#contact"
          className="nav-cta"
          onClick={() => setMenuOpen(false)}
        >
          Start a conversation
        </Link>
      </div>
    </>
  );
}
