# 📸 IMAGE DOWNLOAD QUICK CHECKLIST

Fast reference for downloading and replacing images.

---

## 🎯 PRIORITY IMAGES (Download These First!)

### **1. Tongjun TSHD Hero Image** ⭐⭐⭐ HIGH PRIORITY

```
File: tongjun-tshd-hero.jpg
Size: 1920 x 800px
Where: D:\Skubbs\NGC\NGC-Global\assets\images\
```

**Search on Unsplash/Pexels:**
- "trailing suction hopper dredger"
- "TSHD ship at sea"
- "dredging vessel maritime"

**What to look for:**
- Large ship at sea
- Side view showing deck
- Professional maritime photography
- Blue ocean background

---

### **2. Gearbox Detail Image** ⭐⭐ MEDIUM PRIORITY

```
File: dredger-gearbox-detail.jpg
Size: 800 x 600px
Where: D:\Skubbs\NGC\NGC-Global\assets\images\
```

**Search on Unsplash/Pexels:**
- "marine gearbox close-up"
- "industrial gears machinery"
- "ship transmission"

**What to look for:**
- Gears/mechanical parts
- Industrial/metallic
- High detail
- Professional quality

---

## 🏢 CLIENT LOGOS (Optional - Current Placeholders Work Well)

All logos go in: `D:\Skubbs\NGC\NGC-Global\assets\images\clients\`

All should be: PNG, transparent background, 150-250px wide, grayscale/white

### **Quick List:**

1. ☐ `client-logo-china-dredging.png` - Search: "China Dredging Corporation logo"
2. ☐ `client-logo-van-oord.png` - Search: "Van Oord logo transparent"
3. ☐ `client-logo-deme.png` - Search: "DEME Group logo"
4. ☐ `client-logo-jan-de-nul.png` - Search: "Jan De Nul logo"
5. ☐ `client-logo-boskalis.png` - Search: "Boskalis logo"
6. ☐ `client-logo-cosco.png` - Search: "COSCO Shipping logo"
7. ☐ `client-logo-china-shipbuilding.png` - Search: "CSSC logo"
8. ☐ `client-logo-samsung-heavy.png` - Search: "Samsung Heavy Industries logo"

**Where to find:** Company websites → Press/Media section → Download logos

---

## 🎨 VALUE PROP ICONS (Optional - CSS Shapes Work Great!)

All icons go in: `D:\Skubbs\NGC\NGC-Global\assets\icons\value-props\`

All should be: SVG, 80x80px, white color, transparent background

### **Quick List:**

1. ☐ `icon-global-experience.svg` - Globe icon
2. ☐ `icon-engineering.svg` - Gear/tools icon
3. ☐ `icon-quality.svg` - Shield/badge icon
4. ☐ `icon-innovation.svg` - Lightning/tech icon

**Where to find:**
- feathericons.com (free, clean line art)
- heroicons.com (modern icons)
- fontawesome.com (extensive library)

---

## 🛠️ IMAGE OPTIMIZATION (Before Uploading)

**Resize images:**
- Use: iloveimg.com/resize-image
- Or: Photoshop, GIMP

**Compress images:**
- Use: tinypng.com
- Or: squoosh.app

**Target file sizes:**
- Hero image: < 300KB
- Gearbox image: < 150KB
- Logos: < 50KB each
- Icons: < 10KB each (SVG)

---

## 🔄 HOW TO REPLACE PLACEHOLDER IMAGES

### **Featured Project Images:**

**Find this in index.html (Line 699):**
```html
<div style="background: linear-gradient(...); ...">
```

**Replace with:**
```html
<div style="background: url('assets/images/tongjun-tshd-hero.jpg') center center / cover no-repeat; height: 400px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
```

**Same for gearbox image (Line 707):**
```html
<div style="background: url('assets/images/dredger-gearbox-detail.jpg') center center / cover no-repeat; height: 200px; border-radius: 8px;">
```

---

### **Client Logos:**

**Find this in index.html (Lines 801-854):**
```html
<div class="client-logo-box" style="background: #c0c0c0; ...">
    <div style="color: #666; ...">China Dredging<br>Corporation</div>
</div>
```

**Replace with:**
```html
<div class="client-logo-box" style="background: #fff; height: 100px; border-radius: 6px; display: flex; align-items: center; justify-content: center; padding: 20px; opacity: 0.7;">
    <img src="assets/images/clients/client-logo-china-dredging.png" alt="China Dredging Corporation" style="max-width: 100%; max-height: 80px; filter: grayscale(100%);">
</div>
```

Repeat for all 8 logos!

---

## ⚡ FASTEST WORKFLOW

### **20-Minute Quick Start:**

1. **Minute 1-5:** Download 2 main images from Unsplash
   - Search "dredging ship"
   - Search "industrial gearbox"

2. **Minute 6-10:** Optimize images
   - Resize to correct dimensions (tinypng.com)
   - Compress to target file sizes

3. **Minute 11-15:** Upload to project
   - Save to `assets/images/` folder
   - Rename to exact file names

4. **Minute 16-20:** Update HTML
   - Replace gradient backgrounds with image URLs
   - Test in browser

**Client logos can wait** - current placeholders look professional!

---

## 📋 DOWNLOAD SOURCES

### **Free Stock Photos:**
- **Unsplash** (unsplash.com) - High quality, free
- **Pexels** (pexels.com) - Free, commercial use
- **Pixabay** (pixabay.com) - Free images

### **Free Icons:**
- **Feather Icons** (feathericons.com) - Clean, simple
- **Heroicons** (heroicons.com) - Modern, professional
- **Font Awesome** (fontawesome.com) - Extensive library

### **Company Logos:**
- Official company websites
- LinkedIn company pages
- Press kit downloads

---

## ✅ FINAL CHECKLIST

**Essential (Do Now):**
- [ ] Download TSHD ship photo
- [ ] Download gearbox photo
- [ ] Optimize both images
- [ ] Save to assets/images/
- [ ] Update index.html background URLs
- [ ] Test in browser

**Optional (Do Later):**
- [ ] Download 4 value prop icons
- [ ] Download 8 client logos
- [ ] Optimize all files
- [ ] Update HTML img tags

---

## 💡 PRO TIPS

**For ship images:**
- Look for dramatic angles
- Blue tones match site palette
- Professional photography preferred
- Landscape orientation (wide)

**For logos:**
- Always get permission/check licensing
- Grayscale versions look more professional
- Keep original colors if client prefers
- Transparent backgrounds essential

**For optimization:**
- Compress without visible quality loss
- Test at actual display size
- Use modern formats (WebP) if browser support allows
- Always keep original files as backup

---

**Ready to enhance your website with professional imagery!** 📸✨

For detailed specifications, see: [PLACEHOLDER_IMAGES_GUIDE.md](PLACEHOLDER_IMAGES_GUIDE.md)
