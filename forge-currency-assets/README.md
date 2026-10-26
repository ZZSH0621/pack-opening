# 锻造通货 · 原创像素雕塑

Six original, code-native pixel icons for the equipment forge. **These are new designs, not copied game assets or official Path of Exile artwork.** The reference influence is only the tactile treatment of heavy metal, aged stone, bevels and jewel facets. All geometry and pixel placements are authored here; no input image, web asset, game logo, emoji or font glyph is used in the icons.

## Icon → operation → shape

| Asset ID / display name | Function in this prototype | Original visual rationale |
|---|---|---|
| `transmutation` / 蜕变石 | Ordinary base → magic item; adds one random affix. | **潮生种 / Tide Seed.** A pale aqua crystal grows out of a single curled bronze shell. The one new seed expresses the first affix and transformation. Wide bronze bevel, oxidized green chips and glass facets. |
| `augmentation` / 增幅石 | Adds one affix to a magic item with a legal free slot; magic capacity is one prefix + one suffix. | **双芽棱针 / Twin-Bud Spindle.** Two jade buds grow along a forked silver instrument. Its branching silhouette communicates addition rather than rerolling; brass collars grip the jade. |
| `regal` / 富豪石 | Magic → rare; preserves existing affixes and adds one, rather than filling all six. | **赤冠印 / Crowned Seal.** A broad octagonal hammered-gold seal with a three-tooth crown, individual laurel facets and a red sunstone. A rank upgrade is legible even in monochrome. |
| `exalted` / 崇高石 | Adds one random affix to a rare item, preserving existing affix types, tiers and values. | **翼阳契 / Winged Sun Shard.** An angular gilded shrine with two folded wings and one tall central ray; its amber covenant shard and front-facing gold clasps suggest a prestigious new attachment. |
| `chaos` / 混沌石 | Rare only: removes one random affix, then adds one; may lose a good affix. Not a full-item reroll. | **裂相轮 / Rift Wheel.** Five offset obsidian-violet plates surround a physically fractured rose-ivory core. Mismatched plate directions and the glowing seam convey unstable replacement without resorting to a copied skull. |
| `divine` / 神圣石 | Rerolls every explicit affix's numeric value within its existing range; types and tiers stay unchanged and values may decrease. | **衡命漏 / Balance Reliquary.** An ivory-and-gold hourglass holds teal crystal sand. The frame remains fixed while the contents move, expressing value-only rerolling; the arched handles contain true transparent cutouts. |

The subtitles are artwork concept names, **not extra currencies**. The UI should use the engine display names above and may use concept names only as supporting flavor.

## Files and integration

- `{id}.svg`: production-ready 64×64 viewBox, transparent, intrinsic size 256×256, `shape-rendering="crispEdges"`; only pixel-aligned, flat-color SVG paths.
- `{id}.png`: lossless transparent 256×256 exports, rasterized directly from the final SVG through Sharp/libvips. A source pixel becomes exactly 4×4 output pixels.
- `contact-sheet.png`: visual QA at 192px and 64px, including parchment and dark teal backgrounds. Not a production sprite.
- `manifest.json`: stable IDs, filenames, palette counts and native grid dimensions.
- `validation.json`: export and geometry checks.
- `build-icons.py`: self-contained original vector-authoring source. Its small custom polygon rasterizer emits horizontal path runs on the 64-grid; it does not load or edit raster imagery.
- `render-previews.cjs`: SVG-to-PNG exporter and contact-sheet renderer, using the installed `sharp` package.

Recommended: `<img src="forge-currency-assets/transmutation.svg" alt="蜕变石" width="64" height="64">` and `image-rendering: pixelated`. Use 64, 128 or 256 CSS pixels when exact pixel rhythm matters; 48px remains identifiable but necessarily samples the native grid. External PNG exports support game engines that do not consume SVG.

The six silhouettes intentionally differ in width, mass, symmetry and negative space—not merely color. Their shared dark green-charcoal outline, top-left highlights, warm aged-metal ramp and restrained teal/gold/rose materials match the site's parchment, teal and orange UI.

## Reproduce

```sh
python dist/forge-currency-assets/build-icons.py
node dist/forge-currency-assets/render-previews.cjs
```

The scripts only write this asset folder. No network, font, third-party artwork or generated bitmap is required for the icons. Contact-sheet labels use a normal system sans-serif font only.

## Verification

Reviewed the full contact sheet visually at 192px and 64px against light/dark backgrounds. All six SVGs were parsed as XML; all PNGs are RGBA 256×256, have transparent corners and binary alpha, have nonempty visible bounds within the canvas, and exactly match nearest-neighbor expansion of their 64×64 grid. No scripts, network references, linked resources or embedded raster images exist in the SVGs.
