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
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, i) => <EpisodeLocationSkeleton key={i} />)}
        {!isLoading &&
          !isError &&
          data?.results?.map((episodeData, i) => (
            <Episode key={i} episodeData={episodeData} />
          ))}
      </Carousel>
    </div>
  );
};

export default Episodes;
