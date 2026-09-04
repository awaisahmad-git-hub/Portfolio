"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/site";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <Section id="experience" labelledBy="experience-title" className="relative">
      <div className="shell">
        <SectionHeading
          id="experience-title"
          index="02"
          eyebrow="Experience"
          title={
            <>
              Three roles,
              <span className="text-bone/45"> one stack.</span>
            </>
          }
          lede="From modernising a WPF desktop tool as an intern to shipping a cross-platform case management system today."
        />

        <div ref={trackRef} className="relative mt-16 sm:mt-20">
          {/* Rail */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 hidden h-full w-px bg-line sm:block"
          >
            <motion.div
              className="h-full w-px origin-top bg-gradient-to-b from-amber via-amber/60 to-transparent"
              style={{ scaleY: progress }}
            />
          </div>

          <ol className="space-y-14 sm:space-y-16 sm:pl-10 lg:pl-14">
            {experience.map((role) => (
              <li key={role.company} className="relative">
                {/* Rail node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-2.5 hidden h-[9px] w-[9px] -translate-x-[4px] rounded-full border border-amber/70 bg-ink sm:block lg:-left-14"
                >
                  {role.current && (
                    <span className="absolute inset-[1.5px] rounded-full bg-amber" />
                  )}
                </span>

                <Reveal y={26}>
                  <article className="card-sheen group relative rounded-2xl border border-line bg-ink-2/35 p-6 transition-all duration-500 hover:border-line-2 hover:bg-ink-2/70 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-[1.35rem] tracking-tight text-bone sm:text-[1.5rem]">
                            {role.company}
                          </h3>
                          {role.current && (
                            <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-amber">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-[0.95rem] text-amber/90">{role.role}</p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-bone-dim">
                          {role.period}
                        </p>
                        <p className="mt-1 text-[0.75rem] text-bone-faint">
                          {role.location}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-line pt-5">
                      <span className="eyebrow">Project</span>
                      <span className="text-[0.9rem] text-bone">{role.project}</span>
                    </div>

                    <p className="mt-3 text-[0.92rem] leading-relaxed text-bone-dim">
                      {role.summary}
                    </p>

                    <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {role.highlights.map((point) => (
                        <div key={point.label}>
                          <dt className="flex items-center gap-2 text-[0.82rem] font-medium text-bone">
                            <span
                              aria-hidden="true"
                              className="h-1 w-1 shrink-0 rounded-full bg-amber/70"
                            />
                            {point.label}
                          </dt>
                          <dd className="mt-1.5 pl-3 text-[0.86rem] leading-relaxed text-bone-dim">
                            {point.body}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {role.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-ink px-3 py-1 text-[0.72rem] text-bone-dim transition-colors duration-300 group-hover:border-line-2"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
