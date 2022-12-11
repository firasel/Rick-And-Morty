import React from "react";
import { Link } from "react-router-dom";
import "./Character.scss";

const Character = ({ characterData }) => {
  const { image, name, id } = characterData || {};

  return (
    <Link to={`/cast/${id}`}>
      <div className="characterCard w-full max-h-fit mx-0 relative bg-gradient-to-br from-customGreen/70 to-customBlue/70 rounded-lg flex items-center justify-center">
        <div className="characterCardChild h-full p-4 bg-customBlack rounded-lg">
          <img className="min-w-60 w-full aspect-square rounded mb-6" src={image} alt="character" />
          <h4 className="font-Poppins font-medium text-[10px] md:text-base text-white mb-2">
            {name}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Character;
