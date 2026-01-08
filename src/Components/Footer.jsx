import React from "react";
import {
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Home,
  FileText,
  Users,
  Briefcase,
  Info,
} from "lucide-react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand / Map */}
          <div className="space-y-4">
            <img
              className="h-16 rounded-xl"
              src="images/logo.jpg"
              alt="Keystone Logo"
            />

            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <iframe
                title="Keystone Office Location"
                src="https://www.google.com/maps?q=17+Hobson+Street+Newark+NJ+07112&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin size={16} />
              <span>17 Hobson Street, Newark NJ 07112</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { icon: Home, label: "Home", href: "/" },
                { icon: FileText, label: "Listings", href: "/listings" },
                { icon: Users, label: "About Us", href: "/about" },
                { icon: Briefcase, label: "Careers", href: "/careers" },
                { icon: Info, label: "Contact", href: "/contact" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon size={16} />
                  <a
                    href={href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900 p-2 text-white transition hover:bg-emerald-600 hover:text-white"
                  aria-label={Icon.name}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Monday – Friday: 9:00 AM – 4:00 PM",
                "Saturday: 10:00 AM – 4:00 PM",
                "Sunday: Closed",
              ].map((hour, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{hour}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12">
          <Newsletter />
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
