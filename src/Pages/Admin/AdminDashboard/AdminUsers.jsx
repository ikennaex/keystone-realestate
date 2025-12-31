import React from "react";

// Sample data
const sampleUsers = [
  { id: 1, name: "Ikenna Akano", email: "ikenna@example.com", role: "user" },
  { id: 2, name: "Adaobi Eze", email: "adaobi@example.com", role: "user" },
];

const AdminUsers = () => {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow p-6">
      <h2 className="mb-6 text-2xl font-semibold">All Users</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-slate-500">ID</th>
            <th className="border-b px-4 py-2 text-slate-500">Name</th>
            <th className="border-b px-4 py-2 text-slate-500">Email</th>
            <th className="border-b px-4 py-2 text-slate-500">Role</th>
          </tr>
        </thead>
        <tbody>
          {sampleUsers.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50">
              <td className="border-b px-4 py-2">{user.id}</td>
              <td className="border-b px-4 py-2">{user.name}</td>
              <td className="border-b px-4 py-2">{user.email}</td>
              <td className="border-b px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
