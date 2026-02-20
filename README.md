# Markdown to PDF (React + TypeScript)

A client-side React app that accepts text/Markdown, shows a live preview, and exports a PDF.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This repository includes an Actions workflow at `.github/workflows/deploy-pages.yml`.

### One-time GitHub setup

1. Push this branch to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.

### Deploy

- Push to the `work` branch, or
- Run the **Deploy to GitHub Pages** workflow manually from **Actions**.

The workflow automatically:

1. installs dependencies,
2. builds with `VITE_BASE_PATH=/<repo-name>/`,
3. uploads `dist/`,
4. deploys to GitHub Pages.

Your site URL will be shown in the workflow run summary.
