import React, { useEffect, useState } from "react";
import { Home, Heart, MessageSquare, Search, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";

const UserDashboard = () => {
  const { api, setAccessToken, setUser } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const navigate= useNavigate()

  const handleLogout = async () => {
    try {
      const logout = await api.post("api/auth/logout");
      console.log(logout);
      navigate("/user/login");
      setAccessToken(null);
      setUser(null);
    } catch (err) {
      console.log(err);
      alert(err.data.data.message || "Logout failed");
    }
  };

  const getEnquiries = async () => {
    try {
      const res = await api.get("api/inquiries/my-inquiries");
      setEnquiries(res.data.inquiries);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              User Dashboard
            </h1>
            <p className="mt-1 text-slate-600">Manage your enquiries</p>
          </div>

          {/* Right */}
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 font-semibold text-red-600 transition hover:bg-red-100 hover:border-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <Home className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Viewed Properties</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </div> */}

          {/* <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <Heart className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Saved Listings</p>
                <h3 className="text-2xl font-bold">5</h3>
              </div>
            </div>
          </div> */}

          <div className="rounded-2xl bg-white p-6 shadow">
            <div className="flex items-center gap-4">
              <MessageSquare className="text-slate-900" />
              <div>
                <p className="text-sm text-slate-500">Enquiries Sent</p>
                <h3 className="text-2xl font-bold">{enquiries?.length}</h3>
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
          {/* <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Saved Properties
            </h2>
            <p className="mb-6 text-slate-600">
              Quickly access properties you have saved for later.
            </p>
            <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              View Saved Listings
            </button>
          </div> */}

          {/* Enquiries */}
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              My Enquiries
            </h2>
            <p className="mb-6 text-slate-600">
              Track responses from agents and follow up easily.
            </p>
            <Link to={"/user/inquiries"}>
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                View Enquiries
              </button>
            </Link>
          </div>
        </div>

        {/* Browse CTA */}
        <div className="mt-12 rounded-2xl bg-slate-900 p-10 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">Find Your Next Property</h2>
          <p className="mb-6 text-slate-300">
            Browse verified listings from trusted agents.
          </p>
          <button className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            <Link to={"/listings"}>Browse Listings</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
