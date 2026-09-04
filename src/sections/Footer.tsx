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
    <footer className="border-t border-line py-8">
      <div className="shell flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-[0.8125rem] text-bone-faint">
          &copy; {year} {profile.name}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Awais Ahmad"
            className="text-bone-faint transition-colors duration-200 hover:text-bone"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Awais Ahmad on LinkedIn"
            className="text-bone-faint transition-colors duration-200 hover:text-bone"
          >
            <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-bone-faint transition-colors duration-200 hover:text-bone"
          >
            Top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
