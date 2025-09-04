# React Native Fonts

Two common setups: React Native CLI and Expo.

## RN CLI (react-native)
1. Place `.ttf`/`.otf` files under your app: `app-root/assets/fonts`.
2. Create `react-native.config.js`:
```
module.exports = {
  assets: ['./assets/fonts']
};
```
3. Link assets:
```
npx react-native-asset
```
4. Use in styles:
```
const styles = StyleSheet.create({
  h1: { fontFamily: 'Gotham', fontWeight: '700' },
  body: { fontFamily: 'Gotham', fontWeight: '400' }
});
```

## Expo
1. Put fonts in `assets/fonts`.
2. Load with `expo-font`:
```
import { useFonts } from 'expo-font';

const [loaded] = useFonts({
  Gotham: require('../../assets/fonts/Gotham/Gotham-Book.ttf'),
  'Gotham-Bold': require('../../assets/fonts/Gotham/Gotham-Bold.ttf')
});
```
3. Reference `fontFamily: 'Gotham'` or `'Gotham-Bold'` in styles.

Tips
- Keep names consistent across platforms.
- Some fonts ignore `fontWeight` and require distinct `fontFamily` names per weight.
- Verify license for embedding fonts in mobile apps.
