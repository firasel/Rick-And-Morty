import React from "react";
import spiralImg from "../../assets/images/Spiral.png";
import starImg from "../../assets/images/Star.png";
import Episodes from "../../components/Episodes/Episodes";
import Hero from "../../components/Hero/Hero";
import Locations from "../../components/Locations/Locations";
import MeetTheCast from "../../components/MeetTheCast/MeetTheCast";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-customBlack">
      <div className="heroBgStyle">
        <Navbar />
        <Hero />
        <MeetTheCast />
      </div>
      <div className="homeSecondSection overflow-hidden">
        <div className="relative z-10">
          <Episodes />
          <Locations />
        </div>
        <img
          className="absolute top-0 right-0 z-0"
          src={spiralImg}
          alt="spiral"
        />
        <div className="flex justify-center">
          <img
            className="absolute top-[10%] z-0"
            src={starImg}
            alt="star"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
