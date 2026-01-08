import React, { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white text-slate-900 py-20 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Get in touch with Keystone Real Estate. Fill the form, visit our office, or reach us on social media.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
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
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-slate-500"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold transition hover:bg-slate-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-8">
            {/* Google Map */}
            <div className="h-64 w-full rounded-2xl overflow-hidden shadow-md">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2323!2d7.4956!3d9.0574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOsKwMDMnNTQuNiJOIDfCsDI5JzI3LjYiRQ!5e0!3m2!1sen!2sng!4v1700000000000"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin />
                <p>17 Hobson street Newark NJ 07112</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail />
                <p>info@keystonerealestatepartners.co</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="hover:text-slate-700"><Instagram size={24} /></a>
              <a href="#" className="hover:text-slate-700"><Twitter size={24} /></a>
              <a href="#" className="hover:text-slate-700"><Linkedin size={24} /></a>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 4:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
