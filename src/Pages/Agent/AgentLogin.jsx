import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";

const AgentLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const {api, setAccessToken, setAgent,isAuthenticated} = useAgentAuth()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(`api/agent/login`, formData);
      setAccessToken(res.data.token)
      setAgent(res.data.agent)
      alert(res.data.message);
      navigate("/agent/dashboard");
      console.log(res);
    } catch (err) {
      setLoading(false);
      alert(err.response.data.message || "Login failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // if (isAuthenticated) {
  //   navigate("/agent/dashboard")
  // }

  return (
    <section className="bg-white py-20 mt-20 text-slate-900">
      <div className="mx-auto max-w-md px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">Agent Login</h1>
          <p className="mt-2 text-slate-600">
            Access your dashboard and manage your listings.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm space-y-6"
        >
          {/* Email */}
          <div>
            <label className="mb-1 block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="agent@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="mb-1 block font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 pr-12 focus:ring-2 focus:ring-slate-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-customBlue px-6 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:bg-customBlue/50"
          >
            {loading ? "Processing..." : "Login"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Forgot your password?{" "}
            <a href="#" className="text-slate-900 underline">
              Reset it
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default AgentLogin;
