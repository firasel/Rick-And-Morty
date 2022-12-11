import React from "react";
import "./Episode.scss";

const Episode = ({ episodeData }) => {
  const { episode, name } = episodeData || {};
  return (
    <div className="episodeCard min-w-[10rem] md:min-w-[22rem] mx-auto bg-gradient-to-br from-customBlue/70 to-customGreen/70 rounded-lg">
      <div className="episodeCardChild w-full py-2 md:py-5 px-2 md:px-6 flex items-center bg-customBlack rounded-lg">
        <div className="font-TTTravelsMedium text-white">
          <h4 className="text-xs md:text-base whitespace-nowrap">{episode}</h4>
          <h3 className="text-base md:text-2xl whitespace-nowrap">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Episode;
