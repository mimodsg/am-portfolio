---
name: "Architectural Systems"
description: "A restrained editorial brutalist design system for a senior systems-oriented engineer with a design background. Clean architectural surfaces, graphite typography, electric violet accents, DM Serif Display for editorial headings, Roboto Mono for structured body text, IBM Plex Mono for metadata, rounded hexagonal geometry, spacious asymmetric layouts, and accessibility-aware Tailwind-compatible tokens. Built for personal engineering portfolios, technical leadership identities, frontend architecture showcases, and systems-oriented editorial sites."
tags: [editorial, brutalist, architectural, technical, systems, premium, minimal, accessible, tailwind]
colors:
  primary:   "#353533"
  secondary: "#626260"
  tertiary:  "#722CFE"
  neutral:   "#DDD9E4"
  surface:   "#FAFAF8"
typography:
  display: "DM Serif Display"
  body:    "Roboto Mono"
  mono:    "IBM Plex Mono"
  scale:
    hero: "clamp(4rem, 8vw, 7rem) / 0.92 / 400 / -0.055em"
    h1:   "clamp(3rem, 5vw, 4rem) / 1.0 / 400 / -0.035em"
    h2:   "clamp(1.75rem, 3vw, 2rem) / 1.1 / 400 / -0.02em"
    body: "1rem / 1.8 / 400 / 0em"
radius:
  sm: 4px
  md: 8px
  lg: 14px
  pill: 9999px
shadows:
  card:   "0 1px 2px rgba(53,53,51,0.06)"
  button: "0 8px 24px rgba(53,53,51,0.08)"
borders:
  card:    "1px solid rgba(53,53,51,0.12)"
  divider: rgba(53,53,51,0.10)
buttons:
  primary:
    background: "#353533"
    color: "#FAFAF8"
    border: none
    shape: rounded-hex
    padding: 18px 28px
    font: 500 / 0.8125rem / 0.10em
    uppercase: true
  secondary:
    background: rgba(53,53,51,0.04)
    color: "#353533"
    border: 1px solid rgba(53,53,51,0.14)
    shape: rounded-hex
    padding: 18px 28px
    font: 500 / 0.8125rem / 0.10em
    uppercase: true
  outline:
    background: transparent
    color: "#353533"
    border: 1px solid rgba(53,53,51,0.12)
    shape: rounded-hex
    padding: 18px 28px
    font: 500 / 0.8125rem / 0.10em
    uppercase: true
  ghost:
    background: transparent
    color: "#626260"
    border: none
    shape: rounded-hex
    padding: 12px 16px
    font: 500 / 0.8125rem / 0.10em
    uppercase: true
charts:
  variant: "architectural-lines"
  stroke_width: 1.5
  fill_opacity: 0
  gridlines: false
  bar_gap: 12px
  highlight: single
  dot_marker: false
fonts_url: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Roboto+Mono:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap"
dependencies: ["tailwindcss", "lucide-react"]
---

# Architectural Systems

## AI Build Instructions

> **Read this section before writing any code.** The rules below
> are non-negotiable. Every value used in the UI must come from this
> file's frontmatter. Never substitute, approximate, or invent new
> colors, fonts, radii, shadows, or motion values. If a value is missing,
> ask the user before adding one.

### 1 · Your role

You are building UI for a project that has adopted **Architectural Systems**
as its design system. Treat `DESIGN.md` as the single source of truth.

Your job is to translate the user's product requirements into components
and pages that feel like they belong to a restrained editorial brutalist
identity system for a senior systems-oriented engineer with a design
background.

The interface should feel:
- architectural
- technical
- editorial
- collaborative
- premium
- clean
- systems-oriented

It should NOT feel like:
- a generic developer portfolio
- a startup landing page
- chaotic brutalism
- a SaaS dashboard template
- glassmorphism
- hyper-minimal luxury branding

### 2 · Token compliance

- Pull every color, font family, radius, shadow, border, and spacing value
  from the frontmatter at the top of this file.
- Use semantic roles such as `primary`, `secondary`, `tertiary`, `neutral`,
  and `surface`. Never hard-code hex values that bypass the system.
- When a token can be expressed as a Tailwind theme value or CSS variable,
  declare it once and reference it everywhere downstream.
