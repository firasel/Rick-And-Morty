import React from "react";
import bubbleImg from "../../assets/images/bubble.png";
import gunImg from "../../assets/images/Gun.png";
import pillImg from "../../assets/images/pill.png";
import playSvg from "../../assets/images/play.svg";
import portalImg from "../../assets/images/portal.png";
import MeetTheCast from "../MeetTheCast/MeetTheCast";

const Hero = () => {
  return (
    <div className="my-36">
      <div className="mb-10">
        <h1 className="max-w-fit mx-auto text-[40px] md:text-9xl font-TTTravelsExtraBold text-transparent bg-clip-text bg-gradient-to-r from-customGreen to-customBlue relative">
          <img
            className="absolute -top-28 -left-40"
            src={bubbleImg}
            alt="bubble"
          />
          <div className="flex items-end">
            <span className="font-TTTravelsExtraBoldItalic text-white">
              The
            </span>
            <img className="w-auto px-8 pb-5" src={portalImg} alt="portal" />
            Rick &
          </div>
          MORTY{" "}
          <span className="font-TTTravelsBoldItalic text-white">WIKI</span>
          <img className="absolute top-4 -right-3" src={pillImg} alt="gun" />
          <img
            className="absolute -bottom-40 -right-80"
            src={gunImg}
            alt="gun"
          />
        </h1>
      </div>
      <div className="max-w-fit flex items-center gap-16 mx-auto mb-20">
        <button className="flex items-center gap-2 bg-gradient-to-r from-customGreen to-customBlue text-white p-4 rounded-full font-TTTravelsDemiBold text-xs md:text-xl">
          <img className="w-6" src={playSvg} alt="play icon" /> Watch Now
        </button>
        <p className="w-[26rem] text-customBlue font-TTTravelsDemiBold">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>
      <MeetTheCast />
    </div>
  );
};

export default Hero;
