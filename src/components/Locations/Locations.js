import { useQuery } from "@tanstack/react-query";
import React from "react";
import getLocations from "../../api/getLocations";
import Carousel from "../Carousel/Carousel";
import Location from "../Location/Location";

const Locations = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["locations"],
    getLocations
  );

  return (
    <div className="container mx-auto overflow-hidden mb-11 md:mb-20">
      <div className="flex items-center justify-between text-white mb-5 md:mb-8">
        <h1 className="font-TTTravelsMedium text-base md:text-2xl">
          Locations
        </h1>
      </div>
      <Carousel>
        {data?.results?.map((locationData, i) => (
          <Location key={i} locationData={locationData} />
        ))}
      </Carousel>
    </div>
  );
};

export default Locations;
