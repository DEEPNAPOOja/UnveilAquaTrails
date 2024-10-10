import React from "react";
import img_7 from "../Assests/img_7.jpg";
import img_8 from "../Assests/img_8.jpg";
import img_6 from "../Assests/img_6.jpg";
import img_9 from "../Assests/img_9.jpg";

const HomeGallery = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Heading for Featured Dive Sites */}
      <h2 className="text-3xl font-bold text-gray-800 mt-12 text-center">
        Gallery
      </h2>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Unawatuna Image */}
        <div className="relative">
          <img
            src={img_7}
            alt="Unawatuna"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold text-lg">Unawatuna</p>
          </div>
        </div>

        {/* Hikkaduwa Image */}
        <div className="relative">
          <img
            src={img_8}
            alt="Hikkaduwa"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold text-lg">Hikkaduwa</p>
          </div>
        </div>
        {/* PassiKuda Image */}
        <div className="relative">
          <img
            src={img_9}
            alt="{PassiKuda}"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold text-lg">PassiKuda</p>
          </div>
        </div>

        {/* Trinco Image - Enlarged */}
        <div className="relative md:col-span-2">
          <img
            src={img_6}
            alt="Trinco"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold text-lg">Trinco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
