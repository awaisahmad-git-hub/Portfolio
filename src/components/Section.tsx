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
      className={`scroll-mt-28 py-24 sm:py-28 lg:py-36 ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * Shared section header: numbered eyebrow, serif title and optional lede,
 * laid out on the same rhythm across every section.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  id,
  align = "start",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  id: string;
  align?: "start" | "center";
}) {
  const centered = align === "center";

  return (
    <header
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <Reveal>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="eyebrow text-amber/80">{index}</span>
          <span className="h-px w-8 bg-line-2" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          id={id}
          className="display mt-5 text-[clamp(2.15rem,5.2vw,3.6rem)] text-bone"
        >
          {title}
        </h2>
      </Reveal>

      {lede ? (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-bone-dim sm:text-base">
            {lede}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
