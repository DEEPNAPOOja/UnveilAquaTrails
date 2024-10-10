import React from "react";
import image_2 from "../Assests/image_2.png";
import image_3 from "../Assests/img_3.webp";
import image_4 from "../Assests/img_4.webp";
import image_5 from "../Assests/img_5.webp";
import { IoLocationOutline } from "react-icons/io5";

const FeaturedDiveSites = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Heading for Featured Dive Sites */}
      <h2 className="text-3xl font-bold text-gray-800 mt-12 text-left">
        Featured Dive Sites
      </h2>

      {/* Container to hold multiple cards with grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={image_2}
              alt="Dive Site"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-lg font-semibold text-gray-800">
                Serene Haven Dive Place
              </h5>
              <div className="flex items-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">5.0</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <IoLocationOutline />
              <span className="ml-2">Unawatuna</span>
            </div>

            <div className="mt-4 text-gray-600">
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col">
                  <span>Languages: Sinhala, English, German</span>
                  <span>Hours: 7.00 AM - 5.00 PM</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={image_3}
              alt="Dive Site"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-lg font-semibold text-gray-800">
                Serene Haven Dive Place
              </h5>
              <div className="flex items-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">5.0</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <IoLocationOutline />
              <span className="ml-2">Hikkaduwa</span>
            </div>

            <div className="mt-4 text-gray-600">
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col">
                  <span>Languages: Sinhala, English</span>
                  <span>Hours: 7.00 AM - 5.00 PM</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={image_4}
              alt="Dive Site"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-lg font-semibold text-gray-800">
                Serene Haven Dive Place
              </h5>
              <div className="flex items-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">5.0</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <IoLocationOutline />
              <span className="ml-2">Mirissa</span>
            </div>

            <div className="mt-4 text-gray-600">
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col">
                  <span>Languages: Sinhala, English</span>
                  <span>Hours: 7.00 AM - 5.00 PM</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={image_5}
              alt="Dive Site"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h5 className="text-lg font-semibold text-gray-800">
                Serene Haven Dive Place
              </h5>
              <div className="flex items-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">5.0</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <IoLocationOutline />
              <span className="ml-2">Bentota</span>
            </div>

            <div className="mt-4 text-gray-600">
              <div className="flex justify-between items-center text-sm">
                <div className="flex flex-col">
                  <span>Languages: Sinhala, English</span>
                  <span>Hours: 7.00 AM - 5.00 PM</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDiveSites;
