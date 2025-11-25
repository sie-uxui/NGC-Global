# NGC Marine Website

**Leading manufacturer of marine transmission equipment and specialized dredging gearboxes**

---

## 🚀 Project Overview

This website is built using the **Flender design architecture** - a professional industrial B2B structure with modern mega-menu navigation, video hero sections, and responsive layouts.

### Technology Stack:
- **HTML5** - Semantic structure
- **CSS3** - Custom styling with Flender-inspired design system
- **Bootstrap 3.3.7** - Grid system and responsive utilities
- **jQuery 3.2.1** - DOM manipulation and interactions
- **JavaScript (ES5)** - Custom navigation and animations

---

## 📁 File Structure

```
NGC-Global/
├── index.html                          ← Main homepage
├── README.md                           ← This file
│
├── css/
│   └── style.css                       ← Complete custom styles (Flender-based)
│
├── js/
│   └── main.js                         ← Navigation & interactive components
│
├── assets/
│   ├── images/
│   │   └── README.md                   ← Image requirements
│   │
│   └── icons/
│       ├── dredger/                    ← Dredger gearbox icons (7 SVGs)
│       ├── propulsion/                 ← Marine propulsion icons (7 SVGs)
│       ├── solutions/                  ← Integrated solutions icons (4 SVGs)
│       ├── services/                   ← Components & services icons (4 SVGs)
│       ├── sidebar/                    ← Sidebar navigation icons (7 SVGs)
│       └── placeholder-icon.svg        ← Base placeholder
│
└── reference/                          ← Flender reference files (DO NOT MODIFY)
    ├── Flender_Homepage.html
    └── Flender_Homepage_files/
```

---

## 🎨 Design System

### Color Palette (Flender-based):

**Primary Colors:**
- Navy Blue: `#00224B` - Primary brand color
- Teal: `#003e62` - Secondary brand color
- Link Blue: `#227dc6` - Interactive elements
- Link Hover: `#1b629a` - Hover states

**Neutrals:**
- Dark Background: `#001923` - Footer
- Text Color: `#4c555a` - Body text
- Heading Color: `#154259` - Titles
- Light Gray: `#777777` - Secondary text
- Border: `#eeeeee` - Dividers

### Typography:
- **Primary Font:** "Open Sans", Helvetica, Arial, sans-serif
- **Heading Font:** "DIN", "Open Sans", Arial, sans-serif
- **Base Size:** 14px
- **Line Height:** 1.6

---

## 🧭 Navigation Structure

### Main Navigation:
1. **HOME** - Homepage
2. **INDUSTRY** - Industries served (flyout menu)
3. **APPLICATIONS** - Maritime applications (flyout menu)
4. **PRODUCTS** - 4-column mega menu:
   - Dredger Gearboxes (7 products)
   - Marine Propulsion (7 products)
   - Integrated Solutions (4 products)
   - Components & Services (4 products)
5. **NGC AIQ** - AI & intelligent solutions
6. **SERVICE** - Service & support
7. **COMPANY** - About NGC
8. **CAREER** - Job opportunities

### Right Sidebar (Sticky):
- Cart
- Contact
- Configurators
- Downloads
- Locations
- FAQ

---

## 📱 Responsive Breakpoints

- **Desktop:** 992px and above - Full mega menu, hover navigation
- **Tablet:** 768px - 991px - Collapsed navigation
- **Mobile:** Below 768px - Mobile menu, stacked layout

---

## 🎯 Key Features

### ✅ Implemented:
- [x] Fixed header with navigation
- [x] Mega-menu flyout navigation (Flender structure)
- [x] Video hero section with overlay content
- [x] 50/50 media components (image + text)
- [x] Right-side sticky navigation
- [x] Responsive grid layout
- [x] Product category dropdowns
- [x] Professional footer
- [x] Smooth scroll animations
- [x] Mobile-responsive design

### 🔄 To Be Added:
- [ ] Actual product images (replace placeholders)
- [ ] Video background for hero section
- [ ] Company logo (currently SVG text)
- [ ] Language selector functionality
- [ ] Search functionality
- [ ] Contact form
- [ ] Product detail pages
- [ ] About/Company pages

---

## 🚀 How to Launch

