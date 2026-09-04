import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title">
      <div className="shell">
        <SectionHeading id="skills-title" label="Skills" title="Technical stack" />

        <dl className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <dt className="text-[0.875rem] font-semibold tracking-[-0.01em] text-bone">
                {group.title}
              </dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line bg-ink-2/50 px-2.5 py-1 text-[0.8125rem] text-bone-dim"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
