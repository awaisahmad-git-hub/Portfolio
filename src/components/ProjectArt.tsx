"use client";

import { motion } from "motion/react";

/**
 * Abstract, code-inspired artwork for each project. No fabricated screenshots —
 * each composition is drawn from what the project actually does.
 */
export function ProjectArt({ slug }: { slug: string }) {
  switch (slug) {
    case "online-auction":
      return <AuctionArt />;
    case "case-management-system":
      return <CaseArt />;
    case "hrms":
      return <ApiArt />;
    default:
      return <AttendanceArt />;
  }
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-line bg-ink">
      <div className="grid-field absolute inset-0 opacity-45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_20%_0%,rgba(230,165,75,0.10),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-line-2" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-line-2" aria-hidden="true" />
          <span className="h-2 w-2 rounded-full bg-amber/50" aria-hidden="true" />
          <span className="ml-2 font-mono text-[0.66rem] tracking-[0.1em] text-bone-faint">
            {label}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

/** Rising bid ladder with a live indicator. */
function AuctionArt() {
  const bars = [26, 38, 34, 52, 46, 64, 58, 78, 71, 92];

  return (
    <Frame label="auction / live-bids">
      <div className="flex flex-col gap-6">
        <div className="flex h-40 items-end gap-[6px] sm:h-52" aria-hidden="true">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className={`flex-1 origin-bottom rounded-sm ${
                i === bars.length - 1 ? "bg-amber" : "bg-line-2"
              }`}
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 0.7,
                delay: i * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </div>

        <div className="space-y-2 font-mono text-[0.72rem]">
          <div className="flex items-center justify-between border-t border-line pt-3 text-bone-faint">
            <span>hubConnection.On&lt;Bid&gt;(&quot;BidPlaced&quot;)</span>
            <span className="flex items-center gap-1.5 text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              live
            </span>
          </div>
          <div className="flex items-center justify-between text-bone-dim">
            <span>stripe · payment confirmed</span>
            <span className="text-bone">200 OK</span>
          </div>
          <div className="flex items-center justify-between text-bone-faint">
            <span>ef core · SaveChangesAsync()</span>
            <span>committed</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Case status pipeline. */
function CaseArt() {
  const stages = ["Created", "Assigned", "Status updated", "Reassigned"];

  return (
    <Frame label="cms / case-pipeline">
      <ul className="flex flex-col gap-2.5" aria-hidden="true">
        {stages.map((stage, i) => (
          <li key={stage} className="flex items-center gap-3">
            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[0.6rem] ${
                i === 1
                  ? "border-amber/60 bg-amber/10 text-amber"
                  : "border-line-2 text-bone-faint"
              }`}
            >
              {i + 1}
            </span>
            <span className="flex-1 rounded-md border border-line bg-ink-2/60 px-3 py-2 text-[0.76rem] text-bone-dim">
              {stage}
            </span>
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: i <= 1 ? "var(--color-amber)" : "var(--color-line-2)" }}
            />
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/** Layered service architecture. */
function ApiArt() {
  const layers = [
    ["Client", "Consuming components"],
    ["Web API", "RESTful endpoints"],
    ["Modules", "Core HR processes"],
    ["Data", "SQL Server"],
  ];

  return (
    <Frame label="hrms / layers">
      <ul
        className="flex flex-col gap-2"
        aria-hidden="true"
      >
        {layers.map(([layer, detail], i) => (
          <li
            key={layer}
            className={`flex items-center justify-between rounded-md border px-3 py-2 ${
              i === 1
                ? "border-amber/45 bg-amber/[0.07]"
                : "border-line bg-ink-2/50"
            }`}
          >
            <span
              className={`font-mono text-[0.68rem] uppercase tracking-[0.12em] ${
                i === 1 ? "text-amber" : "text-bone-dim"
              }`}
            >
              {layer}
            </span>
            <span className="text-[0.72rem] text-bone-faint">{detail}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/** Attendance month grid: weekdays marked, weekends left blank. */
function AttendanceArt() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  // Deterministic sample month — weekdays present, a handful of gaps.
  const absent = new Set([3, 12, 22, 29]);

  return (
    <Frame label="attendance / month">
      <div className="mx-auto w-full max-w-[19rem]">
        <div className="grid grid-cols-7 gap-1.5" aria-hidden="true">
          {days.map((day, i) => (
            <span
              key={`${day}-${i}`}
              className="pb-1 text-center font-mono text-[0.6rem] text-bone-faint"
            >
              {day}
            </span>
          ))}
          {Array.from({ length: 35 }, (_, i) => {
            const weekend = i % 7 >= 5;
            const present = !weekend && !absent.has(i);
            return (
              <span
                key={i}
                className={`aspect-square rounded-[4px] border ${
                  present
                    ? "border-amber/25 bg-amber/40"
                    : weekend
                      ? "border-line bg-transparent"
                      : "border-line-2 bg-line"
                }`}
              />
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 font-mono text-[0.62rem] text-bone-faint">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-amber/40" />
            present
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] bg-line" />
            absent
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-[2px] border border-line" />
            weekend
          </span>
        </div>
      </div>
    </Frame>
  );
}
