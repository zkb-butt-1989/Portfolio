# Zubair Khalid — portfolio

Public **showcase site** for shipped mobile apps. This repository is the website only: no Android/iOS source, no private client code.

Live goal: free **GitHub Pages** (see [DEPLOY.md](DEPLOY.md)). Recruiters open Google Play / App Store from each project card.

## Local

```bash
npm install
npm run dev
```

- Home: http://localhost:3000
- Printable CV: http://localhost:3000/resume
- PDF: `public/ZubairKhalid-Resume.pdf`

Regenerate the PDF after content edits:

```bash
npm run resume:pdf
```

All copy lives in [`src/content/profile.ts`](src/content/profile.ts). Store URLs there must match the listings you actually shipped.

## Publish (free GitHub Pages)

See [DEPLOY.md](DEPLOY.md) for the exact GitHub steps. A GitHub Action builds the static site and publishes it.
