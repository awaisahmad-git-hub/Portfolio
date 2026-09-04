"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const ids = navigation.map((item) => item.id);

export function Nav() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 16));

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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-ink/90 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between">
          <a
            href="#home"
            className="text-[0.9375rem] font-semibold tracking-[-0.015em] text-bone"
            aria-label={`${profile.name} — back to top`}
          >
            {profile.name}
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block py-1 text-[0.875rem] font-medium transition-colors duration-200 ${
                        isActive ? "text-bone" : "text-bone-faint hover:text-bone-dim"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                          transition={{ type: "spring", stiffness: 420, damping: 38 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.cv}
              download
              className="hidden rounded-lg border border-line-2 px-3.5 py-1.5 text-[0.8125rem] font-medium text-bone-dim transition-colors duration-200 hover:border-bone-faint hover:text-bone sm:block"
            >
              CV
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line-2 text-bone md:hidden"
            >
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-ink/95" onClick={() => setOpen(false)} />
            <nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-0 border-b border-line bg-ink px-[var(--gutter)] pb-6"
            >
              <div className="flex h-16 items-center justify-between">
                <span className="text-[0.9375rem] font-semibold tracking-[-0.015em]">
                  {profile.name}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line-2 text-bone"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`block border-t border-line py-3.5 text-[1rem] font-medium ${
                        active === item.id ? "text-accent" : "text-bone"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={profile.cv}
                download
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-lg bg-accent py-3 text-center text-sm font-medium text-ink"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
