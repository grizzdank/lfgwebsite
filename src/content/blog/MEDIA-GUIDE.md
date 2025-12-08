# Media Guide for Blog Posts

Complete guide for adding images, videos, GIFs, and other media to your blog posts.

## Quick Reference

### Static Images
```markdown
![Alt text](/blog/my-image.jpg)
```

### Looping Animations/GIFs
```markdown
![Animation description](/blog/my-animation.gif)
```

### Videos (MP4, WebM)
```html
<video controls loop autoplay muted>
  <source src="/blog/my-video.mp4" type="video/mp4" />
  Your browser doesn't support video.
</video>
```

### YouTube Embeds
```html
<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

---

## Detailed Examples

### 1. Basic Images

Place images in `/public/blog/` then reference them:

```markdown
![Descriptive alt text](/blog/screenshot.png)
```

**Supported formats:** JPG, PNG, WebP, SVG, GIF

**Example:**
```markdown
---
title: "My Post About Design"
coverImage: "/blog/hero-image.jpg"
---

Here's a screenshot of the interface:

![Dashboard interface showing metrics](/blog/dashboard-screenshot.png)

The new design improves usability significantly.
```

### 2. Images with Captions

```markdown
![Chart showing growth metrics](/blog/growth-chart.png)
*Figure 1: Revenue growth over the past 6 months*
```

### 3. Looping Animations & GIFs

GIFs work exactly like images:

```markdown
![Loading animation](/blog/loading-spinner.gif)
```

**For better performance, use MP4 instead of GIF:**

```html
<video autoplay loop muted playsinline style="max-width: 100%; height: auto;">
  <source src="/blog/animation.mp4" type="video/mp4" />
</video>
```

> **Pro Tip:** MP4 files are 10-20x smaller than GIFs! Convert with:
> ```bash
> ffmpeg -i animation.gif -movflags faststart -pix_fmt yuv420p animation.mp4
> ```

### 4. Side-by-Side Images

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
  <img src="/blog/before.jpg" alt="Before" />
  <img src="/blog/after.jpg" alt="After" />
</div>
```

### 5. Full-Width Hero Images

```html
<div style="margin: 2rem -2rem;">
  <img src="/blog/wide-image.jpg" alt="Description" style="width: 100%; height: auto;" />
</div>
```

### 6. YouTube Videos

Get the video ID from the URL (e.g., `dQw4w9WgXcQ` from `youtube.com/watch?v=dQw4w9WgXcQ`):

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

### 7. Vimeo Videos

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://player.vimeo.com/video/VIDEO_ID" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

### 8. Self-Hosted Videos

```html
<video controls style="max-width: 100%; height: auto; margin: 2rem 0;">
  <source src="/blog/demo-video.mp4" type="video/mp4" />
  <source src="/blog/demo-video.webm" type="video/webm" />
  Your browser doesn't support the video tag.
</video>
```

**Attributes:**
- `controls` - Show play/pause controls
- `autoplay` - Start playing automatically
- `loop` - Repeat when finished
- `muted` - Start muted (required for autoplay in most browsers)
- `playsinline` - Play inline on mobile (not fullscreen)

### 9. Background Videos

```html
<div style="position: relative; min-height: 400px; margin: 2rem 0;">
  <video 
    autoplay 
    loop 
    muted 
    playsinline 
    style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
    <source src="/blog/background.mp4" type="video/mp4" />
  </video>
  <div style="position: relative; padding: 2rem; color: white; text-align: center;">
    <h2>Text over video</h2>
    <p>Your content here</p>
  </div>
</div>
```

### 10. Image Galleries

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/blog/gallery-1.jpg" alt="Image 1" style="width: 100%; height: auto;" />
  <img src="/blog/gallery-2.jpg" alt="Image 2" style="width: 100%; height: auto;" />
  <img src="/blog/gallery-3.jpg" alt="Image 3" style="width: 100%; height: auto;" />
  <img src="/blog/gallery-4.jpg" alt="Image 4" style="width: 100%; height: auto;" />
