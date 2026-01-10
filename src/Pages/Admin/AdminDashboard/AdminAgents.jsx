import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";

const AdminAgents = () => {
  const { api } = useAuth();
  const [agents, setAgents] = useState([]);
  
  const verifiedAgents = async () => {
    try {
      const res = await api.get("api/admin/agents/verified");
      console.log(res);
      setAgents(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    verifiedAgents();
  }, []);

  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow p-6">
      <h2 className="mb-6 text-2xl font-semibold">All Agents</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-slate-500">ID</th>
            <th className="border-b px-4 py-2 text-slate-500">Name</th>
            <th className="border-b px-4 py-2 text-slate-500">Email</th>
            <th className="border-b px-4 py-2 text-slate-500">Phone</th>
            <th className="border-b px-4 py-2 text-slate-500">Status</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="hover:bg-slate-50">
              <td className="border-b px-4 py-2">{agent.id}</td>
              <td className="border-b px-4 py-2">{agent.name}</td>
              <td className="border-b px-4 py-2">{agent.email}</td>
              <td className="border-b px-4 py-2">{agent.phone}</td>
              <td className="border-b px-4 py-2">{agent.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAgents;
