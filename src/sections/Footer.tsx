"use client";

import { ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  function toTop() {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: calm ? "auto" : "smooth" });
  }

  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-[0.9rem] tracking-tight text-bone">{profile.name}</span>
          <span className="text-[0.78rem] text-bone-faint">
            &copy; {year} · Built with Next.js and Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Awais Ahmad"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-bone-dim transition hover:border-amber/50 hover:text-amber"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Awais Ahmad on LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-bone-dim transition hover:border-amber/50 hover:text-amber"
          >
            <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={toTop}
            className="group ml-2 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[0.8rem] text-bone-dim transition hover:border-amber/50 hover:text-amber"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
