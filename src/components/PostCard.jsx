/**
 * @param {{ post: import('../types/schema').Post }} props
 */
export function PostCard({ post }) {
  return (
    <article className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-600">
        By {post.user.name} in {post.category.name}
      </p>
    </article>
  );
}
