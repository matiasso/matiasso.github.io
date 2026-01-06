# Personal site (SvelteKit)

Static SvelteKit site for `username.github.io`. Uses Vite + adapter-static and deploys to GitHub Pages with `gh-pages`.

## Prerequisites
- Node 18+ and npm
- GitHub repo named `USERNAME.github.io`
- Git installed and remote `origin` set to that repo

## Install
```bash
npm install
```

## Develop
```bash
npm run dev
# or
npm run dev -- --open
```

## Build
```bash
npm run build
# optional preview of the static build
npm run preview
```

## Deploy to GitHub Pages
The repo already includes the static adapter and a deploy script that publishes the `build/` directory to the `gh-pages` branch.

1) Make sure the site builds locally
```bash
npm run build
```

2) Publish to `gh-pages`
```bash
npm run deploy
```
- This creates `build/.nojekyll` and pushes `build/` to the `gh-pages` branch via the `gh-pages` npm package.

3) Point Pages to `gh-pages`
- In GitHub repo settings → Pages, set Source to `Deploy from branch`, Branch `gh-pages` / folder `/`.

4) Visit `https://USERNAME.github.io` once GitHub finishes the deploy (usually under a minute).

### First-time setup tips
- If `gh-pages` fails with auth errors, configure a GitHub token for `git push` (HTTPS) or ensure your SSH key is loaded.
- If you renamed the repo or use a custom domain, update DNS/`CNAME` as needed. For a project site (not `username.github.io`), set `paths.base` in `svelte.config.js` and redeploy.

### Quick commands
- Fresh install + deploy:
```bash
npm install
npm run build
npm run deploy
```
