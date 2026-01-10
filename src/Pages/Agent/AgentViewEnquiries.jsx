import React, { useEffect, useState } from "react";
import { Phone, MapPin, CheckCircle, Mail } from "lucide-react";
import { useAuth } from "../../Contexts/AuthContext";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";



const AgentViewEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const {api} = useAgentAuth()

    const getEnquiries = async () => {
    try {
      const res = await api.get("api/my-properties/inquiries");
      console.log(res)
      setEnquiries(res.data.inquiries);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getEnquiries()
  }, [])

  const markAsContacted = id => {
    setEnquiries(prev =>
      prev.map(enquiry =>
        enquiry.id === id
          ? { ...enquiry, contacted: true }
          : enquiry
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Client Enquiries
          </h1>
          <p className="mt-2 text-slate-600">
            View and manage all property enquiries from clients.
          </p>
        </div>

        {/* Enquiries List */}
        <div className="space-y-6">
          {enquiries?.map(enquiry => (
            <div
              key={enquiry.id}
              className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                {/* Client Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {enquiry.name}
                  </h3>
{/* 
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={16} />
                    {enquiry.address}
                  </div> */}

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone size={16} />
                    {enquiry.phoneNumber}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail size={16} />
                    {enquiry.email}
                  </div>
                </div>

                {/* Status */}
                <div>
                  {enquiry.contacted ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                      <CheckCircle size={16} />
                      Contacted
                    </span>
                  ) : (
                    <button
                      onClick={() => markAsContacted(enquiry.id)}
                      className="rounded-2xl bg-customBlue px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      Mark as Contacted
                    </button>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-slate-700">
                {enquiry.description}
              </div>
            </div>
          ))}

          {enquiries.length === 0 && (
            <div className="rounded-2xl bg-white p-10 text-center text-slate-500 shadow">
              No enquiries available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentViewEnquiries;
