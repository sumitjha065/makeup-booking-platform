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
