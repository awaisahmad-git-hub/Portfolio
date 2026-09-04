"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { usePointerFine } from "@/hooks/usePointerFine";

type Variant = "solid" | "outline";

const base =
  "group inline-flex select-none items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-ink hover:bg-accent-bright",
  outline: "border border-line-2 text-bone hover:border-bone-faint hover:bg-ink-2",
};

/**
 * CTA with a very light magnetic pull — the button leans at most ~4px toward
 * the cursor, then springs back. Pointer-gated, so touch and reduced-motion
 * visitors get a plain button.
 */
export function Button({
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof motion.a>, "children" | "style" | "className">) {
  const ref = useRef<HTMLAnchorElement>(null);
  const magnetic = usePointerFine();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 260, damping: 22, mass: 0.4 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Cap the pull so it reads as a nudge, never as the button running away.
    const dx = (event.clientX - (rect.left + rect.width / 2)) * 0.18;
    const dy = (event.clientY - (rect.top + rect.height / 2)) * 0.18;
    x.set(Math.max(-5, Math.min(5, dx)));
    y.set(Math.max(-4, Math.min(4, dy)));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      whileTap={{ scale: 0.975 }}
      transition={{ duration: 0.15 }}
      style={magnetic ? { x: springX, y: springY } : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
