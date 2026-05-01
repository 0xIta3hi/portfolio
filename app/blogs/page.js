'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './blogs.module.css';

export default function BlogsPage() {
  const [allPosts, setAllPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch('/api/blogs');
        const posts = await response.json();
        setAllPosts(posts);
        setFilteredPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts(allPosts);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = allPosts.filter((post) => {
      const titleMatch = post.metadata.title.toLowerCase().includes(lowerQuery);
      const contentMatch = post.content.toLowerCase().includes(lowerQuery);
      return titleMatch || contentMatch;
    });
    setFilteredPosts(filtered);
  }, [searchQuery, allPosts]);

  if (loading) {
    return <div className={styles.blogsContainer}>Loading blog posts...</div>;
  }

  return (
    <div className={styles.blogsContainer}>
      <div className={styles.header}>
        <h1>Blog</h1>
        <p>Thoughts, tutorials, and insights on web development</p>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className={styles.postsList}>
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              passHref
              className={styles.postCard}
            >
              <h2 className={styles.postTitle}>{post.metadata.title}</h2>
              <p className={styles.postDate}>{post.metadata.date}</p>
              <p className={styles.postPreview}>
                {post.content
                  .replace(/<[^>]*>/g, '')
                  .substring(0, 150)
                  .trim()}
                ...
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          No blog posts found matching &quot;{searchQuery}&quot;
        </div>
      )}
    </div>
  );
}
