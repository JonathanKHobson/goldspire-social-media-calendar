---
project: goldspire-social-media-calendar
type: visual-qa-anchor-map
status: passed
created: 2026-06-19
target: https://jonathankhobson.github.io/goldspire-social-media-calendar/
---

# GitHub Pages Publish Visual QA

Live URL checked: https://jonathankhobson.github.io/goldspire-social-media-calendar/

## Anchors

| ID | Source | Region / selector | Observation | Action |
|---|---|---|---|---|
| P1 | `qa/screenshots/github-pages-desktop.png`, 1440px desktop | Header and calendar grid | Public Pages root redirects to `/app/index.html`; header, tabs, filters, and calendar cards render from GitHub Pages. | Passed. |
| P2 | `qa/screenshots/github-pages-mobile.png`, 390px mobile | Full page mobile stack | Header actions, filters, and calendar cards stack into a narrow single-column layout without a local server. | Passed. |
| P3 | `qa/screenshots/github-pages-detail-newcomer.png`, 1440px desktop | Right detail panel | Detail panel opens on the live page and displays the corrected AI-generated newcomer asset from `assets/selected/`. | Passed. |
| P4 | `qa/screenshots/github-pages-detail-newcomer.png`, detail panel link area | Event link and copy controls | Detail panel shows the evergreen events URL and copy/open controls. | Passed. |

## Notes

- This QA used the public `github.io` URL, not `localhost`.
- The browser automation session was closed after screenshots.
- Screenshot text is readable enough for manual posting use; no publish-blocking visual defects observed.
