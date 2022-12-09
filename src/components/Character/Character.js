import React from "react";
import "./Character.scss";

const Character = ({ characterData }) => {
  const { image, name } = characterData || {};

  return (
    <div className="characterCard max-w-fit max-h-fit mx-auto relative bg-gradient-to-br from-customGreen/70 to-customBlue/70 rounded-lg">
      <div className="characterCardChild h-full p-4 bg-customBlack rounded-lg">
        <img className="w-64 h-60 rounded mb-6" src={image} alt="character" />
        <h4 className="font-Poppins font-medium text-[10px] md:text-base text-white mb-2">
          {name}
        </h4>
      </div>
    </div>
  );
};

export default Character;
