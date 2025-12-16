import React, { useState } from "react";

const property = {
  title: "Luxury 3 Bedroom Apartment",
  location: "Lagos, Nigeria",
  price: "₦120,000,000",
  type: "Residential",
  photos: [
    "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
  ],
  virtualTourUrl: "https://www.youtube.com/embed/M1lQLCsBL0g?si=6Mkb2wtjrm-OKHyd",
};

const ListingDetails = () => {
  const [mainImage, setMainImage] = useState(property.photos[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry submitted! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-white text-slate-900 py-20 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Property Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold lg:text-5xl">{property.title}</h1>
          <p className="mt-2 text-slate-600">{property.location}</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{property.price}</p>
          <p className="mt-1 text-slate-500">{property.type}</p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Photo Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="rounded-2xl shadow-md">
              <img
                src={mainImage}
                alt="Main property"
                className="w-full rounded-2xl object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {property.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(photo)}
                  className={`h-24 w-24 cursor-pointer rounded-2xl object-cover border-2 ${
                    mainImage === photo ? "border-slate-900" : "border-transparent"
                  } transition`}
                />
              ))}
            </div>

            {/* Virtual Tour */}
            <div className="mt-6">
              <h2 className="mb-4 text-2xl font-semibold">Virtual Tour</h2>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-md">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={property.virtualTourUrl}
                  title="Virtual Tour"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Inquire About This Listing</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
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
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold transition hover:bg-slate-700"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
