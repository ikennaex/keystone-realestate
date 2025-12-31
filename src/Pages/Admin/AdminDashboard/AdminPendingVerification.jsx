import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import { baseUrl } from "../../../baseUrl";

const AdminPendingVerification = () => {
  const { api } = useAuth();
  const [pendingAgents, setPendingAgents] = useState([]);

  const unverifiedAgents = async () => {
    try {
      const res = await api.get("api/admin/agents/unverified");
      console.log(res);
      setPendingAgents(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    unverifiedAgents();
  }, []);

  const approveAgents = async (agentId) => {
    console.log("Approving agent with ID:", agentId);
    try {
      const res = await api.post(`api/admin/agents/verify-agent/${agentId}`);
      alert(res.data.message);
      unverifiedAgents();
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow p-6">
      <h2 className="mb-6 text-2xl font-semibold">
        Pending Agent Verification
      </h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-slate-500">ID</th>
            <th className="border-b px-4 py-2 text-slate-500">Name</th>
            <th className="border-b px-4 py-2 text-slate-500">Email</th>
            <th className="border-b px-4 py-2 text-slate-500">Phone</th>
            <th className="border-b px-4 py-2 text-slate-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingAgents.map((agent, index) => (
            <tr key={index} className="hover:bg-slate-50">
              <td className="border-b px-4 py-2">{agent.id}</td>
              <td className="border-b px-4 py-2">{agent.name}</td>
              <td className="border-b px-4 py-2">{agent.email}</td>
              <td className="border-b px-4 py-2">{agent.phoneNumber}</td>
              <td className="border-b px-4 py-2">
                <button onClick={() => approveAgents(agent.id)} className="rounded-xl bg-green-600 px-4 py-1 text-white hover:bg-green-700 mr-2">
                  Approve
                </button>
                <button className="rounded-xl bg-red-600 px-4 py-1 text-white hover:bg-red-700">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPendingVerification;
