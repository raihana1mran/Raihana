# Raihana Portfolio

Personal portfolio website built with HTML, Tailwind CSS v3, vanilla JavaScript and GSAP.
Deployed automatically to GitHub Pages with GitHub Actions.

## Project structure

```
index.html              main page
privacy-policy.html     privacy policy page
terms-of-service.html   terms of service page
src/input.css           Tailwind directives + custom CSS
tailwind.config.js      theme (brand colours, fonts) and plugins
postcss.config.js       PostCSS plugins
.github/workflows/      GitHub Pages deployment workflow
```

## Run locally

```bash
npm install
npm run build     # creates dist/output.css
```

Then open `index.html` in your browser (or use `npm run dev` to rebuild on every save).

## Deploy to GitHub Pages

1. Create a new empty repository on GitHub, for example `raihana-portfolio`.
2. In this folder run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/raihana-portfolio.git
   git push -u origin main
   ```

3. On GitHub open **Settings > Pages** and set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish.
5. Your site is live at `https://YOUR-USERNAME.github.io/raihana-portfolio/`.

Every push to `main` redeploys the site automatically.

## Contact form

The Get In Touch form sends messages to your email through FormSubmit.
The first time anyone submits the form on the live site, FormSubmit emails you an
activation link. Open that email and confirm once, then all later messages arrive normally.
Submit a test message yourself right after deploying.
