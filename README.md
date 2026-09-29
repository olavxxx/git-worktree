# Git Worktree & AI Agents — Interactive Guide

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Live Preview](https://img.shields.io/badge/Live_Demo-GitHub_Pages-38bdf8?logo=github)](https://olavxxx.github.io/git-worktree/)

En interaktiv guide og dynamisk kommandogenerator for parallelt arbeid med **Git Worktree**, **AI-agenter** (f.eks. Claude Code, Gemini CLI, Agy, Cursor) og **IDE-er** (IntelliJ, VS Code).

---

## 🌐 Live Forhåndsvisning (GitHub Pages)

👉 **[Prøv den interaktive guiden her](https://olavxxx.github.io/git-worktree/)**

URL: `https://olavxxx.github.io/git-worktree/`

---

## 💡 Hva er dette?

Når du jobber sammen med autonome AI-agenter på kommandolinjen eller håndterer uforutsette hendelser i produksjon, er det upraktisk å stadig bytte brancher, stashe kode eller klone hele repoet på nytt.

Med **Git Worktree** deler alle instanser samme lokale `.git`-database på disken. Dette verktøyet hjelper deg å:
1. **Generere skreddersydde terminal-kommandoer** basert på ditt OS (Windows eller macOS/Linux), din katalogstruktur og branch-navn.
2. **Forstå 4 vanlige scenarioer**:
   - **Scenario A: Parallelt arbeid med AI-agent** — La agenten jobbe i en egen mappe mens du fortsetter å kode i IntelliJ uten avbrudd.
   - **Scenario B: Prod-incident midt i uferdig arbeid** — Hopp rett inn og fiks en feil direkte fra `main` uten `git stash` eller fare for rot.
   - **Scenario C: Rask Code Review av kollegas PR** — Test en PR lokalt i et isolert vindu og slett mappen når du er ferdig.
   - **Scenario D: Side-om-side sammenligning** — Kjør to versjoner samtidig på forskjellige porter.
3. **Komplett livssyklus (Setup &rarr; Push &rarr; Cleanup)** — Steg-for-steg kommandoer for oppretting, pushing til remote (Bitbucket/GitHub), og fjerning av worktree etter merge.
4. **Tospråklig (Bilingual)** — Full støtte for både norsk og engelsk med ett klikk.

---

## 🚀 Kjøre lokalt

Prosjektet er en ren, frittstående HTML-applikasjon uten avhengigheter, npm-pakker eller byggetrinn:

1. Klon eller last ned repoet:
   ```bash
   git clone https://github.com/olavxxx/git-worktree.git
   cd git-worktree
   ```
2. Åpne `index.html` direkte i en nettleser:
   - **Windows:** Dobbeltklikk på `index.html` eller kjør `start index.html`
   - **macOS:** `open index.html`
   - **Linux:** `xdg-open index.html`

---

## ⚙️ Sette opp GitHub Pages

For å aktivere GitHub Pages på dette repoet:
1. Gå til repoet på GitHub: [github.com/olavxxx/git-worktree](https://github.com/olavxxx/git-worktree)
2. Klikk på **Settings** &rarr; **Pages** (i venstremenyen under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Velg `Deploy from a branch`
   - **Branch**: Velg `main` og mappen `/ (root)`
4. Klikk **Save**.
5. Etter ca. 1 minutt er siden tilgjengelig på:  
   🔗 **`https://olavxxx.github.io/git-worktree/`**

---

## 📄 Lisens & Kreditt

Dette verket er lisensiert under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)**.

### Hva betyr dette?
Du står fritt til å:
- **Dele** — kopiere og distribuere materialet i hvilket som helst medium eller format.
- **Bearbeide** — remikse, forandre og bygge videre på materialet til ethvert formål, også kommersielt.

**Vilkår:**
- **Navngivelse (Attribution / Creds):** Du må gi passende kreditt til opprinnelig opphavsperson (**Olav Alexander Mjelde**), oppgi en lenke til lisensen, og indikere om det er gjort endringer.

**Opphavsperson:**  
- **Olav Alexander Mjelde**  
- [LinkedIn-profil](https://www.linkedin.com/in/olav-alexander-mjelde-1256a822/)
