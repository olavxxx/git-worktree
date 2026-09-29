# Git Worktree & AI Agents — Interactive Guide

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Live Preview](https://img.shields.io/badge/Live_Demo-GitHub_Pages-38bdf8?logo=github)](https://olavxxx.github.io/git-worktree/)

An interactive visual guide and dynamic command generator for parallel workflows using **Git Worktree**, **AI CLI agents** (e.g., Claude Code, Gemini CLI, Agy, Cursor), and **IDEs** (IntelliJ IDEA, VS Code).

---

## 🌐 Live Preview (GitHub Pages)

👉 **[Launch the Interactive Guide](https://olavxxx.github.io/git-worktree/)**

URL: `https://olavxxx.github.io/git-worktree/`

---

## 💡 What is this?

When collaborating with autonomous AI agents in terminal sessions or responding to unexpected production incidents, constantly switching branches, stashing half-baked code, or re-cloning multi-gigabyte repositories creates unnecessary friction and wait time.

With **Git Worktree**, multiple working directories are checked out simultaneously from the same local `.git` repository database on disk. This interactive cheatsheet helps you:

1. **Generate Tailored Terminal Commands** dynamically based on your operating system (Windows CMD/PowerShell/Git Bash or macOS/Linux), your local directory paths, and custom branch names.
2. **Explore 4 Common Real-World Scenarios**:
   - **Scenario A: Parallel Work with an AI Agent** — Delegate heavy tasks to a CLI agent in a dedicated sibling directory while you continue writing code uninterrupted in IntelliJ.
   - **Scenario B: Production Incident During Unfinished Work** — Instantly spin up a clean worktree directly from `main` to patch and release a hotfix without stashing or risking messy uncommitted code.
   - **Scenario C: Quick Code Review of a Colleague's PR** — Test and inspect a colleague's pull request in an isolated environment without disturbing your active workspace.
   - **Scenario D: Side-by-Side Version Comparison** — Run two branches simultaneously on different ports (e.g., 3000 vs. 3001) for direct behavioral comparison.
3. **Full Lifecycle Flow (Setup &rarr; Push &rarr; Cleanup)** — Step-by-step guidance from branch creation, remote sync (`git fetch`), committing and pushing to remote (GitHub/Bitbucket), to safe worktree removal after pull request merge.
4. **Bilingual Support (English & Norwegian)** — Full instant language toggle between English and Norwegian.
5. **Zero Dependencies** — A lightweight, standalone web app contained in a single HTML file with custom CSS, dynamic starfield canvas animations, and reactive vanilla JavaScript.

---

## 🚀 Running Locally

No installation, build tools, or `node_modules` required:

1. Clone or download the repository:
   ```bash
   git clone https://github.com/olavxxx/git-worktree.git
   cd git-worktree
   ```
2. Open `index.html` in your favorite web browser:
   - **Windows:** Double-click `index.html` or run `start index.html`
   - **macOS:** `open index.html`
   - **Linux:** `xdg-open index.html`

---

## ⚙️ Enabling GitHub Pages (For Forks)

If you fork this repository and want to host your own version via GitHub Pages:

1. Navigate to your forked repository on GitHub (`https://github.com/<your-username>/git-worktree`).
2. Go to **Settings** &rarr; **Pages** (under *Code and automation* in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and root directory `/ (root)`
4. Click **Save**.
5. Within 1–2 minutes, your site will be live at:  
   🔗 **`https://<your-username>.github.io/git-worktree/`**

---

## 📄 License & Attribution

This project is licensed under the **[Creative Commons Attribution 4.0 International Public License (CC BY 4.0)](LICENSE)**.

### What does this mean?
You are free to:
- **Share** — copy and redistribute the material in any medium or format.
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.

**Under the following condition:**
- **Attribution:** You must give appropriate credit to the author (**Olav Alexander Mjelde**), provide a link to the license, and indicate if changes were made.

**Author:**  
- **Olav Alexander Mjelde**  
- [LinkedIn Profile](https://www.linkedin.com/in/olav-alexander-mjelde-1256a822/)
