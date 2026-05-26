import { useEffect, type RefObject } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Intercepts clicks on anchor tags inside `containerRef` and, for same-origin
 * links, routes them through React Router instead of a full page reload. This
 * lets us keep the original static HTML in dangerouslySetInnerHTML while still
 * getting SPA navigation.
 */
export function useInternalLinks(
  containerRef: RefObject<HTMLElement | null>,
  deps: ReadonlyArray<unknown> = []
) {
  const navigate = useNavigate();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      if (href.startsWith("#")) {
        event.preventDefault();
        const id = href.slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };

    node.addEventListener("click", onClick);
    return () => node.removeEventListener("click", onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
