# VŒRYNTH SYSTÈME - PRODUCTION & DEVELOPER GUIDE

## 🟢 SYSTEM STATUS: LIVE & OPERATIONAL
**Production URL**: [https://voerynth.netlify.app/](https://voerynth.netlify.app/)  
**Version**: 1.0.0 (Release Candidate)

---

## � Developer Onboarding & Architecture
This document serves as the master reference for developers maintaining or extending the Vœrynth codebase. The system is built as a high-performance SPA (Single Page Application) with serverless auxiliary functions.

### 📂 Directory Structure Breakdown

```
/
├── .eslintrc.cjs           # ESLint configuration (Strict mode, no unused vars)
├── index.html              # HTML Entry point (mounts src/main.jsx)
├── netlify.toml            # Deployment config (Redirects, Build settings)
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite build configuration
├── netlify/                # BACKEND (Serverless)
│   └── functions/
│       └── trigger-email.js # Node.js handler for form submissions
├── public/                 # STATIC ASSETS
│   ├── assets/             # Images & Logos (Served at /assets/...)
│   └── robots.txt          # SEO Crawl directives
└── src/                    # FRONTEND (React)
    ├── main.jsx            # Bootstrapper (Providers: Helmet, StrictMode)
    ├── App.jsx             # Router Hub & Global Layout Wrapper
    ├── index.css           # Tailwind Imports & Global CSS Variables
    ├── components/         # Reusable UI Primitives
    └── pages/              # View Controllers (One per route)
```

---

## 🏛️ Frontend Architecture (`src/`)

### 1. Routing & Layout (`App.jsx`)
- **Router**: Uses `react-router-dom` (v6).
- **Structure**: `App.jsx` acts as the layout shell. It renders the global `Navigation`, `Background`, `NoiseOverlay`, and `Footer` *outside* the route switches, ensuring they persist across page transitions.
- **Lazy Loading**: All pages are lazy-loaded (`React.lazy`) to minimize initial bundle size.

### 2. Component Design (`src/components/`)
We use a "Composition over Inheritance" approach. Key primitives found in `UI.jsx`:
- **`<Hero />`**: Standardized page header with background image handling.
- **`<Section />`**: Layout wrapper ensuring consistent padding/margins.
- **`<Card />`**: Reusable interactive element for grid layouts.
- **`<Navigation />`**: Handles active state styling and the mobile menu overlay logic.

### 3. Page Logic (`src/pages/`)
Each page is a self-contained view.
- **State**: Strictly local. Only used for form handling (e.g., `Contact.jsx`) or local UI toggles.
- **Assets**: Images are referenced via absolute paths to `/assets/...` in `public/`.
- **SEO**: Every page renders a `<SEO />` component to set distinct Title/Description tags.

---

## ☁️ Backend Architecture (`netlify/`)

The site uses **Netlify Functions** to handle logic that requires secrecy (API keys).

### Email Trigger (`netlify/functions/trigger-email.js`)
- **Role**: Middleware between the frontend form and the email delivery provider.
- **Workflow**:
  1. Frontend sends POST request with JSON body (`{ name, email, ... }`).
  2. Function validates request method.
  3. Function retrieves `NETLIFY_EMAILS_SECRET` from server environment (never exposed to client).
  4. Dispatches email and returns success/error to frontend.

---

## 🎨 Design System & Styling

### Technology
- **Tailwind CSS**: Utility-first styling.
- **Framer Motion**: Physical-based animations.

### Aesthetics (The "Rolex Showroom" Standard)
- **Colors**: defined in `tailwind.config.js` (if strictly extended) or raw CSS.
  - *Primary*: `#D4AF37` (Gold/Amber)
  - *Background*: `#0A0A0A` (Deep Charcoal)
- **Animation Doctrine**:
  - DO: Slow, ease-out transitions (`duration: 1.2s`, `ease: [0.22, 1, 0.36, 1]`).
  - DON'T: Fast, bouncy, or spring-based animations. The brand is "calm authority."
- **Typography**: `Kumbh Sans`. Light weights (300/400) preferred.

---

## �️ Maintenance & Operations

### Standard Workflows

**1. Development Server**
```bash
npm run dev
# Runs at http://localhost:5173
```

**2. Production Build**
```bash
npm run build
# Outputs to /dist directory
```

**3. Linting**
```bash
npm run lint
# MUST pass before deployment. 
# fixes: check .eslintrc.cjs for rules.
```

### Environment Variables
Required in Netlify Dashboard for full functionality:
- `NETLIFY_EMAILS_SECRET`: Authorization for email service.
- `SENDER_EMAIL`: Configured sender address.

---

## 🏁 Quality Checklist for New Features
Before merging any new code:
1. **Responsiveness**: Does it stack correctly on mobile?
2. **Aesthetics**: Does it use the specific gold/charcoal palette? (No default blue/reds).
3. **Motion**: Are animations slow and subtle?
4. **Linting**: Did `npm run lint` pass without warnings?
