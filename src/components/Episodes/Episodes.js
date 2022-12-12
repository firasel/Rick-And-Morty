import { useQuery } from "@tanstack/react-query";
import React from "react";
import getEpisodes from "../../api/getEpisodes";
import Carousel from "../Carousel/Carousel";
import Episode from "../Episode/Episode";
import EpisodeLocationSkeleton from "../LoadingUi/EpisodeLocationSkeleton";

const Episodes = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["episodes"],
    getEpisodes
  );

  return (
    <div className="container mx-auto overflow-hidden my-8 md:my-28">
      <div className="flex items-center justify-between text-white mb-5 md:mb-8">
        <h1 className="font-TTTravelsMedium text-base md:text-2xl">Episodes</h1>
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
            .map((_, i) => <EpisodeLocationSkeleton key={i} carousel={true}/>)}
        {/* Loading card end */}
        {/* Episode card start */}
        {!isLoading &&
          !isError &&
          data?.results?.map((episodeData, i) => (
            <Episode key={i} episodeData={episodeData} carousel={true} />
          ))}
        {/* Episode card end */}
      </Carousel>
    </div>
  );
};

export default Episodes;
