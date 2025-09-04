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
1. Edit the JSON files in the `tokens/` directory
2. Run `npm run sync` to automatically update platform-specific implementations
3. Commit all changes

> 💡 The GitHub Action will automatically run the sync script if you forget, and create a PR only if there are changes to the platform files. This ensures consistency across all platforms without manual intervention.
