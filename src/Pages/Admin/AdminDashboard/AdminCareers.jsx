import React, { useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import axios from "axios";

const AdminCareers = () => {
  const { api, user } = useAuth();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [application_deadline, setApplication_deadline] = useState("");

  console.log(title, type, description, application_deadline);

  const postCareer = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("api/careers", {
        title,
        type,
        description,
        application_deadline,
      });
      alert("Job Created");
      console.log(res);

      setApplication_deadline("");
      setTitle("");
      setType("");
      setDescription("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow space-y-6">
      <h2 className="text-2xl font-semibold">Post a New Career</h2>
      <form onSubmit={postCareer} className="space-y-4">
        <select
          name="jobType"
          id="jobType"
          value={type}
          onChange={handleChange}
          required
          >
          <option value="">Select Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
        <input
          type="text"
          value={title}
          placeholder="Job Title"
          className="w-full rounded-xl border px-4 py-3"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Job Description"
          value={description}
          className="w-full rounded-xl border px-4 py-3"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {/* <input type="date" onChange={(e) => {setApplication_deadline(e.target.value)}} /> */}
        <button className="rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-700">
          Post Career
        </button>
      </form>
    </div>
  );
};

export default AdminCareers;
