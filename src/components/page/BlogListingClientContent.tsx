"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BlogPost } from "@/types/blog";

export const blogCategories = [
  { slug: "change-management", name: "Change Management" },
  { slug: "ai-automation", name: "AI & Automation" },
  { slug: "rapid-development", name: "Rapid Development" },
  { slug: "insights", name: "Insights" },
  { slug: "case-studies", name: "Case Studies" },
];

interface BlogListingClientContentProps {
  posts: BlogPost[];
}

export default function BlogListingClientContent({
  posts,
}: BlogListingClientContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from actual posts
  const activeCategories = Array.from(
    new Set(posts.map((post) => post.category)),
  ).sort();

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f7f5]">
      {/* Hero Section */}
      <section className="bg-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2c4a3c]">
              Out Of Memory
            </h1>
            <p className="text-lg md:text-xl text-[#385449]">
              One Keyboard, Infinite Loops
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-[#e8eeeb] sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-[#2c4a3c] text-white"
                  : "bg-[#f3f7f5] text-[#385449] hover:bg-[#e8eeeb]"
              }`}
            >
              All Posts
            </button>
            {activeCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#2c4a3c] text-white"
                    : "bg-[#f3f7f5] text-[#385449] hover:bg-[#e8eeeb]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sortedPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-[#385449]">
                No posts available yet. Check back soon for insights and
                updates!
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Cover Image */}
                    {post.coverImage && (
                      <div className="relative h-48 overflow-hidden bg-[#e8eeeb]">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Category & Reading Time */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-[#dca47d]">
                          {post.category}
                        </span>
                        {post.readingTime && (
                          <>
                            <span className="text-[#e8eeeb]">•</span>
                            <span className="text-sm text-[#385449]">
                              {post.readingTime} min read
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-[#2c4a3c] mb-3 group-hover:text-[#385449] transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#385449] leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#e8eeeb]">
                        <div className="flex items-center gap-3">
                          {post.author.image && (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#e8eeeb]">
                              <Image
                                src={post.author.image}
                                alt={post.author.name}
                                fill
                                sizes="40px"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium text-[#2c4a3c]">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-[#385449]">
                              {formatDate(post.publishedAt)}
                            </p>
                          </div>
                        </div>

                        <svg
                          className="w-5 h-5 text-[#dca47d] transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
