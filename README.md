# Matthew S. Woodstock — personal site

A plain HTML/CSS site. **No Quarto, no R, no build step.** You edit the files,
commit them, and GitHub Pages serves them as-is.

## Files

| File | What it is |
|------|------------|
| `index.html` | Home page: hero, about, education, research themes, software, publications |
| `projects.html` | Projects page: the three themes with project cards |
| `cv.html` | CV page: download button + inline PDF viewer |
| `styles.css` | **All design and colors** (shared by every page) |
| `app.js` | Small script: light/dark toggle and the email "Copy" button |
| `images/headshot.png` | Your photo (keep this filename, or update it in the HTML) |
| `Woodstock_CV_working.pdf` | Your CV (keep this filename, or update it in `cv.html`) |

## Preview locally

Double-click `index.html` to open it in your browser. That's it. Edit a file,
save, refresh the browser.

## Deploy

Commit the files to your `personal_site.github.io` repo and point GitHub Pages at
the folder that contains `index.html`. No render step.

## Common edits

**Change wording** — open the page (`index.html`, `projects.html`, `cv.html`),
find the text between the tags, and edit it. For example, the hero line lives in:

```html
<div class="role">Quantitative ecosystem modeler, ...</div>
```

**Add a publication** — in `index.html`, find `<div class="pubgroup">` under
"Peer-reviewed articles" and copy one `<li> ... </li>`:

```html
<li><span class="me">Woodstock, M.S.</span>, Coauthor (2026). Title here.
<span class="venue">Journal Name.</span> <a href="https://doi.org/XXXX">doi</a></li>
```

`<span class="me">…</span>` bolds your name; `<span class="venue">…</span>` italicizes the journal.

**Add a project** — in `projects.html`, find the theme section
(`id="theme-1"`, `theme-2`, or `theme-3`) and copy one card:

```html
<div class="wcard proj">
  <span class="chip">Role</span>
  <h3>Project title</h3>
  <p>One or two sentences describing it.</p>
  <div class="ref">Author et al. (Year) <em>Journal</em></div>
</div>
```

Drop the `<span class="chip">…</span>` line if there's no role label. Use
`class="chip pi"` for a PI-colored label.

**Change the three themes** — the theme headings and blurbs are the three
`<div class="banner">` blocks in `projects.html` and the three cards near the top
of `index.html`.

**Change colors** — edit the tokens at the top of `styles.css`:

```css
:root{
  --accent:#0d8794;   /* teal links/accents */
  --navy:#0a2a38;     /* dark hero/footer   */
  --coral:#dd6a44;    /* the one warm accent */
  ...
}
```

There's a matching dark-mode block a few lines below (`prefers-color-scheme: dark`
and `[data-theme="dark"]`) if you want to tune the dark theme too.

**Swap your photo** — replace `images/headshot.png` (keep the name).

**Update your CV** — replace `Woodstock_CV_working.pdf` (keep the name, or change
the three references to it in `cv.html`).

## Tip

A free editor like VS Code gives you syntax highlighting and a live preview, which
makes editing HTML much easier than a plain text editor.
