"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2.5 rounded-full text-sm font-medium transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid:
    "bg-amber px-6 py-3 text-ink hover:bg-amber-pale shadow-[0_0_0_1px_rgba(230,165,75,0.4),0_18px_40px_-22px_rgba(230,165,75,0.85)]",
  outline:
    "border border-line-2 bg-ink-2/60 px-6 py-3 text-bone backdrop-blur-sm hover:border-amber/55 hover:text-amber-pale",
  ghost: "px-2 py-1 text-bone-dim hover:text-bone",
};

/**
 * A link (or button) that leans slightly toward the cursor. The effect is
 * pointer-only and disabled under `prefers-reduced-motion`.
 */
export function MagneticLink({
  children,
  href,
  variant = "solid",
  className = "",
  strength = 0.28,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  strength?: number;
} & Omit<HTMLMotionProps<"a">, "href" | "style" | "className" | "children">) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      style={reduced ? undefined : { x: springX, y: springY }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
