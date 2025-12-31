import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router";

const AgentRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}api/agent/register`, formData);
      alert(res.data.message);
      navigate("/agent/login");
      console.log(res);
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 mt-20 text-slate-900">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-bold lg:text-4xl">Agent Registration</h1>
          <p className="mt-3 text-slate-600">
            Join Keystone Real Estate as a certified agent and gain access to
            exclusive listings, tools, and client leads.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="mb-1 block font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="mb-1 block font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="gbailey@example.net"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="mb-1 block font-semibold">Password</label>
            <input
              type="password"
              name="password"
              minLength={10}
              placeholder="Minimum 10 characters"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="mb-1 block font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="1234567890"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="mb-1 block font-semibold">Address</label>
            <input
              type="text"
              name="address"
              placeholder="123 Main St"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* City + State */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">City</label>
              <input
                type="text"
                name="city"
                placeholder="New York"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">State</label>
              <input
                type="text"
                name="state"
                placeholder="New York"
                value={formData.state}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-700"
          >
            {loading ? "Processing..." : "Register as Agent" }
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            By registering, you agree to Keystone Real Estate policies and
            onboarding terms.
          </p>
        </form>
      </div>
    </section>
  );
};

export default AgentRegister;
