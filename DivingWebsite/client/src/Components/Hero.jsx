import React from "react";
//import img_8 from "../Assests/img_8.jpg";
import image1 from "../Assests/img1.jpeg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold md:text-6xl">
          Discover Top <span className="text-orange-400">Dive Sites</span>{" "}
          around Sri Lanka
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Explore the Ocean. Embrace the Adventure.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-full md:w-auto">
            <select className="w-full md:w-48 p-3 rounded bg-white text-black">
              <option>Location</option>
              {/* Add other locations */}
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select className="w-full md:w-48 p-3 rounded bg-white text-black ">
              <option>Activity Type</option>
              {/* Add activity types */}
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select className="w-full md:w-48 p-3 rounded bg-white text-black">
              <option>Difficulty Level</option>
              {/* Add difficulty levels */}
            </select>
          </div>
          <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
