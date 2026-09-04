"use client";

import { useEffect, useRef } from "react";

/**
 * A large, very soft light that trails the pointer across the hero. Written
 * with CSS custom properties + rAF so it never triggers React re-renders.
 */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    let frame = 0;
    let tx = 0;
    let ty = 0;

    const onMove = (e: PointerEvent) => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (e.clientY > rect.bottom + 120) return;
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;

      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty("--mx", `${tx}px`);
        el.style.setProperty("--my", `${ty}px`);
        el.style.opacity = "1";
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ${className}`}
      style={{
        background:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(230,165,75,0.10), transparent 70%)",
      }}
    />
  );
}
