'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../blogs.module.css';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/api/blogs/${params.slug}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (params.slug) {
      loadPost();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className={styles.postContainer}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={styles.postContainer}>
        <Link href="/blogs" className={styles.backLink}>
          ← Back to blogs
        </Link>
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
    <div className={styles.postContainer}>
      <Link href="/blogs" className={styles.backLink}>
        ← Back to blogs
      </Link>

      <div className={styles.postHeader}>
        <h1>{post.metadata.title}</h1>
        <p className={styles.postMeta}>{post.metadata.date}</p>
      </div>

      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
