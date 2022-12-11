import React from "react";
import CastStarImg from "../../assets/images/CastStar.png";
import AllCast from "../../components/AllCast/AllCast";
import Navbar from "../../components/Navbar/Navbar";
import "./Cast.scss";

const Cast = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-customBlack">
      <div className="castBgStyle min-h-screen">
        <div className="relative z-10">
          <Navbar />
          <AllCast />
        </div>
        <img
          className="fixed top-[30%] px-[10%] z-0"
          src={CastStarImg}
          alt="star"
        />
      </div>
    </div>
  );
};

export default Cast;
