# Portfolio site

Static personal portfolio. React + Vite, deployed to GitHub Pages at ariaslcr.github.io.

## Constraints
- React 19 + Vite + React Router 7. No Next.js, no meta-framework.
- No UI library. Hand-written CSS with custom properties in `src/styles/tokens.css`.
  (Tailwind is acceptable if preferred, but pick one and don't mix.)
- Monospace throughout: JetBrains Mono, self-hosted in `public/fonts/`, fallback
  `ui-monospace, Menlo, monospace`. No Google Fonts requests.
- Dark by default, light via `prefers-color-scheme`. Colors as tokens, never literals.
- Every video has a poster image and `preload="metadata"`. Lazy-load below the fold.
- Responsive down to 360px. Test the mosaic at that width.

## GitHub Pages routing
This is a user site, so `base: '/'` in `vite.config.ts`.
React Router needs a SPA fallback: the build must copy `dist/index.html` to
`dist/404.html`, otherwise direct links to /work and /animation 404.
Use BrowserRouter with that fallback, not HashRouter.

## Routes
- `/` landing, short intro, links to sections
- `/work` Ezre and Collaboratory case studies, plus text entries for G&S and KPMG
- `/animation` mosaic grid of coursework
- `/about` bio, resume link, contact

## Content
Project copy lives in `src/content/` as typed data, not inline JSX.
Media lives in `src/assets/` (imported, hashed) or `public/media/` (large video).

## Don't
- Don't add dependencies without asking.
- Don't invent project details. If copy is missing, leave a TODO.

## Design

### Concept

The site is a light table. Animators work on backlit discs; monospace type appears
the way edge code is printed along film stock, as machine-readable annotation beneath
a frame. The animation page is a contact sheet. Dark mode is the negative.

Do not build this as a terminal. Monospace here is annotation, not a shell prompt.
No green-on-black, no blinking cursors, no ASCII art chrome, no `$` prefixes,
no typewriter effects.

### Tokens

All color, type, and spacing comes from `src/styles/tokens.css`. Never write a
literal hex value, px font size, or ad-hoc margin in a component.

```css
:root {
  /* Light table */
  --base:        #F6F7F4;
  --base-raised: #FFFFFE;
  --ink:         #202322;
  --ink-muted:   #6B716D;
  --rule:        #C8CCC4;
  --blue:        #3A5CA8;  /* col-erase blue, primary accent */
  --red:         #C4402F;  /* col-erase red, sparing */

  --font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;

  /* 1.25 scale */
  --t-xs:   0.75rem;
  --t-sm:   0.875rem;
  --t-base: 1rem;
  --t-lg:   1.25rem;
  --t-xl:   1.563rem;
  --t-2xl:  1.953rem;
  --t-3xl:  2.441rem;

  --lh-tight: 1.25;
  --lh-body:  1.7;   /* mono needs air */
  --measure:  62ch;  /* mono runs wide */

  --sp-1: 0.25rem; --sp-2: 0.5rem;  --sp-3: 1rem;
  --sp-4: 1.5rem;  --sp-5: 2.5rem;  --sp-6: 4rem;

  --radius: 0;
  --hairline: 1px solid var(--rule);
}

@media (prefers-color-scheme: dark) {
  :root {
    --base:        #15181A;
    --base-raised: #1D2124;
    --ink:         #E8EAE6;
    --ink-muted:   #8A918C;
    --rule:        #333A3C;
    --blue:        #7FA0E8;
    --red:         #E2705F;
  }
}
```

Light is the default. Dark responds to `prefers-color-scheme` only; no theme toggle.

### Typography

JetBrains Mono throughout, self-hosted as woff2 in `public/fonts/`, preloaded,
`font-display: swap`. No Google Fonts request.

Two weights only: 400 for body, 600 for structure. No italics. No letter-spacing
adjustments except on the wordmark.

Body copy caps at `--measure`. Headings use `--lh-tight`, body uses `--lh-body`.

Sentence case everywhere. No ALL-CAPS labels, no tracked-out eyebrows above headings.

### Layout

Left-aligned throughout. Nothing centered except the wordmark in the header.

Frame labels sit beneath their media, left-aligned, at `--t-xs` in `--ink-muted`.
They read as edge code: short, factual, no sentence punctuation.
Example: `EZRE  TIPPING FLOW  2026`

Zero border radius on everything. Film frames and light tables have square corners.

Hairline rules (`--hairline`) only where they separate real sections. Not as decoration,
not around every element.

### Restraint

The mosaic is the one bold element. Everything around it stays quiet.

Forbidden:
- Card shadows of any kind
- Gradients, including subtle background washes
- Hover lift or scale transforms on cards
- Scroll-triggered fade-and-slide entrances
- Numbered markers (01 / 02 / 03) unless the content is genuinely sequential
- Arrows appended to link text
- Middle-dot joined meta strings
- Accenting a single word in a headline with color or weight

### Motion

One moment only, on `/animation`: video poster transitions to playback on hover
(desktop) or tap (mobile). Nothing else animates.

Respect `prefers-reduced-motion: reduce` by disabling autoplay and showing posters.

### Mosaic

CSS Grid, `grid-auto-flow: dense`, varied spans driven by each asset's aspect ratio
declared in content data. No masonry library.

Every video has a poster frame generated at build time, `preload="metadata"`,
muted, loop, playsinline. Posters prevent layout shift; the grid must render
complete before any video loads.

Below 600px the mosaic collapses to a single column. Test at 360px.

### Quality floor

- Visible keyboard focus on every interactive element, using `--blue`
- Alt text on every image; animation pieces describe the work, not the filename
- Contrast meets WCAG AA in both color schemes
- No layout shift on load