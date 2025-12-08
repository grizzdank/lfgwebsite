import type { Metadata } from "next";
import { siteMetadata } from "@/config/metadata";
import BlogListingClientContent from "@/components/page/BlogListingClientContent";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Out Of Memory - LFG Consulting Blog",
  description:
    "One Keyboard, Infinite Loops - Explore insights on change management, AI-driven automation, rapid development, and business transformation.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Out Of Memory - LFG Consulting Blog",
    description:
      "One Keyboard, Infinite Loops - Explore insights on change management, AI-driven automation, rapid development, and business transformation.",
    url: "/blog",
    images: siteMetadata.openGraph?.images || [],
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Out Of Memory - LFG Consulting Blog",
    description:
      "One Keyboard, Infinite Loops - Explore insights on change management, AI-driven automation, rapid development, and business transformation.",
    images: siteMetadata.twitter?.images || [],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogListingClientContent posts={posts} />;
}
