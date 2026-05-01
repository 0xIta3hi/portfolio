import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPosts() {
  const blogsDir = path.join(process.cwd(), 'blogs');
  const files = fs.readdirSync(blogsDir).filter((file) => file.endsWith('.md'));

  const posts = files.map((file) => {
    const filePath = path.join(blogsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: file.replace('.md', ''),
      frontmatter: data,
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getBlogPost(slug) {
  const blogsDir = path.join(process.cwd(), 'blogs');
  const filePath = path.join(blogsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}
