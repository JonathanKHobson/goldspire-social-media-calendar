---
project: goldspire-social-media-calendar
type: visual-qa-anchor-map
status: passed_with_notes
created: 2026-06-19
---

# Visual QA Anchor Map

## Rendered Evidence

- Desktop calendar: `qa/screenshots/calendar-desktop.png`
- Mobile calendar: `qa/screenshots/calendar-mobile.png`
- Desktop detail drawer: `qa/screenshots/detail-desktop.png`
- Templates view: `qa/screenshots/templates-desktop.png`
- Serverless file render: `qa/screenshots/file-url-calendar-desktop.png`

## Anchors

| ID | Source | Region | Observed | Action |
|---|---|---|---|---|
| A1 | `calendar-desktop.png`, 1440x1000 | Top header and controls | Title, date range, Markdown/Strategy/Events buttons, tabs, filters, and search render with clear hierarchy. | Passed. |
| A2 | `calendar-desktop.png`, 1440x1000 | Calendar grid, first four rows | Scheduled posts appear on the correct dates with time, title, pillar, platforms, and status badge. | Passed. |
| A3 | `detail-desktop.png`, 1440x1000 | Right detail drawer | July 7 post opens from URL param, poster preview loads, link is visible, status control appears, local notes field appears, and platform variations are readable. | Passed after correcting preview server path. |
| A4 | `detail-desktop.png`, 1440x1000 | Platform variation cards | Instagram and Facebook copy fields, character counts, copy buttons, package buttons, and platform-open buttons are visible and not overlapping. | Passed. |
| A5 | `calendar-mobile.png`, 390x1200 | Mobile header and controls | Heading wraps cleanly, header buttons stack, tabs remain tappable, filters are reachable, and no leading blank calendar cells dominate the first screen. | Passed after mobile CSS tightening. |
| A6 | `calendar-mobile.png`, 390x1200 | Mobile post list | First scheduled posts are visible with date, time, title, platforms, and status badge. | Passed. |
| A7 | `templates-desktop.png`, 1440x1000 | Templates view | Reusable copy templates render as editable-looking read-only fields with copy buttons and clear labels. | Passed. |
| A8 | `file-url-calendar-desktop.png`, 1440x1000 | File URL desktop render | Calendar renders from `file://` with app JS, CSS, and calendar data active. No localhost server is required. | Passed. |

## Notes

- Clipboard behavior was not directly verified in headless Chrome. The app uses `navigator.clipboard.writeText` with a textarea fallback.
- Platform launch buttons open the relevant social platform or compose intent where feasible. They do not authenticate, schedule, upload, or post.
- Ad plan is advisory only. No paid campaign was launched.
- Render QA used temporary local HTTP servers on ports 8876-8880. All temporary servers and headless Chrome profiles were removed after capture.
- A later serverless pass verified direct local-file opening and added `index.html` plus `Open Goldspire Social Calendar.command`. Do not use localhost for normal opening.
