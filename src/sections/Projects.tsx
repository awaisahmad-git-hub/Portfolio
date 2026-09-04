import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
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
        <Reveal>
          <article className="mt-10 grid gap-8 rounded-xl border border-line bg-ink-2/40 p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
            <div>
              <p className="t-label">{featured.kind}</p>
              <h3 className="t-card-lg mt-3">
                {featured.name}
              </h3>
              <p className="mt-1.5 text-[0.8125rem] text-bone-faint">{featured.context}</p>

              <p className="t-body mt-5 max-w-md text-bone-dim">
                {featured.blurb}
              </p>

              <ul className="mt-5 space-y-1.5">
                {featured.highlights?.map((item) => (
                  <li
                    key={item}
                    className="t-body flex gap-2.5 text-bone-dim"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[9px] h-px w-2.5 shrink-0 bg-line-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line pt-5">
                {featured.stack.map((tech) => (
                  <li
                    key={tech}
                    className="t-meta text-bone-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <div className="w-full">
                <BidLadder />
              </div>
            </div>
          </article>
        </Reveal>

        {/* The rest, scannable */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-line p-6 transition-colors duration-200 hover:border-line-2 hover:bg-ink-2/40">
                <p className="t-label">{project.kind}</p>
                <h3 className="t-card mt-3">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] text-bone-faint">{project.context}</p>

                <p className="t-body mt-4 text-bone-dim">
                  {project.blurb}
                </p>

                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-6">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="t-meta text-bone-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
