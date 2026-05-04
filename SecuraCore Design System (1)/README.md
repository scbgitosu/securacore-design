# SecuraCore Design System

> **Technology Made Simple.**
> The official design system for SecuraCore — Central Oregon's trusted smart home, security, Wi-Fi, and AV installer.

SecuraCore designs and installs reliable technology systems for homes and businesses in Bend, Sunriver, Sisters, Redmond and Powell Butte: smart home automation, security systems, surveillance cameras, whole-home Wi-Fi, audio/video, lighting and shade control. This design system captures the visual and verbal identity so any designer or agent can produce on-brand work — website pages, sales proposals, social posts, decks, uniforms, signage, mockups.

---

## Index

Files in this project:

| File | Purpose |
|---|---|
| `README.md` | This file — brand context, content + visual foundations, iconography |
| `SKILL.md` | Agent-skill entry point (works locally and in Claude Code) |
| `colors_and_type.css` | Canonical CSS custom properties + semantic type classes |
| `fonts/` | Posterama + Open Sans webfonts |
| `assets/` | Logos, product icons (light + dark plates), lifestyle photography |
| `preview/` | Design System tab cards — colors, type, components, brand |
| `ui_kits/marketing_site/` | High-fidelity recreation of SecuraCore marketing site |

---

## Brand Context

- **Name:** SecuraCore
- **Tagline:** Technology Made Simple
- **Industry:** AV Systems · Security · Smart Home · Wi-Fi
- **Market:** Bend & Central Oregon (Bend, Sunriver, Sisters, Redmond, Powell Butte)
- **Website:** mysecuracore.com

**Mission** — To simplify technology for homes and businesses through thoughtful design, reliable systems, and exceptional service.

**Vision** — To become Central Oregon's most trusted technology partner for connected homes and businesses.

**Brand promise** — Technology that works the way it should.

**Core values:** Simplicity · Reliability · Trust · Craftsmanship · Service

**Personality** — Expert but approachable. Calm and confident. Modern but not trendy. Professional without being corporate.
_"The trusted technology expert who explains things simply."_

### Products & services (use these exact names)

- Whole Home Wi-Fi
- Security Cameras
- Home Security Systems (Alarm.com)
- Smart Home Automation
- Outdoor Entertainment Systems
- Home Theater
- Commercial AV
- Commercial Security
- Network Rack Builds / Clean Cable Management

### Sources

All materials supplied directly by the client in `uploads/`:
- `SecuraCore Brand Toolkit.pdf` — 14-page master guide
- `SecuraCore Brand Quick Reference.md` — cheat sheet
- Logo suite (AI + EPS + SVG + PNG in Home / Business / Custom / Mark variants)
- 13 product category icons, each supplied on white _and_ black plates
- 6 lifestyle renders of Central Oregon–style homes
- Fonts: Posterama (1927) + Posterama Text Bold, Open Sans family

No codebase or Figma was attached — the marketing-site UI kit in this repo is a **representative recreation** built from the brand materials. A live site exists at `mysecuracore.com`; if you have access, cross-reference it before shipping.

---

## Content Fundamentals

**Voice.** Confident, Clear, Local, Helpful, Professional. Always plain language — assume the reader knows nothing about the tech. Lead with the benefit ("Wi-Fi that works in every room"), not the feature ("Wi-Fi 6E mesh with 2.5GbE backhaul").

**Perspective.** "We" and "our team" — never "the company" or third-person. Address the reader as "you" / "your home" / "your business".

**Casing.**
- Display / headline type is **all-caps** (Posterama). Example: `TECHNOLOGY MADE SIMPLE`
- Product / category eyebrows are **all-caps, letter-spaced** (`SECURITY`, `SOLAR`, `LIGHTS`)
- Body copy is sentence case. Avoid Title Case in paragraphs.
- Service names use specific casing from the list above (e.g. "Whole Home Wi-Fi" — Wi-Fi always hyphenated, capital W and F).

**Tone by channel:**
| Channel | Tone |
|---|---|
| Website | Confident, educational |
| Social | Friendly, engaging |
| Sales | Professional, reassuring |
| Service email | Calm, helpful |
| Marketing | Clear, benefit-focused |

**Do.**
- Reference Bend & Central Oregon places, lifestyle, community ("From Sunriver to Sisters…")
- Educate first, sell second. Explain _why_ a problem happens before pitching the fix.
- Use concrete results: "no more dead zones," "one app, one remote, one team."
- Use the Hook → Problem → Solution → CTA structure on social.

