import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Loader from "../../Components/Loaders/Loader";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";
import AgentResetPassword from "./AgentResetPassword";

const AgentForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { api } = useAgentAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // call your forgot password API here
      console.log(email);
      await api.post("api/agent/forgot-password", { email });

      alert("Password reset token sent to your email");
      navigate("/agent/reset-password", {
        state: { email },
      });
    } catch (err) {
      alert("Failed to send reset link");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border shadow-sm p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-customBlue">
            Forgot Password
          </h1>
          <p className="mt-2 text-slate-600 text-sm">
            Enter the email registered to your agent account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="agent@keystone.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-customBlue py-3 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
          >
            {loading ? <Loader /> : "Send Reset Link"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-600">
          Remembered your password?{" "}
          <Link
            to="/agent/login"
            className="font-semibold text-slate-900 hover:underline"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentForgotPassword;
