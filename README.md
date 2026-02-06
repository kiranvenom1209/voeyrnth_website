# Vœrynth Système

> **Excellence. Innovation. Security.**

Welcome to the official repository for the **Vœrynth Système** web platform. This project represents the digital storefront and interface for the world's most advanced automated ecosystem.

---

## 🔒 Proprietary Notice

**Copyright © 2026 Vœrynth Système. All Rights Reserved.**

This project and all its contents are **NOT OPEN SOURCE**.
Unauthorized use, reproduction, distribution, or modification of this codebase is strictly prohibited.
Please refer to the `LICENSE` file for detailed legal terms.

---

## 🏗️ Technical Architecture

This project is built using a modern, high-performance technology stack designed for scalability, speed, and visual impact.

### Core Stack
- **Framework**: [React](https://react.dev/) (v18+)
- **Build Tool**: [Vite](https://vitejs.dev/) - For ultra-fast development and optimized production builds.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid, responsive UI development.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - For complex, production-ready animations.
- **Routing**: [React Router](https://reactrouter.com/) (v7) - Client-side routing.
- **Icons**: [Lucide React](https://lucide.dev/) - Clean, consistent iconography.
- **SEO**: [React Helmet Async](https://www.npmjs.com/package/react-helmet-async) - Managing document head for SEO.

---

## ⚡ The "Instant Navigation" Engine

The platform implements a bespoke prefetching system designed to eliminate perceived latency. This system creates a "localhost-like" feel by aggressively pre-loading resources before the user clicks.

### 1. The Route Registry (`src/config/routes.js`)
Unlike standard routers that just map paths to components, our registry maps paths to **resources**:
```javascript
'/about': {
    component: () => import('../pages/About'),      // The Code (Lazy Loaded Chunk)
    preload: ['/assets/about_hero_bg.webp']         // The Assets (Critical Images)
}
```

### 2. The SmartLink Triggers (`src/components/core/SmartLink.jsx`)
We wrap `react-router-dom`'s Link component to detect user intent:
- **Desktop**: Listens for `onMouseEnter`.
- **Mobile**: Listens for `onTouchStart`.

When triggered, the system:
1.  **Fetches Code**: Calls the dynamic import immediately.
2.  **Fetches Content**: Creates a hidden `Image` object to force the browser to download the large Hero background.

### 3. The Safety Guard
To prevent aggressive prefetching from slowing down the *current* page load (bandwidth competition), the system includes a check:
```javascript
if (document.readyState !== 'complete') return;
```
Prefetching is strictly blocked until the active page has fully finished loading.

---

## 🧩 Atomic Design Structure

The project has been refactored (Feb 2026) to follow a strict Atomic/Modular design philosophy:

### `src/components/ui/` (Atoms & Molecules)
Low-level, reusable visual primitives. These contain **no business logic**.
- `Hero.jsx`: Standardized page headers with background image handling.
- `Card.jsx`: Interactive cards for grid layouts.
- `Section.jsx`: Wrapper for consistent padding and animation entry.
- `Tag.jsx`: Stylized text badges.

### `src/components/layout/` (Organisms)
Structural components that appear on every page.
- `Navigation.jsx`: The main top bar.
- `Footer.jsx`: The site footer.
- `ScrollToTop.jsx`: Utility to reset scroll position on route change.

### `src/components/core/` (System Logic)
Non-visual or logic-heavy components.
- `SEO.jsx`: Manages `<head>` tags (Title, Meta Description, Canonical URLs).
- `SmartLink.jsx`: The prefetching logic described above.
- `SuccessModal.jsx`: Feedback overlay for form submissions.

### `src/pages/` (Templates)
The actual views (Home, About, Contact). These components strictly compose `ui` and `layout` elements. They should contain minimal styling, focusing instead on content and structure.

---

## 📨 Forms & Netlify Integration

The project uses [Netlify Forms](https://docs.netlify.com/forms/setup/) for serverless data collection.

### How It Works
1.  **Frontend**: Forms (in `Contact.jsx` and `PrivateAccess.jsx`) include a hidden input: `<input type="hidden" name="form-name" value="contact" />`.
2.  **Build Time**: Netlify's build bots scan the HTML (generated during the build) for this attribute and automatically create a backend handler.
3.  **Submission**: Data is sent via a standard `POST` request to `/`.
4.  **Dashboard**: Submissions appear instantly in the Netlify project dashboard.

*Note: Custom serverless functions (e.g., `trigger-email`) have been deprecated in favor of this native integration.*

---

## 📂 Directory Structure

```text
voerynth-website/
├── public/                  # Static public assets
│   ├── assets/              # WebP images and media
│   └── bimi/                # Brand indicators
├── src/
│   ├── components/
│   │   ├── core/            # System logic (SEO, SmartLink)
│   │   ├── layout/          # Global structure (Nav, Footer)
│   │   └── ui/              # Visual primitives (Hero, Card)
│   ├── config/              # Central configuration (routes.js)
│   ├── pages/               # Route views
│   ├── App.jsx              # Router entry point
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives
├── templates/
│   └── email/               # HTML Email templates (Reference only)
├── netlify.toml             # Deployment settings
└── package.json             # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
git clone https://github.com/kiranvenom1209/voeyrnth_website.git
cd voeyrnth_website
npm install
```

### Development
```bash
npm run dev
```
Starts local server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Generates optimized static files in `dist/`.

---

## 🛡️ Security & Compliance

- **Zero Telemetry**: We do not use Google Analytics or third-party trackers.
- **Local Sovereignty**: Architecture is designed to run locally if needed.
- **Dependencies**: All packages are locked via `package-lock.json` to prevent supply chain drift.
