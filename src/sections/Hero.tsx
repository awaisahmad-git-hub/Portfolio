"use client";

import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/Button";
import { Portrait } from "@/components/Portrait";

const ease = [0.22, 1, 0.36, 1] as const;

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease },
});

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="border-b border-line pb-16 pt-32 sm:pb-20 sm:pt-36"
    >
      <div className="shell">
        <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <div>
            <motion.p {...enter(0)} className="eyebrow">
              {profile.role} · {profile.location}
            </motion.p>

            <motion.h1
              {...enter(0.06)}
              className="display mt-5 text-[clamp(2.75rem,7vw,4.5rem)]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              {...enter(0.12)}
              className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-bone-dim"
            >
              {profile.tagline}
            </motion.p>

            <motion.div {...enter(0.18)} className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">
                View work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href={profile.cv} variant="outline" download>
                Download CV
                <Download className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          <motion.div {...enter(0.1)} className="order-first md:order-last">
            <Portrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
