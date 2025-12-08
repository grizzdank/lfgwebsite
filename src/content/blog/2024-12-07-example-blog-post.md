---
title: "Example Blog Post - Getting Started"
excerpt: "This is an example blog post showing you how to write content in Markdown. Copy this template to create your own posts with beautiful formatting."
publishedAt: "2024-12-07T10:00:00Z"
category: "Insights"
tags: ["example", "tutorial", "getting-started"]
featured: false
author:
  name: "Dave Graham"
  title: "Principal Consultant"
---

This is your blog post content written in **Markdown**! Much easier than writing HTML.

## Why Markdown is Great

Markdown lets you focus on writing without worrying about HTML tags. Here are some formatting examples:

### Text Formatting

- **Bold text** with double asterisks
- *Italic text* with single asterisks
- ***Bold and italic*** with triple asterisks
- `Inline code` with backticks

### Lists

Unordered lists:
- First item
- Second item
- Third item
  - Nested item
  - Another nested item

Ordered lists:
1. First step
2. Second step
3. Third step

### Code Blocks

```javascript
// You can include code with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

```typescript
// TypeScript example
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: 'Dave',
  email: 'dave@lfgconsultants.com'
};
```

### Quotes

> "The best way to predict the future is to create it."
> — Peter Drucker

### Links

You can add [links to other pages](https://lfgconsultants.com) easily.

## Images

You can include images too (place them in `/public/blog/`):

```markdown
![Alt text](/blog/your-image.jpg)
```

## Headings Create Structure

### This is an H3

Regular paragraph text goes here. You can write as much as you need.

#### This is an H4

Smaller headings for sub-sections.

## Conclusion

That's the basics! Markdown is much more pleasant to write than HTML, and the gray-matter frontmatter at the top handles all your metadata.

**Pro tip:** Keep your filename format as `YYYY-MM-DD-your-post-title.mdx` so posts sort chronologically in your editor.
