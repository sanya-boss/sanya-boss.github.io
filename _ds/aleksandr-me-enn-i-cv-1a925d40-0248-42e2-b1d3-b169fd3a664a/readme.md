# Verso — Design System

A dark, editorial design system for **a graphic designer's CV and personal site**. One centred column on near-black, a transitional serif for anything that speaks, a neutral grotesque for anything that works, mono for machine facts, and a cream paper sheet for long-form documents (the letter, the CV).

**Verso** is the name given to this system for reference purposes — the user's own name, mark and copy are not in it yet. All person-level content in the components and UI kits ("Vera Kessler", "Kessler Type", prices, dates, awards) is **placeholder**, written to demonstrate rhythm and length. Replace it with the real CV.

## Sources given
- `assets/reference/ref-portfolio-home.png` — dark personal-site home page: avatar nav, two-tone serif hero, newsletter card, software/product grids, writing index, footer with mono version pill. (Uploaded screenshot.)
- `assets/reference/ref-store.png` — the same site's store view: serif page title, one featured split product card, two stacked cards, "There is more" CTA row.
- `assets/reference/ref-letter-contact.png` — a second, more austere site: pure-black page, a tilted cream letter set in serif, an oversized bold grotesque "Say hello", label/value contact rows, mono footer.

No codebase, Figma file, font binaries, icon set or logo were provided. The user was explicit that these sites are **not their brand** — they are style references only. Nothing here reproduces those sites' marks, names or copy; the system generalises their structure and treatment into an original palette, type pairing and component set.

## What is here
Two products:
1. **Portfolio site** (`ui_kits/portfolio/`) — home/about, store, contact. The public surface.
2. **CV** (`ui_kits/cv/`) — the printable résumé as a cream sheet on the dark desk.

---

## Content fundamentals

**Voice.** First person, lower-drama. "I design identities and the printed matter that carries them." The designer speaks as one person doing specific work, not a studio-of-one using the royal we. Studio names appear as names ("Kessler Type"), never as "we".

**Address.** "I" for everything about the work; "you" only when asking for something — a sign-up, a message, a hire. The references do exactly this: the letter is all "I", and turns to "you" in its last line before the sign-off.

**Sentence shape.** Short declaratives, then one longer sentence that gives the detail. Fragments are allowed as openers ("Notes on type, print production, and running a one-person studio."). Em dashes are used for a turn in thought, not for emphasis stacking. No exclamation marks except in a greeting ("Ayo! I'm Vera —").

**Casing.** Sentence case everywhere in body and UI. Title Case for section labels and nav items ("Selected Work", "Digital Products", "Store"). UPPERCASE only in mono micro-copy ("SELECTED WORK — 2019/2026", "CURRICULUM VITAE"). Buttons are sentence case: "Buy now", "Learn more", "Get in touch".

**Length rules.** Hero lede: three lines maximum, ~46 characters per line. Card description: one line, one clause ("From lead to paid. All in one place."). Product description: one sentence, ends in a period. List rows: title plus a relative date, nothing else. Section labels: one or two words.

**Numbers and facts.** Prices are whole dollars, no cents ("$99"). Dates in copy are long-form ("March 5, 2026"); dates in an index are relative ("4 months ago"); dates on the CV are mono ranges ("2015 — 2019"). Versions and times are mono and unexplained ("v2.1.0", "11:10 AM WEST") — they are texture, not information.

**Claims.** Concrete and checkable: "a 96-page workbook", "six weights, two italics", "a 90k-copy monthly". Never "award-winning", "passionate", "innovative", "pixel-perfect".

**Emoji.** Never. Not in copy, not in labels, not in headings. The references use none.

**Vibe.** A quiet late-evening portfolio. Confident, slightly wry, allergic to hype. It reads like someone who prints things and would rather show you than tell you.

**Examples to copy.**
- Hero: "Ayo! I'm Vera — / Designer, typesetter, printmaker."
- Newsletter: "Notes on type, print production, and running a one-person studio. Sent when there is something worth sending."
- Availability: "Two identity slots left this year, and I am reading full-time roles at studios that print things."
- CTA row: "There is more."
- Contact: "Please get in touch to see my latest work and discuss a project or role you have in mind."

---

## Visual foundations

**Ground.** Near-black, not black: `--ink-1` #0d0d0d for the page, `--ink-2` #161615 for cards, `--ink-3` #1e1e1c for raised surfaces and hover. Pure `#000` (`--ink-0`) is reserved for the austere variant (the contact page in the third reference) and for image wells behind screenshots. The tiny warm bias in the greys (a point or two of yellow) keeps the page from looking like a terminal.

