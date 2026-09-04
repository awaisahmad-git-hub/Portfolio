"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** Soft ease-out. Fast at the start, long gentle settle — no bounce. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Section reveals sit at the slow end; interactions at the fast end. */
export const DURATION = {
  reveal: 0.55,
  card: 0.5,
  interaction: 0.22,
} as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  /** Travel distance in pixels. */
  y?: number;
  /** Adds a 0.98 → 1 scale to the fade. For panels and images, not text. */
  scale?: boolean;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport">;

/**
 * The workhorse scroll reveal: fade plus a short rise.
 *
 * `MotionConfig reducedMotion="user"` in `MotionProvider` strips the transform
 * for visitors who ask for reduced motion and keeps the fade, so nothing can
 * be stranded at `opacity: 0`.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  scale = false,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, ...(scale ? { scale: 0.98 } : null) }}
      whileInView={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : null) }}
      viewport={{ once: true, margin: "-8% 0px -5% 0px" }}
      transition={{ duration: DURATION.reveal, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Parent for a run of `<StaggerItem>`s. */
export function Stagger({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  // The element type varies but the props we pass are common to all of them,
  // so a single cast keeps this polymorphic without four prop unions.
  const Component = motion[Tag] as typeof motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-6% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Component>
  );
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.card, ease: EASE } },
};

/** Slightly smaller travel, for dense runs like skill tags and bullets. */
export const tinyItemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
  variants = itemVariants,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li";
} & Omit<HTMLMotionProps<"div">, "children" | "variants">) {
  const Component = motion[Tag] as typeof motion.div;
  return (
    <Component className={className} variants={variants} {...rest}>
      {children}
    </Component>
  );
}
