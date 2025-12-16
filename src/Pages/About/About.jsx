import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Sample team and testimonials data
const teamMembers = [
  {
    name: "Ik Okoye",
    role: "CEO & Founder",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Adaobi Eze",
    role: "Head of Sales",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chinedu Okeke",
    role: "Lead Investment Consultant",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const testimonials = [
  {
    name: "Oluchi Nwosu",
    feedback:
      "Keystone Real Estate helped me find my dream home effortlessly. Their team is knowledgeable and responsive!",
  },
  {
    name: "Emeka Udo",
    feedback:
      "Professional, reliable, and client-focused. I highly recommend Keystone for any property investment.",
  },
  {
    name: "Ngozi Okafor",
    feedback:
      "Exceptional service and expert guidance. Keystone made the process smooth and stress-free.",
  },
];

export default function AdvancedAbout() {
  return (
    <section className="bg-white text-slate-900">
      {/* Hero Top Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/aboutvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight lg:text-6xl"
          >
            About Keystone Real Estate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-white/90"
          >
            We are committed to delivering professional, innovative, and
            client-focused real estate solutions across residential, commercial,
            and investment properties.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Mission & Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Mission & Values</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg">
              <h3 className="font-semibold text-lg">Client Focus</h3>
              <p className="mt-2 text-slate-600">
                Deliver exceptional client-centered real estate solutions with transparency and integrity.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg">
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="mt-2 text-slate-600">
                Continuously improve our services to provide modern and reliable property solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg">
              <h3 className="font-semibold text-lg">Integrity</h3>
              <p className="mt-2 text-slate-600">
                Maintain ethical standards in all our transactions and interactions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg">
              <h3 className="font-semibold text-lg">Sustainable Growth</h3>
              <p className="mt-2 text-slate-600">
                Support long-term value and profitability for our clients and community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Bios */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative rounded-2xl bg-slate-50 p-6 text-center shadow-lg transition hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="mt-2 text-slate-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Client Testimonials</h2>
          <Swiper spaceBetween={30} slidesPerView={1} loop autoplay={{ delay: 4000 }}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-slate-50 p-8 shadow-lg max-w-3xl mx-auto text-center"
                >
                  <p className="text-slate-700 italic">"{testimonial.feedback}"</p>
                  <p className="mt-4 font-semibold text-slate-900">- {testimonial.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
