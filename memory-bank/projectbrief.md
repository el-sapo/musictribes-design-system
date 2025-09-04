# Project Brief: Tastemkrs Design Repo

## 1. Core Purpose

The primary goal of this repository is to centralize brand assets and design tokens in a simple, lightweight, and technology-agnostic manner. It is designed to be a single source of truth that can be easily consumed by a variety of applications, including web and native mobile apps, without requiring a complex build or packaging process.

## 2. Key Goals

- **Centralization:** Provide a single, canonical source for all design tokens (colors, typography, spacing, etc.).
- **Simplicity:** Avoid complex build steps, packaging, or publishing. Consumption should be as simple as cloning or copying files.
- **Portability:** Ensure tokens and assets can be used across different platforms (web, iOS, Android) with minimal friction.
- **Extensibility:** Allow for the optional addition of platform-specific components (e.g., React, SwiftUI) without bloating the core system.

## 3. Core Principles

- **Single Source of Truth:** All design decisions originate from the JSON files in the `tokens/` directory.
- **Thin Platform Adapters:** The translation from generic tokens to platform-specific code (e.g., CSS variables, TS objects) should be minimal and direct.
- **Zero-Build Consumption:** The repository should be usable as-is.
