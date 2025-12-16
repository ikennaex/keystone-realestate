import React, { useState } from "react";
import { Link } from "react-router";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Luxury 3 Bedroom Apartment",
    location: "Lagos, Nigeria",
    price: "₦120,000,000",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    type: "Residential",
  },
  {
    id: 2,
    title: "Modern Office Space",
    location: "Abuja, Nigeria",
    price: "₦250,000,000",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    type: "Commercial",
  },
  {
    id: 3,
    title: "Investment Property with High ROI",
    location: "Port Harcourt, Nigeria",
    price: "₦80,000,000",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    type: "Investment",
  },
  {
    id: 4,
    title: "Cozy Family House",
    location: "Lagos, Nigeria",
    price: "₦70,000,000",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    type: "Residential",
  },
];

const Listings = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProperties = properties.filter(
    (property) =>
      (filter === "All" || property.type === filter) &&
      property.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white text-slate-900 py-20 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search & Filters */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-500 sm:w-1/2"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 sm:w-1/4"
          >
            <option value="All">All Types</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Investment">Investment</option>
          </select>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Link to={"/listings/jfjfj"}>
            <div
              key={property.id}
              className="rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-lg"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full rounded-t-2xl object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{property.location}</p>
                <p className="mt-2 text-slate-900 font-semibold">{property.price}</p>
                <p className="mt-2 text-sm text-slate-500">{property.type}</p>
                <button className="mt-4 w-full rounded-2xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">
                  View Details
                </button>
              </div>
            </div>
            </Link>
          ))}

          {filteredProperties.length === 0 && (
            <p className="col-span-full text-center text-slate-500">
              No properties found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Listings;
