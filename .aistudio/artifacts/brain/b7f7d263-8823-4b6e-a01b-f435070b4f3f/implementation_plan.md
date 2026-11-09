# REBIRTH ATELIERS® — Minimal Wireframe Alignment & Editorial Refinement

Aligning the digital editorial experience and e-commerce platform with the exact compositions, negative space, and visual rhythm of the primary moodboard snippet (`image_0d728e63.png`), while preserving all existing commerce and content functionality.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed for this refinement phase:

- **Confirmed Decision 1 (Store Presentation)**: The Store will lead with the clean **2-column editorial card grid** (`STORE` title, `CURRENT DROP — REBIRTH // 01`, single-line category filter, high-contrast product imagery with clean metadata and minimal `+` quick-add actions) exactly as framed in Panel 02 of the snippet, while maintaining the **Spreadsheet Index** switch for archival collectors.
- **Confirmed Decision 2 (Material Textures & Heritage Photography)**: Subtle organic paper/concrete grain will be subtly integrated into the Contact and About headers, complemented by authentic **Table Mountain and Cape Town panoramic monochrome landscapes** at the base of the About, Gallery, and Contact pages as specified in the wireframes.
- **Confirmed Decision 3 (Magazine Page Transitions)**: Smooth editorial crossfade with subtle vertical settle (`opacity` and `translateY` micro-transition) when navigating between Home, Store, About, Gallery, and Contact.

---

### 1. Overview & Page-by-Page Alignment

```
┌────────────────────────────────────────────────────────────────────────┐
│                        01 / HOME (LANDING)                             │
│  [Dark Macro Wing Right] + [REBIRTH ATELIERS® Typography & 01\02\03]   │
│  ────────────────────────────────────────────────────────────────────  │
│  [REBIRTH // 01 Split: "A STUDY IN TRANSFORMATION" + 3 Texture Crops]  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        02 / STORE (EDITORIAL GRID)                     │
│  [STORE / CURRENT DROP — REBIRTH // 01]                                │
│  [ALL  HOODIES  SWEATS  PANTS  ACCESSORIES          SORT: NEWEST v]    │
│  ┌───────────────────────────────┬───────────────────────────────────┐ │
│  │ Marble Hoodie        R1,750 + │ Marble Sweatpants        R1,650 + │ │
│  ├───────────────────────────────┼───────────────────────────────────┤ │
│  │ Rebirth Hoodie       R1,750 + │ Ateliers Sweatpants      R1,650 + │ │
│  └───────────────────────────────┴───────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        03 / ABOUT                                      │
│  [ABOUT REBIRTH ATELIERS®] ───▶ [Motion-Blurred Moth Wing Visual]      │
│  [Statement: "A CLOTHING LABEL BY RXSTFXL STUDIO..."]                  │
│  [REBIRTH: Renewal]  │  [METAMORPHOSIS: Process]  │  [PURPOSE: Mind]   │
│  [Panoramic Table Mountain & Cape Town Coastline Photography]          │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        04 / GALLERY (PORTFOLIO)                        │
│  [Dark Header: REBIRTH PORTFOLIO + Cropped Butterfly Wing]             │
│  ────────────────────────────────────────────────────────────────────  │
│  [Wide Horizontal Banner: TALENT & CREATIVES ───────▶] (Portrait Photo)│
│  [Wide Horizontal Banner: BRANDS ───────────────────▶] (Mountain Aerial│
│  [Wide Horizontal Banner: CAUSES ───────────────────▶] (Lagoon Inset)  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│                        05 / CONTACT                                    │
│  [CONTACT Title + "LET'S CREATE, COLLABORATE OR CONNECT."] + [Emblem]  │
│  [Clean Minimal Underline Fields: NAME, EMAIL, SUBJECT, MESSAGE]       │
│  [Solid Black Action: SEND MESSAGE ─▶]                                 │
│  [Table Mountain Monochrome Base Landscape]                            │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 2. User Experience & Visual Architecture

#### Page 01 — Home (Landing)
- **Hero Split**: Exact match to Panel 01:
  - Right: Large macro moth/butterfly wing with delicate venation.
  - Left: `REBIRTH ATELIERS®`, subtext `CLOTHING FOR A HIGHER STATE.`, and clean outlined button `SHOP THE DROP →`.
  - Far Right: Vertical counter `01 \ 02 \ 03` and subtle bottom chevron.
- **Section 2 Split**:
  - `REBIRTH // 01` with subtitle `A STUDY IN TRANSFORMATION`.
  - Circular play affordance with monochrome editorial portrait.
  - Horizontal strip of 3 macro texture thumbnails (wing scales, mineral marble wash, rough concrete grain).

