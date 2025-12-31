import React, { useEffect, useState } from "react";
import { PlusCircle, Edit, Trash2, Mail, LogOut } from "lucide-react";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";
import { Link, useNavigate } from "react-router";

const sampleProperties = [
  {
    id: 1,
    title: "Luxury Apartment in Lekki",
    price: "$45,000,000",
    status: "available",
    listingType: "sale",
  },
  {
    id: 2,
    title: "Shortlet Apartment - Ikoyi",
    price: "$150,000 / night",
    status: "unavailable",
    listingType: "rent",
  },
  {
    id: 3,
    title: "Commercial Space - Victoria Island",
    price: "$2,500,000 / year",
    status: "sold",
    listingType: "sale",
  },
];

const AgentDashboard = () => {
  const [properties] = useState(sampleProperties);
  const { api, setAccessToken, setAgent, isAuthenticated } = useAgentAuth();
  const [summary, setSummary] = useState({})
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const logout = await api.post("api/agent/logout");
      console.log(logout);
      navigate("/agent/login");
      setAccessToken(null);
      setAgent(null);
    } catch (err) {
      console.log(err);
      alert(err.data.data.message || "Logout failed");
    }
  };

  const getPropertyCount = async () => {
    try {
      const res = await api.get("api/agent/my-properties");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getSummary = async () => {
    try {
      const res = await api.get("api/agent/dashboard");
      setSummary(res.data)
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPropertyCount();
    getSummary()
  }, []);

  if (!isAuthenticated) {
    navigate("/agent/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Agent Dashboard
            </h1>
            <p className="mt-2 text-slate-600">
              Manage your property listings and enquiries.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* View Enquiries */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-red-600 transition hover:bg-slate-100"
            >
              <LogOut size={18} />
              Logout
            </button>
            {/* View Enquiries */}
            <a
              href="/agent/enquiries"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <Mail size={18} />
              View Enquiries
            </a>

            {/* Post Property */}
            <Link
              to="/agent/post-property"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold transition hover:bg-slate-700"
            >
              <PlusCircle size={18} />
              Post New Property
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Properties" value={summary.properties} />
          <StatCard label="Pending Enquiries" value={summary.propertiesWithInquiries} />
        </div>

        {/* Property Management Table */}
        <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">
            Property Management
          </h2>

          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b px-4 py-3 text-slate-500">Property</th>
                <th className="border-b px-4 py-3 text-slate-500">Price</th>
                <th className="border-b px-4 py-3 text-slate-500">
                  Listing Type
                </th>
                <th className="border-b px-4 py-3 text-slate-500">Status</th>
                <th className="border-b px-4 py-3 text-slate-500">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="hover:bg-slate-50">
                  <td className="border-b px-4 py-3 font-medium">
                    {property.title}
                  </td>
                  <td className="border-b px-4 py-3">{property.price}</td>
                  <td className="border-b px-4 py-3 capitalize">
                    {property.listingType}
                  </td>
                  <td className="border-b px-4 py-3">
                    <StatusBadge status={property.status} />
                  </td>
                  <td className="border-b px-4 py-3">
                    <div className="flex items-center gap-3">
                      <button className="rounded-xl border p-2 hover:bg-slate-100">
                        <Edit size={16} />
                      </button>
                      <button className="rounded-xl border p-2 hover:bg-red-50 text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {properties.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No properties posted yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;

/* Reusable Components */

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl bg-white p-6 shadow">
    <p className="text-sm text-slate-400">{label}</p>
    <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    available: "bg-green-100 text-green-700",
    sold: "bg-blue-100 text-blue-700",
    unavailable: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
};
