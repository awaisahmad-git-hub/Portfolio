# Assets to add

Two files from the source material need to sit in this folder. Both are
referenced from `src/data/site.ts` (`profile.photo` and `profile.cv`).

| File | What it is | Used by |
| --- | --- | --- |
| `profile.jpg` | The square headshot (navy suit, grey backdrop). Any JPG/PNG works — rename it to exactly `profile.jpg`, or change `profile.photo` in `src/data/site.ts`. | Hero portrait |
| `Awais-Ahmad-Software-Engineer.pdf` | The CV PDF. | "Download CV" buttons in the nav, hero and contact section |

Until `profile.jpg` exists the hero shows a monogram plate instead of the
photo — nothing breaks, but the first screen is much stronger with the
portrait in place.

Nothing else in this folder is served publicly, so keep unrelated files out.
