import React from "react";
import { useParams } from "react-router-dom";
import backgroundMinImg from "../../assets/images/Background-min.png";
import castDetailsBackgroundImg from "../../assets/images/CastDetailsBackground.png";
import castDetailsStarImg from "../../assets/images/CastDetailsStar.png";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import Navbar from "../../components/Navbar/Navbar";
import "./CastDetails.scss";

const CastDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-full overflow-hidden bg-customBlack">
      <div className="CastDetailsBgStyle min-h-screen relative">
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <CharacterDetails id={id} />
        </div>
        <img
          className="hidden md:block fixed top-[30%] px-[3%] z-0"
          src={castDetailsStarImg}
          alt="star"
        />
        {/* Background image start */}
        <img
          className="hidden md:block w-full h-full fixed top-0 left-0 z-0"
          src={castDetailsBackgroundImg}
          alt="background"
        />
        <img
          className="block md:hidden w-full h-full fixed top-0 left-0 z-0"
          src={backgroundMinImg}
          alt="background"
        />
        {/* Background image end */}
      </div>
    </div>
  );
};

export default CastDetails;
