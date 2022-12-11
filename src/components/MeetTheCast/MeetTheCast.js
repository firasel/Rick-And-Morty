import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import getCharacters from "../../api/getCharacters";
import Carousel from "../Carousel/Carousel";
import Character from "../Character/Character";
import CharacterSkeleton from "../LoadingUi/CharacterSkeleton";

const MeetTheCast = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["characters"],
    getCharacters
  );

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex items-center justify-between text-white mb-4 md:mb-6">
        <h1 className="font-TTTravelsMedium text-base md:text-2xl">
          Meet The Cast
        </h1>
        <Link to="/cast">
          <button className="font-TTTravelsRegular text-xs md:text-lg border border-customGreen rounded-lg py-1 md:py-2 px-3 md:px-6">
            View All
          </button>
        </Link>
      </div>
      <Carousel>
        {isLoading && Array(6).fill(0).map((_, i) => <CharacterSkeleton homeActive={true} key={i} />)}
        {!isLoading && !isError && data?.results?.map((characterData, i) => (
          <Character key={i} homeActive={true} characterData={characterData} />
        ))}
      </Carousel>
    </div>
  );
};

export default MeetTheCast;
