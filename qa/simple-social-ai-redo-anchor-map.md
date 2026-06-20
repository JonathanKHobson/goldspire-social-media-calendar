---
project: goldspire-social-media-calendar
type: visual-qa-anchor-map
status: passed_with_notes
created: 2026-06-19
---

# Simple Social AI Redo QA

## Evidence

- Prompt log: `docs/simple-social-ai-replacement-prompts-2026-06-19.md`
- AI bases: `../market-material-packet/output/source-art/simple-social-ai-redo/`
- Final replacements: `../market-material-packet/output/final/ai-generated-simple-social-redo-qr-variants/`
- Calendar selected assets: `assets/selected/`
- Final contact sheet: `../market-material-packet/output/qa/simple-social-ai-redo-final-contact-sheet.png`
- Manifest: `../market-material-packet/output/qa/simple-social-ai-redo-manifest.json`
- App detail screenshot: `qa/screenshots/file-url-ai-redo-newcomer-detail.png`

## Anchor Map

| ID | Source | Region | Observed | Action |
|---|---|---|---|---|
| R1 | `simple-social-ai-redo-final-contact-sheet.png` | top-left | `simple-daggerheart-square` is full illustrated fantasy poster art with party, title, beginner-friendly copy, and events QR. | Passed after regenerating to fix `DAGGERHEART` spelling. |
| R2 | `simple-social-ai-redo-final-contact-sheet.png` | top-center | `simple-daggerheart-story` is a vertical illustrated poster with party art, premade-heroes line, and events QR. | Passed. |
| R3 | `simple-social-ai-redo-final-contact-sheet.png` | top-right | `simple-try-wide` is a wide illustrated poster with party art, `TRY DAGGERHEART`, and events QR. | Passed. |
| R4 | `simple-social-ai-redo-final-contact-sheet.png` | bottom-left | `newcomer-live-fantasy-square` is a full illustrated table-to-fantasy scene, not a flat layout/mockup. | Passed. |
| R5 | `simple-social-ai-redo-final-contact-sheet.png` | bottom-center | `newcomer-tabletop-square` is a full illustrated beginner-friendly poster with hero-card/table scene and events QR. | Passed. |
| R6 | `file-url-ai-redo-newcomer-detail.png` | detail drawer asset preview | Calendar app loads the replaced `newcomer-tabletop-square.png` from the selected-assets folder via `file://`. | Passed. |
| R7 | `simple-social-ai-redo-manifest.json` | render metadata | All five replacements use the general events QR source `gm-events-index-qr.png`, target `https://jonathankhobson.github.io/gm/events/`. | Passed with note: no local command-line QR decoder was available in this environment. |

## Design Taste Review

- Surface/register: social campaign assets, expressive/high-variance fantasy marketing.
- The rejected assets looked like assembled template cards. The replacements now use art-forward illustrated posters with image content, character/world cues, and clearer campaign identity.
- Text is integrated into the AI-generated poster art; the only post-generation overlay is the QR code.
- PC spotlight assets remain unchanged because they were approved as consistent with the character set.

## Communication Review

- Daggerheart-curious assets lead with `DAGGERHEART ONE-SHOT`, `TRY DAGGERHEART`, and beginner-friendly framing.
- Newcomer assets lead with reassurance: `NO EXPERIENCE NEEDED`, `RULES TAUGHT LIVE`, `START HERE`, `NO PREP`, and `PREMADE HEROES`.
- Recurring-event CTA points to the general events page, not the July 7-only Goldspire detail page.
- No official endorsement or logo claim is present.

