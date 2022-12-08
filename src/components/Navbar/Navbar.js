import React from "react";
import logoImg from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="py-12">
      <img className="mx-auto w-60" src={logoImg} alt="logo" />
    </div>
  );
};

export default Navbar;
