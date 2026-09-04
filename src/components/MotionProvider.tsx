"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes every transform-based animation a no-op when
 * the visitor asks for reduced motion, while still letting opacity settle —
 * so nothing is ever left invisible.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
