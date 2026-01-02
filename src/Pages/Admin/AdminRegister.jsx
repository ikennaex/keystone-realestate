import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
    phoneNumber: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    console.log("Admin Registration Data:", formData);

    try {
      const res = await axios.post(`${baseUrl}api/admin/register`, formData)
      console.log(res)
      alert(res.data.message)
      navigate("/admin-login")
    } catch (err) {
      console.log(err)
      setLoading(false)
      console.log(err.response.data.message)
    } finally {
      setLoading(false)
    }
  };

  return (
    <section className="bg-white py-20 mt-20 text-slate-900">
      <div className="mx-auto max-w-md px-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Admin Registration
          </h1>
          <p className="mt-2 text-slate-600">
            Create a secure administrative account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          {/* Name */}
          <div>
            <label className="mb-1 block font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Admin Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

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
              placeholder="Minimum 10 characters"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-slate-400 hover:text-slate-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Role (Fixed) */}
          <div>
            <label className="mb-1 block font-semibold">Role</label>
            <input
              type="text"
              name="role"
              value="admin"
              disabled
              className="w-full cursor-not-allowed rounded-xl border bg-slate-200 px-4 py-3 text-slate-700"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-1 block font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              placeholder="1234567890"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Submit */}
          <button
          disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            {loading  ? "Processing..." : "Register Admin"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Admin accounts should only be created by authorized personnel.
          </p>
        </form>
      </div>
    </section>
  );
};

export default AdminRegister;
