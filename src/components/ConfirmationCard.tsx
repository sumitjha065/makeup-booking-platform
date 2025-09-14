import React from "react";
import Link from "next/link";

interface Booking {
  id: string;
  userName: string;
  email: string;
  phone: string;
  artist: {
    name: string;
    category: string;
    price: number;
  };
  date: string;
  time: string;
  dateTime: string;
}

interface ConfirmationCardProps {
  booking: Booking;
}

const ConfirmationCard: React.FC<ConfirmationCardProps> = ({ booking }) => {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-2xl mx-auto">
      <div className="bg-green-100 p-6 text-center border-b border-green-200">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-gray-600">
          Your appointment with {booking.artist.name} has been scheduled.
        </p>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Booking Details
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Booking ID:</span>
            <span className="font-semibold text-gray-800">{booking.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Artist:</span>
            <span className="font-semibold text-gray-800">
              {booking.artist.name}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Service:</span>
            <span className="font-semibold text-gray-800">
              {booking.artist.category} Makeup
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Date & Time:</span>
            <span className="font-semibold text-gray-800">
              {formatDate(booking.date)} at {booking.time}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Price:</span>
            <span className="font-semibold text-gray-800">
              ${booking.artist.price}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Client:</span>
            <span className="font-semibold text-gray-800">
              {booking.userName}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Contact:</span>
            <span className="font-semibold text-gray-800">
              {booking.email} | {booking.phone}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-md mb-6 border border-blue-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-500 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-blue-700 text-sm">
                <strong>Important:</strong> A confirmation email has been sent
                to your email address. Please arrive 10 minutes before your
                scheduled appointment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-center font-medium py-3 px-4 rounded-md transition-colors duration-300"
          >
            Book Another Appointment
          </Link>

          <button
            onClick={() => window.print()}
            className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-center font-medium py-3 px-4 rounded-md transition-colors duration-300"
          >
            Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;

// import React from "react";
// import Link from "next/link";

// interface Booking {
//   id: string;
//   userName: string;
//   email: string;
//   phone: string;
//   artist: {
//     name: string;
//     category: string;
//     price: number;
//   };
//   date: string;
//   time: string;
//   dateTime: string;
// }

// interface ConfirmationCardProps {
//   booking: Booking;
// }

// const ConfirmationCard: React.FC<ConfirmationCardProps> = ({ booking }) => {
//   const formatDate = (dateString: string) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString("en-IN", {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       });
//     } catch (error) {
//       return "Invalid date";
//     }
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(price);
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto border border-gray-100">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center">
//         <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
//           <svg
//             className="w-10 h-10 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 13l4 4L19 7"
//             ></path>
//           </svg>
//         </div>
//         <h1 className="text-3xl font-bold text-white mb-2">
//           Booking Confirmed!
//         </h1>
//         <p className="text-white/90">
//           Your appointment with {booking.artist.name} has been scheduled
//         </p>
//       </div>

//       {/* Content */}
//       <div className="p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center font-serif">
//           Booking Details
//         </h2>

//         <div className="space-y-4 mb-8">
//           <div className="flex justify-between items-center py-3 border-b border-gray-100">
//             <span className="text-gray-600 font-medium">Booking ID:</span>
//             <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1 rounded-lg">
//               {booking.id}
//             </span>
//           </div>

//           <div className="flex justify-between items-center py-3 border-b border-gray-100">
//             <span className="text-gray-600 font-medium">Artist:</span>
//             <span className="font-semibold text-gray-800">
//               {booking.artist.name}
//             </span>
//           </div>

//           <div className="flex justify-between items-center py-3 border-b border-gray-100">
//             <span className="text-gray-600 font-medium">Service:</span>
//             <span className="font-semibold text-gray-800">
//               {booking.artist.category} Makeup
//             </span>
//           </div>

//           <div className="flex justify-between items-center py-3 border-b border-gray-100">
//             <span className="text-gray-600 font-medium">Date & Time:</span>
//             <span className="font-semibold text-gray-800 text-right">
//               {formatDate(booking.date)}
//               <br />
//               at {booking.time}
//             </span>
//           </div>

//           <div className="flex justify-between items-center py-3 border-b border-gray-100">
//             <span className="text-gray-600 font-medium">Price:</span>
//             <span className="font-semibold text-green-600 text-lg">
//               {formatPrice(booking.artist.price)}
//             </span>
//           </div>

//           <div className="flex justify-between items-center py-3 border-b border-gray-100">
//             <span className="text-gray-600 font-medium">Client:</span>
//             <span className="font-semibold text-gray-800">
//               {booking.userName}
//             </span>
//           </div>

//           <div className="flex justify-between items-start py-3">
//             <span className="text-gray-600 font-medium">Contact:</span>
//             <span className="font-semibold text-gray-800 text-right">
//               {booking.email}
//               <br />
//               {booking.phone}
//             </span>
//           </div>
//         </div>

//         {/* Important Information */}
//         <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
//           <div className="flex items-start">
//             <div className="flex-shrink-0">
//               <svg
//                 className="w-6 h-6 text-blue-600 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="ml-4">
//               <h4 className="font-semibold text-blue-800 mb-2">
//                 Important Information
//               </h4>
//               <p className="text-blue-700 text-sm">
//                 • A confirmation email has been sent to your inbox
//                 <br />
//                 • Please arrive 15 minutes before your appointment
//                 <br />
//                 • Bring any reference images you'd like to share
//                 <br />• Cancellation policy: 24 hours notice required
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Link
//             href="/"
//             className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             Book Another Appointment
//           </Link>

//           <button
//             onClick={() => window.print()}
//             className="border-2 border-gray-300 hover:border-pink-400 text-gray-700 hover:text-pink-600 font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105"
//           >
//             Print Confirmation
//           </button>
//         </div>

//         {/* Support Info */}
//         <div className="text-center mt-8 pt-6 border-t border-gray-100">
//           <p className="text-gray-600 text-sm">
//             Need help? Contact support at{" "}
//             <a
//               href="mailto:support@glambook.com"
//               className="text-pink-600 hover:underline"
//             >
//               support@glambook.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationCard;
