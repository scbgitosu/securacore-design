# SecuraCore Marketing Site — UI Kit

Hi-fi recreation of SecuraCore's marketing website. The live site is at `mysecuracore.com` (no codebase or Figma was provided — this is a faithful brand-aligned recreation, not a pixel copy).

## Structure

- `index.html` — full single-page marketing site (Home view). Loads all components.
- `Nav.jsx` — fixed top nav, logo + links + CTA
- `Hero.jsx` — full-bleed photo hero with Posterama headline + CTAs
- `ServiceGrid.jsx` — dark-plate grid of the 13 product-category icons
- `FeatureRow.jsx` — alternating image/text feature row
- `StatsStrip.jsx` — quiet stats band on Accent Grey
- `TestimonialCard.jsx` — customer quote with attribution
- `CtaBanner.jsx` — orange-accent CTA section
- `Footer.jsx` — dark footer with contact info, services list, social

## Tokens
Imports `../../colors_and_type.css` — all styling routes through the shared design tokens.

## Icons
Product icons are pulled from `../../assets/icon-dark-*.jpg` (dark plates) and `../../assets/icon-*.png` (light). For UI chrome (chevron, arrow, menu) uses Lucide via CDN — flagged substitution.
