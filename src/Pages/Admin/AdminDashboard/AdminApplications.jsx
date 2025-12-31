import React from "react";

const sampleApplications = [
  { id: 1, name: "John Doe", roleApplied: "Frontend Developer", email: "john@example.com" },
  { id: 2, name: "Jane Smith", roleApplied: "Backend Developer", email: "jane@example.com" },
];

const AdminApplications = () => {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow p-6">
      <h2 className="mb-6 text-2xl font-semibold">Career Applications</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-slate-500">ID</th>
            <th className="border-b px-4 py-2 text-slate-500">Name</th>
            <th className="border-b px-4 py-2 text-slate-500">Role Applied</th>
            <th className="border-b px-4 py-2 text-slate-500">Email</th>
          </tr>
        </thead>
        <tbody>
          {sampleApplications.map((app) => (
            <tr key={app.id} className="hover:bg-slate-50">
              <td className="border-b px-4 py-2">{app.id}</td>
              <td className="border-b px-4 py-2">{app.name}</td>
              <td className="border-b px-4 py-2">{app.roleApplied}</td>
              <td className="border-b px-4 py-2">{app.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApplications;
