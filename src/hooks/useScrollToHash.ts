import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching `location.hash` after each navigation, and
 * resets to the top when there is no hash. Mirrors browser-default behaviour
 * the static site relied on.
 */
export function useScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // re-run on every navigation, even when navigating to the same path
  }, [pathname, hash, key]);
}
