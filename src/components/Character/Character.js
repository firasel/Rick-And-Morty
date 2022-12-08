import React from "react";
import boxImg from "../../assets/images/Box.png";

const Character = ({ characterData }) => {
  const { image, name } = characterData || {};

  return (
    <div className="max-w-fit max-h-fit mx-auto relative">
      <div className="p-4 relative z-20">
        <img className="w-64 h-60 rounded mb-6" src={image} alt="character" />
        <h4 className="font-Poppins font-medium text-[10px] md:text-base text-white mb-2">
          {name}
        </h4>
      </div>
      <img
        className="w-full h-full absolute top-0 left-0"
        src={boxImg}
        alt="bg"
      />
    </div>
  );
};

export default Character;
