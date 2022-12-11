import React from "react";
import { Link } from "react-router-dom";
import "./Character.scss";

const Character = ({ characterData, homeActive }) => {
  const { image, name, id } = characterData || {};

  return (
    <Link to={`/cast/${id}`}>
      <div className="characterCard w-full max-h-fit mx-0 relative bg-gradient-to-br from-customGreen/70 to-customBlue/70 rounded-lg flex items-center justify-center">
        <div className="characterCardChild w-full h-full p-2 md:p-4 bg-customBlack rounded-lg">
          <img
            className={`${
              homeActive ? "w-32" : "w-full"
            } md:w-full aspect-square rounded mb-3 md:mb-6`}
            src={image}
            alt="character"
          />
          <h4 className="font-Poppins font-medium text-[10px] md:text-base text-white mb-0.5 md:mb-2">
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Character;
