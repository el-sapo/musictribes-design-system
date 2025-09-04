# Tastemkrs Design Repo (Template)

Purpose: centralize brand assets and design tokens in a simple, tech-agnostic repo you can reuse across web and native apps. Keep code-light; add per-stack components in their own folders when needed.

## Structure
- `tokens/`: source of truth for brand tokens (JSON)
- `assets/`: logos, icons, illustrations (raw SVG/PNG)
- `platforms/`
  - `web/`: CSS variables and Tailwind preset for web; shadcn bridge
  - `react-native/`: tokens exported as JS objects
- `components/`: optional, per-stack components (e.g., web-shadcn) when you decide to add them
- `USAGE.md`: quick integration guides per platform

This repo intentionally avoids packaging/publishing. Consume via git (submodule, subtree, or copy) and keep adoption simple.

## Principles
- Single source of truth tokens
- Platform adapters stay thin (CSS vars, TS objects)
- No build steps required to consume tokens
- Components live under `components/<stack>` and are optional

## Getting Started
- Edit JSON under `tokens/`
- If colors change, reflect them in `platforms/web/tokens.css` and `platforms/react-native/tokens.ts`
- Drop logos/icons into `assets/`
- Follow `USAGE.md` to wire up in apps
