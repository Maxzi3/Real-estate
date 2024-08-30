import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { FaLocationDot } from "react-icons/fa6";

const Property = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHouse = async () => {
      const apiUrl = "https://ebuy-api.onrender.com/";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(
          "There was an error fetching the data from the API:",
          error
        );
      } finally {
        setLoading(false);
      }
    };
    fetchHouse();
  }, []);

  const { id } = useParams();
  const PropertyItem = data.find((property) => property.id === parseInt(id));

  // Check if PropertyItem is defined
  if (!PropertyItem) {
    return (
      <div>
        <Spinner loading={loading} />
      </div>
    );
  }

  return (
    <div className="p-4 border md:w-11/12 mx-auto bg rounded-md shadow-md">
      
      <img
        src={PropertyItem.thumbnail || "https://dummyimage.com/721x401"}
        alt={PropertyItem.type}
        className="w-full h-96 object-cover rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary mb-2">
          {PropertyItem.type}
        </h3>
        <p className="text-primary mb-2">{PropertyItem.location}</p>
        <p className="text-secondary mb-2">
          ClosestLandmark : {PropertyItem.closestLandmark}
        </p>
        <p className="text-secondary font-bold mb-2">{PropertyItem.price}</p>
        <p className="text-primary mt-2">{PropertyItem.description}</p>
        <ul className="list-disc pl-4 text-primary">
          {PropertyItem.amenities &&
            PropertyItem.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
        </ul>
        <span className="flex items-center justify-between">
          <p className="text-secondary flex items-center gap-2 py-4">
            <FaLocationDot /> {PropertyItem.address}
          </p>
          <a href={PropertyItem.sellerLink} target="blank" className="text-secondary animate-pulse">
            Buy Now
          </a>
        </span>
      </div>
    </div>
  );
};

export default Property;
