"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { about, education, stats } from "@/data/site";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="shell">
        <SectionHeading id="about-title" label="About" title="Profile" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <Reveal>
            <p className="t-lede text-bone-dim">{about.summary}</p>
            <p className="t-lede mt-3 text-bone-dim">{about.current}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <Stagger
              as="dl"
              className="grid grid-cols-3 gap-4 border-y border-line py-5"
              stagger={0.08}
              delay={0.1}
            >
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="t-figure block text-accent">{stat.value}</span>
                    {/* Three narrow columns — balance the wrap so a two-word
                        label does not leave a single orphan on line two. */}
                    <span className="mt-2 block text-balance text-[0.75rem] leading-snug text-bone-faint">
                      {stat.label}
                    </span>
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-5">
              <p className="t-label">Education</p>
              <p className="mt-3 text-[0.875rem] font-medium text-bone">
                {education.degree}
              </p>
              <p className="mt-1 text-[0.8125rem] text-bone-faint">
                {education.institution}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
