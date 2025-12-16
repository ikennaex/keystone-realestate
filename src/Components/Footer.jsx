import React from "react";
import { MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand / Map */}
          <div>
            <div className="my-4 ">
              <img className="h-16 rounded-xl" src="images/logo.jpg" alt="" />
            </div>

            <div className="mb-4 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Keystone Office Location"
                src="https://www.google.com/maps?q=Lagos%20Nigeria&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Connect With Us
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Business Hours
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Monday – Friday: 9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Saturday: 10:00 AM – 4:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Legal</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-white transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Keystone Real Estate. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
