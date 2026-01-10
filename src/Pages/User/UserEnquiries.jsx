import React, { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import Loader from "../../Components/Loaders/Loader";

const UserEnquiries = () => {
  const { api } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState({});

  const fetchEnquiries = async () => {
    try {
      const res = await api.get("api/inquiries/my-inquiries");
      console.log(res);
      setEnquiries(res.data.inquiries);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    replied: "bg-blue-100 text-blue-800",
    resolved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20 mt-20">
        {/* <p className="text-slate-500">Loading enquiries...</p> */}
        <Loader />
      </div>
    );
  }

  if (enquiries?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center mt-20">
        <h2 className="text-2xl font-semibold mb-2">No enquiries yet</h2>
        <p className="text-slate-600">
          You have not sent any property enquiries.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8">My Enquiries</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border bg-white shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500">
              <th className="px-6 py-4">Property</th>
              <th className="px-6 py-4">Message</th>
              <th className="px-6 py-4">Appointment Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Sent On</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="border-t hover:bg-slate-50">
                <td className="px-6 py-4">
                  <p className="font-semibold">{enquiry?.property?.title}</p>
                  <p className="text-sm text-slate-500">
                    {enquiry?.property?.address}
                  </p>
                </td>

                <td className="px-6 py-4 text-slate-600">
                  <span className="block text-xs font-semibold text-slate-400 mb-1">
                    Message
                  </span>
                  <p className="line-clamp-2">{enquiry.description}</p>
                </td>

                <td className="px-6 py-4 text-slate-600">
                  <span className="block text-xs font-semibold text-slate-400 mb-1">
                    Appointment Date
                  </span>
                  {enquiry.appointment_date
                    ? new Date(enquiry.appointment_date).toLocaleDateString()
                    : "Not set"}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      statusStyles[enquiry.status] ||
                      "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {enquiry.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-500">
                  {new Date(enquiry.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {enquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className="rounded-2xl border bg-white p-5 shadow-sm space-y-4"
          >
            {/* Property */}
            <div>
              <h3 className="font-semibold text-lg">
                {enquiry?.property?.title}
              </h3>
              <p className="text-sm text-slate-500">
                {enquiry?.property?.state}
              </p>
            </div>

            {/* Message */}
            <div>
              <p className="text-xs font-semibold text-slate-400 mb-1">
                Message
              </p>
              <p className="text-slate-700">{enquiry.description}</p>
            </div>

            {/* Appointment Date */}
            <div>
              <p className="text-xs font-semibold text-slate-400 mb-1">
                Appointment Date
              </p>
              <p className="text-slate-700">
                {enquiry.appointment_date
                  ? new Date(enquiry.appointment_date).toLocaleDateString(
                      "en-US"
                    )
                  : "Not set"}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  statusStyles[enquiry.status] || "bg-slate-100 text-slate-800"
                }`}
              >
                {enquiry.status}
              </span>

              <span className="text-sm text-slate-500">
                {new Date(enquiry.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEnquiries;
