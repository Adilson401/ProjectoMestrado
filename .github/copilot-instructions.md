## Purpose
Provide targeted guidance so AI coding agents can be immediately productive in this repository (static web project for a coursework/mini-project).

## Big picture
- **Type:** Single-page static website (HTML + embedded CSS + small vanilla JS). See [Projecto/Html/Index.html](Projecto/Html/Index.html#L1).
- **Structure:** Top-level `Projecto/` contains site assets. CSS appears under `Projecto/Css/` and `Projecto/Html/Css/` (the project mixes CSS folders). See [Projecto](Projecto#L1).
- **No build system:** There is no `package.json`, bundler, or test harness. Treat the app as static files served by a simple HTTP server or VS Code Live Server.

## Key files & directories
- README: [README.md](README.md#L1) — project title and course context.
- Main page: [Projecto/Html/Index.html](Projecto/Html/Index.html#L1) — contains the full UI, inline styles, and the small JS at the bottom. Use this file to understand layout, components, and interactions.
- Assets: check `Projecto/Html/images/` (referenced in CSS variables) and `Projecto/Css/` for any standalone CSS files.

## Project-specific patterns & conventions
- Inline-first styling: `Index.html` uses large inline `<style>` blocks rather than external CSS. When editing visual patterns prefer editing that `<style>` block unless you add a new external stylesheet and update references.
- Responsive-by-CSS: components (hero, grid) use CSS grid + media queries; small-screen carousel behavior is implemented via CSS + optional `autoplay` class. See the `.grid` and media query rules in `Index.html`.
- Minimal JS: only small UI helpers (menu toggle, header shadow). Avoid introducing heavy frameworks — keep changes in vanilla JS unless a clear migration is requested.
- Directory/name quirks: folder names use mixed casing and a typo: `JavaScrip/` (no final 't') and `Css/` — preserve existing paths and link styles exactly when editing or referencing files.

## How to run / test locally
- No build step. For quick local preview, run a static server from the repo root. Example (works on Windows):

```powershell
python -m http.server 8000
# then open http://localhost:8000/Projecto/Html/Index.html
```

Or use the VS Code Live Server extension and open `Projecto/Html/Index.html`.

## What to change and where (examples)
- To update header/navigation copy/text: edit the `<header>` block in [Projecto/Html/Index.html](Projecto/Html/Index.html#L1).
- To tweak visual tokens (colors, spacing): edit `:root{ ... }` in the inline `<style>` near the top of `Index.html`.
- To add a new product card: duplicate one of the `<article class="card">` blocks inside the `.grid` section.

## Integration & external dependencies
- None detected: no external package manager files. If you add dependencies, include a `package.json` and document install/run commands in `README.md`.

## PR guidance for AI edits
- Keep changes minimal and focused. For UI tweaks prefer modifying `Projecto/Html/Index.html` inline blocks rather than scattering small CSS files.
- Preserve existing file/path casing and spellings exactly (e.g., `JavaScrip/`) to avoid broken references.
- When adding scripts, append them just before `</body>` and avoid global polyfills — prefer small, self-contained helpers.

## When you can't find something
- If a build/test script or CI config is missing, open an issue instead of inventing a pipeline. Note it in PR description.

---
If any part of this summary is unclear or you want me to expand areas (tests, CI, or converting to a simple build flow), tell me which section to detail next.
