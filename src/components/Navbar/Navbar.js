import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="py-12">
      <Link to="/">
        <img className="mx-auto w-60" src={logoImg} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
