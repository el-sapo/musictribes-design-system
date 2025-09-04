# System Patterns

## 1. Architecture Overview

The repository follows a layered architecture with clear separation of concerns:

```
┌───────────────────────┐
│   Platform Adapters   │
├───────────────────────┤
│   Design Tokens (JSON)│
├───────────────────────┤
│   Brand Assets        │
└───────────────────────┘
```

- **Brand Assets:** The foundation layer containing raw visual assets like logos, icons, and fonts.
- **Design Tokens:** The middle layer that defines the abstract design system (colors, typography, spacing).
- **Platform Adapters:** The top layer that translates the abstract tokens into platform-specific implementations.

## 2. Key Technical Decisions

- **JSON for Tokens:** Using JSON as the source format for design tokens ensures technology-agnostic storage and easy parsing across any platform.
- **Flat File Structure:** The repository avoids deep nesting to make file discovery and integration straightforward.
- **No Build Process:** By eliminating the need for a build step, the repository remains lightweight and easy to consume in any project.
- **Git-Based Consumption:** Using Git submodules or subtrees for integration maintains version control while keeping the implementation simple.

## 3. Design Patterns

- **Single Source of Truth:** All design decisions originate from the JSON files in the `tokens/` directory. This ensures consistency across platforms.
- **Direct Translation:** Platform-specific implementations should be direct translations of the source tokens with minimal additional logic.
- **Modular Asset Organization:** Assets are organized by type (fonts, icons, logos) for easy discovery and management.

## 4. Component Relationships

- **Tokens to Adapters:** The JSON token files directly inform the content of the platform-specific adapters in the `platforms/` directory.
- **Adapters to Applications:** The platform-specific implementations are designed to be consumed directly by applications targeting those platforms.
- **Assets to Everything:** Brand assets are used across all layers, from documentation to implementation, ensuring visual consistency.

## 5. Critical Implementation Paths

1. **Updating Design Tokens:**
   - Modify JSON files in `tokens/`
   - Update platform-specific implementations in `platforms/`
   - No build step required

2. **Adding New Assets:**
   - Place raw assets in appropriate subdirectory under `assets/`
   - Document usage in `USAGE.md`

3. **Consuming in Applications:**
   - Choose appropriate platform-specific implementation
   - Integrate via Git submodule, subtree, or direct copy
   - Reference brand assets as needed

## 6. Evolution Path

The repository is designed to evolve while maintaining its core principles:

- **Adding New Platforms:** New platform adapters can be added to the `platforms/` directory without affecting existing implementations.
- **Enhancing Documentation:** Usage guides can be expanded in `USAGE.md` as new integration patterns emerge.
- **Improving Tooling:** While the core avoids build steps, optional tooling can be added to assist with token management without becoming a requirement.
