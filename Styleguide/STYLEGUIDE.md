# Sage UI Kit v3.0 — Design System Instructions & Guidelines

This document serves as the absolute source of truth for the **Sage UI Kit v3.0** design system. When designing, implementing, or styling web interfaces in this project, you must follow the rules, apply the design tokens, and utilize the structural layouts detailed below.

---

## 1. Core Implementation Rule
Always reference the central CSS design tokens file at the top of the HTML files:
```html
<link rel="stylesheet" href="design-tokens.css">
```

All the fonts are under /src/font. Please only use these font
Use the CSS variables defined in this stylesheet instead of hardcoding raw hex/RGB values.

---

## 2. Color Tokens

### Primary Brand Colors
* **Brilliant Green**: `var(--brilliant-green, #00D639)` — High-vibe primary color.
* **Black**: `var(--black, #000000)` — Deep body/background tone.
* **White**: `var(--white, #FFFFFF)` — Core content area base.

### Adjusted Jade (Accessibility Override)
* **Adjusted Jade**: `var(--adjusted-jade, #008146)`
  > Use this color for UI elements and text on light backgrounds to meet WCAG 2.1 AA contrast requirements instead of Brilliant Green.

### Gray Scale Palette
* **Gray S4 (Secondary Nav Bg)**: `var(--gray-s4, #1B1B1B)`
* **Gray S3**: `var(--gray-s3, #303030)`
* **Gray S2**: `var(--gray-s2, #474747)`
* **Gray S1**: `var(--gray-s1, #5E5E5E)`
* **Gray T1**: `var(--gray-t1, #777777)`
* **Gray T2**: `var(--gray-t2, #919191)`
* **Gray T3**: `var(--gray-t3, #ABABAB)`
* **Gray T4**: `var(--gray-t4, #C6C6C6)`
* **Gray T5**: `var(--gray-t5, #E2E2E2)`
* **Gray T6 (Container Fill)**: `var(--gray-t6, #F0F0F0)`

### Semantic Utility Colors
* **Positive (Success)**: `var(--positive, #008A21)`
* **Neutral (Info)**: `var(--neutral, #0060A7)`
* **Negative (Danger/Error)**: `var(--negative, #CD384B)`
* **Caution (Warning)**: `var(--caution, #EF6700)`
* **Focus**: `var(--focus, #FFB500)`

---

## 3. Sage Ai. Branding & Gradients
When branding Sage Ai. features or utilizing AI decorative elements:
* **Gradient Token Formula**: `linear-gradient(90deg, #00D639 0%, #0077FF 50%, #9417ED 100%)`
* **Logo/Text Gradient Implementation**:
  ```css
  background: linear-gradient(90deg, #00D639 0%, #0077FF 50%, #9417ED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
  > AI colors and gradients must ONLY be used on sections, elements, or context areas where AI features are actively used or described. Do not use AI colors for generic non-AI styling.

---

## 4. Typography Rules

### Font Families
* **Headings/Display**: `'Sage Headline'`, sans-serif; (Black style, `font-weight: 900`)
* **Body & Controls**: `'Sage Text'`, sans-serif; (Light `300`, Regular `400`, Medium `500`, Bold `700`)

### Font Sizes & Hierarchy
* **Display 3**: `44px`
* **Display 4**: `38px`
* **Heading 1**: `34px`
* **Heading 2**: `27px`
* **Heading 3**: `23px`
* **Heading 4**: `19px`
* **Heading 5 (Nav Product Title)**: `18px`
* **Heading 5 (Standard)**: `16px`
* **Heading 6**: `14px`
* **Body xxl**: `20px`
* **Body xl**: `18px`
* **Body lg**: `16px`
* **Body / Normal**: `16px`
* **Body sm**: `14px`
* **Micro / Labels**: `10.5px`

---

## 5. UI Layout, Components & Specs

### Navigation Layout & Header
* **Primary White Links**: `rgba(255, 255, 255, 0.9)` (#FFFFFFE6). All navigation text/links must use this color.
* **Secondary Nav Background**: S4 gray color (`#1B1B1B`).
* **Product Title**: H5 size (`18px`), placed immediately next to the logo icon.
* **Menu Alignment**: Link groups (Overview, capabilities, etc.) must be right-aligned in the navigation bar.

### Buttons
* **Shape**: Rounded capsule / pill shape (`border-radius: 100px` or minimum `24px`).
* **Primary Buttons (Light Theme)**: Solid black background, white text.
* **Secondary Buttons (Light Theme)**: White background, black border (`1px solid #000000`), black text.
* **Primary Buttons (Dark Theme)**: Solid white background, black text.
* **Secondary Buttons (Dark Theme)**: Transparent background, white border (`1px solid #FFFFFF`), white text.
* **Interactive Hover States**: Smooth scale transition `scale(1.02)` or a light overlay highlight.

### Toggles / Switches
* **Shape**: Round-ended capsule width `50px`, height `28px`.
* **Active state background**: `--brilliant-green`.
* **Slider knob**: Circle, white, offset `4px` from inner borders, with subtle drop-shadow.

---

## 6. Copilot Modal Specific Guidelines

### Layout & Sizing
* **Sidebar Mode Width**: `240px` (fits along the right side of the screen).
* **Collapsed Mode Layout**: Anchored to the bottom-right corner (`bottom: 12px`, `right: 0`), keeping the same width (`240px`) and height (`170px`). Transition between states must take exactly **1s** using `cubic-bezier(0.25, 1, 0.5, 1)`.
* **Docked Border-Radius**: In the collapsed state, the modal should have a rounded border only on its exposed edges (`border-radius: 12px 0 0 12px`).

### Component Toggles in Collapsed Mode
When the Copilot modal transitions into the collapsed state, it must hide auxiliary controls to show **only** the header, the variance title, and the table:
* `.copilot-tabs` -> `display: none !important;`
* `.copilot-footer-text` -> `display: none !important;`
* `.copilot-placeholders` -> `display: none !important;`

### Font Sizes & Spacings
* **Title, Tabs, and List Text**: Set exactly to `10.5px` to keep insights and lists clean, compact, and on single lines.
* **General Modal Padding**: `6px` all around.
* **Checklist List Row Spacing**: Row gaps are set to `2px` and list item vertical padding to `2px 0`.

### Tab Styling (Insights & Chat History)
* **Design**: Flat styled text (no button borders, box shadows, or container backgrounds). 
* **Alignment**: The "Insights" tab is left-aligned, and the "Chat history" tab is right-aligned. The background of the `.copilot-tabs` row wrapper remains light gray (`#F0F0F0`) with `6px` padding.
* **Status Dot**: Active tabs feature a small green dot (`width: 6px; height: 6px; background: #00D639`).

### Exclamation Badges (Checklist Warnings)
* **Colors**: Alert exclamation badges must use a solid orange background (`#EF6700`) with a white exclamation symbol (`!`).

### Variance Table Styling
* **Headers**: Left-aligned, bold, transparent background, with a thick `2.5px` dark bottom border.
* **Data Rows**: Left-aligned, with a thin `1.5px` dark bottom border.
* **Numbers**: Values must exclude currency symbols (e.g., `177,732` instead of `$177,732`) and be underlined.
* **Alert Row (Variance)**: Positive variance row text is styled bold, colored red (`#CD384B`), and underlined in red.
