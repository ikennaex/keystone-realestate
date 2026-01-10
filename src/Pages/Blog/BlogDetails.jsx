import React from "react";
import { Link } from "react-router";

const BlogDetails = () => {
  return (
    <div className="min-h-screen bg-slate-50 mt-20">
      {/* Hero Image */}
      <div className="relative h-[420px] w-full">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          alt="Blog cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border">
            <Link
              to="/blog"
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              ← Back to Blog
            </Link>

            <h1 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
              How to Choose the Right Property in 2026
            </h1>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>Jan 12, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>By Keystone Editorial</span>
            </div>

            {/* Article Body */}
            <div className="prose prose-slate max-w-none mt-8">
              <p>
                Buying property is one of the biggest financial decisions you
                will ever make. Whether you are purchasing your first home or
                investing, understanding the market is critical.
              </p>

              <h2>Understand Your Budget</h2>
              <p>
                Before looking at listings, determine what you can comfortably
                afford. Consider not only the purchase price but also taxes,
                maintenance, and future repairs.
              </p>

              <h2>Location Still Matters</h2>
              <p>
                Property value is heavily influenced by location. Proximity to
                schools, transport, and essential amenities can significantly
                impact long-term appreciation.
              </p>

              <blockquote>
                A great property in the wrong location can cost you more in the
                long run.
              </blockquote>

              <h2>Think Long-Term</h2>
              <p>
                Real estate is not a short-term game. Look beyond current trends
                and focus on properties with long-term value.
              </p>

              <p>
                Working with verified agents and trusted platforms like Keystone
                ensures transparency and peace of mind throughout the process.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* Author Card */}
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-slate-900">
                  About Keystone
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Keystone provides verified property listings, trusted agents,
                  and expert insights to help you make confident real estate
                  decisions.
                </p>
              </div>

              {/* Related Posts */}
              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-slate-900 mb-4">
                  Related Articles
                </h3>

                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to="#"
                      className="font-medium text-slate-700 hover:underline"
                    >
                      Real Estate Investment Tips for Beginners
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="font-medium text-slate-700 hover:underline"
                    >
                      Renting vs Buying: What Makes Sense Today?
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="font-medium text-slate-700 hover:underline"
                    >
                      Avoid These Property Buying Mistakes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
