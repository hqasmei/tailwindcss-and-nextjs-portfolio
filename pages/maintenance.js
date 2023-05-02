import Image from "next/image";
import React from "react"
import Link from "next/link";
import "tailwindcss/tailwind.css";







const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500">
      <img className="h-64 w-64 md:h-80 md:w-80" src="/maintenance2.png" alt="Maintenance Image" />
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl leading-9 font-extrabold text-black-900 sm:text-4xl sm:leading-10">
          We're sorry, but this page is currently under maintenance.
        </h2>
        <p className="mt-4 text-lg leading-6 text-black-100">
          We are working hard to improve your experience and apologize for any inconvenience this may cause. Please check back later.
        </p>
        <div className="mt-6">
          <Link href="/">
            <button className="text-black-100 border border-gray font-semibold px-6 py-3 bg-black-600 rounded shadow hover:bg-gray-700">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;


