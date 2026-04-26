---
title: Building a Blog with Next.js and Markdown
date: 2024-01-25
---

# Building a Blog with Next.js and Markdown

In this post, we'll explore how to build a powerful blog system using Next.js and Markdown files. This approach gives you the best of both worlds: the simplicity of markdown and the power of Next.js.

## Why Markdown?

Markdown is a lightweight markup language that's perfect for writing content:

- **Easy to write** - Simple syntax that's human-readable
- **Version control friendly** - Perfect for Git
- **Portable** - Works everywhere
- **Searchable** - Easy to index and search

## Setting Up the Blog

### Step 1: Create the Blog Directory

```bash
mkdir blogs
```

### Step 2: Create Markdown Files

Each markdown file becomes a blog post. You can add YAML frontmatter for metadata:

```markdown
---
title: My First Post
date: 2024-01-25
---

# Content starts here...
```

### Step 3: Parse Markdown

Use libraries like `marked` to convert markdown to HTML:

```javascript
import { marked } from 'marked';

const htmlContent = marked(markdownContent);
```

## Advanced Features

### Syntax Highlighting

Add syntax highlighting to code blocks using `highlight.js`:

```javascript
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});
```

### Search Functionality

Implement search by filtering posts based on title and content:

```javascript
function searchBlogPosts(query) {
  return posts.filter(post => {
    return post.title.includes(query) || post.content.includes(query);
  });
}
```

## Benefits of This Approach

1. **Simple** - No database needed
2. **Fast** - Static generation for performance
3. **Scalable** - Easy to add new posts
4. **Git-friendly** - Version control all your content
5. **SEO-friendly** - Perfect for search engines

## Conclusion

This markdown-based blog approach is perfect for developers and creators who want to focus on writing content without worrying about complex backend systems. It's fast, simple, and gives you complete control over your content.

Happy blogging! 📝