**Type.** Display: **Newsreader** — hero lines, section labels, serif body on paper. UI and running copy: **Schibsted Grotesk** at 13.5/15/17px. Machine facts: **Geist Mono** at 10.5–12px, uppercase, +0.08em. The signature move is the **two-tone heading**: line one at `--text-primary`, line two at `--text-tertiary`, same size and face. Display tracking is −0.02em; body is −0.011em. One deliberate exception exists: the contact page's "Say hello" is bold grotesque at 44–86px, because the reference sets it that way — it is the only place a grotesque goes big.

**Colour discipline.** One accent: **oxide red** `--oxide-500` #e04426. Its whole job is a SALE chip, an invalid input border, a live status dot, and at most one accent button per page. It never colours links, headings, hovers or large fills. Everything else is ink, chalk, paper and translucent white. There are **no gradients** in the system except inside a `ShowcaseCard` backdrop, where a piece of product art or a two-stop sky stands in for a screenshot.

**Backgrounds.** Flat fills only. No page-level imagery, no textures, no noise overlays, no repeating patterns. Imagery appears only *inside* cards: cropped screenshots bleeding to the card edge (left-top anchored, never letterboxed) or a single mark centred on a backdrop. Nothing on the page is full-bleed; the card is always the frame.

**Spacing and layout.** One centred column — 565px for the portfolio, 672px for the store and CV — with `clamp(20px, 6vw, 64px)` gutters. Sections are separated by 96px of nothing; cards inside a section by 12–16px. Card padding is 16px, 24px for a card that holds a heading. The column never becomes two; the grid inside a section is at most two up. Nothing is sticky, nothing is fixed, the nav scrolls away with the page.

**Borders.** Every border is a 1px hairline of translucent white: `--alpha-line` (7.5%) at rest, `--alpha-line-strong` (14%) for focus, dotted rules and a hovered card's edge. Dotted 1px is the list separator — writing index, contact rows. On paper, rules are `rgba(26,24,19,0.14)` solid, never dotted.

**Radii.** 14px cards, 18px for a card that contains cards, 12px tiles and media wells, 10px buttons and inputs, 8px small buttons, 6px the SALE chip, 999px pills (nav chips, badges, footer stamp), and 2px for paper — a sheet is almost square-cornered, which is what makes it read as paper.

**Cards.** Fill `--ink-2`, 1px hairline, 14px radius, and an inset top highlight (`inset 0 1px 0 rgba(255,255,255,0.055)`) that fakes a lit edge. No outer drop shadow — depth on ink comes from the hairline plus that highlight. Cards never carry a coloured left border. Nested content sits in a `quiet` well (white 4.5%) rather than a second bordered card.

**Shadows.** Three only: `--shadow-raised` (0 8 24 / 45%) for popovers; `--shadow-light-control` (a tight 1px + 2/6px pair) under light pill buttons so they read as physical objects on the dark page; `--shadow-paper` (0 2 4 / 40% plus 0 32 80 / 65%) under a cream sheet, which is the heaviest shadow in the system and the only one that is meant to be noticed.

**Transparency and blur.** Translucency does structural work (borders, input fills, chips) but is never used for glass panels — there is no backdrop blur anywhere, because nothing overlaps content. `--blur-glass` exists for an overlay if one is ever needed; prefer not to need it.

**Protection.** Type never sits on an image. Where a caption must accompany art, it goes in the card's own padded footer on a flat fill — capsules and scrim gradients are not part of this brand.

**Motion.** Restrained and short: 120ms on colour and opacity, 200ms on movement, 380ms for entrances, all on `cubic-bezier(0.16, 1, 0.3, 1)`. Entrances are a 12–16px rise plus a fade, once, on first view. Nothing bounces, nothing springs, nothing loops, nothing parallaxes, and nothing scales above 1.

**Hover.** Surfaces lighten one step (`--ink-2` → `--ink-3`, border 7.5% → 14%); light buttons go to pure white; ghost buttons pick up a white 8% fill and their text goes full white; list-row titles *dim* to `--text-secondary` rather than brighten, which is the reference's own inversion. No underlines appear on hover, no icons slide.

**Press.** `transform: scale(0.985)` plus one step darker (light → white stays, accent → `--oxide-600`). No colour flash, no ripple.

**Focus.** 1px `rgba(246,245,242,0.55)` outline at 2px offset. Inputs additionally strengthen their border.

**Disabled.** 40% opacity, shadow removed, cursor `not-allowed`. Never grey-on-grey re-colouring.

**Imagery mood.** Cool-neutral and low contrast. Screenshots are shown as artefacts — cropped, slightly desaturated, sitting on pure black. No warm grading, no film grain, no duotones. The only warm thing in the system is the paper.

---

## Iconography