</div>
```

### 11. Loom/Screen Recordings

```html
<div style="position: relative; padding-bottom: 62.5%; height: 0; margin: 2rem 0;">
  <iframe 
    src="https://www.loom.com/embed/VIDEO_ID"
    frameborder="0" 
    webkitallowfullscreen 
    mozallowfullscreen 
    allowfullscreen 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>
```

### 12. CodePen Embeds

```html
<iframe 
  height="400" 
  style="width: 100%; margin: 2rem 0;" 
  scrolling="no" 
  src="https://codepen.io/username/embed/PenID?default-tab=result" 
  frameborder="no" 
  allowtransparency="true" 
  allowfullscreen="true">
</iframe>
```

---

## File Organization

Recommended structure for blog media:

```
/public/blog/
  ├── 2024-12-07-post-name/
  │   ├── hero.jpg
  │   ├── screenshot-1.png
  │   ├── screenshot-2.png
  │   └── demo.mp4
  ├── 2024-12-15-another-post/
  │   ├── cover.jpg
  │   └── animation.gif
  └── shared/
      ├── logo.svg
      └── avatar.jpg
```

Then reference in your post:
```markdown
![Hero image](/blog/2024-12-07-post-name/hero.jpg)
```

---

## Image Optimization Tips

### 1. Compress Before Uploading
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Aim for <200KB for regular images, <500KB for hero images

### 2. Use Modern Formats
- **WebP** for photos (better compression)
- **SVG** for logos/icons (scalable)
- **MP4** instead of GIF for animations

### 3. Resize Appropriately
- Hero images: 1920px wide max
- Inline images: 800-1200px wide
- Thumbnails: 400px wide

### 4. Lazy Loading (Automatic)
Next.js optimizes all images automatically, but for manual HTML:
```html
<img src="/blog/image.jpg" loading="lazy" alt="Description" />
```

---

## Animated Content Best Practices

### GIF vs MP4 Comparison

| Format | Size    | Quality | Browser Support | Best For           |
|--------|---------|---------|-----------------|-------------------|
| GIF    | Large   | Limited | Excellent       | Simple animations |
| MP4    | Small   | High    | Excellent       | Everything else   |
| WebM   | Smallest| High    | Good            | Modern browsers   |

### Creating Looping MP4s

```bash
# Convert GIF to MP4
ffmpeg -i animation.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" animation.mp4

# Create looping video from video
ffmpeg -i input.mp4 -c copy -movflags faststart output.mp4
```

---

## Common Patterns

### Before/After Comparison
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
  <div>
    <img src="/blog/before.jpg" alt="Before optimization" />
    <p style="text-align: center; margin-top: 0.5rem;"><em>Before</em></p>
  </div>
  <div>
    <img src="/blog/after.jpg" alt="After optimization" />
    <p style="text-align: center; margin-top: 0.5rem;"><em>After</em></p>
  </div>
</div>
```

### Inline Demo Video
```markdown
Here's how it works in action:

<video controls loop muted style="max-width: 100%; border-radius: 8px; margin: 2rem 0;">
  <source src="/blog/demo.mp4" type="video/mp4" />
</video>

As you can see, the interaction is smooth and responsive.
```

### Captioned Figure
```html
<figure style="margin: 2rem 0;">
  <img src="/blog/chart.png" alt="Performance metrics chart" style="width: 100%;" />
  <figcaption style="text-align: center; margin-top: 0.5rem; color: #666; font-size: 0.9em;">
    Figure 1: Performance improved by 3x after optimization
  </figcaption>
</figure>
```

---

## Quick Checklist

Before publishing media:

- [ ] Files placed in `/public/blog/`
- [ ] Images compressed (<200KB for regular, <500KB for hero)
- [ ] Descriptive alt text added
- [ ] Video formats include fallbacks
- [ ] Tested on mobile devices
- [ ] Large files use lazy loading

---

## Need Help?

- **Image optimization**: Use [Squoosh](https://squoosh.app/)
- **GIF to MP4**: Use [CloudConvert](https://cloudconvert.com/gif-to-mp4)
- **Screen recording**: Use [Loom](https://loom.com) or macOS Screenshot (Cmd+Shift+5)
- **Free stock images**: [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/)
