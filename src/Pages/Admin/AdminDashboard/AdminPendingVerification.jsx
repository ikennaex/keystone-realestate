import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import { baseUrl } from "../../../baseUrl";

const AdminPendingVerification = () => {
  const { api } = useAuth();
  const [pendingAgents, setPendingAgents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const unverifiedAgents = async () => {
    try {
      const res = await api.get("api/admin/agents/unverified");
      console.log(res.data)
      setPendingAgents(res.data.agents.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    unverifiedAgents();
  }, []);

  const approveAgents = async (agentId) => {
    try {
      const res = await api.post(`api/admin/agents/verify-agent/${agentId}`);
      alert(res.data.message);
      unverifiedAgents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
              <th className="border-b px-4 py-2 text-slate-500">Verification</th>
              <th className="border-b px-4 py-2 text-slate-500">Action</th>
            </tr>
          </thead>

          <tbody>
            {pendingAgents.map((agent) => (
              <tr key={agent.id} className="hover:bg-slate-50">
                <td className="border-b px-4 py-2">{agent.id}</td>
                <td className="border-b px-4 py-2">{agent.name}</td>
                <td className="border-b px-4 py-2">{agent.email}</td>
                <td className="border-b px-4 py-2">{agent.phoneNumber}</td>

                {/* VIEW ID */}
                <td className="border-b px-4 py-2">
                  {agent.verification_media ? (
                    <button
                      onClick={() => setSelectedId(agent.verification_media[0].url)}
                      className="text-customBlue underline font-semibold"
                    >
                      View ID
                    </button>
                  ) : (
                    <span className="text-slate-400">Not uploaded</span>
                  )}
                </td>

                <td className="border-b px-4 py-2">
                  <button
                    onClick={() => approveAgents(agent.id)}
                    className="rounded-xl bg-green-600 px-4 py-1 text-white hover:bg-green-700 mr-2"
                  >
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

      {/* ID PREVIEW MODAL */}
      {selectedId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative max-w-lg w-full rounded-2xl bg-white p-6">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-3 right-3 text-slate-600 hover:text-black"
            >
              ✕
            </button>

            <h3 className="mb-4 text-lg font-semibold">
              Verification ID
            </h3>

            <img
              src={selectedId}
              alt="Verification ID"
              className="w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPendingVerification;
