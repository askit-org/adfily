'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '../blog/posts';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const categories = ['All', 'SEO Strategy', 'Paid Ads', 'Short-form Content'];

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-accent-secondary to-accent-primary text-white shadow-[0_2px_10px_rgba(37, 99, 235, 0.15)]'
                : 'text-muted-silver hover:text-foreground bg-accent-primary/10 hover:bg-accent-primary/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid listing */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between group border border-accent-primary/25 h-full relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-muted-silver">
                  <span className="px-2.5 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-accent-secondary font-bold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title & summary */}
                <h3 className="font-syne font-bold text-xl text-foreground group-hover:text-accent-secondary transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-silver text-sm leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Action footer */}
              <div className="mt-8 pt-4 border-t border-accent-primary/25 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-silver">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent-secondary hover:text-accent-primary transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-silver text-sm">
          No articles found in this category. Check back soon!
        </div>
      )}
    </div>
  );
}
