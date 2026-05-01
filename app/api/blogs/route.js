import { getBlogPosts } from '@/utils/mdx';

export async function GET() {
  try {
    const posts = getBlogPosts();
    return Response.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
