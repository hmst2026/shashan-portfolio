# shashan.me

Personal portfolio of Shashan Tissera. Plain HTML, CSS and JavaScript, with no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole site (styles and scripts are inside) |
| `assets/` | Portrait photo and social share image |
| `logos/` | Put `coventry.png` and `plymouth.png` here (see `logos/README.txt`) |
| `CNAME` | Tells GitHub Pages to serve the site at shashan.me |
| `robots.txt`, `sitemap.xml` | Search engine files |
| `favicon.svg`, `apple-touch-icon.png` | Browser and phone icons |
| `404.html` | Page shown for unknown addresses |

## Publish on GitHub Pages with shashan.me

1. Create a new public repository on GitHub (for example `portfolio`).
2. Click **Add file > Upload files**, drag in everything from this folder (the contents, not the folder itself), and commit.
3. Open **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. Under **Custom domain** enter `shashan.me` and save. The `CNAME` file already contains it.
5. At your domain registrar, open the DNS settings for shashan.me and add:

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

6. Wait for DNS to update (a few minutes to a few hours), then tick **Enforce HTTPS** in Settings > Pages.

## After it is live

- Submit `https://shashan.me/sitemap.xml` in Google Search Console.
- Replace the LinkedIn link in `index.html` (search for `linkedin.com`) with your public profile address, which looks like `https://www.linkedin.com/in/your-name`.
- Add the two logo files to `logos/`.
