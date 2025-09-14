import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">GB</span>
              </div>
              <h3 className="text-2xl font-bold font-serif bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                GlamBook
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium platform connecting clients with professional makeup
              artists for exceptional beauty experiences and unforgettable
              looks.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-white text-sm">
                    {social[0].toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Bridal Makeup",
                "Party & Events",
                "Casual Makeup",
                "Fashion & Editorial",
                "Festive Makeup",
                "Specialty Makeup",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-pink-400 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-400 text-sm">123 Beauty Street</p>
                  <p className="text-gray-400 text-sm">
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@glambook.com"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm ml-3"
                >
                  info@glambook.com
                </a>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+912212345678"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm ml-3"
                >
                  +91 22 1234 5678
                </a>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm ml-3">
                  Mon-Sat: 9AM-8PM
                  <br />
                  Sun: 10AM-6PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GlamBook. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-pink-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-400 transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
