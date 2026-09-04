import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline";

const base =
  "inline-flex select-none items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-ink hover:bg-accent-bright",
  outline: "border border-line-2 text-bone hover:border-bone-faint hover:bg-ink-2",
};

/** Plain, quiet CTA. No magnetism, no glow — colour change only. */
export function Button({
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
