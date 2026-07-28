# spotsafakealluvi.com — Phase 1

Static, presentation-only build of the Alluvi authenticity/packaging guide. Vite + React 18 +
TypeScript, plain hand-written CSS (custom properties, no Tailwind/CSS-in-JS).

## Commands

```
npm install
npm run dev       # local dev server
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # preview the production build locally
```

## Project layout

```
src/
  main.tsx, App.tsx
  site.ts                  // shared constants (domains, email) — see note below
  components/               // WarningBar, Nav, Hero, SerialCheck, Showcase,
                             // FeatureCard, VerifyCTA, Footer, Connector
  styles/
    tokens.css               // design tokens (colors, radii, font stack)
    global.css                // resets, layout primitives, buttons, reduced-motion
    components/*.css          // one stylesheet per component
  assets/                    // see "Assets" below
legacy-static/               // the original hand-written HTML/CSS/JS site, kept for reference
```

## Assets

The spec calls for two raster references — `packaging-reference.png` (2048×2048) and
`inspection-seal.png` (204×286) — optimized at build time into `.webp` + a 1024px variant and
served through `<picture>`.

**Those PNGs were never supplied.** The only available stand-ins were the hand-drawn SVG
recreations from the previous static build (`legacy-static/assets/product-box.svg` and
`hologram-seal.svg`), copied into `src/assets/packaging-reference.svg` and
`src/assets/inspection-seal.svg`. Since they're vector, not raster:

- They're referenced directly as `<img src>` rather than through a `<picture>`/webp pipeline —
  there's no photographic detail to lose to a naive resize, and a webp re-encode of an SVG adds
  a build step for no visual benefit.
- `vite-plugin-image-optimizer` is still wired up in `vite.config.ts` (webp/png/svgo) so that
  dropping the real PNGs into `src/assets/` and swapping the two `import` paths in
  `Hero.tsx` / `Showcase.tsx` is close to a one-line change per file.
- When the real photography is available, replace the two SVG imports, add a `<picture>` wrapper
  with `.webp` + PNG fallback sources per the spec, and remove the now-unused SVGs.

`hero-bg.svg` is the real asset from the spec and is used as-is.

## Known discrepancy — do not silently fix

The "Branded Web URLs" card (`FeatureCard` #02 in `Showcase.tsx`) reads `www.alluvi.org`, while
every other reference on the page (`WarningBar`, `Nav`, `Hero`, `Footer`) points to `alluvi.bz`.
This is preserved from the source content, not a bug. The string lives in one place —
`SITE.brandedUrlInPackaging` in `src/site.ts` — so it can be corrected (or confirmed) in a single
spot once the discrepancy is resolved upstream.

## Seams for Phase 2

- **`SerialCheck.tsx`**: `handleSubmit` is a no-op with a `// PHASE 2: verification` marker.
  All form state (the seal value) is local to this component — wire the real verification call
  in `handleSubmit` without needing to touch any parent component.
- **`src/site.ts`**: single source of truth for the official domain, shop/track/wholesale URLs,
  the flagged packaging URL, and the contact email. Any backend/API base URL for Phase 2 should
  be added here rather than inlined in components.

## Motion & accessibility

- Feature cards float on a staggered 6s loop, paused on hover, and every animation/transition is
  disabled under `prefers-reduced-motion: reduce` (see `global.css` and `Connector.css`).
- The hand-drawn connector arrow only renders at ≥1100px and fades in once source/target DOM
  rects are measured (recomputed on resize and `document.fonts.ready`).
- Landmarks: `header`, `main`, `section[aria-label]`, `footer`. All interactive elements keep
  visible focus rings (`:focus-visible`) and meet the 44px minimum touch target. The seal-number
  label is bound to its input via `htmlFor`/`id`. Decorative layers (`ambient-glow`, corner
  brackets, connector arrow) are `aria-hidden`.
