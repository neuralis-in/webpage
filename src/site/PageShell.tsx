import { useEffect, useRef, type ReactNode } from "react";

import { useInternalLinks } from "../hooks/useInternalLinks";
import { useReveal } from "../hooks/useReveal";

type PageShellProps = {
  /**
   * Raw HTML loaded via Vite's `?raw` import. Rendered with
   * dangerouslySetInnerHTML so the original static markup keeps working.
   */
  html: string;
  /**
   * Optional document title to set when this page mounts.
   */
  title?: string;
  /**
   * Optional meta description to keep in sync with the route.
   */
  description?: string;
  /**
   * Optional extra content rendered after the raw HTML (e.g. CTA blocks).
   */
  children?: ReactNode;
};

/**
 * Mounts a page's raw HTML, applies reveal-on-scroll, and intercepts internal
 * links so anchor tags inside the static markup are handled by React Router.
 */
export function PageShell({
  html,
  title,
  description,
  children
}: PageShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  useEffect(() => {
    if (!description) return;
    let tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [description]);

  useReveal([html]);
  useInternalLinks(containerRef, [html]);

  return (
    <>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />
      {children}
    </>
  );
}
