---
layout: article
title: "Local Stitch: Private PDF Merging for AI-Ready Document Review"
date: 2024-05-15
excerpt: "A free, local-first macOS app that combines user-selected PDFs into one organized, source-aware document for private review, archiving, and AI-assisted analysis."
image: "/assets/images/projects/local-stitch-1024.jpg"
tags:
  - projects
---

<div class="post__download">
  <a class="post__download-button" href="https://github.com/moeed80/Local-Stitch/releases/download/v1.0.0/Local-Stitch-1.0.dmg">
    <svg class="post__download-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
    <span>Download Local Stitch (.dmg)</span>
  </a>
  <p class="post__download-note">Free macOS app for Sonoma or later. No account, no upload.</p>
</div>

If you have ever had the misfortune of prepping a large pile of documents for an AI tool, personal records review, business audit, or legal-adjacent mess, you know that digital organization is a quick route to frustration. Bank statements, receipts, forms, records, invoices, and exported documents all arrive as separate PDFs, each with its own little island of context.

When you merge them using standard software, that context usually vanishes:
* Original filenames disappear.
* Source boundaries blur.
* Page ranges get harder to explain.
* AI tools have less structure to work with.

Turning to sketchy, web-based PDF tools in these situations is its own headache. Your options are usually limited to uploading sensitive financial, personal, or work documents to an external cloud service, or wrestling with heavy software that somehow makes "put these PDFs together" feel like a lifestyle choice.

### Privacy-First, Local PDF Stitching

<figure class="post__figure">
  <img src="/assets/images/projects/local-stitch-1024.jpg" alt="Local Stitch MacOS App" style="max-width: 400px; display: block; margin: 0 auto;" />
  <figcaption>Local Stitch MacOS App Logo.</figcaption>
</figure>

**Local Stitch** is a free, local-first macOS utility designed to combine up to 100 user-selected PDF files into one organized document, all while keeping your files on your Mac. You can add PDFs by drag and drop or with the native macOS file picker, reorder them, remove anything that does not belong, and export the merged PDF to a destination you choose.

Because Local Stitch processes files locally, it is a much better fit for sensitive document workflows than a random upload box on the internet. No account is required. No subscription is required. The app does not upload your files, collect analytics, or call out to a cloud service to do the merge.

It also supports password-protected PDFs. If locked files are detected, they appear clearly in the file list, and you can enter a shared password to unlock matching documents before merging. Merging stays disabled until protected PDFs have been unlocked, which is boring in exactly the right way.

### AI-Ready Source Summary Pages

Local Stitch's useful trick is its optional source summary pages. When enabled, the app adds a compilation overview page at the beginning of the merged PDF, plus one source summary page before each selected PDF.

Those pages help humans, LLMs, and RAG (Retrieval-Augmented Generation) systems understand where each section of the merged document came from by preserving:
* **Original filenames**
* **Source order and output page ranges**
* **PDF metadata and detected structure**
* **SHA-256 fingerprints** of the original selected files

### Performance and Safeguards

The backend of Local Stitch is built to keep the workflow calm even when the folder is not. It inspects files before adding them, enforces a 100-PDF limit, estimates the final page count, and performs the merge work away from the main interface so the app can show progress instead of freezing.

* **Local Processing:** File inspection, password unlocking, hashing, summary-page creation, and PDF merging all happen on your Mac.
* **Source-Aware Output:** Optional summary pages preserve provenance, page ranges, metadata, and fingerprints inside the merged PDF.
* **Native Mac Workflow:** Uses standard drag and drop, native open/save panels, progress feedback, and a "Show in Finder" button when the merge is done.

Overall, it is a straightforward way to turn a scattered folder of PDFs into one cleaner, more explainable document for review, archiving, or AI-assisted analysis.

<p class='code'>
<strong>Technical Details & Requirements</strong><br>
- Target Operating System: macOS 14.0 (Sonoma) or later.<br>
- Architecture: Universal Mac app for Apple Silicon and Intel Macs.<br>
- System Constraints & Limit: Supports up to 100 PDF files in a single merge operation.<br>
- Under the Hood: Built as a native SwiftUI macOS app using PDFKit for PDF parsing and merge output, CryptoKit for SHA-256 hashing, and AppKit panels for native file selection and save workflows.<br>
- Privacy Model: Uses only files selected by the user. The app performs PDF inspection, password handling, hashing, source summary generation, and merging locally, then writes the final PDF only to the destination the user chooses.<br>
<br>
<strong>Artifact Assets</strong><br>
- Source Code: <a href="https://github.com/moeed80/Local-Stitch">https://github.com/moeed80/Local-Stitch</a><br>
- Direct Application Download: <br><a class="post__download-button post__download-button--compact" href="https://github.com/moeed80/Local-Stitch/releases/download/v1.0.0/Local-Stitch-1.0.dmg"><svg class="post__download-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg><span>Download Local Stitch (.dmg)</span></a><br>
<br>
<strong>Caveats & Fine Print</strong><br>
- License: Distributed entirely under the permissive MIT License. You are free to inspect, tweak, or break the code as you see fit.<br>
- Privacy: This software is published by <a href="/project/mangla/">Mangla & Co LLC</a> and follows the shared <a href="/privacy/">privacy policy</a>. It handles document merging locally, does not collect analytics, and does not upload your PDFs.<br>
- Disclaimer: This software is provided "as is", without warranty of any kind.<br>
- Bugs & Grievances: If the application decides to misbehave or throws an unexpected error, please kindly submit a bug report via the <a href="/contact/">Contact Form</a> or email <a href="mailto:developer@moeed.com">developer@moeed.com</a>. Please do not send passwords, private keys, financial records, legal records, or other sensitive files unless they are necessary for support and you are comfortable sharing them.
</p>
