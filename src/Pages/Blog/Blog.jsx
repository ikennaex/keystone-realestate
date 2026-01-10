import React from "react";
import { Link } from "react-router";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Property in 2026",
    excerpt:
      "Buying property is a major decision. Here are key things to consider before making that move.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    date: "Jan 12, 2026",
    readTime: "5 min read",
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 mt-20">
      {/* Hero */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Keystone Insights
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Expert insights, market updates, and guides to help you make smarter
            real estate decisions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Featured Post */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 items-center">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="h-80 w-full rounded-3xl object-cover shadow"
          />

          <div>
            <span className="text-sm font-semibold text-blue-600">
              Featured
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {blogPosts[0].title}
            </h2>
            <p className="mt-4 text-slate-600">
              {blogPosts[0].excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span>{blogPosts[0].date}</span>
              <span>•</span>
              <span>{blogPosts[0].readTime}</span>
            </div>

            <Link
              to={`/blog/${blogPosts[0].id}`}
              className="inline-block mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Read Article
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="rounded-3xl bg-white shadow-sm border overflow-hidden transition hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {post.title}
                </h3>

                <p className="mt-3 text-slate-600 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