The reference material ships **no icon set**: its interface uses two things — a text glyph ↗ after external nav links, and small illustrated product marks inside tiles. This system keeps that:

- **External links** use the literal glyph `↗` at ~10.5px, 70% opacity, set in the body face. This is the default; do not swap it for an icon.
- **Everything else** uses the `Icon` component: **Lucide** (v0.454.0, `lucide-static` via jsDelivr CDN), masked to `currentColor` so it inherits type colour. **SUBSTITUTION — flagged:** Lucide is a stand-in chosen for the closest match to the references' thin, geometric, rounded-cap drawing; no real icon set was provided. Sizes: 13px inside a small button, 16px default, 24–30px centred in a `Tile`.
- **No emoji, ever.** No coloured icons. No filled icon styles. No icon fonts.
- Unicode is used for typographic punctuation only: — (em dash), ↗, ·, ©. Not as iconography.
- Product/project marks are **images** placed in a `Tile` or as a `ShowcaseCard` backdrop. Do not draw them as SVG.

**No logo was supplied**, and none has been invented. The mark is type: initials in bold grotesque (`VK`) at nav scale, the full name in Newsreader for titles, and an `Avatar` portrait where the references put one. See the "Wordmark" card in the Brand group.

---

## Components
Twenty-two components, grouped by concern. Import from the compiled namespace; see each `*.prompt.md` for usage.

**`components/core/`** — `Card`, `Badge`, `SectionLabel`, `Avatar`, `Divider`, `MetaText`, `Tile`, `PriceTag`, `Icon`
**`components/forms/`** — `Button`, `Input`, `EmailCapture`
**`components/navigation/`** — `NavBar`, `FooterBar`, `ListRow`, `DefinitionRow`
**`components/patterns/`** — `HeroHeading`, `PromoCard`, `ProductCard`, `ShowcaseCard`, `PaperSheet`, `CTARow`

### Intentional additions
No source defined a component inventory (screenshots only), so the set above was derived element-by-element from the three references. Two entries go slightly beyond what is visible:
- `Icon` — a wrapper so the substituted Lucide set has one controlled entry point.
- `EmailCapture` — the input + button row appears twice in the references as a unit, so it is packaged as one.

## UI kits
- `ui_kits/portfolio/` — `index.html` (click-through), `HomeScreen.jsx`, `StoreScreen.jsx`, `ContactScreen.jsx`, `README.md`.
- `ui_kits/cv/` — `index.html` (sheet on desk, flatten-for-print toggle), `CvSheet.jsx`, `README.md`.

## Index
| Path | What |
| --- | --- |
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/fonts.css` | Google Fonts import + family tokens. **Substitution flagged below.** |
| `tokens/colors.css` | Ink, chalk, paper, oxide, alpha utilities, semantic aliases. |
| `tokens/typography.css` | Sizes, line-heights, weights, tracking, ready-made `font` shorthands. |
| `tokens/spacing.css` | 2→128 scale, column measures, gutters, control heights. |
| `tokens/radius.css` | Radii and border shorthands. |
| `tokens/elevation.css` | Hairline/highlight edges and the three shadows. |
| `tokens/motion.css` | Durations, easings, control transition, press scale. |
| `tokens/base.css` | Element resets, link colours, selection, reduced-motion. |
| `guidelines/*.html` | 20 specimen cards: Colors (5), Type (5), Spacing (4), Brand (6). |
| `components/<group>/` | `Name.jsx`, `Name.d.ts`, `Name.prompt.md`, one `*.card.html` per group. |
| `ui_kits/portfolio/`, `ui_kits/cv/` | Full-screen recreations. |
| `templates/portfolio-page/` | "Portfolio page" starting template for consuming projects. |
| `templates/cv-sheet/` | "CV sheet" starting template — printable résumé. |
| `assets/reference/` | The three uploaded reference screenshots, used as card/product art. |
| `SKILL.md` | Agent-Skills wrapper for use outside this project. |

## Substitutions and gaps — please confirm
1. **Fonts.** No binaries were supplied. Newsreader (display serif), Schibsted Grotesk (UI), Geist Mono (meta) are the nearest Google Fonts matches to the references and are loaded by CSS `@import` from Google Fonts — there are no local `@font-face` files in the project. If the real faces are licensed (the references look like a Times-adjacent serif plus Helvetica Now), send the files and `tokens/fonts.css` becomes real `@font-face` rules.
2. **Icons.** Lucide via CDN, as above.
3. **Logo.** None provided, none drawn. Type is the mark.
4. **Identity content.** Name, roles, dates, prices and awards throughout are placeholder.
5. **Not built:** slide templates (no deck was provided) and the Blog/Studio views (no reference existed for them).