- The Google Fonts `<link>` is provided in the Typography section.
  Add it to `<head>` before any component renders.
- Do not introduce new Tailwind colors, arbitrary visual values, or one-off
  utilities unless the user explicitly requests them.

### 3 · Component recipes

Use these recipes verbatim when building the corresponding component.

#### Buttons

Four variants are defined. Pick one. Never blend variants or invent a fifth.

- **Primary** — rounded-hex shape, bg `#353533`, text `#FAFAF8`, padding `18px 28px`, weight `500`, uppercased.
- **Secondary** — rounded-hex shape, bg `rgba(53,53,51,0.04)`, text `#353533`, border `1px solid rgba(53,53,51,0.14)`, padding `18px 28px`, weight `500`, uppercased.
- **Outline** — rounded-hex shape, text `#353533`, border `1px solid rgba(53,53,51,0.12)`, padding `18px 28px`, weight `500`, uppercased.
- **Ghost** — rounded-hex shape, text `#626260`, padding `12px 16px`, weight `500`, uppercased.

Reach for **primary** as the single dominant CTA per major screen.
**Secondary** supports the primary action. **Outline** works for tertiary
navigation or project CTAs. **Ghost** is reserved for inline metadata-style
links and quiet actions.

#### Cards

- Background: `#FAFAF8`
- Border: `1px solid rgba(53,53,51,0.12)`
- Shadow: `0 1px 2px rgba(53,53,51,0.06)`
- Radius: `radius.lg` (`14px`)
- Internal padding: `24px` for compact cards, `32-48px` for editorial panels.

Cards should feel like modular editorial systems panels, not floating SaaS
widgets.

#### Tabs

Variant: `metadata-underline`. Flat row of monospace labels. Active tab gets
a 2px underline in electric violet `#722CFE`. Inactive tabs use `#626260`.
No filled tab backgrounds.

#### Charts

- Variant: `architectural-lines`
- Stroke width: `1.5`
- No gridlines
- Highlight strategy: `single`
- Use electric violet only for the highlighted value
- Labels use `IBM Plex Mono`

#### Typography pairings

- **Display (`DM Serif Display`)** — hero, h1, h2, major editorial statements, architectural headings.
- **Body (`Roboto Mono`)** — paragraphs, summaries, UI copy, structured technical writing.
- **Mono (`IBM Plex Mono`)** — metadata, section numbering, navigation, labels, technical annotations.

### 4 · Hard constraints

Never do any of the following without explicit instruction from the user:

- Introduce a new color, font, radius, shadow, or motion value not declared above.
- Mix this system with Material, Bootstrap, shadcn defaults, or generic SaaS UI patterns.
- Use generic gradients, neon colors, glassmorphism, or glowing effects.
- Use accent violet for small body text. It does not meet AA for normal text.
- Center every section. The system depends on asymmetry.
- Add decorative geometry that does not support structure.
- Use emoji icons. Use a consistent icon library and size icons in line with body type.
- Add motion that exceeds the system's restraint.

### 5 · Before you finish — verify

Run through this checklist for every screen you produce:

- [ ] Every color used appears in the Colors table above.
- [ ] Fonts follow the declared display/body/mono pairing.
- [ ] Buttons match one of the declared variants exactly.
- [ ] Radius values come from `radius.sm`, `radius.md`, `radius.lg`, or `radius.pill`.
- [ ] Cards and dividers use the declared border and shadow tokens.
- [ ] Focus states are visible and consistent.
- [ ] Accent color is not used for small body text.
- [ ] Motion respects reduced-motion preferences.
- [ ] No values were invented. If something was missing, you stopped and asked.

---

## 1. Atmosphere

Architectural Systems is a restrained editorial brutalist interface built
around systems thinking, modular structure, and technical clarity.

The page surface is clean off-white `#FAFAF8`, supported by soft violet-gray
neutral `#DDD9E4`. Primary text uses graphite `#353533`. Secondary text uses
accessible muted graphite `#626260`. The single accent is electric violet
`#722CFE`, reserved for primary CTAs, metadata highlights, active states,
and modular hexagonal accents.

The visual system should feel like an architectural publication and a
technical systems journal rather than a conventional developer portfolio.

