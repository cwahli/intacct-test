# Journal Entries Product UI

This document serves as a reference for rebuilding the "Journal Entries" UI component, capturing its precise layout, styling, and structural implementation using React and Tailwind CSS.

## 1. Container Structure

The component consists of a main container with two overlapping cards:
1. **White Card**: The main journal entries table
2. **Dark Card**: The Sage Copilot Assistance Panel

The main wrapper uses a dark background and flex layout to position the inner cards naturally:
```tsx
<div className="lg:col-span-6 relative flex flex-col justify-center items-center min-h-[640px] w-full bg-[#151517] rounded-[32px] overflow-hidden shadow-2xl p-4 sm:p-8">
  <div className="relative w-full max-w-[580px] mx-auto flex flex-col items-end">
    {/* Cards go here */}
  </div>
</div>
```

## 2. White Card (Journal Entries Auditing)

The white card acts as the primary data container. It is full width on mobile and `92%` on desktop.

**Wrapper Styling:**
- Background: `bg-white`
- Border: `border border-[#B3C2C9]`
- Border Radius: `rounded-[16px]`
- Shadow: `shadow-xl`
- Padding: `py-6`
- Z-index: `z-10` relative

### 2.1 Header
- **Layout**: Flexbox `flex items-center gap-3 mb-5 px-6`
- **Icon**: Bullet list icon (green `#008146`)
- **Divider**: Vertical gray line `w-[1px] h-5 bg-[#E2E2E2]`
- **Title**: `text-[20px] font-bold text-[#00141e] tracking-tight` ("Journal Entries")

### 2.2 Table Layout
- The table container touches the left and right edges (full width): `border-y border-[#CCD6DB] bg-white relative w-full overflow-x-auto custom-scrollbar`
- **Table properties**: `w-full border-collapse border-spacing-0 text-left text-[11px] sm:text-[13px] font-sans table-auto`

**Table Header (`<thead>`):**
- Background: `bg-[#F9FAFB]`
- Border: `border-b border-[#CCD6DB]`
- Text: `font-semibold text-[#1B1B1B] h-11`

**Table Body Rows (`<tr>`):**
- Height: `h-12`
- Hover state: `hover:bg-slate-50/50 transition-colors`
- Borders: Horizontal borders are handled via `divide-y divide-[#CCD6DB]` on the `<tbody>`.
- Numbering column (`<td>` 1): `w-8 sm:w-12 px-1 sm:px-3 text-center bg-[#F4F6F8] border-r border-[#CCD6DB] font-normal text-slate-900`

### 2.3 Outlier Status Indicators (Table Cells)
The outlier tags consist of an icon box and label tightly bound together. They take the full height of the cell.

```tsx
<td className="p-0 border-r border-[#CCD6DB] w-[90px] sm:w-[110px] h-full align-middle">
  <div className="w-full h-full min-h-[48px] flex items-stretch bg-[COLOR]">
    <span className="w-8 sm:w-10 flex items-center justify-center font-bold text-[12px] sm:text-[14px] text-white shrink-0">
      [INITIAL]
    </span>
    <span className="w-[1px] bg-white/20"></span>
    <span className="flex-1 flex items-center justify-center font-normal text-white px-1 sm:px-2 whitespace-nowrap tracking-wide">
      [LABEL]
    </span>
  </div>
</td>
```
**Colors:**
- Multiple (M): `bg-[#4D45C9]`
- Coding (C): `bg-[#61235F]`
- Amount (A): `bg-[#136F8D]`

### 2.4 Total Display
- Positioned below the table, aligned to the right: `mt-4 flex justify-end text-[#1B1B1B] font-sans text-xs pr-6`
- **Label**: `font-bold text-slate-800 text-[14px]` ("Total:")
- **Value**: `font-bold text-[15px] tracking-tight text-black` ("10,000.00")

## 3. Dark Card (Review Assistance Panel)

The dark card overlaps the white card.

**Wrapper Styling (Gradient Border):**
- Width: `w-full md:w-[75%]`
- Positioning: `relative z-20 self-start mt-6 md:-mt-[56px]` (Negative margin pulls it up over the white card on desktop)
- Border effect: `p-[1.5px] rounded-[14px]` with inline style `background: linear-gradient(145deg, rgba(82,231,235,0.7) 0%, rgba(135,53,209,0.7) 50%, rgba(0,214,57,0.7) 100%)`
- Shadow: `shadow-[0_10px_40px_rgba(0,0,0,0.5)]`

**Inner Content Container:**
- Background: `bg-gradient-to-br from-[#41454e]/95 via-[#23252a]/95 to-[#1a1b1f]/95 backdrop-blur-[12px]`
- Border Radius: `rounded-[13px]`
- Inner shadow: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]`
- Padding: `p-5 pb-6`

### 3.1 Dark Card Header
- **Title**: `text-[17px] font-bold text-white font-sans mb-4 tracking-wide shadow-black/50 drop-shadow-md` ("Review unusual historical matches")

### 3.2 List Items
- **Layout**: `space-y-4`
- **Row**: `flex items-start gap-4`
- **Icon Block**: `h-8 w-8 rounded-[4px] bg-[COLOR] text-white font-bold text-[15px] flex items-center justify-center shrink-0 shadow-md` (colors match Outlier status tags)
- **Text**: `text-[14px] font-normal leading-[1.3] text-white/90` with `<strong>` tags using `text-white font-bold` for emphasis.
