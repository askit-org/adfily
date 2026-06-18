import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../posts";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  // Await params for Next.js 16 dynamic route compatibility
  const params = await props.params;
  const slug = params?.slug;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-16 space-y-8 animate-fade-in-up">
      {/* Return Navigation */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-silver hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Journal</span>
        </Link>
      </div>

      {/* Main Header Info */}
      <div className="space-y-6 border-b border-accent-primary/25 pb-8">
        <span className="px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/45 text-accent-secondary text-xs font-semibold uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-xs text-muted-silver">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Blog Article Body */}
      <div
        className="prose  max-w-none text-muted-silver leading-relaxed space-y-6 text-base md:text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Bottom CTA Block */}
      <section className="glass-card p-8 rounded-3xl mt-16 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-secondary/10 to-transparent pointer-events-none" />
        <div className="max-w-xl mx-auto space-y-4 relative z-10">
          <h3 className="font-syne font-bold text-2xl text-foreground">
            Elevate Your Brand Trajectory
          </h3>
          <p className="text-muted-silver text-sm">
            Our creative and growth strategies are custom-built for scaling
            companies. Schedule a call with a strategy partner.
          </p>
          <div>
            <Link
              href="/contact"
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-secondary to-accent-primary text-foreground font-bold rounded-xl text-xs"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