### Option 1: Direct File Open
1. Navigate to `D:\Skubbs\NGC\NGC-Global\`
2. Double-click `index.html`
3. Opens in default browser

### Option 2: Local Server (Recommended)
```bash
cd D:\Skubbs\NGC\NGC-Global
python -m http.server 8000
# Or use: php -S localhost:8000
```
Then open: http://localhost:8000

### Option 3: VS Code Live Server
1. Open folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🛠️ Customization Guide

### Change Brand Colors:
Edit `css/style.css` - Search and replace:
- `#00224B` → Your primary navy
- `#003e62` → Your secondary teal
- `#227dc6` → Your link blue

### Update Navigation:
Edit `index.html` - Line ~60-400 (navigation section)

### Modify Hero Content:
Edit `index.html` - Line ~800-900 (hero section)

### Add Products to Mega Menu:
1. Edit `index.html` - Products flyout section
2. Add new `<li class="fl-flyout-navigation--item-link">`
3. Include icon and title

---

## 📊 Performance Optimizations

- [x] CDN-hosted libraries (jQuery, Bootstrap)
- [x] Minified CSS structure
- [x] SVG icons (scalable, small file size)
- [x] Lazy loading capability (in main.js)
- [x] CSS transitions over animations
- [ ] Image optimization (pending actual images)
- [ ] Minified JS bundle

---

## 🔧 Browser Compatibility

**Tested & Supported:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Partial Support:**
- ⚠️ IE 11 (requires polyfills)

---

## 📝 Content Sections

### 1. Hero Section
- **Headline:** "GEARED FOR A BETTER FUTURE"
- **Subtitle:** Leading manufacturer tagline
- **Stats:** 60+ Systems | 20 Years | #1 China Market
- **CTA:** Learn More button

### 2. Dredger Gearboxes
- Submerged Cutter Gearbox
- Dredge Pump Gearbox (Cabin)
- Submerged Dredge Pump Gearbox
- High Pressure Water Pump Gearbox
- Hydraulic Power Pack Gearbox
- Bucket Wheel Gearbox
- Side Winch Gearbox

### 3. Marine Propulsion
- CPP Systems (NCP Series)
- CPP Gearbox (CK Series)
- FPP Gearbox (CG Series)
- Azimuth Thruster (NRP Series)
- Electrical Propulsion (NEPod)
- Tunnel Thruster (NFT/NCT)
- Shaft/Rudder System (NFP)

### 4. NGC AIQ
- AI-powered marine solutions
- Intelligent monitoring
- Predictive maintenance
- Digital twin technology

### 5. Service & Support
- Installation & commissioning
- Maintenance programs
- Technical training
- Global service network

---

## 🎬 Animation Details

### Mega Menu:
- **Open:** 400ms cubic-bezier easing
- **Transform:** translateY from -100%
- **Opacity:** 0 to 1

### Hover Effects:
- **Links:** 300ms color transition
- **Buttons:** 300ms background + border

### Scroll Effects:
- Sticky header activation at 100px
- Fade-in elements on viewport entry

---

## 📞 Contact Information

**NGC Marine Corporation**
- Location: Shanghai, China
- Email: info@ngcmarine.com
- Phone: +86 XXX XXXX XXXX

---

## 🏆 Credits

**Design Architecture:** Based on Flender GmbH website structure
**Development:** Custom implementation for NGC Marine
**Framework:** Bootstrap 3.3.7
**Icons:** Custom SVG graphics

---

## 📄 License

© 2024 NGC Marine Corporation. All rights reserved.

---

## 🐛 Known Issues

- [ ] Sidebar icons may need color filter adjustment
- [ ] Mobile menu toggle needs testing on actual devices
- [ ] Flyout menu z-index may conflict with modals (if added)

---

## 🔜 Next Steps

1. **Add Real Images:** Replace all placeholder images
2. **Video Background:** Add actual marine/dredging video
3. **Product Pages:** Create individual product detail pages
4. **Form Integration:** Add contact and quote request forms
5. **CMS Integration:** Consider WordPress or headless CMS
6. **SEO Optimization:** Add meta tags, schema markup
7. **Analytics:** Implement Google Analytics or similar

---

**Built with precision. Engineered for the future. ⚓**
