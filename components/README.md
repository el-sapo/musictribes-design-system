# Components (Optional)

This folder is for per-stack components when you choose to add them.

Suggested layout
- `web-shadcn/` – shadcn-based React components themed by DS tokens
- `web-vanilla/` – simple HTML/CSS examples using DS variables
- `react-native/` – RN components (if you want shared primitives)

Start small: wrappers around shadcn (e.g., `<Button variant="primary" />`) to stabilize your API across apps while reusing shadcn internals.
