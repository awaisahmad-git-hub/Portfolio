"use client";

import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/Section";
import { RevealGroup, revealItem } from "@/components/Reveal";
import { Ribbon } from "@/components/Ribbon";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className="!pb-0">
      <div className="shell">
        <SectionHeading
          id="skills-title"
          index="04"
          eyebrow="Skills"
          title={
            <>
              The toolkit,
              <span className="text-bone/45"> grouped by job.</span>
            </>
          }
          lede="What I reach for, organised by the part of the problem it solves."
        />

        <RevealGroup className="mt-14 border-t border-line" stagger={0.05}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              className="group grid items-baseline gap-x-8 gap-y-4 border-b border-line py-7 transition-colors duration-500 hover:bg-ink-2/40 md:grid-cols-[minmax(0,15rem)_1fr] md:px-2"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.7rem] text-amber/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.02rem] tracking-tight text-bone">{group.title}</h3>
                  <p className="mt-0.5 text-[0.75rem] text-bone-faint">{group.note}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-ink-2/60 px-3.5 py-1.5 text-[0.8rem] text-bone-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/40 hover:text-amber-pale"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </RevealGroup>
      </div>

      <div className="mt-20">
        <Ribbon />
      </div>
    </Section>
  );
}
