import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
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

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" className="border-t border-line">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Contact</span>
              <h2
                id="contact-title"
                className="display mt-4 text-[clamp(1.9rem,4.5vw,2.75rem)]"
              >
                Open to new opportunities.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </Button>
              <Button href={profile.cv} variant="outline" download>
                Download CV
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
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
                    <span className="eyebrow block">{label}</span>
                    <span className="mt-1 block truncate text-[0.85rem] text-bone">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-bone-faint transition-colors duration-200 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
