import React from "react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouse = async () => {
      const apiUrl = "https://ebuy-api.onrender.com/";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Use Fisher-Yates to shuffle the data array
        const shuffledData = [...data];
        for (let i = shuffledData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledData[i], shuffledData[j]] = [
            shuffledData[j],
            shuffledData[i],
          ];
        }

        // Filter to select only properties with even IDs
        const evenProperties = shuffledData.filter(
          (property) => parseInt(property.id) % 2 === 0
        );

        // Select the first 3 items after filtering
        const randomProperties = evenProperties.slice(0, 3);
        setData(randomProperties);
      } catch (error) {
        console.log(
          "There was an error fetching the data from the API:",
          error
        );
      }
      setLoading(false);
    };
    fetchHouse();
  }, []); // empty dependency array means it will run only once when the component mounts

  return (
    <div>
      <section className="text-primary body-font">
        <h1 className="text-center text-2xl pt-20 underline underline-offset-8">
          Featured Properties
        </h1>
        <Spinner loading={loading} />
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:gap-2 gap-10 md:grid-cols-3 md:w-11/12">
          {data.map((property) => (
            <div key={property.id} className="flex flex-col md:flex-row -m-4">
              <div className="p-4 md:w-full">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={property.thumbnail}
                    alt={property.type}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-secondary mb-1">
                      {property.type}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-secondary mb-3">
                      {property.location}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {property.description}
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <Link
                        to={`/properties/${property.id}`}
                        className="hover:text-indigo-500  md:mb-2 lg:mb-0"
                      >
                        Learn More
                      </Link>
                      <div className="flex flex-col gap-2">
                        <span className="text-red-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 line-through">
                          {property.price}
                        </span>
                        <div>
                          <h1 className="text-xs">30% off</h1>
                          <span className="text-secondary font-bold inline-flex items-center leading-none text-xl">
                            {property.price
                              ? `$${(
                                  Number(
                                    property.price.replace(/[$,]/g, "").trim()
                                  ) * 0.7
                                ).toFixed(2)}`
                              : "$0.00"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/properties"
          className="bg-primary text-white py-2 px-1 rounded hover:bg-secondary flex justify-center w-32 mx-auto"
        >
          Load More
        </Link>
      </section>
    </div>
  );
};

export default Section1;
