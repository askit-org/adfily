import React from 'react';
import { BLOG_POSTS } from './posts';
import BlogList from '../components/BlogList';

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-12">
      {/* Page Title Header */}
      <section className="max-w-2xl space-y-6 animate-fade-in-up">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-purple-light">
          Orbit Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          The Orbit Journal
        </h1>
        <p className="text-muted-silver text-sm md:text-base leading-relaxed">
          Case studies, algorithmic breakdowns, and digital scaling blueprints published by our creative and technical performance divisions.
        </p>
      </section>

      {/* Filterable Blog Posts List */}
      <BlogList posts={BLOG_POSTS} />
    </div>
  );
}
