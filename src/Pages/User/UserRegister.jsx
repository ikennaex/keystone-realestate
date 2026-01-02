import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";
import { useAuth } from "../../Contexts/AuthContext";
import axios from "axios";
import { baseUrl } from "../../baseUrl";

const UserRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  //   const { api, setAccessToken, setAgent, isAuthenticated } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}api/auth/register`, formData);
      alert(res.data.message);
      navigate("/user/login");
      console.log(res);
    } catch (err) {
      setLoading(false);
      alert(err.response.data.message || "Register failed");
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
          <h1 className="text-3xl font-bold lg:text-4xl">User Sign up</h1>
          {/* <p className="mt-2 text-slate-600">
            
          </p> */}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="mb-1 block font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="user@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              required
              placeholder="Enter your Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block font-semibold">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Minimum 10 characters"
                value={formData.password}
                onChange={handleChange}
                min={10}
                className="w-full rounded-xl border px-4 py-3 pr-12 focus:ring-2 focus:ring-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-customBlue px-6 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:bg-customBlue/50"
          >
            {loading ? "Processing..." : "Login"}
          </button>
          {/* 
          <p className="text-center text-sm text-slate-500">
            Forgot your password?{" "}
            <a href="#" className="text-slate-900 underline">
              Reset it
            </a>
          </p> */}
          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/user/login" className="text-slate-900 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserRegister;
