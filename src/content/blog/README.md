# Blog Posts Directory

This directory contains all blog posts for **Out Of Memory** - the LFG Consulting blog.

> **"One Keyboard, Infinite Loops"**

## Quick Start

### Create a New Blog Post

1. **Create a new `.mdx` file** with date-based naming:
   ```
   /src/content/blog/2024-12-07-my-awesome-post.mdx
   ```

2. **Add frontmatter** at the top:
   ```yaml
   ---
   title: "Your Post Title Here"
   excerpt: "A brief 1-2 sentence summary for the listing page"
   publishedAt: "2024-12-07T10:00:00Z"
   category: "Insights"
   tags: ["tag1", "tag2", "tag3"]
   featured: false
   ---
   ```

3. **Write your content** in Markdown below the frontmatter

4. **Build and deploy** - your post will automatically appear!

## File Naming Convention

**Use date-based naming for easy chronological sorting:**

```
YYYY-MM-DD-post-slug.mdx
```

Examples:
- `2024-12-07-getting-started-with-ai.mdx`
- `2024-12-15-change-management-tips.mdx`
- `2025-01-01-new-year-predictions.mdx`

This keeps your posts sorted by date in your file explorer!

## Frontmatter Fields

### Required Fields

```yaml
title: "Your Post Title"           # Post title (used in H1, meta tags)
excerpt: "Brief summary"            # 1-2 sentences for listing page
publishedAt: "2024-12-07T10:00:00Z" # ISO 8601 format
category: "Category Name"           # Must match available categories
tags: ["tag1", "tag2"]             # Array of tags
```

### Optional Fields

```yaml
updatedAt: "2024-12-08T10:00:00Z"  # When post was last updated
featured: true                      # Highlight this post
coverImage: "/blog/my-image.jpg"   # Hero image (place in /public/blog/)
author:                             # Override default author
  name: "Jane Doe"
  title: "Guest Contributor"
  image: "/team/jane.jpg"
readingTime: 8                      # Auto-calculated if not provided
```

## Available Categories

- **Change Management** - Organizational transformation topics
- **AI & Automation** - AI tools, automation strategies
- **Rapid Development** - Fast prototyping, agile methods  
- **Insights** - General thoughts and observations
- **Case Studies** - Client work and success stories

## Writing in Markdown

### Headings

```markdown
## Main Section Heading (H2)
### Subsection (H3)
#### Smaller Subsection (H4)
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
`Inline code`
```

### Lists

```markdown
Unordered list:
- First item
- Second item
  - Nested item
  - Another nested item

Ordered list:
1. First step
2. Second step
3. Third step
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](/portfolio)
```

### Images

Place images in `/public/blog/` then reference them:

```markdown
![Alt text description](/blog/my-image.jpg)
```

### Code Blocks

Use triple backticks with language for syntax highlighting:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

```typescript
interface User {
  name: string;
  email: string;
}
```

```bash
npm install package-name
```
````

### Blockquotes

```markdown
> "The best way to predict the future is to create it."
> — Peter Drucker
```

### Horizontal Rules

```markdown
---
```

## Complete Example

````markdown
---
title: "Mastering Change Management in 2024"
excerpt: "Five proven strategies for leading successful organizational transformations in the modern workplace."
publishedAt: "2024-12-07T09:00:00Z"
category: "Change Management"
tags: ["leadership", "transformation", "strategy"]
featured: true
coverImage: "/blog/change-management-2024.jpg"
---

Change is inevitable, but successful change management is not. In this post, I'll share five strategies that have helped organizations navigate complex transformations.

## Strategy 1: Start with Why

Before implementing any change, ensure everyone understands the **why** behind it. Simon Sinek famously said:

> "People don't buy what you do; they buy why you do it."

This applies to organizational change too.

### Key Steps

1. Articulate the vision clearly
2. Connect it to individual roles
3. Communicate consistently

## Strategy 2: Embrace Technology

Modern tools can accelerate change:

```javascript
// Example: Using automation to track change adoption
const trackProgress = async (teamId) => {
  const metrics = await getTeamMetrics(teamId);
  return calculateAdoptionRate(metrics);
};
```

## Conclusion

Change management isn't about avoiding resistance—it's about **channeling** it productively.

![Team collaboration](/blog/team-collaboration.jpg)

Learn more about our [change management services](/services).
````

## Pro Tips

1. **Date-based filenames** sort chronologically in your editor
2. **Keep excerpts short** - 150-200 characters is ideal
3. **Use descriptive slugs** in filenames (the part after the date)
4. **Add 3-5 tags** per post for discoverability
5. **Include images** - posts with visuals perform better
6. **Preview locally** before deploying

## Where Posts Appear

- **Blog listing**: `/blog`
- **Individual post**: `/blog/2024-12-07-my-awesome-post`
- **RSS feed**: Auto-generated from all posts
- **Search engines**: Full SEO metadata included

## Need Help?

- Check `2024-12-07-example-blog-post.mdx` for a complete template
- All markdown is converted to HTML automatically
- Questions? Reference Next.js MDX docs or ask Dave!
