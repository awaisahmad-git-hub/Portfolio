"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport">;

/**
 * The site's only entrance animation: a short fade and a small rise.
 *
 * `MotionConfig reducedMotion="user"` in `MotionProvider` drops the transform
 * for visitors who ask for reduced motion and keeps the fade, so nothing can
 * be left stranded at `opacity: 0`.
 */
export function Reveal({ children, delay = 0, className, ...rest }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -5% 0px" }}
      transition={{ duration: 0.5, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Staggers `revealItem` children as they scroll into view. */
export function RevealGroup({
  children,
  className,
  stagger = 0.06,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};