The contrast between **DM Serif Display** and **Roboto Mono** creates the core
identity tension of the system: human editorial thinking paired with structured
technical precision.

**Signature moves**
- Clean architectural page surface `#FAFAF8`
- Controlled oversized DM Serif Display typography
- Roboto Mono body copy for structured technical rhythm
- IBM Plex Mono metadata labels and section numbering
- Rounded hexagonal geometry derived from the personal brand mark
- 12-column responsive grid with asymmetric editorial rhythm
- Whitespace as the main section separator
- Electric violet accent used sparingly for structural emphasis
- Project panels presented as technical editorial dossiers
- Subtle, restrained motion only

## 2. Palette

### Surfaces
- **Paper** `#FAFAF8` — primary page surface
- **Paper Soft** `#F1F0F4` — secondary quiet surface
- **Neutral** `#DDD9E4` — structural neutral and soft panel tone
- **Hairline** `rgba(53,53,51,0.10)` — dividers, subtle borders

### Ink
- **Ink** `#353533` — headings, body text, primary CTA fill
- **Ink 60** `#626260` — secondary text, metadata, inactive navigation

### Accent
- **Electric Violet** `#722CFE` — primary CTA accents, active metadata, hexagonal accents
- **Electric Violet Soft** `rgba(114,44,254,0.10)` — focus ring background, subtle hover accents

## 3. Typography

| Role | Font | Size | Weight | Leading | Tracking |
|------|------|------|--------|---------|----------|
| Hero | DM Serif Display | clamp(4rem, 8vw, 7rem) | 400 | 0.92 | -0.055em |
| H1 | DM Serif Display | clamp(3rem, 5vw, 4rem) | 400 | 1.0 | -0.035em |
| H2 | DM Serif Display | clamp(1.75rem, 3vw, 2rem) | 400 | 1.1 | -0.02em |
| Body | Roboto Mono | 1rem | 400 | 1.8 | 0em |
| UI / Button | Roboto Mono | 0.8125rem | 500 | 1.5 | 0.10em uppercase |
| Caption | IBM Plex Mono | 0.75rem | 500 | 1.4 | 0.08em uppercase |
| Metadata | IBM Plex Mono | 0.8125rem | 500 | 1.4 | 0.06em uppercase |

Typography should feel:
- editorial
- intellectual
- architectural
- technical
- restrained
- systems-oriented

Do not substitute with decorative display fonts. Metadata should be sparse
and purposeful.

## 4. Buttons

### Primary (Graphite — System Entry)

```css
background: #353533;
color: #FAFAF8;
padding: 18px 28px;
border-radius: 14px;
text-transform: uppercase;
letter-spacing: 0.10em;
font-weight: 500;
box-shadow: 0 8px 24px rgba(53,53,51,0.08);
```

The primary button reads as a deliberate system entry point. Use only once per
major section.

### Secondary (Surface Wash)

- `rgba(53,53,51,0.04)` background, 1px hairline at 14% ink, rounded 14px corners.

### Outline & Ghost

- Outline: transparent, 1px hairline at 12% ink.
- Ghost: no border, ink-60 uppercase metadata style.

## 5. Cards

```css
background: #FAFAF8;
border: 1px solid rgba(53,53,51,0.12);
border-radius: 14px;
box-shadow: 0 1px 2px rgba(53,53,51,0.06);
```

Cards are modular editorial panels. They should feel structural and calm,
not heavily elevated. Project cards should be treated as technical dossiers
with metadata, role, challenge, systems, collaboration, and impact.

## 6. Charts

Architectural line charts or thin bars. Use 1.5px strokes. No gridlines.
One highlighted value in electric violet. Other values use ink at low opacity.
Labels use IBM Plex Mono uppercase 0.75rem. Charts should feel like technical
annotations, not dashboard widgets.

## 7. Tabs

Metadata underline tabs. Inactive tabs use `#626260`. Active tab uses
`#353533` text and a 2px electric violet underline. No filled backgrounds.

## 8. Spacing

- Base 8px
- Scale: `8, 16, 24, 32, 48, 64, 96, 128, 180`
- Section padding: 128px desktop, 64px mobile
- Editorial hero spacing can extend to 180px when needed
- Body measure: 66ch max for long-form copy

Use whitespace as the primary section separator.

