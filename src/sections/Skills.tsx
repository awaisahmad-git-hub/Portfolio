"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem, tinyItemVariants } from "@/components/motion-primitives";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <div className="shell">
        <SectionHeading id="skills-title" label="Skills" title="Technical stack" />

        {/* A <div> may group a dt/dd pair inside a <dl>, which is what Reveal renders. */}
        <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <dt className="text-[0.875rem] font-semibold tracking-[-0.01em] text-bone">
                {group.title}
              </dt>
              <dd className="mt-3">
                <Stagger className="flex flex-wrap gap-1.5" stagger={0.03}>
                  {group.items.map((item) => (
                    <StaggerItem
                      key={item}
                      variants={tinyItemVariants}
                      className="cursor-default rounded-md border border-line bg-ink-2/50 px-2.5 py-1 text-[0.8125rem] text-bone-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-line-2 hover:bg-ink-3 hover:text-bone"
                    >
                      {item}
                    </StaggerItem>
                  ))}
                </Stagger>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
