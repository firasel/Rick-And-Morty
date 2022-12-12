import { useQuery } from "@tanstack/react-query";
import React from "react";
import getLocations from "../../api/getLocations";
import Carousel from "../Carousel/Carousel";
import EpisodeLocationSkeleton from "../LoadingUi/EpisodeLocationSkeleton";
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
        {/* Error message */}
        {isError && (
          <h2 className="font-TTTravelsDemiBold text-red-500 text-3xl text-center py-3 md:py-5 px-2 md:px-5">
            {error?.response?.data?.error || "Something went wrong"}
          </h2>
        )}
        {/* Loading card start */}
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, i) => <EpisodeLocationSkeleton key={i} carousel={true} />)}
        {/* Loading card end */}
        {/* Location card start */}
        {!isLoading &&
          !isError &&
          data?.results?.map((locationData, i) => (
            <Location key={i} locationData={locationData} carousel={true} />
          ))}
        {/* Location card end */}
      </Carousel>
    </div>
  );
};

export default Locations;
