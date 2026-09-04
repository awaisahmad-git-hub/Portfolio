"use client";

import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/Button";
import { Portrait } from "@/components/Portrait";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { EASE } from "@/components/motion-primitives";

/**
 * Entrance sequence: label → name → tagline → buttons, 80ms apart, with the
 * portrait wiping open alongside. Everything is on screen inside ~700ms, so
 * the page is readable almost immediately.
 */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate border-b border-line pb-16 pt-32 sm:pb-20 sm:pt-36"
    >
      <HeroBackdrop />

      <div className="shell">
        <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <div>
            <motion.p {...enter(0)} className="t-label">
              {profile.role} · {profile.location}
            </motion.p>

            {/* The name is masked so it rises out of its own line box. */}
            <h1 className="t-name mt-5 overflow-hidden">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              >
                {profile.name}
              </motion.span>
            </h1>

            <motion.p {...enter(0.16)} className="t-lede mt-5 max-w-md text-bone-dim">
              {profile.tagline}
            </motion.p>

            <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">
                View work
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </Button>
              <Button href={profile.cv} variant="outline" download>
                Download CV
                <Download className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          <div className="order-first md:order-last">
            <Portrait />
          </div>
        </div>
      </div>
    </section>
  );
}
