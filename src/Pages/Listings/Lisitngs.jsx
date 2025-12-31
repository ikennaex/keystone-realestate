import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { baseUrl } from "../../baseUrl";
import Loader from "../../Components/Loaders/Loader";
import { div } from "framer-motion/client";

const Listings = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const getListings = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}api/properties`);
      setProperties(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredProperties = properties?.filter(
    (property) =>
      (filter === "All" || property.type === filter) &&
      property.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getListings();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

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
            <Link to={`/listings/${property.id}`} key={property.id}>
              <div
                key={property.id}
                className="rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-lg"
              >
                <img
                  src={property?.media[0]?.url}
                  alt={property.title}
                  className="h-48 w-full rounded-t-2xl object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {property.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {property.address +
                      ", " +
                      property.area +
                      ", " +
                      property.city +
                      ", " +
                      property.state}
                  </p>
                  <p className="mt-2 text-slate-900 font-semibold">
                    ${property.price}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    {property.listingType}
                  </p>
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
