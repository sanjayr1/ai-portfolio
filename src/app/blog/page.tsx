import Link from "next/link";
import { getSortedPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="group">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
            {post.description && (
              <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
