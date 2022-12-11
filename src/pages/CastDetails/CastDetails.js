import React from "react";
import { useParams } from "react-router-dom";
import CastStarImg from "../../assets/images/CastDetailsStar.png";
import CharacterDetails from "../../components/CharacterDetails/CharacterDetails";
import Navbar from "../../components/Navbar/Navbar";
import "./CastDetails.scss";

const CastDetails = () => {
  const { id } = useParams();

  return (
    <div className="w-full min-h-screen overflow-hidden bg-customBlack">
      <div className="CastDetailsBgStyle">
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <CharacterDetails id={id} />
        </div>
        <img
          className="fixed top-[30%] px-[3%] z-0"
          src={CastStarImg}
          alt="star"
        />
      </div>
    </div>
  );
};

export default CastDetails;
