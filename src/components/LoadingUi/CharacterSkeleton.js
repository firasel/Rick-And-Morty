import React from "react";
import "../Character/Character.scss";

const CharacterSkeleton = ({ homeActive }) => {
  return (
    <div className="characterCard w-full max-h-fit mx-0 relative bg-gradient-to-br from-customGreen/70 to-customBlue/70 rounded-lg flex items-center justify-center animate-pulse">
      <div className="characterCardChild w-full h-full p-2 md:p-4 bg-customBlack rounded-lg">
        <div
          className={`${
            homeActive ? "w-32 md:!w-60" : "w-full"
          } md:w-full aspect-square rounded mb-3 md:mb-6 bg-gray-700`}
        ></div>
        <div className="w-2/3 h-3 mb-0.5 md:mb-2 bg-gray-700 rounded-sm"></div>
      </div>
    </div>
  );
};

export default CharacterSkeleton;
