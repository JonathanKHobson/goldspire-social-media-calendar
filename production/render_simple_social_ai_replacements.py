#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
PACKET_ROOT = ROOT.parent
SOURCE_DIR = PACKET_ROOT / "market-material-packet/output/source-art/simple-social-ai-redo"
FINAL_DIR = PACKET_ROOT / "market-material-packet/output/final/ai-generated-simple-social-redo-qr-variants"
SELECTED_DIR = ROOT / "assets/selected"
QA_DIR = PACKET_ROOT / "market-material-packet/output/qa"
QR_PATH = PACKET_ROOT / "market-material-packet/output/qr/gm-events-index-qr.png"
QR_URL = "https://jonathankhobson.github.io/gm/events/"


ASSETS = [
    {
        "slug": "simple-daggerheart-square",
        "source": "simple-daggerheart-square-ai-base.png",
        "target": (1080, 1080),
        "qr": (805, 805, 1035, 1035),
    },
    {
        "slug": "simple-daggerheart-story",
        "source": "simple-daggerheart-story-ai-base.png",
        "target": (1080, 1920),
        "qr": (390, 1584, 690, 1884),
    },
    {
        "slug": "simple-try-wide",
        "source": "simple-try-wide-ai-base.png",
        "target": (1200, 630),
        "qr": (965, 390, 1165, 590),
    },
    {
        "slug": "newcomer-live-fantasy-square",
        "source": "newcomer-live-fantasy-square-ai-base.png",
        "target": (1080, 1080),
        "qr": (812, 810, 1038, 1036),
    },
    {
        "slug": "newcomer-tabletop-square",
        "source": "newcomer-tabletop-square-ai-base.png",
        "target": (1080, 1080),
        "qr": (820, 842, 1038, 1060),
    },
]


def resize_cover(image: Image.Image, target: tuple[int, int]) -> Image.Image:
    tw, th = target
    iw, ih = image.size
    scale = max(tw / iw, th / ih)
    nw, nh = round(iw * scale), round(ih * scale)
    resized = image.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return resized.crop((left, top, left + tw, top + th))


def paste_qr(image: Image.Image, qr_image: Image.Image, box: tuple[int, int, int, int]) -> Image.Image:
    x1, y1, x2, y2 = box
    size = min(x2 - x1, y2 - y1)
    x2 = x1 + size
    y2 = y1 + size
    out = image.copy()
    draw = ImageDraw.Draw(out)
    pad = max(10, round(size * 0.055))
    draw.rounded_rectangle(
        (x1 - pad, y1 - pad, x2 + pad, y2 + pad),
        radius=max(10, round(size * 0.045)),
        fill=(255, 255, 255),
    )
    qr = qr_image.resize((size, size), Image.Resampling.NEAREST)
    out.paste(qr.convert("RGB"), (x1, y1))
    return out


def make_contact_sheet(outputs: list[dict]) -> Path:
    thumbs = []
    thumb_w = 360
    label_h = 38
    for item in outputs:
        img = Image.open(item["final_path"]).convert("RGB")
        img.thumbnail((thumb_w, 430), Image.Resampling.LANCZOS)
        tile = Image.new("RGB", (thumb_w, img.height + label_h), (255, 255, 255))
        tile.paste(img, ((thumb_w - img.width) // 2, 0))
        draw = ImageDraw.Draw(tile)
        draw.text((8, img.height + 10), item["slug"], fill=(0, 0, 0))
        thumbs.append(tile)

    cols = 3
    pad = 18
    rows = (len(thumbs) + cols - 1) // cols
    row_heights = [
        max(t.height for t in thumbs[r * cols : (r + 1) * cols])
        for r in range(rows)
    ]
    width = cols * thumb_w + (cols + 1) * pad
    height = sum(row_heights) + (rows + 1) * pad
    sheet = Image.new("RGB", (width, height), (244, 241, 230))
    y = pad
    for r in range(rows):
        x = pad
        for tile in thumbs[r * cols : (r + 1) * cols]:
            sheet.paste(tile, (x, y))
            x += thumb_w + pad
        y += row_heights[r] + pad
    out = QA_DIR / "simple-social-ai-redo-final-contact-sheet.png"
    sheet.save(out, quality=94)
    return out


def main() -> None:
    FINAL_DIR.mkdir(parents=True, exist_ok=True)
    SELECTED_DIR.mkdir(parents=True, exist_ok=True)
    QA_DIR.mkdir(parents=True, exist_ok=True)

    qr_image = Image.open(QR_PATH).convert("RGB")
    outputs = []
    for spec in ASSETS:
        source_path = SOURCE_DIR / spec["source"]
        base = Image.open(source_path).convert("RGB")
        canvas = resize_cover(base, spec["target"])
        final = paste_qr(canvas, qr_image, spec["qr"])
        final_name = f"{spec['slug']}-ai-redo-events-qr.png"
        final_path = FINAL_DIR / final_name
        selected_path = SELECTED_DIR / f"{spec['slug']}.png"
        final.save(final_path, optimize=True)
        final.save(selected_path, optimize=True)
        outputs.append(
            {
                "slug": spec["slug"],
                "source_path": str(source_path),
                "final_path": str(final_path),
                "selected_path": str(selected_path),
                "target_dimensions": spec["target"],
                "qr_box": spec["qr"],
                "qr_url": QR_URL,
            }
        )

    contact_sheet = make_contact_sheet(outputs)
    manifest_path = QA_DIR / "simple-social-ai-redo-manifest.json"
    manifest_path.write_text(
        json.dumps(
            {
                "status": "rendered",
                "qr_url": QR_URL,
                "qr_source": str(QR_PATH),
                "outputs": outputs,
                "contact_sheet": str(contact_sheet),
            },
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    print(manifest_path)
    print(contact_sheet)


if __name__ == "__main__":
    main()
