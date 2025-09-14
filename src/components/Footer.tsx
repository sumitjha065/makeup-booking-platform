// import React from "react";
// import Link from "next/link";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
//                 <span className="text-white font-bold text-lg">GB</span>
//               </div>
//               <h3 className="text-2xl font-bold font-serif bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
//                 GlamBook
//               </h3>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Premium platform connecting clients with professional makeup
//               artists for exceptional beauty experiences and unforgettable
//               looks.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
//               >
//                 <span className="sr-only">Facebook</span>
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
//               >
//                 <span className="sr-only">Instagram</span>
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-5.541c0 1.446-.26 2.675-.682 3.587-.423.913-1.003 1.589-1.785 2.026-.731.39-1.589.616-2.559.616s-1.828-.226-2.559-.616c-.782-.437-1.362-1.113-1.785-2.026-.423-.912-.682-2.141-.682-3.587s.26-2.675.682-3.587c.423-.913 1.003-1.589 1.785-2.026.731-.39 1.589-.616 2.559-.616s1.828.226 2.559.616c.782.437 1.362 1.113 1.785 2.026.423.912.682 2.141.682 3.587z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
//               >
//                 <span className="sr-only">Twitter</span>
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
//               Navigation
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 { href: "/", label: "Home" },
//                 { href: "#categories", label: "Services" },
//                 { href: "#", label: "About Us" },
//                 { href: "#", label: "Testimonials" },
//                 { href: "#", label: "Contact" },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center group"
//                   >
//                     <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
//               Our Services
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 { href: "/artists/bridal", label: "Bridal Makeup" },
//                 { href: "/artists/party", label: "Party & Events" },
//                 { href: "/artists/casual", label: "Casual Makeup" },
//                 { href: "/artists/fashion", label: "Fashion & Editorial" },
//                 { href: "/artists/festive", label: "Festive Makeup" },
//                 { href: "/artists/specialty", label: "Specialty Makeup" },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <Link
//                     href={item.href}
//                     className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm flex items-center group"
//                   >
//                     <span className="w-1 h-1 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2">
//               Get In Touch
//             </h4>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <svg
//                     className="w-5 h-5 text-pink-400 mt-0.5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-gray-400 text-sm">123 Beauty Street</p>
//                   <p className="text-gray-400 text-sm">Makeup City, MC 12345</p>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 text-pink-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <a
//                   href="mailto:info@glambook.com"
//                   className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm ml-3"
//                 >
//                   info@glambook.com
//                 </a>
//               </div>

//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 text-pink-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <a
//                   href="tel:+11234567890"
//                   className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm ml-3"
//                 >
//                   +1 (123) 456-7890
//                 </a>
//               </div>

//               <div className="flex items-center">
//                 <svg
//                   className="w-5 h-5 text-pink-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <span className="text-gray-400 text-sm ml-3">
//                   Mon-Fri: 9AM-6PM
//                   <br />
//                   Sat: 10AM-4PM
//                   <br />
//                   Sun: Closed
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-500 text-sm">
//               © {new Date().getFullYear()} GlamBook. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-pink-400 transition-colors duration-300 text-sm"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-pink-400 transition-colors duration-300 text-sm"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-pink-400 transition-colors duration-300 text-sm"
//               >
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
