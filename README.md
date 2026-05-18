

https://github.com/user-attachments/assets/091c4211-81d6-433c-ba15-d1d689b6ed10

# Creatus Technologies Scan-to-CAD Landing Page

A professional, conversion-focused landing page for **Creatus Technologies - 3D Scan to CAD & Reverse Engineering Services**. The page is built with React and Tailwind CSS, with a responsive industrial design, clear section flow, and a frontend-only quote request form.

## Live Preview

Local development URL:

```bash
http://127.0.0.1:5173
```

## Project Overview

This landing page is designed to generate leads for scan-to-CAD and reverse engineering services in NSW. It presents the service value proposition clearly, builds trust through workflow compatibility, and guides visitors toward submitting a project quote request.

## Features

- Clean, modern industrial UI
- Fully responsive layout for mobile, tablet, and desktop
- Sticky header with contact details and working navigation links
- Hero section with high-contrast CTA and right-side image
- Trust bar for CAD workflow compatibility
- Two-column main content and quote form layout
- Feature cards with icons and numbered visual treatment
- Industry cards for mining, automotive, manufacturing, and heritage use cases
- Three-step reverse engineering process section
- Native file compatibility section
- Final call-to-action section
- Frontend-only form with required fields and submission feedback
- Optimized production build with Vite

## Page Structure

1. Header
2. Hero Section
3. Trust Bar
4. Main Content + Quote Form
5. Feature Cards
6. Industry Section
7. Process Section
8. Workflow Compatibility
9. Final CTA
10. Footer

## Tech Stack

- React
- Tailwind CSS
- Vite
- Lucide React icons

## Getting Started

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

## Project Structure

```text
.
├── public/
│   └── assets/
│       └── scan-cad-hero.jpg
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Form Behavior

The quote form is implemented as a frontend-only demo form. It includes:

- Name, email, and phone as required fields
- Optional file upload field
- Optional comments field
- Success message after submission

No backend or email service is connected.

## Deployment

The project can be deployed to any static hosting platform that supports Vite builds, such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Use the following build settings:

```text
Build command: npm run build
Output directory: dist
```

## Notes

The original company logo attachment was not available in the local workspace, so the header currently uses a professional Creatus Technologies placeholder mark. It can be replaced with the final logo asset in the header component.
