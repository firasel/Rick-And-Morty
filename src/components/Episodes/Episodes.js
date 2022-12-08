import { useQuery } from "@tanstack/react-query";
import React from "react";
import getEpisodes from "../../api/getEpisodes";
import Carousel from "../Carousel/Carousel";
import Episode from "../Episode/Episode";

const Episodes = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["episodes"],
    getEpisodes
  );

  return (
    <div className="container mx-auto overflow-hidden my-28">
      <div className="flex items-center justify-between text-white mb-8">
        <h1 className="font-TTTravelsMedium text-base md:text-2xl">Episodes</h1>
      </div>
      <Carousel>
        {data?.results?.map((episodeData, i) => (
          <Episode key={i} episodeData={episodeData} />
        ))}
      </Carousel>
    </div>
  );
};

export default Episodes;
