# Markdown to PDF (React + TypeScript)

A client-side React app that supports:

- Markdown/text to PDF
- PDF to Word (.docx)
- Word (.docx) to PDF

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment (GitHub Pages)

This repository includes an Actions workflow at `.github/workflows/deploy-pages.yml`.

### One-time setup

1. Push this branch to GitHub.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

### Deploy

- Push to the `work` branch, or
- Run **Deploy to GitHub Pages** manually from the **Actions** tab.

The workflow will install dependencies, build with `VITE_BASE_PATH=/<repo-name>/`, upload `dist/`, and publish to GitHub Pages.

## Notes on format fidelity

Document conversion is handled fully client-side. The app preserves structure and content as much as browser-based conversion libraries allow. Highly complex layouts may require manual fine-tuning after conversion.
