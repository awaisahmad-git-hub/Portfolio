import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <div className="shell">
        <SectionHeading id="experience-title" label="Experience" title="Recent roles" />

        <ol className="mt-10">
          {experience.map((role, i) => (
            <li key={role.company}>
              <Reveal delay={i * 0.05}>
                <article className="grid gap-5 border-b border-line py-8 sm:grid-cols-[10.5rem_1fr] sm:gap-10">
                  <div>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-bone-faint">
                      {role.period}
                    </p>
                    {role.current && (
                      <p className="mt-2 inline-flex items-center gap-1.5 text-[0.72rem] text-accent">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        Current
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-[1.1rem] font-medium tracking-tight">
                      {role.role}
                      <span className="text-bone-faint"> · {role.company}</span>
                    </h3>
                    <p className="mt-1 text-[0.85rem] text-bone-faint">{role.project}</p>

                    <ul className="mt-4 space-y-1.5">
                      {role.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-[0.89rem] leading-relaxed text-bone-dim"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-px w-2.5 shrink-0 bg-line-2"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                      {role.stack.map((tech) => (
                        <li
                          key={tech}
                          className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-bone-dim"
                        >
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
    </Section>
  );
}
