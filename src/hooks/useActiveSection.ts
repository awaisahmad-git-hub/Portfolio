"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently occupying the reading area of the
 * viewport. Uses a single IntersectionObserver rather than scroll listeners.
 */
export function useActiveSection(ids: readonly string[], fallback = ids[0]) {
  const [active, setActive] = useState<string>(fallback);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }

        if (visible.size === 0) return;

        // Prefer the section highest in document order among the visible ones,
        // which keeps the indicator stable while scrolling through long sections.
        const first = ids.find((id) => visible.has(id));
        if (first) setActive(first);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.15, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
