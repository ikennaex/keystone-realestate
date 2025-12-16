import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to={"/"}>
        <div className="text-xl font-bold text-slate-900">
          <img className="h-16" src="/images/logo.jpg" alt="" />
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="listings"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            View Listings
          </a>

          <a
            href="#agents"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Meet Agents
          </a>

          <a
            href="#consultation"
            className="rounded-xl bg-customBlue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Schedule Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-customBlue"></span>
            <span className="block h-0.5 w-6 bg-customBlue"></span>
            <span className="block h-0.5 w-6 bg-customBlue"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#listings"
              className="text-sm font-medium text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              View Listings
            </a>

            <a
              href="#agents"
              className="text-sm font-medium text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              Meet Agents
            </a>

            <a
              href="#consultation"
              className="rounded-xl bg-customBlue px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
