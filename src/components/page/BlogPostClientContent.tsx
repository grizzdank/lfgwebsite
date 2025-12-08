"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BlogPost } from "@/types/blog";
import ProseContent from "@/components/blog/ProseContent";

interface BlogPostClientContentProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClientContent({
  post,
  relatedPosts,
}: BlogPostClientContentProps) {
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
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e8eeeb] pt-20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-[#385449] hover:text-[#2c4a3c] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#e8eeeb]">/</span>
            <Link
              href="/blog"
              className="text-[#385449] hover:text-[#2c4a3c] transition-colors"
            >
              Blog
            </Link>
            <span className="text-[#e8eeeb]">/</span>
            <span className="text-[#2c4a3c] font-medium">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category & Reading Time */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1 bg-[#dca47d] text-white text-sm font-semibold rounded-full">
                  {post.category}
                </span>
                {post.readingTime && (
                  <span className="text-sm text-[#385449]">
                    {post.readingTime} min read
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a3c] mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#e8eeeb]">
                {post.author.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#e8eeeb]">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      sizes="48px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-[#2c4a3c]">
                    {post.author.name}
                  </p>
                  {post.author.title && (
                    <p className="text-sm text-[#385449]">
                      {post.author.title}
                    </p>
                  )}
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm text-[#385449]">
                    {formatDate(post.publishedAt)}
                  </p>
                  {post.updatedAt && (
                    <p className="text-xs text-[#385449]">
                      Updated: {formatDate(post.updatedAt)}
                    </p>
                  )}
                </div>
              </div>

              {/* Cover Image */}
              {post.coverImage && (
                <div className="relative h-96 mb-8 rounded-lg overflow-hidden bg-[#e8eeeb]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="mb-12">
                <ProseContent html={post.content} />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-12 pb-8 border-b border-[#e8eeeb]">
                  <h3 className="text-sm font-semibold text-[#2c4a3c] mb-3">
                    Tags:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#f3f7f5] text-[#385449] text-sm rounded-full border border-[#e8eeeb]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="bg-white rounded-lg p-6 mb-12 border border-[#e8eeeb]">
                <h3 className="text-lg font-semibold text-[#2c4a3c] mb-4">
                  Found this helpful? Share it!
                </h3>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://lfgconsultants.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-all hover:scale-110"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://lfgconsultants.com/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-all hover:scale-110"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#2c4a3c] hover:text-[#385449] font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-[#e8eeeb]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#2c4a3c] mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    className="bg-[#f3f7f5] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.coverImage && (
                        <div className="relative h-40 overflow-hidden bg-[#e8eeeb]">
                          <Image
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <span className="text-xs font-semibold text-[#dca47d] mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#2c4a3c] mb-2 group-hover:text-[#385449] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-[#385449] line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
