# Technical Context

## 1. Core Technology

- **Tokens:** Design tokens are stored in `JSON` format (`.json`). This is the technology-agnostic source of truth.

## 2. Platform-Specific Implementations

- **Web:**
    - **CSS:** Tokens are translated into native CSS Custom Properties (variables) in `platforms/web/tokens.css`.
    - **Tailwind CSS:** A Tailwind preset (`tailwind.preset.cjs`) is provided for seamless integration with Tailwind-based projects.
    - **Fonts:** Web fonts are managed via a standard CSS file (`platforms/web/fonts.css`).
- **React Native:**
    - **JavaScript/TypeScript:** Tokens are exported as a TypeScript module (`platforms/react-native/tokens.ts`).

## 3. Asset Management

- **Icons & Logos:** Raw assets like `.svg` and `.png` files are stored directly in the `assets/` directory.
- **Fonts:** Font files (`.otf`, `.ttf`) are stored in `assets/fonts/`.

## 4. Consumption Strategy

- **Method:** The repository is intended to be consumed directly via Git (submodule, subtree) or by manually copying the files.
- **No Packaging:** The project explicitly avoids package managers like npm or CocoaPods to maintain simplicity.
