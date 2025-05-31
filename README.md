# 🌐 Cloud Resume Challenge - Chunk 2

This part of the challenge focuses on building a professional resume using **HTML, CSS**, and **JavaScript**, and deploying it as a **static website on Azure**, secured with **Cloudflare-provided SSL**.

🔗 **GitHub Repository**: [AmishGoel1/CloudResumeChallengeAzure](https://github.com/AmishGoel1/CloudResumeChallengeAzure)

---

## 📄 Step 1: HTML Resume

- Created `index.html` using **semantic HTML tags** like `<main>`, `<section>`, and `<article>`.
- Structured to mimic a two-page Word document using two main `<div>` containers styled with borders, white background, and shadow effects.

---

## 🎨 Step 2: CSS Styling

- Used **Meyerweb CSS reset** for consistent styling across browsers.
- Flexbox used for layout alignment and page-like content positioning.
- Subtle styling to mimic Word document: bordered divs, shadows, and white backgrounds.

---

## ☁️ Step 3: Hosting on Azure Static Website

- Created an **Azure Storage Account**.
- Enabled **Static Website** hosting and uploaded the `index.html` and `style.css`.
- Live site hosted at:  
  🔹 `https://amishazurecloudchallenge.z5.web.core.windows.net`

---

## 🌍 Step 4: Custom Domain + SSL with Cloudflare

- Mapped custom domain `come.workwithamish.me` to the static web endpoint.
- Configured Cloudflare DNS and SSL to secure HTTPS traffic.

✅ Final Live Site:  
🌐 [https://come.workwithamish.me](https://come.workwithamish.me)

---

## 🖥️ Step 5: Adding JavaScript Interactivity

- Added a **visitor counter** using JavaScript and an Azure Function API.
- Fixed **CORS errors** by updating Azure Function’s CORS settings to allow `*`.
- Centered `<p>` inside `<div>` with CSS and updated the number dynamically.

---

## ✅ Next Steps

11. **Tests**  
- Include tests for the **Python API** code using frameworks like **pytest**.

12. **Infrastructure as Code**  
- Define the **Azure Function** and **CosmosDB table** in an **ARM template** (Consumption plan) instead of manual Azure console configurations.

14. **CI/CD (Back end)**  
- Set up **GitHub Actions** to:  
  - Run Python tests on every push.  
  - If tests pass, deploy the ARM template and Python code to Azure.

15. **CI/CD (Front end)**  
- Create a second **GitHub repository** for the website code.  
- Use **GitHub Actions** to deploy updates to the Azure Static Website container automatically.  
- (Optional) Purge the Azure CDN endpoint in the workflow.  
- **Important:** Do not commit **Azure credentials** to source control – use secrets or environment variables!

---

> This project is part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), a practical, hands-on initiative to strengthen cloud, web, and DevOps skills.