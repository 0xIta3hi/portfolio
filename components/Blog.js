'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="section" id="blog">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span className="text-gradient">Latest Blog Posts</span>
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-400">No blog posts yet.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 border border-indigo-900/30 rounded-lg hover:border-indigo-600/50 hover:bg-indigo-950/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                  {post.frontmatter.title}
                </h3>
                <p className="text-gray-400 mb-2">{post.frontmatter.excerpt || ''}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.frontmatter.date).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
