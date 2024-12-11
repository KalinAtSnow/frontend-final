import React from "react";
import backgroundImage from '../assets/missingno.png';

const MissingNo404: React.FC = () => {
  return (
    <div
      className="bg-primary-50 h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-primary-50 p-6 rounded-lg shadow-2xl max-w-xl text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-6">404</h1>

        <h2 className="text-3xl font-semibold mb-4 text-primary-950">
          Wild MISSINGNO. appeared!
        </h2>
        <p className="text-lg text-gray-800 mb-6">
          The page you're looking for is missing...
        </p>

        <a
          href="/"
          className="inline-block px-8 py-3 bg-primary-500 text-black font-semibold rounded-md hover:bg-primary-400"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default MissingNo404;
