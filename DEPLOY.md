# Publish on GitHub Pages (free)

This repo is the **portfolio website only**. GitHub Pages hosts the built HTML — not your Android/iOS source.

GitHub user: **zkb-butt-1989**

Your public URL will be:

`https://zkb-butt-1989.github.io/Portfolio/`

(If you later create a repo named `YOUR_USERNAME.github.io`, the site can live at the root URL with no `/Portfolio` path.)

## 1. Create a GitHub account and an empty repo

1. Sign up at [github.com/signup](https://github.com/signup) if you do not have an account.
2. Click **New repository**.
3. Name it (for example `Portfolio`).
4. Leave it **Public**.
5. Do **not** add a README, .gitignore, or license (this folder already has those).
6. Create the repository and copy the HTTPS URL.

## 2. Push this project

In Terminal, from this `Portfolio` folder (replace the URL with yours):

```bash
git add .
git commit -m "Add portfolio site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/zkb-butt-1989/Portfolio.git
git push -u origin main
```

If `git commit` says there is nothing to commit, skip it and only push.

If `remote origin already exists`, run `git remote set-url origin https://github.com/zkb-butt-1989/Portfolio.git` then push.

## 3. Turn on GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. The workflow **Deploy GitHub Pages** should run after the push.
4. If the first run was skipped, click **Run workflow**.
5. When it is green, open the site URL from Settings → Pages.

First deploy often takes 1–2 minutes.

## 4. Updates later

Change copy in `src/content/profile.ts`, then:

```bash
git add -A
git commit -m "Update portfolio"
git push
```

GitHub rebuilds Pages automatically.

## Local preview (same as before)

```bash
npm install
npm run dev
```

Open http://localhost:3000 — this does **not** use the `/RepoName` prefix. That prefix is only on GitHub Pages.

## Alternative: Vercel

You can still import the same GitHub repo at [vercel.com/new](https://vercel.com/new) if you prefer `something.vercel.app` without a `/repo` path.
