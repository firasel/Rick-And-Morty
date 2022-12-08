import React from "react";
import Slider from "react-slick";
import nextImg from "../../assets/images/next.png";

const SampleNextArrow = (props) => {
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
};

const SamplePrevArrow = (props) => {
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
};

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
