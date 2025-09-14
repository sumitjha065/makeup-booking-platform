// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { categories } from "@/data/mockData";
// import Image from "next/image";

// const CategorySection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <section
//       id="categories"
//       className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="section-title">Makeup Categories</h2>
//           <p className="section-subtitle">
//             Explore our diverse range of professional makeup services tailored
//             for every occasion and style.
//           </p>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category, index) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveTab(index)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
//                 activeTab === index
//                   ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
//                   : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:text-pink-600 shadow-sm"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Active Category Content */}
//         <div className="animate-fade-in">
//           <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8 font-serif">
//             {categories[activeTab].name} Styles
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             {categories[activeTab].subcategories.map((subcategory, index) => (
//               <Link
//                 key={index}
//                 href={`/artists/${categories[activeTab].id}`}
//                 className="group card-hover"
//               >
//                 <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
//                   {/* Image Container */}
//                   <div className="relative h-48 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                     {/* Decorative Icon */}
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-400 group-hover:text-white transition-colors duration-500">
//                       <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-pink-500/30 transition-colors duration-500">
//                         <svg
//                           className="w-8 h-8"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Hover Overlay Text */}
//                     <div className="absolute bottom-4 left-4 right-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         View Artists
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <h4 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
//                       {subcategory}
//                     </h4>
//                     <p className="text-sm text-gray-600 flex items-center group-hover:text-pink-500 transition-colors duration-300">
//                       Explore artists →
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="text-center">
//             <Link
//               href={`/artists/${categories[activeTab].id}`}
//               className="btn-primary inline-flex items-center"
//             >
//               View All {categories[activeTab].name} Artists
//               <svg
//                 className="w-5 h-5 ml-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 ></path>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategorySection;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/mockData";

const CategorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="categories" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif mb-4">
            Makeup Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of professional makeup services tailored
            for every occasion and style.
          </p>
        </div>

        {/* Category Tabs - Beautiful pill style */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === index
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif mb-2">
              {categories[activeTab].name} Styles
            </h3>
            <p className="text-gray-600">Choose from our expert services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {categories[activeTab].subcategories.map((subcategory, index) => (
              <Link
                key={index}
                href={`/artists/${categories[activeTab].id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>

                  <h4 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mb-2">
                    {subcategory}
                  </h4>
                  <p className="text-sm text-gray-600 flex items-center group-hover:text-pink-500 transition-colors duration-300">
                    Explore artists →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href={`/artists/${categories[activeTab].id}`}
              className="inline-flex items-center bg-white text-pink-600 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-pink-200"
            >
              View All {categories[activeTab].name} Artists
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
