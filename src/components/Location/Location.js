import React from "react";
import "./Location.scss";

const Location = ({ locationData }) => {
  const { id, name } = locationData || {};
  return (
    <div className="locationCard min-w-[10rem] md:min-w-[22rem] mx-auto bg-gradient-to-br from-customBlue/70 to-customGreen/70 rounded-lg">
      <div className="locationCardChild w-full py-2 md:py-5 px-2 md:px-6 flex items-center bg-customBlack rounded-lg">
        <div className="font-TTTravelsMedium text-white">
          <h4 className="text-xs md:text-base whitespace-nowrap">#{id}</h4>
          <h3 className="text-base md:text-2xl whitespace-nowrap">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Location;
