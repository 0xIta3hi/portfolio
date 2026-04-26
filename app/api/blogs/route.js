import { getAllBlogPosts } from '../../../utils/getBlogPosts';

export async function GET() {
  try {
    const posts = getAllBlogPosts();
    return Response.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Response.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
