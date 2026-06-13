---
layout: article
title: "Local Stitch PDF: Export SMS History for Legal Discovery"
date: 2024-05-15
excerpt: "A local macOS application that securely exports iPhone text messages and SMS history for legal discovery. It provides forensic-grade evidence with preserved timestamps and supports PDF/A archival format."
image: "/assets/images/projects/local-stitch-1024.jpg"
tags:
  - projects
---

If you have ever had the misfortune of prepping a large pile of documents for an AI tool or legal audit, like trying to feed dozens of bank statements, medical records, and emails into an LLM, you know that digital organization is a quick route to frustration. When you merge these documents using standard software, all context usually vanishes. Original filenames disappear, timelines blur, and the AI struggles with the disorganized data.

When you merge these documents using standard software, all context usually vanishes:
* Original filenames disappear.
* Timelines blur.
* The AI struggles to parse the disorganized data.

Turning to sketchy, web-based tools in these situations is a headache. Your options are usually limited to uploading sensitive financial or legal data to an external cloud server, or fighting with heavy, bloated software that freezes your computer.

### Privacy-First, Local PDF Stitching

<figure class="post__figure">
  <img src="/assets/images/projects/local-stitch-1024.jpg" alt="Local Stitch MacOS App" style="max-width: 400px; display: block; margin: 0 auto;" />
  <figcaption>Local Stitch MacOS App Logo.</figcaption>
</figure>

**Local Stitch** is a lightweight macOS utility designed to combine up to 100 PDF files into one neatly organized document, all while keeping your data safely on your machine. Because it processes files entirely locally, it provides a secure environment for your private data. 

Additionally, it includes a **Global Password Feature** that automatically unlocks encrypted PDFs in memory, saving you the hassle of decrypting each file manually before merging.

### AI-Optimized Document Manifest Pages

This tool is uniquely built for data analysis or legal discovery due to its **AI-Optimized Document Manifest Pages** feature. When enabled, the app automatically inserts a structured text separator page right before each PDF. 

This helps LLMs and RAG (Retrieval-Augmented Generation) systems smoothly parse your data by clearly listing:
* **Original Filename**
* **Compilation Sequence**
* **Timestamps**
* **SHA-256 Digital Fingerprint** (to verify file integrity)

### Performance and Safeguards

The backend of Local Stitch protects your system from slowing down or crashing under heavy loads:

* **Memory-Safe Batch Processing:** It never attempts to hold too many PDFs in active RAM at once. Instead, it processes files in batches on a background thread.
* **Visual Progress Trackers:** Features a live progress bar alongside a live page counter that dynamically updates as you drag and reorder files.

Overall, it is a straightforward, highly efficient way to organize your local files and perfectly prepare them for complex AI tasks.

<p class='code'>
<strong>Technical Details & Requirements</strong><br>
- Target Operating System: macOS 13.0 (Ventura) or newer.<br>
- System Constraints & Limit: Features a lightweight, single-window layout that gracefully enforces a hard cap of a maximum of 100 PDF files per single merge operation.<br>
- Under the Hood: Built with asynchronous threading to offload file inspection, SHA-256 generation, and merging tasks to a background thread, ensuring the main UI never freezes or displays the spinning beach ball. It utilizes strict, memory-safe sequential batch processing so it never overloads your Mac's active RAM with massive documents.<br>
- Memory-Safe State Persistence: Safely holds successfully submitted document passwords and decrypted states strictly within temporary system memory to update global page counts in real time.<br>
<br>
<strong>Artifact Assets</strong><br>
- Source Code: <a href="https://github.com/moeed80/Local-Stitch">https://github.com/moeed80/Local-Stitch</a><br>
- Direct Application Download: Download Local-Stitch-coming-soon.dmg<br>
<br>
<strong>Caveats & Fine Print</strong><br>
- License: Distributed entirely under the permissive MIT License. You are free to inspect, tweak, or break the code as you see fit.<br>
- Disclaimer: This software is provided "as is", without warranty of any kind. It handles your document compiling completely locally, so your privacy remains entirely in your own hands.<br>
- Bugs & Grievances: If the application decides to misbehave or throws an unexpected error, please kindly submit a bug report via the <a href="/contact/">Contact Form</a>.
</p>