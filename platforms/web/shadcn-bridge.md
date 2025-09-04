# shadcn Bridge

Use DS tokens with shadcn/ui without introducing a build step.

## 1) Include tokens.css once
```
// e.g., in app root or layout
import 'design-repo/platforms/web/tokens.css';
```

## 2) Use Tailwind preset
In your app `tailwind.config.{js,ts}`:
```
module.exports = {
  presets: [require('design-repo/platforms/web/tailwind.preset.cjs')],
  content: [
    './src/**/*.{ts,tsx}',
    // include shadcn components if externalized
  ]
};
```

This maps Tailwind colors and radii to DS variables, which shadcn uses internally.

## 3) Generate shadcn components
```
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input
```

Generated components inherit brand via Tailwind colors/vars. No extra changes needed.

## Optional: Hex vs HSL
shadcn defaults to `hsl(var(--...))`. Our preset uses direct `var(--...)` to accept hex. If your shadcn config forces HSL, either:
- switch to this preset’s color mapping, or
- define HSL triplet variables yourself.
