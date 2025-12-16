import React, { useState } from "react";

const roles = [
  { title: "Frontend Developer", location: "Lagos, Nigeria" },
  { title: "Sales Executive", location: "Lagos, Nigeria" },
  { title: "Property Consultant", location: "Remote" },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", role: "", resume: null, message: "" });
  };

  return (
    <section className="bg-white text-slate-900 py-20 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero / Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">Careers at Keystone</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Join our team and help us provide top-notch real estate solutions.
          </p>
        </div>

        {/* Available Roles */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl text-center">Available Roles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <p className="mt-2 text-slate-600">{role.location}</p>
                <button className="mt-4 w-full rounded-2xl bg-slate-900 px-4 py-2 text-white font-semibold transition hover:bg-slate-700">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl text-center">Company Culture</h2>
          <p className="mx-auto max-w-3xl text-center text-lg text-slate-600 leading-relaxed">
            At Keystone Real Estate, we value integrity, innovation, and client-focused service. Our team collaborates to deliver professional solutions across residential, commercial, and investment properties. We encourage learning, growth, and fostering a supportive and inclusive environment.
          </p>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-center">Submit Your Application</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
            />
            <select
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
            >
              <option value="">Select Role</option>
              {roles.map((role, index) => (
                <option key={index} value={role.title}>
                  {role.title}
                </option>
              ))}
            </select>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full text-slate-900"
            />
            <textarea
              name="message"
              placeholder="Cover Letter / Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold transition hover:bg-slate-700"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Careers;
