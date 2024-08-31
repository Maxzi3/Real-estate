import React from "react";
import { FaLightbulb } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
const Section2 = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto w-10/12 ">
        <h2 className="text-4xl py-10 font-bold text-secondary">Who We Are?</h2>
        <p className="md:w-2/3 text-xl text-primary  ">
          Welcome to M-HOMES Co. We have been helping people find their dream
          homes for over 20 years. Our mission is to provide the best real
          estate services with integrity, professionalism, and a personal touch.
        </p>
      </div>
      {/* <!-- Mission and Vision Section --> */}
      <div>
        <div className="flex md:flex-row flex-col gap-4 w-10/12 mx-auto mt-24 ">
          <div className="text-primary p-4 bg-gray-100 rounded-lg shadow-lg">
            <FaLightbulb className="text-4xl mb-4 text-secondary" />
            <h1 className="font-bold text-xl mb-2 text-secondary">
              Our Vision
            </h1>
            <p className="">
              To be the leading real estate company known for innovation and
              outstanding customer service.
            </p>
          </div>
          <div className="text-primary p-4 bg-gray-100 rounded-lg shadow-lg">
            <FaHackerrank className="text-4xl mb-4 text-secondary" />
            <h1 className="font-bold text-xl mb-2 text-secondary">
              Our Histroy
            </h1>
            <p className="">
              Our history is a story of passion, dedication, and a commitment to
              making a difference in the region
            </p>
          </div>
          <div className="text-primary p-4 bg-gray-100 rounded-lg shadow-lg">
            <FaChartSimple className="text-4xl mb-4 text-secondary" />
            <h1 className="font-bold text-xl mb-2 text-secondary">
              Our Mission
            </h1>
            <p className="">
              To provide exceptional real estate services by prioritizing the
              needs and dreams of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
