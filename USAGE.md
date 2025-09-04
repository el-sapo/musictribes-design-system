# Using This Design Repo in Apps

Choose a simple consumption strategy:

- Copy files you need (tokens + platform bridge) into the app; or
- Add this repo as a Git submodule/subtree; or
- Add a Git dependency and import by path (if using a monorepo).

## Web + shadcn
1) Include tokens CSS once
```
import 'path-to-design-repo/platforms/web/tokens.css';
```

2) Use Tailwind preset
```
// tailwind.config.js
module.exports = {
  presets: [require('path-to-design-repo/platforms/web/tailwind.preset.cjs')],
  content: ['./src/**/*.{ts,tsx}']
};
```

3) Generate shadcn components
```
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input
```

Components pick up brand via Tailwind + CSS vars.

## Web (vanilla)
- Use the CSS variables from `platforms/web/tokens.css` directly in your styles.

## React Native
```
import { theme } from 'path-to-design-repo/platforms/react-native/tokens';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.bg,
    padding: theme.spacing[4],
  }
});
```

## Assets
- Use `assets/logos` and `assets/icons` as your source of truth.
- Keep raw SVG whenever possible; export PNGs only when necessary.

## Updating Tokens
- Change JSON under `tokens/`
- Reflect updates in `platforms/web/tokens.css` and `platforms/react-native/tokens.ts`
- Commit as a single change to keep history clear
