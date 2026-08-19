# Campione Interior Solutions — site

Single-page marketing site for Campione Interior Solutions LLC. One file
(`index.html`), no build step, no framework. See `CLAUDE.md` for the full
project brief, audience, and content rules.

## Local preview

```
node serve.js
```

Then open **http://localhost:5500**.

`serve.js` is a zero-dependency static file server (Node's built-in `http`
module only — no `npm install`) that serves this folder as-is, matching the
site itself: no build step, nothing to compile. `Ctrl+C` to stop it.

Set a different port with `PORT=5173 node serve.js` if 5500 is taken.

## Local development

- Serve with VS Code Live Server on port 5500. Fallback: `npx serve .`
- The license number in the Credentials grid (section 05) and the footer is a
  placeholder (`EXAMPLE-LIC-06-02-00003`) pending re-verification — see
  `CLAUDE.md`.
