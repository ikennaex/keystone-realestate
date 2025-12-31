import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";
import { useAgentAuth } from "../../Contexts/AgentAuthContext";
import { useNavigate } from "react-router";

const PostProperty = () => {
  const { api, agent, setAgent, accessToken } = useAgentAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  console.log(accessToken);
  console.log(agent);
  const [formData, setFormData] = useState({
    // agent: agent ? agent.id : null,
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
    area: "",
    city: "",
    state: "",
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);

  const fetchAgent = async () => {
    try {
      const res = await api.get("api/agent-profile");
      console.log(res);
      setAgent(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // for image previews
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

  useEffect(() => {
    fetchAgent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // create property
  const createProperty = async () => {
    console.log("Submitted Property:", formData);
    const payload = {
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      size: Number(formData.size),
    };
    // sending payload to backend because it needs to be formatted to number
    try {
      const res = await api.post(`${baseUrl}api/properties`, payload);
      console.log(res);
      return res.data.data.id;
      // alert(res.data.message || "Property posted successfully");
      // navigate("/agent/dashboard");
    } catch (err) {
      console.log(err);
      alert(err.response.data.message || "Failed to post property");
    }
  };

  const uploadImages = async (propertyId, files) => {
    const formData = new FormData();
    console.log(files);

    files.forEach((file) => {
      formData.append("files[]", file);
    });

    if (video) {
      formData.append("files[]", video);
    }

    formData.append("propertyId", propertyId);

    const res = await api.post(
      `/api/properties/${propertyId}/upload-media`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const propertyId = await createProperty();
      if (!propertyId) return;
      const res = await uploadImages(propertyId, selectedImages);
      console.log(res);

      alert("Property uploaded successfully");
      navigate("/agent/dashboard");
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Submitted Property:", formData);

  //   try {
  //     const res = await api.post(`${baseUrl}api/properties`, formData);
  //     console.log(res);
  //     alert(res.data.message || "Property posted successfully");
  //     navigate("/agent/dashboard");
  //   } catch (err) {
  //     console.log(err);
  //     alert(err.response.data.message || "Failed to post property");
  //   }
  // };

  return (
    <section className="bg-white py-20 mt-20 text-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-8 text-3xl font-bold lg:text-4xl">
          Post a Property Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          {/* Title */}
          <div>
            <label className="mb-1 block font-semibold">Property Title</label>
            <input
              type="text"
              name="title"
              maxLength={255}
              required
              placeholder="Luxury 3 Bedroom Apartment"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block font-semibold">Description</label>
            <textarea
              name="description"
              rows={4}
              required
              placeholder="add a description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Price + Size */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">Price</label>
              <input
                type="number"
                name="price"
                required
                placeholder="4326.41"
                value={formData.price}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                Property Size (sqm)
              </label>
              <input
                type="number"
                name="size"
                placeholder="4326.41"
                value={formData.size}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>
          </div>

          {/* Property Type + Listing Type */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">Property Type</label>
              <select
                name="propertyType"
                required
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              >
                <option value="">Select type</option>
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
                className="w-full rounded-xl border px-4 py-3"
              >
                <option value="">Select listing</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>

          {/* Status + Beds + Baths */}
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-1 block font-semibold">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
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
                placeholder="3"
                value={formData.bedrooms}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                placeholder="2"
                value={formData.bathrooms}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="mb-1 block font-semibold">Address</label>
            <input
              type="text"
              name="address"
              maxLength={500}
              required
              placeholder="Lekki Phase 1, Lagos"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          {/* Area + City + State */}
          <div className="grid gap-6 sm:grid-cols-3">
            <input
              type="text"
              name="area"
              maxLength={100}
              required
              placeholder="Victoria Island"
              value={formData.area}
              onChange={handleChange}
              className="rounded-xl border px-4 py-3"
            />
            <input
              type="text"
              name="city"
              maxLength={100}
              required
              placeholder="Lagos"
              value={formData.city}
              onChange={handleChange}
              className="rounded-xl border px-4 py-3"
            />
            <input
              type="text"
              name="state"
              maxLength={100}
              required
              placeholder="Lagos State"
              value={formData.state}
              onChange={handleChange}
              className="rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">Property Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setSelectedImages(Array.from(e.target.files))}
            />

            {imagePreviews.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {imagePreviews.map((src, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border"
                  >
                    <img
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              Property Video (Optional)
            </label>
            <input
              type="file"
              multiple
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0] || null)}
            />

            {/* {imagePreviews.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {imagePreviews.map((src, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border"
                  >
                    <video
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )} */}
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            type="submit"
            className="mt-4 rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-700 disabled:bg-slate-800/50"
          >
            {loading ? "Posting..." : "Publish Property"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostProperty;
