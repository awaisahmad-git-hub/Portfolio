"use client";

import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/site";

export function Education() {
  return (
    <Section id="education" labelledBy="education-title">
      <div className="shell">
        <SectionHeading
          id="education-title"
          index="05"
          eyebrow="Education"
          title={
            <>
              Where the
              <span className="text-bone/45"> fundamentals came from.</span>
            </>
          }
        />

        <Reveal y={26}>
          <article className="card-sheen group relative mt-12 overflow-hidden rounded-3xl border border-line bg-ink-2/40 transition-colors duration-500 hover:border-line-2 sm:mt-14">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(70%_80%_at_100%_0%,rgba(230,165,75,0.08),transparent_60%)]"
            />

            <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-14 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line-2 bg-ink text-amber">
                    <GraduationCap className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="eyebrow">Bachelor&rsquo;s degree</span>
                </div>

                <h3 className="display mt-6 text-[clamp(1.7rem,3.4vw,2.35rem)] text-bone">
                  {education.degree}
                </h3>

                <p className="mt-3 text-[1rem] text-bone-dim">
                  {education.institution}
                  <span className="text-bone-faint"> · {education.campus}</span>
                </p>

                <p className="mt-6 max-w-lg border-l-2 border-amber/40 pl-5 text-[0.92rem] leading-relaxed text-bone-dim">
                  {education.detail}
                </p>
              </div>

              <div className="flex items-center gap-6 rounded-2xl border border-line bg-ink/60 p-7 lg:flex-col lg:items-start lg:gap-3">
                <span className="display text-[3.4rem] leading-none text-amber">
                  {education.grade.split(" / ")[0]}
                </span>
                <div>
                  <p className="text-[0.9rem] text-bone">{education.gradeLabel}</p>
                  <p className="mt-1 text-[0.78rem] text-bone-faint">
                    out of {education.grade.split(" / ")[1]}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
