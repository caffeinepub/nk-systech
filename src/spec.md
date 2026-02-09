# Specification

## Summary
**Goal:** Update the site’s NK SYSTECH logo to use the newly uploaded artwork while keeping the existing logo file path used throughout the UI.

**Planned changes:**
- Replace the existing logo file at `frontend/public/assets/generated/nk-systech-logo.dim_512x512.png` with an updated image derived from `nk.png` (resize/crop as needed to fit 512×512).
- Ensure the header and footer continue to load the logo from `/assets/generated/nk-systech-logo.dim_512x512.png` with no changes to any image `src` paths.
- Leave all other site images (e.g., hero/banner, service icons) unchanged.

**User-visible outcome:** The site header and footer display the new NK logo everywhere the existing logo asset path is used, without any other visual changes.
