// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Artist } from "@/types";

// interface BookingFormProps {
//   artist: Artist;
// }

// const BookingForm: React.FC<BookingFormProps> = ({ artist }) => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     userName: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Create booking object
//       const booking = {
//         id: Math.random().toString(36).substr(2, 9),
//         ...formData,
//         artist,
//         dateTime: new Date(`${formData.date}T${formData.time}`),
//       };

//       // Store booking in localStorage for confirmation page
//       localStorage.setItem("currentBooking", JSON.stringify(booking));

//       // Also add to bookings history
//       const existingBookings = JSON.parse(
//         localStorage.getItem("bookings") || "[]"
//       );
//       existingBookings.push(booking);
//       localStorage.setItem("bookings", JSON.stringify(existingBookings));

//       // Navigate to confirmation page
//       router.push("/confirmation");
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("There was an error processing your booking. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Generate time options
//   const timeOptions = [];
//   for (let hour = 9; hour <= 20; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const timeString = `${hour.toString().padStart(2, "0")}:${minute
//         .toString()
//         .padStart(2, "0")}`;
//       timeOptions.push(timeString);
//     }
//   }

//   // Set minimum date to today
//   const today = new Date().toISOString().split("T")[0];

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label
//             htmlFor="userName"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Your Name *
//           </label>
//           <input
//             type="text"
//             id="userName"
//             name="userName"
//             value={formData.userName}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-gray-800 bg-white"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Email *
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-gray-800 bg-white"
//             placeholder="your.email@example.com"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-gray-800 bg-white"
//             placeholder="(123) 456-7890"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="date"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Date *
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             min={today}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-gray-800 bg-white"
//           />
//         </div>

//         <div className="md:col-span-2">
//           <label
//             htmlFor="time"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Time *
//           </label>
//           <select
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 text-gray-800 bg-white"
//           >
//             <option value="">Select a time</option>
//             {timeOptions.map((time) => (
//               <option key={time} value={time}>
//                 {time}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
//         <h3 className="font-medium text-gray-800 mb-3">Booking Summary</h3>
//         <div className="space-y-1 text-sm">
//           <div className="flex justify-between">
//             <span className="text-gray-600">Artist:</span>
//             <span className="font-medium text-gray-800">{artist.name}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600">Service:</span>
//             <span className="font-medium text-gray-800">
//               {artist.category} Makeup
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600">Price:</span>
//             <span className="font-medium text-gray-800">${artist.price}</span>
//           </div>
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-pink-400 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
//       >
//         {isSubmitting ? "Processing..." : "Confirm Booking"}
//       </button>
//     </form>
//   );
// };

// export default BookingForm;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Artist } from "@/types";

interface BookingFormProps {
  artist: Artist;
}

const BookingForm: React.FC<BookingFormProps> = ({ artist }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid Indian phone number";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create booking object
      const booking = {
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        artist,
        dateTime: new Date(`${formData.date}T${formData.time}`),
        createdAt: new Date().toISOString(),
      };

      // Store booking in localStorage
      localStorage.setItem("currentBooking", JSON.stringify(booking));

      // Add to bookings history
      const existingBookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );
      existingBookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(existingBookings));

      // Navigate to confirmation page
      router.push("/confirmation");
    } catch (error) {
      console.error("Booking error:", error);
      setErrors({
        submit: "There was an error processing your booking. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate time options (9 AM to 8 PM)
  const timeOptions = [];
  for (let hour = 9; hour <= 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const displayTime = `${hour > 12 ? hour - 12 : hour}:${minute
        .toString()
        .padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;
      timeOptions.push({ value: timeString, display: displayTime });
    }
  }

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];

  // Format price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Artist Header */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 border border-pink-100">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            {artist.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Book {artist.name}
            </h2>
            <p className="text-gray-600">{artist.category} Makeup Specialist</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Full Name *
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-800 bg-white transition-all duration-300 ${
                errors.userName ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-600">{errors.userName}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-800 bg-white transition-all duration-300 ${
                errors.email ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-800 bg-white transition-all duration-300 ${
                errors.phone ? "border-red-300" : "border-gray-300"
              }`}
              placeholder="+91 1234567890"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Date Field */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Appointment Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-800 bg-white transition-all duration-300 ${
                errors.date ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date}</p>
            )}
          </div>

          {/* Time Field */}
          <div className="md:col-span-2">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-800 bg-white transition-all duration-300 ${
                errors.time ? "border-red-300" : "border-gray-300"
              }`}
            >
              <option value="">Select a time slot</option>
              {timeOptions.map((time) => (
                <option key={time.value} value={time.value}>
                  {time.display}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-100">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-pink-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Booking Summary
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-pink-100">
              <span className="text-gray-600">Artist:</span>
              <span className="font-semibold text-gray-800">{artist.name}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-pink-100">
              <span className="text-gray-600">Service:</span>
              <span className="font-semibold text-gray-800 capitalize">
                {artist.category} Makeup
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-semibold text-pink-600 text-lg">
                {formatPrice(artist.price)}
              </span>
            </div>
          </div>

          {/* Included Services */}
          <div className="mt-4 pt-4 border-t border-pink-100">
            <h4 className="font-medium text-gray-700 mb-2">What's Included:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Professional makeup application
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Skincare preparation
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Touch-up kit
              </li>
            </ul>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing Booking...
            </div>
          ) : (
            `Confirm Booking - ${formatPrice(artist.price)}`
          )}
        </button>

        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm">{errors.submit}</p>
          </div>
        )}

        {/* Security Note */}
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            <svg
              className="w-4 h-4 inline-block mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            Your information is secure and encrypted
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
