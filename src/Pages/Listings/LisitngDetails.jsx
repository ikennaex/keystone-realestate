import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { Link, useParams } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";

const ListingDetails = () => {
  const { id } = useParams();

  const {user} = useAuth();
  console.log(user)
  const [property, setProperty] = useState({});
  const [virtualTourUrl, setVirtualTourUrl] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const getPropertyDetails = async () => {
    try {
      const res = await axios.get(`${baseUrl}api/properties/${id}`);
      setProperty(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getVirtualTourUrl = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}api/properties/${id}/virtual-tour`
      );
      setVirtualTourUrl(res.data.data[0]?.url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPropertyDetails();
    getVirtualTourUrl();
  }, []);

  useEffect(() => {
    if (property?.media?.length > 0) {
      setMainImage(property.media[0].url);
    }
  }, [property]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted! We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-white py-20 mt-20 text-text-customBlue">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-customBlue">
            {property.title}
          </h1>
          <p className="mt-2 text-slate-600">
            {property.address}, {property.area}, {property.city},{" "}
            {property.state} {property.postalCode}
          </p>
          <p className="mt-3 text-xl font-semibold text-customBlue">
            ${property.price}
          </p>
          <p className="mt-1 text-slate-500 capitalize">
           <span className="font-semibold">Property type:</span> {property.propertyType}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Media Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-[4/3] sm:h-96 w-full overflow-hidden rounded-2xl shadow-md">
              <img
                src={mainImage}
                alt="Property"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {property?.media?.map((photo, index) => (
                <img
                  key={index}
                  src={photo.url}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(photo.url)}
                  className={`h-20 w-20 sm:h-24 sm:w-24 cursor-pointer rounded-2xl object-cover border-2 transition ${
                    mainImage === photo.url
                      ? "border-slate-900"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>

            {/* Description */}
            <div className="mb-14 max-w-3xl">
              <h2 className="mb-3 text-2xl font-semibold text-customBlue">
                Property Description
              </h2>
              <p className="leading-relaxed text-slate-600">
                {property.description ||
                  "No description has been provided for this property."}
              </p>
            </div>

            {/* Virtual Tour */}
            {virtualTourUrl && (
              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-semibold">Virtual Tour</h2>
                <div className="aspect-video overflow-hidden rounded-2xl shadow-md bg-black">
                  <video
                    src={virtualTourUrl}
                    controls
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Inquiry Section */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm lg:sticky lg:top-24 h-fit">
            {user.role === "user" ? (
              <>
                <h2 className="mb-6 text-2xl font-semibold">
                  Inquire About This Listing
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
                  />

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-customBlue py-3 font-semibold text-white transition hover:bg-slate-700"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="mb-3 text-xl font-semibold text-slate-800">
                  Login required
                </h3>
                <p className="mb-6 text-slate-600">
                  Please log in to inquire about this property.
                </p>

                <Link
                  to="/user/login"
                  className="inline-block rounded-2xl bg-customBlue px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
                >
                  Login to Enquire
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
