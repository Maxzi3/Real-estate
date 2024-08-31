import React from "react";
import { FaFaceFrown } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div>
      <FaFaceFrown className=" text-8xl mx-auto my-24 text-center text-red-600 animate-pulse" />
      <h1 className="text-center text-orange-600 text-5xl font-bold animate-bounce">
        404
      </h1>
      <p className="text-center text-xl mb-12 text-orange-600">
        Page not found
      </p>
    </div>
  );
};

export default NotFound;
