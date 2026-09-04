"use client";

import { useEffect, useRef } from "react";
import { usePointerFine } from "@/hooks/usePointerFine";

/**
 * The page's only ambient motion: a faint dot grid that drifts very slowly,
 * and a soft light that follows the cursor across the hero.
 *
 * Both are low-opacity and pointer-gated. The spotlight writes CSS custom
 * properties from inside a rAF callback, so it never triggers a React render
 * and never touches layout.
 */
export function HeroBackdrop() {
  const spotRef = useRef<HTMLDivElement>(null);
  const interactive = usePointerFine();

  useEffect(() => {
    const el = spotRef.current;
    if (!el || !interactive) return;

    const host = el.parentElement;
    if (!host) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      // Ignore the pointer once it has left the hero band.
      if (event.clientY > rect.bottom + 80) return;
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;

      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
        el.style.opacity = "1";
      });
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [interactive]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Drifting dot grid, faded out towards the bottom of the section. */}
      <div className="hero-grid" />

      {/* Static wash behind the headline. */}
      <div className="absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(50%_60%_at_35%_0%,rgba(224,162,77,0.055),transparent_70%)]" />

      {/* Cursor light. */}
      <div
        ref={spotRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(360px circle at var(--x, 50%) var(--y, 40%), rgba(224,162,77,0.07), transparent 70%)",
        }}
      />
    </div>
  );
}
