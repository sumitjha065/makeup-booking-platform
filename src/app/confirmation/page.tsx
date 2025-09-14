"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ConfirmationCard from "@/components/ConfirmationCard";
import Footer from "@/components/Footer";

export default function ConfirmationPage() {
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkBooking = () => {
      try {
        // Check if we have a booking in localStorage
        const bookingData = localStorage.getItem("currentBooking");

        if (bookingData) {
          const parsedBooking = JSON.parse(bookingData);
          setBooking(parsedBooking);

          // Clear the current booking from temporary storage
          localStorage.removeItem("currentBooking");
        } else {
          // No booking found, check if we have any bookings at all
          const allBookings = localStorage.getItem("bookings");
          if (!allBookings || JSON.parse(allBookings).length === 0) {
            router.push("/");
          } else {
            // Use the most recent booking
            const bookings = JSON.parse(allBookings);
            setBooking(bookings[bookings.length - 1]);
          }
        }
      } catch (error) {
        console.error("Error processing booking data:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    checkBooking();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your booking confirmation...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            No Booking Found
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn't find your booking information. Please make a booking
            first.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <ConfirmationCard booking={booking} />
      </div>
      <Footer />
    </div>
  );
}
