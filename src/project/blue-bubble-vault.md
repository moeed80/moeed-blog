---
layout: article
title: "Blue Bubble Vault: Private Local iMessage Export for Mac"
date: 2026-06-12
excerpt: "A local-first macOS app for reviewing, filtering, and exporting Apple Messages conversations to A4 PDF, with demo mode, date and keyword filters, and privacy-first local processing."
image: "/assets/images/projects/blue-bubble-vault-1024.jpg"
tags:
  - projects
---

If you have ever needed to make sense of a long Messages thread, you know that Apple's native tools are not exactly built for calm review. Finding the right stretch of conversation, narrowing it to a date range, and turning it into a clean offline record can become its own little administrative weather system.

Blue Bubble Vault is a local-first native macOS app for reviewing, filtering, and exporting Apple Messages / iMessage / SMS / RCS conversations. It is designed for privacy-conscious personal archiving, legal review preparation, and offline recordkeeping without requiring an app account, cloud upload, or app telemetry.

### A Local Messages Exporter for Mac

<figure class="post__figure">
  <img src="/assets/images/projects/blue-bubble-vault-1024.jpg" alt="Blue Bubble Vault macOS app" style="max-width: 400px; display: block; margin: 0 auto;" />
  <figcaption>Blue Bubble Vault macOS App Logo.</figcaption>
</figure>

The app is built around a simple idea: your private messages should stay on your Mac while you search, preview, filter, and export them. For demos and testing, Blue Bubble Vault also includes a simulated mode with synthetic data, so the app can be shown without granting access to private local Messages data.

### Current Features

The current v1 release-prep build includes:

* **Native macOS workflow:** A SwiftUI app for selecting a message source, browsing threads, previewing messages, applying filters, and exporting.
* **Local-first processing:** Message discovery, preview, filtering, and export generation happen on the user's Mac.
* **No app account or app cloud processing:** Blue Bubble Vault does not require an app login and does not upload message contents to Mangla & Co LLC.
* **No app analytics or telemetry:** The app is not designed to collect usage history.
* **Simulated demo mode:** Synthetic sample data can be used without Full Disk Access, Contacts permission, or private local Messages data.
* **Local source discovery:** The app can discover expected local Messages database locations, iPhone backup database locations, and the simulated demo source. Live database and backup behavior still need broader real-world validation before the release is treated as fully hardened.
* **Thread preview and search:** Select a thread, preview matching messages, and search the thread list.
* **Date and keyword filters:** Narrow an export by date range, keyword, or both.
* **Optional Contacts lookup:** Contacts access is optional and used locally to resolve display names.
* **Export guardrails:** The app shows filtered message count when filters are active, estimates export size, displays available disk space, and warns about storage safety before export.
* **Full Disk Access onboarding:** Full Disk Access is explained and requested only for live local Messages database access.

### Current Export Output

The current export flow is centered on a local export folder for the selected conversation and active filters. It creates:

* **An A4-sized PDF** for the selected thread and filtered message set.
* **A diagnostic HTML sidecar** used to inspect and verify the PDF render source. This HTML can contain message content and should be treated as sensitive export output, not as a polished standalone HTML archive.
* **A CSV file** using the same filtered message set as the PDF.
* **A manifest JSON sidecar** with package metadata and SHA-256 hashes for generated output files. This is an integrity sidecar, not a legal certification, PDF/A validation report, or formal chain-of-custody workflow.
* **Optional attachment copies** when media export is enabled and the local source files are available. Missing or unavailable attachments are recorded as metadata. Attachments are not embedded into the PDF.

The app does not currently provide PDF/A generation or validation, standalone JSON message export, message-level hashes, redaction tools, attachment embedding in the PDF, encrypted backup handling, or any guarantee that an export will be accepted in a legal process.

### Planned Next

The next release work is focused on tightening the current package and adding formats carefully:

* Broader validation for live Messages databases, local iPhone backups, large libraries, and supported macOS versions.
* Standalone JSON message export separate from the manifest sidecar.
* A polished standalone HTML export, distinct from the diagnostic HTML used for PDF verification.
* More deterministic integrity output, including message-level hashes if a future workflow needs them.
* CSV, manifest, generated-file hashing, and attachment-copy behavior hardened against larger real-world exports.
* Attachment packaging improvements, while keeping missing or unavailable files explicit.
* PDF/A generation or validation if it can be implemented and verified honestly.
* Redaction tools for safer review and sharing workflows.

### Privacy

Blue Bubble Vault is built around local processing. The app does not send message content, Contacts data, local databases, generated exports, or usage history to Mangla & Co LLC.

Demo mode uses synthetic data and does not require private permissions. Full Disk Access is only needed when a user chooses to access the live local Messages database on their Mac. Contacts permission is optional and used locally for display names. Exports are written to the location the user chooses, and those exports should be treated as sensitive because they can contain private message content.

<p class='code'>
<strong>Technical Details & Requirements</strong><br>
- Target Operating System: macOS 13.0 (Ventura) or newer.<br>
- System Permissions: Full Disk Access is required only for live local Messages database access. Contacts permission is optional and used locally for display names.<br>
- Data Sourcing: Supports simulated demo data and discovery of expected local Messages and local iPhone backup database locations. Real-world schema, permission, backup, and large-library behavior are still being validated.<br>
- Under the Hood: Built as a native SwiftUI macOS app using AppKit panels, SQLite read-only database access, and a WebKit-based HTML-to-PDF rendering path with A4 page normalization.<br>
<br>
<strong>Artifact Assets</strong><br>
- Source Code: <a href="https://github.com/moeed80/Blue-Bubble-Vault">https://github.com/moeed80/Blue-Bubble-Vault</a><br>
- Direct Application Download: Coming soon. No release asset is linked yet.<br>
<br>
<strong>Caveats & Fine Print</strong><br>
- License: Distributed entirely under the permissive MIT License. You are free to inspect, tweak, or break the code as you see fit.<br>
- Privacy: This software is published by <a href="/project/mangla/">Mangla & Co LLC</a> and follows the shared <a href="/privacy/">privacy policy</a>. It processes selected Messages data locally and does not upload message content, Contacts data, local databases, export files, or usage history to Mangla & Co LLC.<br>
- Legal Disclaimer: Blue Bubble Vault is intended for lawful personal archiving and review of message history you are authorized to access. It is not legal advice and does not guarantee court admissibility.<br>
- Disclaimer: This software is provided "as is", without warranty of any kind.<br>
- Bugs & Grievances: If the application decides to misbehave or throws an unexpected error, please kindly submit a bug report via the <a href="/contact/">Contact Form</a> or email <a href="mailto:developer@moeed.com">developer@moeed.com</a>. Please do not send message exports, databases, Contacts data, legal records, passwords, private keys, or other sensitive files unless they are necessary for support and you are comfortable sharing them.
</p>