#### Page 02 — Store
- **Header**: High-impact condensed title `STORE` with subhead `CURRENT DROP — REBIRTH // 01`.
- **Minimal Category Filter Bar**: Single horizontal line: `ALL`, `HOODIES`, `SWEATS`, `PANTS`, `ACCESSORIES` with right-aligned `SORT: NEWEST ▾` and spreadsheet toggle.
- **2x2 Editorial Product Grid**: Clean off-white background, high-contrast imagery, minimal typography with price and discrete `+` quick-add button.
- **Full Drawer & Bag Support**: Retains full Quick-View Product Drawer, Archival Spreadsheet switch, Slide-out Shopping Bag, and multi-step Demonstration Checkout.

#### Page 03 — About
- **Top Split**: Left column with `ABOUT / REBIRTH ATELIERS®`, right column with the motion-blurred moth wing visual from the moodboard.
- **Core Manifesto**: *"A CLOTHING LABEL BY RXSTFXL STUDIO EXPLORING TRANSFORMATION, RENEWAL AND CREATIVE EVOLUTION."*
- **3 Pillars**: `REBIRTH` (Renewal after change), `METAMORPHOSIS` (Growth through process), `PURPOSE` (Clothing with intention) separated by fine vertical hairline dividers.
- **Panoramic Landscape**: Full-width black-and-white photograph of Table Mountain and the Cape Town shoreline anchoring the base.

#### Page 04 — Gallery (Rebirth Portfolio)
- **Dark Header**: `REBIRTH PORTFOLIO` with sub-copy *"A COLLECTIVE ARCHIVE OF PEOPLE, PARTNERSHIPS AND PURPOSE."* and right-aligned butterfly wing crop.
- **3 Stacked Full-Width Photographic Banners**:
  1. `TALENT & CREATIVES →` with monochrome portrait of young creative.
  2. `BRANDS →` with Cape Town aerial coastline photography.
  3. `CAUSES →` with serene water/lagoon coastal scene.
- Clicking any banner smoothly expands the verified profiles, brand collaborations, and community anti-xenophobia initiatives.

#### Page 05 — Contact
- **Textured Header**: Raw concrete/paper grain with `CONTACT` title, subline *"LET'S CREATE, COLLABORATE OR CONNECT."*, and the official Rebirth butterfly emblem on the right.
- **Minimalist Form**: Clean hairline underline fields (`NAME *`, `EMAIL *`, `SUBJECT`, `MESSAGE *`), and solid black `SEND MESSAGE →` button.
- **Cape Town Anchor**: Panoramic Table Mountain landscape base with studio attribution.

---

### 3. Implementation Steps

1. **Step 1: Layout & Page Transitions (`App.tsx`)**
   - Wrap page changes in a smooth magazine crossfade with subtle vertical settling.
2. **Step 2: Home Page Refinement (`src/pages/Home.tsx`)**
   - Align hero composition with Panel 01: vertical counter `01 \ 02 \ 03`, outlined `SHOP THE DROP →` button, and the 3 texture thumbnail crops below the `REBIRTH // 01` split.
3. **Step 3: Store Grid Tuning (`src/pages/Store.tsx`)**
   - Set 2-column editorial grid as the default view matching Panel 02 with minimal `+` quick-add, clean single-line filter ribbon, and secondary toggle to the spreadsheet catalogue.
4. **Step 4: About Page Refinement (`src/pages/About.tsx`)**
   - Implement the top split with motion-blurred moth wing, 3 hairline-divided pillars, and Table Mountain panoramic base.
5. **Step 5: Gallery Banners Refinement (`src/pages/Gallery.tsx`)**
   - Restructure the portfolio into the 3 wide photographic banners (Talent, Brands, Causes) matching Panel 04 with expandable drawer content.
6. **Step 6: Contact Page Refinement (`src/pages/Contact.tsx`)**
   - Implement the concrete/paper textured header with emblem on the right, clean underline input fields, `SEND MESSAGE →`, and Table Mountain landscape.
7. **Step 7: Final Verification**
   - Co-run `compile_applet` and `lint_applet` to confirm 100% build integrity.
