"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Section, SectionHeading } from "@/components/Section";
import {
  Reveal,
  Stagger,
  StaggerItem,
  tinyItemVariants,
} from "@/components/motion-primitives";
import { experience } from "@/data/site";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  // The rail fills as the list scrolls past the middle of the viewport.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 70%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <Section id="experience" labelledBy="experience-title">
      <div className="shell">
        <SectionHeading id="experience-title" label="Experience" title="Recent roles" />

        <div ref={trackRef} className="relative mt-10">
          {/* Timeline rail, desktop only. */}
          <div
            aria-hidden="true"
            className="absolute left-[13.25rem] top-2 hidden h-full w-px -translate-x-1/2 bg-line sm:block"
          >
            <motion.div
              className="h-full w-px origin-top bg-accent/45"
              style={{ scaleY: fill }}
            />
          </div>

          <ol>
            {experience.map((role, i) => (
              <li key={role.company}>
                <Reveal delay={i * 0.06}>
                  <article className="relative grid gap-5 border-b border-line py-8 sm:grid-cols-[12rem_1fr] sm:gap-10">
                    {/* Node on the rail. */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-[13.25rem] top-[2.35rem] hidden h-2 w-2 -translate-x-1/2 rounded-full ring-4 ring-ink sm:block ${
                        role.current ? "bg-accent" : "bg-line-2"
                      }`}
                    />

                    <div>
                      <p className="t-meta text-bone-faint">{role.period}</p>
                      {role.current && (
                        <p className="t-meta mt-2 inline-flex items-center gap-1.5 text-accent">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          Current
                        </p>
                      )}
                    </div>

                    <div>
                      <h3 className="t-card">
                        {role.role}
                        <span className="text-bone-faint"> · {role.company}</span>
                      </h3>
                      <p className="mt-1 text-[0.875rem] text-bone-faint">{role.project}</p>

                      <Stagger as="ul" className="mt-4 space-y-1.5" stagger={0.05} delay={0.1}>
                        {role.points.map((point) => (
                          <StaggerItem
                            as="li"
                            key={point}
                            variants={tinyItemVariants}
                            className="t-body flex gap-2.5 text-bone-dim"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[9px] h-px w-2.5 shrink-0 bg-line-2"
                            />
                            {point}
                          </StaggerItem>
                        ))}
                      </Stagger>

                      <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                        {role.stack.map((tech) => (
                          <li key={tech} className="t-meta text-bone-dim">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
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
