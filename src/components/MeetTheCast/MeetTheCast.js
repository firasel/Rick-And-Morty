import { useQuery } from "@tanstack/react-query";
import React from "react";
import getCharacters from "../../api/getCharacters";
import Carousel from "../Carousel/Carousel";
import Character from "../Character/Character";

const MeetTheCast = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["characters"],
    getCharacters
  );

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex items-center justify-between text-white mb-6">
        <h1 className="font-TTTravelsMedium text-base md:text-2xl">
          Meet The Cast
        </h1>
        <button className="font-TTTravelsRegular text-lg border border-customGreen rounded-lg py-2 px-6">
          View All
        </button>
      </div>
      <Carousel>
        {data?.results?.map((characterData, i) => (
          <Character key={i} characterData={characterData} />
        ))}
      </Carousel>
    </div>
  );
};

export default MeetTheCast;
