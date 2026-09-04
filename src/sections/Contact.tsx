"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { EASE, Stagger, StaggerItem } from "@/components/motion-primitives";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/site";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
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
  },
];

/**
 * Same cadence as the hero — label → headline → buttons, 80ms apart — but
 * triggered on scroll rather than on load, since this section starts offscreen.
 */
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8% 0px -5% 0px" },
  transition: { duration: 0.55, delay, ease: EASE },
});

export function Contact() {
  return (
    <Section
      id="contact"
      labelledBy="contact-title"
      className="relative isolate border-t border-line"
    >
      <AmbientBackdrop anchor="bottom" />

      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span {...enter(0)} className="t-label block">
              Contact
            </motion.span>

            {/* Masked so the headline rises out of its own line box, as the name does. */}
            <h2 id="contact-title" className="t-headline mt-4 overflow-hidden">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: "40%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                viewport={{ once: true, margin: "-8% 0px -5% 0px" }}
                transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              >
                Open to new opportunities.
              </motion.span>
            </h2>
          </div>

          <motion.div {...enter(0.16)} className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get in touch
            </Button>
            <Button href={profile.cv} variant="outline" download>
              Download CV
            </Button>
          </motion.div>
        </div>

        <Stagger
          as="ul"
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
          stagger={0.08}
          delay={0.24}
        >
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <StaggerItem as="li" key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full items-center gap-3 bg-ink px-5 py-5 transition-colors duration-200 hover:bg-ink-2"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-bone-faint transition-colors duration-200 group-hover:text-accent"
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="t-label block">{label}</span>
                  <span className="mt-1.5 block truncate text-[0.875rem] font-medium text-bone">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 shrink-0 text-bone-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
