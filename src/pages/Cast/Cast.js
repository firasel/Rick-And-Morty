import React from "react";
import AllCast from "../../components/AllCast/AllCast";
import Navbar from "../../components/Navbar/Navbar";
import "./Cast.scss";

const Cast = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-customBlack">
      <div className="castBgStyle min-h-screen">
        <Navbar />
        <AllCast />
      </div>
    </div>
  );
};

export default Cast;
