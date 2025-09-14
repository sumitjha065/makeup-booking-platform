"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { artists } from "@/data/mockData";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const [artist, setArtist] = useState<any>(null);

  useEffect(() => {
    const artistId = params.artistId as string;
    const foundArtist = artists.find((a) => a.id === artistId);

    if (foundArtist) {
      setArtist(foundArtist);
    } else {
      router.push("/");
    }
  }, [params, router]);

  if (!artist) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href={`/artists/${artist.category}`}
          className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Artists
        </Link>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">
              Book {artist.name}
            </h1>
            <p className="text-gray-600">
              ${artist.price} • Rating: {artist.rating.toFixed(1)}/5
            </p>
          </div>

          <div className="p-6">
            <BookingForm artist={artist} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
