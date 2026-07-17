---
layout: article
title: "Squintless: A Pebble Watch Face for Aging Eyes"
date: 2026-07-17
excerpt: "An accessibility-first Pebble Time 2 watch face that removes the usual clutter so the time is readable instantly, even when near vision is not cooperating."
image: "/assets/images/projects/squintless-banner-720x320.png"
tags:
  - projects
---

> **Draft for review.** The feature graphic should be copied to `src/assets/images/projects/squintless-banner-720x320.png` when this post is approved for publishing.

Most watch faces treat the small rectangle on your wrist as an opportunity to become a tiny dashboard. The date is there. The weather is there. Steps, heart rate, seconds, icons, status indicators, and a handful of decorative complications all elbow one another for attention.

That is fine if you enjoy glancing at your watch and beginning a small archaeological dig. It is less fine when you simply want to know what time it is.

**Squintless** is an accessibility-first watch face for the Pebble Time 2, built around a very narrow job: make the time readable instantly. Its tagline is deliberately direct: *Designed for your aging eyes, not your ego.*

### The Anti-Complication Watch Face

Squintless shows three things:

* The hour, large, across the top half of the display.
* A thin battery progress bar in the centre.
* The minutes, large, across the bottom half.

There is no date, weather, step count, seconds, icon collection, animation, or hidden information layer. The layout does not shift around. Every pixel is doing work for readability.

This is not minimalism as a visual affectation. It is a decision about priorities. On a watch, time should be available at a glance, without the little moment of visual decoding that most compact interfaces quietly demand.

Squintless is made for people over 40, people whose near vision has changed, low-vision users, and anybody who prefers function over decoration. That may sound like a specific audience, but I suspect it includes more people than the smartwatch industry usually admits.

### Every Pixel for Readability

The Pebble Time 2 has a 200 by 228 rectangular screen, and Squintless uses it unapologetically. The two numerals dominate the display in black on white, with the battery bar placed between them as a quiet boundary rather than another competing interface element.

The battery indicator always occupies the same full width. Black represents charge remaining; the white interior shows what has been used, while the outline remains visible at every level. It answers a useful question without asking for attention.

The rest of the screen remains still. There are no animations and no secondary modes to learn. Time updates once per minute, battery state comes from Pebble's battery service, and the face respects both 12-hour and 24-hour clock preferences. Boring, in this case, is a feature.

### A Numeral System, Not Just a Font

One of the more satisfying parts of the project is that the numbers are not borrowed from the system font or drawn procedurally in the watch face. Squintless has its own custom numeral artwork, with SVGs as the canonical source.

The project separates that typeface work from the watch-face code. The `typeface/` layer owns how each numeral looks; the `watchface/` layer is responsible for rendering time and battery state. Build tooling rasterizes the SVG artwork into hard monochrome Pebble bitmap resources suitable for the watch.

It also includes more than just individual digits. In addition to single-digit fallback resources, Squintless generates pair-specific bitmaps for every combination from `00` to `99`. That allows the spacing of each pair to be tuned optically instead of accepting whatever generic numeric kerning happens to produce. On a screen this small, those small decisions are not decorative; they are the difference between a number feeling immediate and one feeling just slightly fussy.

### Building for a Beloved Old Platform

Squintless is built specifically for the Pebble Time 2, whose platform codename is `emery`. It does not try to force the design onto older 144 by 168 Pebble displays where the proportions would require compromise. The generated Pebble package is a straightforward `.pbw` file, but the product thinking behind it is current: accessibility first, purpose before feature count, and a real respect for the attention of the person wearing it.

There is something lovely about building a modern-feeling product for a platform people continue to care about. Pebble is old enough to have escaped the current arms race of smartwatch maximalism, yet still useful enough to make a single-purpose watch face feel like a meaningful piece of software.

Squintless 1.0.0 is the first public, open-source release. It is small on purpose. It tells you the time. It lets you know when the battery is running low. Then it gets out of your way.

<p class='code'>
<strong>Technical Details &amp; Requirements</strong><br>
- Compatibility: Pebble Time 2 only (`emery`), with a 200 x 228 rectangular display.<br>
- Display: Large custom black-on-white numeral bitmaps for hours and minutes, with a thin outlined battery indicator between them.<br>
- Clock Support: Respects both 12-hour and 24-hour Pebble clock styles.<br>
- Under the Hood: Custom numeral SVG source artwork is rasterized into monochrome Pebble bitmap resources. The package includes single-digit fallbacks and pair-specific resources from `00` through `99` for optical spacing.<br>
- Build Output: <code>watchface/build/watchface.pbw</code>.<br>
<br>
<strong>Artifact Assets</strong><br>
- Project Source: [Add public repository link before publishing.]<br>
- Feature Graphic: [Add the Squintless feature graphic to this site's project assets before publishing.]<br>
<br>
<strong>Caveats &amp; Fine Print</strong><br>
- Release: Version 1.0.0, first public/open-source production release, dated July 17, 2026.<br>
- License: Squintless source code, custom numeral artwork, generated bitmap resources, documentation, and store artwork are released under the permissive MIT License.<br>
- Third-Party Font: Red Hat Display is used for store typography and remains separately licensed under the SIL Open Font License 1.1.<br>
- Publisher: Squintless is published by <a href="/project/mangla/">Mangla &amp; Co LLC</a>.<br>
- Disclaimer: This software is provided "as is", without warranty of any kind.<br>
- Bugs &amp; Grievances: If the watch face misbehaves, please submit a report via the <a href="/contact/">Contact Form</a> or email <a href="mailto:developer@moeed.com">developer@moeed.com</a>.
</p>
