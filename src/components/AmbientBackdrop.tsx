"use client";

import { useEffect, useRef } from "react";
import { usePointerFine } from "@/hooks/usePointerFine";

/**
 * The page's only ambient motion, shared by the two bookend sections: a faint
 * dot grid that drifts very slowly, a soft wash behind the headline, and a
 * light that follows the cursor.
 *
 * `anchor` mirrors the treatment for the section at the foot of the page — the
 * grid is densest at the page's outer edge and fades toward the content.
 *
 * Everything is low-opacity and pointer-gated. The spotlight writes CSS custom
 * properties from inside a rAF callback, so it never triggers a React render
 * and never touches layout.
 */
export function AmbientBackdrop({ anchor = "top" }: { anchor?: "top" | "bottom" }) {
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
      // Only track while the pointer is near this section's band.
      if (event.clientY < rect.top - 80 || event.clientY > rect.bottom + 80) return;
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

  const bottom = anchor === "bottom";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Drifting dot grid, fading away from the page edge. */}
      <div className={bottom ? "ambient-grid ambient-grid--up" : "ambient-grid"} />

      {/* Static wash behind the headline. */}
      <div
        className={
          bottom
            ? "absolute inset-x-0 -bottom-24 h-96 bg-[radial-gradient(50%_60%_at_35%_100%,rgba(224,162,77,0.055),transparent_70%)]"
            : "absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(50%_60%_at_35%_0%,rgba(224,162,77,0.055),transparent_70%)]"
        }
      />

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
