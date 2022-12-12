import React from "react";
import "../Episode/Episode.scss";

const EpisodeLocationSkeleton = ({carousel}) => {
  return (
    <div className={`episodeCard ${carousel? "min-w-[10rem] md:min-w-[22rem]":"w-full"} mx-auto bg-gradient-to-br from-customBlue/70 to-customGreen/70 rounded-lg animate-pulse`}>
      <div className="episodeCardChild w-full h-full py-2 md:py-5 px-2 md:px-6 flex items-center bg-customBlack rounded-lg">
        <div className="font-TTTravelsMedium w-full text-white">
          <div className="w-1/2 h-2 md:h-4 bg-gray-700 mb-2 rounded-sm"></div>
          <div className="w-2/3 h-4 md:h-6 bg-gray-700 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeLocationSkeleton;
