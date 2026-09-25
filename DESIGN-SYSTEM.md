# Design system overview

An early-stage, design-forward editorial landing-page system. Its warm palette, serif display hierarchy and repeated controls support a consistent small website without adding unused form patterns.

## Design source

[16th Hole — Figma design and UI Kit](https://www.figma.com/design/3GJcd4U4SUlmF8x4zNYik1/?node-id=388-21647)

Reference layouts: Desktop 1440 px and Mobile 390 px. A 360 px CSS guardrail adapts the narrowest phone heading sizes.

## Component correspondence

| Figma UI Kit | Code | States and reuse |
| --- | --- | --- |
| Button / CTA | ActionLink | Default, hover, pressed, keyboard focus; Hero and Membership |
| Navigation / Link | NavLink | Header/footer context, hover and focus; repeated in both navigation groups |
| Navigation / Header | SiteHeader | One responsive composition matching Desktop/Mobile variants |
| Navigation / People link | PeopleLink | Selected/unselected and hover/focus; four gallery controls |
| Content / Ritual card | RitualCard | Pending, active, complete and focus; three stages |
| Brand / Wordmark | wordmark.svg | Outlined Figma artwork, used in the header |
| Brand / Favicon | favicon.svg | Project mark, exported without a font dependency |

The menu glyph is decorative, not an implemented menu. "Apply" navigates to the People section; it does not submit an application.

## Foundations

- `src/app/tokens.css` contains named brand colors, control geometry and typography roles based on the Figma styles.
- Display styles use Newsreader variable at weight 450, including true italic; Inter Tight is used for UI and body text. The Figma `display/font-weight` variable maps to `--font-weight-display`. The browser fixes the font's default optical size at 18 for stable responsive metrics. Figma's hosted family and the current upstream font have small metric differences; responsive line composition is reviewed at 390 px and 360 px rather than advertised as pixel-identical.
- `src/app/globals.css` consumes those variables and contains responsive composition and motion rules.
- One authored light brand theme is supplied. Tokens can be overridden at the page scope; no alternative theme has been designed or validated.
- Font-size and line-height values match the rounded reference styles. Relative tracking, responsive dimensions and vector coordinates may legitimately produce fractional computed pixels.
- UI copy and code naming are English.

## Pairing scope

Pairing is partial: the primary desktop/mobile layouts and core controls are mapped. Scroll-reveal timing, randomized photo entry, the four-image People rotation and the later Ritual background/headline states are implemented in code but not fully described by Figma motion tracks. The portfolio notice is runtime-only.

The same CTA master is used in Hero and Membership at both design breakpoints. In code both locations render ActionLink. This demonstrates repeated-component use across landing sections, not multiple URL routes.

## Validation

`npm test` runs lint, TypeScript checking, a production build and rendered-output checks. Validate desktop, 390 px and 360 px layouts, keyboard focus, image clipping, local anchors and reduced-motion behavior when changing tokens.

## Asset readiness

See [ASSET-NOTICE.md](ASSET-NOTICE.md). A successful build is not evidence of permission to distribute third-party assets.
