"use client";

import { motion } from "motion/react";
import { EASE } from "@/components/motion-primitives";

/**
 * The featured project's one illustration: a rising bid ladder with the
 * winning bid picked out. Bars grow from the baseline as the card scrolls in.
 */
export function BidLadder() {
  const bars = [24, 36, 31, 48, 43, 60, 55, 74, 68, 92];

  return (
    <div className="rounded-lg border border-line bg-ink p-5 sm:p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="t-label">Live bids</span>
        <span className="t-meta flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          SignalR
        </span>
      </div>

      <motion.div
        className="mt-5 flex h-28 items-end gap-1.5 sm:h-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
      >
        {bars.map((height, i) => (
          <motion.span
            key={i}
            className={`flex-1 origin-bottom rounded-sm ${
              i === bars.length - 1 ? "bg-accent" : "bg-line-2"
            }`}
            style={{ height: `${height}%` }}
            variants={{
              hidden: { scaleY: 0, opacity: 0 },
              show: { scaleY: 1, opacity: 1, transition: { duration: 0.5, ease: EASE } },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
