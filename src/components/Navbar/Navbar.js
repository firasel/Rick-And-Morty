import React from "react";
import logoImg from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div>
      <img className="mx-auto w-60 my-12" src={logoImg} alt="logo" />
    </div>
  );
};

export default Navbar;
