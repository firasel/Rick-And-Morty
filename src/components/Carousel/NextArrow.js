import nextImg from "../../assets/images/next.png";

const NextArrow = (props) => {
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

export default NextArrow;
