import { motion } from "framer-motion";
import React from "react";
import bubbleImg from "../../assets/images/bubble.png";
import gunImg from "../../assets/images/Gun.png";
import pillImg from "../../assets/images/pill.png";
import playSvg from "../../assets/images/play.svg";
import portalImg from "../../assets/images/portal.png";

const Hero = () => {
  return (
    <div className="md:mt-24 mb-12 md:mb-20 container">
      <div className="mb-4 md:mb-10">
        <h1 className="md:max-w-fit mx-auto text-[40px] md:text-7xl lg:text-8xl xl:text-9xl font-TTTravelsExtraBold text-transparent bg-clip-text bg-gradient-to-r from-customGreen to-customBlue relative">
          <img
            className="absolute w-20 md:w-auto -top-7 md:-top-32 lg:-top-36 xl:-top-28 -left-10 md:-left-44 lg:-left-40"
            src={bubbleImg}
            alt="bubble"
          />
          <div className="flex items-end whitespace-nowrap">
            <span className="font-TTTravelsExtraBoldItalic text-white">
              The
            </span>
            <motion.img
              initial={{ y: 50, scale: 0, opacity: 0 }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
                transition: { delay: 0.1 },
              }}
              className="w-16 sm:w-32 md:w-48 lg:w-52 xl:w-auto px-2 md:px-8 pb-4 md:pb-3 xl:pb-5"
              src={portalImg}
              alt="portal"
            />
            Rick &
          </div>
          MORTY{" "}
          <span className="font-TTTravelsBoldItalic text-white">WIKI</span>
          <motion.img
            initial={{ scaleX: 0, originX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              originX: 1,
              opacity: 1,
              transition: { delay: 0.1 },
            }}
            className="hidden md:block absolute top-1 lg:-top-2 xl:top-4 -right-6 lg:-right-3"
            src={pillImg}
            alt="pill"
          />
          <motion.img
            animate={{
              rotate: [-3, 25, -3],
              opacity: [0.8, 1, 0.8],
              transition: {
                x: 50,
                repeat: Infinity,
                repeatDelay: 0.1,
                duration: 20,
              },
            }}
            className="w-52 md:w-auto absolute -bottom-32 md:-bottom-40 -right-28 md:-right-80 z-0"
            src={gunImg}
            alt="gun"
          />
        </h1>
      </div>
      <div className="md:max-w-fit md:flex flex-row-reverse items-center gap-16 mx-auto relative z-10">
        <p className="w-72 md:w-[26rem] text-customBlue font-TTTravelsDemiBold text-xs md:text-sm mb-8 md:mb-0">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
        <a href="https://youtu.be/KQ9Cgdsa9tc">
          <button className="flex items-center gap-2 bg-gradient-to-r from-customGreen to-customBlue text-white px-4 py-3 md:p-4 rounded-full font-TTTravelsDemiBold text-xs md:text-xl">
            <img className="w-4 md:w-6" src={playSvg} alt="play icon" /> Watch
            Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
