"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { EASE } from "@/components/motion-primitives";
import { profile } from "@/data/site";

/**
 * Hero portrait. Two pieces of motion:
 *
 *  - a mask reveal on load — the frame wipes open from the bottom while the
 *    photo inside settles from a slight scale-up, so the image resolves rather
 *    than pops in;
 *  - a few pixels of parallax as the hero scrolls away.
 *
 * The colour grade lives in `globals.css` (`.portrait-*`), which is what pulls
 * a bright studio headshot into this page's palette. Layer order inside the
 * frame is photo → vignette → warm pass; the vignette sits above the photo so
 * the hover scale moves the image underneath a falloff that stays put.
 *
 * Falls back to a monogram plate if the image file has not been added yet.
 */
export function Portrait() {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallax = useSpring(useTransform(scrollYProgress, [0, 1], [0, 26]), {
    stiffness: 90,
    damping: 26,
    restDelta: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: parallax }}
      className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] md:ml-auto md:mr-0 md:max-w-[20rem]"
    >
      {/* Key light behind the frame — the hero wash, borrowed. */}
      <div aria-hidden="true" className="portrait-glow pointer-events-none absolute -inset-6 -z-10" />

      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
        animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        className="group relative overflow-hidden rounded-xl border border-line-2 bg-ink-2"
      >
        {failed ? (
          <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2">
            <span className="text-[2.5rem] font-semibold tracking-tight text-accent">
              AA
            </span>
            <span className="t-label">Portrait pending</span>
          </div>
        ) : (
          <div className="relative aspect-[4/5]">
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.05, delay: 0.15, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={profile.photo}
                alt={profile.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 17rem, 20rem"
                quality={92}
                onError={() => setFailed(true)}
                className="portrait-photo object-cover object-top group-hover:scale-[1.03]"
              />
            </motion.div>

            <div aria-hidden="true" className="portrait-vignette pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="portrait-warm pointer-events-none absolute inset-0" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
