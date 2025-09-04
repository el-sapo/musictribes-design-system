# Tastemkrs Design Repo (Template)

Purpose: centralize brand assets and design tokens in a simple, lightweight, and technology-agnostic manner. It is designed to be a single source of truth that can be easily consumed by a variety of applications, including web and native mobile apps, without requiring a complex build or packaging process.

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
- **Single source of truth tokens:** All design decisions originate from the JSON files in the `tokens/` directory.
- **Thin platform adapters:** The translation from generic tokens to platform-specific code should be minimal and direct.
- **Zero-build consumption:** The repository should be usable as-is.
- **Automated synchronization:** A script ensures platform-specific implementations stay in sync with the source tokens.

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Edit JSON under `tokens/`
4. Run `npm run sync` to update platform-specific implementations
5. Drop logos/icons into `assets/`
6. Follow `USAGE.md` to wire up in apps
