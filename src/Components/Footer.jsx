import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className=" body-font">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <a
            to="/"
            className="flex flex-col w-20 font-medium items-center ml-3 text-sm  hover:text-orange-800  hover:bg-white"
          >
            <span className="text-xl text-primary">M</span>{" "}
            <span className="border-t-2 text-primary border-secondary hover:border-white p-1">
              HOMES
            </span>
          </a>
          <p className="mt-2 text-xs md:text-sm md:w-full w-64 text-gray-500">
            &copy; 2024 M-HOMES.CO All rights reserved.
          </p>
        </div>
        <div className="bg-primary text-secondary">
          <div className="container mx-auto py-4 px-5 flex flex-row justify-between items-center">
            <a
              href="https://wa.me/234902657211"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-800 text-sm text-white"
            >
              @M-HOMES
            </a>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <FaFacebookF className="ml-3" />
              <FaTwitter className="ml-3" />
              <FaInstagram className="ml-3" />
              <FaGithub className="ml-3" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
