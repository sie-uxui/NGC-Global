# Logo Placeholder

## Required Logo File

**File needed:** `logo.png`

### Specifications:
- **Format:** PNG (with transparent background)
- **Dimensions:** Recommended 200px × 45px (or proportional)
- **Background:** Transparent
- **Color:** White logo/text (will show on navy background)
- **File size:** < 50KB recommended

### Current Implementation:
The logo is referenced in `index.html`:
```html
<img src="assets/logo.png" alt="NGC Marine" class="logo-image">
```

### Logo Behavior:
- **At top (semi-transparent navbar):** Logo has drop-shadow for visibility over video
- **When scrolled/menu open (solid navbar):** Shadow removed for clean appearance
- **Height:** Fixed at 45px, width scales proportionally

### Design Requirements:
1. **White color** - Logo should be white to contrast with navy background
2. **Transparent background** - PNG with alpha channel
3. **High resolution** - 2x size for retina displays (400px × 90px saved as 200px × 45px display size)
4. **Clean design** - Professional, B2B industrial aesthetic

### Temporary Fallback:
If logo is not yet available, you can:
1. Use the previous SVG text logo (see git history)
2. Create a simple text-based logo using online tools
3. Use company initials "NGC" as a temporary mark

### To Add Your Logo:
1. Save your logo as: `logo.png`
2. Place it in: `D:\Skubbs\NGC\NGC-Global\assets\`
3. Logo will automatically load on page refresh

---

**Current Status:** Logo file needed - placeholder path active
