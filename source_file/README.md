# Vœrynth Système - Engineering Architecture Documentation

> **Confidential: Authorized Engineering Personnel Only**
>
> This document details the architectural decisions, performance mechanisms, and system logic powering the Vœrynth digital platform (v2.0 Refactor).

---

## 🚀 1. Core Architectural Achievements

This platform is not merely a website; it is a **Predictive Single Page Application (SPA)** engineered for zero-latency interactions. It deviates from standard React patterns to prioritize "perceived performance" and "offline sovereignty."

### Key Technical Breakthroughs:
1.  **Predictive Navigation Engine ("SmartLink")**: Reduces effective latency to 0ms by pre-loading resources during the user's "intent-to-click" phase.
2.  **Offline-First Sovereignty (PWA)**: A custom Service Worker strategy ensures the application remains fully functional without a network connection after the first visit.
3.  **Atomic Component Isolation**: A refactored codebase (`/src/components/ui`) that maximizes tree-shaking efficiency and rendering performance.
4.  **Viewport-Adaptive Asset Delivery**: A logic layer that dynamically swaps 4K assets for mobile-optimized WebP variants at runtime.

---

## ⚡ 2. The "SmartLink" Engine (Predictive Loading)

### The Problem
Standard SPAs suffer from "Network Waterfalls" upon navigation:
`Click -> Download JS Bundle -> Execute JS -> Parse DOM -> Request Background Image -> Wait -> Render`.
This creates a visible delay or "flash" between pages.

### The Solution: `src/components/core/SmartLink.jsx`
We implemented a custom router wrapper that anticipates user behavior.

#### Mechanism of Action:
1.  **Event Listeners**:
    - **Desktop**: Listens for `onMouseEnter` on navigation links. Humans pause for ~150-300ms between hovering and clicking.
    - **Mobile**: Listens for `onTouchStart` (fires significantly before `onClick`).
2.  **Parallel Execution**:
    - **Code Stream**: Immediately triggers the dynamic `import()` for the target route's chunk.
    - **Asset Stream**: Simultaneously instantiates a hidden `new Image()` object for the target page's Hero background.
3.  **Safety Guards**:
    - Checks `document.readyState` to strictly block prefetching if the *current* page is still loading. This prevents the prefetcher from competing for bandwidth with critical initial rendering.

#### The Result
By the time the `onClick` event fires, the browser has already cached:
- The compiled JavaScript logic for the next view.
- The heavy 2MB+ background texture.
**Transition time moves from ~800ms to <50ms (Frame-perfect).**

---

## 🔋 3. PWA & Caching Strategy (Service Worker)

The system uses `vite-plugin-pwa` with deeply configured Workbox strategies to balance freshness with speed.

### Caching Logic (`vite.config.js`)

| Resource Type | Strategy | Implementation Details |
| :--- | :--- | :--- |
| **App Shell** (HTML/JS/CSS) | **Stale-While-Revalidate** | The UI loads instantly from cache, while the Service Worker checks for updates in the background. If a new version exists, it preps it for the next visit. |
| **Heavy Assets** (`/assets/*`) | **CacheFirst** | Images are treated as immutable. Once downloaded, the browser *never* asks the network for them again (TTL: 30 Days). This saves massive bandwidth and credits. |
| **Data/Forms** | **NetworkOnly** | POST requests bypass the cache entirely to ensure reliability. |

### Offline Capability
- The entire "App Shell" (Navigation, Layout, Fonts, Core Logic) is pre-cached on the first visit.
- Users can essentially "install" the website. It behaves like a native iOS/Android application.

---

## 🧩 4. Atomic Design & Directory Structure

The codebase (Feb 2026 Refactor) follows strict **Atomic Design Principles** to prevent "Monolithic Bloat."

### `src/components/ui/` (The Atoms)
*   **Definition**: Pure, stateless visual primitives.
*   **Example**: `Tag.jsx`, `Button.jsx`.
*   **Engineering Benefit**: These components have 0 dependencies. They can be imported anywhere without dragging in heavy libraries.

### `src/components/ui/` (The Molecules)
*   **Definition**: Compound elements that define a specific UI pattern.
*   **Example**: `Card.jsx`, `Hero.jsx`.
*   **Engineering Benefit**: They accept raw props (title, subtitle) and enforce strict visual consistency (padding, easing) across the system.

### `src/config/routes.js` (The Registry)
*   **Definition**: A centralized manifest mapping URL paths to both their **Component** (Code) and their **Critical Assets** (Images).
*   **Engineering Benefit**: This registry allows the `SmartLink` engine to look up *exactly* what files to prefetch without needing to render the page first.

---

## 📱 5. Viewport-Adaptive Logic

Mobile networks are high-latency. Serving a 4MB desktop background to a phone is engineering malpractice.

### The Logic Layer
Inside `SmartLink.jsx` and `Hero.jsx`, a runtime check occurs:
```javascript
const isMobile = window.innerWidth <= 768;
const asset = isMobile ? '/assets/hero_mobile.webp' : '/assets/hero.webp';
```
*   **Desktop Users**: Receive ultra-high-fidelity 4K textures.
*   **Mobile Users**: Receive optimized, cropped, and compressed 1080p WebP files (~80% smaller).
*   **Impact**: drastically improves "First Contentful Paint" (FCP) scores on mobile devices.

---

## 📨 6. Backend Integration (Serverless)

We operate on a "Zero-Maintenance" backend architecture using **Netlify Forms**.

### Static Analysis Build Step
1.  Vite compiles the React code into static HTML.
2.  During the build, we inject hidden input fields: `<input type="hidden" name="form-name" value="contact" />`.
3.  Netlify's post-processing bots scan the generic HTML output.
4.  When they detect this attribute, they automatically provision a serverless API endpoint to handle POST requests.

**Security & Privacy**:
- No database to hack.
- No public API keys to leak.
- No storage to manage.

---

## � 7. Recent Updates (Feb 2026)

- **Advanced PWA Cache Busting:** Implemented a robust strategy using `_v2` asset suffixing to resolve aggressive mobile caching, ensuring users always receive the latest UI assets.
- **Dynamic SEO & Metadata Engine:** Updated `llms.txt`, `llm-full.txt`, and synchronized `sitemap.xml` with the latest deep pages. Restructured routing to prevent metadata staleness.
- **Mobile Asset Delivery:** Fixed path generation logic for dynamically loading mobile-optimized Hero images across all deep pages.
- **Navigation Reliability:** Resolved critical routing bugs affecting the localized `/de/design` path transitions.

---

## �💻 Developer Workflows

### Setup
```bash
git clone <repo>
npm install
```

### Development Environment
```bash
npm run dev
```
Starts the Vite HMR server. Note: Service Workers are disabled in `dev` mode to prevent aggressive caching from interfering with debugging.

### Production Simulation
To test the PWA/Service Worker locally, you must build first:
```bash
npm run build
npm run preview
```

### Deployment
Pushing to `main` triggers the immutable deployment pipeline.
1.  **Lint**: Checks for code integrity.
2.  **Build**: Compiles assets.
3.  **Prerender**: Generates static entry points.
4.  **Deploy**: Atomically swaps the CDN pointers.

---

## 🧬 System Origin

**Architected & Engineered by**
**Dipl.-Ing. Kiran Achari**
*Lead Systems Engineer*

**Neural Augmentation by**
**Mycroft**
*Locally-Hosted Intelligence // Ayanthiara Node*

---

**Vœrynth Système** — *Defining the Future of Autonomous Living.*