## 9. Do's & don'ts

✅ **Do**
- Use the 12-column grid with asymmetric editorial rhythm
- Use whitespace generously
- Use electric violet sparingly
- Use metadata labels to structure navigation and sections
- Use rounded hexagonal geometry as structural support
- Keep motion restrained and purposeful
- Keep body copy readable and accessible
- Use Tailwind theme tokens or CSS variables for all visual values

❌ **Don't**
- Create a generic developer portfolio
- Use startup gradients or neon effects
- Use glassmorphism
- Center every section
- Overuse geometry as decoration
- Use electric violet for small paragraph text
- Over-animate the interface
- Invent new tokens inside components

---

## Tokens

> Generated from the same source the live preview renders from.
> Treat the values below as the contract. Never substitute approximations.

### Colors

| Role      | Value |
|-----------|-------|
| primary   | `#353533` |
| secondary | `#626260` |
| tertiary  | `#722CFE` |
| neutral   | `#DDD9E4` |
| surface   | `#FAFAF8` |

### Typography

- **Display:** DM Serif Display
- **Body:** Roboto Mono
- **Mono:** IBM Plex Mono

| Role | size / leading / weight / tracking |
|------|------------------------------------|
| Hero | clamp(4rem, 8vw, 7rem) / 0.92 / 400 / -0.055em |
| H1   | clamp(3rem, 5vw, 4rem) / 1.0 / 400 / -0.035em |
| H2   | clamp(1.75rem, 3vw, 2rem) / 1.1 / 400 / -0.02em |
| Body | 1rem / 1.8 / 400 / 0em |

### Radius

- sm: `4px`
- md: `8px`
- lg: `14px`
- pill: `9999px`

### Shadows

- **card:** `0 1px 2px rgba(53,53,51,0.06)`
- **button:** `0 8px 24px rgba(53,53,51,0.08)`

### Borders

- **card:** `1px solid rgba(53,53,51,0.12)`
- **divider:** `rgba(53,53,51,0.10)`

### Buttons

Four variants, each fully tokenized. The preview renders from these exact values.

#### Primary

| Property | Value |
|----------|-------|
| shape | `rounded-hex` |
| background | `#353533` |
| color | `#FAFAF8` |
| border | `none` |
| padding | `18px 28px` |
| fontWeight | `500` |
| fontSize | `0.8125rem` |
| tracking | `0.10em` |
| uppercase | `true` |

#### Secondary

| Property | Value |
|----------|-------|
| shape | `rounded-hex` |
| background | `rgba(53,53,51,0.04)` |
| color | `#353533` |
| border | `1px solid rgba(53,53,51,0.14)` |
| padding | `18px 28px` |
| fontWeight | `500` |
| fontSize | `0.8125rem` |
| tracking | `0.10em` |
| uppercase | `true` |

#### Outline

| Property | Value |
|----------|-------|
| shape | `rounded-hex` |
| background | `transparent` |
| color | `#353533` |
| border | `1px solid rgba(53,53,51,0.12)` |
| padding | `18px 28px` |
| fontWeight | `500` |
| fontSize | `0.8125rem` |
| tracking | `0.10em` |
| uppercase | `true` |

#### Ghost

| Property | Value |
|----------|-------|
| shape | `rounded-hex` |
| background | `transparent` |
| color | `#626260` |
| border | `none` |
| padding | `12px 16px` |
| fontWeight | `500` |
| fontSize | `0.8125rem` |
| tracking | `0.10em` |
| uppercase | `true` |

### Charts

| Property | Value |
|----------|-------|
| variant | `architectural-lines` |
| strokeWidth | `1.5` |
| fillOpacity | `0` |
| gridlines | `false` |
| barGap | `12px` |
| highlight | `single` |
| dotMarker | `false` |

---

## Pro tokens

> Production-fidelity tokens. States, density, motion, elevation,
> content rules and a measured WCAG contract derived from the
> resting tokens unless explicitly authored.

### States

#### Button

- **hover** — shadow: `0 12px 30px rgba(53,53,51,0.10)`, transform: `translateY(-1px)`
- **focus** — outline: `2px solid #722CFE`, outline-offset: `4px`
- **active** — transform: `translateY(1px)`, filter: `brightness(0.96)`
- **disabled** — opacity: `0.4`, cursor: `not-allowed`
- **loading** — opacity: `0.65`
- **selected** — bg: `#353533`, color: `#FAFAF8`

