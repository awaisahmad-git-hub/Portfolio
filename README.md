# Awais Ahmad — Portfolio

A single-page personal portfolio for a .NET engineer. Dark, editorial, and
built to be sent to recruiters and clients.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS v4 ·
Motion · lucide-react

---

## Before you run it

Two files from the source material must be dropped into [public/](public/):

| File | What it is |
| --- | --- |
| `profile.jpg` | The headshot used in the hero. Without it the hero shows a monogram plate instead — nothing breaks, but the first screen is much weaker. |
| `Awais-Ahmad-Software-Engineer.pdf` | The CV. It's what every "Download CV" button links to. |

Both paths are set in [src/data/site.ts](src/data/site.ts) (`profile.photo`
and `profile.cv`) if you'd rather rename the files.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm run start   # production
npm run typecheck                # tsc --noEmit
```

## Editing the content

Everything the page displays lives in one file:
**[src/data/site.ts](src/data/site.ts)** — profile, stats, focus areas,
experience, projects, skill groups, education, navigation. The components read
from it, so adding a role or a project is a data edit, not a layout edit.

To add a project, append to `projects`. Give it a `slug`, and add a matching
case in [src/components/ProjectArt.tsx](src/components/ProjectArt.tsx) if you
want bespoke artwork — otherwise it falls through to the calendar composition.

## Structure

```
src/
  app/          layout, page, globals.css, icon, opengraph-image, robots, sitemap
  components/   Nav, Reveal, Section, MagneticLink, Portrait, ProjectArt,
                Ribbon, Spotlight, ScrollProgress, MotionProvider, icons
  sections/     Hero, About, Experience, Projects, Skills, Education,
                Contact, Footer
  data/         site.ts  ← all content
  hooks/        useActiveSection
public/         profile.jpg, CV pdf
```

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin (see
[.env.example](.env.example)). It feeds the canonical URL, Open Graph tags,
`robots.txt` and `sitemap.xml`. The page is fully static — `next build`
prerenders it, so any Node host or Vercel works as-is.

## Notes on the build

- **Motion.** Reveals use `whileInView` on opacity + transform only.
  `MotionConfig reducedMotion="user"` in
  [src/components/MotionProvider.tsx](src/components/MotionProvider.tsx) drops
  every transform when the visitor prefers reduced motion while letting fades
  settle, so no element can be stranded invisible. CSS-driven motion (the
  technology ribbon, smooth scrolling) is disabled in the same media query in
  [src/app/globals.css](src/app/globals.css).
- **Accessibility.** Semantic landmarks, a skip link, one `h1`, labelled
  sections, visible focus rings, and accessible names on every control.
- **Content.** Every fact on the page comes from the CV. Project cards use
  abstract, code-derived artwork rather than invented screenshots.
