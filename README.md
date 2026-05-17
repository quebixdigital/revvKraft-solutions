# RevvKraft Solutions

A premium, high-performance digital presence built for **RevvKraft Solutions**—a top-tier agency specializing in B2B Sales Growth Consulting, Digital Marketing (Done for You), and Exhibition Stall Design & Manufacturing.

This repository contains the complete frontend architecture, designed with modern aesthetics, fluid typography, smooth animation systems, and seamless navigation layouts.

---

## 🚀 Key Features

- **Premium Modern Aesthetics**: Harmonious dark theme styling, glassmorphism elements, subtle gradients, and Outfit / Space Grotesk / Kanit typography.
- **GSAP ScrollSmoother**: Smooth scroll acceleration and inertial scrolling across all pages for an ultra-luxurious user experience.
- **GSAP Horizontal Timeline**: An interactive, custom-built GSAP scroll-triggered horizontal scroll workflow timeline on the Solutions page.
- **Responsive Fluid Layouts**: Fluid container structures, responsive navigation sidebar overlay, and media query breakpoints optimized for all devices (Mobile to Ultra-Wide Desktop).
- **SEO & Performance Best Practices**: Semantic HTML5 structure (single `<h1>` per page), proper heading hierarchies, image lazy-loading (`loading="lazy"`), and metadata optimization.
- **Floating Actions**: Highly noticeable pulsing call button for quick business conversions.

---

## 🛠️ Tech Stack & Vendor Integration

The site is built with highly optimized vanilla technologies and premium animation libraries:

- **HTML5 & Semantic Structure**: Solid, clean DOM structures optimized for crawlability and screen readers.
- **SCSS / CSS Grid & Flexbox**: Modular CSS built using SASS SCSS files (`about-style.scss`, `service-style.scss`, `main-style.scss`, `contact-style.scss`) compiled to a highly performant `style.css`.
- **GSAP (GreenSock Animation Platform)**:
  - `gsap.js` - Core animation engine.
  - `ScrollTrigger.js` - High-performance scroll-triggered events and animations.
  - `ScrollSmoother.js` - Luxury page scrolling wrapper.
  - `SplitText.js` - Advanced typography and text reveal animations.
- **Swiper & Slick Sliders**: Touch-responsive, accelerated sliders used for reviews, testimonials, and gallery sections.
- **Three.js & Hover Effects**: Used for premium micro-interactions and high-end image hover animations.

---

## 📁 Project Structure

```bash
revvKraft-solutions/
│
├── index.html                 # Homepage (Capabilities, Testimonials, Process, Grid Layouts)
├── about.html                 # About Us (Our Story, Brand Process, Vision, Leadership)
├── service.html               # Our Solutions (Sales Growth Consulting, Digital Marketing, Exhibition design)
├── portfolio.html             # Portfolio & Case Studies (Detailed Metrics, CTA, Methodology)
├── contact.html               # Contact Us (Interactive forms, location information, direct contact)
│
├── company-info.pdf           # RevvKraft Company Brochure / Profile
│
└── assets/
    ├── css/
    │   └── style.css          # Main compiled stylesheet with custom overrides
    │
    ├── scss/                  # Core SCSS modules
    │   ├── main-style.scss    # Home & Shared SCSS components
    │   ├── about-style.scss   # About us page specific layout SCSS
    │   ├── service-style.scss # Services / Solutions SCSS components
    │   └── contact-style.scss # Contact page components
    │
    ├── js/
    │   ├── custom.js          # GSAP Init, sliders setup, scroll behaviors, animations
    │   ├── sidebar.js         # Navigation overlay, active states, keypress events
    │   └── theme_switcher_to_dark.js # Dark theme state persistence
    │
    ├── vendor/                # Premium vendors (Bootstrap, GSAP, Swiper, jQuery, Waypoints)
    └── images/                # Local asset assets (Favicon, logos, layouts, etc.)
```

---

## ⚙️ Key Technical Implementations

### 1. Unified Sidebar Navigation Overlay (`sidebar.js`)
Fully accessible, standard sidebar overlay triggerable via right header toggle. Integrates overlay backdrop, escape-key triggers, responsive drop-downs for nested submenus, and automatic active page state highlighting.
```javascript
// Example implementation in sidebar.js
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".right-sidebar-button");
  const sidebar = document.querySelector(".right-sidebar");
  // ... Open/Close toggle methods ...
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const menuLinks = document.querySelectorAll(".menu-list a");
  
  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
```

### 2. Full-Width Screen Banners (CSS Cover Fit)
Banners are designed to break out of margins and span perfectly full screen widths:
```css
.about2-page-banner-section .about-banner-image .banner-img img,
.breadcrumb-section .breadcrumb-image-section .breadcrumb-img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
```

### 3. Dark Theme Optimization (`theme_switcher_to_dark.js`)
Forces standard dark theme globally to align with RevvKraft's modern branding guidelines:
```javascript
localStorage.setItem('theme', 'dark');
```

---

## 💻 Local Development Setup

To run and preview the website locally:

1. Clone or download this repository to your local directory.
2. If compiling styles from SCSS, target the entry point:
   `assets/scss/main-style.scss` -> outputs to `assets/css/style.css`
3. Serve using any standard local web server. Example using Node.js static server:
   ```bash
   npx serve ./
   ```
4. Open the local address in your browser (typically `http://localhost:3000`).

---

## 📄 Licensing & Standard
This site was created by **Durgesh Sonar**.

Developed & Designed by **Quebix Digital** for **RevvKraft Solutions**. All rights reserved © 2026.
