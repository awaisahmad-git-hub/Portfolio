import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-24 py-20 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

/** Compact section header: label, title, and nothing else. */
export function SectionHeading({
  label,
  title,
  id,
}: {
  label: string;
  title: string;
  id: string;
}) {
  return (
    <Reveal>
      <header className="flex flex-col gap-3 border-b border-line pb-6">
        <span className="eyebrow">{label}</span>
        <h2 id={id} className="text-[1.6rem] font-medium tracking-tight sm:text-[1.9rem]">
          {title}
        </h2>
      </header>
    </Reveal>
  );
}
