import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="py-10 md:py-14">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.1 },
        }}
      >
        <Link to="/">
          <img className="mx-auto w-36 md:w-60" src={logoImg} alt="logo" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
