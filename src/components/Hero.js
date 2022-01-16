import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 hover:text-red-400 ease-in duration-300">
        tailwind CSS Test
      </h1>
      <Link
        to="/"
        className="py-6 px-14 bg-blue-500 rounded-full text-3xl 
        hover:bg-green-600 transition duration-500 ease-in-out flex items-center animate-bounce"
      >
        Hello
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Hero;