#### Input

- **hover** — border: `1px solid rgba(53,53,51,0.32)`
- **focus** — border: `1px solid #353533`, shadow: `0 0 0 3px rgba(114,44,254,0.16)`
- **disabled** — opacity: `0.4`
- **error** — border: `1px solid #B42318`, shadow: `0 0 0 3px rgba(180,35,24,0.16)`

#### Card

- **hover** — shadow: `0 12px 28px -18px rgba(53,53,51,0.45)`, transform: `translateY(-1px)`
- **selected** — border: `1px solid #353533`, shadow: `0 0 0 1px #353533`
- **dragging** — shadow: `0 20px 48px -18px rgba(53,53,51,0.55)`, transform: `scale(1.01)`, opacity: `0.9`

#### Tab

- **hover** — color: `#353533`
- **focus** — outline: `2px solid #722CFE`, outline-offset: `4px`
- **selected** — color: `#353533`, border: `0 0 2px 0 solid #722CFE`

### Density

| Mode | padding × | row × | body | radius × | Use for |
|------|-----------|-------|------|----------|---------|
| compact | 0.72 | 0.78 | 0.8125rem | 0.85 | Metadata, technical lists, compact navigation |
| comfortable | 1 | 1 | 1rem | — | Default content, cards, project panels |
| spacious | 1.35 | 1.3 | 1.125rem | 1.15 | Hero, summary, editorial sections |

### Motion

**Signature: Editorial Shift.** Minimal, structured transitions that reinforce
hierarchy without drawing attention away from content.

```css
transition: all 220ms cubic-bezier(0.32, 0.72, 0, 1);
```

| Token | Value |
|-------|-------|
| duration.instant | `100ms` |
| duration.fast | `160ms` |
| duration.base | `220ms` |
| duration.slow | `360ms` |
| easing.standard | `cubic-bezier(0.32, 0.72, 0, 1)` |
| easing.decelerate | `cubic-bezier(0.0, 0, 0.2, 1)` |
| easing.accelerate | `cubic-bezier(0.4, 0, 1, 1)` |
| easing.spring | `cubic-bezier(0.5, 1.1, 0.55, 1)` |

### Elevation

Five-level scale, system-specific recipe.

| Level | Shadow | Recipe |
|-------|--------|--------|
| level0 | `none` | Flat editorial surface. |
| level1 | `0 1px 2px rgba(53,53,51,0.06)` | Structural card. |
| level2 | `0 12px 28px -18px rgba(53,53,51,0.45)` | Hovered project panel. |
| level3 | `0 20px 48px -18px rgba(53,53,51,0.55)` | Floating navigation or overlay. |
| level4 | `0 40px 90px -24px rgba(53,53,51,0.60)` | Modal or focused overlay. |

### Content

- **measure:** `66ch`
- **paragraph spacing:** `1.3em`
- **list indent:** `1.5em`
- **list gap:** `0.5em`
- **link:** color `#353533`, underline `hover`, never color-only
- **blockquote:** border `2px solid #353533`, padding `0.8em 1.2em`
- **code:** background `rgba(53,53,51,0.08)`, color `#353533`

### Accessibility (WCAG 2.1)

**Overall:** AA

| Pair | Ratio | Required | Grade | Suggested fix |
|------|-------|----------|-------|---------------|
| Body text on surface `#353533` on `#FAFAF8` | 12.35:1 | AA | AAA | — |
| Body text on soft surface `#353533` on `#F1F0F4` | 11.18:1 | AA | AAA | — |
| Muted text on surface `#626260` on `#FAFAF8` | 5.72:1 | AA | AA | — |
| Muted text on soft surface `#626260` on `#F1F0F4` | 5.17:1 | AA | AA | — |
| Accent on surface `#722CFE` on `#FAFAF8` | 5.73:1 | AA | AA | — |
| Accent on soft surface `#722CFE` on `#F1F0F4` | 5.18:1 | AA | AA | — |
| Surface on primary `#FAFAF8` on `#353533` | 12.35:1 | AA | AAA | — |
