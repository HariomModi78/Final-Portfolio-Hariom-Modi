# 🍙 HARIOM MODI — Software Engineer | Full Stack Developer (MERN)

> A personalized, production-quality developer portfolio website for **Hariom Modi**, built with **React + Vite**, **GSAP**, and **Lenis** following an art-directed **Manga × Neo-Brutalism × Japanese Comic Editorial** design language.

![Portfolio Aesthetic](https://img.shields.io/badge/Aesthetic-Manga%20%C3%97%20Neo--Brutalism-E43D30?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20GSAP%20%7C%20Lenis-171717?style=for-the-badge)
![Source of Truth](https://img.shields.io/badge/Verified%20Facts-100%25%20Authentic-10B981?style=for-the-badge)

---

## 👤 Verified Identity & Credentials

- **Name:** Hariom Modi
- **Professional Title:** Software Engineer | Full Stack Developer (MERN)
- **Location:** Dewas, Madhya Pradesh, India
- **Email:** [hariommodi7898@gmail.com](mailto:hariommodi7898@gmail.com)
- **Phone:** +91-7898488935
- **LinkedIn:** [linkedin.com/in/hariom-modi-a60021318](https://linkedin.com/in/hariom-modi-a60021318)
- **GitHub:** [github.com/HariomModi78](https://github.com/HariomModi78)
- **Education:**
  - **B.Tech (Computer Science & Engineering)** — Shri Vaishnav Vidyapeeth Vishwavidyalaya (2023–2027) | CGPA: 6.8/10
  - **Class XII (MP Board)** — Govt. Model H.S. School, Dewas (2023) | 81.40%
  - **Class X (MP Board)** — Govt. Model H.S. School, Dewas (2021) | 82.00%
- **Key Achievements & Community:**
  - **60+ LeetCode Problems Solved** in Data Structures & Algorithms
  - **Member of Google Developer Group (GDG)**

---

## 🚀 Flagship Project: Max Battle

- **Project Name:** Tournament Organizing Application
- **Brand:** Max Battle
- **Live Deployment:** [https://max-battle.onrender.com](https://max-battle.onrender.com)
- **Tech Stack:** EJS, Node.js, Express.js, MongoDB, RESTful APIs
- **Description:** A full-stack web application designed to organize sports and gaming tournaments efficiently.
- **Key Features:**
  - Team registration & roster management
  - Automated match scheduling and brackets
  - Tournament result management & standings
  - Tournament workflow automation
  - RESTful API development
  - MongoDB data modeling

---

## 🎨 Visual Identity & Design System

- **Color Palette:**
  - Primary Background: `#FFFFFF`
  - Secondary Background: `#F8F8F8`
  - Vermilion Red Accent: `#E43D30`
  - Ink Black: `#171717`
  - Secondary Text: `#6B7280`
  - Light Red Tint: `#FCE8E6`
- **Typography:**
  - Headings: `Space Grotesk` (Bold, uppercase, oversized)
  - Body Text: `Inter`
  - Comic Annotations: `Caveat` & `Permanent Marker`
- **Comic Details:**
  - 2.5px - 3px solid black outlines
  - Offset shadows (`4px 4px 0px #171717`, `6px 6px 0px #171717`)
  - Red angled chapter tags (`CHAPTER 01 : INTRODUCTION`, `CHAPTER 02 : WHO AM I?`, etc.)
  - Speech bubbles (`"BUILD. BREAK. LEARN. REPEAT."`)
  - Halftone dot backgrounds, hand-drawn annotations, and corner paper stamps

---

## 📂 Project Architecture

```
src/
├── assets/
│   └── images/              # Extracted manga illustrations & project covers
├── components/
│   ├── ChapterLabel.jsx     # Comic chapter badges
│   ├── CornerStamps.jsx     # Manga corner paper outline stamps
│   ├── Footer.jsx           # Manga brand footer with verified links
│   ├── MangaBanner.jsx      # Reusable comic CTA banner
│   ├── Navbar.jsx           # Responsive header with mobile drawer
│   └── ProjectCard.jsx      # Neo-brutalist project cards with modal
├── data/
│   ├── education.js         # Verified academic milestones & achievements
│   ├── personalInfo.js      # Central source of truth for identity & bio
│   ├── projects.js          # Verified projects (Max Battle)
│   └── skills.js            # Categorized technical arsenal
├── hooks/
│   └── useLenis.js          # Smooth Lenis scrolling hook with GSAP sync
├── animations/
│   ├── gsapConfig.js        # GSAP & ScrollTrigger setup
│   └── animations.js        # Timeline entrance and scroll reveal helpers
├── pages/
│   ├── Home.jsx             # Chapter 01: Hero + verified stats + featured work
│   ├── About.jsx            # Chapter 02: Bio, objective, interests, approach
│   ├── Projects.jsx         # Chapter 03: Selected Work (Max Battle showcase)
│   ├── Skills.jsx           # Chapter 04: Technical Arsenal by category
│   ├── Education.jsx        # Chapter 05: Academic Journey + Chapter 06: GDG & LeetCode
│   └── Contact.jsx          # Final Chapter: Direct channels, form & resume download
├── styles/
│   ├── global.css           # Tokens, reset, buttons, badges
│   ├── components.css       # Nav, footer, cards, modals
│   └── pages.css            # Section and layout styling
├── App.jsx                  # React Router DOM configuration
└── main.jsx                 # Vite application entry point
public/
└── Hariom_Modi_Resume.pdf   # Verified downloadable resume PDF
```

---

## 🛠️ Local Development & Build

```bash
# Navigate to the workspace
cd HariomModiPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build
```bash
# Build production bundle into /dist
npm run build

# Preview production build locally
npm run preview
```
