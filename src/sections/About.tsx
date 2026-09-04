import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { about, education, stats } from "@/data/site";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="shell">
        <SectionHeading id="about-title" label="About" title="Profile" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <Reveal>
            <p className="text-[1.02rem] leading-relaxed text-bone-dim">
              {about.summary}
            </p>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-bone-dim">
              {about.current}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <dl className="grid grid-cols-3 gap-4 border-y border-line py-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="display block text-[1.75rem] text-accent">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 block text-[0.75rem] leading-snug text-bone-faint">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5">
              <p className="eyebrow">Education</p>
              <p className="mt-2 text-[0.9rem] text-bone">{education.degree}</p>
              <p className="mt-0.5 text-[0.82rem] text-bone-faint">
                {education.institution} · {education.campus}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
