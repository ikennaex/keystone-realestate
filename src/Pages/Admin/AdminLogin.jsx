import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setAccessToken, setAdmin, setUser, api } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Admin Login Data:", formData);

    try {
      const res = await api.post(`/api/admin/login`, formData);
      console.log(res);
      setAccessToken(res.data.token);
      setUser(res.data.admin);
      navigate("/admin-dashboard");
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 mt-20 text-slate-900">
      <div className="mx-auto max-w-md px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">Admin Login</h1>
          <p className="mt-2 text-slate-600">
            Sign in to access the administration panel.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          {/* Email */}
          <div>
            <label className="mb-1 block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="admin@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
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
              className="w-full rounded-xl border px-4 py-3 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-slate-400 hover:text-slate-700"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            {loading ? "Processing..." : "Login"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Authorized personnel only.
          </p>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
