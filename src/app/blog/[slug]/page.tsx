import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteMetadata } from "@/config/metadata";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/mdx";
import BlogPostClientContent from "@/components/page/BlogPostClientContent";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - LFG Consulting",
    };
  }

  return {
    title: `${post.title} - Out Of Memory`,
    description: post.excerpt,
    openGraph: {
      ...siteMetadata.openGraph,
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.title,
            },
          ]
        : siteMetadata.openGraph?.images || [],
    },
    twitter: {
      ...siteMetadata.twitter,
      title: post.title,
      description: post.excerpt,
      images: post.coverImage
        ? [post.coverImage]
        : siteMetadata.twitter?.images || [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return <BlogPostClientContent post={post} relatedPosts={relatedPosts} />;
}
