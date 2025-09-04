# Fonts

Place licensed, redistributable font files here. Keep formats modern-first (WOFF2 for web), and include README notes about license terms and usage.

Suggested structure
- `Gotham/` – family folder containing WOFF2/OTF/TTF
- `Exo2/`
- `NanumPenScript/`

Recommendations
- Prefer WOFF2 for web; keep OTF/TTF as source or for native.
- Use clear filenames (e.g., `Gotham-Bold.woff2`, `Exo2-SemiBold.woff2`).
- Verify license allows embedding/redistribution; do not commit restricted fonts.

Web
- Import `platforms/web/fonts.css` in the app and ensure paths point to these files.
- Consider subsetting (pyftsubset) and `font-display: swap`.

React Native
- Copy TTF/OTF to the app’s `assets/fonts`.
- Link (RN CLI): add `react-native.config.js`, then `npx react-native-asset`.
- Expo: add to `expo.assetBundlePatterns` and load via `useFonts`.
