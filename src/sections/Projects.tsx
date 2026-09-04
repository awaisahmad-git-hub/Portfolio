"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ProjectArt } from "@/components/ProjectArt";
import { projects, type Project } from "@/data/site";

const featured = projects.find((p) => p.featured)!;
const rest = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <div className="shell">
        <SectionHeading
          id="projects-title"
          index="03"
          eyebrow="Projects"
          title={
            <>
              Things I have
              <span className="text-bone/45"> designed and shipped.</span>
            </>
          }
          lede="Four systems across web, mobile and desktop — the interfaces, the APIs behind them and the data underneath."
        />

        {/* Featured */}
        <Reveal y={30}>
          <article className="card-sheen group relative mt-14 overflow-hidden rounded-3xl border border-line bg-ink-2/40 transition-colors duration-500 hover:border-line-2 sm:mt-16">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 p-7 sm:p-10 lg:order-1 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-[0.66rem] uppercase tracking-[0.14em] text-amber">
                    Featured
                  </span>
                  <span className="eyebrow">{featured.kind}</span>
                </div>

                <h3 className="display mt-6 text-[clamp(1.85rem,3.6vw,2.6rem)] text-bone">
                  {featured.name}
                </h3>
                <p className="mt-2 text-[0.82rem] text-bone-faint">{featured.context}</p>

                <p className="mt-6 max-w-lg text-[0.97rem] leading-relaxed text-bone-dim">
                  {featured.blurb}
                </p>

                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {featured.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-amber"
                        aria-hidden="true"
                      />
                      <span className="text-[0.86rem] leading-relaxed text-bone-dim">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-9 flex flex-wrap gap-2 border-t border-line pt-7">
                  {featured.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-[0.72rem] text-bone-dim transition-colors duration-300 hover:border-amber/40 hover:text-amber-pale"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 flex items-center border-b border-line bg-ink/45 p-5 sm:p-7 lg:order-2 lg:border-b-0 lg:border-l lg:p-10">
                <div className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                  <ProjectArt slug={featured.slug} />
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Secondary pair */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.slice(0, 2).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} y={26}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Wide closer */}
        {rest.slice(2).map((project) => (
          <Reveal key={project.slug} y={26} className="mt-6 block">
            <article className="card-sheen group relative overflow-hidden rounded-2xl border border-line bg-ink-2/40 transition-colors duration-500 hover:border-line-2">
              <div className="grid items-center gap-8 p-7 sm:p-9 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="eyebrow">{project.kind}</span>
                    <span className="h-1 w-1 rounded-full bg-line-2" aria-hidden="true" />
                    <span className="eyebrow">{project.context}</span>
                  </div>
                  <h3 className="mt-4 text-[1.35rem] tracking-tight text-bone sm:text-[1.55rem]">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.92rem] leading-relaxed text-bone-dim">
                    {project.blurb}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-amber/70"
                        />
                        <span className="text-[0.85rem] leading-relaxed text-bone-dim">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-ink px-3 py-1 text-[0.72rem] text-bone-dim"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                  <ProjectArt slug={project.slug} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-sheen group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2/40 transition-colors duration-500 hover:border-line-2 hover:bg-ink-2/70">
      <div className="p-5 pb-0 sm:p-6 sm:pb-0">
        <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
          <ProjectArt slug={project.slug} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="eyebrow">{project.kind}</span>
          <span className="h-1 w-1 rounded-full bg-line-2" aria-hidden="true" />
          <span className="eyebrow">{project.context}</span>
        </div>

        <h3 className="mt-4 text-[1.25rem] leading-snug tracking-tight text-bone">
          {project.name}
        </h3>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-bone-dim">{project.blurb}</p>

        <ul className="mt-5 mb-7 space-y-2">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-amber/70"
              />
              <span className="text-[0.85rem] leading-relaxed text-bone-dim">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-auto flex flex-wrap gap-2 border-t border-line pt-6">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-ink px-3 py-1 text-[0.72rem] text-bone-dim"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
