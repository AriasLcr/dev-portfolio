# Structure

What each route contains and what each component does. Read alongside `CLAUDE.md`.

Build order: shared layout, then `/animation`, then `/work`, then `/` and `/about`.

---

## Shared

### `Layout`

Wraps every route. Header, `<main>`, footer. Sets the page background from `--base`
and applies the mono stack at the root.

### `Header`

Wordmark on the left, three links on the right: work, animation, about. The wordmark
links to `/`. The current route's link is marked with `aria-current="page"` and renders
in `--ink` while the others sit in `--ink-muted`.

Sticky is optional and off by default. If added, it must not overlay media on
`/animation`.

### `Footer`

One line: email, LinkedIn, GitHub. No social icons, no copyright year, no
"built with" credit.

### `Frame`

The core primitive, used by both the mosaic and the case studies. An image or video
with an edge-code label beneath it.

Props: `src`, `poster` (video only), `alt`, `label`, `aspect`, `span`.

- Renders `<img>` or `<video>` depending on the source extension
- Video is muted, loop, playsinline, `preload="metadata"`, poster always present
- Reserves space from `aspect` so nothing shifts on load
- Label sits beneath at `--t-xs` in `--ink-muted`, left-aligned, no end punctuation
- Square corners, no shadow, no hover transform

### `Prose`

Wraps body copy. Caps width at `--measure`, applies `--lh-body`. Used on `/work`
case studies and `/about`.

---

## `/` Landing

Short. Three screens of scrolling at most.

### `Intro`

Name, one or two sentences on what you do, and what you are looking for. No hero
image, no animated headline, no scroll indicator.

The copy carries this page. Write it plainly: what you build, where you work now,
availability.

### `SectionLinks`

Three entries pointing to `/work`, `/animation`, `/about`. Each is a single `Frame`
with a label, not a card with a title and description paragraph. The image does the
describing.

Pick representative media: a Collaboratory screen for work, one strong animation
piece for animation, nothing for about (text link is fine).

---

## `/work`

Two visual case studies, then two text entries.

### `CaseStudy`

Used twice, for Ezre and Collaboratory. Structure per instance:

- Role, organization, dates as a single edge-code line
- Two or three `Prose` paragraphs: what the product does, what you built, one
  decision worth explaining
- A small `Frame` group showing the UI

Content lives in `src/content/work.ts`, typed. No copy inline in JSX.

**Ezre.** Play Store listing screenshots and approved Figma frames only. Confirm
with Alberto before publishing anything unreleased. The decision worth explaining
is the Square POS transaction lock and the separate-transaction tipping design.

**Collaboratory.** UI screenshots. The decision worth explaining is the synchronous
entry decision with asynchronous logging, and why permissions are a flat role list
rather than a hierarchy.

### `TextEntry`

For G&S and KPMG, which have no usable imagery. Role, organization, dates, and two
sentences. No placeholder image, no gradient block standing in for a screenshot.

---

## `/animation`

The contact sheet. This page carries the most weight and should be built first.

### `Mosaic`

CSS Grid, `grid-auto-flow: dense`. Each item declares a span derived from its aspect
ratio in content data. No masonry library, no JavaScript layout measurement.

Collapses to a single column below 600px. Test at 360px.

Items are `Frame` components. Mixed stills and motion in one grid is intended; the
posters make them read as a consistent sheet until something plays.

### `Lightbox` (optional, build last)

Click a frame to open it full size. Keyboard: Escape closes, arrows move between
items. Focus traps inside while open and returns to the triggering frame on close.

Skip this if time is short. The grid works without it.

### Content

`src/content/animation.ts` holds one entry per piece: `src`, `poster`, `alt`,
`label`, `aspect`. Labels are short and factual: medium, course or context, year.

Alt text describes the work, never the filename.

---

## `/about`

### `Bio`

Three or four `Prose` paragraphs. Background, what you work on, what you are looking
for. First person, plain.

### `Contact`

Email, LinkedIn, GitHub, and a link to the resume PDF. Plain links, no contact form.

---

## Content and media

Copy lives in `src/content/` as typed data: `work.ts`, `animation.ts`, `about.ts`.
Components import it. Nothing is hardcoded in JSX.

Processed images that Vite should hash go in `src/assets/`. Large video goes in
`public/media/` and is referenced by path.

Run `scripts/process-media.sh` before laying out any grid. It converts GIFs to MP4,
generates poster frames, strips EXIF, and reports dimensions. Grid spans are set
from real dimensions, not guesses.

---

## Out of scope

No blog. No contact form. No analytics. No theme toggle. No search. No tag filtering
on the mosaic unless the animation set grows past roughly thirty pieces.