# Carolina Canners Website

A responsive React website for Carolina Canners, designed as a professional business-facing frontend project. The site presents beverage manufacturing, packaging, warehousing, careers, and contact information through a clean multi-page experience.

## Live Site

GitHub Pages URL:

```text
https://smasifhossain.github.io/carolina-canners/
```

## Features

- Multi-page React application with GitHub Pages-compatible routing
- Responsive layout for mobile, tablet, and desktop screens
- Professional manufacturing-focused visual design
- Animated hero sections and scroll reveal effects
- Beverage category filtering
- Capabilities tabs for production, packaging, logistics, and quality
- Careers accordion for benefit information
- Contact form with client-side validation and success state
- Accessible navigation, form labels, focus states, and reduced-motion support

## Tech Stack

- HTML
- CSS Modules
- JavaScript
- React
- Vite
- React Router
- GitHub Pages

## Pages

- Home
- About
- Beverages
- Capabilities
- Careers
- Contact

## Getting Started

Clone the repository:

```bash
git clone https://github.com/smAsifHossain/carolina-canners.git
cd carolina-canners
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages using `HashRouter` and GitHub Actions.

Every push to the `main` branch runs the deployment workflow:

```text
.github/workflows/deploy.yml
```

The workflow installs dependencies, builds the Vite app, uploads the `dist` folder, and publishes it to GitHub Pages.

To verify the production build locally:

```bash
npm run build
```

Enable GitHub Pages in the repository settings:

1. Go to **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Save.

## Developer

Developed by [S M Asif Hossain](https://www.linkedin.com/in/smasifhossain/).
