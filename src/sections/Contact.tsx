"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { MagneticLink } from "@/components/MagneticLink";
import { Spotlight } from "@/components/Spotlight";
import { profile } from "@/data/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    external: false,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (insecure context or denied) — the mailto link
      // beside this button still works, so fail quietly.
    }
  }

  return (
    <Section id="contact" labelledBy="contact-title" className="relative isolate !pb-16 sm:!pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-line-2 to-transparent"
      />
      <div className="shell">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-ink-2/40 px-7 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div
            aria-hidden="true"
            className="grid-field absolute inset-0 -z-10 opacity-35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(230,165,75,0.13),transparent_70%)]"
          />
          <Spotlight className="-z-10" />

          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">06 — Contact</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2
                id="contact-title"
                className="display mt-5 text-[clamp(2.3rem,6.5vw,4.25rem)] text-bone"
              >
                Let&rsquo;s build something
                <span className="text-amber"> solid.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-lg text-[1rem] leading-relaxed text-bone-dim">
                Whether it&rsquo;s a .NET engineering role, a system you need built, or a
                question about the work above — my inbox is open.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <MagneticLink href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email me
                </MagneticLink>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-ink-2/60 px-6 py-3 text-sm font-medium text-bone backdrop-blur-sm transition hover:border-amber/50 hover:text-amber-pale"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-amber" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>
              <p aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.24}>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full items-center gap-3.5 bg-ink px-5 py-5 transition-colors duration-300 hover:bg-ink-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-2 text-bone-dim transition-colors duration-300 group-hover:border-amber/50 group-hover:text-amber">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="eyebrow block">{label}</span>
                      <span className="mt-1 block truncate text-[0.82rem] text-bone">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 shrink-0 text-bone-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-8 text-center text-[0.85rem] text-bone-faint">
              Prefer the full history?{" "}
              <a
                href={profile.cv}
                download
                className="link-underline text-bone transition-colors hover:text-amber-pale"
              >
                Download my CV (PDF)
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
