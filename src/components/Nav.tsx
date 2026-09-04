"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const ids = navigation.map((item) => item.id);

export function Nav() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="shell flex items-center justify-between pt-4 sm:pt-6">
          <a
            href="#home"
            className="pointer-events-auto group flex items-center gap-2.5 rounded-full py-1 pr-3"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-line-2 bg-ink-2/80 backdrop-blur-md">
              <span className="display text-[0.95rem] leading-none text-amber">A</span>
              <span className="absolute inset-0 rounded-full ring-1 ring-amber/0 transition group-hover:ring-amber/40" />
            </span>
            <span className="hidden text-[0.8rem] font-medium tracking-tight text-bone-dim transition-colors group-hover:text-bone sm:block">
              {profile.name}
            </span>
          </a>

          {/* Desktop pill */}
          <nav
            aria-label="Primary"
            className={`pointer-events-auto hidden rounded-full border p-1 transition-all duration-500 md:block ${
              scrolled
                ? "border-line-2 bg-ink-2/70 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <ul className="flex items-center gap-0.5">
              {navigation.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-full px-3.5 py-1.5 text-[0.8rem] transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-bone-dim hover:text-bone"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-amber"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pointer-events-auto flex items-center gap-2">
            <a
              href={profile.cv}
              download
              className="hidden items-center gap-1.5 rounded-full border border-line-2 bg-ink-2/70 px-4 py-2 text-[0.78rem] text-bone-dim backdrop-blur-md transition hover:border-amber/50 hover:text-amber-pale lg:inline-flex"
            >
              CV
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-2 bg-ink-2/70 text-bone backdrop-blur-md transition hover:border-amber/50 md:hidden"
            >
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-ink/85 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="absolute inset-x-3 top-3 overflow-hidden rounded-3xl border border-line-2 bg-ink-2 p-5"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line-2 text-bone"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-5 space-y-1">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.035, duration: 0.35 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline justify-between border-b border-line/70 py-3 text-lg tracking-tight transition-colors ${
                        active === item.id ? "text-amber" : "text-bone"
                      }`}
                    >
                      {item.label}
                      <span className="eyebrow">
                        {String(navigation.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href={profile.cv}
                download
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-medium text-ink"
              >
                Download CV
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
