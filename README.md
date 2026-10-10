---
project: goldspire-social-media-calendar
type: local-project-readme
status: published_mvp
created: 2026-06-19
---

# Goldspire Social Media Calendar

Static manual-posting calendar for promoting `Peril to Profit: The Goldspire Messengers` from June 19 through July 31, 2026.

This is a historical campaign calendar. Review dates, links, and event details against current plans before reusing any post. The working post data is in `app/src/data.js`; `content/` contains readable planning and copy references.

Public app URL:

```text
https://jonathankhobson.github.io/goldspire-social-media-calendar/
```

Open the calendar without a server:

- Double-click `Open Goldspire Social Calendar.command`, or
- Open `index.html`, which redirects to `app/index.html`.

The app is static HTML/CSS/JS and is designed to run from the local filesystem. It does not connect to social accounts, schedule posts, upload assets, or spend ad budget. It gives you the planned post, recommended asset, platform-specific text, hashtags, links, copy buttons, platform launch buttons, and local status notes.

## Source Links

- Public calendar app: https://jonathankhobson.github.io/goldspire-social-media-calendar/
- July 7 event page: https://jonathankhobson.github.io/gm/events/goldspire/
- Evergreen events index: https://jonathankhobson.github.io/gm/events/

## Primary Assets

The app uses short copies in `assets/selected/`. The production originals remain in `../market-material-packet/output/final/`.

## Manual Posting Rule

For every post:

1. Open the post in the local calendar.
2. Confirm the date wording still matches reality.
3. Copy the platform-specific caption.
4. Attach the recommended local asset.
5. Paste the caption manually into the platform.
6. Mark the local post status as `posted`, `skipped`, or `needs_edit`.

## Scope Guard

This MVP is intentionally built for manual posting and fast revision. Do not add account automation, API scheduling, paid spend automation, or new generated assets inside this lane unless that becomes the next explicit deliverable.

## Site publication

This repository remains the Goldspire Calendar source. The native GameMasterKyle Site hosts a pinned projection under `/goldspire-calendar/`; GitHub Pages remains a compatibility address and keeps the original browser-state export path on the shared Pages origin.

[Open the current public experience](https://gamemaster-kyle.jkylehobson.chatgpt.site/goldspire-calendar/).
