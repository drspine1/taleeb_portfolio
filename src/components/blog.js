"use client";
import { motion } from "motion/react";
import { blogPosts } from "@/data/blog";
import Image from "next/image";
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="pb-20 w-full mx-auto px-6 md:px-8 lg:px-12 text-center">
      <motion.h5
        initial={{ y: "10px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        className="uppercase text-[#BEC1DD] mb-2"
      >
        Insights & Case Studies
      </motion.h5>

      <motion.h2
        initial={{ y: "15px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="text-[#e4ecff] text-2xl md:text-3xl pb-2 uppercase"
      >
        Blog & <span className="text-purple-400">Articles</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.25, duration: 0.2 }}
        className="mx-auto w-[110px] h-[1.5px] bg-purple-400 text-center mb-8"
      />

      <motion.p
        initial={{ y: "15px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="text-lg max-w-3xl mx-auto text-[#BEC1DD] mb-16"
      >
        Deep dives into my projects, technical challenges, and solutions I've implemented
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group cursor-pointer"
            onClick={() => openPost(post)}
          >
            <div className="bg-gradient-to-b from-[#0a0f2c] to-[#13162D] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13162D] to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-[#BEC1DD] mb-3">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-purple-400" />
                    {post.readTime}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <h3 className="text-xl font-bold text-[#e4ecff] mb-3 group-hover:text-purple-400 transition-colors text-left">
                  {post.title}
                </h3>

                <p className="text-[#BEC1DD] mb-4 line-clamp-3 text-left flex-1">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 px-2 py-1 text-xs text-purple-300 bg-purple-900/30 rounded-full"
                    >
                      <FaTag className="text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal for full article */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] overflow-y-auto"
          onClick={closePost}
        >
          <div className="min-h-screen py-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto bg-[#0a0f2c] rounded-xl border border-purple-500/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePost}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors z-10"
              >
                ✕
              </button>

              {/* Header Image */}
              <div className="relative h-64 md:h-96">
                <Image
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm text-[#BEC1DD] mb-4">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full font-semibold">
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-purple-400" />
                    {selectedPost.readTime}
                  </span>
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-[#e4ecff] mb-6">
                  {selectedPost.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-purple max-w-none">
                  <div
                    className="text-[#BEC1DD] leading-relaxed space-y-6 text-left"
                    dangerouslySetInnerHTML={{
                      __html: selectedPost.content
                        .split('\n')
                        .map(line => {
                          // Headers
                          if (line.startsWith('## ')) {
                            return `<h2 class="text-2xl font-bold text-[#e4ecff] mt-8 mb-4">${line.replace('## ', '')}</h2>`;
                          }
                          if (line.startsWith('### ')) {
                            return `<h3 class="text-xl font-bold text-[#e4ecff] mt-6 mb-3">${line.replace('### ', '')}</h3>`;
                          }
                          // Code blocks
                          if (line.startsWith('```')) {
                            return line.includes('```javascript') || line.includes('```typescript')
                              ? '<pre class="bg-[#13162D] p-4 rounded-lg overflow-x-auto my-4 border border-purple-500/20"><code class="text-purple-300">'
                              : '</code></pre>';
                          }
                          // Lists
                          if (line.match(/^\d+\./)) {
                            return `<li class="ml-6 mb-2">${line.replace(/^\d+\.\s*/, '')}</li>`;
                          }
                          if (line.startsWith('- ')) {
                            return `<li class="ml-6 mb-2 list-disc">${line.replace('- ', '')}</li>`;
                          }
                          // Bold text
                          if (line.includes('**')) {
                            return `<p class="mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-400">$1</strong>')}</p>`;
                          }
                          // Links
                          if (line.includes('[') && line.includes('](')) {
                            return `<p class="mb-4">${line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-purple-400 hover:underline">$1</a>')}</p>`;
                          }
                          // Regular paragraphs
                          if (line.trim()) {
                            return `<p class="mb-4">${line}</p>`;
                          }
                          return '';
                        })
                        .join('')
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
