import { getBlogPost } from '@/utils/mdx';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const post = getBlogPost(slug);

    if (!post) {
      return Response.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return Response.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return Response.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
