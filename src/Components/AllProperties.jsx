import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
const AllProperties = () => {
  const [allProperties, setAllProperties] = useState([]); // Full list of properties from API
  const [displayedProperties, setDisplayedProperties] = useState([]); // List of properties to be displayed
  const [remainingProperties, setRemainingProperties] = useState([]); // List of remaining properties to choose from
  const [searchTerm, setSearchTerm] = useState(""); // State to handle search input
  const [Loading, setLoading] = useState(true)
 
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://ebuy-api.onrender.com/"); // Replace with your actual API endpoint
        const data = await response.json();
        setAllProperties(data); // Save the full list of properties
        setDisplayedProperties(data.slice(0, 10)); // Display the first 10 properties initially
        setRemainingProperties(data.slice(10)); // Store the remaining properties
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
      finally{
        setLoading(false)
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    // Filter the properties based on the search term
    const filteredProperties = allProperties.filter((property) =>
      property.location.toLowerCase().includes(e.target.value.toLowerCase())
    );

    // Update displayed properties with filtered ones
    setDisplayedProperties(filteredProperties.slice(0, 10));
    setRemainingProperties(filteredProperties.slice(10));
  };
  const loadMoreProperties = () => {
    if (remainingProperties.length === 0) return; // If no remaining properties, do nothing

    // Shuffle remaining properties to ensure randomness
    const shuffledRemaining = [...remainingProperties];
    for (let i = shuffledRemaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledRemaining[i], shuffledRemaining[j]] = [
        shuffledRemaining[j],
        shuffledRemaining[i],
      ];
    }

    // Get the next 5 random properties
    const additionalProperties = shuffledRemaining.slice(0, 5);

    // Update displayed properties
    setDisplayedProperties((prevDisplayed) => [
      ...prevDisplayed,
      ...additionalProperties,
    ]);

    // Remove the newly added properties from the remaining list
    setRemainingProperties(shuffledRemaining.slice(5));
  };

  return (
    <div className="text-primary">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          className="border-2 p-2 md:w-11/12 mx-10"
          type="search"
          name="Search"
          placeholder="Search by location"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Spinner loading={Loading} />
      <section>
        <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayedProperties.map((property) => (
            <div key={property.id} className="p-4">
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
                  <h1 className="title-font text-secondary text-lg font-bold mb-3">
                    {property.location}
                  </h1>
                  <p className="leading-relaxed mb-3">{property.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/properties/${property.id}`}
                      className="hover:text-indigo-500 md:mb-2 lg:mb-0"
                    >
                      Learn More
                    </Link>
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={
                          parseInt(property.id) % 2 === 0
                            ? "text-red-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs pr-3 md:py-1  line-through "
                            : " mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xl  md:py-1 pt-2  text-primary font-bold z-0"
                        }
                      >
                        {property.price}
                      </span>
                      <div>
                        <h1 className="text-xs">
                          {" "}
                          {parseInt(property.id) % 2 === 0 ? ( // Check if the ID is even
                            <span className="text-red-500 ">30% off</span>
                          ) : (
                            ""
                          )}
                        </h1>
                        {parseInt(property.id) % 2 === 0 ? ( // Check if the ID is even
                          <span className="text-secondary font-bold text-xl ">
                            {property.price
                              ? `$${(
                                  Number(
                                    property.price.replace(/[$,]/g, "").trim()
                                  ) * 0.7
                                ).toFixed(2)}`
                              : "$0.00"}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {remainingProperties.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreProperties}
              className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllProperties;