**Don't.**
- No jargon in client-facing content. "Enterprise-grade networking infrastructure" → "Wi-Fi that works everywhere."
- No stock hype: avoid _industry-leading_, _cutting-edge_, _best-in-class_, _next-gen_, _revolutionize_, _game-changer_.
- No pushy sales copy. No "ACT NOW" exclamations.
- No emoji in marketing, proposals, or site UI. (Acceptable, sparingly, in social captions.)
- Don't be cold or overly technical — SecuraCore is the friendly expert, not the systems integrator.

**Vibe.** Quietly confident. Locally rooted. A craftsman's attention to detail. Premium but never luxury-coded.

**Example copy — good:**
> Slow Wi-Fi ruining movie night? Dead zones and weak signals are common in larger homes. We design whole-home Wi-Fi systems that eliminate dead spots, so streaming, video calls, and smart devices just work. Message us to schedule a network evaluation.

**Example copy — bad:**
> 🚀 Industry-leading, next-gen Wi-Fi 6E mesh infrastructure! Our cutting-edge solution revolutionizes home connectivity. ACT NOW for best pricing!!!

---

## Visual Foundations

**The mark.** Orange `Λ` (a roof peak) over a dark house silhouette inside an interrupted ring. The `Λ` doubles as the letter A in SECURACORE. Orange is always the roof + the A. Dark (ink `#1D252D`) is the house, ring and "CORE" wordmark.

**Colors.** Orange `#E36F1E` is the hero — CTAs, accents, active states, the orange `Λ`. Everything else is greyscale: ink `#1D252D`, true white, and a 7-step neutral ramp. No secondary brand hues — if you need semantic color, use one of `--color-success / warning / danger / info` sparingly. Surfaces are either pure white or the `#F2F2F2` "Accent Grey" section fill. Dark sections use pure black `#000000` — this is the plate color of the product-icon set.

**Type.**
- **Display:** Posterama — a geometric, slightly art-deco sans. All-caps, letter-spaced. Used for every headline, product label, button label, and eyebrow.
- **Body:** Open Sans — neutral, highly readable. Used for paragraphs, form labels, captions.
- **Hierarchy:** big display (Posterama Bold, tracked ~0.08em), medium subhead (Posterama Regular), body (Open Sans Regular, line-height 1.6).

**Backgrounds.** Three modes:
1. **Clean white** — default. Lots of white space, generous padding, single accent color.
2. **Photo-led** — full-bleed lifestyle photography (luxury Bend homes at dusk, mountain vistas, warm interiors). Dark overlay 30–50% + Posterama headline top-left or centered.
3. **Dark plate** — pure black (`#000000`) with the line-icon system. Used for product grids, section dividers, footers.

No gradients (except very subtle photo overlays). No repeating patterns or textures. No hand-drawn illustration.

**Imagery.** Warm, authentic, modern-lodge. Think Tetherow, Pronghorn, Sunriver — stone + timber + big glass, dusk and evening light, warm interior glow, snow-capped mountains in the background. Never generic corporate stock, never cheesy smart-home graphic composites.

**Animation.** Restrained. Fades (180–240ms, ease-out). Subtle lifts on cards (translateY −2px + shadow step-up). No bounces, parallax, or spring physics. Service-icon grids can pulse the orange accent on hover (200ms). Page transitions: simple fades, no slide-ins.

**Hover states.**
- Primary button (orange): background darkens to `--sc-orange-hover` (`#C85E14`).
- Text links: underline appears, color stays ink.
- Cards: shadow steps from `--shadow-sm` to `--shadow-md` + `translateY(-2px)`.
- Icons on dark plate: orange accent line strokes intensify (1px → 1.5px) or the whole icon lifts slightly.

**Press states.** Darker still (`--sc-orange-press`) and `translateY(0)`. No shrink transforms.

**Borders.** Thin — 1px — in `rgba(29,37,45,0.08)` subtle, `0.14` default, `0.28` strong. Dividers are never heavy. On dark surfaces: `rgba(255,255,255,0.12)`.

**Shadows.** Soft, low, never dramatic. `--shadow-sm/md/lg/xl` are all low-offset, 6–12% opacity. No inner shadows. No neumorphic effects.

**Corner radii.** Moderate. `--radius-md` (8px) is the default for buttons, inputs, small cards. `--radius-lg` (12px) for large cards and modals. `--radius-xl` (20px) for photo tiles and feature blocks. Pills (`--radius-pill`) for badges and the occasional CTA.

