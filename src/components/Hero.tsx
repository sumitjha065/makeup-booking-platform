import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300/30 rounded-full animate-float"></div>
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-300/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="glass-effect rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif mb-6">
            Discover Your
            <span className="block bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              Perfect Look
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Book professional makeup artists for any occasion. From bridal glam
            to editorial looks, we connect you with the best talent for your
            special moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#categories" className="btn-primary">
              Explore Artists
            </Link>
            <Link
              href="#categories"
              className="btn-secondary text-white border-white/30 hover:bg-white/10"
            >
              View Categories
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l4.89-11.772L11.358,16.078z" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// "use client";

// import React from "react";
// import Link from "next/link";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
//       {/* Animated background elements */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full opacity-20 animate-float"></div>
//       <div
//         className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-float"
//         style={{ animationDelay: "2s" }}
//       ></div>

//       {/* Decorative sparkles */}
//       <div className="absolute top-1/4 left-1/4 animate-pulse">
//         <div className="w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
//       </div>
//       <div
//         className="absolute top-1/3 right-1/3 animate-pulse"
//         style={{ animationDelay: "1s" }}
//       >
//         <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
//       </div>
//       <div
//         className="absolute bottom-1/4 left-1/3 animate-pulse"
//         style={{ animationDelay: "2s" }}
//       >
//         <div className="w-5 h-5 bg-pink-300 rounded-full opacity-40"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
//           {/* Logo/Brand */}
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
//               <span className="text-white font-bold text-2xl">GB</span>
//             </div>
//           </div>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 font-serif mb-6 leading-tight">
//             Discover Your
//             <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
//               Perfect Look
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
//             Book professional makeup artists for any occasion. From bridal glam
//             to editorial looks, we connect you with the best talent for your
//             special moments.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Link
//               href="#categories"
//               className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
//             >
//               Explore Artists
//             </Link>
//             <Link
//               href="#categories"
//               className="border-2 border-pink-400 text-pink-600 hover:bg-pink-50 font-semibold py-4 px-8 rounded-full transition-all duration-300 text-lg"
//             >
//               View Categories
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-pink-600">
//                 50+
//               </div>
//               <div className="text-gray-600">Professional Artists</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-purple-600">
//                 1000+
//               </div>
//               <div className="text-gray-600">Happy Clients</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl md:text-3xl font-bold text-pink-600">
//                 4.9★
//               </div>
//               <div className="text-gray-600">Average Rating</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="animate-bounce">
//           <div className="w-8 h-8 border-2 border-pink-400 rounded-full flex items-center justify-center">
//             <svg
//               className="w-4 h-4 text-pink-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
