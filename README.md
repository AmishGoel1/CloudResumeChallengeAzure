# 🌐 Cloud Resume Challenge - Chunk 2

This part of the challenge focuses on building a professional resume using **HTML and CSS**, and deploying it as a **static website on Azure**.

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

## ☁️ Step 3: Hosting on Azure Static Web App

- Created an **Azure Storage Account**.
- Enabled **Static Website** hosting, which generated the `$web` container.
- Uploaded `index.html` and `style.css` to the `$web` container using the Azure Portal.
- Deployed successfully and can be accessed here:  
  🔗 [https://amishazurecloudchallenge.z5.web.core.windows.net/](https://amishazurecloudchallenge.z5.web.core.windows.net/)

---

## 🌍 Step 4: Custom Domain with HTTPS

- Attempted **Azure CDN**, but it’s not available for student accounts.
- Followed official [Azure documentation](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal#map-a-custom-domain-with-https-enabled) to map a custom domain.
- Created **CNAME record** in **DigitalOcean DNS settings** to point the custom domain to the Azure blob endpoint.
- Resume is now live with HTTPS at:  
  🌐 [https://come.workwithamish.me](https://come.workwithamish.me)

---

## ✅ Summary

This chunk demonstrates:
- Proficiency in semantic HTML/CSS.
- Ability to deploy and manage a static website using Azure services.
- Understanding of DNS and custom domain configuration with HTTPS.

---

> 💡 *Next Iteration Ideas*: Add animations, accessibility improvements, or transition to a single-page app framework like React for dynamic components.