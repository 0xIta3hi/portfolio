import { getBlogPostBySlug } from '../../../../utils/getBlogPosts';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const post = getBlogPostBySlug(slug);

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
