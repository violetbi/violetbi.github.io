# Xinran Bi's personal website

Live website: https://violetbi.github.io/

A small, responsive academic website with About, Publications, and Experience pages. It is plain HTML, CSS, and JavaScript, with no external fonts, analytics, package dependencies, or build step.

## Preview locally

From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Use a local server instead of opening HTML files directly; asset and navigation paths are relative to the website root.

## Update content

- `index.html`: biography, research interests, and education.
- `publications.html`: publications, ordered newest first.
- `experience.html`: research, work, and teaching.
- `site.css`: shared typography, colors, and responsive layouts.
- `theme.js`: theme preference and accessible theme toggle.
- `xinran-bi.jpg`: supplied portrait, used without image edits.

The header, profile sidebar, and footer are intentionally present in each HTML file so the website works without JavaScript. When changing those shared elements, update all three pages. Adjust the footer's update date after content changes and add new pages to `sitemap.xml`.

## Publish with GitHub Pages

GitHub repository: `violetbi/violetbi.github.io`.

The site is served from the root of the `master` branch. Commit and push the website files to that branch; GitHub Pages publishes the update automatically. `.nojekyll` makes this a static deployment. If Pages needs to be enabled again, choose **Settings → Pages → Deploy from a branch → master → / (root)**.

The original local `证件照.jpg` is ignored because the published copy is published as `xinran-bi.jpg`. No secrets or credentials are needed in this repository.

See `SOURCES.md` for the sources used to check the biography and publications.
