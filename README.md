# havaianasdestruido.github.io

Personal page for **PatoFlamejanteTV** (aka *UltimateQuack*, *havaianasdestruido*) — plain,
native HTML with a small dark theme on top. Published with GitHub Pages.

## Project structure

```
.
├── index.html                  # the page itself (markup only)
├── css/
│   ├── fonts.css               # @font-face + global font stack
│   └── theme.css               # dark colour scheme (CSS custom properties)
├── js/
│   └── title-ticker.js         # scrolling random messages in the document title
├── img/
│   ├── favicon.ico             # site icon
│   ├── lol.gif                 # shown in the "...lol" box
│   ├── 2eyes.gif               # spare 88x31 button
│   └── blah.gif                # spare badge
├── fonts/
│   ├── lucida-bsod.otf.woff2   # "Lucida BSOD" webfont
│   └── README.txt              # font credits (c3y99, via FontStruct)
├── .github/workflows/static.yml
├── google57105d25a810a2c8.html # Google Search Console verification (must stay at root)
└── 2KO4FQDU5SNZ3R3WXX4FHT3PZNQ6MBYD.gif  # verification token (must stay at root)
```

All assets are referenced with **relative paths** (`img/lol.gif`, `css/theme.css`, …), so the
site works when opened straight from disk, from a local web server, or from GitHub Pages.

## Local preview

Any static server works, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Deployment

`.github/workflows/static.yml` deploys the repository root to GitHub Pages on every push.
Before uploading, it queries the GitHub API and replaces the placeholders `__PUBLIC_REPOS__`
and `__FOLLOWERS__` in `index.html` with the live profile numbers — keep those placeholders
in the markup if you edit the stats table.

## License

See [LICENSE](LICENSE). The font is the work of *c3y99*; see `fonts/README.txt`.
