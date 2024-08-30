import React, {useState, useEffect} from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Property from "../Components/Property";
import { Link} from "react-router-dom";
const PropertyPage = () => {

  return (
    <div className="mt-24 ">
      <Link to="/properties" className="flex items-center p-4 text-secondary">
        <FaArrowLeft className="mx-2" />
        Back to Properties
      </Link>
      <div>
        <Property />
      </div>
    </div>
  );
};

export default PropertyPage;
