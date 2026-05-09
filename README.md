# Julio García-Amorena — Cybersecurity Portfolio

Static portfolio ready for GitHub Pages.

## Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── data/
│   └── profile.json
├── assets/
│   ├── CV_Julio_Garcia-Amorena_Reina_EN.pdf
│   └── CV_Julio_Garcia-Amorena_Reina_ES.pdf
├── 404.html
└── .nojekyll
```

## How to update the portfolio

The portfolio content is centralized in:

```text
data/profile.json
```

Edit this file to update:

- Hero text
- Key metrics
- Experience
- Skills
- Projects
- Education
- Certifications
- Contact links
- English / Spanish texts

The CV files are stored in:

```text
assets/
```

When you update your CV, replace the PDF files and update `data/profile.json` if the content has changed.

## Local preview

Because the page loads `data/profile.json`, do not open `index.html` directly with a double click. Use a local server.

Recommended options:

### VS Code

Use the **Live Server** extension.

### Python

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on GitHub Pages

For a personal site, create this repository:

```text
juliog-a.github.io
```

Upload all files to the root of the repository, so `index.html` is directly visible at the top level.

Then configure:

```text
Settings → Pages → Deploy from a branch
Branch: main
Folder: /root
```

Final URL:

```text
https://juliog-a.github.io/
```

## Design notes

- Fully static HTML/CSS/JS.
- No React, Vite, build step or dependencies.
- Mechanical monospace typography inspired by cybersecurity tooling.
- English by default, Spanish available through the language switcher.
- GitHub Pages compatible.

## Recommended next improvements

- Add project screenshots in `assets/projects/`.
- Pin the strongest GitHub repositories.
- Improve README files for each project.
- Add a custom domain later if needed.
