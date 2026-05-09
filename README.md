# Julio García-Amorena Reina — Cybersecurity Portfolio

Personal portfolio designed for GitHub Pages. It uses plain HTML, CSS and JavaScript, with no build step and no external framework.

## Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── assets/
    ├── CV_Julio_Garcia-Amorena_Reina_EN.pdf
    └── CV_Julio_Garcia-Amorena_Reina_ES.pdf
```

## Features

- Responsive one-page portfolio.
- English/Spanish language toggle.
- Downloadable CVs.
- Sections for profile, experience, skills, projects, education and contact.
- GitHub Pages compatible without Vite, React or build tooling.

## Local preview

Open `index.html` directly in your browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Recommended repository name

For a personal GitHub Pages site, create the repository as:

```text
juliog-a.github.io
```

This should publish at:

```text
https://juliog-a.github.io/
```

## Deploy with GitHub Pages

1. Create a new public repository named `juliog-a.github.io`.
2. Upload all files from this folder to the repository root.
3. Go to `Settings` → `Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. Open the published site from the URL shown in the Pages settings.

## What to update before publishing

- Replace CV PDFs when you update your CV.
- Add a profile image only if it is professional and consistent with the site design.
- Keep the project descriptions accurate and avoid claiming unfinished certifications or roles.
- Pin your best GitHub repositories: `Controlled-File-Encryption`, `securitytesting`, `Chees-Script`, and `security_lab`.

## Design rationale

The portfolio is intentionally static and lightweight. This avoids deployment problems, keeps the code maintainable, and makes the site easy to edit from GitHub directly.
