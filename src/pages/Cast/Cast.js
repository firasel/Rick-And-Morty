import React from "react";
import BackgroundMinImg from "../../assets/images/Background-min.png";
import CastBackgroundImg from "../../assets/images/CastBackground.png";
import CastStarImg from "../../assets/images/CastStar.png";
import AllCast from "../../components/AllCast/AllCast";
import Navbar from "../../components/Navbar/Navbar";
import "./Cast.scss";

const Cast = () => {
  return (
    <div className="w-full overflow-hidden bg-customBlack">
      <div className="castBgStyle min-h-screen relative">
        <div className="relative z-10">
          <Navbar />
          <AllCast />
        </div>
        <img
          className="hidden md:block fixed top-[30%] px-[10%] z-0"
          src={CastStarImg}
          alt="star"
        />
        <img
          className="hidden md:block w-full h-full fixed top-0 left-0 z-0"
          src={CastBackgroundImg}
          alt="background"
        />
        <img
          className="block md:hidden w-full h-full fixed top-0 left-0 z-0"
          src={BackgroundMinImg}
          alt="background"
        />
      </div>
    </div>
  );
};

export default Cast;
