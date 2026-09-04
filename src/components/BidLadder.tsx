/**
 * A single, static composition for the featured project — a rising bid ladder
 * with the winning bid picked out in the accent colour. Drawn from what the
 * project does; it is not a screenshot.
 */
export function BidLadder() {
  const bars = [24, 36, 31, 48, 43, 60, 55, 74, 68, 92];

  return (
    <div
      className="rounded-lg border border-line bg-ink p-5 sm:p-6"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-bone-faint">
          Live bids
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.66rem] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          SignalR
        </span>
      </div>

      <div className="mt-5 flex h-28 items-end gap-1.5 sm:h-32">
        {bars.map((height, i) => (
          <span
            key={i}
            className={`flex-1 rounded-sm ${
              i === bars.length - 1 ? "bg-accent" : "bg-line-2"
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
