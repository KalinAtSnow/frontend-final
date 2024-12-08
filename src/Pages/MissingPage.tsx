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
      <div className=" bg-primary-100 p-6 rounded-lg shadow-2xl max-w-xl text-center">
        {/* 404 Message */}
        <h1 className="text-6xl font-bold text-red-500 mb-6">404</h1>

        {/* MissingNo Text and Visuals */}
        <h2 className="text-3xl font-semibold mb-4 text-primary-950">
          Whoops! Seems like you've encountered a stray MissingNo!
        </h2>
        <p className="text-lg text-gray-800 mb-6">
          The page you're looking for is missing...
        </p>

        {/* MissingNo Sprite */}

        {/* Button to go back home */}
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
