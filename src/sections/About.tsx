"use client";

import { Section, SectionHeading } from "@/components/Section";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { focusAreas, stats } from "@/data/site";
import { motion } from "motion/react";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="shell">
        <SectionHeading
          id="about-title"
          index="01"
          eyebrow="About"
          title={
            <>
              Backend depth, with the
              <span className="text-bone/45"> interface in mind.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[1.02rem] leading-[1.75] text-bone-dim">
                Most of my work sits between an ASP.NET Core backend and the interface in
                front of it — building and extending modules in C#, exposing them over
                RESTful Web APIs, and then consuming those same APIs from cross-platform
                and web clients.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-[1.02rem] leading-[1.75] text-bone-dim">
                In practice that has meant a case management system for mobile, HR modules
                supporting core business workflows, a real-time online auction platform,
                and a desktop attendance tool. Underneath it all: Entity Framework Core
                over SQL Server, secure access with JWT and Entra ID External Identities,
                and day-to-day delivery in Agile teams through Azure DevOps, Jira and
                GitHub.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-9 flex items-start gap-4 border-l-2 border-amber/50 pl-5">
                <div>
                  <p className="eyebrow">Currently</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-bone">
                    Building the Case Management System at Systonova — .NET MAUI on the
                    front, RESTful integrations and Microsoft Entra ID External Identities
                    behind it.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Figures */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <dl className="divide-y divide-line rounded-2xl border border-line bg-ink-2/40 px-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-6 py-6"
                  >
                    <div>
                      <dt className="text-[0.9rem] text-bone">{stat.label}</dt>
                      <dd className="mt-1 text-[0.78rem] text-bone-faint">{stat.note}</dd>
                    </div>
                    <span className="display shrink-0 text-[2.4rem] leading-none text-amber">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Areas of expertise */}
        <RevealGroup
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
          stagger={0.07}
        >
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              variants={revealItem}
              className="card-sheen group relative bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 sm:p-8"
            >
              <span className="eyebrow text-amber/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[1.05rem] font-medium tracking-tight text-bone">
                {area.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-bone-dim">
                {area.body}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
