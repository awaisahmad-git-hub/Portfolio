"use client";

import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { BidLadder } from "@/components/BidLadder";
import { projects } from "@/data/site";

const featured = projects.find((p) => p.featured)!;
const rest = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <div className="shell">
        <SectionHeading id="projects-title" label="Projects" title="Selected work" />

        {/* Featured */}
        <Reveal scale>
          <article className="card-hover group mt-10 grid gap-8 rounded-xl border border-line bg-ink-2/40 p-6 hover:border-line-2 hover:bg-ink-2/60 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            <div>
              <p className="t-label">{featured.kind}</p>
              <h3 className="t-card-lg mt-3">{featured.name}</h3>
              <p className="mt-1.5 text-[0.8125rem] text-bone-faint">{featured.context}</p>

              <p className="t-body mt-5 max-w-md text-bone-dim">{featured.blurb}</p>

              <Stagger as="ul" className="mt-5 space-y-1.5" stagger={0.06} delay={0.12}>
                {featured.highlights?.map((item) => (
                  <StaggerItem
                    as="li"
                    key={item}
                    className="t-body flex gap-2.5 text-bone-dim"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-px w-2.5 shrink-0 bg-line-2"
                    />
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line pt-5">
                {featured.stack.map((tech) => (
                  <li key={tech} className="t-meta text-bone-dim">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <div className="w-full transition-transform duration-300 ease-out group-hover:scale-[1.015]">
                <BidLadder />
              </div>
            </div>
          </article>
        </Reveal>

        {/* The rest, scannable */}
        <Stagger className="mt-4 grid gap-4 md:grid-cols-3" stagger={0.08}>
          {rest.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <article className="card-hover group flex h-full flex-col rounded-xl border border-line p-6 hover:border-line-2 hover:bg-ink-2/40">
                <div className="flex items-start justify-between gap-3">
                  <p className="t-label">{project.kind}</p>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-line-2 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="t-card mt-3">{project.name}</h3>
                <p className="mt-1.5 text-[0.8125rem] text-bone-faint">{project.context}</p>

                <p className="t-body mt-4 text-bone-dim">{project.blurb}</p>

                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-6">
                  {project.stack.map((tech) => (
                    <li key={tech} className="t-meta text-bone-dim">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
