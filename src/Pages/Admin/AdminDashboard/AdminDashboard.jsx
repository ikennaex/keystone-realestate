import React, { useState } from "react";
import { Users, UserCheck, Briefcase, FileText, AlertCircle } from "lucide-react";
import AdminUsers from "./AdminUsers";
import AdminAgents from "./AdminAgents";
import AdminPendingVerification from "./AdminPendingVerification";
import AdminCareers from "./AdminCareers";
import AdminApplications from "./AdminApplications";

// Sample data
const sampleUsers = [
  { id: 1, name: "Ikenna Akano", email: "ikenna@example.com", role: "user" },
  { id: 2, name: "Adaobi Eze", email: "adaobi@example.com", role: "user" },
];

const sampleAgents = [
  { id: 1, name: "Chinedu Okeke", email: "chinedu@example.com", phone: "08012345678", status: "verified" },
  { id: 2, name: "Oluchi Nwosu", email: "oluchi@example.com", phone: "08098765432", status: "pending" },
  { id: 3, name: "Adaobi Chukwu", email: "adaobi@example.com", phone: "08011223344", status: "pending" },
];

const sampleApplications = [
  { id: 1, name: "John Doe", roleApplied: "Frontend Developer", email: "john@example.com" },
  { id: 2, name: "Jane Smith", roleApplied: "Backend Developer", email: "jane@example.com" },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const pendingAgents = sampleAgents.filter(agent => agent.status === "pending");

  return (
    <div className="flex min-h-screen bg-slate-100 mt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0">
        <div className="p-6 text-2xl font-bold">Admin Panel</div>
        <nav className="mt-10 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full text-left px-6 py-3 hover:bg-slate-700 transition ${activeTab === "overview" ? "bg-slate-700" : ""}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`w-full text-left px-6 py-3 hover:bg-slate-700 transition ${activeTab === "users" ? "bg-slate-700" : ""}`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("agents")}
            className={`w-full text-left px-6 py-3 hover:bg-slate-700 transition ${activeTab === "agents" ? "bg-slate-700" : ""}`}
          >
            Agents
          </button>
          <button
            onClick={() => setActiveTab("pendingAgents")}
            className={`w-full text-left px-6 py-3 hover:bg-slate-700 transition ${activeTab === "pendingAgents" ? "bg-slate-700" : ""}`}
          >
            Pending Verification
          </button>
          <button
            onClick={() => setActiveTab("careers")}
            className={`w-full text-left px-6 py-3 hover:bg-slate-700 transition ${activeTab === "careers" ? "bg-slate-700" : ""}`}
          >
            Careers
          </button>
          {/* <button
            onClick={() => setActiveTab("applications")}
            className={`w-full text-left px-6 py-3 hover:bg-slate-700 transition ${activeTab === "applications" ? "bg-slate-700" : ""}`}
          >
            Applications
          </button> */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Overview Cards */}
        {activeTab === "overview" && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-10">
            <div className="rounded-2xl bg-white p-6 shadow flex items-center gap-4">
              <Users size={32} className="text-slate-900" />
              <div>
                <p className="text-slate-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold">{sampleUsers.length}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow flex items-center gap-4">
              <UserCheck size={32} className="text-slate-900" />
              <div>
                <p className="text-slate-400 text-sm">Total Agents</p>
                <p className="text-2xl font-bold">{sampleAgents.length}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow flex items-center gap-4">
              <AlertCircle size={32} className="text-slate-900" />
              <div>
                <p className="text-slate-400 text-sm">Pending Verification</p>
                <p className="text-2xl font-bold">{pendingAgents.length}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow flex items-center gap-4">
              <Briefcase size={32} className="text-slate-900" />
              <div>
                <p className="text-slate-400 text-sm">Careers Posted</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow flex items-center gap-4">
              <FileText size={32} className="text-slate-900" />
              <div>
                <p className="text-slate-400 text-sm">Applications</p>
                <p className="text-2xl font-bold">{sampleApplications.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Users Table */}
        {activeTab === "users" && (
          <AdminUsers />
        )}

        {/* Agents Table */}
        {activeTab === "agents" && (
          <AdminAgents />
        )}

        {/* Pending Agents Table */}
        {activeTab === "pendingAgents" && (
          <AdminPendingVerification />
        )}

        {/* Careers Form */}
        {activeTab === "careers" && (
          <AdminCareers />
        )}

        {/* Applications Table */}
        {activeTab === "applications" && (
          <AdminApplications />
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
