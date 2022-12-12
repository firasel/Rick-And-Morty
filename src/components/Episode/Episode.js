import React from "react";
import "./Episode.scss";

const Episode = ({ episodeData, carousel }) => {
  const { episode, name } = episodeData || {};
  return (
    <div
      className={`episodeCard ${
        carousel ? "min-w-[10rem] md:min-w-[22rem]":"w-full"
      } mx-auto bg-gradient-to-br from-customBlue/70 to-customGreen/70 rounded-lg`}
    >
      <div className="episodeCardChild w-full h-full py-2 md:py-5 px-2 md:px-6 flex items-center bg-customBlack rounded-lg">
        <div className="font-TTTravelsMedium text-white">
          <h4
            className={`text-xs md:text-base ${
              carousel && "whitespace-nowrap"
            }`}
          >
            {episode}
          </h4>
          <h3
            className={`text-base md:text-2xl ${
              carousel && "whitespace-nowrap"
            }`}
          >
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Episode;
