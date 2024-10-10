import React from "react";

const FAQ = () => {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            F.A.Q
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h3>
        </div>

        <div className="mt-20">
          <ul>
            {/* First Question */}
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                    What could possibly be your first question?
                  </h4>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    height="25px"
                    fill="white"
                    viewBox="0 0 295.238 295.238"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048..."></path>
                  </svg>
                </div>
              </div>
            </li>

            {/* Second Question */}
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                    What is your second question?
                  </h4>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                    Here is some information regarding your second question.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    height="25px"
                    fill="white"
                    viewBox="0 0 295.238 295.238"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048..."></path>
                  </svg>
                </div>
              </div>
            </li>

            {/* Third Question */}
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    width="30px"
                    fill="white"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">
                    What is your third question?
                  </h4>
                </div>
              </div>

              <div className="flex flex-row items-start">
                <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                    This is the answer to the third question.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    height="25px"
                    fill="white"
                    viewBox="0 0 295.238 295.238"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048..."></path>
                  </svg>
                </div>
              </div>
            </li>

            {/* You can continue adding more questions in a similar manner */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
