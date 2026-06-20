---
project: goldspire-social-media-calendar
type: project-map
status: active
created: 2026-06-19
---

# Project Map

## Folder Structure

```text
social-media-calendar/
  .gitignore
  .nojekyll
  README.md
  index.html
  Open Goldspire Social Calendar.command
  app/
    index.html
    src/
      data.js
      main.js
      styles.css
  assets/
    selected/
      simple-daggerheart-square.png
      simple-daggerheart-story.png
      simple-try-wide.png
      newcomer-live-fantasy-square.png
      newcomer-tabletop-square.png
      evergreen-find-table-square.png
      evergreen-event-options-wide.png
      evergreen-current-dates-poster.png
      july7-ai-square.png
      july7-ai-wide.png
      pc-*.png
  content/
    calendar-june19-july31.md
    templates.md
  docs/
    project-map.md
    strategy-brief.md
    source-and-platform-notes.md
    low-budget-ad-plan.md
  qa/
    visual-anchor-map.md
    screenshots/
```

## Canonical Data

`app/src/data.js` is the app's working source for scheduled posts, templates, platform variants, and ad ideas.

The Markdown files in `content/` are Obsidian-readable summaries and reusable copy banks.

## Editing Workflow

- Edit post plans in `app/src/data.js`.
- Keep reusable copy in `content/templates.md`.
- Keep strategy decisions in `docs/strategy-brief.md`.
- Add final QA notes to `qa/visual-anchor-map.md`.

## Local Preview

Open `index.html` or double-click `Open Goldspire Social Calendar.command`.

The app is intentionally static and works from `file://` without a local server.

## Non-Goals

- No automated social posting.
- No social account authentication.
- No ad spend or boost launch.
- No new image generation in this MVP.
- No date-specific claims beyond July 7 unless dates are confirmed.
