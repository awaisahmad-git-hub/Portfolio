"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently occupying the reading area of the
 * viewport: the active section is the last one whose top has passed a moving
 * reference line.
 *
 * The line rides scroll progress — at the top of the document it sits at the
 * top of the viewport, at the foot it sits at the bottom, and through the
 * middle it rides the centre. That single rule is what makes the first and last
 * sections reachable at all. A fixed mid-viewport band cannot be crossed by a
 * final section shorter than the space beneath it, so Contact could never take
 * the highlight from Skills no matter how far down the page you scrolled.
 *
 * Because the line and the section tops are both monotonic in scroll position,
 * the chosen index only ever moves one way per scroll direction — there is no
 * arrangement that flickers between two sections.
 */
export function useActiveSection(ids: readonly string[], fallback = ids[0]) {
  const [active, setActive] = useState<string>(fallback);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    let frame = 0;

    const measure = () => {
      frame = 0;

      const viewport = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - viewport;
      const progress =
        maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

      // Offset of the reference line from the top of the viewport.
      const line = viewport * progress;

      // Tops ascend in document order, so the last match is the current one.
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }

      // React bails out when the value is unchanged, so this is free on the
      // frames where nothing crossed the line.
      setActive(current);
    };

    // One measurement per frame at most; scroll fires far more often than that.
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return active;
}