**Cards.** White fill, 1px subtle border OR `--shadow-sm` (not both), 12px radius, 24–32px internal padding. Interactive cards pick up `--shadow-md` on hover. Photo cards use `--radius-xl` and no border.

**Transparency & blur.** Used rarely. Photo overlays = solid ink at 30–50% alpha, no blur. Dropdown menus and nav: if overlaid on photography, 90–95% white with `backdrop-filter: blur(16px)` and subtle border.

**Layout rules.**
- Grid: 12-column, 1200px max content width.
- Section padding: 96–128px vertical on desktop, 64px mobile (`--space-9/10`).
- Within sections: 48–64px between blocks.
- Eyebrow → Headline → Body → CTA is the canonical rhythm.
- Nav is fixed top, white background, 1px bottom border when scrolled.

**Color vibe of imagery.** Warm — amber interior light, blue-hour skies, stone textures. Never cool/sterile. Never b&w. Light film grain acceptable but not required.

---

## Iconography

SecuraCore ships a **custom line-icon system** — 13 product-category icons purpose-drawn for the brand. These are **the** icons; prefer them for anything product-related. Each ships on both a white and a black plate.

**Style rules:**
- **Minimal, line-based, modern** — 1.5–2px stroke, rounded line caps.
- **Two-tone:** primary strokes in ink/white, **one orange accent element** per icon (the `|` stripe on the shield, the ring around the camera lens, the sun behind the house, etc.). The orange is always load-bearing — it identifies the "live" or "active" part.
- **Square format,** icon floats with generous padding. On dark plates, outer strokes are pure white.
- **No fills** other than the orange accent.

**The set** (in `assets/`):
- `icon-security.png` (shield)
- `icon-solar.png` (house with panels + sun)
- `icon-lights.png` (bulb + bolt)
- `icon-shades.png` (rolling shade)
- `icon-lock.png` (padlock)
- `icon-cameras.png` (camera)
- `icon-climate.png` (thermostat)
- `icon-life-safety.png` (flame)
- `icon-wifi.png` (signal waves)
- `icon-tv.png` (TV + remote)
- `icon-music.png` (note in circle)
- `icon-mobile.png` (phone)
- `icon-water.png` (droplet)
- `icon-dark-*.jpg` — same icons on pure-black plates (for dark sections)
- `icons-set-full.jpg` — all 13 shown together as a reference sheet

**Supplementary icons (UI chrome).** The product set doesn't cover UI needs like arrow, chevron, menu, search, close, play, check. For those, use **Lucide** (`lucide.dev`) at 1.5px stroke, rounded linecaps — matches the SecuraCore visual weight closely. Loaded via CDN in UI kits: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`. **This is a substitution** — the brand has no documented UI icon set. Flag for client confirmation.

**Emoji.** Never in marketing, site UI, proposals, or decks. Acceptable sparingly in social captions only.

**Unicode characters.** Occasionally — `·` as separator, `→` for CTAs, `—` em-dash. Never for decoration.

**Hand-rolled SVG.** Avoid. Use the supplied PNGs or copy the supplied SVG logo (`assets/logo-securacore-wordmark.svg`) — don't redraw them.

---

## How to use this system

1. Read `SKILL.md` for the short version.
2. Import `colors_and_type.css` — it defines all tokens and drops the fonts in.
3. Copy icons out of `assets/` rather than redrawing.
4. Follow **Content Fundamentals** for voice — it's as important as the visuals.
5. Reach for `ui_kits/marketing_site/` for component patterns (hero, service grid, CTA, footer).

---

## Font substitutions

All fonts shipped by the client are present in `fonts/`. Posterama is a licensed commercial typeface — if deploying to the public web, verify the SecuraCore web license covers the intended distribution. No Google-Fonts substitution was needed.

## Caveats

- Brand Toolkit uses `#000000` for "Dark / Accent Black"; Quick Reference uses `#1F1F1F`. Logo SVG itself uses `#1D252D`. This system standardizes on `#1D252D` (`--sc-ink`) for text/UI and reserves pure `#000000` (`--bg-black`) for the dark-plate icon treatment. Confirm with client.
- No live site access, no Figma, no codebase. The UI kit is a faithful recreation of the brand, not a pixel copy of the live mysecuracore.com.
- Lifestyle photography is AI-generated placeholder imagery supplied by the client, not real installs. Swap for actual install photography before shipping anything customer-facing.
