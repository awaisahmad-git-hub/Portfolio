"use client";

import Image from "next/image";
import { motion, useReducedMotion, useSpring, useTransform, useMotionValue } from "motion/react";
import { useState, type MouseEvent } from "react";
import { profile } from "@/data/site";

/**
 * Hero portrait: a soft amber-lit frame with a fine border, a masked grid
 * backdrop and a very slight pointer tilt. Falls back to a monogram plate if
 * the photo file has not been added yet.
 */
export function Portrait() {
  const reduced = useReducedMotion();
  const [failed, setFailed] = useState(false);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rx = useSpring(useTransform(py, [-0.5, 0.5], [4.5, -4.5]), {
    stiffness: 140,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-5.5, 5.5]), {
    stiffness: 140,
    damping: 20,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[24rem] lg:max-w-none"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ perspective: 1000 }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(230,165,75,0.16),transparent_62%)] blur-2xl"
      />

      {/* Offset frame line */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 top-10 hidden w-[85%] rounded-[1.75rem] border border-line-2 sm:block"
      />

      <motion.div
        style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line-2 bg-ink-2">
          {/* Gradient hairline along the top edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent"
          />

          <div className="grid-field absolute inset-0 opacity-40" aria-hidden="true" />

          {failed ? (
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 bg-gradient-to-b from-ink-3 to-ink">
              <span className="display text-7xl text-amber/80">AA</span>
              <span className="eyebrow">Portrait pending</span>
            </div>
          ) : (
            <div className="relative aspect-[4/5]">
              <Image
                src={profile.photo}
                alt={profile.photoAlt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                quality={92}
                onError={() => setFailed(true)}
                className="object-cover object-top"
              />
              {/* Grade the photo into the page */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/12 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_0%,rgba(230,165,75,0.12),transparent_55%)] mix-blend-screen"
              />
            </div>
          )}

          {/* Caption plate */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5">
            <div>
              <p className="text-[0.95rem] font-medium leading-tight text-bone">
                {profile.name}
              </p>
              <p className="mt-1 text-[0.75rem] text-bone-faint">{profile.roleLong}</p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-line-2 bg-ink/70 px-2.5 py-1 text-[0.68rem] text-bone-dim backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
