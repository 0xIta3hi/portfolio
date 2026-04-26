import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import hljs from 'highlight.js';

const blogsDirectory = path.join(process.cwd(), 'blogs');

// Configure marked with highlight.js for syntax highlighting
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});

export function getAllBlogSlugs() {
  const files = fs.readdirSync(blogsDirectory);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
    }));
}

export function getBlogPostBySlug(slug) {
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Extract frontmatter if present (simple parsing)
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  let metadata = {
    title: slug.replace(/-/g, ' ').charAt(0).toUpperCase() + slug.replace(/-/g, ' ').slice(1),
    date: new Date().toLocaleDateString(),
  };
  let markdownContent = fileContent;

  if (match) {
    const frontmatter = match[1];
    markdownContent = match[2];
    
    // Parse simple YAML
    frontmatter.split('\n').forEach((line) => {
      const [key, value] = line.split(':').map((s) => s.trim());
      if (key && value) {
        metadata[key] = value.replace(/^['"]|['"]$/g, '');
      }
    });
  }

  const htmlContent = marked(markdownContent);

  return {
    slug,
    metadata,
    content: htmlContent,
  };
}

export function getAllBlogPosts() {
  const slugs = getAllBlogSlugs();
  const posts = slugs
    .map(({ slug }) => getBlogPostBySlug(slug))
    .sort((a, b) => {
      const dateA = new Date(a.metadata.date);
      const dateB = new Date(b.metadata.date);
      return dateB - dateA;
    });
  
  return posts;
}

export function searchBlogPosts(query) {
  const posts = getAllBlogPosts();
  const lowerQuery = query.toLowerCase();
  
  return posts.filter((post) => {
    const titleMatch = post.metadata.title.toLowerCase().includes(lowerQuery);
    const contentMatch = post.content.toLowerCase().includes(lowerQuery);
    return titleMatch || contentMatch;
  });
}
