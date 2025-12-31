import React from 'react'

const AdminCareers = () => {
  return (
          <div className="rounded-2xl bg-white p-6 shadow space-y-6">
            <h2 className="text-2xl font-semibold">Post a New Career</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Job Title" className="w-full rounded-xl border px-4 py-3" />
              <textarea placeholder="Job Description" className="w-full rounded-xl border px-4 py-3" />
              <button className="rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-700">
                Post Career
              </button>
            </form>
          </div>
  )
}

export default AdminCareers
