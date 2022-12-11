import React from "react";
import BackgroundMinImg from "../../assets/images/Background-min.png";
import BackgroundImg from "../../assets/images/Background.png";
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
      <div className="heroBgStyle relative">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <MeetTheCast />
        </div>
        <img
          className="hidden md:block w-full h-full absolute top-0 left-0 z-0"
          src={BackgroundImg}
          alt="background"
        />
      </div>
      <div className="homeSecondSection overflow-hidden">
        <div className="relative z-10">
          <Episodes />
          <Locations />
        </div>
        <img
          className="hidden md:block absolute top-0 right-0 z-0"
          src={spiralImg}
          alt="spiral"
        />
        <div className="hidden md:flex justify-center">
          <img className="absolute top-[10%] z-0" src={starImg} alt="star" />
        </div>
      </div>
      <img
        className="block md:hidden w-full h-full fixed top-0 left-0 z-0"
        src={BackgroundMinImg}
        alt="background"
      />
    </div>
  );
};

export default Home;
