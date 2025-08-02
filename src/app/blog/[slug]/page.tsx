import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = () => allBlogs.map((post) => ({ slug: post.slug }));

import { use } from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const post = allBlogs.find((p) => p.slug === slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  // You can customize MDX components if desired
  const components = {
    // e.g. h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
  };

  return (
    <article className="prose dark:prose-invert mx-auto px-4 py-10">
      <h1>{post.title}</h1>
      <MDXContent components={components} />
    </article>
  );
}
