
# 🌐 Data Science Portfolio Website

[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-Animations-FF69B4?logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-React%20Bundler-yellow?logo=vite)](https://vitejs.dev/)
[![Deployed](https://img.shields.io/badge/Status-Live-green)](https://data-sci-portfolio-complete-ildk.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](LICENSE)

> 🎯 A modern, animated **Data Science Portfolio** built with **React + Vite + TailwindCSS**, showcasing end-to-end machine learning, analytics, and data engineering projects — including live API integrations and ML demos.

---

## 🧭 Overview

This responsive portfolio website highlights **Akshay Maniyampara’s** professional expertise in **Data Science, Machine Learning, and Motion Design**.
It’s designed as a dynamic one-page web app that blends **aesthetic design** with **data-driven storytelling**, integrating ML demos like the *Uber Trip Demand Forecaster* and other analytics projects.

---

## ✨ Features

* 🎞️ **Animated Hero Section** powered by Framer Motion
* ⚛️ **Vite + React** ultra-fast front-end build
* 🎨 **Custom Tailwind Theme** (dark mode + glowing accents)
* 🧠 **Projects Grid** dynamically listing ML & BI projects
* 🌈 **Particle Backgrounds** with `react-tsparticles`
* 💬 **Contact Form** (FormSubmit integration)
* 📱 Fully Responsive across all devices

---

## 📂 Project Structure

```
data-sci-portfolio-website/
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BGparticles.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Home.jsx
│   │   ├── Intro.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   └── assets/ (images, icons)
```

---

## 🖥️ Components Overview

| Component           | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| **Intro.jsx**       | Multilingual “Hello World” splash animation using Framer Motion.                 |
| **Home.jsx**        | Hero section — personal intro, animated photo, social links.                     |
| **About.jsx**       | Professional summary and highlights.                                             |
| **Education.jsx**   | Terminal-style education timeline (interactive).                                 |
| **Skills.jsx**      | Skill bars with proficiency percentages.                                         |
| **Projects.jsx**    | Dynamic grid showing ML, BI, and backend projects (Uber Forecast, AirBnB, etc.). |
| **Contact.jsx**     | Email form with autoresponse and anti-spam protection.                           |
| **BGparticles.jsx** | Animated particle background.                                                    |
| **Navbar.jsx**      | Responsive navigation (scroll + mobile toggle).                                  |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AKXLR8/data-sci-portfolio-website.git
cd data-sci-portfolio-website
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 🌈 Tech Stack

| Category               | Tools                      |
| ---------------------- | -------------------------- |
| **Frontend Framework** | React (Vite)               |
| **Styling**            | TailwindCSS, DaisyUI       |
| **Animation**          | Framer Motion, tsparticles |
| **Form Handling**      | FormSubmit API             |
| **Deployment**         | Vercel                     |
| **Version Control**    | Git + GitHub               |

---

## 🧩 Highlight: Featured Project – Uber Trip Demand Forecaster

One of the main showcased projects in this portfolio:

> A time-series ensemble ML model using XGBoost, Random Forest, and GBRT to forecast hourly Uber ride demand.
> Deployed via Flask API and integrated with the portfolio for live prediction demos.

**Tech:** Python · Flask · scikit-learn · XGBoost · Docker · Cloud Run
**GitHub:** [Uber Forecast Repo](https://github.com/AKXLR8/uber-trip-forecaster)

---

## 🎨 Theming & Design

* **Primary Color:** `#000000` (black)
* **Accent Color:** `#F5F5DC` (beige)
* **Font Family:** Sans-serif modern typeface
* **Animations:** Subtle glow and fade transitions
* **Layout:** Grid + Flexbox for responsiveness

Example Tailwind setup (from `tailwind.config.js`):

```js
extend: {
  colors: {
    primary: "#000000",
    accent: "#F5F5DC",
    beige: "#FDF6E3",
  },
  animation: {
    glow: "glow 2.5s ease-in-out infinite",
  },
}
```

---

## 🌐 Deployment (Vercel)

This project is deployed on **Vercel** for fast, CDN-optimized global hosting.

### Deploy via CLI

```bash
vercel --prod
```

### Live Demo

👉 **[data-sci-portfolio-complete-ildk.vercel.app](https://data-sci-portfolio-complete-ildk.vercel.app/)**

---

## 📸 Preview

*(You can add your screenshots later)*

```markdown
![Home Section](assets/preview_home.png)
![Projects Grid](assets/preview_projects.png)
![Education Terminal](assets/preview_education.png)
```

---

## 🧭 Future Enhancements

* Add live ML demo integration (Flask API + React frontend)
* Include blog section for data case studies
* Dark/light theme toggle
* Add analytics tracking (PostHog / Plausible)
