# Sage.com UI Kit Navigation Style Guide

This document defines the layout, colors, typography rules, and reference code templates for the Sage Intacct header navigation system, based on the Sage.com UI Kit v3.0 (Node 268-61246).

---

## 1. Specifications & Core Tokens

### Color System
* **Primary White (90% White)**: `rgba(255, 255, 255, 0.9)` or `#FFFFFFE6`.
  * Used as the text color for all top-navigation links and sub-navigation links.
* **Secondary Navigation Background (S4)**: `#1B1B1B` (Charcoal Black).
  * The background color of the sub-navigation header.
* **Top Navigation Background**: `#000000` (Pure Black).

### Typography Guidelines
* **Product Name (Sub-Nav)**: `18px` H5 (Sage UI Medium, weight `500`).
* **Navigation Links**: `14px` (Sage UI Regular/Medium, weight `500`).
* **UI Elements (Sage UI)**: Used for navigations, buttons, menus, and CTAs.
* **Website Copy (Sage Text & Headline)**: Used for section headings, body paragraphs, and list copy.

### Layout & Spacing
* **Container**: Max-width `1280px` centered, padding `0 64px`.
* **Sub-Navigation Left Alignments**:
  * **Logo Block**: Sage Intacct brand icon (width/height `28px`).
  * **Product Name**: Placed next to the icon, styled `18px` in **Primary White**.
* **Sub-Navigation Right Alignments**:
  * **Navigation Links**: Overview (active), Product capabilities, Extended capabilities, Industry, Partners, •••.
  * Active state ("Overview") uses font weight `700` (Bold) and a green bottom border indicator (`border-bottom: 2px solid #00D639`).
  * **Phone & CTA Button**: far right. Phone link uses call icon (width/height `14px`). The CTA ("Request pricing") uses green pill style with bold text.

---

## 2. Reference Implementation Templates

### HTML Structure
```html
<!-- Top Navigation Header -->
<nav class="top-nav">
  <div class="container top-nav__inner">
    <div class="top-nav__left">
      <a href="#" class="top-nav__logo">
        <img src="asset/Sage_logo.svg" alt="Sage logo" height="26">
      </a>
      <ul class="top-nav__links">
        <li><a href="#">Products &amp; Solutions</a></li>
        <li><a href="#">Accountants</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </div>
    <div class="top-nav__right">
      <button class="top-nav__search" aria-label="Search">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
      <button class="btn btn-outline-white btn-sm">Login</button>
    </div>
  </div>
</nav>

<!-- Sub Navigation Header (S4 Background, Right-Aligned Menu) -->
<nav class="sub-nav">
  <div class="container sub-nav__inner">
    <a href="#" class="sub-nav__brand">
      <img src="asset/Sage Intacct.svg" alt="Sage Intacct icon" width="28" height="28" class="sub-nav__logo-icon">
      <span class="sub-nav__product-name">Sage Intacct</span>
    </a>
    
    <div class="sub-nav__right-group">
      <ul class="sub-nav__links">
        <li><a href="#product" class="is-active">Overview</a></li>
        <li><a href="#scenes">Product capabilities</a></li>
        <li><a href="#platform">Extended capabilities</a></li>
        <li><a href="#platform">Industry</a></li>
        <li><a href="#demo">Partners</a></li>
        <li><a href="#" class="dots-icon">•••</a></li>
      </ul>
      
      <div class="sub-nav__actions">
        <a href="tel:1-877-437-7765" class="sub-nav__phone">
          <img src="asset/call.svg" alt="Phone" width="14" height="14" class="phone-icon-svg">
          1-877-437-7765
        </a>
        <a href="#demo" class="btn btn-green btn-sm" style="font-weight:700">Request pricing</a>
      </div>
    </div>
  </div>
</nav>
```

### CSS Rules
```css
/* Color & Opacity Tokens */
:root {
  --gray-scale-gray-s4: #1B1B1B;
  --primary-white-nav: rgba(255, 255, 255, 0.9);
}

.top-nav {
  height: 48px;
  background: var(--primary-colors-black);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 700;
}
.top-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.top-nav__left {
  display: flex;
  align-items: center;
  gap: 40px;
}
.top-nav__links {
  display: flex;
  gap: 24px;
  list-style: none;
}
.top-nav__links a {
  font-size: 13px;
  font-weight: 500;
  color: var(--primary-white-nav);
  transition: color 0.15s;
}
.top-nav__links a:hover {
  color: var(--primary-colors-white);
}
.top-nav__right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.top-nav__search {
  color: var(--primary-white-nav);
  display: flex;
  align-items: center;
  transition: color 0.15s;
}

.sub-nav {
  height: 60px;
  background: var(--gray-scale-gray-s4); /* S4 background */
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: sticky;
  top: 0;
  z-index: 690;
}
.sub-nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.sub-nav__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sub-nav__product-name {
  font-family: var(--font-b);
  font-size: 18px; /* H5 size */
  font-weight: 500;
  color: var(--primary-white-nav);
}
.sub-nav__right-group {
  display: flex;
  align-items: center;
  gap: 40px;
  flex: 1;
  justify-content: flex-end;
}
.sub-nav__links {
  display: flex;
  gap: 24px;
  list-style: none;
}
.sub-nav__links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-white-nav);
  padding: 6px 0;
  transition: color 0.15s;
}
.sub-nav__links a:hover,
.sub-nav__links a.is-active {
  color: var(--primary-colors-white);
}
.sub-nav__links a.is-active {
  border-bottom: 2px solid var(--primary-colors-brilliant-green);
}
.sub-nav__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
.sub-nav__phone {
  font-size: 14px;
  color: var(--primary-white-nav);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
```
