"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/site";
import { MagneticLink } from "@/components/MagneticLink";
import { Portrait } from "@/components/Portrait";
import { Spotlight } from "@/components/Spotlight";

const ease = [0.16, 1, 0.3, 1] as const;

const focus = ["ASP.NET Core", ".NET MAUI", "Web APIs", "EF Core"];

export function Hero() {
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="grid-field mask-fade-b absolute inset-0 -z-20 opacity-[0.55]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-20 h-[42rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(230,165,75,0.09),transparent_70%)]"
      />
      <Spotlight className="-z-10" />

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              {...rise(0.05)}
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-ink-2/70 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
                <span className="text-[0.72rem] tracking-wide text-bone-dim">
                  {profile.roleLong}
                </span>
              </span>
              <span className="eyebrow">{profile.location}</span>
            </motion.div>

            <h1 className="mt-7 flex flex-col">
              <span className="sr-only">
                {profile.name} — {profile.role}
              </span>
              {[profile.firstName, profile.lastName].map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    aria-hidden="true"
                    initial={{ y: "105%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.12 + i * 0.09, ease }}
                    className={`display block text-[clamp(3.4rem,12.5vw,7.5rem)] ${
                      i === 0 ? "text-bone" : "text-bone/55"
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              {...rise(0.42)}
              className="mt-7 font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-bone-faint"
              aria-hidden="true"
            >
              {focus.join("  ·  ")}
            </motion.p>

            <motion.p
              {...rise(0.5)}
              className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-bone-dim sm:text-[1.08rem]"
            >
              {profile.tagline}
            </motion.p>

            <motion.div {...rise(0.6)} className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticLink href="#projects">
                View my work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </MagneticLink>
              <MagneticLink href={profile.cv} variant="outline" download>
                Download CV
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </MagneticLink>
            </motion.div>

            <motion.div
              {...rise(0.7)}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6"
            >
              <a
                href={`mailto:${profile.email}`}
                className="link-underline inline-flex items-center gap-2 text-[0.82rem] text-bone-dim transition-colors hover:text-bone"
              >
                <Mail className="h-4 w-4 text-bone-faint" aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-2 text-[0.82rem] text-bone-dim transition-colors hover:text-bone"
              >
                <LinkedInIcon className="h-4 w-4 text-bone-faint" aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.965, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.22, ease }}
            className="lg:col-span-5"
          >
            <Portrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
