import nextImg from "../../assets/images/next.png";

const PrevArrow = (props) => {
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

export default PrevArrow;
