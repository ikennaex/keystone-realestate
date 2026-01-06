import React from "react";
import { Link } from "react-router";

const listings = [
  {
    id: 1,
    title: "Luxury 4 Bedroom Duplex",
    location: "Newark, NJ",
    price: "$250,000,000",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    title: "Grade A Office Space",
    location: "Newark, NJ",
    price: "$18,000,000 / year",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },

  {
    id: 3,
    title: "High Yield Apartment Block",
    location: "Newark, NJ",
    price: "$1.2 Billion",
    type: "Investment",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },

    {
    id: 4,
    title: "Grade A Office Space",
    location: "Newark, NJ",
    price: "$18,000,000 / year",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
  },
];

const FeaturedListing = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold text-customBlue lg:text-4xl">
            Featured Listings
          </h2>
          <p className="mt-4 text-slate-600">
            Explore a curated selection of premium residential, commercial, and
            investment properties tailored to your goals.
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-customBlue-900 px-3 py-1 text-xs font-semibold text-white">
                  {listing.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {listing.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {listing.location}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    {listing.price}
                  </span>

                  <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900 hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
            <Link to={"/listings"}>
          <button className="rounded-2xl bg-customBlue px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
            View All Listings
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
