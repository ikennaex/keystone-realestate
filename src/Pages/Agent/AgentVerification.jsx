import React, { useState } from "react";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router";

const AgentVerification = () => {
  const { api, agent, setAgent } = useAgentAuth();
  const [idFile, setIdFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setIdFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idFile) {
      alert("Please select an ID to upload");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", idFile);

    try {
      const res = await api.post(`api/agents/upload-verification/${agent.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data.document.mediable)
      alert(res.data.message);
      setAgent(res.data.document.mediable);
      setIdFile(null);
      navigate("/agent/dashboard")
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to upload ID");
    } finally {
      setLoading(false);
    }
  };



  return (
    <section className="min-h-screen bg-slate-100 py-20 mt-20 text-slate-900">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold mb-4">Agent Verification</h1>
        <p className="mb-8 text-slate-600">
          Upload a valid identification document (ID card, Passport, or Driver's License) to verify your agent account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="mb-2 block font-semibold">Upload ID Document</label>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="w-full rounded-xl border px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          {idFile && (
            <p className="text-slate-700">
              Selected file: <span className="font-medium">{idFile.name}</span>
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-customBlue px-6 py-3 font-semibold text-white transition hover:bg-customBlue/80 disabled:bg-customBlue/50"
          >
            {loading ? "Uploading..." : "Submit Verification"}
          </button>
        </form>

        <p className="mt-6 text-slate-500 text-sm">
          Once submitted, your ID will be reviewed and your account will be verified within 24-48 hours.
        </p>
      </div>
    </section>
  );
};

export default AgentVerification;
