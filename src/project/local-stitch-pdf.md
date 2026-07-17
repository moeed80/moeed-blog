---
layout: article
title: "Local Stitch: Private PDF Stitching and File Size Reduction for Mac"
date: 2026-05-15
excerpt: "A free, local-first macOS app that combines PDFs, reduces PDF file size, and prepares source-aware documents for private review, archiving, sharing, and AI-assisted analysis."
image: "/assets/images/projects/local-stitch-1024.jpg"
tags:
  - projects
---

[Download Local Stitch (.dmg)](https://github.com/moeed80/Local-Stitch/releases/download/v1.0.0/Local-Stitch-1.0.dmg)

Free macOS app for Sonoma or later. No account, no upload.

If you have ever had the misfortune of prepping a large pile of documents for an AI tool, personal records review, business audit, or legal-adjacent mess, you know that digital organization is a quick route to frustration. Bank statements, receipts, forms, records, invoices, and exported documents all arrive as separate PDFs, each with its own little island of context.

Sometimes the problem is that there are too many PDFs. Sometimes the problem is that one PDF is too big to upload, email, or submit anywhere without pleading with it first. And sometimes, because computers enjoy comedy, it is both.

When you use standard PDF tools, context usually vanishes:

- Original filenames disappear.
- Source boundaries blur.
- Page ranges get harder to explain.
- The final file may still be too large to use where you actually need it.
- AI tools have less structure to work with.

Turning to sketchy, web-based PDF tools in these situations is its own headache. Your options are usually limited to uploading sensitive financial, personal, or work documents to an external cloud service, or wrestling with heavy software that somehow makes "put these PDFs together and make the file smaller" feel like a lifestyle choice.

### Privacy-First PDF Stitching and File Size Reduction

![Local Stitch MacOS App](/assets/images/projects/local-stitch-1024.jpg)

Local Stitch MacOS App Logo.

**Local Stitch** is a free, local-first macOS utility designed to combine up to 100 user-selected PDFs into one organized document, reduce the file size of a single PDF, or merge multiple PDFs and then reduce the final output size. All of this happens on your Mac.

You can add PDFs by drag and drop or with the native macOS file picker, reorder them, remove anything that does not belong, unlock protected PDFs locally, and save the output only to a destination you choose.

Because Local Stitch processes files locally, it is a much better fit for sensitive document workflows than a random upload box on the internet. No account is required. No subscription is required. The app does not upload your files, collect analytics, or call out to a cloud service to do the work.

### Reduce File Size, Locally

Local Stitch now includes a first-class **Reduce File Size** workflow.

With one PDF selected, the app lets you choose between **Balanced** and **Smallest PDF**, creates a temporary local reduced-size candidate, measures the actual output size, and shows the estimated savings before you save a copy.

With multiple PDFs selected, you can turn on **Reduce file size after merge**. Local Stitch merges first, then reduces the final merged PDF locally before saving it.

This is useful when a PDF is too large for an AI upload limit, court portal, email attachment, business system, or just your own patience. The important caveat is that file size reduction is not magic. Some PDFs are already optimized, mostly text, vector-heavy, or structured in a way that does not shrink much. Local Stitch is honest about that instead of pretending every file can be squeezed into submission.

### Protected PDFs

Local Stitch also supports password-protected PDFs. If locked files are detected, they appear clearly in the file list, and you can enter a password to unlock matching documents before processing.

Merge and compression actions stay disabled until protected PDFs have been unlocked, which is boring in exactly the right way. Merged or compressed output copies are saved without preserving the original PDF password, matching the app's current output behavior.

### AI-Ready Source Summary Pages

Local Stitch's useful trick is its optional source summary pages. When enabled, the app adds a compilation overview page at the beginning of the merged PDF, plus one source summary page before each selected PDF.

Those pages help humans, LLMs, and RAG (Retrieval-Augmented Generation) systems understand where each section of the merged document came from by preserving:

- **Original filenames**
- **Source order and output page ranges**
- **PDF metadata and detected structure**
- **SHA-256 fingerprints** of the original selected files

### Performance and Safeguards

The backend of Local Stitch is built to keep the workflow calm even when the folder is not. It inspects files before adding them, enforces a 100-PDF limit, measures file sizes, estimates page counts, and performs merge and file-size reduction work away from the main interface so the app can show progress instead of freezing.

- **Local Processing:** File inspection, password unlocking, hashing, summary-page creation, merging, and file size reduction all happen on your Mac.
- **Source-Aware Output:** Optional summary pages preserve provenance, page ranges, metadata, and fingerprints inside the merged PDF.
- **Measured Size Reduction:** The app measures real local output rather than guessing a fake percentage.
- **Native Mac Workflow:** Uses standard drag and drop, native open/save panels, progress feedback, and a "Show in Finder" button when the task is done.

Overall, it is a straightforward way to turn scattered or oversized PDFs into cleaner, more usable local documents for review, archiving, sharing, or AI-assisted analysis.

**Technical Details & Requirements**  
- Target Operating System: macOS 14.0 (Sonoma) or later.  
- Architecture: Universal Mac app for Apple Silicon and Intel Macs.  
- System Constraints & Limit: Supports up to 100 PDF files in a single task.  
- Compression Options: Balanced and Smallest PDF. Local Stitch uses PDFKit-based file size reduction and measures real temporary output before saving.  
- Under the Hood: Built as a native SwiftUI macOS app using PDFKit for PDF parsing, unlocking, merging, writing, and file size reduction; CryptoKit for SHA-256 hashing; and AppKit panels for native file selection and save workflows.  
- Privacy Model: Uses only files selected by the user. The app performs PDF inspection, password handling, hashing, source summary generation, merging, and file size reduction locally, then writes output PDFs only to the destination the user chooses.  

**Artifact Assets**  
- Source Code: [https://github.com/moeed80/Local-Stitch](https://github.com/moeed80/Local-Stitch)  
- Direct Application Download:   
[Download Local Stitch (.dmg)](https://github.com/moeed80/Local-Stitch/releases/download/v1.0.0/Local-Stitch-1.0.dmg)  

**Caveats & Fine Print**  
- License: Distributed entirely under the permissive MIT License. You are free to inspect, tweak, or break the code as you see fit.  
- Privacy: This software is published by [Mangla & Co LLC](/project/mangla/) and follows the shared [privacy policy](/privacy/). It handles document processing locally, does not collect analytics, and does not upload your PDFs.  
- Compression Note: File size reduction works best on PDFs with reducible image content. Already optimized, mostly text, or vector-heavy PDFs may not shrink much.  
- Disclaimer: This software is provided "as is", without warranty of any kind.  
- Bugs & Grievances: If the application decides to misbehave or throws an unexpected error, please kindly submit a bug report via the [Contact Form](/contact/) or email [developer@moeed.com](mailto:developer@moeed.com). Please do not send passwords, private keys, financial records, legal records, or other sensitive files unless they are necessary for support and you are comfortable sharing them.
