import { useQuery } from "@tanstack/react-query";
import React from "react";
import Slider from "react-slick";
import getCharacters from "../../api/character/getCharacters";
import nextImg from "../../assets/images/next.png";
import Character from "../Character/Character";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  if (className?.includes("slick-disabled")) return null;
  return (
    <div
      className={className}
      style={{ ...style, width: "40px", height: "40px" }}
      onClick={onClick}
    >
      <img className="w-full" src={nextImg} alt="next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  if (className?.includes("slick-disabled")) return null;
  return (
    <div
      className={className}
      style={{ ...style, width: "40px", height: "40px", zIndex: "20" }}
      onClick={onClick}
    >
      <img className="w-full rotate-180" src={nextImg} alt="next" />
    </div>
  );
}

const MeetTheCast = () => {
  const { data, error, isError, isLoading } = useQuery(
    ["characters"],
    getCharacters
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex items-center justify-between text-white mb-6">
        <h1 className="font-TTTravelsMedium text-base md:text-2xl">
          Meet The Cast
        </h1>
        <button className="font-TTTravelsRegular text-lg border border-customGreen rounded-lg py-2 px-6">
          View All
        </button>
      </div>
      <Slider {...settings}>
        {data?.results?.map((characterData, i) => (
          <Character key={i} characterData={characterData} />
        ))}
      </Slider>
    </div>
  );
};

export default MeetTheCast;
