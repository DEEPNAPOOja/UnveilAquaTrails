// Diving Website/client/src/Components/WhySection.jsx

import React from "react";
import img_8 from "../Assests/img_8.jpg";
import { HiStar } from "react-icons/hi"; // Importing an icon from react-icons

const WhySection = () => {
  return (
    <div className="flex flex-col md:flex-row md:mt-12">
      {/* Image Container */}
      <div className="relative md:w-1/2 md:mr-4 mb-6 ml-10">
        {" "}
        {/* Added left margin */}
        <img
          src={img_8}
          alt="Trinco"
          className="w-85 h-120 object-cover rounded-lg shadow-lg" // Reduced width and increased height
        />
        <div className="absolute bottom-4 left-4">
          <p className="text-white font-semibold text-lg">Trinco</p>
        </div>
      </div>

      {/* Text Container */}
      <div className="md:w-1/2 flex flex-col items-start md:pl-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why We</h2>

        {/* Organized Section for Paragraphs */}
        <div className="space-y-6">
          {" "}
          {/* This will create vertical space between each section */}
          <div className="flex items-start">
            <HiStar className="text-blue-500 mr-2" />
            <div>
              <h3 className="font-bold text-gray-800">Title 1</h3>
              <p className="text-gray-800 text-lg md:text-lg">
                Trinco is known for its vibrant marine life and beautiful coral
                reefs. It's a perfect destination for snorkeling and diving
                enthusiasts looking to explore underwater wonders.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <HiStar className="text-blue-500 mr-2" />
            <div>
              <h3 className="font-bold text-gray-800">Title 2</h3>
              <p className="text-gray-800 text-lg md:text-lg">
                Trinco offers a unique experience with its stunning underwater
                landscapes that attract divers from all over the world.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <HiStar className="text-blue-500 mr-2" />
            <div>
              <h3 className="font-bold text-gray-800">Title 3</h3>
              <p className="text-gray-800 text-lg md:text-lg">
                The rich biodiversity in Trinco's waters provides a perfect
                environment for both novice and experienced snorkelers.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhySection;
