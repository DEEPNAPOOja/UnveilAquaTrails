import React from "react";
import coral from "../Assests/coral.png";

const StayUpdated = () => {
  return (
    <div className="relative bg-blue-500 py-12 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url(${coral})`,
          filter: "blur(2px)", // Adjust the blur level here
        }}
      ></div>

      <div className="relative max-w-4xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Stay Updated on the Latest Dive Adventures!
        </h2>
        <p className="text-white text-lg mb-8">
          Sign up with your email to get notified about our latest dive trips,
          courses, and special offers. Be the first to explore new underwater
          adventures!
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <button className="bg-blue-700 text-white px-6 py-3 rounded-r-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
