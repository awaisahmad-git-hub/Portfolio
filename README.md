# Awais Ahmad — Portfolio

A single-page professional profile for a .NET engineer. Dark, restrained, and
built to be scanned in under a minute.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS v4 ·
Motion · lucide-react · Geist

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
npm install        # required after a fresh clone — node_modules is not committed
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm run start   # production
npm run typecheck                # tsc --noEmit
```

## Editing the content

Everything the page displays lives in one file:
**[src/data/site.ts](src/data/site.ts)** — profile, about, stats, experience,
projects, skill groups, education, navigation. The components read from it, so
adding a role or a project is a data edit, not a layout edit.

The copy is deliberately condensed: hero is one line, About is two sentences,
experience bullets are single impact statements, project blurbs are one or two
sentences. Keep new entries to that length — the whole point is that a reader
can take the page in at a glance.

## Structure

```
src/
  app/          layout, page, globals.css, icon, opengraph-image, robots, sitemap
  components/   Nav, Section, Reveal, Button, Portrait, BidLadder,
                MotionProvider, icons
  sections/     Hero, About, Experience, Projects, Skills, Contact, Footer
  data/         site.ts  ← all content
  hooks/        useActiveSection
public/         profile.jpg, CV pdf
```

Education is folded into the About section rather than given a section of its
own; the auction project's bid-ladder graphic is the page's only illustration.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin (see
[.env.example](.env.example)). It feeds the canonical URL, Open Graph tags,
`robots.txt` and `sitemap.xml`. The page is fully static — `next build`
prerenders it, so any Node host or Vercel works as-is.

## Notes on the build

- **Typography.** One family — Geist, loaded as a single self-hosted variable
  woff2 (~29 KB, latin subset) via `next/font`. Three weights are used: 400
  body, 500 metadata and UI, 600 headings. The scale lives in
  [globals.css](src/app/globals.css) as `.t-name`, `.t-section`, `.t-headline`,
  `.t-card`, `.t-card-lg`, `.t-body`, `.t-lede`, `.t-label`, `.t-meta` and
  `.t-figure` — nothing sets its own size, weight and tracking ad hoc, so the
  hierarchy stays consistent. Headings use `clamp()`; body text is a fixed
  15px at 1.65 line-height on every breakpoint.
- **Motion.** One entrance animation (a short fade and 12px rise on scroll),
  plus hover states and the nav underline. `MotionConfig reducedMotion="user"`
  in [src/components/MotionProvider.tsx](src/components/MotionProvider.tsx)
  drops the transform for visitors who prefer reduced motion and keeps the
  fade, so nothing can be left stranded at `opacity: 0`.
- **Accessibility.** Semantic landmarks, a skip link, one `h1`, labelled
  sections, visible focus rings, and accessible names on every control.
- **Content.** Every fact comes from the CV, summarised for the web.
- **`.vs/` is excluded** from both git and Tailwind's source scanning — Visual
  Studio keeps locked index files there that otherwise break the build.
