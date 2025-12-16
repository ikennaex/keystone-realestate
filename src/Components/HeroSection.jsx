import { motion } from "framer-motion";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-customBlue/40 via-slate-900/30 to-customBlue/30" />

      {/* Stronger overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content container */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 lg:py-32 mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight lg:text-6xl"
        >
          Smart Real Estate Solutions Built for Growth and Security
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-200"
        >
          We deliver a professional, user focused real estate experience that
          strengthens brand credibility, attracts qualified leads, and supports
          residential, commercial, and investment property goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
            <Link to={"/listings"}>
          <button className="rounded-2xl bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200">
            Explore Properties
          </button>
            </Link>

            <Link to={"/contact"}>
          <button className="rounded-2xl border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10">
            Talk to an Expert
          </button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
