'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { marked } from 'marked';

export default function BlogPostPage({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
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
    };

    fetchPost();
  }, [params.slug]);

  if (loading)
    return (
      <div className="section">
        <p className="text-center">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="section">
        <p className="text-center text-red-400">Error: {error}</p>
      </div>
    );
  if (!post)
    return (
      <div className="section">
        <p className="text-center">Post not found</p>
      </div>
    );

  return (
    <article className="section">
      <div className="max-w-3xl mx-auto">
        <Link href="/#blog" className="text-indigo-400 hover:text-indigo-300 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{post.frontmatter.title}</h1>
          <p className="text-gray-400">
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </header>

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: marked(post.content),
          }}
        />
      </div>
    </article>
  );
}
