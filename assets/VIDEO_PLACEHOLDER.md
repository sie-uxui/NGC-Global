# Video Placeholder

## Hero Video Background

**File needed:** `hero-video.mp4`

### Specifications:
- **Resolution:** 1920x1080 (Full HD) or higher
- **Duration:** 10-30 seconds (will loop)
- **Format:** MP4 (H.264 codec)
- **Aspect Ratio:** 16:9
- **File Size:** < 10MB recommended for fast loading

### Content Suggestions:
1. **Marine/Ocean scenes** - Waves, ships, maritime operations
2. **Dredging operations** - Dredger machinery in action
3. **Industrial machinery** - Gearboxes, transmissions, propulsion systems
4. **NGC Marine facilities** - Manufacturing, assembly lines
5. **Abstract tech animation** - Blue/navy themed motion graphics

### Current State:
The video element has a **gradient fallback** that displays when no video is present:
- Colors: Navy blue to teal gradient (#001923 → #003e62 → #00224B)
- This will show until you add `hero-video.mp4` to the `/assets/` folder

### To Add Video:
1. Place your video file here: `D:\Skubbs\NGC\NGC-Global\assets\hero-video.mp4`
2. The HTML already references this path
3. Video will autoplay, loop, and be muted (no user interaction required)
4. The video will cover the entire hero section (100vh)

### Optimization Tips:
- Compress video to reduce load time
- Use online tools like HandBrake or FFmpeg
- Target bitrate: 2-5 Mbps for web delivery
- Consider creating multiple sizes for responsive delivery

---

**Current Fallback:** Beautiful navy/teal gradient background
**Status:** Website fully functional without video (gradient shows instead)
