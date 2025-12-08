---
title: "Media Examples - Images, Videos & Animations"
excerpt: "A comprehensive example showing how to add images, videos, GIFs, and other media to your blog posts using Markdown and HTML."
publishedAt: "2024-12-07T11:00:00Z"
category: "Insights"
tags: ["tutorial", "examples", "media"]
featured: false
---

This post demonstrates all the ways you can add rich media to your blog posts.

## Basic Images

Simple markdown syntax for images:

```markdown
![Alt text](/blog/your-image.jpg)
```

Images automatically style with the blog's theme and are responsive.

## Looping Animations

### Using GIFs

GIFs work just like regular images:

```markdown
![Loading animation](/blog/loader.gif)
```

### Using MP4 (Recommended)

For better performance, use MP4 instead of GIF:

```html
<video autoplay loop muted playsinline style="max-width: 600px; width: 100%; height: auto; border-radius: 8px;">
  <source src="/blog/animation.mp4" type="video/mp4" />
</video>
```

> **Tip:** MP4 files are typically 10-20x smaller than GIFs while maintaining better quality!

## Video Examples

### Video with Controls

```html
<video controls style="max-width: 100%; height: auto; border-radius: 8px; margin: 2rem 0;">
  <source src="/blog/demo-video.mp4" type="video/mp4" />
  Your browser doesn't support video playback.
</video>
```

### YouTube Embed

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 2rem 0;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

## Image Layouts

### Side-by-Side Comparison

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0;">
  <div>
    <img src="/blog/before.jpg" alt="Before" style="width: 100%; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem;"><em>Before</em></p>
  </div>
  <div>
    <img src="/blog/after.jpg" alt="After" style="width: 100%; border-radius: 8px;" />
    <p style="text-align: center; margin-top: 0.5rem;"><em>After</em></p>
  </div>
</div>
```

### Image Gallery

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/blog/img1.jpg" alt="Image 1" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
  <img src="/blog/img2.jpg" alt="Image 2" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
  <img src="/blog/img3.jpg" alt="Image 3" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
  <img src="/blog/img4.jpg" alt="Image 4" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
</div>
```

## Advanced Examples

### Captioned Figure

```html
<figure style="margin: 2rem 0;">
  <img src="/blog/chart.png" alt="Performance metrics" style="width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; margin-top: 0.5rem; color: #666; font-size: 0.9em;">
    Figure 1: Performance improved 3x after optimization
  </figcaption>
</figure>
```

### Inline Demo Video

Here's a quick demonstration:

```html
<video controls loop muted style="max-width: 800px; width: 100%; border-radius: 8px; margin: 1rem 0;">
  <source src="/blog/feature-demo.mp4" type="video/mp4" />
</video>
```

## File Organization

For each post, create a folder in `/public/blog/`:

```
/public/blog/
  └── 2024-12-07-media-examples/
      ├── hero.jpg
      ├── screenshot.png
      ├── demo.mp4
      └── animation.gif
```

Then reference: `/blog/2024-12-07-media-examples/hero.jpg`

## Pro Tips

1. **Compress images** before uploading (use TinyPNG or Squoosh)
2. **Use WebP** for better compression
3. **Convert GIFs to MP4** for animations
4. **Add descriptive alt text** for accessibility
5. **Test on mobile** to ensure responsiveness

---

That's it! Check out `MEDIA-GUIDE.md` in the blog directory for more detailed examples and techniques.
