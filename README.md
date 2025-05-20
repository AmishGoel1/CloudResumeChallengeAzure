# 🌐 Cloud Resume Challenge - Chunk 2

This part of the challenge focuses on building a professional resume using **HTML and CSS**, and deploying it as a **static website on Azure**, secured with **Cloudflare-provided SSL**.

🔗 **GitHub Repository**: [AmishGoel1/CloudResumeChallengeAzure](https://github.com/AmishGoel1/CloudResumeChallengeAzure)

---

## 📄 Step 1: HTML Resume

- Created `index.html` using **semantic HTML tags** such as `<main>`, `<section>`, and `<article>`.
- Structure mimics a two-page Word document using two main `<div>` containers styled with borders, white background, and shadow effects.
- Each resume section (e.g., Skills, Education, Experience) is separated semantically for readability and accessibility.

---

## 🎨 Step 2: CSS Styling

- Used **Meyerweb CSS reset** for clean, predictable styling across browsers.
- Applied **Flexbox** for layout alignment and page-like content positioning.
- Added subtle styling to simulate Word document feel: bordered divs, shadows, and white backgrounds.

---

## ☁️ Step 3: Hosting on Azure Static Website

- Created an **Azure Storage Account**.
- Enabled **Static Website** hosting, which generated the `$web` container.
- Uploaded `index.html` and `style.css` via the Azure Portal GUI.
- Azure serves the site at a static web endpoint:  
  🔹 `https://amishazurecloudchallenge.z5.web.core.windows.net`

---

## 🌍 Step 4: Custom Domain + SSL with Cloudflare

Initially, the custom domain (`come.workwithamish.me`) was mapped to the **blob endpoint**, but this caused:

- Query parameter errors at the root path (`/`)
- No valid SSL certificate for HTTPS

To fix this:
- Changed domain nameservers to **Cloudflare** (from Namecheap)
- Pointed DNS to the **Azure Static Website endpoint** instead of the blob storage endpoint
- Enabled **Cloudflare proxying** which:
  - Automatically issued a valid SSL certificate
  - Enforced HTTPS and TLS 1.2+ via **Edge Certificate settings**

### ✅ Final Live Site:
🌐 [https://come.workwithamish.me](https://come.workwithamish.me)

---

## 📌 Skills Demonstrated

- Semantic HTML and structured resume layout
- CSS styling with reset and Flexbox for layout
- Azure Static Website deployment using Storage Accounts
- DNS management using DigitalOcean and Cloudflare
- SSL setup and HTTPS enforcement without Azure CDN

---

## 💡 Next Iteration Ideas

- Add JavaScript for interactivity or dynamic data (e.g., hit counter via Azure Functions)
- Improve accessibility and keyboard navigation
- Convert to SPA using a lightweight JS framework (e.g., React or Svelte)
- Add animations or print-friendly PDF export option

---

> This project is part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), a practical hands-on initiative to strengthen cloud, web, and DevOps skills.