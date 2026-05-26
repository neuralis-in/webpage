import { useEffect } from "react";

/**
 * Mirrors the IntersectionObserver-based reveal behaviour from the original
 * static pages. Looks up any element with `.reveal`, `.reveal-sm`, or
 * `.reveal-card` inside `containerRef` (or document) and toggles the
 * `is-visible` class once it enters the viewport.
 */
export function useReveal(deps: ReadonlyArray<unknown> = []) {
  useEffect(() => {
    const root: ParentNode = document;
    const els = Array.from(
      root.querySelectorAll<HTMLElement>(".reveal, .reveal-sm, .reveal-card")
    );

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
