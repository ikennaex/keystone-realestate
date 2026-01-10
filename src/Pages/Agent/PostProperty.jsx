import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";
import { useNavigate } from "react-router";

const PostProperty = () => {
  const { api, agent, setAgent, accessToken } = useAgentAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    propertyType: "",
    listingType: "",
    status: "available",
    bedrooms: 0,
    bathrooms: 0,
    size: 0,
    address: "",
    postalCode: "",
    city: "",
    state: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const fetchAgent = async () => {
    try {
      const res = await api.get("api/agent-profile");
      setAgent(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAgent();
  }, []);

  useEffect(() => {
    if (selectedImages.length === 0) {
      setImagePreviews([]);
      return;
    }

    const previews = selectedImages.map((file) => URL.createObjectURL(file));

    setImagePreviews(previews);

    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [selectedImages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createProperty = async () => {
    const payload = {
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      size: Number(formData.size),
    };

    try {
      const res = await api.post(`${baseUrl}api/my-properties`, payload);
      return res.data.data.id;
    } catch (err) {
      alert(err.response?.data?.message || "Failed to post property");
    }
  };

  const uploadImages = async (propertyId, files) => {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files[]", file);
    });

    if (video) {
      formData.append("files[]", video);
    }

    formData.append("propertyId", propertyId);

    return api.post(`/api/my-properties/${propertyId}/upload-media`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const propertyId = await createProperty();
      if (!propertyId) return;

      await uploadImages(propertyId, selectedImages);

      alert("Property uploaded successfully");
      navigate("/agent/dashboard");
    } catch (error) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-20 bg-white py-10 sm:py-16 lg:py-20 sm:mt-16 lg:mt-20 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h1 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Post a Property Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 sm:gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8 shadow-sm"
        >
          {/* Title */}
          <div>
            <label className="mb-1 block font-semibold">Property Title</label>
            <input
              type="text"
              name="title"
              required
              maxLength={255}
              placeholder="Luxury 3 Bedroom Apartment"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block font-semibold">Description</label>
            <textarea
              name="description"
              rows={4}
              required
              placeholder="Add a description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
            />
          </div>

          {/* Price & Size */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">Price</label>
              <input
                type="number"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">Property Size (sqm)</label>
              <input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>
          </div>

          {/* Property Type & Listing Type */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">Property Type</label>
              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <option value="">Select property type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="shortlet">Shortlet</option>
                <option value="penthouse">Penthouse</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-semibold">Listing Type</label>
              <select
                name="listingType"
                required
                value={formData.listingType}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <option value="">Select listing type</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>

          {/* Status, Bedrooms & Bathrooms */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-1 block font-semibold">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-semibold">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                placeholder="Bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                placeholder="Bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="mb-1 block font-semibold">Address</label>
            <input
              type="text"
              name="address"
              required
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
            />
          </div>

          {/* Area, City, State */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-1 block font-semibold">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                required
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                className="rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold">City</label>
              <input
                type="text"
                name="city"
                required
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>
            <div>
              <label className="mb-1 block font-semibold">State</label>
              <input
                type="text"
                name="state"
                required
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
              />
            </div>
          </div>

          {/* Images */}
          <label className="mb-1 block font-semibold">Property Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setSelectedImages(Array.from(e.target.files))}
            className="block w-full text-sm text-slate-600
              file:mr-4 file:rounded-lg file:border-0
              file:bg-customBlue file:px-4 file:py-2
              file:text-white hover:file:bg-customBlue"
          />

          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {imagePreviews.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-40 sm:h-32 w-full object-cover rounded-xl"
                  alt=""
                />
              ))}
            </div>
          )}

          {/* Video */}
          <label className="mb-1 block font-semibold">Property Video (Optional)</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="block w-full text-sm text-slate-600
              file:mr-4 file:rounded-lg file:border-0
              file:bg-customBlue file:px-4 file:py-2
              file:text-white hover:file:bg-customBlue"
          />

          <button
            disabled={loading}
            type="submit"
            className="mt-4 w-full sm:w-auto rounded-2xl bg-customBlue
              px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white
              transition hover:bg-customBlue/50 disabled:bg-customBlue/50"
          >
            {loading ? "Posting..." : "Publish Property"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostProperty;
