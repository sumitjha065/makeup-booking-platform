import React from "react";
import Link from "next/link";
import { Artist } from "@/types";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          ★
        </span>
      );
    }

    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }

    return stars;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden group">
      {/* Header with price tag */}
      <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
        {/* Artist Initials Avatar */}
        <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          {artist.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <span className="font-bold text-pink-600 text-sm">
            {formatPrice(artist.price)}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold">View Profile</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
          {artist.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">{renderStars(artist.rating)}</div>
          <span className="text-sm text-gray-600">
            {artist.rating.toFixed(1)} ({artist.reviewCount} reviews)
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
          {artist.bio}
        </p>

        {/* Book Button */}
        <Link
          href={`/booking/${artist.id}`}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl text-center block transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
