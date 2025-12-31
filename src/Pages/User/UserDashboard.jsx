import React from "react";
import {
  Home,
  Heart,
  MessageSquare,
  Search,
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            User Dashboard
          </h1>
          <p className="mt-2 text-slate-600">
            Manage your properties, enquiries, and saved listings.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <Home className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Viewed Properties</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <Heart className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Saved Listings</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <MessageSquare className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Enquiries Sent</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
            </div>
          </div>
{/* 
          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <Search className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Available Listings</p>
                <h3 className="text-2xl font-bold">120+</h3>
              </div>
            </div>
          </div> */}
        </div>

        {/* Actions */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Saved Properties */}
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Saved Properties
            </h2>
            <p className="mb-6 text-slate-600">
              Quickly access properties you have saved for later.
            </p>
            <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              View Saved Listings
            </button>
          </div>

          {/* Enquiries */}
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              My Enquiries
            </h2>
            <p className="mb-6 text-slate-600">
              Track responses from agents and follow up easily.
            </p>
            <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              View Enquiries
            </button>
          </div>
        </div>

        {/* Browse CTA */}
        <div className="mt-12 rounded-2xl bg-slate-900 p-10 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">
            Find Your Next Property
          </h2>
          <p className="mb-6 text-slate-300">
            Browse verified listings from trusted agents.
          </p>
          <button className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            Browse Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
