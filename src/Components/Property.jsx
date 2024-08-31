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

  const isEvenId = parseInt(PropertyItem.id) % 2 === 0;
  const originalPrice = PropertyItem.price
    ? Number(PropertyItem.price.replace(/[$,]/g, "").trim())
    : 0;
  const discountedPrice = originalPrice * 0.7;

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
          Closest Landmark: {PropertyItem.closestLandmark}
        </p>

        {/* Price Display */}
        <div className="">
          <span
            className={
              isEvenId
                ? "text-red-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs pr-3 md:py-1 line-through"
                : "mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xl md:py-1 pt-2 text-primary font-bold z-0"
            }
          >
            ${originalPrice.toFixed(2)}
          </span>
          <div>
            {isEvenId ? (
              <>
                <h1 className="text-xs text-primary">30% off</h1>
                <span className="text-secondary font-bold text-xl">
                  ${discountedPrice.toFixed(2)}
                </span>
              </>
            ) : null}
          </div>
        </div>

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
          <a
            href={PropertyItem.sellerLink}
            target="_blank"
            className="text-secondary animate-pulse"
          >
            Buy Now
          </a>
        </span>
      </div>
    </div>
  );
};

export default Property;
