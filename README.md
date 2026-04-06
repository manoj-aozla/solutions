# Aozla Website — Deployment Guide

## Free Hosting with GitHub Pages + Your Squarespace/Google Domain

This is a static website for Aozla. It's designed to be hosted **completely free** on GitHub Pages with your custom domain.

---

## STEP 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com and sign up (free)

## STEP 2: Create a Repository
1. Click the **+** icon → **New repository**
2. Name it: `aozla-website` (or anything you like)
3. Set it to **Public** (required for free GitHub Pages)
4. Click **Create repository**

## STEP 3: Upload Your Website Files
1. In your new repo, click **"uploading an existing file"** link
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `what-we-do.html`
   - `industries.html`
   - `contact.html`
   - `styles.css`
   - `main.js`
   - `sitemap.xml`
   - `robots.txt`
   - `CNAME`
3. Click **Commit changes**

## STEP 4: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch, folder **/ (root)**
4. Click **Save**
5. Your site will be live at `https://YOUR-USERNAME.github.io/aozla-website/` within a few minutes

## STEP 5: Connect Your Squarespace (Google) Domain

### A. In GitHub (Settings → Pages → Custom domain):
1. Enter: `www.aozla.com` (or your actual domain)
2. Click **Save**
3. Check **Enforce HTTPS** once DNS is configured

### B. In Google Domains / Squarespace Domains:
Go to your domain's DNS settings and add these records:

**For `www.aozla.com` (CNAME record):**
| Type  | Host | Value                            |
|-------|------|----------------------------------|
| CNAME | www  | YOUR-USERNAME.github.io          |

**For `aozla.com` (apex/root domain — A records):**
| Type | Host | Value            |
|------|------|------------------|
| A    | @    | 185.199.108.153  |
| A    | @    | 185.199.109.153  |
| A    | @    | 185.199.110.153  |
| A    | @    | 185.199.111.153  |

> Replace `YOUR-USERNAME` with your actual GitHub username.
> Replace `aozla.com` with your actual domain if different.

### C. Wait for DNS Propagation
- DNS changes can take **10 minutes to 48 hours** to propagate
- Check status at: https://dnschecker.org
- Once propagated, go back to GitHub Pages settings and check **Enforce HTTPS**

---

## STEP 6: Set Up the Contact Form (Free)
The contact form uses **Formspree** (free tier = 50 submissions/month):
1. Go to https://formspree.io and sign up (free, no credit card)
2. Create a new form
3. Copy your form ID (looks like `xpzvqkgd`)
4. In `contact.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## STEP 7: Customizations To Make
1. **Logo**: Replace the `A` logo mark with your actual SVG logo in the nav and footer
2. **Email**: Update `info@aozla.com` in `contact.html` with your real email
3. **Location**: Update "United States" in `contact.html` with your actual location
4. **Domain**: Update `aozla.com` in `sitemap.xml`, `robots.txt`, and `CNAME` with your actual domain
5. **Favicon**: Add a `favicon.ico` file and uncomment the favicon link in each HTML file
6. **Google Search Console**: Submit your sitemap at https://search.google.com/search-console
7. **Open Graph image**: Add an `og:image` meta tag with a social sharing image

---

## Adding New Pages
To add a new page (e.g., `about.html`):
1. Copy any existing HTML file as a template
2. Update the content, `<title>`, meta tags, and active nav link
3. Add the URL to `sitemap.xml`
4. Add a link in the nav and footer of all pages
5. Commit and push to GitHub — it auto-deploys

---

## Cost Summary
| Service         | Cost     |
|-----------------|----------|
| GitHub Pages    | **Free** |
| Custom Domain   | Already owned |
| Formspree       | **Free** (50 submissions/month) |
| HTTPS/SSL       | **Free** (via GitHub Pages) |
| **Total/year**  | **$0**   |

---

## Files Overview
```
aozla-site/
├── index.html          ← Homepage
├── what-we-do.html     ← Services page
├── industries.html     ← Industry verticals page
├── contact.html        ← Contact form page
├── styles.css          ← All styling
├── main.js             ← Mobile nav + scroll animations
├── sitemap.xml         ← For search engines
├── robots.txt          ← Crawler permissions
├── CNAME               ← Custom domain for GitHub Pages
└── README.md           ← This file
```
